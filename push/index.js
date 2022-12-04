import {PUSH_NOTIFICATION_SECRET_KEY} from '../library/constants'

// import * as PushAPI from "@pushprotocol/restapi";
const PushAPI = require("@pushprotocol/restapi");
const ethers = require("ethers");
// import * as ethers from "ethers";
require("dotenv").config();
// dca9fe6bc98e79a61530413afbddf406b434b7e933bab94f1d20fbda2595ece4
 
const PK = PUSH_NOTIFICATION_SECRET_KEY // channel private key
const Pkey = `0x${PK}`;
const signer = new ethers.Wallet(Pkey);

const addresses = [
    '0xcE31ae31ED84C14cB7e7be45418AbA7C3Bd1bAAA',
    '0xcE31ae31ED84C14cB7e7be45418AbA7C3Bd1bABB',
    '0xcE31ae31ED84C14cB7e7be45418AbA7C3Bd1bACC',
]
 
const createReceiptants = (addresses) => {
    const recipients = addresses.map((address) => {
        const recipient = 'eip155:5:' + address
        return recipient
    })

    return recipients
}
// apiResponse.status == 204 means successfully sent!
const sendNotification = async () => {   
    let recipientsList = createReceiptants()
  try {
    const apiResponse = await PushAPI.payloads.sendNotification({
      signer,
      type: 4, // target : 3 for single, 4 for group, 1 for broadcasting
      identityType: 2, // direct payload, 1 for ipfs payload
      notification: {
        title: `Test notification`,
        body: `notification body`,
      },
      payload: {
        title: `payload title`,
        body: `sample msg body`,
        cta: "",
        img: "",
      },
    //   recipients: "eip155:5:0xcE31ae31ED84C14cB7e7be45418AbA7C3Bd1bAAA", // recipient address
      recipents:recipientsList,
      channel: "eip155:5:0xF5b1CE392A112efB926d4926E09Ed81533bA805d", // your channel address
      env: "staging",
    });
 
    // apiResponse?.status === 204, if sent successfully!
    console.log("API repsonse: ", apiResponse);
  } catch (err) {
    console.error("Error: nhk", err);
  }
};
 
sendNotification();