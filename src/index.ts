import { Observable } from 'rxjs';  
import { Observer } from 'rxjs';
import { interval } from 'rxjs';  
import { take } from 'rxjs/operators';  

class App {
    public observable = Observable.create((observer: Observer<any>)  => {
        observer.next('Welcome to JavaTpoint!');  
        observer.next('Saulo Silva Santos');  
        observer.next('Maelly Batista Ramos');  
        observer.complete();  
        observer.next('Bye');  
    })  

    constructor(){
        this.observable.subscribe(  
            (x:any) => this.logItem(x),  
            (error: any) => this.logItem ('Error: ' + error),  
            () => this.logItem('This is the first Example')  
        ); 

        let p:HTMLElement=document.getElementById("p1")
        p.innerHTML="hello"

        let test = interval(1000);  
        let case1 = test.pipe(take(10));  
        case1.subscribe(x => {
            console.log(x)
            let p:HTMLElement=document.getElementById("p2")
            p.innerHTML=x.toString()
            if(x == 9){
                this.btnAdd()
            }
        }); 
    }

    logItem(val:any) {  
        var node = document.createElement("li");  
        var textnode = document.createTextNode(val);  
        node.appendChild(textnode);  
        document.getElementById("list")?.appendChild(node);  
    }  
    
    btnAdd(){
        let p:HTMLElement=document.getElementById("p1")
        p.innerHTML="hello World"
    }
}
(<any>window).App = new App()

