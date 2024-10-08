import {surpriseMePrompts} from "../constants";
export function getRandomPrompt(prompt) {
  // here we get a random index 1 to 49 --> 
    const randomIndex = Math.floor(Math.random() * surpriseMePrompts.length);
// by using that random index, we get the random prompt --> 
    const randomPrompt = surpriseMePrompts[randomIndex];
  
    if (randomPrompt === prompt) return getRandomPrompt(prompt);
  
    return randomPrompt;
  }
  export async function downloadImage(_id, photo) {
    FileSaver.saveAs(photo, `download-${_id}.jpg`);
  } 