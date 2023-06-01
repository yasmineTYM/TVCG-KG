import { ref, computed , markRaw} from 'vue'
import { defineStore } from 'pinia'
import { isNode } from '@vue-flow/core';


const flowStore = defineStore('elementsStore', {
  state() {
    return {
      elements: [
        {
          id: '1',
          type: 'notif',
          label: 'Initializer',
          position: { x: 0, y: 10 },
          class: 'light',
          data: {
            'nodeTitle': 'Question Input',
            'nodeText': 'Who works in the Ohio State University?'
          }
        },
        {
          id: '2',
          type: 'cypher',
          position: { x: 300, y: 10 },
          data: {
            'cypher': "MATCH (a:Author)-[:memberOf]->(aff:Affiliation)\nWHERE aff.name = 'Ohio State University'\nRETURN a.name",
            "nodeTitle": "Cypher"
          },
          class: 'light',
        },
        {
          id: '3',
          label: '',
          type: 'table',
          position: { x: 600, y: 10 },
          class: 'light',
          data:{
            'nodeTitle': "Retrieved Data",
            "tableData": {
              itemsPerPage: 5,
              headers: [
                { title: 'Full name', align: 'start', key: 'name' },
              ],
              desserts: [
                {name: 'Yinxuan Shi',},
                {name: "Subhashis Hazarika"},
                {name: "Roni Yagel"},
                {name: "Mukund Raj"},
                {name: "Bo Yuan"},
                {name: "Guo-Shi Li"}]
            }
          },  
          style: { '--vf-node-color': 'blue' }
        },
        
        {
          id: '4',
          label: 'Visualizer',
          type: 'chart',
          position: { x: 1000, y: 10 },
          class: 'light',
          data: {
            "nodeTitle": "visualizer",
            "$schema": "https://vega.github.io/schema/vega-lite/v5.json",
            "description": "A simple donut chart with embedded data.",
            "data": {
              "values": [
                {"category": 1, "value": 4},
                {"category": 2, "value": 6},
                {"category": 3, "value": 10},
                {"category": 4, "value": 3},
                {"category": 5, "value": 7},
                {"category": 6, "value": 8}
              ]
            },
            "mark": {"type": "arc", "innerRadius": 50},
            "encoding": {
              "theta": {"field": "value", "type": "quantitative"},
              "color": {"field": "category", "type": "nominal"}
            }
          }
        },
        { id: 'e1-2', source: '1', target: '2' },
        { id: 'e1-3', source: '2', target: '3' },
        { id: 'e3-4', source: '3', target: '4' },
      ],
    };
  },
  actions: {
    reset() {
      this.elements = [];
    },
    log() {
      console.log('stored elements', this.elements);
    },
    toggleClass() {
      this.elements.forEach(
        (el) => (el.class = el.class === 'light' ? 'dark' : 'light')
      );
    },
    updatePosition() {
      this.elements.forEach((el) => {
        if (isNode(el)) {
          el.position = {
            x: Math.random() * 400,
            y: Math.random() * 400,
          };
        }
      });
    },
  },
});

export default flowStore;

