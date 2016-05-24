
var lastCursorTickAt = false;
var lastCursor = 0;
var context = new (window.AudioContext || window.webkitAudioContext)();

if (/iphone|ipad/i.test(navigator.userAgent)) {
  var wai = require('web-audio-ios');
  wai(document.body, context, function (unlocked) { });
}

var voltageBuffer = context.createBuffer(1, 2, 44100);
var data = voltageBuffer.getChannelData(0);
data[0] = 1;
data[1] = 1;
var voltage = context.createBufferSource();
voltage.buffer = voltageBuffer;
voltage.start(0);

var animationFrameRequests = [];

var audioListener = module.exports = function(component,
    setCursor,
    setActivePatternSection) {

  animationFrameRequests.forEach(function(req) {
    cancelAnimationFrame(req);
  });
  animationFrameRequests = [];

  var state = component.props.machine;
  if (state.playing) {
    go(component.props.machine, setCursor, setActivePatternSection);
    animationFrameRequests.push(requestAnimationFrame(
      audioListener.bind(null, component, setCursor, setActivePatternSection)
    ));
  } else {
    if (state.cursor !== 0) {
      setCursor(0);
    }
    lastCursorTickAt = false;
  }
};


//var startedAt = false;

function isTimeForCursorTick(tempo, lastCursorTickAt, currentTime) {
  var sinceLastTick = currentTime - lastCursorTickAt;
  if (60 / (4 * tempo) < sinceLastTick) {
    return true;
  } else {
    return false;
  }
}

function go(state, setCursor, setActivePatternSection) {
  if (!lastCursorTickAt) {
    lastCursor = 0;
    lastCursorTickAt = context.currentTime;
    setCursor(lastCursor);
    scheduleTick(state);
  } else {
    var newState = Object.assign({}, state);
    if (isTimeForCursorTick(state.tempo, lastCursorTickAt, context.currentTime)) {
      var tickLength = 60 / (4 * state.tempo);
      lastCursorTickAt += tickLength;
      //lastCursorTickAt = context.currentTime;
      if (state.patternMode === "AB") {
        if (lastCursor === 15) {
          if (state.activePatternSection === 0) {
            var newSection = 1;
          } else {
            var newSection = 0;
          }
          setActivePatternSection(newSection);
          newState.activePatternSection = newSection;
        }
      }
      lastCursor += 1;
      lastCursor = lastCursor % 16;
      setCursor(lastCursor);
      newState.cursor = lastCursor;
      scheduleTick(newState);
    }
  }
}

var Snare = require('../808/snare/index');
var Kick8 = require('../808/kick-eight/index');
var HiHat = require('../808/hi-hat/index');
var Conga = require('../808/conga/index');
var RimShot = require('../808/rim-shot/index');
var Clap = require('../808/clappy/index');
var CowBell = require('../808/cow-bell/index');
var Maracas = require('../808/maracas/index');
var Claves = require('../808/claves/index');

var hiHat = HiHat(context);

var sources = [
  [null], // Accent
  [Kick8(context)], // Bass Drum
  [Snare(context)], // Snare
  [Conga(context).bind(null, { frequency: 196 }), Conga(context).bind(null, { frequency: 98 })], // LC/LT
  [Conga(context).bind(null, { frequency: 294 }), Conga(context).bind(null, { frequency: 147 })], // MC/MT
  [Conga(context).bind(null, { frequency: 440 }), Conga(context).bind(null, { frequency: 220 })], // HC/HT
  [Claves(context), RimShot(context)], // CL/RS
  [Maracas(context), Clap(context)], // MA/CP
  [CowBell(context)], // CB
  [null], // CY
  [hiHat.bind(null, true)], // OH
  [hiHat.bind(null, false)] // CH
];

function scheduleTick(state) {
  state.sounds.forEach(function(sound, i) {
    var accent = state.pattern[0][state.activePatternSection][state.cursor] === 1;
    if (accent) {
      var accentValue = state.sounds[0].properties[0].value;
1}
    if (i === 0) {
      return;
    }
    var pattern = state.pattern[i][state.activePatternSection];
    if (pattern[state.cursor] !== 0) {
      var factory = sources[i][sound.currentModeIndex];
      if (!factory) {
        return;
      }
      var node = factory();
      var name = sound.modes[sound.currentModeIndex].shortName;
      sound.properties.forEach(function(property) {
        if (/^sd$/i.test(name)) {
          if (property.name !== "level" && node[property.name] instanceof window.AudioParam) {
            node[property.name].value = property.value / 127;;
          }
        } else if (/^(l|m|h)(c|t)$/i.test(name)) {
          // toms
          node.frequency *= 1 + (sound.properties.filter(function(prop) { return prop.name === "tuning" })[0].value - 64) / 127;
        } else if (/^oh$/i.test(name)) {
          var decay = sound.properties.filter(function(prop) { return prop.name === "decay" })[0].value;
          node.duration *= 1 + (decay - 100) / 127;
        } else if (/^bd$/i.test(name)) {
          var decay = sound.properties.filter(function(prop) { return prop.name === "decay" })[0].value;
          var tone = sound.properties.filter(function(prop) { return prop.name === "tone" })[0].value;
          node.decay = decay;
          node.tone = tone;
        }
      });

      var level = sound.properties.filter(function(property) {
        return property.name === "level";
      })[0].value / 127;

      if (accent) {
        level *= 1 + (accentValue / 127);
      }

      var gainNode = context.createGain();
      gainNode.gain.value = level;

      node.connect(gainNode);
      gainNode.connect(context.destination);

      node.start(lastCursorTickAt + 0.05);


    }
  });
}
