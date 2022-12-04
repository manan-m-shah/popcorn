import Web3 from "web3";
 
let selectedAccount
let instance


 
import abiJson from "./abi.json"
const abi = abiJson.abi

const anything = async () => {
    instance = await this.deployer()
    let staking = await instance.methods.staking().call()
}


const address = "0xB490DaF046fEc11D6276f26765460DD80c1B01E2"
 
export async function initWeb3() {
    if (typeof window.ethereum == "undefined") {
        console.log("no metamask")
    }
    window.web3x = new Web3(window.ethereum);
    return new Promise((r) => setTimeout(r, 2000))
}

 //get account
export async function getAccount() {
    try {
        // @ts-ignore
        let accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        })
        selectedAccount = await accounts[0]
        console.log("selected Account: ", selectedAccount)
        return selectedAccount
    } catch (e) {
        console.log("couldn't connect to mm accounts", e)
    }
}
 
// async function createEventListener(getLastBeerInfo) {
//     console.log("creating event listener")
//     const contract = new window.web3x.eth.Contract(contractABI, contractAddress);
//     contract.once('CreateRandNft', {
//     }, function(error, event){
//         console.log(event);
//         console.log(error)
//         let tokenId = event.returnValues.tokenId;
//         let nftName = event.returnValues.nftName;
//         getLastBeerInfo(tokenId, nftName);
//     });
 
// }
 
// export async function mintNFT(getLastBeerInfo){
//     console.log("minting NFT, provider: ", window.web3x)
//     let contract = new window.web3x.eth.Contract(contractABI, contractAddress);
//     // call the request random words function to generate a random number
//     // after a while, a random no is geerated and mint nft fn is called (through chainlink)
//     let txResult = await contract.methods.requestRandomWords().send({ from: selectedAccount });
//     console.log(txResult)
//     createEventListener(getLastBeerInfo);
// }
export async function staking(id, stakes) {
    // @ts-ignore
    let contract = new window.web3x.eth.Contract(abi, address)
    await contract.method.stake(id).send({values:BigNumber(stakes*1000000000000000000)})
}
// export async function getTokenCounter() {
//     let contract = new window.web3x.eth.Contract(contractABI, contractAddress);
//     let tokenCounter = await contract.methods.getTokenCounter().call();
//     console.log("token counter: ", tokenCounter)
//     return tokenCounter;
// }
//get all movies
export async function getMovies(id) {
    // @ts-ignore
    let contract = new window.web3x.eth.Contract(abi, address)
    let movies = await contract.methods.movies(id).call()
    console.log(movies)
    return movies
}
export async function getAllMovies() {
    // @ts-ignore
    let contract = new window.web3x.eth.Contract(abi, address)
    let movies = await contract.methods.getAllMovies().call()
    console.log(movies)
    return movies
}
//add all movies
export async function addMovies(name: string, description: string, image: string, playbackId: string,startAt: number,endAt: number, price: number, selectedAccount:string) {
    // @ts-ignore
    let contract = new window.web3x.eth.Contract(abi, address)
    console.log(contract.methods);
    await contract.methods
        .addMovie(name, description, image, playbackId, startAt, endAt, price)
        .send({from: selectedAccount})
}




//* movies - get, add, getById
//* stake
//* nft purchase
//* fetch profits
 
// export async function getNFTFromBlockchain(i) {
//     let contract = new window.web3x.eth.Contract(contractABI, contractAddress);
//     // let nftName = await contract.methods.getNftName(i).call();
//     let nftOwner = await contract.methods.ownerOf(i).call();
//     // get a random no from 1 to 10
//     let r = Math.floor(Math.random() * 100) + 1;
//     return ["Nft "+r, nftOwner];
 
// }