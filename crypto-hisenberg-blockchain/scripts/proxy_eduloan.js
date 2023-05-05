const {ethers, upgrades} = require("hardhat");
async function setup(){
    console.log("This setup deploys two contracts please check the deployed wallet address");
    const baseC = await ethers.getContractFactory("contracts/Eduloan.sol:Eduloan");
    const deployC = await upgrades.deployProxy(baseC,["0x763ed1ee6aA404BcEc913361330cE9fFa7fA49aA","0x9b2C7113C5EfA03D68F77B0542D6B9ddbDb06bD6","0x741407D1a6878cb5e802bA78f84214786448c22a","0xE7295C6569dDF883edF0B5a667d13dda955CB197",5]);
    await deployC.deployed();
    console.log("The student registration contract has been deployed and this is proxy contract address",deployC.address);
}
setup().catch((err)=>{
    console.log("The contract has failed to deploy", err);
})