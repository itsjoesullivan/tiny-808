const initialState = {
  tempo: 120,
  swing: 0,
  pattern: [
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ],
    [
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
    ]
  ],
  sounds: [
    {
      modes: [
        {
          name: "Accent",
          shortName: "AC"
        }
      ],
      currentModeIndex: 0,
      properties: [
        {
          name: "level",
          value: 100
        }
      ]
    },
    {
      modes: [
        {
          name: "Bass Drum",
          shortName: "BD"
        }
      ],
      currentModeIndex: 0,
      properties: [
        {
          name: "level",
          value: 100
        },
        {
          name: "tone",
          value: 64
        },
        {
          name: "decay",
          value: 20
        }
      ]
    },
    {
      modes: [
        {
          name: "Snare Drum",
          shortName: "SD"
        }
      ],
      currentModeIndex: 0,
      properties: [
        {
          name: "level",
          value: 64
        },
        {
          name: "tone",
          value: 100
        },
        {
          name: "snappy",
          value: 100
        }
      ]
    },
    {
      modes: [
        {
          name: "Low Conga",
          shortName: "LC"
        },
        {
          name: "Low Tom",
          shortName: "LT"
        }
      ],
      currentModeIndex: 1,
      properties: [
        {
          name: "level",
          value: 100
        },
        {
          name: "tuning",
          value: 64
        }
      ]
    },
    {
      modes: [
        {
          name: "Mid Conga",
          shortName: "MC"
        },
        {
          name: "Mid Tom",
          shortName: "MT"
        }
      ],
      currentModeIndex: 1,
      properties: [
        {
          name: "level",
          value: 100
        },
        {
          name: "tuning",
          value: 64
        }
      ]
    },
    {
      modes: [
        {
          name: "Hi Conga",
          shortName: "HC"
        },
        {
          name: "Hi Tom",
          shortName: "HT"
        }
      ],
      currentModeIndex: 1,
      properties: [
        {
          name: "level",
          value: 100
        },
        {
          name: "tuning",
          value: 64
        }
      ]
    },
    {
      modes: [
        {
          name: "Claves",
          shortName: "CL"
        },
        {
          name: "Rim Shot",
          shortName: "RS"
        }
      ],
      currentModeIndex: 1,
      properties: [
        {
          name: "level",
          value: 100
        }
      ]
    },
    {
      modes: [
        {
          name: "Maracas",
          shortName: "MA"
        },
        {
          name: "Hand Clap",
          shortName: "CP"
        }
      ],
      currentModeIndex: 1,
      properties: [
        {
          name: "level",
          value: 64
        }
      ]
    },
    {
      modes: [
        {
          name: "Cow Bell",
          shortName: "CB"
        }
      ],
      currentModeIndex: 0,
      properties: [
        {
          name: "level",
          value: 100
        }
      ]
    },
    {
      modes: [
        {
          name: "Cymbal",
          shortName: "CY"
        }
      ],
      currentModeIndex: 0,
      properties: [
        {
          name: "level",
          value: 100
        },
        {
          name: "tone",
          value: 100
        },
        {
          name: "decay",
          value: 100
        }
      ]
    },
    {
      modes: [
        {
          name: "Open HiHat",
          shortName: "OH"
        }
      ],
      currentModeIndex: 0,
      properties: [
        {
          name: "level",
          value: 100
        },
        {
          name: "decay",
          value: 100
        }
      ]
    },
    {
      modes: [
        {
          name: "Closed HiHat",
          shortName: "CH"
        }
      ],
      currentModeIndex: 0,
      properties: [
        {
          name: "level",
          value: 100
        }
      ]
    }
  ],
  activeSoundIndex: 1,
  activePatternSection: 0,
  playing: false,
  patternMode: "A"
}

var resetState = JSON.parse(JSON.stringify(initialState));

var savedState;
try {
  savedState = JSON.parse(decodeURIComponent(document.location.hash.slice(1)));
  savedState.cursor = 0;
  savedState.playing = false;
} catch (e) {
  // may not fit
  savedState = false;
}

export default function todos(state = (savedState || initialState), action) {
  switch (action.type) {
    case "CHANGE_TEMPO":
      return Object.assign({}, state, {tempo: action.tempo});
    case "CHANGE_SWING":
      return Object.assign({}, state, {swing: action.swing});
    case "TOGGLE_PLAY":
      var nowPlaying = !state.playing;
      var obj = {
        playing: nowPlaying
      }
      if (!nowPlaying && state.patternMode === "AB") {
        obj.activePatternSection = 0;
      }
      return Object.assign({}, state, obj);
    case "CHANGE_ACTIVE_SOUND":
      return Object.assign({}, state, {activeSoundIndex: action.index});
    case "CHANGE_SOUND_PROPERTY":
      var newState = Object.assign({}, state);
      newState.sounds[newState.activeSoundIndex].properties[action.propertyIndex].value = action.value;
      return newState;
    case "PATTERN_CHANGE":
      var newState = Object.assign({}, state);

      var pattern = newState.pattern[newState.activeSoundIndex][newState.activePatternSection];
      if (pattern[action.index] === 0) {
        pattern[action.index] = 1;
      } else {
        pattern[action.index] = 0;
      }
      return newState;
    case "CHANGE_PATTERN_MODE":
      var newState = Object.assign({}, state, { patternMode: action.mode });
      if (newState.playing) {
        if (action.mode === "B" && newState.activePatternSection !== 1) {
          newState.targetPatternSection = 1;
        } else if (action.mode === "A" && newState.activePatternSection !== 0) {
          newState.targetPatternSection = 0;
        }
      } else {
        if (action.mode === "B") {
          newState.activePatternSection = 1;
        } else if (action.mode === "A") {
          newState.activePatternSection = 0;
        }
      }
      return newState;
    case "SET_CURSOR":
      var newState = Object.assign({}, state, { cursor: action.index });
      if (action.index === 0) {
        if (typeof state.targetPatternSection === 'number') {
          if (state.patternMode !== "AB") {
            newState.activePatternSection = state.targetPatternSection;
          }
          delete newState.targetPatternSection;
        }
      }
      return newState;
    case "SET_ACTIVE_PATTERN_SECTION_INDEX":
      var newState = Object.assign({}, state, { activePatternSection: action.index });
      return newState;
    case "CHANGE_SOUND_MODE":
      var newState = Object.assign({}, state);
      var currentSound = newState.sounds[newState.activeSoundIndex];
      currentSound.currentModeIndex = action.index;
      return newState;
    case "RESET":
      return JSON.parse(JSON.stringify(resetState));
    case "COPY_PATTERN":
      var newState = Object.assign({}, state);
      newState.copiedPattern = state.pattern.map(function(soundPatternSections) {
        return soundPatternSections[action.index];
      });
      newState.copiedPattern = JSON.parse(JSON.stringify(newState.copiedPattern));
      return newState;
    case "PASTE_PATTERN_TO_TARGET":
      var newState = Object.assign({}, state);
      if (newState.copiedPattern) {
        newState.pattern.forEach(function(instrumentsPatterns, i) {
          instrumentsPatterns[action.index] = newState.copiedPattern[i];
        });

      }
      return newState;
    case "CLEAR_PATTERN":
      var newState = Object.assign({}, state);
      newState.pattern.forEach(function(instrumentsPatterns, i) {
        instrumentsPatterns[action.index] = instrumentsPatterns[action.index].map(function() { return 0; });
      });

    case "COPY_INSTRUMENT_PATTERN":
      var newState = Object.assign({}, state);
      newState.copiedInstrumentPattern = state.pattern[state.activeSoundIndex][action.index];
      newState.copiedInstrumentPattern = JSON.parse(JSON.stringify(newState.copiedInstrumentPattern));
      return newState;
    case "PASTE_INSTRUMENT_PATTERN_TO_TARGET":
      var newState = Object.assign({}, state);
      if (newState.copiedInstrumentPattern) {
        newState.pattern[state.activeSoundIndex][action.index] = newState.copiedInstrumentPattern;
      }
      return newState;
    case "CLEAR_INSTRUMENT_PATTERN":
      var newState = Object.assign({}, state);
      var toChange = newState.pattern[state.activeSoundIndex][action.index];
      newState.pattern[state.activeSoundIndex][action.index] = toChange.map(function() {
        return 0;
      });
      return newState;
    case 'GENERAL_KEYDOWN':
      var newState = Object.assign({}, state);
      var index = false;
      switch (action.which) {
        case 81: // q
          index = 0;
          break;
        case 65: // a
          index = 1;
          break;
        case 87: // w
          index = 6;
          break;
        case 83: // s
          index = 2;
          break;
        case 69: // e
          index = 7;
          break;
        case 68: // d
          index = 2;
          break;
        case 70: // f
          index = 3;
          break;
        case 71: // d
          index = 4;
          break;
        case 72: // d
          index = 5;
          break;
        case 84: // t
          index = 11;
          break;
        case 85: // u
          index = 10;
          break;
        case 79: // o
          index = 9;
          break;
        case 80: // p
          index = 9;
          break;
        case 82: // r
          index = 8;
          break;
      }
      if (typeof index === 'number') {
        if (state.playing) {
          // Seems like a bad practice to call this here.
          window.oneShot(index, state);
          if (action.shift) {
            // Add
            var currentVal = newState.pattern[index][state.activePatternSection][state.cursor];
            var newVal;
            if (currentVal === 1) {
              newVal = 0;
            } else {
              newVal = 1;
            }
            newState.pattern[index][state.activePatternSection][state.cursor] = newVal;
          }
          newState.activeSoundIndex = index;
        } else {
          if (action.shift) {
            newState.activeSoundIndex = index;
          } else {
            // Seems like a bad practice to call this here.
            window.oneShot(index, state);
          }
        }
      }
      return newState;
      break;
    default:
      return state;
  }
}
