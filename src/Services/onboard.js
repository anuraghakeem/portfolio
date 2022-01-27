import Notify from 'bnc-notify'
import Onboard from 'bnc-onboard'

import Data from "../Data"

const rinkbyData = Data.WalletSetup.Rinkby;
// const goerliData = Data.WalletSetup.Goerli;

export function initOnboard(subscriptions) {
    const onboard = Onboard
    return onboard({
        dappId: rinkbyData.apiKey, // [String] The API key created by step one above
        // dappId: goerliData.apiKey, // [String] The API key created by step one above
        networkId: rinkbyData.networkId, // [Integer] The Ethereum network ID your Dapp uses.
        // networkId: goerliData.networkId, // [Integer] The Ethereum network ID your Dapp uses.
        darkMode: true,
        subscriptions,
        walletSelect: {
          wallets: [
            { walletName: "metamask" },
            { walletName: "coinbase" },
            {
              walletName: "portis",
              apiKey: "09ad8547-3b31-48fa-9035-110ffd7fe4d5",
              label: "Portis login with Email",
            },
            {
              walletName: "trezor",
              appUrl: "https://test.com",
              email: "anuraghakeem@gmail.com",
              rpcUrl: "https://rinkeby.infura.io/v3/5fc996ec0ef2472b9d15ee5282a0a373",
            },
            {
              walletName: "walletConnect",
              infuraKey: "acc5a093c43f710c64d9c2e8a54e61f2",
            },
            { walletName: "authereum" },
          ],
        },
        walletCheck: [
          { checkName: "derivationPath" },
          { checkName: "connect" },
          { checkName: "accounts" },
          { checkName: "network" },
          { checkName: 'balance', minimumBalance: '1000000' }
        ],
    })
}

export function initNotify() {
    const notify = Notify
    return notify({
        dappId: rinkbyData.apiKey, // [String] The API key created by step one above
        networkId: rinkbyData.networkId, // [Integer] The Ethereum network ID your Dapp uses.
        // apiUrl,
        onerror: error => console.log(`Notify error: ${error.message}`)
    })
}
