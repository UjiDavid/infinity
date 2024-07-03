'use client';
// src/pages/index.js
import React, { useState } from 'react';
import Web3 from '../utils/web3';
import InfinityPetalPresale from '../contracts/InfinityPetalPresale.json';
import ButtonGradient from '../public/assets/svg/ButtonGradient';
import {
  About,
  Accordion,
  Benefits,
  Button,
  Collaboration,
  CompanyLogos,
  FAQ,
  Footer,
  Generating,
  Header,
  Heading,
  Hero,
  Notification,
  Pricing,
  PricingList,
  Roadmap,
  Section,
  Services,
  Tagline,
  Timer,
  TokenSale,
} from '../Components';

const presaleAddress =
  '0x7E821545B5969A9222dCd85A2fEDb7d0646dE787'; // Replace with your presale contract address

const Home = () => {
  const [account, setAccount] = useState(null);
  const [presaleContract, setPresaleContract] =
    useState(null);

  const connectWallet = async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await Web3.eth.requestAccounts();
        setAccount(accounts[0]);

        // Load the presale contract only after connecting the wallet
        const presale = new Web3.eth.Contract(
          InfinityPetalPresale.abi,
          presaleAddress
        );
        setPresaleContract(presale);
      } catch (error) {
        console.error('Connection error', error);
        alert('Failed to connect wallet.');
      }
    } else {
      alert('Please install MetaMask!');
    }
  };

  const buyTokens = async (nToken) => {
    if (!nToken || nToken <= 0) {
      alert('Please enter a valid BNB amount');
      return;
    }

    try {
      await presaleContract.methods
        .buyTokens(account)
        .send({
          from: account,
          value: Web3.utils.toWei(nToken, 'ether'),
        });
      alert('Tokens purchased successfully!');
    } catch (error) {
      console.error(error);
      alert('Token purchase failed');
    }
  };

  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header
          address={account}
          connectWallet={connectWallet}
        />
        <Hero
          buyTokens={buyTokens}
          address={account}
          connectWallet={connectWallet}
        />
        <About />
        <Benefits />
        <Collaboration />
        <Roadmap />
        <Pricing />
        <FAQ />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};

export default Home;
