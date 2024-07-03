// src/utils/web3.js
import Web3 from 'web3';

let web3;

if (
  typeof window !== 'undefined' &&
  typeof window.ethereum !== 'undefined'
) {
  // We are in the browser and MetaMask is running.
  window.ethereum.request({
    method: 'eth_requestAccounts',
  });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running MetaMask
  const provider = new Web3.providers.HttpProvider(
    'https://data-seed-prebsc-1-s1.binance.org:8545/' // BSC Testnet endpoint
  );
  web3 = new Web3(provider);
}

export default web3;
