<template>
  <div class="content">
    <fade-transition :duration="100" mode="out-in">
      <!-- your content here -->
      <div>
        <card>
          <h5 slot="header" class="title">Dashboard</h5>
          <card type="user">
            <p class="card-text">
            </p>
            <div class="author">
              <div class="block block-one"></div>
              <div class="block block-two"></div>
              <div class="block block-three"></div>
              <div class="block block-four"></div>
              <a href="#">
                <img class="avatar" src="img/gift-flat.png" alt="...">
                <h5 class="title">GiveAway Creator</h5>
              </a>
              <p class="description">
                Seamlessly create a giveaway on xDai blockchain to gain user engagement on your social network.
              </p>
            </div>
            <p></p>
            <div class="row">
              <div class="col-md-4 mt-2">
                <label class="mr-2">Name</label>
                <base-input v-model="giveaway.name"></base-input>
              </div>
              <div class="col-md-4 mt-2">
                <label class="mr-2">Type</label>
                <b-form-select v-model="giveaway.type"
                               :options="giveaway.typeOptions"></b-form-select>
              </div>
              <div class="col-md-4 mt-2">
                <label class="mr-2">Prize</label>
                <base-input v-model="giveaway.prize"></base-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4 mt-2">
                <label class="mr-2">Score for Like</label>
                <base-input v-model="giveaway.likeScore"></base-input>
              </div>
              <div class="col-md-4 mt-2">
                <label class="mr-2">Score for Retweet</label>
                <base-input v-model="giveaway.retweetScore"></base-input>
              </div>
              <div class="col-md-4 mt-2">
                <label class="mr-2">Max Participants</label>
                <base-input v-model="giveaway.maxParticipants"></base-input>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 mt-2">
                <base-input>
                  <label>Description</label>
                  <textarea rows="4" cols="80"
                            class="form-control"
                            placeholder="Describe your giveaway"
                            v-model="giveaway.description">

              </textarea>
                </base-input>
              </div>
            </div>
            <base-button slot="footer" type="primary" fill @click="startGiveAway">Start GiveAway</base-button>
          </card>
        </card>
      </div>
      <router-view></router-view>
    </fade-transition>
  </div>
</template>
<script>
import {FadeTransition} from 'vue2-transitions';
import {mapState} from "vuex";
import {GiveAwayArtifacts} from '@/assets/contracts/GiveAway';
import Web3 from "web3";

export default {
  components: {
    FadeTransition
  },
  data() {
    return {
      giveaway: {
        type: 'retweet',
        typeOptions: [
          {value: 'retweet', text: 'Retweets & Like'},
          {value: 'followers', text: 'Followers'},
          {value: 'replies', text: 'Replies'},
          {value: 'mentions', text: 'Mentions & Hashtags'},
        ],
        name: '',
        description: '',
        maxParticipants: 10,
        likeScore: 1,
        retweetScore: 5,
        prize: 0.5,
      }
    }
  },
  computed: {
    ...mapState([
      'services',
      'cache',
    ])
  },
  async created() {
  },
  methods: {
    async startGiveAway() {
      console.log(this.giveaway);
      console.log(this.services.ethereum.selectedAddress);
      await this.deployContract();
    },
    async deployContract() {
      const giveAwayContract = new window.web3.eth.Contract(GiveAwayArtifacts.abi);
      giveAwayContract.deploy({
        data: GiveAwayArtifacts.bytecode,
        arguments: [this.giveaway.name, this.giveaway.maxParticipants, this.giveaway.retweetScore, this.giveaway.likeScore],
      })
          .send({
            from: this.services.ethereum.selectedAddress,
            value: Web3.utils.toWei(`${this.giveaway.prize}`, 'ether'),
          }, function (err, transactionHash) {
            if (err) {
              console.error(err);
            } else {
              console.log('transaction hash: ', transactionHash);
            }
          })
          .on('error', this.onDeployError)
          .on('transactionHash', this.onDeployTransactionHash)
          .on('receipt', this.onDeployReceipt)
          .then(this.onContractDeployed);
    },
    onDeployError(error) {
      this.$notifyMessage('danger', `Cannot deploy contract: ${error}`);
    },
    onDeployTransactionHash(transactionHash) {
      this.$notifyMessage('success', `Transaction hash: ${transactionHash}`);
    },
    onDeployReceipt(receipt) {
      console.log(receipt.contractAddress);
      this.$notifyMessage('success', `Contract address: ${receipt.contractAddress}`);
    },
    onContractDeployed(newContractInstance) {
      this.cache.demurrageableTokenContractInstance = newContractInstance;
    },
  },
};
</script>
