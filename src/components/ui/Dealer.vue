<template>
  <card-holder :cards="cards" :total="total" :points="points">
    <slot></slot>
  </card-holder>
</template>

<script>
import CardHolder from "./CardHolder.vue";
import { mapGetters } from "vuex";

export default {
  components: { CardHolder },
  computed: {
    ...mapGetters("dealer", ["cards", "total", "points"]),
  },
};
</script>
