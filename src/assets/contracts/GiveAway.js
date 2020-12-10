const GiveAwayArtifacts = {
        "fileName": "GiveAway.sol",
        "contractName": "GiveAway",
        "source": "// contracts/GiveAway.sol\n// SPDX-License-Identifier: Apache-2.0\npragma solidity >=0.6.0 <0.8.0;\n\nimport \"@openzeppelin/contracts/access/Ownable.sol\";\nimport \"@openzeppelin/contracts/utils/Pausable.sol\";\n\ncontract GiveAway is Ownable, Pausable{\n\n  uint public constant RETWEET_INDEX = 0;\n\n  uint public constant LIKE_INDEX = 1;\n\n  struct Rules {\n      uint256 scoreRetweet;\n      uint256 scoreLike;\n  }\n\n  struct Participant {\n      bytes id;\n      uint[] status;\n  }\n\n  string public _name;\n  uint256 public _maxParticipants;\n  Rules public _rules;\n\n\n  address [] _listParticipants;\n  mapping(address => Participant) public _participants;\n\n  modifier onlyRegisteredUser()\n    {\n        require(keccak256(_participants[msg.sender].id) != keccak256(bytes(\"\")), \"You need to validate your participation\");\n        _;\n    }\n\n  constructor (string memory name, uint256 maxParticipants, uint256 scoreRetweet, uint256 scoreLike) public payable {\n    require(msg.value>0);\n    _maxParticipants = maxParticipants;\n    _name = name;\n    _rules = Rules(scoreRetweet, scoreLike);\n  }\n\n  function participate(string memory id) public payable{\n      require(_listParticipants.length < _maxParticipants, \"The maximum number of participants is reached\");\n      require(keccak256(_participants[msg.sender].id) == keccak256(bytes(\"\")), \"You have already validated your participation\");\n      _listParticipants.push(msg.sender);\n      _participants[msg.sender].id = bytes(id) ;\n  }\n\n  function retweet() public payable onlyRegisteredUser{\n      require(_participants[msg.sender].status[RETWEET_INDEX] == 0, \"You can only retweet once\");\n      _participants[msg.sender].status[RETWEET_INDEX] = 1;\n  }\n\n  function like() public payable onlyRegisteredUser {\n      require(_participants[msg.sender].status[LIKE_INDEX] == 0, \"You can only like once\");\n      _participants[msg.sender].status[LIKE_INDEX] = 1;\n\n  }\n\n  function getMyScore() public view returns (uint256) {\n      return getScore(msg.sender);\n  }\n\n  function getScore(address participant) public view returns (uint256) {\n    return _participants[participant].status[RETWEET_INDEX] * _rules.scoreRetweet\n            + _participants[participant].status[LIKE_INDEX] * _rules.scoreLike;\n\n  }\n\n  function close() public payable onlyRegisteredUser{\n    _pause();\n  }\n\n\n}\n",
        "sourcePath": "contracts/GiveAway.sol",
        "sourceMap": "205:2098:3:-:0;;;824:248;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;882:17:1;902:12;:10;;;:12;;:::i;:::-;882:32;;933:9;924:6;;:18;;;;;;;;;;;;;;;;;;990:9;957:43;;986:1;957:43;;;;;;;;;;;;848:159;950:5:2;940:7;;:15;;;;;;;;;;;;;;;;;;962:1:3;952:9;:11;944:20;;;;;;989:15;970:16;:34;;;;1018:4;1010:5;:12;;;;;;;;;;;;:::i;:::-;;1037:30;;;;;;;;1043:12;1037:30;;;;1057:9;1037:30;;;1028:6;:39;;;;;;;;;;;;;;;;;;;824:248;;;;205:2098;;598:104:0;651:15;685:10;678:17;;598:104;:::o;205:2098:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
        "deployedSourceMap": "205:2098:3:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1076:387;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;291:35;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2230:69;;;:::i;:::-;;1057:76:2;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1706:145:1;;;;;;;;;;;;;:::i;:::-;;248:38:3;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;1083:77:1;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1685:204:3;;;:::i;:::-;;494:31;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;471:19;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1989:237;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;586:52;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1893:92;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2000:240:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;1467:214:3;;;:::i;:::-;;529:19;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;1076:387;1172:16;;1145:17;:24;;;;:43;1137:101;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1307:9;;;;;;;;;;;;1297:20;;;;;;1264:13;:25;1278:10;1264:25;;;;;;;;;;;;;;;:28;;1254:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:63;1246:121;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1375:17;1398:10;1375:34;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1454:2;1417:13;:25;1431:10;1417:25;;;;;;;;;;;;;;;:28;;:40;;;;;;;;;;;;:::i;:::-;;1076:387;:::o;291:35::-;325:1;291:35;:::o;2230:69::-;748:9;;;;;;;;;;;;738:20;;;;;;705:13;:25;719:10;705:25;;;;;;;;;;;;;;;:28;;695:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:63;;687:115;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2286:8:::1;:6;:8::i;:::-;2230:69::o:0;1057:76:2:-;1096:4;1119:7;;;;;;;;;;;1112:14;;1057:76;:::o;1706:145:1:-;1297:12;:10;:12::i;:::-;1287:22;;:6;;;;;;;;;;:22;;;1279:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1812:1:::1;1775:40;;1796:6;::::0;::::1;;;;;;;;1775:40;;;;;;;;;;;;1842:1;1825:6:::0;::::1;:19;;;;;;;;;;;;;;;;;;1706:145::o:0;248:38:3:-;285:1;248:38;:::o;1083:77:1:-;1121:7;1147:6;;;;;;;;;;;1140:13;;1083:77;:::o;1685:204:3:-;748:9;;;;;;;;;;;;738:20;;;;;;705:13;:25;719:10;705:25;;;;;;;;;;;;;;;:28;;695:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:63;;687:115;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1799:1:::1;1751:13;:25;1765:10;1751:25;;;;;;;;;;;;;;;:32;;325:1;1751:44;;;;;;;;;;;;;;;;:49;1743:84;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;1882:1;1835:13;:25;1849:10;1835:25;;;;;;;;;;;;;;;:32;;325:1;1835:44;;;;;;;;;;;;;;;:48;;;;1685:204::o:0;494:31::-;;;;:::o;471:19::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1989:237::-;2049:7;2204:6;:16;;;2156:13;:26;2170:11;2156:26;;;;;;;;;;;;;;;:33;;325:1;2156:45;;;;;;;;;;;;;;;;:64;2122:6;:19;;;2071:13;:26;2085:11;2071:26;;;;;;;;;;;;;;;:33;;285:1;2071:48;;;;;;;;;;;;;;;;:70;:149;2064:156;;1989:237;;;:::o;586:52::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1893:92::-;1936:7;1960:20;1969:10;1960:8;:20::i;:::-;1953:27;;1893:92;:::o;2000:240:1:-;1297:12;:10;:12::i;:::-;1287:22;;:6;;;;;;;;;;:22;;;1279:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2108:1:::1;2088:22;;:8;:22;;;;2080:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2197:8;2168:38;;2189:6;::::0;::::1;;;;;;;;2168:38;;;;;;;;;;;;2225:8;2216:6;::::0;:17:::1;;;;;;;;;;;;;;;;;;2000:240:::0;:::o;1467:214:3:-;748:9;;;;;;;;;;;;738:20;;;;;;705:13;:25;719:10;705:25;;;;;;;;;;;;;;;:28;;695:39;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:63;;687:115;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1586:1:::1;1535:13;:25;1549:10;1535:25;;;;;;;;;;;;;;;:32;;285:1;1535:47;;;;;;;;;;;;;;;;:52;1527:90;;;;;;;;;;;;;;;;;;;;;;;;;;;::::0;::::1;;;;;;;;;;;;;1675:1;1625:13;:25;1639:10;1625:25;;;;;;;;;;;;;;;:32;;285:1;1625:47;;;;;;;;;;;;;;;:51;;;;1467:214::o:0;529:19::-;;;;;;;;;;;;;;:::o;1812:115:2:-;1363:7;;;;;;;;;;;1362:8;1354:37;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1881:4:::1;1871:7;;:14;;;;;;;;;;;;;;;;;;1900:20;1907:12;:10;:12::i;:::-;1900:20;;;;;;;;;;;;;;;;;;;;1812:115::o:0;598:104:0:-;651:15;685:10;678:17;;598:104;:::o;-1:-1:-1:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;:::o",
        "abi": [
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "name",
                        "type": "string"
                    },
                    {
                        "internalType": "uint256",
                        "name": "maxParticipants",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "scoreRetweet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "scoreLike",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "payable",
                "type": "constructor"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "previousOwner",
                        "type": "address"
                    },
                    {
                        "indexed": true,
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "OwnershipTransferred",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "Paused",
                "type": "event"
            },
            {
                "anonymous": false,
                "inputs": [
                    {
                        "indexed": false,
                        "internalType": "address",
                        "name": "account",
                        "type": "address"
                    }
                ],
                "name": "Unpaused",
                "type": "event"
            },
            {
                "inputs": [],
                "name": "LIKE_INDEX",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "RETWEET_INDEX",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "_maxParticipants",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "_name",
                "outputs": [
                    {
                        "internalType": "string",
                        "name": "",
                        "type": "string"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "name": "_participants",
                "outputs": [
                    {
                        "internalType": "bytes",
                        "name": "id",
                        "type": "bytes"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "_rules",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "scoreRetweet",
                        "type": "uint256"
                    },
                    {
                        "internalType": "uint256",
                        "name": "scoreLike",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "close",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "getMyScore",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "participant",
                        "type": "address"
                    }
                ],
                "name": "getScore",
                "outputs": [
                    {
                        "internalType": "uint256",
                        "name": "",
                        "type": "uint256"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "like",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "owner",
                "outputs": [
                    {
                        "internalType": "address",
                        "name": "",
                        "type": "address"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "string",
                        "name": "id",
                        "type": "string"
                    }
                ],
                "name": "participate",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "paused",
                "outputs": [
                    {
                        "internalType": "bool",
                        "name": "",
                        "type": "bool"
                    }
                ],
                "stateMutability": "view",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "renounceOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            },
            {
                "inputs": [],
                "name": "retweet",
                "outputs": [],
                "stateMutability": "payable",
                "type": "function"
            },
            {
                "inputs": [
                    {
                        "internalType": "address",
                        "name": "newOwner",
                        "type": "address"
                    }
                ],
                "name": "transferOwnership",
                "outputs": [],
                "stateMutability": "nonpayable",
                "type": "function"
            }
        ],
        "ast": {
            "absolutePath": "contracts/GiveAway.sol",
            "exportedSymbols": {
                "Context": [
                    22
                ],
                "GiveAway": [
                    472
                ],
                "Ownable": [
                    131
                ],
                "Pausable": [
                    221
                ]
            },
            "id": 473,
            "license": "Apache-2.0",
            "nodeType": "SourceUnit",
            "nodes": [
                {
                    "id": 223,
                    "literals": [
                        "solidity",
                        ">=",
                        "0.6",
                        ".0",
                        "<",
                        "0.8",
                        ".0"
                    ],
                    "nodeType": "PragmaDirective",
                    "src": "65:31:3"
                },
                {
                    "absolutePath": "@openzeppelin/contracts/access/Ownable.sol",
                    "file": "@openzeppelin/contracts/access/Ownable.sol",
                    "id": 224,
                    "nodeType": "ImportDirective",
                    "scope": 473,
                    "sourceUnit": 132,
                    "src": "98:52:3",
                    "symbolAliases": [],
                    "unitAlias": ""
                },
                {
                    "absolutePath": "@openzeppelin/contracts/utils/Pausable.sol",
                    "file": "@openzeppelin/contracts/utils/Pausable.sol",
                    "id": 225,
                    "nodeType": "ImportDirective",
                    "scope": 473,
                    "sourceUnit": 222,
                    "src": "151:52:3",
                    "symbolAliases": [],
                    "unitAlias": ""
                },
                {
                    "abstract": false,
                    "baseContracts": [
                        {
                            "baseName": {
                                "id": 226,
                                "name": "Ownable",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 131,
                                "src": "226:7:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Ownable_$131",
                                    "typeString": "contract Ownable"
                                }
                            },
                            "id": 227,
                            "nodeType": "InheritanceSpecifier",
                            "src": "226:7:3"
                        },
                        {
                            "baseName": {
                                "id": 228,
                                "name": "Pausable",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 221,
                                "src": "235:8:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_contract$_Pausable_$221",
                                    "typeString": "contract Pausable"
                                }
                            },
                            "id": 229,
                            "nodeType": "InheritanceSpecifier",
                            "src": "235:8:3"
                        }
                    ],
                    "contractDependencies": [
                        22,
                        131,
                        221
                    ],
                    "contractKind": "contract",
                    "fullyImplemented": true,
                    "id": 472,
                    "linearizedBaseContracts": [
                        472,
                        221,
                        131,
                        22
                    ],
                    "name": "GiveAway",
                    "nodeType": "ContractDefinition",
                    "nodes": [
                        {
                            "constant": true,
                            "functionSelector": "8a258aa8",
                            "id": 232,
                            "mutability": "constant",
                            "name": "RETWEET_INDEX",
                            "nodeType": "VariableDeclaration",
                            "scope": 472,
                            "src": "248:38:3",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 230,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "248:4:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "hexValue": "30",
                                "id": 231,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "285:1:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_0_by_1",
                                    "typeString": "int_const 0"
                                },
                                "value": "0"
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": true,
                            "functionSelector": "27c87c33",
                            "id": 235,
                            "mutability": "constant",
                            "name": "LIKE_INDEX",
                            "nodeType": "VariableDeclaration",
                            "scope": 472,
                            "src": "291:35:3",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 233,
                                "name": "uint",
                                "nodeType": "ElementaryTypeName",
                                "src": "291:4:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "value": {
                                "hexValue": "31",
                                "id": 234,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": true,
                                "kind": "number",
                                "lValueRequested": false,
                                "nodeType": "Literal",
                                "src": "325:1:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                },
                                "value": "1"
                            },
                            "visibility": "public"
                        },
                        {
                            "canonicalName": "GiveAway.Rules",
                            "id": 240,
                            "members": [
                                {
                                    "constant": false,
                                    "id": 237,
                                    "mutability": "mutable",
                                    "name": "scoreRetweet",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 240,
                                    "src": "352:20:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 236,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "352:7:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 239,
                                    "mutability": "mutable",
                                    "name": "scoreLike",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 240,
                                    "src": "380:17:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                    },
                                    "typeName": {
                                        "id": 238,
                                        "name": "uint256",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "380:7:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "name": "Rules",
                            "nodeType": "StructDefinition",
                            "scope": 472,
                            "src": "331:71:3",
                            "visibility": "public"
                        },
                        {
                            "canonicalName": "GiveAway.Participant",
                            "id": 246,
                            "members": [
                                {
                                    "constant": false,
                                    "id": 242,
                                    "mutability": "mutable",
                                    "name": "id",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 246,
                                    "src": "433:8:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_bytes_storage_ptr",
                                        "typeString": "bytes"
                                    },
                                    "typeName": {
                                        "id": 241,
                                        "name": "bytes",
                                        "nodeType": "ElementaryTypeName",
                                        "src": "433:5:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_bytes_storage_ptr",
                                            "typeString": "bytes"
                                        }
                                    },
                                    "visibility": "internal"
                                },
                                {
                                    "constant": false,
                                    "id": 245,
                                    "mutability": "mutable",
                                    "name": "status",
                                    "nodeType": "VariableDeclaration",
                                    "scope": 246,
                                    "src": "449:13:3",
                                    "stateVariable": false,
                                    "storageLocation": "default",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                        "typeString": "uint256[]"
                                    },
                                    "typeName": {
                                        "baseType": {
                                            "id": 243,
                                            "name": "uint",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "449:4:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 244,
                                        "nodeType": "ArrayTypeName",
                                        "src": "449:6:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage_ptr",
                                            "typeString": "uint256[]"
                                        }
                                    },
                                    "visibility": "internal"
                                }
                            ],
                            "name": "Participant",
                            "nodeType": "StructDefinition",
                            "scope": 472,
                            "src": "406:61:3",
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "functionSelector": "d28d8852",
                            "id": 248,
                            "mutability": "mutable",
                            "name": "_name",
                            "nodeType": "VariableDeclaration",
                            "scope": 472,
                            "src": "471:19:3",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_string_storage",
                                "typeString": "string"
                            },
                            "typeName": {
                                "id": 247,
                                "name": "string",
                                "nodeType": "ElementaryTypeName",
                                "src": "471:6:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_string_storage_ptr",
                                    "typeString": "string"
                                }
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "functionSelector": "b5e9757c",
                            "id": 250,
                            "mutability": "mutable",
                            "name": "_maxParticipants",
                            "nodeType": "VariableDeclaration",
                            "scope": 472,
                            "src": "494:31:3",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                            },
                            "typeName": {
                                "id": 249,
                                "name": "uint256",
                                "nodeType": "ElementaryTypeName",
                                "src": "494:7:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                }
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "functionSelector": "f60e49b5",
                            "id": 252,
                            "mutability": "mutable",
                            "name": "_rules",
                            "nodeType": "VariableDeclaration",
                            "scope": 472,
                            "src": "529:19:3",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_struct$_Rules_$240_storage",
                                "typeString": "struct GiveAway.Rules"
                            },
                            "typeName": {
                                "id": 251,
                                "name": "Rules",
                                "nodeType": "UserDefinedTypeName",
                                "referencedDeclaration": 240,
                                "src": "529:5:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_struct$_Rules_$240_storage_ptr",
                                    "typeString": "struct GiveAway.Rules"
                                }
                            },
                            "visibility": "public"
                        },
                        {
                            "constant": false,
                            "id": 255,
                            "mutability": "mutable",
                            "name": "_listParticipants",
                            "nodeType": "VariableDeclaration",
                            "scope": 472,
                            "src": "554:28:3",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[]"
                            },
                            "typeName": {
                                "baseType": {
                                    "id": 253,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "554:7:3",
                                    "stateMutability": "nonpayable",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "id": 254,
                                "nodeType": "ArrayTypeName",
                                "src": "554:10:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                                    "typeString": "address[]"
                                }
                            },
                            "visibility": "internal"
                        },
                        {
                            "constant": false,
                            "functionSelector": "d5fedc50",
                            "id": 259,
                            "mutability": "mutable",
                            "name": "_participants",
                            "nodeType": "VariableDeclaration",
                            "scope": 472,
                            "src": "586:52:3",
                            "stateVariable": true,
                            "storageLocation": "default",
                            "typeDescriptions": {
                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Participant_$246_storage_$",
                                "typeString": "mapping(address => struct GiveAway.Participant)"
                            },
                            "typeName": {
                                "id": 258,
                                "keyType": {
                                    "id": 256,
                                    "name": "address",
                                    "nodeType": "ElementaryTypeName",
                                    "src": "594:7:3",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_address",
                                        "typeString": "address"
                                    }
                                },
                                "nodeType": "Mapping",
                                "src": "586:31:3",
                                "typeDescriptions": {
                                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Participant_$246_storage_$",
                                    "typeString": "mapping(address => struct GiveAway.Participant)"
                                },
                                "valueType": {
                                    "id": 257,
                                    "name": "Participant",
                                    "nodeType": "UserDefinedTypeName",
                                    "referencedDeclaration": 246,
                                    "src": "605:11:3",
                                    "typeDescriptions": {
                                        "typeIdentifier": "t_struct$_Participant_$246_storage_ptr",
                                        "typeString": "struct GiveAway.Participant"
                                    }
                                }
                            },
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 280,
                                "nodeType": "Block",
                                "src": "677:143:3",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "id": 275,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "baseExpression": {
                                                                        "id": 263,
                                                                        "name": "_participants",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 259,
                                                                        "src": "705:13:3",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Participant_$246_storage_$",
                                                                            "typeString": "mapping(address => struct GiveAway.Participant storage ref)"
                                                                        }
                                                                    },
                                                                    "id": 266,
                                                                    "indexExpression": {
                                                                        "expression": {
                                                                            "id": 264,
                                                                            "name": "msg",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": -15,
                                                                            "src": "719:3:3",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_magic_message",
                                                                                "typeString": "msg"
                                                                            }
                                                                        },
                                                                        "id": 265,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberName": "sender",
                                                                        "nodeType": "MemberAccess",
                                                                        "src": "719:10:3",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address_payable",
                                                                            "typeString": "address payable"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "705:25:3",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Participant_$246_storage",
                                                                        "typeString": "struct GiveAway.Participant storage ref"
                                                                    }
                                                                },
                                                                "id": 267,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "id",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 242,
                                                                "src": "705:28:3",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_storage",
                                                                    "typeString": "bytes storage ref"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_storage",
                                                                    "typeString": "bytes storage ref"
                                                                }
                                                            ],
                                                            "id": 262,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "695:9:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 268,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "695:39:3",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "!=",
                                                    "rightExpression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "",
                                                                        "id": 272,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "754:2:3",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                            "typeString": "literal_string \"\""
                                                                        },
                                                                        "value": ""
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                            "typeString": "literal_string \"\""
                                                                        }
                                                                    ],
                                                                    "id": 271,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "748:5:3",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 270,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "748:5:3",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 273,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "748:9:3",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            ],
                                                            "id": 269,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "738:9:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 274,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "738:20:3",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "695:63:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "hexValue": "596f75206e65656420746f2076616c696461746520796f75722070617274696369706174696f6e",
                                                    "id": 276,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "760:41:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_97dabb653267b8d83c39834acee74aaa985c40213f1be62d854cd8d9fd88ee0a",
                                                        "typeString": "literal_string \"You need to validate your participation\""
                                                    },
                                                    "value": "You need to validate your participation"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_97dabb653267b8d83c39834acee74aaa985c40213f1be62d854cd8d9fd88ee0a",
                                                        "typeString": "literal_string \"You need to validate your participation\""
                                                    }
                                                ],
                                                "id": 261,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    -18,
                                                    -18
                                                ],
                                                "referencedDeclaration": -18,
                                                "src": "687:7:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 277,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "687:115:3",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 278,
                                        "nodeType": "ExpressionStatement",
                                        "src": "687:115:3"
                                    },
                                    {
                                        "id": 279,
                                        "nodeType": "PlaceholderStatement",
                                        "src": "812:1:3"
                                    }
                                ]
                            },
                            "id": 281,
                            "name": "onlyRegisteredUser",
                            "nodeType": "ModifierDefinition",
                            "parameters": {
                                "id": 260,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "670:2:3"
                            },
                            "src": "643:177:3",
                            "virtual": false,
                            "visibility": "internal"
                        },
                        {
                            "body": {
                                "id": 314,
                                "nodeType": "Block",
                                "src": "938:134:3",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 296,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 293,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "952:3:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 294,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "value",
                                                        "nodeType": "MemberAccess",
                                                        "src": "952:9:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": ">",
                                                    "rightExpression": {
                                                        "hexValue": "30",
                                                        "id": 295,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "962:1:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "952:11:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                ],
                                                "id": 292,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    -18,
                                                    -18
                                                ],
                                                "referencedDeclaration": -18,
                                                "src": "944:7:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                                                    "typeString": "function (bool) pure"
                                                }
                                            },
                                            "id": 297,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "944:20:3",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 298,
                                        "nodeType": "ExpressionStatement",
                                        "src": "944:20:3"
                                    },
                                    {
                                        "expression": {
                                            "id": 301,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "id": 299,
                                                "name": "_maxParticipants",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 250,
                                                "src": "970:16:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "id": 300,
                                                "name": "maxParticipants",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 285,
                                                "src": "989:15:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "970:34:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 302,
                                        "nodeType": "ExpressionStatement",
                                        "src": "970:34:3"
                                    },
                                    {
                                        "expression": {
                                            "id": 305,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "id": 303,
                                                "name": "_name",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 248,
                                                "src": "1010:5:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_storage",
                                                    "typeString": "string storage ref"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "id": 304,
                                                "name": "name",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 283,
                                                "src": "1018:4:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_string_memory_ptr",
                                                    "typeString": "string memory"
                                                }
                                            },
                                            "src": "1010:12:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage",
                                                "typeString": "string storage ref"
                                            }
                                        },
                                        "id": 306,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1010:12:3"
                                    },
                                    {
                                        "expression": {
                                            "id": 312,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "id": 307,
                                                "name": "_rules",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 252,
                                                "src": "1028:6:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Rules_$240_storage",
                                                    "typeString": "struct GiveAway.Rules storage ref"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "arguments": [
                                                    {
                                                        "id": 309,
                                                        "name": "scoreRetweet",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 287,
                                                        "src": "1043:12:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    {
                                                        "id": 310,
                                                        "name": "scoreLike",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 289,
                                                        "src": "1057:9:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        },
                                                        {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    ],
                                                    "id": 308,
                                                    "name": "Rules",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 240,
                                                    "src": "1037:5:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_struct$_Rules_$240_storage_ptr_$",
                                                        "typeString": "type(struct GiveAway.Rules storage pointer)"
                                                    }
                                                },
                                                "id": 311,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "structConstructorCall",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1037:30:3",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_struct$_Rules_$240_memory_ptr",
                                                    "typeString": "struct GiveAway.Rules memory"
                                                }
                                            },
                                            "src": "1028:39:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_struct$_Rules_$240_storage",
                                                "typeString": "struct GiveAway.Rules storage ref"
                                            }
                                        },
                                        "id": 313,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1028:39:3"
                                    }
                                ]
                            },
                            "id": 315,
                            "implemented": true,
                            "kind": "constructor",
                            "modifiers": [],
                            "name": "",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 290,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 283,
                                        "mutability": "mutable",
                                        "name": "name",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 315,
                                        "src": "837:18:3",
                                        "stateVariable": false,
                                        "storageLocation": "memory",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string"
                                        },
                                        "typeName": {
                                            "id": 282,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "837:6:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 285,
                                        "mutability": "mutable",
                                        "name": "maxParticipants",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 315,
                                        "src": "857:23:3",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 284,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "857:7:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 287,
                                        "mutability": "mutable",
                                        "name": "scoreRetweet",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 315,
                                        "src": "882:20:3",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 286,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "882:7:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "visibility": "internal"
                                    },
                                    {
                                        "constant": false,
                                        "id": 289,
                                        "mutability": "mutable",
                                        "name": "scoreLike",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 315,
                                        "src": "904:17:3",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 288,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "904:7:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "836:86:3"
                            },
                            "returnParameters": {
                                "id": 291,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "938:0:3"
                            },
                            "scope": 472,
                            "src": "824:248:3",
                            "stateMutability": "payable",
                            "virtual": false,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 364,
                                "nodeType": "Block",
                                "src": "1129:334:3",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 324,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "expression": {
                                                            "id": 321,
                                                            "name": "_listParticipants",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 255,
                                                            "src": "1145:17:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                                "typeString": "address[] storage ref"
                                                            }
                                                        },
                                                        "id": 322,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "length",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1145:24:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "<",
                                                    "rightExpression": {
                                                        "id": 323,
                                                        "name": "_maxParticipants",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 250,
                                                        "src": "1172:16:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "src": "1145:43:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "hexValue": "546865206d6178696d756d206e756d626572206f66207061727469636970616e74732069732072656163686564",
                                                    "id": 325,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1190:47:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_9ec69e18aff2d1731567ce336ae61ea76ecf0f140edbeec1d6d535b9b7f1716c",
                                                        "typeString": "literal_string \"The maximum number of participants is reached\""
                                                    },
                                                    "value": "The maximum number of participants is reached"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_9ec69e18aff2d1731567ce336ae61ea76ecf0f140edbeec1d6d535b9b7f1716c",
                                                        "typeString": "literal_string \"The maximum number of participants is reached\""
                                                    }
                                                ],
                                                "id": 320,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    -18,
                                                    -18
                                                ],
                                                "referencedDeclaration": -18,
                                                "src": "1137:7:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 326,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1137:101:3",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 327,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1137:101:3"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_bytes32",
                                                        "typeString": "bytes32"
                                                    },
                                                    "id": 342,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "arguments": [
                                                            {
                                                                "expression": {
                                                                    "baseExpression": {
                                                                        "id": 330,
                                                                        "name": "_participants",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": 259,
                                                                        "src": "1264:13:3",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Participant_$246_storage_$",
                                                                            "typeString": "mapping(address => struct GiveAway.Participant storage ref)"
                                                                        }
                                                                    },
                                                                    "id": 333,
                                                                    "indexExpression": {
                                                                        "expression": {
                                                                            "id": 331,
                                                                            "name": "msg",
                                                                            "nodeType": "Identifier",
                                                                            "overloadedDeclarations": [],
                                                                            "referencedDeclaration": -15,
                                                                            "src": "1278:3:3",
                                                                            "typeDescriptions": {
                                                                                "typeIdentifier": "t_magic_message",
                                                                                "typeString": "msg"
                                                                            }
                                                                        },
                                                                        "id": 332,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": false,
                                                                        "lValueRequested": false,
                                                                        "memberName": "sender",
                                                                        "nodeType": "MemberAccess",
                                                                        "src": "1278:10:3",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_address_payable",
                                                                            "typeString": "address payable"
                                                                        }
                                                                    },
                                                                    "isConstant": false,
                                                                    "isLValue": true,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "IndexAccess",
                                                                    "src": "1264:25:3",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_struct$_Participant_$246_storage",
                                                                        "typeString": "struct GiveAway.Participant storage ref"
                                                                    }
                                                                },
                                                                "id": 334,
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "memberName": "id",
                                                                "nodeType": "MemberAccess",
                                                                "referencedDeclaration": 242,
                                                                "src": "1264:28:3",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_storage",
                                                                    "typeString": "bytes storage ref"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_storage",
                                                                    "typeString": "bytes storage ref"
                                                                }
                                                            ],
                                                            "id": 329,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "1254:9:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 335,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1254:39:3",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "arguments": [
                                                            {
                                                                "arguments": [
                                                                    {
                                                                        "hexValue": "",
                                                                        "id": 339,
                                                                        "isConstant": false,
                                                                        "isLValue": false,
                                                                        "isPure": true,
                                                                        "kind": "string",
                                                                        "lValueRequested": false,
                                                                        "nodeType": "Literal",
                                                                        "src": "1313:2:3",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                            "typeString": "literal_string \"\""
                                                                        },
                                                                        "value": ""
                                                                    }
                                                                ],
                                                                "expression": {
                                                                    "argumentTypes": [
                                                                        {
                                                                            "typeIdentifier": "t_stringliteral_c5d2460186f7233c927e7db2dcc703c0e500b653ca82273b7bfad8045d85a470",
                                                                            "typeString": "literal_string \"\""
                                                                        }
                                                                    ],
                                                                    "id": 338,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": true,
                                                                    "lValueRequested": false,
                                                                    "nodeType": "ElementaryTypeNameExpression",
                                                                    "src": "1307:5:3",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                                        "typeString": "type(bytes storage pointer)"
                                                                    },
                                                                    "typeName": {
                                                                        "id": 337,
                                                                        "name": "bytes",
                                                                        "nodeType": "ElementaryTypeName",
                                                                        "src": "1307:5:3",
                                                                        "typeDescriptions": {}
                                                                    }
                                                                },
                                                                "id": 340,
                                                                "isConstant": false,
                                                                "isLValue": false,
                                                                "isPure": true,
                                                                "kind": "typeConversion",
                                                                "lValueRequested": false,
                                                                "names": [],
                                                                "nodeType": "FunctionCall",
                                                                "src": "1307:9:3",
                                                                "tryCall": false,
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            }
                                                        ],
                                                        "expression": {
                                                            "argumentTypes": [
                                                                {
                                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                                    "typeString": "bytes memory"
                                                                }
                                                            ],
                                                            "id": 336,
                                                            "name": "keccak256",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -8,
                                                            "src": "1297:9:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                                                                "typeString": "function (bytes memory) pure returns (bytes32)"
                                                            }
                                                        },
                                                        "id": 341,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "functionCall",
                                                        "lValueRequested": false,
                                                        "names": [],
                                                        "nodeType": "FunctionCall",
                                                        "src": "1297:20:3",
                                                        "tryCall": false,
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_bytes32",
                                                            "typeString": "bytes32"
                                                        }
                                                    },
                                                    "src": "1254:63:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "hexValue": "596f75206861766520616c72656164792076616c69646174656420796f75722070617274696369706174696f6e",
                                                    "id": 343,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1319:47:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_12aaf6d45f415236cd0d448c205a968344a8076b1e3dd330fe845272a68c33c5",
                                                        "typeString": "literal_string \"You have already validated your participation\""
                                                    },
                                                    "value": "You have already validated your participation"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_12aaf6d45f415236cd0d448c205a968344a8076b1e3dd330fe845272a68c33c5",
                                                        "typeString": "literal_string \"You have already validated your participation\""
                                                    }
                                                ],
                                                "id": 328,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    -18,
                                                    -18
                                                ],
                                                "referencedDeclaration": -18,
                                                "src": "1246:7:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 344,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1246:121:3",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 345,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1246:121:3"
                                    },
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 349,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "1398:3:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 350,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1398:10:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                ],
                                                "expression": {
                                                    "id": 346,
                                                    "name": "_listParticipants",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 255,
                                                    "src": "1375:17:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                                        "typeString": "address[] storage ref"
                                                    }
                                                },
                                                "id": 348,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "memberName": "push",
                                                "nodeType": "MemberAccess",
                                                "src": "1375:22:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$__$",
                                                    "typeString": "function (address)"
                                                }
                                            },
                                            "id": 351,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1375:34:3",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 352,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1375:34:3"
                                    },
                                    {
                                        "expression": {
                                            "id": 362,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "expression": {
                                                    "baseExpression": {
                                                        "id": 353,
                                                        "name": "_participants",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 259,
                                                        "src": "1417:13:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Participant_$246_storage_$",
                                                            "typeString": "mapping(address => struct GiveAway.Participant storage ref)"
                                                        }
                                                    },
                                                    "id": 356,
                                                    "indexExpression": {
                                                        "expression": {
                                                            "id": 354,
                                                            "name": "msg",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": -15,
                                                            "src": "1431:3:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_magic_message",
                                                                "typeString": "msg"
                                                            }
                                                        },
                                                        "id": 355,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "sender",
                                                        "nodeType": "MemberAccess",
                                                        "src": "1431:10:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_address_payable",
                                                            "typeString": "address payable"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "1417:25:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_struct$_Participant_$246_storage",
                                                        "typeString": "struct GiveAway.Participant storage ref"
                                                    }
                                                },
                                                "id": 357,
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "memberName": "id",
                                                "nodeType": "MemberAccess",
                                                "referencedDeclaration": 242,
                                                "src": "1417:28:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_storage",
                                                    "typeString": "bytes storage ref"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "arguments": [
                                                    {
                                                        "id": 360,
                                                        "name": "id",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 317,
                                                        "src": "1454:2:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    }
                                                ],
                                                "expression": {
                                                    "argumentTypes": [
                                                        {
                                                            "typeIdentifier": "t_string_memory_ptr",
                                                            "typeString": "string memory"
                                                        }
                                                    ],
                                                    "id": 359,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "lValueRequested": false,
                                                    "nodeType": "ElementaryTypeNameExpression",
                                                    "src": "1448:5:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_type$_t_bytes_storage_ptr_$",
                                                        "typeString": "type(bytes storage pointer)"
                                                    },
                                                    "typeName": {
                                                        "id": 358,
                                                        "name": "bytes",
                                                        "nodeType": "ElementaryTypeName",
                                                        "src": "1448:5:3",
                                                        "typeDescriptions": {}
                                                    }
                                                },
                                                "id": 361,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "kind": "typeConversion",
                                                "lValueRequested": false,
                                                "names": [],
                                                "nodeType": "FunctionCall",
                                                "src": "1448:9:3",
                                                "tryCall": false,
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_bytes_memory_ptr",
                                                    "typeString": "bytes memory"
                                                }
                                            },
                                            "src": "1417:40:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_bytes_storage",
                                                "typeString": "bytes storage ref"
                                            }
                                        },
                                        "id": 363,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1417:40:3"
                                    }
                                ]
                            },
                            "functionSelector": "1d27769f",
                            "id": 365,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "participate",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 318,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 317,
                                        "mutability": "mutable",
                                        "name": "id",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 365,
                                        "src": "1097:16:3",
                                        "stateVariable": false,
                                        "storageLocation": "memory",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_string_memory_ptr",
                                            "typeString": "string"
                                        },
                                        "typeName": {
                                            "id": 316,
                                            "name": "string",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1097:6:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_string_storage_ptr",
                                                "typeString": "string"
                                            }
                                        },
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1096:18:3"
                            },
                            "returnParameters": {
                                "id": 319,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1129:0:3"
                            },
                            "scope": 472,
                            "src": "1076:387:3",
                            "stateMutability": "payable",
                            "virtual": false,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 393,
                                "nodeType": "Block",
                                "src": "1519:162:3",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 379,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "baseExpression": {
                                                            "expression": {
                                                                "baseExpression": {
                                                                    "id": 371,
                                                                    "name": "_participants",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 259,
                                                                    "src": "1535:13:3",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Participant_$246_storage_$",
                                                                        "typeString": "mapping(address => struct GiveAway.Participant storage ref)"
                                                                    }
                                                                },
                                                                "id": 374,
                                                                "indexExpression": {
                                                                    "expression": {
                                                                        "id": 372,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -15,
                                                                        "src": "1549:3:3",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 373,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "1549:10:3",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address_payable",
                                                                        "typeString": "address payable"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "1535:25:3",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Participant_$246_storage",
                                                                    "typeString": "struct GiveAway.Participant storage ref"
                                                                }
                                                            },
                                                            "id": 375,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "status",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 245,
                                                            "src": "1535:32:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                                "typeString": "uint256[] storage ref"
                                                            }
                                                        },
                                                        "id": 377,
                                                        "indexExpression": {
                                                            "id": 376,
                                                            "name": "RETWEET_INDEX",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 232,
                                                            "src": "1568:13:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "1535:47:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "hexValue": "30",
                                                        "id": 378,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1586:1:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "1535:52:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "hexValue": "596f752063616e206f6e6c792072657477656574206f6e6365",
                                                    "id": 380,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1589:27:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_87aa9551c916eefcbae4b10a809be8a8c44ffc2377faf25907c25ed87358181c",
                                                        "typeString": "literal_string \"You can only retweet once\""
                                                    },
                                                    "value": "You can only retweet once"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_87aa9551c916eefcbae4b10a809be8a8c44ffc2377faf25907c25ed87358181c",
                                                        "typeString": "literal_string \"You can only retweet once\""
                                                    }
                                                ],
                                                "id": 370,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    -18,
                                                    -18
                                                ],
                                                "referencedDeclaration": -18,
                                                "src": "1527:7:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 381,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1527:90:3",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 382,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1527:90:3"
                                    },
                                    {
                                        "expression": {
                                            "id": 391,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "baseExpression": {
                                                    "expression": {
                                                        "baseExpression": {
                                                            "id": 383,
                                                            "name": "_participants",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 259,
                                                            "src": "1625:13:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Participant_$246_storage_$",
                                                                "typeString": "mapping(address => struct GiveAway.Participant storage ref)"
                                                            }
                                                        },
                                                        "id": 386,
                                                        "indexExpression": {
                                                            "expression": {
                                                                "id": 384,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1639:3:3",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 385,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1639:10:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address_payable",
                                                                "typeString": "address payable"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "1625:25:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Participant_$246_storage",
                                                            "typeString": "struct GiveAway.Participant storage ref"
                                                        }
                                                    },
                                                    "id": 387,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "status",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 245,
                                                    "src": "1625:32:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                        "typeString": "uint256[] storage ref"
                                                    }
                                                },
                                                "id": 389,
                                                "indexExpression": {
                                                    "id": 388,
                                                    "name": "RETWEET_INDEX",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 232,
                                                    "src": "1658:13:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "IndexAccess",
                                                "src": "1625:47:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "hexValue": "31",
                                                "id": 390,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1675:1:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "src": "1625:51:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 392,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1625:51:3"
                                    }
                                ]
                            },
                            "functionSelector": "f578ebaa",
                            "id": 394,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [
                                {
                                    "id": 368,
                                    "modifierName": {
                                        "id": 367,
                                        "name": "onlyRegisteredUser",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 281,
                                        "src": "1501:18:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_modifier$__$",
                                            "typeString": "modifier ()"
                                        }
                                    },
                                    "nodeType": "ModifierInvocation",
                                    "src": "1501:18:3"
                                }
                            ],
                            "name": "retweet",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 366,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1483:2:3"
                            },
                            "returnParameters": {
                                "id": 369,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1519:0:3"
                            },
                            "scope": 472,
                            "src": "1467:214:3",
                            "stateMutability": "payable",
                            "virtual": false,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 422,
                                "nodeType": "Block",
                                "src": "1735:154:3",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "commonType": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    },
                                                    "id": 408,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "leftExpression": {
                                                        "baseExpression": {
                                                            "expression": {
                                                                "baseExpression": {
                                                                    "id": 400,
                                                                    "name": "_participants",
                                                                    "nodeType": "Identifier",
                                                                    "overloadedDeclarations": [],
                                                                    "referencedDeclaration": 259,
                                                                    "src": "1751:13:3",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Participant_$246_storage_$",
                                                                        "typeString": "mapping(address => struct GiveAway.Participant storage ref)"
                                                                    }
                                                                },
                                                                "id": 403,
                                                                "indexExpression": {
                                                                    "expression": {
                                                                        "id": 401,
                                                                        "name": "msg",
                                                                        "nodeType": "Identifier",
                                                                        "overloadedDeclarations": [],
                                                                        "referencedDeclaration": -15,
                                                                        "src": "1765:3:3",
                                                                        "typeDescriptions": {
                                                                            "typeIdentifier": "t_magic_message",
                                                                            "typeString": "msg"
                                                                        }
                                                                    },
                                                                    "id": 402,
                                                                    "isConstant": false,
                                                                    "isLValue": false,
                                                                    "isPure": false,
                                                                    "lValueRequested": false,
                                                                    "memberName": "sender",
                                                                    "nodeType": "MemberAccess",
                                                                    "src": "1765:10:3",
                                                                    "typeDescriptions": {
                                                                        "typeIdentifier": "t_address_payable",
                                                                        "typeString": "address payable"
                                                                    }
                                                                },
                                                                "isConstant": false,
                                                                "isLValue": true,
                                                                "isPure": false,
                                                                "lValueRequested": false,
                                                                "nodeType": "IndexAccess",
                                                                "src": "1751:25:3",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_struct$_Participant_$246_storage",
                                                                    "typeString": "struct GiveAway.Participant storage ref"
                                                                }
                                                            },
                                                            "id": 404,
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "status",
                                                            "nodeType": "MemberAccess",
                                                            "referencedDeclaration": 245,
                                                            "src": "1751:32:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                                "typeString": "uint256[] storage ref"
                                                            }
                                                        },
                                                        "id": 406,
                                                        "indexExpression": {
                                                            "id": 405,
                                                            "name": "LIKE_INDEX",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 235,
                                                            "src": "1784:10:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_uint256",
                                                                "typeString": "uint256"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "1751:44:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "nodeType": "BinaryOperation",
                                                    "operator": "==",
                                                    "rightExpression": {
                                                        "hexValue": "30",
                                                        "id": 407,
                                                        "isConstant": false,
                                                        "isLValue": false,
                                                        "isPure": true,
                                                        "kind": "number",
                                                        "lValueRequested": false,
                                                        "nodeType": "Literal",
                                                        "src": "1799:1:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_rational_0_by_1",
                                                            "typeString": "int_const 0"
                                                        },
                                                        "value": "0"
                                                    },
                                                    "src": "1751:49:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    }
                                                },
                                                {
                                                    "hexValue": "596f752063616e206f6e6c79206c696b65206f6e6365",
                                                    "id": 409,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": true,
                                                    "kind": "string",
                                                    "lValueRequested": false,
                                                    "nodeType": "Literal",
                                                    "src": "1802:24:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_stringliteral_6385cd7d017bc516f5a60a4468510e7408304d4beaefc2d01a78edd00553b2fd",
                                                        "typeString": "literal_string \"You can only like once\""
                                                    },
                                                    "value": "You can only like once"
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_bool",
                                                        "typeString": "bool"
                                                    },
                                                    {
                                                        "typeIdentifier": "t_stringliteral_6385cd7d017bc516f5a60a4468510e7408304d4beaefc2d01a78edd00553b2fd",
                                                        "typeString": "literal_string \"You can only like once\""
                                                    }
                                                ],
                                                "id": 399,
                                                "name": "require",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [
                                                    -18,
                                                    -18
                                                ],
                                                "referencedDeclaration": -18,
                                                "src": "1743:7:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                                                    "typeString": "function (bool,string memory) pure"
                                                }
                                            },
                                            "id": 410,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1743:84:3",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 411,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1743:84:3"
                                    },
                                    {
                                        "expression": {
                                            "id": 420,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftHandSide": {
                                                "baseExpression": {
                                                    "expression": {
                                                        "baseExpression": {
                                                            "id": 412,
                                                            "name": "_participants",
                                                            "nodeType": "Identifier",
                                                            "overloadedDeclarations": [],
                                                            "referencedDeclaration": 259,
                                                            "src": "1835:13:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Participant_$246_storage_$",
                                                                "typeString": "mapping(address => struct GiveAway.Participant storage ref)"
                                                            }
                                                        },
                                                        "id": 415,
                                                        "indexExpression": {
                                                            "expression": {
                                                                "id": 413,
                                                                "name": "msg",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": -15,
                                                                "src": "1849:3:3",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_magic_message",
                                                                    "typeString": "msg"
                                                                }
                                                            },
                                                            "id": 414,
                                                            "isConstant": false,
                                                            "isLValue": false,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "memberName": "sender",
                                                            "nodeType": "MemberAccess",
                                                            "src": "1849:10:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_address_payable",
                                                                "typeString": "address payable"
                                                            }
                                                        },
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "nodeType": "IndexAccess",
                                                        "src": "1835:25:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Participant_$246_storage",
                                                            "typeString": "struct GiveAway.Participant storage ref"
                                                        }
                                                    },
                                                    "id": 416,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "status",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 245,
                                                    "src": "1835:32:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                        "typeString": "uint256[] storage ref"
                                                    }
                                                },
                                                "id": 418,
                                                "indexExpression": {
                                                    "id": 417,
                                                    "name": "LIKE_INDEX",
                                                    "nodeType": "Identifier",
                                                    "overloadedDeclarations": [],
                                                    "referencedDeclaration": 235,
                                                    "src": "1868:10:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "isConstant": false,
                                                "isLValue": true,
                                                "isPure": false,
                                                "lValueRequested": true,
                                                "nodeType": "IndexAccess",
                                                "src": "1835:44:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "Assignment",
                                            "operator": "=",
                                            "rightHandSide": {
                                                "hexValue": "31",
                                                "id": 419,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": true,
                                                "kind": "number",
                                                "lValueRequested": false,
                                                "nodeType": "Literal",
                                                "src": "1882:1:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_rational_1_by_1",
                                                    "typeString": "int_const 1"
                                                },
                                                "value": "1"
                                            },
                                            "src": "1835:48:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "id": 421,
                                        "nodeType": "ExpressionStatement",
                                        "src": "1835:48:3"
                                    }
                                ]
                            },
                            "functionSelector": "a523b88a",
                            "id": 423,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [
                                {
                                    "id": 397,
                                    "modifierName": {
                                        "id": 396,
                                        "name": "onlyRegisteredUser",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 281,
                                        "src": "1716:18:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_modifier$__$",
                                            "typeString": "modifier ()"
                                        }
                                    },
                                    "nodeType": "ModifierInvocation",
                                    "src": "1716:18:3"
                                }
                            ],
                            "name": "like",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 395,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1698:2:3"
                            },
                            "returnParameters": {
                                "id": 398,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1735:0:3"
                            },
                            "scope": 472,
                            "src": "1685:204:3",
                            "stateMutability": "payable",
                            "virtual": false,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 433,
                                "nodeType": "Block",
                                "src": "1945:40:3",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [
                                                {
                                                    "expression": {
                                                        "id": 429,
                                                        "name": "msg",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": -15,
                                                        "src": "1969:3:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_magic_message",
                                                            "typeString": "msg"
                                                        }
                                                    },
                                                    "id": 430,
                                                    "isConstant": false,
                                                    "isLValue": false,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "sender",
                                                    "nodeType": "MemberAccess",
                                                    "src": "1969:10:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                }
                                            ],
                                            "expression": {
                                                "argumentTypes": [
                                                    {
                                                        "typeIdentifier": "t_address_payable",
                                                        "typeString": "address payable"
                                                    }
                                                ],
                                                "id": 428,
                                                "name": "getScore",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 462,
                                                "src": "1960:8:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_view$_t_address_$returns$_t_uint256_$",
                                                    "typeString": "function (address) view returns (uint256)"
                                                }
                                            },
                                            "id": 431,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "1960:20:3",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 427,
                                        "id": 432,
                                        "nodeType": "Return",
                                        "src": "1953:27:3"
                                    }
                                ]
                            },
                            "functionSelector": "f1599f2c",
                            "id": 434,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getMyScore",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 424,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "1912:2:3"
                            },
                            "returnParameters": {
                                "id": 427,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 426,
                                        "mutability": "mutable",
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 434,
                                        "src": "1936:7:3",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 425,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "1936:7:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "1935:9:3"
                            },
                            "scope": 472,
                            "src": "1893:92:3",
                            "stateMutability": "view",
                            "virtual": false,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 461,
                                "nodeType": "Block",
                                "src": "2058:168:3",
                                "statements": [
                                    {
                                        "expression": {
                                            "commonType": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            },
                                            "id": 459,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "lValueRequested": false,
                                            "leftExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 449,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "baseExpression": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "id": 441,
                                                                "name": "_participants",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 259,
                                                                "src": "2071:13:3",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Participant_$246_storage_$",
                                                                    "typeString": "mapping(address => struct GiveAway.Participant storage ref)"
                                                                }
                                                            },
                                                            "id": 443,
                                                            "indexExpression": {
                                                                "id": 442,
                                                                "name": "participant",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 436,
                                                                "src": "2085:11:3",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "2071:26:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Participant_$246_storage",
                                                                "typeString": "struct GiveAway.Participant storage ref"
                                                            }
                                                        },
                                                        "id": 444,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "status",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 245,
                                                        "src": "2071:33:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                            "typeString": "uint256[] storage ref"
                                                        }
                                                    },
                                                    "id": 446,
                                                    "indexExpression": {
                                                        "id": 445,
                                                        "name": "RETWEET_INDEX",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 232,
                                                        "src": "2105:13:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "2071:48:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "*",
                                                "rightExpression": {
                                                    "expression": {
                                                        "id": 447,
                                                        "name": "_rules",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 252,
                                                        "src": "2122:6:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Rules_$240_storage",
                                                            "typeString": "struct GiveAway.Rules storage ref"
                                                        }
                                                    },
                                                    "id": 448,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "scoreRetweet",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 237,
                                                    "src": "2122:19:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2071:70:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "nodeType": "BinaryOperation",
                                            "operator": "+",
                                            "rightExpression": {
                                                "commonType": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                },
                                                "id": 458,
                                                "isConstant": false,
                                                "isLValue": false,
                                                "isPure": false,
                                                "lValueRequested": false,
                                                "leftExpression": {
                                                    "baseExpression": {
                                                        "expression": {
                                                            "baseExpression": {
                                                                "id": 450,
                                                                "name": "_participants",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 259,
                                                                "src": "2156:13:3",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_mapping$_t_address_$_t_struct$_Participant_$246_storage_$",
                                                                    "typeString": "mapping(address => struct GiveAway.Participant storage ref)"
                                                                }
                                                            },
                                                            "id": 452,
                                                            "indexExpression": {
                                                                "id": 451,
                                                                "name": "participant",
                                                                "nodeType": "Identifier",
                                                                "overloadedDeclarations": [],
                                                                "referencedDeclaration": 436,
                                                                "src": "2170:11:3",
                                                                "typeDescriptions": {
                                                                    "typeIdentifier": "t_address",
                                                                    "typeString": "address"
                                                                }
                                                            },
                                                            "isConstant": false,
                                                            "isLValue": true,
                                                            "isPure": false,
                                                            "lValueRequested": false,
                                                            "nodeType": "IndexAccess",
                                                            "src": "2156:26:3",
                                                            "typeDescriptions": {
                                                                "typeIdentifier": "t_struct$_Participant_$246_storage",
                                                                "typeString": "struct GiveAway.Participant storage ref"
                                                            }
                                                        },
                                                        "id": 453,
                                                        "isConstant": false,
                                                        "isLValue": true,
                                                        "isPure": false,
                                                        "lValueRequested": false,
                                                        "memberName": "status",
                                                        "nodeType": "MemberAccess",
                                                        "referencedDeclaration": 245,
                                                        "src": "2156:33:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_array$_t_uint256_$dyn_storage",
                                                            "typeString": "uint256[] storage ref"
                                                        }
                                                    },
                                                    "id": 455,
                                                    "indexExpression": {
                                                        "id": 454,
                                                        "name": "LIKE_INDEX",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 235,
                                                        "src": "2190:10:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_uint256",
                                                            "typeString": "uint256"
                                                        }
                                                    },
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "nodeType": "IndexAccess",
                                                    "src": "2156:45:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "nodeType": "BinaryOperation",
                                                "operator": "*",
                                                "rightExpression": {
                                                    "expression": {
                                                        "id": 456,
                                                        "name": "_rules",
                                                        "nodeType": "Identifier",
                                                        "overloadedDeclarations": [],
                                                        "referencedDeclaration": 252,
                                                        "src": "2204:6:3",
                                                        "typeDescriptions": {
                                                            "typeIdentifier": "t_struct$_Rules_$240_storage",
                                                            "typeString": "struct GiveAway.Rules storage ref"
                                                        }
                                                    },
                                                    "id": 457,
                                                    "isConstant": false,
                                                    "isLValue": true,
                                                    "isPure": false,
                                                    "lValueRequested": false,
                                                    "memberName": "scoreLike",
                                                    "nodeType": "MemberAccess",
                                                    "referencedDeclaration": 239,
                                                    "src": "2204:16:3",
                                                    "typeDescriptions": {
                                                        "typeIdentifier": "t_uint256",
                                                        "typeString": "uint256"
                                                    }
                                                },
                                                "src": "2156:64:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_uint256",
                                                    "typeString": "uint256"
                                                }
                                            },
                                            "src": "2071:149:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "functionReturnParameters": 440,
                                        "id": 460,
                                        "nodeType": "Return",
                                        "src": "2064:156:3"
                                    }
                                ]
                            },
                            "functionSelector": "d47875d0",
                            "id": 462,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [],
                            "name": "getScore",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 437,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 436,
                                        "mutability": "mutable",
                                        "name": "participant",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 462,
                                        "src": "2007:19:3",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_address",
                                            "typeString": "address"
                                        },
                                        "typeName": {
                                            "id": 435,
                                            "name": "address",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2007:7:3",
                                            "stateMutability": "nonpayable",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_address",
                                                "typeString": "address"
                                            }
                                        },
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2006:21:3"
                            },
                            "returnParameters": {
                                "id": 440,
                                "nodeType": "ParameterList",
                                "parameters": [
                                    {
                                        "constant": false,
                                        "id": 439,
                                        "mutability": "mutable",
                                        "name": "",
                                        "nodeType": "VariableDeclaration",
                                        "scope": 462,
                                        "src": "2049:7:3",
                                        "stateVariable": false,
                                        "storageLocation": "default",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_uint256",
                                            "typeString": "uint256"
                                        },
                                        "typeName": {
                                            "id": 438,
                                            "name": "uint256",
                                            "nodeType": "ElementaryTypeName",
                                            "src": "2049:7:3",
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_uint256",
                                                "typeString": "uint256"
                                            }
                                        },
                                        "visibility": "internal"
                                    }
                                ],
                                "src": "2048:9:3"
                            },
                            "scope": 472,
                            "src": "1989:237:3",
                            "stateMutability": "view",
                            "virtual": false,
                            "visibility": "public"
                        },
                        {
                            "body": {
                                "id": 470,
                                "nodeType": "Block",
                                "src": "2280:19:3",
                                "statements": [
                                    {
                                        "expression": {
                                            "arguments": [],
                                            "expression": {
                                                "argumentTypes": [],
                                                "id": 467,
                                                "name": "_pause",
                                                "nodeType": "Identifier",
                                                "overloadedDeclarations": [],
                                                "referencedDeclaration": 204,
                                                "src": "2286:6:3",
                                                "typeDescriptions": {
                                                    "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                                                    "typeString": "function ()"
                                                }
                                            },
                                            "id": 468,
                                            "isConstant": false,
                                            "isLValue": false,
                                            "isPure": false,
                                            "kind": "functionCall",
                                            "lValueRequested": false,
                                            "names": [],
                                            "nodeType": "FunctionCall",
                                            "src": "2286:8:3",
                                            "tryCall": false,
                                            "typeDescriptions": {
                                                "typeIdentifier": "t_tuple$__$",
                                                "typeString": "tuple()"
                                            }
                                        },
                                        "id": 469,
                                        "nodeType": "ExpressionStatement",
                                        "src": "2286:8:3"
                                    }
                                ]
                            },
                            "functionSelector": "43d726d6",
                            "id": 471,
                            "implemented": true,
                            "kind": "function",
                            "modifiers": [
                                {
                                    "id": 465,
                                    "modifierName": {
                                        "id": 464,
                                        "name": "onlyRegisteredUser",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 281,
                                        "src": "2262:18:3",
                                        "typeDescriptions": {
                                            "typeIdentifier": "t_modifier$__$",
                                            "typeString": "modifier ()"
                                        }
                                    },
                                    "nodeType": "ModifierInvocation",
                                    "src": "2262:18:3"
                                }
                            ],
                            "name": "close",
                            "nodeType": "FunctionDefinition",
                            "parameters": {
                                "id": 463,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "2244:2:3"
                            },
                            "returnParameters": {
                                "id": 466,
                                "nodeType": "ParameterList",
                                "parameters": [],
                                "src": "2280:0:3"
                            },
                            "scope": 472,
                            "src": "2230:69:3",
                            "stateMutability": "payable",
                            "virtual": false,
                            "visibility": "public"
                        }
                    ],
                    "scope": 473,
                    "src": "205:2098:3"
                }
            ],
            "src": "65:2239:3"
        },
        "bytecode": "0x6080604052604051620018d2380380620018d2833981810160405260808110156200002957600080fd5b81019080805160405193929190846401000000008211156200004a57600080fd5b838201915060208201858111156200006157600080fd5b82518660018202830111640100000000821117156200007f57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000b557808201518184015260208101905062000098565b50505050905090810190601f168015620000e35780820380516001836020036101000a031916815260200191505b5060405260200180519060200190929190805190602001909291908051906020019092919050505060006200011d6200023b60201b60201c565b9050806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055508073ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a35060008060146101000a81548160ff02191690831515021790555060003411620001e357600080fd5b8260028190555083600190805190602001906200020292919062000243565b506040518060400160405280838152602001828152506003600082015181600001556020820151816001015590505050505050620002f9565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f0160209004810192826200027b5760008555620002c7565b82601f106200029657805160ff1916838001178555620002c7565b82800160010185558215620002c7579182015b82811115620002c6578251825591602001919060010190620002a9565b5b509050620002d69190620002da565b5090565b5b80821115620002f5576000816000905550600101620002db565b5090565b6115c980620003096000396000f3fe6080604052600436106100f35760003560e01c8063b5e9757c1161008a578063f1599f2c11610059578063f1599f2c1461048c578063f2fde38b146104b7578063f578ebaa14610508578063f60e49b514610512576100f3565b8063b5e9757c146102a2578063d28d8852146102cd578063d47875d01461035d578063d5fedc50146103c2576100f3565b8063715018a6116100c6578063715018a6146102155780638a258aa81461022c5780638da5cb5b14610257578063a523b88a14610298576100f3565b80631d27769f146100f857806327c87c33146101b357806343d726d6146101de5780635c975abb146101e8575b600080fd5b6101b16004803603602081101561010e57600080fd5b810190808035906020019064010000000081111561012b57600080fd5b82018360208201111561013d57600080fd5b8035906020019184600183028401116401000000008311171561015f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610544565b005b3480156101bf57600080fd5b506101c8610777565b6040518082815260200191505060405180910390f35b6101e661077c565b005b3480156101f457600080fd5b506101fd61089e565b60405180821515815260200191505060405180910390f35b34801561022157600080fd5b5061022a6108b4565b005b34801561023857600080fd5b50610241610a3a565b6040518082815260200191505060405180910390f35b34801561026357600080fd5b5061026c610a3f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102a0610a68565b005b3480156102ae57600080fd5b506102b7610cae565b6040518082815260200191505060405180910390f35b3480156102d957600080fd5b506102e2610cb4565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610322578082015181840152602081019050610307565b50505050905090810190601f16801561034f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561036957600080fd5b506103ac6004803603602081101561038057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d52565b6040518082815260200191505060405180910390f35b3480156103ce57600080fd5b50610411600480360360208110156103e557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e1c565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610451578082015181840152602081019050610436565b50505050905090810190601f16801561047e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561049857600080fd5b506104a1610ed2565b6040518082815260200191505060405180910390f35b3480156104c357600080fd5b50610506600480360360208110156104da57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ee2565b005b6105106110ed565b005b34801561051e57600080fd5b50610527611333565b604051808381526020018281526020019250505060405180910390f35b600254600580549050106105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180611567602d913960400191505060405180910390fd5b6040518060200160405280600081525080519060200120600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160405180828054600181600116156101000203166002900480156106575780601f10610635576101008083540402835291820191610657565b820191906000526020600020905b815481529060010190602001808311610643575b50509150506040518091039020146106ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806114ed602d913960400191505060405180910390fd5b6005339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000019080519060200190610773929190611441565b5050565b600181565b6040518060200160405280600081525080519060200120600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160405180828054600181600116156101000203166002900480156108305780601f1061080e576101008083540402835291820191610830565b820191906000526020600020905b81548152906001019060200180831161081c575b505091505060405180910390201415610894576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806115406027913960400191505060405180910390fd5b61089c611345565b565b60008060149054906101000a900460ff16905090565b6108bc611439565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461097c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600081565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6040518060200160405280600081525080519060200120600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016040518082805460018160011615610100020316600290048015610b1c5780601f10610afa576101008083540402835291820191610b1c565b820191906000526020600020905b815481529060010190602001808311610b08575b505091505060405180910390201415610b80576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806115406027913960400191505060405180910390fd5b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600181548110610bd057fe5b906000526020600020015414610c4e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f752063616e206f6e6c79206c696b65206f6e63650000000000000000000081525060200191505060405180910390fd5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600181548110610c9e57fe5b9060005260206000200181905550565b60025481565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d4a5780601f10610d1f57610100808354040283529160200191610d4a565b820191906000526020600020905b815481529060010190602001808311610d2d57829003601f168201915b505050505081565b6000600360010154600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600181548110610da857fe5b906000526020600020015402600360000154600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600081548110610e0857fe5b906000526020600020015402019050919050565b6006602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ec85780601f10610e9d57610100808354040283529160200191610ec8565b820191906000526020600020905b815481529060010190602001808311610eab57829003601f168201915b5050505050905081565b6000610edd33610d52565b905090565b610eea611439565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610faa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611030576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061151a6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6040518060200160405280600081525080519060200120600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160405180828054600181600116156101000203166002900480156111a15780601f1061117f5761010080835404028352918201916111a1565b820191906000526020600020905b81548152906001019060200180831161118d575b505091505060405180910390201415611205576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806115406027913960400191505060405180910390fd5b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154811061125557fe5b9060005260206000200154146112d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f596f752063616e206f6e6c792072657477656574206f6e63650000000000000081525060200191505060405180910390fd5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154811061132357fe5b9060005260206000200181905550565b60038060000154908060010154905082565b600060149054906101000a900460ff16156113c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600060146101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861140c611439565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261147757600085556114be565b82601f1061149057805160ff19168380011785556114be565b828001600101855582156114be579182015b828111156114bd5782518255916020019190600101906114a2565b5b5090506114cb91906114cf565b5090565b5b808211156114e85760008160009055506001016114d0565b509056fe596f75206861766520616c72656164792076616c69646174656420796f75722070617274696369706174696f6e4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373596f75206e65656420746f2076616c696461746520796f75722070617274696369706174696f6e546865206d6178696d756d206e756d626572206f66207061727469636970616e74732069732072656163686564a2646970667358221220c794dcfb305fb78c8c177bf9113055bf44a32c11c55248af68e89f278532aa3d64736f6c63430007050033",
        "deployedBytecode": "0x6080604052600436106100f35760003560e01c8063b5e9757c1161008a578063f1599f2c11610059578063f1599f2c1461048c578063f2fde38b146104b7578063f578ebaa14610508578063f60e49b514610512576100f3565b8063b5e9757c146102a2578063d28d8852146102cd578063d47875d01461035d578063d5fedc50146103c2576100f3565b8063715018a6116100c6578063715018a6146102155780638a258aa81461022c5780638da5cb5b14610257578063a523b88a14610298576100f3565b80631d27769f146100f857806327c87c33146101b357806343d726d6146101de5780635c975abb146101e8575b600080fd5b6101b16004803603602081101561010e57600080fd5b810190808035906020019064010000000081111561012b57600080fd5b82018360208201111561013d57600080fd5b8035906020019184600183028401116401000000008311171561015f57600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600081840152601f19601f820116905080830192505050505050509192919290505050610544565b005b3480156101bf57600080fd5b506101c8610777565b6040518082815260200191505060405180910390f35b6101e661077c565b005b3480156101f457600080fd5b506101fd61089e565b60405180821515815260200191505060405180910390f35b34801561022157600080fd5b5061022a6108b4565b005b34801561023857600080fd5b50610241610a3a565b6040518082815260200191505060405180910390f35b34801561026357600080fd5b5061026c610a3f565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6102a0610a68565b005b3480156102ae57600080fd5b506102b7610cae565b6040518082815260200191505060405180910390f35b3480156102d957600080fd5b506102e2610cb4565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610322578082015181840152602081019050610307565b50505050905090810190601f16801561034f5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561036957600080fd5b506103ac6004803603602081101561038057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610d52565b6040518082815260200191505060405180910390f35b3480156103ce57600080fd5b50610411600480360360208110156103e557600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610e1c565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610451578082015181840152602081019050610436565b50505050905090810190601f16801561047e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b34801561049857600080fd5b506104a1610ed2565b6040518082815260200191505060405180910390f35b3480156104c357600080fd5b50610506600480360360208110156104da57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610ee2565b005b6105106110ed565b005b34801561051e57600080fd5b50610527611333565b604051808381526020018281526020019250505060405180910390f35b600254600580549050106105a3576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d815260200180611567602d913960400191505060405180910390fd5b6040518060200160405280600081525080519060200120600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160405180828054600181600116156101000203166002900480156106575780601f10610635576101008083540402835291820191610657565b820191906000526020600020905b815481529060010190602001808311610643575b50509150506040518091039020146106ba576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602d8152602001806114ed602d913960400191505060405180910390fd5b6005339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555080600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000019080519060200190610773929190611441565b5050565b600181565b6040518060200160405280600081525080519060200120600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160405180828054600181600116156101000203166002900480156108305780601f1061080e576101008083540402835291820191610830565b820191906000526020600020905b81548152906001019060200180831161081c575b505091505060405180910390201415610894576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806115406027913960400191505060405180910390fd5b61089c611345565b565b60008060149054906101000a900460ff16905090565b6108bc611439565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161461097c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a360008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b600081565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16905090565b6040518060200160405280600081525080519060200120600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000016040518082805460018160011615610100020316600290048015610b1c5780601f10610afa576101008083540402835291820191610b1c565b820191906000526020600020905b815481529060010190602001808311610b08575b505091505060405180910390201415610b80576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806115406027913960400191505060405180910390fd5b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600181548110610bd057fe5b906000526020600020015414610c4e576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260168152602001807f596f752063616e206f6e6c79206c696b65206f6e63650000000000000000000081525060200191505060405180910390fd5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600181548110610c9e57fe5b9060005260206000200181905550565b60025481565b60018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610d4a5780601f10610d1f57610100808354040283529160200191610d4a565b820191906000526020600020905b815481529060010190602001808311610d2d57829003601f168201915b505050505081565b6000600360010154600660008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600181548110610da857fe5b906000526020600020015402600360000154600660008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600101600081548110610e0857fe5b906000526020600020015402019050919050565b6006602052806000526040600020600091509050806000018054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610ec85780601f10610e9d57610100808354040283529160200191610ec8565b820191906000526020600020905b815481529060010190602001808311610eab57829003601f168201915b5050505050905081565b6000610edd33610d52565b905090565b610eea611439565b73ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614610faa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260208152602001807f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e657281525060200191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415611030576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061151a6026913960400191505060405180910390fd5b8073ffffffffffffffffffffffffffffffffffffffff1660008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b6040518060200160405280600081525080519060200120600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060000160405180828054600181600116156101000203166002900480156111a15780601f1061117f5761010080835404028352918201916111a1565b820191906000526020600020905b81548152906001019060200180831161118d575b505091505060405180910390201415611205576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260278152602001806115406027913960400191505060405180910390fd5b6000600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154811061125557fe5b9060005260206000200154146112d3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260198152602001807f596f752063616e206f6e6c792072657477656574206f6e63650000000000000081525060200191505060405180910390fd5b6001600660003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060010160008154811061132357fe5b9060005260206000200181905550565b60038060000154908060010154905082565b600060149054906101000a900460ff16156113c8576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600060146101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861140c611439565b604051808273ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b600033905090565b828054600181600116156101000203166002900490600052602060002090601f01602090048101928261147757600085556114be565b82601f1061149057805160ff19168380011785556114be565b828001600101855582156114be579182015b828111156114bd5782518255916020019190600101906114a2565b5b5090506114cb91906114cf565b5090565b5b808211156114e85760008160009055506001016114d0565b509056fe596f75206861766520616c72656164792076616c69646174656420796f75722070617274696369706174696f6e4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373596f75206e65656420746f2076616c696461746520796f75722070617274696369706174696f6e546865206d6178696d756d206e756d626572206f66207061727469636970616e74732069732072656163686564a2646970667358221220c794dcfb305fb78c8c177bf9113055bf44a32c11c55248af68e89f278532aa3d64736f6c63430007050033",
        "compiler": {
            "name": "solc",
            "version": "0.7.5+commit.eb77ed08.Emscripten.clang",
            "optimizer": {
                "enabled": false,
                "runs": 200
            },
            "evmVersion": "petersburg"
        }
    }
;


export {
    GiveAwayArtifacts
};
