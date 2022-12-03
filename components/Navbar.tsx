import React, { useState, useEffect, useContext } from "react"
import { getAccount } from "../library/web3Provider"
import Web3 from 'web3'
import AppContext from "../context/AppContext"

const titles = ["Home", "Live", "My Videos", "Settings"]

const Navbar = () => {
    const { state, dispatch } = useContext(AppContext)

    const [selected, setSelected] = useState(0)
    const account = state.account
    console.log(account)

    return (
        <div className="flex flex-row justify-between p-4 items-center">
            <h1 className="text-white font-semibold text-xl">Popcorn</h1>
            <div className="flex gap-x-6">
                {titles.map((title, index) => (
                    <div
                        key={index}
                        className={
                            "rounded-2xl p-4 " +
                            (index === selected
                                ? "text-zinc-100"
                                : "text-zinc-400")
                        }
                    >
                        <h1>{title}</h1>
                    </div>
                ))}
            </div>
            <div>
                <button className="bg-violet-600 hover:bg-violet-500 p-3 text-white rounded-2xl">
                    <h1>
                        {account ? "Connected" : "Connect"}
                    </h1>
                </button>
            </div>
        </div>
    )
}

export default Navbar
