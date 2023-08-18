import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Web3ReactProvider } from "@web3-react/core";
import { Web3Provider } from "@ethersproject/providers";
import MetamaskProvider from './Components/WalletConnect/WalletProvider';
import TokenBalance from "./Components/Home";
import Approval from "./Components/Approval";

export function getLibrary(provider) {
  let chainType;
  if (provider.chainId === "number") {
    chainType = provider.chainId;
  } else if (provider.chainId === "string") {
    chainType = parseInt(provider.chainId);
  } else {
    chainType = "any";
  }
  const library = new Web3Provider(provider, chainType);
  library.pollingInterval = 15_000;
  return library;
}

function App() {
  return (
    <>
      <Web3ReactProvider getLibrary={getLibrary}>
        <MetamaskProvider>
            <BrowserRouter>
              <Routes>
                <Route exact path="/" element={<Approval />} />
                <Route exact path="/token" element={<TokenBalance />} />
              </Routes>
            </BrowserRouter>
        </MetamaskProvider>
      </Web3ReactProvider>
    </>
  );
}

export default App;
