<template>
  <div id="app">

    <div class="backdrop">
      <span class="stars"></span>
      <span class="cloud one"></span>
      <span class="cloud two"></span>
    </div>

    <main class="container">
      <figure class="logo-container"><button class="logo" type="button" @click="cleanTimes()"><img src="./assets/logo.svg" alt="Sleepeey logo"></button></figure>
      <span class="moon"></span>
      <section class="content">

        <h1 class="title" v-if="mode === ''">Find your perfect bed or wake time, using sleepcycles.</h1>

        <div class="times-container">

          <h3>{{timeTitle}}</h3>

          <transition name="scale-fade" mode="out-in" appear>
          <div class="bedtime" v-if="mode === 'bedtime'" key="bedtime">
            <ul class="times">
              <transition-group name="scale-fade" mode="out-in">
                <li class="item" v-for="time in bedtimes" v-bind:key="time.id"><span>{{time.value}}</span></li>
              </transition-group>
            </ul>
          </div>

          <div class="waketime" v-if="mode ===  'waketime'" key="waketime">
            <ul class="times">
              <transition-group name="scale-fade" mode="out-in">
                <li class="item" v-for="time in waketimes" v-bind:key="time.id"><span>{{time.value}}</span></li>
              </transition-group>
            </ul>
          </div>
          </transition>
        </div>
      </section>
      <section class="bottom-bar">
        <div class="time-select"  v-if="mode === 'bedtime'">
          <h5>When do you have to wake up?</h5>
          <input type="time" class="time-input" name="waketime" v-model="givenTime" @change="calculateBedTime()" @keyup.enter.prevent="calculateBedTime()">
        </div>
        <div class="buttons">
          <button class="btn" title="When should I wake up?" @click="calculateWakeTime()"><i class="icon wake"></i></button>
          <button class="btn" title="When should I sleep?" @click="openBedTimeBar()"><i class="icon sleep"></i></button>
        </div>
      </section>
    </main>
  </div>
</template>

<script src="./App.vue.js"></script>

<style src="./App.vue.scss" lang="scss"></style>
