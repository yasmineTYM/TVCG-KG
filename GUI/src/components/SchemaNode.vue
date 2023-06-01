<script setup>
import { NodeResizer } from '@vue-flow/node-resizer'
import {initialize} from '../js/initialize.js'
import { Handle, Position } from '@vue-flow/core'

const props = defineProps({
  data: {
    type:Object,
    required: true
  },
  id: {
    type: String, 
    required: true
  },
  position: {
    type: Object,
    required: true 
  }
})

// console.log(props.data)
const {cardWidth, cardHeight, resizeEndFunc} = initialize( props.data.width, props.data.height)

const title = props.data.nodeTitle

const node_property_labels = props.data.nodeProperty
.filter(obj => obj[0]['labels'].includes("_")==false)
.map(obj=>obj[0]['labels'])

const relation_types = props.data.rel
// console.log(props.data)
// const relations = props.data. 
// console.log(node_property_labels)
</script>

<template>
    <div>
        <NodeResizer @resize="resizeEndFunc" min-width="100" min-height="30"  color="white"/>
        <Handle type="target" :position="Position.Left" />
        <Handle type="source" :position="Position.Right" />
        <v-card
            variant="outlined"
            class="mx-auto"
            :width=cardWidth
            :height=cardHeight>
            <template v-slot:title>
                {{title}}
                <v-icon
                size="large"
                color="green-darken-2"
                icon="mdi-domain"
            ></v-icon>
            </template>
            <div class="text-overline mb-1">
              Entity Types:
            </div>
              <v-chip
                v-for="chip in node_property_labels"
                :key="chip"
                size="x-small"
                color="indigo"
                text-color="white"
              >
              {{chip}}
              </v-chip>
            <div class="text-overline mb-1">
              Relation Types:
            </div>
            <v-chip
                v-for="chip in relation_types"
                :key="chip"
                size="x-small"
                color="indigo"
                text-color="white"
              >
              {{chip}}
            </v-chip>
            <!-- <div class="text-caption">Greyhound divisely hello coldly fonwderfully</div> -->
        </v-card>
        
    </div>
</template>