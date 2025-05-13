// SPDX-License-Identifier: MIT
pragma solidity ^0.8.25;

/// @title Decentralized Model Context Protocol (DMCP)
/// @notice Manages verifiable on-chain context schemas for AI agents and dApps
contract DMCP {
    struct ContextSchema {
        string id;
        string uri;
        address publisher;
        uint256 timestamp;
    }

    mapping(string => ContextSchema) private schemas;
    string[] public publishedIds;

    event ContextPublished(
        string indexed id,
        string uri,
        address indexed publisher,
        uint256 timestamp
    );

    function publishContext(string memory id, string memory uri) external {
        require(bytes(id).length > 0, "Schema ID is required");
        require(bytes(uri).length > 0, "Schema URI is required");

        schemas[id] = ContextSchema(id, uri, msg.sender, block.timestamp);
        publishedIds.push(id);
        emit ContextPublished(id, uri, msg.sender, block.timestamp);
    }

    function getContext(string memory id) external view returns (ContextSchema memory) {
        require(bytes(schemas[id].id).length > 0, "Schema not found");
        return schemas[id];
    }

    function totalSchemas() external view returns (uint256) {
        return publishedIds.length;
    }

    function getSchemaId(uint256 index) external view returns (string memory) {
        require(index < publishedIds.length, "Index out of bounds");
        return publishedIds[index];
    }
}
