import React, { useEffect, useState } from "react";
import { injected } from "./Connector";
import { useWeb3React } from "@web3-react/core";
import { Container } from "@mui/material";

function MetamaskProvider({ children }) {
  const {
    active: networkActive,
    error: networkError,
    activate: activateNetwork,
  } = useWeb3React();
  const [loaded, setLoaded] = useState(false);
  useEffect(() => {
    injected
      .isAuthorized()
      .then((isAuthorized) => {
        setLoaded(true);
        if (isAuthorized && !networkError) {
          activateNetwork(injected);
        }
      })
      .catch(() => {
        setLoaded(true);
      });
  }, [activateNetwork, networkActive, networkError]);
  if (loaded) {
    return children;
  }
  return <Container maxWidth={false}></Container>;
}

export default MetamaskProvider;
