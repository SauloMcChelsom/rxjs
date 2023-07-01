import { Subject, concat, empty, forkJoin, from, interval, merge, of, partition, range, timer } from 'rxjs';
import { startWith, take, takeUntil } from 'rxjs/operators';

class Operators {

    empty(){
        const result = empty().pipe(startWith('empty()'));
        result.subscribe(x =>{
            let p:HTMLElement=document.getElementById("empty")
            p.innerHTML = x
        });
    }

    startWith(){
        let line = ' '
        of("A, B, C").pipe(startWith("S,")).subscribe(value =>{
            line = line + ' ' + value
            let p:HTMLElement=document.getElementById("startWith")
            p.innerHTML = line
        });
    }

    from(){
        let line = ' '
        from([10, 20, 30]).subscribe(value => {
            line = line + ' ' + value
            let p:HTMLElement=document.getElementById("from")
            p.innerHTML = line
        })
    }

    range(){
        let line = ' '
        const numbers = range(1, 10);
        numbers.subscribe(value => {
            line = line + ' ' + value
            let p:HTMLElement=document.getElementById("range")
            p.innerHTML = line
        })
    }

    timer(){
        let unsubscribe = new Subject<void>;

        let line = ' '
        const numbers = timer(3000, 1000).pipe(takeUntil(unsubscribe))
        numbers.subscribe(value => {
            line = line + ' ' + value
            let p:HTMLElement=document.getElementById("timer")
            p.innerHTML = line
        })

        setTimeout(()=>{
            unsubscribe.next();
            unsubscribe.complete();
             line = line + ' ' + 'unsubscribe'
            let p:HTMLElement=document.getElementById("timer")
            p.innerHTML = line
        },15000)
    }

    interval(){
        let line = ' '
        const numbers = interval(1000);
        const takeFourNumbers = numbers.pipe(take(4));
        takeFourNumbers.subscribe(value => {
            line = line + ' ' + value
            let p:HTMLElement=document.getElementById("interval")
            p.innerHTML = line
        })
    }

    concat(){
        let line = ' '

        const timer1 = interval(1000).pipe(take(10));
        const timer2 = interval(2000).pipe(take(6));
        const timer3 = interval(500).pipe(take(10));
        
        const result = concat(timer1, timer2, timer3);
        result.subscribe(value => {
            line = line + ' ' + value
            let p:HTMLElement=document.getElementById("concat")
            p.innerHTML = line
        })
    }

    forkJoin(){
        const observable = forkJoin({
            token: from(['eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c']),
            user: Promise.resolve({name:'Joy'}),
            timer: timer(4000),
        });
        observable.subscribe(value => {
            let p:HTMLElement=document.getElementById("forkJoin")
            p.innerHTML = JSON.stringify(value) 
        })
    }

    merge(){
        let line = ' '

        const timer1 = interval(1000).pipe(take(10));
        const timer2 = interval(2000).pipe(take(6));
        const timer3 = interval(500).pipe(take(10));
        const concurrent = 2; // the argument
        const merged = merge(timer1, timer2, timer3, concurrent);
        merged.subscribe(value => {
            line = line + ' ' + value
            let p:HTMLElement=document.getElementById("merge")
            p.innerHTML = line
        })
    }

    partition(){
        let numeros_impares = 'numeros_impares:  '
        let numeros_pares = 'numeros_pares: '

        const observableValues = of(1, 2, 3, 4, 5, 6);
        const [numeros_pares$, numeros_impares$] = partition(observableValues, (value, index) => value % 2 === 0);
        
        numeros_impares$.subscribe(value => {
            numeros_impares = numeros_impares + ' ' + value
            let p:HTMLElement=document.getElementById("numeros_impares")
            p.innerHTML = numeros_impares
        })

        numeros_pares$.subscribe(value => {
            numeros_pares = numeros_pares + ' ' + value
            let p:HTMLElement=document.getElementById("numeros_pares")
            p.innerHTML = numeros_pares
        })
    }

    constructor(){
        
    }

}
(<any>window).Operators = new Operators()
