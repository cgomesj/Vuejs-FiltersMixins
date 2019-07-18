<template>
  <div class="container">
    <div class="row">
      <div class="col">
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
import { fruitMixin } from "../mixins/fruitMixin.js";

export default {
  name: "list",

  mixins: [fruitMixin],

  created() {
    console.log("Inside list created");
  }
};
</script>

<style></style>
