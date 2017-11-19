<template>
  <v-list-tile @click="onClick" :class="status">
    {{ text }}
  </v-list-tile>
</template>

<script>

export default {
  name: 'QuestionCard',
  props: ['text', 'status', 'onClick']
}
</script>
