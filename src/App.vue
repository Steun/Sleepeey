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
        <div class="time-select">
          <h5>When do you have to wake up?</h5>
          <input type="time" class="time-input" name="waketime" v-model="givenTime">
        </div>
        <div class="buttons">
          <button class="btn" title="When should I wake up?" @click="calculateWakeTime()"><i class="icon wake"></i></button>
          <button class="btn" title="When should I sleep?" @click="calculateBedTime(givenTime)"><i class="icon sleep"></i></button>
        </div>
      </section>
    </main>

    <!-- <main>
      <input type="time" v-model="givenTime">
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

    </main> -->
  </div>
</template>

<script src="./App.vue.js"></script>

<style src="./App.vue.scss" lang="scss"></style>
