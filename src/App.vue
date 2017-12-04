<template>
  <div id="app">

    <main>
      <input type="time" v-model="givenTime">
      <h2>When should I...</h2>
      <button @click="calculateBedTime(givenTime)" class="btn">SLEEP</button>
      <button @click="calculateWakeTime()" class="btn">WAKE</button>

      <div class="container bedtime" v-if="mode === 'bedtime'">
        <span v-if="pressed">Go to bed at:</span>
        <ul class="list">
          <li class="item" v-for="time in bedtimes" v-bind:key="time.id"><p>{{time.value}}</p></li>
        </ul>
      </div>

      <div class="container waketime" v-if="mode ===  'waketime'">
        <span v-if="pressed">wake up at:</span>
        <ul class="list">
          <li class="item" v-for="time in waketimes" v-bind:key="time.id"><p>{{time.value}}</p></li>
        </ul>
      </div>

    </main>
  </div>
</template>

<script src="./App.vue.js"></script>

<style src="./App.vue.scss" lang="scss"></style>
