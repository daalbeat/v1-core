import { ethers } from "hardhat";

async function main() {
  const DAAL = await ethers.getContractFactory("Daal");
  const daalContract = await DAAL.deploy();
  await daalContract.deployed();
  console.log("DAAL deployed to:", daalContract.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
