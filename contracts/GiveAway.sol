// contracts/GiveAway.sol
// SPDX-License-Identifier: Apache-2.0
pragma solidity >=0.6.0 <0.8.0;


contract GiveAway{

  string public _name;
  uint256 public _participants;

  constructor(string memory name, uint256 participants) payable{
    _participants = participants;
    _name = name;
  }


}
