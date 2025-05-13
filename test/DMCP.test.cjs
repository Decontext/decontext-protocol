const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("DMCP", function () {
  let DMCP, dmcp;

  beforeEach(async () => {
    DMCP = await ethers.getContractFactory("DMCP");
    dmcp = await DMCP.deploy();
    await dmcp.deployed();
  });

  it("should publish and retrieve a schema", async () => {
    const id = "wallet-mcp";
    const uri = "ipfs://schema/wallet";

    const tx = await dmcp.publishContext(id, uri);
    await tx.wait();

    const schema = await dmcp.getContext(id);

    expect(schema.id).to.equal(id);
    expect(schema.uri).to.equal(uri);
    expect(schema.publisher).to.not.equal(ethers.constants.AddressZero);
    expect(schema.timestamp).to.be.gt(0);
  });

  it("should revert on missing schema", async () => {
    await expect(dmcp.getContext("nonexistent")).to.be.revertedWith("Schema not found");
  });

  it("should track schema count and IDs", async () => {
    await dmcp.publishContext("a", "ipfs://a");
    await dmcp.publishContext("b", "ipfs://b");

    const count = await dmcp.totalSchemas();
    expect(count).to.equal(2);

    const id0 = await dmcp.getSchemaId(0);
    const id1 = await dmcp.getSchemaId(1);
    expect([id0, id1]).to.include.members(["a", "b"]);
  });
});
