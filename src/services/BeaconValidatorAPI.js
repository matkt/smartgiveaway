const axios = require('axios').default;

export default class BeaconValidatorAPI {
  constructor(settings) {
    this.settings = settings;
    this.refreshConfig();
  }


  async produceAttestationData(slot, committee_index) {
    this.refreshConfig();
    const response = await axios.get(this.endpointProduceAttestationData, {
      params: {
        slot: slot,
        committee_index: committee_index,
      }
    });
    return response.data;
  }

  refreshConfig() {
    this.endpointRoot = this.settings.beacon.endpoint;
    this.endpointProduceAttestationData = `${this.endpointRoot}/eth/v1/validator/attestation_data`;
  }

}
