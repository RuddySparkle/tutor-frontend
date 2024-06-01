<template>
  <v-navigation-drawer expand-on-hover rail>
    <v-list>
      <v-list-item
        prepend-avatar="https://cdn.pixabay.com/photo/2023/08/18/15/02/dog-8198719_640.jpg"
        subtitle="ruthlessyeddo@gmail.com"
        title="Ruthless Yeddo"
      ></v-list-item>
    </v-list>

    <v-divider></v-divider>

    <v-list density="compact" nav>
      <v-list-item
        prepend-icon="mdi-human-male-board-poll"
        title="Tutor Dashboard"
        value="dashboard"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-star"
        title="Starred"
        value="starred"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-cash-multiple"
        title="Transactions"
        value="transactions"
      ></v-list-item>
      <v-list-item
        prepend-icon="mdi-account-circle"
        title="Profile"
        value="profile"
      ></v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
//
</script>
