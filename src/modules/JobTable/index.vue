<template>
  <v-card flat>
    <v-card-title class="d-flex align-center pe-2">
      <v-icon icon="mdi-video-input-component"></v-icon> &nbsp; Select Your Job
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        density="compact"
        label="Search"
        prepend-inner-icon="mdi-magnify"
        variant="solo-filled"
        flat
        hide-details
        single-line
      ></v-text-field>
    </v-card-title>

    <v-divider></v-divider>
    <v-data-table v-model:search="search" :items="items">
      <template v-slot:header.tags>
        <div class="text-end">Tags</div>
      </template>
      <template v-slot:header.type>
        <div class="text-center">Type</div>
      </template>

      <template v-slot:item.type="{ item }">
        <div class="text-center">
          <v-chip
            :color="item.type == 'Online' ? 'green' : 'blue'"
            :text="item.type"
            class="text-uppercase"
            size="small"
            label
          ></v-chip>
        </div>
      </template>

      <template v-slot:item.map="{ item }">
        <RouterLink :href="`${item.map}`" target="_blank">View Map</RouterLink>
      </template>

      <template v-slot:item.rating="{ item }">
        <v-rating
          :model-value="item.rating"
          color="orange-darken-2"
          density="compact"
          size="small"
          readonly
        ></v-rating>
      </template>

      <template v-slot:item.tags="{ item }">
        <div class="text-end">
          <template v-if="item.tags && item.tags.length">
            <v-chip
              v-for="(tag, index) in item.tags"
              :key="index"
              :color="getSubjectColor(tag)"
              :text="getSubjectName(tag)"
              class="text-uppercase"
              size="small"
              label
            ></v-chip>
          </template>
          <template v-else>
            <v-chip
              color="red"
              text="No tags"
              class="text-uppercase"
              size="small"
              label
            ></v-chip>
          </template>
        </div>
      </template>
    </v-data-table>
  </v-card>
</template>

<script>
import { getSubjectColor, getSubjectName } from "./utils.ts";

export default {
  setup() {
    return {
      getSubjectColor,
      getSubjectName,
    };
  },
  data() {
    return {
      search: "",
      items: [
        {
          type: "On-site",
          name: "Siam Paragon",
          map: "https://maps.app.goo.gl/BQUch9viPUyfZyrh8",
          price: 699.99,
          rating: 5,
          tags: ["Math", "Physics"],
        },
        {
          type: "On-site",
          name: "Silom Edge, Thaniya",
          map: "https://maps.app.goo.gl/BQUch9viPUyfZyrh8",
          price: 799.99,
          rating: 4,
          tags: ["Biology"],
        },
        {
          type: "On-site",
          name: "Sam Yan Mitrtown",
          map: "https://maps.app.goo.gl/BQUch9viPUyfZyrh8",
          price: 649.99,
          rating: 3,
          tags: ["Chemistry"],
        },
        {
          type: "Online",
          name: "Central Pinklao",
          map: "https://maps.app.goo.gl/BQUch9viPUyfZyrh8",
          price: 1499.99,
          rating: 4,
          tags: ["Math"],
        },
        {
          type: "Online",
          name: "BTS Udomsuk",
          map: "https://maps.app.goo.gl/BQUch9viPUyfZyrh8",
          price: 299.99,
          rating: 4,
          tags: ["Physics", "Chemistry", "Biology"],
        },
      ],
    };
  },
};
</script>
