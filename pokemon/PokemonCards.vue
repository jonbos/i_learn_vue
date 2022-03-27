<template>
  <div>
    <div class="cards">
      <card
        v-for="pokemon in pokemons"
        :key="pokemon.id"
        @click="select(pokemon)"
        :class="{ opace: selectedId && pokemon.id !== selectedId }"
        class="card"
      >
        <template v-slot:title> {{ pokemon.name }} #{{ pokemon.id }} </template>
        <template v-slot:content>
          <img :src="pokemon.sprite" alt="" />
        </template>

        <template v-slot:description>
          <div v-for="type in pokemon.types" :key="type">
            {{ type }}
          </div>
        </template>
      </card>
    </div>
  </div>
</template>

<script>
import Card from './Card.vue';

export default {
  components: { Card },
  props: {
    pokemons: {
      type: Array,
      default: () => [],
    },
    selectedId: {
      type: Number,
      required: false,
    },
  },
  methods: {
    select(pokemon) {
      this.$emit('select', pokemon);
    },
  },
};
</script>
<style scoped>
img {
  width: 100%;
}
.cards {
  display: flex;
}
</style>
