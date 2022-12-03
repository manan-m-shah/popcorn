// create app context and provider
import React, { createContext, useEffect, useReducer, useState } from 'react'
import { getAccount } from '../library/web3Provider'
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
        return account
    }

    useEffect(() => {
        const account = getCurrentAccount()
        dispatch({
            type: ActionKind.SET_ACCOUNT,
            payload: account,
        })

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
