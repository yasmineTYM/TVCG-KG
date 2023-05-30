<script setup>
// import {HandleElement} from '@vue-flow/core'
import { NodeResizer } from '@vue-flow/node-resizer'
import { Handle, Position } from '@vue-flow/core'
import {ref} from 'vue'

const props = defineProps({
  data: {
    type: Object,
    required: true,
  },
  id: {
    type: String, 
    required: true
  }
})
// console.log(props)
const title = props.data.nodeTitle
const question = props.data.nodeText

var cardWidth = ref('250px')
var cardHeight = ref('200px') 

function resizeEndFunc(params){
  cardWidth.value = params.params.width
  cardHeight.value = params.params.height
  // console.log(cardWidth, cardHeight)
} 

// var title = ref("Question Input:")
// var question = ref("Who works at the Ohio State University?")
// console.log('notif', props.data)

</script>
<template>
  <div>
      <NodeResizer @resize="resizeEndFunc" min-width="100" min-height="30" isVisible="false" color="white"/>
      <Handle type="target" :position="Position.Left" />
      <Handle type="source" :position="Position.Right" />
        <!-- <HandleElement type="target" position={Position.Top} /> -->
      <v-card
        variant="outlined"
        class="mx-auto"
        :width=cardWidth
        :height=cardHeight>
        <template v-slot:title>
          {{title }}
          <v-icon
          size="large"
          color="green-darken-2"
          icon="mdi-domain"
        ></v-icon>
        </template>
        <v-card-text>
          <v-text-field>
            {{ question }}
          </v-text-field>
        </v-card-text>
      </v-card>
    </div>
</template>
<style>

</style>

