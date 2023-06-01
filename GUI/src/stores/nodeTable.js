import {ref, reactive} from 'vue'
import {defineStore} from 'pinia'
import {isNode} from '@vue-flow/core';

export const useTableStore = defineStore('table-node-template', ()=>{
    function initialize(id, label, x,y,title, tableData, width, height){
        const template = reactive({
            id: '123',
            type: 'table',
            label: "label", 
            position: {
                x: 0,
                y: 0
            },
            data: {
                nodeTitle: "title",
                tableData: [],
                width: 350,
                height: 400 
            },
            
        })
        template['id'] = id 
        template['label'] = label
        template['position']['x'] = x
        template['position']['y'] = y 
        template['data']['nodeTitle'] = title 
        template['data']['tableData'] = tableData 
        template['data']['width'] = width 
        template['data']['height'] = height 
        return template
    }
    return {initialize}
})
