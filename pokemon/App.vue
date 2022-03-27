<template>
  <div class="card">
    <div class="title">Title</div>
    <div class="content">Content</div>
    <div class="description">Description</div>
  </div>
  <button @click="fetchData">Fetch</button>
</template>
<script>
const ids = [1, 4, 7];
const api = "https://pokeapi.co/api/v2/pokemon";

export default {
  data() {
    return { pokemon: [] };
  },
  methods: {
    async fetchData() {
      const responses = await Promise.all(
        ids.map((id) =>
          window
            .fetch(`${api}/${id}`)
            .then((d) => d.json())
            .then((datum) => ({
              id: datum.id,
              name: datum.name,
              sprite: datum.sprites.other["official-artwork"].front_default,
              types: datum.types.map((type) => type.type.name),
            }))
        )
      );

      this.pokemon = responses;
    },
  },
};
</script>
<style scoped>
.card {
  border: 1px solid silver;
  border-radius: 8px;
  max-width: 200px;
  margin: 0 5px;
  cursor: pointer;
  box-shadow: 0px 1px 3px darkgrey;
  transition: 0.2s;
}
.title,
.content,
.description {
  padding: 16px;
  text-transform: capitalize;
  text-align: center;
}
.title,
.content {
  border-bottom: 1px solid silver;
}
.title {
  font-size: 1.25em;
}
.card:hover {
  transition: 0.2s;
  box-shadow: 0px 1px 9px darkgrey;
}
</style>