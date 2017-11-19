<template>
  <v-card>
    <v-card-media
      class="white--text"
      src="https://github.com/macmackiewicz/warsawjs-workshop-12-quiz/raw/master/src/assets/millionaire.png"
      height="400px">
      <v-container fill-height fluid>
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline">{{ progress }}</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-card-media>

    <v-card-title primary-title>
      <h3 v-html="question.title"></h3>
    </v-card-title>

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

  props: ['question', 'progress', 'onCorrectAnswer', 'onWrongAnswer', 'onAnswerSelect', 'startTime'],

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

      this.onAnswerSelect(index === this.question.correctAnswerIndex)
    },

    getStatus (index) {
      const { selectedAnswer, question } = this
      const { correctAnswerIndex } = question

      if (index !== selectedAnswer) {
        return selectedAnswer !== null && index === correctAnswerIndex ? 'success' : ''
      }
      return (selectedAnswer === correctAnswerIndex) ? 'success' : 'error'
    }
  },

  watch: {
    question () {
      this.selectedAnswer = null
    },

    startTime () {
      this.selectedAnswer = null
    }
  }
}
</script>
