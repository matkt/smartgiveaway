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
        prize: 1000,
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
    startGiveAway() {
      console.log(this.giveaway);
    }
  },
};
</script>
