import { Action, ActionKind, State } from "../types/Context"

const reducer = (state: State, action: Action): State => {
    switch (action.type) {
        case ActionKind.SET_ACCOUNT:
            return {
                ...state,
                account: action.payload
            }
        case ActionKind.SET_MOVIES:
            return {
                ...state,
                movies: action.payload
            }
        case ActionKind.STAKE_MODAL:
            console.log(action.payload)
            return {
                ...state,
                stakeModal: action.payload
            }
        case ActionKind.ADD_MOVIE:
            return {
                ...state,
                addMovie: action.payload
            }
        default:
            return state
    }
}

export default reducer