<template>
    <div>
      <div v-if="auth.username">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore aut exercitationem rem corporis quas earum consequatur voluptate amet quam aspernatur nobis iusto laborum nostrum nesciunt libero, at fugit explicabo expedita.
      </div>
      <div v-else>Harap login terlebih dahulu.</div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { useAuthStore } from '@/stores/auth';
  
  const auth = useAuthStore();
  </script>