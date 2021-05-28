import { Person } from '../../typedefs'
import * as type from '../types'

interface State {
    people: Person[];
    selectedPerson: Number;
}

const initialState: State = {
    people: [],
    selectedPerson: -1
}

export const postReducer = (state = initialState, action) => {
    switch (action.type) {
        case type.RECEIVE_PEOPLE:
            return {
                people: action.payload,
                selectedPerson: -1
            }
        case type.SELECT_PERSON:
            return {
                ...state,
                selectedPerson: action.payload
            }
        case type.LOAD_USERS_LOADING:
            return {
                ...state
            }
        default:
            return state
    }
}

