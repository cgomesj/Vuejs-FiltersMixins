<template>
  <div id="app" class="container">
    <div class="row">
      <div class="col">
        <h2>List Component</h2>

        <input v-model="filterText" type="text" />
        <ul class="list-unstyled">
          <li
            class="my-2"
            v-for="(fruit, index) in filteredFruits"
            :key="index"
          >
            {{ fruit }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { fruitMixin } from "../fruitMixin.js";

export default {
  name: "list",

  mixins: [fruitMixin],

  created() {
    console.log("Inside list created");
  }
};
</script>

<style></style>
