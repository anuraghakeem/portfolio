// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Blaze is ERC20, Ownable{
    constructor() ERC20("Blaze", "BLZ"){
        _mint(msg.sender, 1000 * 10 ** 18);
    }
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
}