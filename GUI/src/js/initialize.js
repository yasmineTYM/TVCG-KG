// mouse.js
import { ref} from 'vue'

export function initialize(width=250, height=200) {
    
    const cardWidth = ref(width);
    const cardHeight = ref(height); 
    // console.log(cardWidth, cardHeight)
    function resizeEndFunc(params){
      cardWidth.value = params.params.width
      cardHeight.value = params.params.height
      // console.log(cardWidth, cardHeight)
    }
    return {cardWidth, cardHeight, resizeEndFunc} 
  }