<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout>
          <v-flex>
            <QuestionCard
              :question="currentQuestion"
              :onCorrectAnswer="next"
              :onWrongAnswer="reset"
            />
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
      this.questionIndex += 1
    },

    reset () {
      this.questionIndex = 0
    }
  }
}
</script>

<style>

</style>
