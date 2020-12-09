const optionNames = {
  network: 'network',
  logging: 'logging',
  dataPath: 'data-path',
  eth1Endpoint: 'eth1-endpoint',
  eth1DepositContractAddress: 'eth1-deposit-contract-address',
  restApiEnabled: 'rest-api-enabled',
  restApiPort: 'rest-api-port',
  restApiInterface: 'rest-api-interface',
  restApiHostAllowlist: 'rest-api-host-allow-list',
  restApiCorsOrigins: 'rest-api-cors-origins',
};

const validOptions = [
  optionNames.network,
  optionNames.logging,
  optionNames.dataPath,
  optionNames.eth1Endpoint,
  optionNames.eth1DepositContractAddress,
  optionNames.restApiEnabled,
  optionNames.restApiInterface,
  optionNames.restApiPort,
  optionNames.restApiHostAllowlist,
  optionNames.restApiCorsOrigins,
];

const defaultOptions = {
  network: 'mainnet',
  logging: 'INFO',
  dataPath: '/home/teku',
  eth1Endpoint: 'http://127.0.0.1:8545',
  eth1DepositContractAddress: '0x',
  restApiEnabled: false,
  restApiInterface: '127.0.0.1',
  restApiPort: 5051,
  restApiHostAllowlist: ['127.0.0.1', "localhost"],
  restApiCorsOrigins: ['http://127.0.0.1', "http://localhost"],
};

export {
  optionNames,
  validOptions,
  defaultOptions,
}

