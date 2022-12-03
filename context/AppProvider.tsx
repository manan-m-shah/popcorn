// create app context and provider
import React, { createContext, useEffect, useReducer, useState } from 'react'
import { getAccount } from '../library/web3provider'
import { Action, ActionKind, State } from '../types/Context'
import AppContext from './AppContext'
import initialState from './initialState'
import reducer from './reducer'

const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState)

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

    useEffect(() => {
        getCurrentAccount()

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
