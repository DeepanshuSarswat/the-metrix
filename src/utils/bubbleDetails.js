import { getRandomColor } from "./getRandomColor";
import { getRandomSize } from "./getRandomSize";

export const bubbleDetails = () =>{
    const size = getRandomSize(65, 70);
    const backgroundColor = getRandomColor();
    
    const style = {
      width: `${size}px`,
      borderRadius:`${50}%`,
      height: `${size}px`,
      backgroundColor,
      transition: 'transform 0.3s ease'
    }

    return style;
}