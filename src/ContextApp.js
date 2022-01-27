import { useEffect, useState } from "react"
import { ethers } from 'ethers'

import Services from "./Services"
import Data from "./Data"
import internalTransferABI from './Data/JSON/transferABI.json'

import App from './App'

function ContextApp() {
    return(
        <App />
    )
}

export default ContextApp