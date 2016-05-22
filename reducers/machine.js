import { CHANGE_PATTERN_MODE, CHANGE_SOUND_PROPERTY, CHANGE_ACTIVE_SOUND, TOGGLE_PLAY, CHANGE_TEMPO, CHANGE_SWING, PATTERN_CHANGE } from '../constants/ActionTypes'

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
          value: 100
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
          value: 100
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

export default function todos(state = initialState, action) {
  switch (action.type) {
    case CHANGE_TEMPO:
      return Object.assign({}, state, {tempo: action.tempo});
      break;
    case CHANGE_SWING:
      return Object.assign({}, state, {swing: action.swing});
      break;
    case TOGGLE_PLAY:
      return Object.assign({}, state, {playing: !state.playing});
      break;
    case CHANGE_ACTIVE_SOUND:
      return Object.assign({}, state, {activeSoundIndex: action.index});
      break;
    case CHANGE_SOUND_PROPERTY:
      var newState = Object.assign({}, state);
      newState.sounds[newState.activeSoundIndex].properties[action.propertyIndex].value = action.value;
    case PATTERN_CHANGE:
      var newState = Object.assign({}, state);

      var pattern = newState.pattern[newState.activeSoundIndex][newState.activePatternSection];
      if (pattern[action.index] === 0) {
        pattern[action.index] = 1;
      } else {
        pattern[action.index] = 0;
      }
      return newState;
      break;
    case CHANGE_PATTERN_MODE:
      return Object.assign({}, state, { patternMode: action.mode });
      break;
    case "SET_CURSOR":
      return Object.assign({}, state, { cursor: action.index });
      break;
    case "SET_ACTIVE_PATTERN_SECTION_INDEX":
      return Object.assign({}, state, { activePatternSection: action.index });
      break;
    case "CHANGE_SOUND_MODE":
      var newState = Object.assign({}, state);
      var currentSound = newState.sounds[newState.activeSoundIndex];
      currentSound.currentModeIndex = action.index;
      return newState;
      break;
    default:
      return state;
      break;
  }
}
