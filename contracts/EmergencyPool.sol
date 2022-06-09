// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";

contract EmergencyPool is Ownable, Pausable {
    enum Status {
        Active,
        Pending,
        Canceled
    }

    struct Pool {
        address creator;
        string contractName;
        uint32 currentMembershipCount;
        Status[] status;
    }

    address[] public member;

    function checkMembership() public {}

    function getStatus() public {}

    function getPool() public {}

    function createPool() public {}

    function getMember() public view returns (address[] memory) {
        return member;
    }

    function addMember(address i) public {
        member.push(i);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }
}
