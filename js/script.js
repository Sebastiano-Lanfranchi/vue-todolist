new Vue({
  el: '#root',
  data: {
   inputData: [],
   message: ''
  },
  methods: {
    randomNumber: function(min, max) {
      var result = Math.floor(Math.random() * (max + 1 - min) + min);
      return result;
    },
    submitCode: function(){
    this.inputData.push(this.message)
    this.message = ''
  },
   deleteData: function(index){
    this.inputData.splice(index, 1)
   }
  }
});

Vue.config.devtools = true;
