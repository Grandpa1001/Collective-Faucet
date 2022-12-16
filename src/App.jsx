import './styles/App.css';
import { ethers } from "ethers";
import React, { useEffect, useState } from "react";

//import contract from './utils/contract.json';
//import logo from './assets/logo.svg';

// I moved the contract address to the top for easy access.
const CONTRACT_ADDRESS = "";

const App = () => {
    const [currentAccount, setCurrentAccount] = useState("");
    
    const checkIfWalletIsConnected = async () => {
      const { ethereum } = window;

      if (!ethereum) {
          console.log("Make sure you have metamask!");
          return;
      } else {
          console.log("We have the ethereum object", ethereum);
      }

      const accounts = await ethereum.request({ method: 'eth_accounts' });
      let chainId = await ethereum.request({ method: 'eth_chainId' });
      console.log("Connected to chain " + chainId);
      const goerliChainId = "0x5"; 
      if (chainId !== goerliChainId) {
      	alert("You are not connected to the Goerli Test Network!");
      }

      if (accounts.length !== 0) {
          const account = accounts[0];
          console.log("Found an authorized account:", account);
					setCurrentAccount(account)
          // Setup listener! This is for the case where a user comes to our site
          // and ALREADY had their wallet connected + authorized.
          setupEventListener()
      } else {
          console.log("No authorized account found")
      }
  }

  const connectWallet = async () => {
    try {
      const { ethereum } = window;
      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);

      // Setup listener! This is for the case where a user comes to our site
      // and connected their wallet for the first time.
      setupEventListener() 
    } catch (error) {
      console.log(error)
    }
  }

  // Setup our listener.
  const setupEventListener = async () => {
    // Most of this looks the same as our function askContractToMintNft
  }

  const sendETHGoerli = async () => {
    try {
      const { ethereum } = window;

      console.log("Przesyła ETH")
    } catch (error) {
      console.log(error)
    }
  }


  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  const renderNotConnectedContainer = () => (
    <button onClick={connectWallet} className="cta-button connect-wallet-button">
      Connect to Wallet
    </button>
  );

  const renderMintUI = () => (
    <button onClick={sendETHGoerli} className="cta-button connect-wallet-button">
      Send me ETH
    </button>
  )

  return (
    <div className="App">
      <div className="container">
        <div className="header-container">
          <p className="header">GOERLI COLLECTIVE FAUCET</p>
          <p className="sub-text">
            Pick up ETH Goerli and you can continue to be a degen.
          </p>
          {currentAccount === "" ? renderNotConnectedContainer() : renderMintUI()}
        </div><br/>

        <div className="header-container">
          <a
            className="footer-text"
            href=''
            target="_blank"
          >link</a>
        </div>
        <div className="footer-container">
Footer
        </div>
      </div>
    </div>
  );
};

export default App;