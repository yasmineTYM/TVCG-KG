import {ref, reactive} from 'vue'
import {defineStore} from 'pinia'
import {isNode} from '@vue-flow/core';

export const useSchemaStore = defineStore('schema-node-template', ()=>{
    function initialize(id, label, x,y,title, nodeProperty, relProperty, rel, width, height){
        const template = reactive({
            id: '123',
            type: 'schema',
            label: "label", 
            position: {
                x: 0,
                y: 20
            },
            data: {
                nodeTitle: "title",
                nodeProperty:[],
                relProperty: [],
                rel:[],
                width: 350,
                height: 400 
            }
        })
        template['id'] = id 
        template['label'] = label
        template['position']['x'] = x
        template['position']['y'] = y 
        template['data']['nodeTitle'] = title 
        template['data']['nodeProperty'] = nodeProperty 
        template['data']['relProperty'] = relProperty
        template['data']['rel'] = rel
        template['data']['width'] = width 
        template['data']['height'] = height 
        // console.log(template)
        return template
    }
    return {initialize}
})
