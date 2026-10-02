<template>
  <v-container fluid class="py-8">
    <p class="section-title google-font text-center mb-1">What we do</p>
    <p class="google-font text-center mx-auto mb-8" style="max-width:640px;opacity:.75">
      Google Developer Groups are for developers interested in Google's developer technology.
    </p>
    <v-row>
      <v-col v-for="(card, i) in cards" :key="i" cols="12" sm="6" md="3">
        <div class="wwd-card" :class="$vuetify.theme.dark ? 'card-dark' : 'card-light'" :style="{ borderTop: '4px solid ' + card.color + ' !important' }">
          <v-avatar size="52" :color="card.color" class="mb-3">
            <v-icon dark>{{ card.icon }}</v-icon>
          </v-avatar>
          <p class="google-font mb-1" style="font-size:130%;font-weight:500">{{ card.title }}</p>
          <p class="google-font mb-0" style="font-size:95%;opacity:.8">{{ card.text }}</p>
        </div>
      </v-col>
    </v-row>
    <div class="text-center mt-8">
      <a
        v-for="(item, i) in whatwedodata"
        :key="i"
        :href="item.link"
        target="_blank"
        rel="noreferrer"
        class="mx-3"
        :title="item.TechName"
      >
        <img :src="getImgUrl(item.image)" width="28" :alt="item.TechName" />
      </a>
    </div>
  </v-container>
</template>

<script>
import whatwedodata from "@/assets/data/whatwedo.json";
export default {
  name: "WhatWeDo",
  data: () => ({
    whatwedodata,
    cards: [
      { icon: "mdi-comment", title: "Talks", color: "#4285f4", text: "Stay updated with the latest news and announcements" },
      { icon: "mdi-code-tags", title: "Codelabs", color: "#ea4335", text: "Hands-on experience and guidance from community members" },
      { icon: "mdi-school", title: "Campus Roadshows", color: "#f9ab00", text: "Sharing knowledge at colleges, universities and companies" },
      { icon: "mdi-chart-bubble", title: "Live Viewing Parties", color: "#34a853", text: "Watch Google events live, together with the community" }
    ]
  }),
  methods: {
    getImgUrl(url) {
      return require("@/assets/img/what-we-do/" + (url && url.length > 0 ? url : "notFound.png"));
    }
  }
};
</script>

<style scoped>
.wwd-card{ padding:24px; height:100%; text-align:center }
</style>
