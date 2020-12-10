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
                <a href="#">
                  <h5 class="title">{{ giveaway.name }} - {{ giveaway.giveawayId }}</h5>
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
      </div>
      <router-view></router-view>
    </fade-transition>
  </div>
</template>
<script>
import {FadeTransition} from 'vue2-transitions';
import {mapState} from "vuex";


export default {
  components: {
    FadeTransition
  },
  data() {
    return {
      currentFindAllResponse: '',
      giveaways: [],
      polling: null,
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
  beforeDestroy() {
    clearInterval(this.polling);
  },
  methods: {
    pollData() {
      this.polling = setInterval(this.findAllGiveAway, 2000);
    },
    async findAllGiveAway() {
      const response = await this.services.backend.findAllGiveAway();
      if(this.currentFindAllResponse !== JSON.stringify(response)) {
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
    participateGiveAway(giveaway) {
    }
  },
};
</script>
