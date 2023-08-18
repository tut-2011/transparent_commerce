// TODO 2.a - Setup a Beacon Wallet instance

import {BeaconWallet} from "@taquito/beacon-wallet";
import {NetworkType} from "@airgap/beacon-dapp";
import { connected } from "process";
export 
const wallet=new BeaconWallet({

    name:"Tezos Lottery",
    preferredNetwork:NetworkType.GHOSTNET
});

// TODO 2.b - Complete connectWallet function (for ghostnet)
export const connectWallet = async () => {
    await wallet.requestPermissions({network:{type:NetworkType.GHOSTNET}})
};

// TODO 2.c - Complete getAccount function
export const getAccount = async () => {
 const connectedWallet=await wallet.client.getActiveAccount();
 if(connectedWallet){
    return connectedWallet.address;
 }
 else{
    return "";
 }
};
