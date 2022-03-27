<template>
  <div>
    <pokemon-cards
      :selectedId="selectedId"
      @select="fetchEvolutions"
      :pokemons="pokemons"
    />
    <pokemon-cards :pokemons="evolutions" />
  </div>
</template>
<script>
import PokemonCards from './PokemonCards.vue';

const IDS = [1, 4, 7];
const api = 'https://pokeapi.co/api/v2/pokemon';

export default {
  components: { PokemonCards },
  data() {
    return { pokemons: [], evolutions: [], selectedId: null };
  },
  async created() {
    this.pokemons = await this.fetchData(IDS);
  },
  methods: {
    async fetchData(ids) {
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
      return responses;
    },
    async fetchEvolutions(pokemon) {
      this.selectedId = pokemon.id;
      this.evolutions = await this.fetchData([pokemon.id + 1, pokemon.id + 2]);
    },
  },
};
</script>
<style scoped>
</style>
