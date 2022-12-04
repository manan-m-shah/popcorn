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
    activeMovie: Movie | null,
}

export enum ActionKind {
    SET_ACCOUNT = "SET_ACCOUNT",
    SET_MOVIES = "SET_MOVIES",
    STAKE_MODAL = "STAKE_MODAL",
    ADD_MOVIE = "ADD_MOVIE",
    ACTIVE_MOVIE = "ACTIVE_MOVIE",
}

type Action = {
    type: ActionKind
    payload: any
}

export type { State, Action }
