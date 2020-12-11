<template>
  <div class="content">
    <fade-transition :duration="100" mode="out-in">
      <!-- your content here -->
      <div>
        <card>
          <h5 slot="header" class="title">Give Away</h5>
          <div v-for="giveaway in giveaways" :key="giveaway.giveawayId">
            <card type="user">
              <p class="card-text">
              </p>
              <div class="author">
                <div class="block block-one"></div>
                <div class="block block-two"></div>
                <div class="block block-three"></div>
                <div class="block block-four"></div>
                <a :href="giveaway.tweetLink">
                  <h5 class="title">{{ giveaway.name }} - {{ giveaway.giveawayId }}</h5>
                  {{ giveaway.tweetLink }}
                </a>
                <pre class="description">{{ giveaway.description }} </pre>
              </div>
              <p></p>
              <div class="row">
                <div class="col-md-2 pr-md-1">
                  <h5 class="card-category">Prize</h5>
                  <h2 class="card-title">
                    {{ giveaway.prize }}
                  </h2>
                </div>
                <div class="col-md-2 pr-md-1">
                  <h5 class="card-category">Max Participants</h5>
                  <h2 class="card-title">
                    {{ giveaway.maxParticipants }}
                  </h2>
                </div>
                <div class="col-md-2 pr-md-1">
                  <h5 class="card-category">Like bonus</h5>
                  <h2 class="card-title">
                    {{ giveaway.likeScore }}
                  </h2>
                </div>
                <div class="col-md-2 pr-md-1">
                  <h5 class="card-category">Retweet bonus</h5>
                  <h2 class="card-title">
                    {{ giveaway.retweetScore }}
                  </h2>
                </div>
                <div class="col-md-2 pr-md-1">
                  <base-button class="ml-2" icon @click="participateGiveAway(giveaway)">
                    <font-awesome-icon icon="gift"/>
                  </base-button>
                  <base-button icon @click="removeGiveAway(giveaway)">
                    <font-awesome-icon icon="trash"/>
                  </base-button>
                </div>
              </div>
            </card>
          </div>
        </card>
        <b-modal
            id="modal-confirm-participation"
            title="GiveAway Participation"
            hide-footer
        >
          <div class="row">
            <div class="col-md-4 mt-2">
              <label>
                <i class="fab fa-twitter mr-2"></i>
                <input v-model="twitterHandle">
              </label>
            </div>
          </div>
          <div class="row ml-2">
            Do you want to participate to this Give Away ?
          </div>

          <div class="row">
            <div class="col-md-2 mr-2">
              <base-button class="btn-primary" :loading="loading" @click="confirmParticipation">
                Yes
              </base-button>
            </div>
            <div class="col-md-2 mr-2">
              <base-button class="btn-danger">
                No
              </base-button>
            </div>
          </div>
        </b-modal>
        <b-modal
            id="modal-participate"
            title="GiveAway Participation"
        >
          <div class="row">
            <div class="col-md-12 mt-2">
              <div id="tweet-container"></div>
            </div>
          </div>
        </b-modal>
      </div>
      <router-view></router-view>
    </fade-transition>
  </div>
</template>
<script>
import {FadeTransition} from 'vue2-transitions';
import {mapState} from "vuex";
import {GiveAwayContractWrapper} from "@/services/GiveAwayContractWrapper";

require("@/widgets");

export default {
  components: {
    FadeTransition
  },
  data() {
    return {
      currentFindAllResponse: '',
      giveaways: [],
      polling: null,
      selectedGiveAway: null,
      twitterHandle: '',
      currentModalId: null,
      loading: false,
    }
  },
  computed: {
    ...mapState([
      'services',
      'cache',
    ])
  },
  async mounted() {
    await this.findAllGiveAway();
    this.pollData();
  },
  created() {
  },
  beforeDestroy() {
    clearInterval(this.polling);
  },
  methods: {
    pollData() {
      this.polling = setInterval(this.findAllGiveAway, 2000);
    },
    async findAllGiveAway() {
      const response = await this.services.backend.findAllGiveAway();
      if (this.currentFindAllResponse !== JSON.stringify(response)) {
        if (Array.isArray(response.data) && response.data.length > 0) {
          this.giveaways = response.data;
          this.currentFindAllResponse = JSON.stringify(response);
        }
      }
    },
    async removeGiveAway(giveaway) {
      const response = await this.services.backend.removeGiveAway(giveaway.giveawayId);
      console.log(response);
      await this.findAllGiveAway();
    },
    async participateGiveAway(giveaway) {
      console.log('checking if user is already participating.');
      this.selectedGiveAway = giveaway;
      const giveawayContract = this.getContractWrapper(giveaway.giveawayId);
      const isUserParticipating = await giveawayContract.amIParticipating();
      console.log('user is participating: ', isUserParticipating);
      if (!isUserParticipating) {
        this.showModal('modal-confirm-participation');
      } else {
        this.showModal('modal-participate');
        this.displayTweet('1337344148878266370');
      }
    },
    getContractWrapper(contractAddress) {
      return new GiveAwayContractWrapper(
          this.services.web3,
          this.services.ethereum.selectedAddress,
          contractAddress);
    },
    confirmParticipation() {
      this.loading = true;
      const giveawayContract = this.getContractWrapper(this.selectedGiveAway.giveawayId);
      giveawayContract.participate(
          this.twitterHandle,
          this.onTransactionHash,
          this.onReceipt,
          this.onError
      );
    },
    onTransactionHash(transactionHash) {
      console.log('transaction hash: ', transactionHash);
      this.$notifyMessage('success', 'Transaction submitted.');
    },
    onReceipt(receipt) {
      console.log('receipt: ', receipt);
      this.$notifyMessage('success', 'Receipt received.');
      this.loading = false;
      this.hideModal();
    },
    onError(error) {
      console.error(error);
      this.$notifyMessage('dander', error.toString());
      this.hideModal();
      this.loading = false;
    },
    showModal(id) {
      this.currentModalId = id;
      this.$bvModal.show(this.currentModalId);
    },
    hideModal() {
      if (this.currentModalId !== null) {
        this.$bvModal.hide(this.currentModalId);
      }
    },
    displayTweet(id) {
      const twContainer = document.getElementById("test-tw");
      console.log(twContainer);
      twttr.widgets.createTweet(
          id,
          document.getElementById("test-tw"),
          {
            theme: "white",
            conversation: 'none',
            width: 250,
          }
      );
    }
  },
};
</script>
