import {StatusCodes} from "http-status-codes";

const axios = require('axios').default;

export default class BeaconConfigAPI {
  constructor(settings) {
    this.settings = settings;
    this.refreshConfig();
  }


  async logLevel(level, logFilter) {
    this.refreshConfig();
    const response = await axios.put(this.endpointLogLevel, {
      level: level,
      log_filter: logFilter,
    });
    return response.status === StatusCodes.NO_CONTENT;
  }

  async downloadByStateId(id) {
    this.refreshConfig();
    return await axios.get(
      `${this.endpointRoot}/teku/v1/beacon/states/${id}`
      , {
        responseType: 'blob',
      }
    );
  }

  async downloadByBlockId(id) {
    this.refreshConfig();
    return await axios.get(
      `${this.endpointRoot}/teku/v1/beacon/blocks/${id}/state`, {
        responseType: 'blob',
      }
    );
  }

  refreshConfig() {
    this.endpointRoot = this.settings.beacon.endpoint;
    this.endpointLogLevel = `${this.endpointRoot}/teku/v1/admin/log_level`;
  }

}
