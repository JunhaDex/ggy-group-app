<template>
  <RouterView />
  <Footer />
</template>
<script setup lang="ts">
import { RouterView } from 'vue-router';
import Footer from '@/components/layouts/Footer.vue';
</script>
