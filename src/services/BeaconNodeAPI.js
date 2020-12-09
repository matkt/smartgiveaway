const axios = require('axios').default;
import {StatusCodes} from 'http-status-codes';

export default class BeaconNodeAPI {
  constructor(settings) {
    this.settings = settings;
    this.refreshConfig();
  }

  async isHealthy() {
    this.refreshConfig();
    const response = await axios.get(this.endpointHealth);
    return response.status === StatusCodes.OK;
  }


  async identity() {
    this.refreshConfig();
    const response = await axios.get(this.endpointIdentity);
    return response.data;
  }

  async syncing() {
    this.refreshConfig();
    const response = await axios.get(this.endpointSyncing);
    return response.data;
  }

  async version() {
    this.refreshConfig();
    const response = await axios.get(this.endpointVersion);
    return response.data;
  }

  async peers() {
    this.refreshConfig();
    const response = await axios.get(this.endpointPeers);
    return response.data.data;
  }

  refreshConfig() {
    this.endpointRoot = this.settings.beacon.endpoint;
    this.endpointHealth = `${this.endpointRoot}/eth/v1/node/health`;
    this.endpointIdentity = `${this.endpointRoot}/eth/v1/node/identity`;
    this.endpointSyncing = `${this.endpointRoot}/eth/v1/node/syncing`;
    this.endpointVersion = `${this.endpointRoot}/eth/v1/node/version`;
    this.endpointPeers = `${this.endpointRoot}/eth/v1/node/peers`;
  }
}
