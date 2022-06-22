import { expect } from "chai";
import { ethers } from "hardhat";

describe("DAAL contract", function () {
  let Token;
  let daalToken: any;
  let owner: any;
  let addr1: any;
  let addr2: any;

  beforeEach(async function () {
    Token = await ethers.getContractFactory("DAAL");
    [owner, addr1, addr2] = await ethers.getSigners();
    daalToken = await Token.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await daalToken.owner()).to.equal(owner.address);
    });
  });
});
