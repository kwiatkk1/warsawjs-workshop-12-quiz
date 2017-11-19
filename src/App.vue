<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout row justify-center>
          <v-flex md8 xs10>
            <img src="https://github.com/macmackiewicz/warsawjs-workshop-12-quiz/raw/master/src/assets/millionaire.png" width="100%">
            <QuestionCard
              v-if="!isFinished"
              :question="currentQuestion"
              :onCorrectAnswer="next"
              :onWrongAnswer="reset"
              :onAnswerSelect="onAnwserSelect"
            />
            <v-card v-else>
              <v-card-title>
                You've won! Congratulations!
              </v-card-title>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import QuestionCard from './components/QuestionCard'
import questions from './questions'

export default {
  name: 'app',

  components: {
    QuestionCard
  },

  data () {
    return {
      isFinished: false,
      questionIndex: 0,
      questions
    }
  },

  computed: {
    currentQuestion ({ questions, questionIndex }) {
      return questions[questionIndex]
    },

    isLastQuestion () {
      return this.questionIndex === this.questions.length - 1
    }
  },

  methods: {

    onAnwserSelect () {
      if (this.isLastQuestion) {
        this.isFinished = true
      }
    },

    next () {
      const { questionIndex, questions } = this
      this.questionIndex = Math.min(questionIndex + 1, questions.length - 1)
    },

    reset () {
      this.questionIndex = 0
      this.isFinished = false
    }
  }
}
</script>

<style>

</style>
