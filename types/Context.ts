type Movie = {
    name: string,
    description: string,
    image: string,
    playbackId: string,
    creatorAddress: string,
}

type State = {
    account: string | null,
    movies: Movie[] | null
}

export enum ActionKind {
    SET_ACCOUNT = "SET_ACCOUNT",
    SET_MOVIES = "SET_MOVIES"
}

type Action = {
    type: ActionKind
    payload: any
}

export type { State, Action }
