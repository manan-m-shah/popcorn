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
    stakeModal: boolean
}

export enum ActionKind {
    SET_ACCOUNT = "SET_ACCOUNT",
    SET_MOVIES = "SET_MOVIES",
    STAKE_MODAL = "STAKE_MODAL",
}

type Action = {
    type: ActionKind
    payload: any
}

export type { State, Action }
