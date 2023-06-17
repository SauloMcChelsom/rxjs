import { of } from 'rxjs';  
import { map } from 'rxjs/operators';  

class App {

  public CountNumber(){
    map(x => parseInt(x+'') * parseInt(x+''))(of(1, 2, 3, 4, 5)).subscribe((v) => console.log(`Output is: ${v}`));  
  }

  public uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
      var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
    });
  }

  public genKey(length: number) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(
      Math.floor(Math.random() * characters.length));
    }
    return result;
  }

  constructor(){
    const key = this.genKey(4)
    const id = this.uuidv4()
    this.CountNumber()

    console.log(key)
    console.log(id)
    console.log(`start with success. v:0.0.1`);
  }
}

export const app = new App()