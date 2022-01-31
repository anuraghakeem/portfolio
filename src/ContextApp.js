import { useEffect, useState } from "react";
import { ethers } from "ethers";

import Services from "./Services";
import Data from "./Data";
import internalTransferABI from "./Data/JSON/transferABI.json";

import App from "./App";

const initNotify = Services.initNotify;
const initOnboard = Services.initOnboard;
const networkEnum = Data.networkEnum;

let provider;

let internalTransferContract;

function ContextApp() {
  const [address, setAddress] = useState(null);
  const [ens, setEns] = useState(null);
  const [network, setNetwork] = useState(null);
  const [balance, setBalance] = useState(null);
  const [wallet, setWallet] = useState({});
  const [onboard, setOnboard] = useState(null);
  const [notify, setNotify] = useState(null);
  const [toAddress, setToAddress] = useState("");

  useEffect(() => {
    const onboard = initOnboard({
      address: setAddress,
      ens: setEns,
      network: setNetwork,
      balance: setBalance,
      wallet: (wallet) => {
        if (wallet.provider) {
          setWallet(wallet);

          provider = new ethers.providers.Web3Provider(wallet.provider, "any");

          internalTransferContract = new ethers.Contract(
            "0x502D84A3E2f5d9B8393A1e5E43fFf7623e4C102C",
            // "0x136A874d7Fb115374b8B98b5ef27AAc75Bf87375",
            // '0xb8c12850827ded46b9ded8c1b6373da0c4d60370',
            internalTransferABI,
            // internalTransferABI,
            provider.getUncheckedSigner()
          );

          window.localStorage.setItem("selectedWallet", wallet.name);
        } else {
          provider = null;
          setWallet({});
        }
      },
    });

    setOnboard(onboard);

    setNotify(initNotify());
  }, []);

  useEffect(() => {
    const previouslySelectedWallet =
      window.localStorage.getItem('selectedWallet')

    if (previouslySelectedWallet && onboard) {
      onboard.walletSelect(previouslySelectedWallet)
    }
  }, [onboard])

  const readyToTransact = async () => {
    if (!provider) {
      const walletSelected = await onboard.walletSelect()
      if (!walletSelected) return false
    }

    const ready = await onboard.walletCheck()
    return ready
  }

  const sendHash = async () => {
    if (!toAddress) {
      alert('An Ethereum address to send Eth to is required.')
      return
    }

    const signer = provider.getUncheckedSigner()

    const { hash } = await signer.sendTransaction({
      to: toAddress,
      value: 1000000000000000
    })

    const { emitter } = notify.hash(hash)

    emitter.on('txPool', transaction => {
      return {
        // message: `Your transaction is pending, click <a href="https://rinkeby.etherscan.io/tx/${transaction.hash}" rel="noopener noreferrer" target="_blank">here</a> for more info.`,
        // or you could use onclick for when someone clicks on the notification itself
        onclick: () =>
          window.open(`https://rinkeby.etherscan.io/tx/${transaction.hash}`)
      }
    })

    emitter.on('txSent', console.log)
    emitter.on('txConfirmed', console.log)
    emitter.on('txSpeedUp', console.log)
    emitter.on('txCancel', console.log)
    emitter.on('txFailed', console.log)
  }

  const sendInternalTransaction = async (apeData) => {
    // if (!toAddress) {
    //   alert('An Ethereum address to send Eth to is required.')
    //   return
    // }
    // console.log("Ape data",apeData.price)
    const { hash } = await internalTransferContract.mint(
      // token
      apeData.apeId,
// amount,
      // 
      // 0,
      {
        //cost to mint
        // value: 1000000000000000
        value: apeData.price
      }
    )
    // const { hash } = await internalTransferContract.internalTransfer(
    //   toAddress,
    //   {
    //     value: 1000000000000000
    //   }
    // )

    const { emitter } = notify.hash(hash)

    emitter.on('txSent', console.log)
    emitter.on('txPool', console.log)
    emitter.on('txConfirmed', console.log)
    emitter.on('txSpeedUp', console.log)
    emitter.on('txCancel', console.log)
    emitter.on('txFailed', console.log)
  }

  const sendTransaction = async () => {
    if (!toAddress) {
      alert('An Ethereum address to send Eth to is required.')
    }

    const signer = provider.getUncheckedSigner()

    const txDetails = {
      to: toAddress,
      value: 1000000000000000
    }

    const sendTransaction = () => {
      return signer.sendTransaction(txDetails).then(tx => tx.hash)
    }

    const gasPrice = () => provider.getGasPrice().then(res => res.toString())

    const estimateGas = () => {
      return provider.estimateGas(txDetails).then(res => res.toString())
    }

    const { emitter } = await notify.transaction({
      sendTransaction,
      gasPrice,
      estimateGas,
      balance: onboard.getState().balance,
      txDetails
    })

    emitter.on('txRequest', console.log)
    emitter.on('nsfFail', console.log)
    emitter.on('txRepeat', console.log)
    emitter.on('txAwaitingApproval', console.log)
    emitter.on('txConfirmReminder', console.log)
    emitter.on('txSendFail', console.log)
    emitter.on('txError', console.log)
    emitter.on('txUnderPriced', console.log)
    emitter.on('txSent', console.log)
    emitter.on('txPool', console.log)
    emitter.on('txConfirmed', console.log)
    emitter.on('txSpeedUp', console.log)
    emitter.on('txCancel', console.log)
    emitter.on('txFailed', console.log)
  }

  return <App
  address={address} 
      balance={balance} 
      networkEnum={networkEnum} 
      network={network} 
      wallet={wallet} 
      onboard={onboard} 
      sendInternalTransaction= {sendInternalTransaction}
      readyToTransact = {readyToTransact}
      sendHash= {sendHash}
      sendTransaction = {sendTransaction}
      notify = {notify}
      toAddress = {toAddress}
      setToAddress = {setToAddress}
  />;
}

export default ContextApp;