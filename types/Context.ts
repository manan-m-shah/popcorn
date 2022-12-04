type Movie = {
    name: string,
    description: string,
    image: string,
    playbackId: string,
    creatorAddress: string,
}

type State = {
    account: string | null,
    movies: Movie[] | null,
    stakeModal: boolean,
    addMovie: boolean,
}

export enum ActionKind {
    SET_ACCOUNT = "SET_ACCOUNT",
    SET_MOVIES = "SET_MOVIES",
    STAKE_MODAL = "STAKE_MODAL",
    ADD_MOVIE = "ADD_MOVIE",
}

type Action = {
    type: ActionKind
    payload: any
}

export type { State, Action }
