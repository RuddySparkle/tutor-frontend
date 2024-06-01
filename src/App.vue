<template>
  <v-app>
    <v-layout>
      <SideBar />
      <v-main>
        <router-view></router-view>
      </v-main>
    </v-layout>
  </v-app>
</template>

<script setup lang="ts">
import SideBar from "@/modules/SideBar";
</script>
