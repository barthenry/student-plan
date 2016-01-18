import { mapValues } from 'lodash';

export const initialState = {
  plan: {
    privateId: '',
    publicId: '',
    isEditable: true
  },

  courses: {
    byIDs: {
      1235: {
        id: 1235,
        name: 'Nazwa kursu 1',
        form: 'Wykład2',
        groups: {
          byIDs: {
            'AKZ023231a': {
              id: 'AKZ023231a',
              teacher: 'Jakiś Nauczyciel 1',
              day: 'cz',
              time: '15:15',
              place: 'B-4 326',
              isChosen: false,
              occurance: 'odd'
            },
            'AKZ023231b': {
              id: 'AKZ023231b',
              teacher: 'Jakiś Nauczyciel 1',
              day: 'pn',
              time: '13:15',
              place: 'B-4 326',
              isChosen: false
            }
          },
          length: 2
        },
        isFilterEnabled: true,
        isGroupChosen: false,
        isSelected: false
      },
      2122: {
        id: 2122,
        name: 'Nazwa kursu 122',
        form: 'Seminarium',
        groups: {
          byIDs: {
            'AKZ023232a': {
              id: 'AKZ023232a',
              teacher: 'Jakiś Nauczyciel 2',
              day: 'cz',
              time: '11:15',
              place: 'C-4 22',
              isChosen: false
            },
            'AKZ023232b': {
              id: 'AKZ023232b',
              teacher: 'Jakiś Nauczyciel 2',
              day: 'wt',
              time: '11:15',
              place: 'B-1 26',
              isChosen: false
            },
            'AKZ023232c': {
              id: 'AKZ023232c',
              teacher: 'Jakiś Nauczyciel 2',
              day: 'pn',
              time: '9:15',
              place: 'B-1 26',
              isChosen: false
            }
          },
          length: 3
        },
        isFilterEnabled: false,
        isGroupChosen: false,
        isSelected: false
      }
    }
  }
};

export function combineReducers(reducers) {
  return (state, action) => {
    mapValues(state, (partialState, stateKey) => reducers[stateKey](partialState, action));
  };
}

export function createStore(reducer, initialState = {}, events) {
  let state = initialState;

  events.subscribe('dispatch', (action) => {
    reducer(state, action);
    events.publish('newState');
  });

  return {
    getState: function() {
      return state;
    }
  };
}


// @inject(EventAggregator)
// export class Store {
//   constructor(events) {
//     this.events = events;
//   }

//   getState() {
//     return this.state;
//   }
// }
