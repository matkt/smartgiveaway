const axios = require('axios').default;

export default class BeaconConfigAPI {
  constructor(settings) {
    this.settings = settings;
    this.refreshConfig();
  }


  async spec() {
    this.refreshConfig();
    const response = await axios.get(this.endpointSpec);
    return response.data;
  }

  refreshConfig() {
    this.endpointRoot = this.settings.beacon.endpoint;
    this.endpointSpec = `${this.endpointRoot}/eth/v1/config/spec`;
  }
}
