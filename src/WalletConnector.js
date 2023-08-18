import React, { useState } from "react";
import { useWeb3React } from "@web3-react/core";
import { injected } from "./connectors";
import { useNavigate } from "react-router-dom";
const WalletConnector = () => {
  const navigate = useNavigate();

  const { activate, active, account } = useWeb3React();
  // console.log('activate:', activate);
  // console.log('active:', active);
  // console.log('account:', account);
  const connectWallet = () => {
    activate(injected);
    navigate("/token");
  };

  return (
    <div>
      {active ? (
        <p>Connected with address: {account}</p>
      ) : (
        <button onClick={connectWallet}>Connect Wallet</button>
      )}
    </div>
  );
};

export default WalletConnector;
