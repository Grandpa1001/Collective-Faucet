//@ts-check

import React from 'react';
import ReactDOM from 'react-dom';
import { WagmiConfig, createClient, configureChains, mainnet, goerli } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'
import { MetaMaskConnector } from 'wagmi/connectors/metaMask'
import { alchemyProvider } from 'wagmi/providers/alchemy'


import './styles/index.css';
import App from './App';

const { chains, provider, webSocketProvider } = configureChains(
  [mainnet, goerli],
  [
    alchemyProvider({apiKey: "BbX5_HGODlxiEqHPHNwIahmcLrLF6SCh"}), //mainnet
    alchemyProvider({apiKey: "gOvDBVILBb_mWDoSCskHGKJAfNmZO4Yn"}) //goerli
  ],
)

const client = createClient({
  autoConnect: true,
  provider,
  webSocketProvider,
  connectors: [
    new MetaMaskConnector({ chains })
  ]
})

ReactDOM.render(

    <WagmiConfig client={client}>
        <App />
    <div className="FaucetBG">

    </div>
    </WagmiConfig>
,
  document.getElementById('root')
);

