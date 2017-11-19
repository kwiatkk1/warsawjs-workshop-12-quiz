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
                  <QuizPlay :questions="questions" :startDate="startDate" />
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

import questions from './questions'

export default {
  name: 'app',

  components: {
    QuizPlay,
    QuizEditor
  },

  data () {
    return {
      startDate: new Date(),
      questions: questions
    }
  },

  methods: {
    handleNewQuestion (newQuestion) {
      this.questions.push(newQuestion)
    },

    reset () {
      this.startDate = new Date()
    }
  }
}
</script>

<style>

</style>
