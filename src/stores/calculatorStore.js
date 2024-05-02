import { defineStore } from 'pinia';

export const useCalculatorStore = defineStore('calculator', {
  state: () => ({
    number1: 0,
    number2: 0,
    result: 0,
  }),
  getters: {
    getResult: (state) => state.result, // Getter untuk mendapatkan hasil
  },
  actions: {
    add() {
      this.result = this.number1 + this.number2;
      console.log('Addition result:', this.result); // Debugging
    },
    subtract() {
      this.result = this.number1 - this.number2;
      console.log('Subtraction result:', this.result); // Debugging
    },
    multiply() {
      this.result = this.number1 * this.number2;
      console.log('Multiplication result:', this.result); // Debugging
    },
    divide() {
      if (this.number2 !== 0) {
        this.result = this.number1 / this.number2;
        console.log('Division result:', this.result); // Debugging
      } else {
        alert('Tidak bisa dibagi dengan nol');
      }
    },
    clear() {
      this.number1 = 0;
      this.number2 = 0;
      this.result = 0;
      console.log('Clear all fields'); // Debugging
    },
  },
});