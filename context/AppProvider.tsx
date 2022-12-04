// create app context and provider
import React, { createContext, useEffect, useReducer, useState } from 'react'
import { getAccount, getMovies, initWeb3 } from '../library/web3provider'
import { Action, ActionKind, State } from '../types/Context'
import AppContext from './AppContext'
import initialState from './initialState'
import reducer from './reducer'

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    initWeb3()
    // @ts-ignore
    window.ethereum.on('accountsChanged', function (accounts: any[]) {
        const account = accounts[0]
        console.log("current account", account)
        dispatch({
            type: ActionKind.SET_ACCOUNT,
            payload: account,
        })
    })

    const getCurrentAccount = async () => {
        const account = await getAccount()
        dispatch({
            type: ActionKind.SET_ACCOUNT,
            payload: account,
        })
    }

    const getAllMovies = async () => {
        const movies = await getMovies()
        dispatch({
            type: ActionKind.SET_MOVIES,
            payload: movies
        })
    }

    useEffect(() => {
        getCurrentAccount()
        getAllMovies()

        // return () => {

        // }
    }, [])


    return (
        <AppContext.Provider value={{ state, dispatch } as { state: State, dispatch: React.Dispatch<Action> }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppProvider
