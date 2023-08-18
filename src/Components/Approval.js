import { Box, TextField, Typography, Button, styled } from '@mui/material';
import React, { useState, useEffect } from 'react';
import Web3 from 'web3';
import { useWeb3React } from '@web3-react/core';
import ConnectWallet from './WalletConnect/ConnectWallete';

const Container = styled(Box)`
margin:3rem 25rem 3rem 20rem;
`;

const Text = styled(Typography)`
 margin-left:38rem;
 margin-top:3rem;
 font-size:1.5rem;
 color:red;
 text-decoration:underline;
`;

const WalleteButton = styled(Button)`
margin-left:44rem;

`;

const InputTextField = styled(TextField)`
margin:0.5rem 0rem ;
`;

const SsMsg = styled(Typography)`
  color: green;
  margin-top:1rem;
`;

const SsMsg2 = styled(Typography)`
  color: Blue;
  text-decoration:underline;
  margin-top:1rem;
  font-weight:bold;
`;

const Approval = () => {
    const [openWallets, setOpenWallets] = React.useState(false);
    const { account, library } = useWeb3React();
    const lib = library;
    const web3 = new Web3(lib?.provider);
    const [walletAddress, setWalletAddress] = useState('');
    const [amount, setAmount] = useState('');
    const [txtHash, setTxtHash] = useState('');
    const [msg, setMsg] = useState('');

    useEffect(() => {

        if (account) {
            setOpenWallets(false);
        }

    }, [account]);

    const handleApproval = async () => {
        console.log("click");
        try {
            const ABI = [{ "inputs": [{ "internalType": "string", "name": "_name", "type": "string" }, { "internalType": "string", "name": "_symbol", "type": "string" }], "payable": false, "stateMutability": "nonpayable", "type": "constructor" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "owner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "spender", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Approval", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegator", "type": "address" }, { "indexed": true, "internalType": "address", "name": "fromDelegate", "type": "address" }, { "indexed": true, "internalType": "address", "name": "toDelegate", "type": "address" }], "name": "DelegateChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "delegate", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "previousBalance", "type": "uint256" }, { "indexed": false, "internalType": "uint256", "name": "newBalance", "type": "uint256" }], "name": "DelegateVotesChanged", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "previousOwner", "type": "address" }, { "indexed": true, "internalType": "address", "name": "newOwner", "type": "address" }], "name": "OwnershipTransferred", "type": "event" }, { "anonymous": false, "inputs": [{ "indexed": true, "internalType": "address", "name": "from", "type": "address" }, { "indexed": true, "internalType": "address", "name": "to", "type": "address" }, { "indexed": false, "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "Transfer", "type": "event" }, { "constant": true, "inputs": [], "name": "DELEGATION_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "DOMAIN_TYPEHASH", "outputs": [{ "internalType": "bytes32", "name": "", "type": "bytes32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }, { "internalType": "address", "name": "spender", "type": "address" }], "name": "allowance", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "approve", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "owner", "type": "address" }], "name": "balanceOf", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }, { "internalType": "uint32", "name": "", "type": "uint32" }], "name": "checkpoints", "outputs": [{ "internalType": "uint32", "name": "fromBlock", "type": "uint32" }, { "internalType": "uint256", "name": "votes", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "decimals", "outputs": [{ "internalType": "uint8", "name": "", "type": "uint8" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "subtractedValue", "type": "uint256" }], "name": "decreaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }], "name": "delegate", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "delegatee", "type": "address" }, { "internalType": "uint256", "name": "nonce", "type": "uint256" }, { "internalType": "uint256", "name": "expiry", "type": "uint256" }, { "internalType": "uint8", "name": "v", "type": "uint8" }, { "internalType": "bytes32", "name": "r", "type": "bytes32" }, { "internalType": "bytes32", "name": "s", "type": "bytes32" }], "name": "delegateBySig", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "delegator", "type": "address" }], "name": "delegates", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }], "name": "getCurrentVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "account", "type": "address" }, { "internalType": "uint256", "name": "blockNumber", "type": "uint256" }], "name": "getPriorVotes", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "spender", "type": "address" }, { "internalType": "uint256", "name": "addedValue", "type": "uint256" }], "name": "increaseAllowance", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "isOwner", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "_to", "type": "address" }, { "internalType": "uint256", "name": "_amount", "type": "uint256" }], "name": "mint", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "name", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "nonces", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [{ "internalType": "address", "name": "", "type": "address" }], "name": "numCheckpoints", "outputs": [{ "internalType": "uint32", "name": "", "type": "uint32" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "owner", "outputs": [{ "internalType": "address", "name": "", "type": "address" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [], "name": "renounceOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": true, "inputs": [], "name": "symbol", "outputs": [{ "internalType": "string", "name": "", "type": "string" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": true, "inputs": [], "name": "totalSupply", "outputs": [{ "internalType": "uint256", "name": "", "type": "uint256" }], "payable": false, "stateMutability": "view", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transfer", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "from", "type": "address" }, { "internalType": "address", "name": "to", "type": "address" }, { "internalType": "uint256", "name": "value", "type": "uint256" }], "name": "transferFrom", "outputs": [{ "internalType": "bool", "name": "", "type": "bool" }], "payable": false, "stateMutability": "nonpayable", "type": "function" }, { "constant": false, "inputs": [{ "internalType": "address", "name": "newOwner", "type": "address" }], "name": "transferOwnership", "outputs": [], "payable": false, "stateMutability": "nonpayable", "type": "function" }];
            const contractAddress = "0xBC071C64eD8F536011c78e847755680740d6b73C";
            const user = walletAddress;
            const parsedAmount = parseFloat(amount);

            const contract = new web3.eth.Contract(ABI, contractAddress);
            const gasFee = await contract.methods.approve(user, parsedAmount).estimateGas({ from: user });
            const gasPrice = await web3.eth.getGasPrice();
            const encodedData = await contract.methods.approve(user, parsedAmount).encodeABI();

            await web3.eth.sendTransaction({
                from: user,
                to: contractAddress,
                gas: gasFee,
                gasPrice: gasPrice,
                data: encodedData,
            })
                .on("transactionHash", (res) => {
                    console.log("transaction hash =>>", res)
                })
                .on("receipt", (res) => {
                    console.log("transaction Receipt =>>", res);
                    setMsg("successfully Approved Transaction")
                    setTxtHash(res.transactionHash);
                })
                .on("error", (res) => {
                    console.log("error =>>", res);
                    setMsg("Something went wrong .Please try again!")
                })

        } catch (error) {
            console.log("error while calling handleApproval Method :", error.message);
        }
    }

    const connectWallet = () => {
        setOpenWallets(true);
    };

    return (
        <>
            <h3 style={{ textAlign: "center" }}>Approval Method</h3>
            {openWallets && (
                <ConnectWallet handleClose={() => setOpenWallets(false)} />
            )}
            <Box>
                {account ?
                    (
                        <Container>
                            <InputTextField
                                label="Enter Wallete Address"
                                value={walletAddress}
                                onChange={(event) => setWalletAddress(event.target.value)}
                                fullWidth
                                variant="outlined" />

                            <InputTextField
                                label="Enter Amount"
                                value={amount}
                                onChange={(event) => setAmount(event.target.value)}
                                fullWidth
                                variant="outlined" />
                            <Button
                                variant="contained"
                                fullWidth
                                onClick={handleApproval}>Approve</Button>
                            {txtHash ? (
                                <>

                                    {<SsMsg>{msg}</SsMsg>}
                                    {<SsMsg2> <i style={{ color: 'black', textDecoration: 'underline' }}>Your txt Hash:</i>{txtHash}</SsMsg2>}
                                </>
                            ) : (<>
                                <Typography></Typography></>)
                            }

                        </Container>
                    )
                    : (
                        <Box >
                            <Text>
                                Please connect your wallet to Approve Transaction
                            </Text>
                            <WalleteButton
                                variant='outlined'
                                onClick={connectWallet}
                            >Connect Wallete</WalleteButton>
                        </Box>
                    )}
            </Box>
        </>
    )
}

export default Approval;
