import {ref, reactive,computed} from 'vue'
import {defineStore} from 'pinia'

export const useChartStore = defineStore('chart-node-template', ()=>{
    function initialize(id, label, x,y,title, data, width, height){
        const template = reactive({
            id: '123',
            type: 'chart',
            label: "label", 
            position: {
                x: 0,
                y: 0
            },
            data: {
                nodeTitle: "title",
                data: {},
                width: 350,
                height: 400 
            }
            
        })
        template['id'] = id 
        template['label'] = label
        template['position']['x'] = x
        template['position']['y'] = y 
        template['data']['nodeTitle'] = title 
        template['data']['tableData'] = data 
        template['data']['width'] = width 
        template['data']['height'] = height 
        return template
    }
    return {initialize}
})
