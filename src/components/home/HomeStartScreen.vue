<template>
  <section class="hero" :class="$vuetify.theme.dark ? 'hero--dark' : 'hero--light'">
    <div class="blob blob--blue"></div>
    <div class="blob blob--yellow"></div>
    <v-row align="center" class="hero__row ma-0">
      <v-col cols="12" md="7" class="pa-6 pa-md-10">
        <v-chip small outlined class="google-font mb-4" color="primary">
          <v-icon left small>mdi-map-marker</v-icon>Ludhiana, Punjab
        </v-chip>
        <h1 class="hero__title google-font">
          Make good things <span class="g-gradient-text">together</span>.
        </h1>
        <p class="hero__name google-font">{{ config.generalConfig.name || "GDG Ludhiana" }}</p>
        <p class="hero__desc google-font">{{ config.generalConfig.shortDescription }}</p>
        <div class="mb-5">
          <v-chip
            v-for="(item, i) in config.generalConfig.hashtags"
            :key="i"
            :href="'https://twitter.com/hashtag/' + item"
            rel="noreferrer"
            target="_blank"
            small
            class="mr-1 mb-1"
          >#{{ item }}</v-chip>
        </div>
        <v-btn
          v-if="checkExistance(config.generalConfig.becomemember, 0)"
          :href="config.generalConfig.becomemember"
          target="_blank"
          rel="noreferrer"
          aria-label="Become a Member"
          color="primary"
          large
          depressed
          class="mr-2 mb-2 google-font"
        >Become a Member</v-btn>
        <v-btn
          v-if="checkExistance(config.generalConfig.learnMoreLink, 0)"
          :href="config.generalConfig.learnMoreLink"
          target="_blank"
          rel="noreferrer"
          aria-label="Learn More"
          color="primary"
          large
          outlined
          class="mb-2 google-font"
        >Learn More</v-btn>
        <v-btn v-else to="/events" large outlined color="primary" class="mb-2 google-font">See Events</v-btn>
      </v-col>
      <v-col cols="12" md="5" class="pa-6 text-center">
        <v-img
          :src="checkExistance(config.generalConfig.homeImage,0)?config.generalConfig.homeImage:require('@/assets/img/svg/home.svg')"
          :lazy-src="checkExistance(config.generalConfig.homeImage,0)?config.generalConfig.homeImage:require('@/assets/img/svg/home.svg')"
          contain
          max-height="360"
          alt="Community illustration"
        >
          <template v-slot:placeholder>
            <v-row class="fill-height ma-0" align="center" justify="center">
              <v-progress-circular indeterminate color="primary"></v-progress-circular>
            </v-row>
          </template>
        </v-img>
      </v-col>
    </v-row>
    <div class="g-bar"></div>
  </section>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["config"])
  }
};
</script>

<style scoped>
.hero{
  position:relative;
  overflow:hidden;
  border-radius:24px;
  margin-top:8px;
}
.hero--light{ background:linear-gradient(135deg,#e8f0fe 0%,#fff 60%,#fef7e0 100%); border:1px solid #e0e0e0 }
.hero--dark{ background:linear-gradient(135deg,#1b2a41 0%,#202124 60%,#2b2616 100%); border:1px solid #303134 }
.hero__row{ position:relative; z-index:1 }
.hero__title{ font-size:clamp(2rem,5vw,3.4rem); font-weight:700; line-height:1.1; margin-bottom:12px }
.hero__name{ font-size:1.4rem; margin-bottom:4px }
.hero__desc{ font-size:1.05rem; opacity:.8; max-width:560px }
.blob{ position:absolute; border-radius:50%; filter:blur(60px); opacity:.35; z-index:0 }
.blob--blue{ width:260px; height:260px; background:#4285f4; top:-80px; right:-60px }
.blob--yellow{ width:200px; height:200px; background:#fbbc04; bottom:-70px; left:30% }
</style>
