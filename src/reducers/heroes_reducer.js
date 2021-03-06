import { ADD_CHARACTER, REMOVE_CHARACTER } from '../actions';
import { createCharacter } from './helpers';

function heroes(state = [], action) {
    switch (action.type) {
        case ADD_CHARACTER:
            return [...state, createCharacter(action.id)];
        case REMOVE_CHARACTER:
            return state.filter(hero=>hero.id !== action.id)
        default:
            return state;
    }
}

export default heroes;