// SDK to interact with the DMCP smart contract
import { ethers } from "ethers";

/**
 * Connect to a deployed DMCP smart contract
 * @param provider - Ethers.js provider
 * @param contractAddress - Address of the deployed DMCP contract
 * @param abi - ABI of the DMCP contract
 */
export function connectDMCP(provider: ethers.Provider, contractAddress: string, abi: any) {
  return new ethers.Contract(contractAddress, abi, provider);
}

/**
 * Example usage to retrieve a context schema
 */
async function fetchSchema() {
  const DMCP_ABI = [
    "function publishContext(string id, string uri) external",
    "function getContext(string id) view returns (tuple(string id, string uri, address publisher, uint256 timestamp))"
  ];

  const CONTRACT_ADDRESS = "0x661C815E467957Bf45fcE920BA35017184814925"; // Replace with actual deployed address
  const provider = new ethers.JsonRpcProvider("https://mainnet.infura.io/v3/YOUR_INFURA_KEY");
  const dmcp = connectDMCP(provider, CONTRACT_ADDRESS, DMCP_ABI);

  try {
    const result = await dmcp.getContext("wallet-mcp");
    console.log("Context schema:", result);
  } catch (error) {
    console.error("Error fetching schema:", error);
  }
}

fetchSchema().catch(console.error);
