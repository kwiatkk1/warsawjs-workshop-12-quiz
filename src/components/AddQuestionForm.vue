<template>
  <v-card>
    <v-card-title primary-title>
      <h3>Dodawanie nowego pytania</h3>
    </v-card-title>

    <v-card-text>
      <v-text-field label="Tekst pytania" v-model="questionText" />

      <v-list two-line subheader>
        <v-subheader>Odpowiedzi</v-subheader>
        <v-list-tile avatar v-for="(answer, index) in answers" :key="index">
          <v-list-tile-action>
            <v-checkbox v-model="answers[index].isCorrect"></v-checkbox>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-text-field :label="'Tekst odpowiedzi ' + (index + 1)" v-model="answers[index].text" />
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-card-text>

    <v-card-actions>
      <v-btn dark color="indigo" @click="addAnswer">
        <v-icon dark>add</v-icon> dodaj odpowiedź
      </v-btn>

      <v-btn @click="commitQuestion" dark color="red">
        <v-icon dark>save</v-icon>
        Zapisz pytanie
      </v-btn>
    </v-card-actions>

  </v-card>
</template>

<script>
  export default {
    name: 'AddQuestionForm',

    data () {
      return {
        questionText: '',
        answers: []
      }
    },

    computed: {
      normalizedQuestion () {
        return {
          title: this.questionText,
          answers: this.answers.map(a => a.text),
          correctAnswerIndex: this.answers.findIndex(a => a.isCorrect)
        }
      }
    },

    methods: {
      addAnswer () {
        this.answers.push({ text: '', isCorrect: false })
      },

      commitQuestion () {
        this.$emit('question-added', this.normalizedQuestion)
        this.questionText = ''
        this.answers = []
      }
    }
  }
</script>
