<template>
  <div id="app">

    <div class="backdrop">
      <span class="stars"></span>
      <span class="cloud one"></span>
      <span class="cloud two"></span>
    </div>

    <main class="container">
      <figure class="logo-container"><img src="./assets/logo.svg" alt="Sleepeey logo" class="logo"></figure>
      <span class="moon"></span>
      <section class="content">

        <h1 class="title" v-if="mode === ''">Find your perfect bed or wake time, using sleepcycles.</h1>

        <div class="times-container">

          <div class="bedtime" v-if="mode === 'bedtime'">
            <h3>You should go to bed at</h3>
            <ul class="times">
              <li class="item" v-for="time in bedtimes" v-bind:key="time.id"><span>{{time.value}}</span></li>
            </ul>
          </div>

          <div class="waketime" v-if="mode ===  'waketime'">
            <h3>You should wake up at</h3>
            <ul class="times">
              <li class="item" v-for="time in waketimes" v-bind:key="time.id"><span>{{time.value}}</span></li>
            </ul>
          </div>
        </div>
      </section>
      <section class="bottom-bar">
        <div class="time-select"  v-if="mode === 'bedtime'">
          <h5>When do you have to wake up?</h5>
          <input type="time" class="time-input" name="waketime" v-model="givenTime">
        </div>
        <div class="buttons">
          <button class="btn" title="When should I wake up?" @click="calculateWakeTime()"><i class="icon wake"></i></button>
          <button class="btn" title="When should I sleep?" @click="calculateBedTime(givenTime)"><i class="icon sleep"></i></button>
        </div>
      </section>
    </main>
  </div>
</template>

<script src="./App.vue.js"></script>

<style src="./App.vue.scss" lang="scss"></style>
