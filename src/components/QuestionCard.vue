<template>
  <v-card>
    <v-card-title>{{ question.title }}</v-card-title>
    <v-card-text>
      <v-list>
          <QuestionAnswer v-for="(answer, index) in question.answers" :key="index"
            :text="answer"
            :status="getStatus(index)"
            :onClick="() => selectAnwser(index)"
          />
      </v-list>
    </v-card-text>
  </v-card>
</template>

<script>
import QuestionAnswer from './QuestionAnswer'

export default {
  name: 'QuestionCard',

  props: ['question'],

  components: {
    QuestionAnswer
  },

  data () {
    return {
      selectedAnswer: null
    }
  },

  methods: {
    selectAnwser (index) {
      if (this.selectedAnswer === null) {
        this.selectedAnswer = index
      }
    },

    getStatus (index) {
      const { selectedAnswer, question } = this
      const { correctAnswerIndex } = question

      if (index !== selectedAnswer) return ''
      return (selectedAnswer === correctAnswerIndex) ? 'success' : 'error'
    }
  }
}
</script>
