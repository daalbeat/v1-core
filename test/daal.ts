import { expect } from "chai";
import { ethers } from "hardhat";

describe("Daal contract", function () {
  let Token;
  let daalToken: any;
  let owner: any;

  beforeEach(async function () {
    Token = await ethers.getContractFactory("Daal");
    [owner] = await ethers.getSigners();
    daalToken = await Token.deploy();
  });

  describe("Deployment", function () {
    it("Should set the right owner", async function () {
      expect(await daalToken.owner()).to.equal(owner.address);
    });
  });

  describe("Membership Pricing", function () {
    it("Should return default NFT membership pricing 0.01 ethers", async function () {
      const defaultPricing = await daalToken.getMembershipPrice();
      expect(defaultPricing).to.equal(1000000000000000);
    });

    it("Should update default NFT membersship pricing to 0.02 ethers", async function () {
      await daalToken.updateMembershipPrice(2000000000000000);
      const newPrice = await daalToken.getMembershipPrice();
      expect(newPrice).to.equal(2000000000000000);
    });
  });
});
