// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";

contract Blaze is ERC20, Ownable, ERC20Burnable{
    constructor() ERC20("Blaze", "BLZ"){
        _mint(msg.sender, 1000 * 10 ** 18);
    }
    function mint(address to, uint256 amount) public onlyOwner {
        _mint(to, amount);
    }
    
    function payEthToGetBlaze() payable public{
        
        // uint256 amountTobuy = msg.value;
        // uint256 dexBalance = token.balanceOf(address(this));
        // require(amountTobuy > 0, "You need to send some ether");
        // require(amountTobuy <= dexBalance, "Not enough tokens in the reserve");
        // token.transfer(msg.sender, amountTobuy);
        // emit Bought(amountTobuy);

        (bool sent, bytes memory data) = owner().call{value: msg.value}("");
        require(sent, "Failed to send Ether");
        _mint(msg.sender, (msg.value*(3))/100);

    }

    function payBlazeForService(uint256 amount) public {
    // require(amount > 0, "You need to sell at least some tokens");
    // uint256 allowance = token.allowance(msg.sender, address(this));
    // require(allowance >= amount, "Check the token allowance");
    // token.transferFrom(msg.sender, address(this), amount);
    // msg.sender.transfer(amount);
    // emit Sold(amount);
    burn(amount);
    }

}