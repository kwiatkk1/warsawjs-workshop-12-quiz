<template>
  <v-app>
    <v-content>
      <v-container>
        <v-layout row justify-center>
          <v-flex>
            <v-tabs fixed icons centered>
              <v-tabs-bar dark color="cyan">
                <v-tabs-slider color="yellow"></v-tabs-slider>
                <v-tabs-item href="#tab-play" @click="reset">
                  <v-icon>question_answer</v-icon>
                  Quiz
                </v-tabs-item>
                <v-tabs-item href="#tab-editor">
                  <v-icon>edit</v-icon>
                  Edytor
                </v-tabs-item>
              </v-tabs-bar>
              <v-tabs-items>
                <v-tabs-content id="tab-play">
                  <QuizPlay :questions="questions" :startDate="startDate" @reset="reset" />
                </v-tabs-content>
                <v-tabs-content id="tab-editor">
                  <QuizEditor @question-added="handleNewQuestion"/>
                </v-tabs-content>
              </v-tabs-items>
            </v-tabs>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import QuizPlay from './components/QuizPlay'
import QuizEditor from './components/QuizEditor'

export default {
  name: 'app',

  components: {
    QuizPlay,
    QuizEditor
  },

  data () {
    return {
      startDate: new Date(),
      questions: []
    }
  },

  methods: {
    handleNewQuestion (newQuestion) {
      this.questions.push(newQuestion)
    },

    reset () {
      this.questions = []
      this.refreshQuestions()
    },

    refreshQuestions () {
      function normalizeQuestion ({ category, correct_answer, incorrect_answers, question }) {
        const correctAnswerIndex = Math.floor(Math.random() * (incorrect_answers.length + 1))
        const answers = incorrect_answers.slice(0)

        answers.splice(correctAnswerIndex, 0, correct_answer)

        console.log('answer for', question, correctAnswerIndex)

        return {
          title: `${category}: ${question}`,
          answers,
          correctAnswerIndex
        }
      }

      this.$http.get('https://opentdb.com/api.php?amount=10&category=18&type=multiple')
        .then(response => response.json())
        .then(data => data.results)
        .then(results => results.map(normalizeQuestion))
        .then(newQuestions => {
          setTimeout(() => {
            this.questions = newQuestions
          }, 500)
        })
    }
  },

  created () {
    this.refreshQuestions()
  }
}
</script>

<style>

</style>
