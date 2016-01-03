import {SELECT_HERO, CHANGE_NAME} from '../constants/ActionTypes';

const initialState = {
    heroes: [
      { "id": 11, "name": "Mr. Nice" },
      { "id": 12, "name": "Narco" },
      { "id": 13, "name": "Bombasto" },
      { "id": 14, "name": "Celeritas" },
      { "id": 15, "name": "Magneta" },
      { "id": 16, "name": "RubberMan" },
      { "id": 17, "name": "Dynama" },
      { "id": 18, "name": "Dr IQ" },
      { "id": 19, "name": "Magma" },
      { "id": 20, "name": "Tornado" }
  ],
  selectedHero: null,
  title: 'Tour of Heroes'
};

//IMPORTANT: Note that with Redux, state should NEVER be changed.
//State is considered immutable. Instead,
//create a copy of the state passed and set new values on the copy.
//Note that I'm using Object.assign to create a copy of current state
//and update values on the copy.
export default function heroAppState(state = initialState, action) {
  let newState = null;

	switch (action.type) {
    case SELECT_HERO:
      newState = Object.assign({}, state);
      newState.selectedHero = state.heroes.find(hero =>
        hero.id === action.id
      );
      return newState;
    case CHANGE_NAME:
      newState = Object.assign({}, state);
      newState.heroes = newState.heroes.map(hero => {
          if (hero.id === action.id) {
            hero.name = action.newName;
          }
          return hero;
        }
      );
      return newState;
    default:
			return state;
	}
}
