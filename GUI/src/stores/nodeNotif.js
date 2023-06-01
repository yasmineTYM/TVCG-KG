import {ref, reactive,computed} from 'vue'
import {defineStore} from 'pinia'
import {isNode} from '@vue-flow/core';

export const useNotifStore = defineStore('notif-node-template', ()=>{
    function initialize(id, label, x,y,title, text, width, height){
        const template = reactive({
            id: '123',
            type: 'notif',
            label: "label", 
            position: {
                x: 0,
                y: 0
            },
            data: {
                nodeTitle: "title",
                nodeText: "question",
                width: 250,
                height: 200 
            },
            
        })
        template['id'] = id 
        template['label'] = label
        template['position']['x'] = x
        template['position']['y'] = y 
        template['data']['nodeTitle'] = title 
        template['data']['nodeText'] = text 
        template['data']['width'] = width 
        template['data']['height'] = height 
        return template
    }
    return {initialize}
})
