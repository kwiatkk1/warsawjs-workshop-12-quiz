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

    <v-card-actions v-if="selectedAnswer !== null">
      <v-btn v-if="isCorrectAnswerSelected" @click="onCorrectAnswer">OK, gram dalej!</v-btn>
      <v-btn v-else @click="onWrongAnswer">To koniec</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import QuestionAnswer from './QuestionAnswer'

export default {
  name: 'QuestionCard',

  props: ['question', 'onCorrectAnswer', 'onWrongAnswer', 'onAnswerSelect'],

  components: {
    QuestionAnswer
  },

  data () {
    return {
      selectedAnswer: null
    }
  },

  computed: {
    isCorrectAnswerSelected ({ selectedAnswer, question }) {
      return selectedAnswer === question.correctAnswerIndex
    }
  },

  methods: {
    selectAnwser (index) {
      if (this.selectedAnswer === null) {
        this.selectedAnswer = index
      }

      this.onAnswerSelect()
    },

    getStatus (index) {
      const { selectedAnswer, question } = this
      const { correctAnswerIndex } = question

      if (index !== selectedAnswer) return ''
      return (selectedAnswer === correctAnswerIndex) ? 'success' : 'error'
    }
  },

  watch: {
    question () {
      this.selectedAnswer = null
    }
  }
}
</script>
