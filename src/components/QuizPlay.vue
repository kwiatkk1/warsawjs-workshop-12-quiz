<template>
  <div>
    <v-container fluid v-if="questions.length === 0">
      <v-layout row justify-center>
        <v-progress-circular indeterminate v-bind:size="70" v-bind:width="7" color="blue"></v-progress-circular>
      </v-layout>
    </v-container>

    <div v-else-if="!isFinished">
      <QuestionCard
        v-if="!isFinished"
        :question="currentQuestion"
        :onCorrectAnswer="next"
        :onWrongAnswer="reset"
        :onAnswerSelect="onAnwserSelect"
        :progress="progress"
        :startTime="startDate"
      />
    </div>

    <v-card v-else>
      <v-card-title>
        You've won! Congratulations!
      </v-card-title>
    </v-card>
  </div>
</template>

<script>
  import QuestionCard from './QuestionCard'

  export default {
    name: 'QuizPlay',

    components: {
      QuestionCard
    },

    props: [ 'questions', 'startDate' ],

    data () {
      return {
        isFinished: false,
        questionIndex: 0
      }
    },

    computed: {
      currentQuestion ({ questions, questionIndex }) {
        return questions[questionIndex]
      },

      isLastQuestion () {
        return this.questionIndex === this.questions.length - 1
      },

      progress () {
        return `${this.questionIndex + 1} / ${this.questions.length}`
      }
    },

    methods: {

      onAnwserSelect (isCorrect) {
        if (this.isLastQuestion && isCorrect) {
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
        this.$emit('reset');
      },

      handleNewQuestion (newQuestion) {
        this.questions.push(newQuestion)
      }
    }
  }
</script>
