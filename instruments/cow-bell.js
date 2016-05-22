// this from http://outputchannel.com/post/tr-808-cowbell-web-audio/
// hope outputchannel will publish as a module soon
module.exports = function(context) {
  return function() {
    var duration = 1.2;
    var osc1 = context.createOscillator();
    var osc2 = context.createOscillator();
    osc1.type = "square";
    osc2.type = "square";
    osc1.frequency.value = 800;
    osc2.frequency.value = 540;
    var gainNode = context.createGain();
    var filter = context.createBiquadFilter();
    filter.type = "bandpass";
    osc1.connect(gainNode);
    osc2.connect(gainNode);
    gainNode.connect(filter)
      filter.start = function(when) {
        gainNode.gain.setValueAtTime(0.2, when);
        gainNode.gain.exponentialRampToValueAtTime(0.00001, when + duration);
        osc1.start(when);
        osc2.start(when);
        osc1.stop(when + duration);
        osc2.stop(when + duration);
      };
    return filter;
  };
};


