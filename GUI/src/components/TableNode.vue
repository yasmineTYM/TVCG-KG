<script setup>
import {ref} from 'vue'
import {initialize} from '../js/initialize.js'
import { NodeResizer } from '@vue-flow/node-resizer'
import { Handle, Position } from '@vue-flow/core'
import { VDataTable } from 'vuetify/labs/VDataTable'

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

const {cardWidth, cardHeight, resizeEndFunc} = initialize(300, 400)


const title = props.data.nodeTitle
const itemsPerPage = props.data.tableData.itemsPerPage
const headers= props.data.tableData.headers
const desserts= props.data.tableData.desserts


// console.log(props.data.tableData)
</script>


<template>
    <div>
        <NodeResizer @resize="resizeEndFunc" min-width="100" min-height="30"  color="white"/>
        <Handle type="target" :position="Position.Left" />
        <Handle type="source" :position="Position.Right" />
        <!-- <HandleElement type="target" position={Position.Top} /> -->
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
        <v-data-table
            :items-per-page="itemsPerPage"
            :headers="headers"
            :items="desserts"
            item-value="name"
            class="elevation-1"
        ></v-data-table>
        </v-card>
    </div>
</template>