<template>
  <div class="cards">
    <card v-for="pokemon in pokemons" :key="pokemon.id">
      <template v-slot:title>
        {{ pokemon.name }}
      </template>
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
</template>
<script>
import Card from './Card.vue';

const ids = [1, 4, 7];
const api = 'https://pokeapi.co/api/v2/pokemon';

export default {
  components: { Card },
  data() {
    return { pokemons: [] };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      const responses = await Promise.all(
        ids.map((id) => window
          .fetch(`${api}/${id}`)
          .then((d) => d.json())
          .then((datum) => ({
            id: datum.id,
            name: datum.name,
            sprite: datum.sprites.other['official-artwork'].front_default,
            types: datum.types.map((type) => type.type.name),
          }))),
      );
      this.pokemons = responses;
    },
  },
};
</script>
<style scoped>
.cards {
  display: flex;
}
img {
  width: 100%;
}
</style>
