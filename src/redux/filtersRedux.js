/* SELECTORS */

export const getAllFilters = ({ filters }) => filters;

/* ACTIONS */

// action name creator
const reducerName = 'filters';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const CHANGE_PHRASE = createActionName('CHANGE_PHRASE');
// TODO - add other action types

export const CHANGE_DURATION = createActionName('CHANGE_DURATION');
export const ADD_TAG = createActionName('ADD_TAG');

// action creators
export const changeSearchPhrase = payload => ({ payload, type: CHANGE_PHRASE });
// TODO - add other action creators

export const changeDuration = (payload, value) => ({ payload, value, type: CHANGE_DURATION });
export const addTag = payload => ({ payload, type: ADD_TAG });

// reducer
export default function reducer(statePart = [], action = {}) {
  console.log('statePart', statePart);
  switch (action.type) {
    case CHANGE_PHRASE:
      return {
        ...statePart,
        searchPhrase: action.payload,
      };
    case CHANGE_DURATION:
      if (action.payload === 'from') {
        return {
          ...statePart,
          duration: {
            ...statePart.duration,
            from: action.value,
          },
        };
      } else {
        return {
          ...statePart,
          duration: {
            ...statePart.duration,
            to: action.value,
          },
        };
      }
    case ADD_TAG:
      return {
        ...statePart,
        tags: [
          ...statePart.tags,
          action.payload,
        ],
      };
    // TODO - handle other action types
    default:
      return statePart;
  }
}
