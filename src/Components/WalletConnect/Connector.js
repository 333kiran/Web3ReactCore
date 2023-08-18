import { InjectedConnector } from "@web3-react/injected-connector";
// import { ChainId } from "shibarium-get-chains";

const RPC = {
  56: "https://bsc-dataseed.binance.org/",
  97: "https://data-seed-prebsc-2-s3.binance.org:8545",
  80001: 'https://polygon-mumbai.infura.io/v3/4458cf4d1689497b9a38b1d6bbf05e78'
};

export default RPC;

export const injected = new InjectedConnector({
  supportedChainIds: [1, 3, 4, 5, 56, 42, 97, 80001],
});

export const walletconnect = {
  connector: async () => {
    const WalletConnectConnector = (
      await import("@web3-react/walletconnect-connector")
    ).WalletConnectConnector;
    return new WalletConnectConnector({
      rpc: RPC,
      bridge: "https://bridge.walletconnect.org",
      qrcode: true,
      supportedChainIds: [1, 3, 4, 5, 42, 56, 97, 80001],
    });
  },
  name: "WalletConnect",
  iconName: "wallet-connect.svg",
  description: "Connect to Trust Wallet, Rainbow Wallet and more...",
  href: null,
  color: "#4196FC",
  mobile: true,
};

export const metamskMobile = {
  name: "MetaMask",
  iconName: "metamask.png",
  description: "Open in MetaMask app.",
  href: "https://metamask.app.link/dapp/devui.hailshiba.com",
  color: "#E8831D",
  mobile: true,
  mobileOnly: true,
};
