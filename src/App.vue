<template>
  <div :key="componentKey" ref="app">
    <h1>Kalkulator Sederhana</h1>
    <input v-model.number="calculator.number1" type="number" placeholder="Masukkan angka pertama"/>
    <input v-model.number="calculator.number2" type="number" placeholder="Masukkan angka kedua"/>
    <button @click="calculator.add">Tambah</button>
    <button @click="calculator.subtract">Kurang</button>
    <button @click="calculator.multiply">Kali</button>
    <button @click="calculator.divide">Bagi</button>
    <button @click="calculator.clear">Clear</button>
    <h2>Hasil: {{ calculator.result }}</h2>
  </div>
</template>

<script setup>
import { useCalculatorStore } from './stores/calculatorStore';
import { computed, ref } from 'vue';

const calculator = useCalculatorStore();

// Membuat forceUpdate untuk memaksa komponen melakukan re-render
const forceUpdate = ref(0);

// Karena kita menggunakan Pinia, state sudah reactive, jadi kita hanya perlu memaksa update jika diperlukan
// Ini tidak diperlukan untuk kasus umum, tapi jika Anda ingin memaksa update, bisa dilakukan seperti ini
const componentKey = computed(() => forceUpdate.value);

// Contoh memaksa update (biasanya tidak diperlukan)
function forceReRender() {
  forceUpdate.value++;
}

// Opsional: Jika Anda ingin memaksa re-render setiap kali ada operasi kalkulator
// Tapi sebenarnya, karena Pinia state adalah reactive, Vue akan otomatis merender ulang jika state berubah
calculator.$subscribe(() => {
  forceReRender();
});
</script>