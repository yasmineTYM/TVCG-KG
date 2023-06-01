<script setup>
import vegaEmbed from 'vega-embed'
import VueVega from 'vue-vega'
import {ref,onMounted, onUnmounted,watch, onActivated} from 'vue'
// import Vue from 'vue'
// Vue.use(VueVega)
import { createApp } from 'vue'
import App from '../App.vue'
import { NodeResizer } from '@vue-flow/node-resizer'
import { Handle, Position } from '@vue-flow/core'
import {initialize} from '../js/initialize.js'

const app = createApp(App)
app.use(VueVega)

const {cardWidth, cardHeight, resizeEndFunc} = initialize(400, 300)

const props = defineProps({
  data: {
    type:Object,
    required: true
  },
  id: {
    type:String, 
    required: true
  }
})
// const data = ref()
vegaEmbed('#vegaDiv', props.data)

</script>

<template>
    <div>
      <NodeResizer @resize="resizeEndFunc" min-width="100" min-height="30"  color="white"/>
      <Handle type="target" :position="Position.Left" />
      <Handle type="source" :position="Position.Right" />
      <v-card
      :width=cardWidth
      :height=cardHeight
      variant = "outlined"
      title="Visualizer">
      <div id="vegaDiv">
      </div>
      </v-card>
      
    </div>
</template>
<style>

</style>

