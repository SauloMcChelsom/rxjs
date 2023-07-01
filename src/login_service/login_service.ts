import { BehaviorSubject, Observable, Subscription, forkJoin, from, of, throwError } from 'rxjs';
import { Observer } from 'rxjs';
import { interval } from 'rxjs';  
import { Subject } from 'rxjs';
import { catchError, delay, filter, finalize, find, skipWhile, take, takeUntil, tap, toArray } from 'rxjs/operators';  
import { map, first } from 'rxjs/operators';

interface UserProfile { 
    id?: number;
    username: string; 
    password: string; 
} 

formLogin.onsubmit = (event) => {
    event.preventDefault()

    const data = new FormData(formLogin)

    const username = data.get('username').toString()
    const password = data.get('password').toString()

    new LoginService().login({username: username, password: password})
    new Load(true)
    new Message('')
}

class Message {
    constructor(user:any){
        this.text(user)
    }

    private text(text:any){
        let p:HTMLElement=document.getElementById("message")
        p.innerHTML = text.toString()
    }
}

class Load {
    constructor(status:boolean){
        this.load(status)
    }

    private load(status:boolean){
        if(status){
            this.show()
        }else{
            this.hide()
        }
    }

    private show(){
     let p:HTMLElement=document.getElementById("load")
         p.innerHTML = "Loading..."
    }

    private hide(){
        let p:HTMLElement=document.getElementById("load")
        p.innerHTML = ""
    }
}

class LoginService {

    private in_memory$:Observable<UserProfile> = from([
        {
            id: 1,
            username: 'Jack',
            password: '123'
        },
        {
            id: 2,
            username: 'Joy',
            password: '321'
        },
        {
            id: 3,
            username: 'Mary',
            password: '010203'
        }
    ])

    constructor() {}

    private httpClient(user: UserProfile):Observable<UserProfile>{
        let response: Observable<any> = new Observable((observer => {
           this.in_memory$.pipe(
                delay(3100),
                find(v=> v.username == user.username && v.password == user.password),
                tap((r)=>observer.next(r || [])),
                tap(()=>new Load(false)),
                tap((r)=>r ? new Message(`id: ${r.id} | nome: ${r.username}`) : new Message('User Not Find')),
                catchError(()=>{
                    observer.error('on error');
                    return of(null)
                })
            ).subscribe()
        }))
        return response;
    }

    private unsubscribe = new Subject<void>;

    login(user:UserProfile){
        this.httpClient(user).pipe(takeUntil(this.unsubscribe)).subscribe(res => {
            console.log('result: ', res)
        }) 
    }

    ngOnDestroy(): void { 
        this.unsubscribe.next();
        this.unsubscribe.complete();
    } 

} 


(<any>window).LoginService = new LoginService();

