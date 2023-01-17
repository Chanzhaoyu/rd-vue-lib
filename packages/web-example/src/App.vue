<template>
  <div>
    <h1>Example</h1>
    <Button @click="handleClick">Button</Button>
  </div>
</template>

<script setup>
import { Button } from '@rd/web-vue'

const handleClick = () => {
  alert('click')
}
</script>
