import { BehaviorSubject, Observable, forkJoin, from, of, throwError } from 'rxjs';
import { Observer } from 'rxjs';
import { interval } from 'rxjs';  
import { Subject } from 'rxjs';
import { catchError, delay, filter, finalize, skipWhile, take, tap } from 'rxjs/operators';  
import { 
    map, 
    first 
} from 'rxjs/operators';

 class Introduction {

    i = 0

    dataService():Observable<any>{
        this.i = this.i + 1;
        return this.i == 2  ? throwError(() => new Error('data error')) : of('data returned')
    }
    

    public subject = new Subject<number>();

    public behavior = new BehaviorSubject(0);

    public observablefrom = from([1, 2, 3]);

    public notification:Observable<any> = new Observable((observer => {
        this.dataService().pipe(
            delay(200),
            tap((r)=>observer.next(r)),
            catchError((e)=>{
                observer.error(e);
                return of({error:e})
            })
        ).subscribe()
    }))

    public observable:Observable<string> = new Observable((observer => {
        observer.next('B');  
        observer.next('A');  
        observer.next('C');  
        observer.next('D');  
        observer.next('F');  
        //observer.error('on Error happened!!!'); //finalizar com error
        observer.complete(); //finalizar com sucesso
        setTimeout(() => {
            observer.next('Bye');  
        }, 3000);
     }))

    constructor(){
        this.observable.subscribe({
            next: (v) => this.logItem(v),
            error: (e) => console.error(e),
            complete: () => this.logItem('complete, done, finalize') 
        })

        this.ficarOuvidoSubject()
        this.ficarOuvidoBehavior()
    }

    ficarOuvidoSubject(){
        this.subject.subscribe({
            next: (v) => console.log(`observerA: ${v}`),
        });
    }

    ficarOuvidoBehavior(){
        this.behavior.subscribe({
            next: (v) => console.log(`observerA: ${v}`),
        });
    }
    countNumber(){
        let p:HTMLElement=document.getElementById("p1")
        p.innerHTML="hello"

        let test = interval(1000);  
        let case1 = test.pipe(take(10));  
        case1.subscribe(x => {
            console.log(x)
            let p:HTMLElement=document.getElementById("p2")
            p.innerHTML=x.toString()
            if(x == 9){
                this.alphabet()
            }
        }); 
    }

    logItem(val:any) {  
        var node = document.createElement("li");  
        var textnode = document.createTextNode(val);  
        node.appendChild(textnode);  
        document.getElementById("list")?.appendChild(node);  
    }  
    
    alphabet(){
        
        /*map(x => 1 + 1)(of(1, 2, 3)).subscribe((v) => console.log(`value: ${v}`));
        first()(of(11, 2, 31)).subscribe((v) => console.log(`value: ${v}`));*/

        this.observable.subscribe(x => {
            console.log(x);
        });
    }

    filter_alphabet(){
        this.observable.pipe(
            filter((v)=> v === 'B')
        ).subscribe(x => {
            console.log(x);
        });
    }

    while_alphabet(){
        this.observable.pipe(
            skipWhile((v)=> v === 'B')
        ).subscribe(x => {
            console.log(x);
        });
    }

    map_alphabet(){
        this.observable.pipe(
            map((v)=> v+'_RXJS'),
            delay(1000),
            tap((v)=>console.log(`A cada valor:${v} executar`)),
            finalize(()=>console.log('Independe se hover error ou sucesso, Finalize execute!'))
        ).subscribe(x => {
            console.log(x);
        });
    }

    service(text:string, time:number){
        return setTimeout(() => text, time)
    }

    forkJoin_alphabet(){
        forkJoin([
         this.service('A', 3000),
         this.service('B', 5000),
         this.service('C', 1000)
        ]).pipe(
            map(([first]) => {
                return  { first }
            })
        ).subscribe(x => {
            console.log(x);
        });
    }

    notification_alphabet(){
        this.notification.subscribe(x => {
            console.log(x);
        });
    }

    set_subject(){
        this.subject.next(2);
    }

    set_behavior(){
        this.behavior.next(27);
    }
}
(<any>window).Introduction = new Introduction()

