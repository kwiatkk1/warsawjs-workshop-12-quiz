<template>
  <AddQuestionForm @question-added="$emit('question-added', $event)"/>
</template>

<script>
  import AddQuestionForm from './AddQuestionForm'

  export default {
    name: 'QuizEditor',

    components: {
      AddQuestionForm
    }
  }
</script>
