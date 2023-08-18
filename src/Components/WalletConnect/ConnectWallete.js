import { useWeb3React } from "@web3-react/core";
import { injected, walletconnect } from "./Connector";
import { Grid, Box, Typography, Modal } from "@mui/material";
import React from "react";
import { useEagerConnect } from "./useEgarConnect";
import { Spinner } from "./Spinner";
import { isMobile } from "react-device-detect";

export const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: isMobile ? "66%" : 450,
  borderRadius: "10px",
  bgcolor: "background.paper",
  boxShadow: 24,
  // p: 2,
};
export const style2 = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: isMobile ? "66%" : 450,
  borderRadius: "10px",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 2,
};

const connectorsByName = {
  Injected: injected,
  // walletconnect: walletconnect,
};

const connectorsByNameMobile = {
  walletconnect: walletconnect,
};

const walletName = {
  Injected: "Metamask",
  walletconnect: "Wallet Connect",
};

const walletIcon = {
  Injected: "https://app.sushi.com/images/wallets/metamask.png",
  walletconnect: "https://app.sushi.com/images/wallets/wallet-connect.svg",
};

export default function ConnectWallet({ handleClose }) {
  const { activate, connector, error } = useWeb3React();
  const [activatingConnector, setActivatingConnector] = React.useState();

  const triedEager = useEagerConnect();

  const [open, setOpen] = React.useState(true);

  const onClose = () => {
    handleClose();
    setOpen(false);
  };

  const activateWallet = async (currentConnector, connectorName) => {
    try {
      setActivatingConnector(currentConnector);
      const conn = currentConnector.connector;
      const Connector =
        typeof conn === "function" ? await conn() : currentConnector;
      await activate(Connector, undefined, true)
        .catch(async (error) => {
          setActivatingConnector();
        })
        .then((res) => {
          localStorage.setItem("isWalletConnected", true);
        });
    } catch (err) {}
  };

  const connectorNew = isMobile ? connectorsByNameMobile : connectorsByName

  return (
    <div>
      <Modal
        open={open}
        onClose={() => onClose()}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style2}>
          <Typography id="modal-modal-title" variant="h6">
            Select a Wallet
          </Typography>
          <Grid>
            <Grid>
              {
              Object.keys(connectorNew).map((name) => {
                const currentConnector = connectorsByName[name];
                const activating = currentConnector === activatingConnector;
                const connected = currentConnector === connector;
                const disabled =
                  !triedEager || !!activatingConnector || connected || !!error;
                  return (
                    <button
                      className="meta-mask-wallet-container"
                      style={{
                        width: "100%",
                        borderColor: activating
                          ? "orange"
                          : connected
                          ? "green"
                          : "unset",
                        cursor: disabled ? "not-allowed" : "pointer",
                        position: "relative",
                        backgroundColor: "#fff",
                        border: "1px solid grey",
                        margin: "10px 2px",
                        borderRadius: "10px",
                        padding: "10px",
                        display: "flex",
                      }}
                      disabled={disabled}
                      key={name}
                      onClick={() =>
                        activateWallet(currentConnector, connectorsByName[name])
                      }
                    >
                      <div style={styles.options}>
                        <img
                          src={walletIcon[name]}
                          style={styles.icons}
                          alt="wallet_icon"
                        />
                        <div>
                          <Typography style={styles.walletName}>
                            {walletName[name]}
                          </Typography>
                        </div>
                      </div>
                      <div style={styles.loaderDiv}>
                        {activating && (
                          <Spinner color={"black"} style={styles.loader} />
                        )}
                      </div>
                    </button>
                  );
                // }
              })}
            </Grid>
          </Grid>
        </Box>
      </Modal>
    </div>
  );
}

const styles = {
  options: { display: "flex", width: "100%" },
  walletName: {
    fontSize: "18px",
    fontWeight: "600",
    margin: "2px 20px",
  },
  loader: { height: "25%", marginLeft: "-1rem" },
  icons: { height: "32px", width: "32px" },
  loaderDiv: {
    position: "absolute",
    top: "0",
    right: "0",
    height: "100%",
    display: "flex",
    alignItems: "center",
    color: "black",
    margin: "0 0 0 1rem",
  },
};
