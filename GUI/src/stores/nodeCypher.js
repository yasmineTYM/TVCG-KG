import {ref, reactive} from 'vue'
import {defineStore} from 'pinia'
import {isNode} from '@vue-flow/core';

export const useCypherStore = defineStore('cypher-node-template', ()=>{
    function initialize(id, label, x,y,title, cypher, width, height){
        const template = reactive({
            id: '123',
            type: 'cypher',
            label: "label", 
            position: {
                x: 0,
                y: 0
            },
            data: {
                nodeTitle: "title",
                cypher: "cypher",
                width: 250,
                height: 200 
            },
            
        })
        template['id'] = id 
        template['label'] = label
        template['position']['x'] = x
        template['position']['y'] = y 
        template['data']['nodeTitle'] = title 
        template['data']['cypher'] = cypher 
        template['data']['width'] = width 
        template['data']['height'] = height 
        return template
    }
    return {initialize}
})

// export initialNotif
// export const initialNotif = defineStore('counter', () => {
//     const count = ref(0)
//     const name = ref('Eduardo')
//     const doubleCount = computed(() => count.value * 2)
//     function increment() {
//       count.value++
//     }
  
//     return { count, name, doubleCount, increment }
//   })