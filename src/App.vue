<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <QuestionCard
              v-if="!isFinished"
              :question="currentQuestion"
              :onCorrectAnswer="next"
              :onWrongAnswer="reset"
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
    }
  },

  methods: {
    next () {
      if (this.questionIndex + 1 < this.questions.length) {
        this.questionIndex += 1
      } else {
        this.isFinished = true
      }
    },

    reset () {
      this.questionIndex = 0
    }
  }
}
</script>

<style>

</style>
