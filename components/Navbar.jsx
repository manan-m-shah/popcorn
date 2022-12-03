import React, { useState, useEffect } from "react"
import { getAccount } from "../library/web3Provider"
import Web3 from 'web3'

const titles = ["Home", "Live", "My Videos", "Settings"]

const Navbar = () => {
    const [selected, setSelected] = useState(0)
    const [account, setAccount] = useState(
        localStorage.getItem("account") ? localStorage.getItem("account") : ""
    )
    useEffect(() => {
        
        (async () => {
            // await initWeb3();
            window.web3x = new Web3(window.ethereum)
            if (!localStorage.getItem("isWeb3Connected")) {
                getAccount().then((account) => {
                    setAccount((prevAcc) => {
                        console.log("prevAcc", prevAcc)
                        console.log("newAcc:", account)
                        return account
                    })
                })
            }
        })()
    }, [])

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
                   {account ? {account.length != 0 ? (
                        `${account.slice(0, 4)}...${account.slice(
                            account.length - 4
                        )}`
                    ) : (
                        <div>"Connect"</div>
                    )}:<div>"Connect"</div>}
                </button>
            </div>
        </div>
    )
}

export default Navbar
