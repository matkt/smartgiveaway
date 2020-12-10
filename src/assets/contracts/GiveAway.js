const GiveAwayArtifacts =  {
  "fileName": "DemurrageableToken.sol",
  "contractName": "DemurrageableToken",
  "source": "// contracts/DemurrageableToken.sol\npragma solidity >=0.6.0 <0.8.0;\n\nimport \"@openzeppelin/contracts/token/ERC20/ERC20.sol\";\n\ncontract DemurrageableToken is ERC20{\n  uint256 public _demurrageRate;\n\n  constructor(string memory name, string memory symbol, uint256 initialSupply, uint256 demurrageRate) public payable ERC20(name, symbol){\n    _mint(msg.sender, initialSupply);\n    _demurrageRate = demurrageRate;\n  }\n\n  function demurrageRate() public view returns (uint256) {\n    return _demurrageRate;\n}\n}\n",
  "sourcePath": "contracts/DemurrageableToken.sol",
  "sourceMap": "126:378:4:-:0;;;200:213;;;;;;;;;;;;;;13:3:-1;8;5:12;2:2;;;30:1;27;20:12;2:2;200:213:4;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;200:213:4;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;200:213:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;200:213:4;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;200:213:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;321:4;327:6;2038:5:2;2030;:13;;;;;;;;;;;;:::i;:::-;;2063:7;2053;:17;;;;;;;;;;;;:::i;:::-;;2092:2;2080:9;;:14;;;;;;;;;;;;;;;;;;1956:145;;340:32:4::1;346:10;358:13;340:5;;;:32;;:::i;:::-;395:13;378:14;:30;;;;200:213:::0;;;;126:378;;7790:370:2;7892:1;7873:21;;:7;:21;;;;7865:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7941:49;7970:1;7974:7;7983:6;7941:20;;;:49;;:::i;:::-;8016:24;8033:6;8016:12;;:16;;;;;;:24;;;;:::i;:::-;8001:12;:39;;;;8071:30;8094:6;8071:9;:18;8081:7;8071:18;;;;;;;;;;;;;;;;:22;;;;;;:30;;;;:::i;:::-;8050:9;:18;8060:7;8050:18;;;;;;;;;;;;;;;:51;;;;8137:7;8116:37;;8133:1;8116:37;;;8146:6;8116:37;;;;;;;;;;;;;;;;;;7790:370;;:::o;10651:92::-;;;;:::o;882:176:1:-;940:7;959:9;975:1;971;:5;959:17;;999:1;994;:6;;986:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1050:1;1043:8;;;882:176;;;;:::o;126:378:4:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "126:378:4:-:0;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;126:378:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2166:81:2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2166:81:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4202:166;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4202:166:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3209:98;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4835:317;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;4835:317:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3068:81;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;166:29:4;;;:::i;:::-;;;;;;;;;;;;;;;;;;;5547:215:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;5547:215:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3365:117;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3365:117:2;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2360:85;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2360:85:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;6249:266;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;6249:266:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3685:172;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3685:172:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;417:85:4;;;:::i;:::-;;;;;;;;;;;;;;;;;;;3915:149:2;;;;;;13:2:-1;8:3;5:11;2:2;;;29:1;26;19:12;2:2;3915:149:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2166:81;2203:13;2235:5;2228:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2166:81;:::o;4202:166::-;4285:4;4301:39;4310:12;:10;:12::i;:::-;4324:7;4333:6;4301:8;:39::i;:::-;4357:4;4350:11;;4202:166;;;;:::o;3209:98::-;3262:7;3288:12;;3281:19;;3209:98;:::o;4835:317::-;4941:4;4957:36;4967:6;4975:9;4986:6;4957:9;:36::i;:::-;5003:121;5012:6;5020:12;:10;:12::i;:::-;5034:89;5072:6;5034:89;;;;;;;;;;;;;;;;;:11;:19;5046:6;5034:19;;;;;;;;;;;;;;;:33;5054:12;:10;:12::i;:::-;5034:33;;;;;;;;;;;;;;;;:37;;:89;;;;;:::i;:::-;5003:8;:121::i;:::-;5141:4;5134:11;;4835:317;;;;;:::o;3068:81::-;3109:5;3133:9;;;;;;;;;;;3126:16;;3068:81;:::o;166:29:4:-;;;;:::o;5547:215:2:-;5635:4;5651:83;5660:12;:10;:12::i;:::-;5674:7;5683:50;5722:10;5683:11;:25;5695:12;:10;:12::i;:::-;5683:25;;;;;;;;;;;;;;;:34;5709:7;5683:34;;;;;;;;;;;;;;;;:38;;:50;;;;:::i;:::-;5651:8;:83::i;:::-;5751:4;5744:11;;5547:215;;;;:::o;3365:117::-;3431:7;3457:9;:18;3467:7;3457:18;;;;;;;;;;;;;;;;3450:25;;3365:117;;;:::o;2360:85::-;2399:13;2431:7;2424:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2360:85;:::o;6249:266::-;6342:4;6358:129;6367:12;:10;:12::i;:::-;6381:7;6390:96;6429:15;6390:96;;;;;;;;;;;;;;;;;:11;:25;6402:12;:10;:12::i;:::-;6390:25;;;;;;;;;;;;;;;:34;6416:7;6390:34;;;;;;;;;;;;;;;;:38;;:96;;;;;:::i;:::-;6358:8;:129::i;:::-;6504:4;6497:11;;6249:266;;;;:::o;3685:172::-;3771:4;3787:42;3797:12;:10;:12::i;:::-;3811:9;3822:6;3787:9;:42::i;:::-;3846:4;3839:11;;3685:172;;;;:::o;417:85:4:-;463:7;485:14;;478:21;;417:85;:::o;3915:149:2:-;4004:7;4030:11;:18;4042:5;4030:18;;;;;;;;;;;;;;;:27;4049:7;4030:27;;;;;;;;;;;;;;;;4023:34;;3915:149;;;;:::o;598:104:0:-;651:15;685:10;678:17;;598:104;:::o;9313:340:2:-;9431:1;9414:19;;:5;:19;;;;9406:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9511:1;9492:21;;:7;:21;;;;9484:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9593:6;9563:11;:18;9575:5;9563:18;;;;;;;;;;;;;;;:27;9582:7;9563:27;;;;;;;;;;;;;;;:36;;;;9630:7;9614:32;;9623:5;9614:32;;;9639:6;9614:32;;;;;;;;;;;;;;;;;;9313:340;;;:::o;6989:530::-;7112:1;7094:20;;:6;:20;;;;7086:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7195:1;7174:23;;:9;:23;;;;7166:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7248:47;7269:6;7277:9;7288:6;7248:20;:47::i;:::-;7326:71;7348:6;7326:71;;;;;;;;;;;;;;;;;:9;:17;7336:6;7326:17;;;;;;;;;;;;;;;;:21;;:71;;;;;:::i;:::-;7306:9;:17;7316:6;7306:17;;;;;;;;;;;;;;;:91;;;;7430:32;7455:6;7430:9;:20;7440:9;7430:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;7407:9;:20;7417:9;7407:20;;;;;;;;;;;;;;;:55;;;;7494:9;7477:35;;7486:6;7477:35;;;7505:6;7477:35;;;;;;;;;;;;;;;;;;6989:530;;;:::o;1754:187:1:-;1840:7;1872:1;1867;:6;;1875:12;1859:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1859:29:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1898:9;1914:1;1910;:5;1898:17;;1933:1;1926:8;;;1754:187;;;;;:::o;882:176::-;940:7;959:9;975:1;971;:5;959:17;;999:1;994;:6;;986:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1050:1;1043:8;;;882:176;;;;:::o;10651:92:2:-;;;;:::o",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        },
        {
          "internalType": "uint256",
          "name": "initialSupply",
          "type": "uint256"
        },
        {
          "internalType": "uint256",
          "name": "demurrageRate",
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
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "_demurrageRate",
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
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
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
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
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
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "demurrageRate",
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
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
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
      "inputs": [],
      "name": "symbol",
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
      "inputs": [],
      "name": "totalSupply",
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
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "ast": {
    "absolutePath": "contracts/DemurrageableToken.sol",
    "exportedSymbols": {
      "DemurrageableToken": [
        804
      ]
    },
    "id": 805,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 764,
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
        "src": "36:31:4"
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "id": 765,
        "nodeType": "ImportDirective",
        "scope": 805,
        "sourceUnit": 694,
        "src": "69:55:4",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 766,
              "name": "ERC20",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 693,
              "src": "157:5:4",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20_$693",
                "typeString": "contract ERC20"
              }
            },
            "id": 767,
            "nodeType": "InheritanceSpecifier",
            "src": "157:5:4"
          }
        ],
        "contractDependencies": [
          22,
          693,
          762
        ],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 804,
        "linearizedBaseContracts": [
          804,
          693,
          762,
          22
        ],
        "name": "DemurrageableToken",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "functionSelector": "3141016f",
            "id": 769,
            "name": "_demurrageRate",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 804,
            "src": "166:29:4",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_uint256",
              "typeString": "uint256"
            },
            "typeName": {
              "id": 768,
              "name": "uint256",
              "nodeType": "ElementaryTypeName",
              "src": "166:7:4",
              "typeDescriptions": {
                "typeIdentifier": "t_uint256",
                "typeString": "uint256"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 794,
              "nodeType": "Block",
              "src": "334:79:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 785,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 819,
                          "src": "346:3:4",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 786,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "346:10:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 787,
                        "name": "initialSupply",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 775,
                        "src": "358:13:4",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 784,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 573,
                      "src": "340:5:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 788,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "340:32:4",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 789,
                  "nodeType": "ExpressionStatement",
                  "src": "340:32:4"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 792,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 790,
                      "name": "_demurrageRate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 769,
                      "src": "378:14:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 791,
                      "name": "demurrageRate",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 777,
                      "src": "395:13:4",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "378:30:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 793,
                  "nodeType": "ExpressionStatement",
                  "src": "378:30:4"
                }
              ]
            },
            "documentation": null,
            "id": 795,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 780,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 771,
                    "src": "321:4:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 781,
                    "name": "symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 773,
                    "src": "327:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 782,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 779,
                  "name": "ERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 693,
                  "src": "315:5:4",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20_$693_$",
                    "typeString": "type(contract ERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "315:19:4"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 778,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 771,
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 795,
                  "src": "212:18:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 770,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "212:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 773,
                  "name": "symbol",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 795,
                  "src": "232:20:4",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 772,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "232:6:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 775,
                  "name": "initialSupply",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 795,
                  "src": "254:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 774,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "254:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 777,
                  "name": "demurrageRate",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 795,
                  "src": "277:21:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 776,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "277:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "211:88:4"
            },
            "returnParameters": {
              "id": 783,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "334:0:4"
            },
            "scope": 804,
            "src": "200:213:4",
            "stateMutability": "payable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 802,
              "nodeType": "Block",
              "src": "472:30:4",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 800,
                    "name": "_demurrageRate",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 769,
                    "src": "485:14:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "functionReturnParameters": 799,
                  "id": 801,
                  "nodeType": "Return",
                  "src": "478:21:4"
                }
              ]
            },
            "documentation": null,
            "functionSelector": "ae853faf",
            "id": 803,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "demurrageRate",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 796,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "439:2:4"
            },
            "returnParameters": {
              "id": 799,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 798,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 803,
                  "src": "463:7:4",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 797,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "463:7:4",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "462:9:4"
            },
            "scope": 804,
            "src": "417:85:4",
            "stateMutability": "view",
            "virtual": false,
            "visibility": "public"
          }
        ],
        "scope": 805,
        "src": "126:378:4"
      }
    ],
    "src": "36:469:4"
  },
  "bytecode": "0x6080604052604051620016c1380380620016c1833981810160405260808110156200002957600080fd5b81019080805160405193929190846401000000008211156200004a57600080fd5b838201915060208201858111156200006157600080fd5b82518660018202830111640100000000821117156200007f57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000b557808201518184015260208101905062000098565b50505050905090810190601f168015620000e35780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200010757600080fd5b838201915060208201858111156200011e57600080fd5b82518660018202830111640100000000821117156200013c57600080fd5b8083526020830192505050908051906020019080838360005b838110156200017257808201518184015260208101905062000155565b50505050905090810190601f168015620001a05780820380516001836020036101000a031916815260200191505b50604052602001805190602001909291908051906020019092919050505083838160039080519060200190620001d89291906200049f565b508060049080519060200190620001f19291906200049f565b506012600560006101000a81548160ff021916908360ff16021790555050506200022233836200023360201b60201c565b80600681905550505050506200054e565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415620002d7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b620002eb600083836200041160201b60201c565b62000307816002546200041660201b62000f9f1790919060201c565b60028190555062000365816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546200041660201b62000f9f1790919060201c565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b505050565b60008082840190508381101562000495576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004e257805160ff191683800117855562000513565b8280016001018555821562000513579182015b8281111562000512578251825591602001919060010190620004f5565b5b50905062000522919062000526565b5090565b6200054b91905b80821115620005475760008160009055506001016200052d565b5090565b90565b611163806200055e6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063395093511161008c578063a457c2d711610066578063a457c2d7146103e4578063a9059cbb1461044a578063ae853faf146104b0578063dd62ed3e146104ce576100cf565b806339509351146102a357806370a082311461030957806395d89b4114610361576100cf565b806306fdde03146100d4578063095ea7b31461015757806318160ddd146101bd57806323b872dd146101db578063313ce567146102615780633141016f14610285575b600080fd5b6100dc610546565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011c578082015181840152602081019050610101565b50505050905090810190601f1680156101495780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a36004803603604081101561016d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105e8565b604051808215151515815260200191505060405180910390f35b6101c5610606565b6040518082815260200191505060405180910390f35b610247600480360360608110156101f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610610565b604051808215151515815260200191505060405180910390f35b6102696106e9565b604051808260ff1660ff16815260200191505060405180910390f35b61028d610700565b6040518082815260200191505060405180910390f35b6102ef600480360360408110156102b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610706565b604051808215151515815260200191505060405180910390f35b61034b6004803603602081101561031f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107b9565b6040518082815260200191505060405180910390f35b610369610801565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103a957808201518184015260208101905061038e565b50505050905090810190601f1680156103d65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610430600480360360408110156103fa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108a3565b604051808215151515815260200191505060405180910390f35b6104966004803603604081101561046057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610970565b604051808215151515815260200191505060405180910390f35b6104b861098e565b6040518082815260200191505060405180910390f35b610530600480360360408110156104e457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610998565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105de5780601f106105b3576101008083540402835291602001916105de565b820191906000526020600020905b8154815290600101906020018083116105c157829003601f168201915b5050505050905090565b60006105fc6105f5610a1f565b8484610a27565b6001905092915050565b6000600254905090565b600061061d848484610c1e565b6106de84610629610a1f565b6106d98560405180606001604052806028815260200161109860289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061068f610a1f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edf9092919063ffffffff16565b610a27565b600190509392505050565b6000600560009054906101000a900460ff16905090565b60065481565b60006107af610713610a1f565b846107aa8560016000610724610a1f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f9f90919063ffffffff16565b610a27565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108995780601f1061086e57610100808354040283529160200191610899565b820191906000526020600020905b81548152906001019060200180831161087c57829003601f168201915b5050505050905090565b60006109666108b0610a1f565b846109618560405180606001604052806025815260200161110960259139600160006108da610a1f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edf9092919063ffffffff16565b610a27565b6001905092915050565b600061098461097d610a1f565b8484610c1e565b6001905092915050565b6000600654905090565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806110e56024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b33576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806110506022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ca4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110c06025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061102d6023913960400191505060405180910390fd5b610d35838383611027565b610da081604051806060016040528060268152602001611072602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edf9092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e33816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f9f90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290610f8c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f51578082015181840152602081019050610f36565b50505050905090810190601f168015610f7e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008082840190508381101561101d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220e2dfb6f25963839f53cbbbe48d679d047b552e8e6eae8c6a489f8ce32e9b8d8964736f6c63430006000033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106100cf5760003560e01c8063395093511161008c578063a457c2d711610066578063a457c2d7146103e4578063a9059cbb1461044a578063ae853faf146104b0578063dd62ed3e146104ce576100cf565b806339509351146102a357806370a082311461030957806395d89b4114610361576100cf565b806306fdde03146100d4578063095ea7b31461015757806318160ddd146101bd57806323b872dd146101db578063313ce567146102615780633141016f14610285575b600080fd5b6100dc610546565b6040518080602001828103825283818151815260200191508051906020019080838360005b8381101561011c578082015181840152602081019050610101565b50505050905090810190601f1680156101495780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b6101a36004803603604081101561016d57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506105e8565b604051808215151515815260200191505060405180910390f35b6101c5610606565b6040518082815260200191505060405180910390f35b610247600480360360608110156101f157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610610565b604051808215151515815260200191505060405180910390f35b6102696106e9565b604051808260ff1660ff16815260200191505060405180910390f35b61028d610700565b6040518082815260200191505060405180910390f35b6102ef600480360360408110156102b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610706565b604051808215151515815260200191505060405180910390f35b61034b6004803603602081101561031f57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506107b9565b6040518082815260200191505060405180910390f35b610369610801565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156103a957808201518184015260208101905061038e565b50505050905090810190601f1680156103d65780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610430600480360360408110156103fa57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506108a3565b604051808215151515815260200191505060405180910390f35b6104966004803603604081101561046057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610970565b604051808215151515815260200191505060405180910390f35b6104b861098e565b6040518082815260200191505060405180910390f35b610530600480360360408110156104e457600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610998565b6040518082815260200191505060405180910390f35b606060038054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156105de5780601f106105b3576101008083540402835291602001916105de565b820191906000526020600020905b8154815290600101906020018083116105c157829003601f168201915b5050505050905090565b60006105fc6105f5610a1f565b8484610a27565b6001905092915050565b6000600254905090565b600061061d848484610c1e565b6106de84610629610a1f565b6106d98560405180606001604052806028815260200161109860289139600160008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020600061068f610a1f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edf9092919063ffffffff16565b610a27565b600190509392505050565b6000600560009054906101000a900460ff16905090565b60065481565b60006107af610713610a1f565b846107aa8560016000610724610a1f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f9f90919063ffffffff16565b610a27565b6001905092915050565b60008060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b606060048054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156108995780601f1061086e57610100808354040283529160200191610899565b820191906000526020600020905b81548152906001019060200180831161087c57829003601f168201915b5050505050905090565b60006109666108b0610a1f565b846109618560405180606001604052806025815260200161110960259139600160006108da610a1f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edf9092919063ffffffff16565b610a27565b6001905092915050565b600061098461097d610a1f565b8484610c1e565b6001905092915050565b6000600654905090565b6000600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610aad576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806110e56024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610b33576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806110506022913960400191505060405180910390fd5b80600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415610ca4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260258152602001806110c06025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415610d2a576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602381526020018061102d6023913960400191505060405180910390fd5b610d35838383611027565b610da081604051806060016040528060268152602001611072602691396000808773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610edf9092919063ffffffff16565b6000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550610e33816000808573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610f9f90919063ffffffff16565b6000808473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290610f8c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610f51578082015181840152602081019050610f36565b50505050905090810190601f168015610f7e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060008385039050809150509392505050565b60008082840190508381101561101d576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b50505056fe45524332303a207472616e7366657220746f20746865207a65726f206164647265737345524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e636545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726fa2646970667358221220e2dfb6f25963839f53cbbbe48d679d047b552e8e6eae8c6a489f8ce32e9b8d8964736f6c63430006000033",
  "compiler": {
    "name": "solc",
    "version": "0.6.0+commit.26b70077.Emscripten.clang",
    "optimizer": {
      "enabled": false,
      "runs": 200
    },
    "evmVersion": "petersburg"
  }
};


export {
  GiveAwayArtifacts
};
