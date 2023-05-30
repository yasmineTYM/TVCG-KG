// mouse.js
import { ref} from 'vue'

export function initialize(width=250, height=200) {
    
    var cardWidth = ref(width);
    var cardHeight = ref(height); 
    function resizeEndFunc(params){
    cardWidth.value = params.params.width
    cardHeight.value = params.params.height
    // console.log(cardWidth, cardHeight)
    }
    return {cardWidth, cardHeight, resizeEndFunc} 
  }