<script setup>
// import Prism Editor
import { NodeResizer } from '@vue-flow/node-resizer'
import {initialize} from '../js/initialize.js'

import { PrismEditor } from 'vue-prism-editor';
import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere

// import highlighting library (you can use any library you want just return html string)
import { highlight, languages } from 'prismjs/components/prism-core';
import 'prismjs/components/prism-clike';
import 'prismjs/components/prism-javascript';
import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles
import { Handle, Position } from '@vue-flow/core'

function highlighter(code) {
    return highlight(code, languages.js); // languages.<insert language> to return html with markup
}

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
const title = props.data.nodeTitle
const cypher = props.data.cypher  

const {cardWidth, cardHeight, resizeEndFunc} = initialize()

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
            <v-card-text>
                <prism-editor class="my-editor" v-model="cypher" :highlight="highlighter" line-numbers></prism-editor>
            </v-card-text>
        </v-card>
        
    </div>
</template>