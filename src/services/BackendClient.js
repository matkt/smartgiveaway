const axios = require('axios').default;

export class BackendClient {

    constructor(endpoint) {
        this.endpoint = endpoint;
    }

    async createGiveAway(giveaway) {
        return await axios.post(
            `${this.endpoint}/giveaway`,
            {
                "giveawayId": giveaway.contractAddress,
                "name": giveaway.name,
                "tweetLink": giveaway.tweetLink,
                "description": giveaway.description,
                "likeScore": giveaway.likeScore,
                "retweetScore": giveaway.retweetScore,
                "maxParticipants": giveaway.maxParticipants,
                "prize": giveaway.prize
            }
        );
    }

    async findAllGiveAway() {
        return await axios.get(`${this.endpoint}/giveaway`);
    }

    async removeGiveAway(id) {
        return await axios.delete(`${this.endpoint}/giveaway/${id}`);
    }
}