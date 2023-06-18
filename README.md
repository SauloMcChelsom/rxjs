<p align="center"><img src="assets\rxjs.png"/></p>
<h1 align="center">RxJS Tutorial</h1>



RxJS é um acrônimo que significa Extensão reativa para JavaScript. É uma biblioteca JavaScript usada para trabalhar com a programação Reactive que lida com chamadas de dados assíncronas, retornos de chamada e programas baseados em eventos. O RxJS pode ser usado com outras bibliotecas JavaScript, como Angular, ReactJS, Vue.js, Node.js etc. É suportado por JavaScript e também com TypeScript.

### O que é programação reativa?

A programação reativa é um paradigma de programação declarativa que diz respeito a fluxos de dados e à propagação de alterações. É outra maneira diferente de criar aplicativos de software. Na programação reativa, podemos expressar facilmente estática, como matrizes ou dinâmicas, como fluxos de dados de emissores de eventos. Também especifica que uma dependência inferida existente dentro do modelo de execução associado pode facilitar a propagação automática do fluxo de dados alterado.

### O que é o RxJS?

O site oficial do RxJS o definiu como uma biblioteca para compor programas assíncronos e baseados em eventos usando sequências observáveis. Ele fornece um tipo de núcleo, o Observable, satellite types ( Observer, Schedulers, Subjects ) e operadores inspirados nos extras de Array( map, filter, reduce, every, etc.) para permitir o manuseio de eventos assíncronos como coleções.

RxJS é uma biblioteca JavaScript que introduziu o conceito de "programação reativa" na web. Em termos gerais, você pode dizer que o RxJS é uma linguagem de programação reativa. Ele fornece uma maneira de escrever linhas de montagem em seus aplicativos de software. Facilita a gravação de software que pode ser reutilizável, configurável e assíncrono.

### Recursos do RxJS
A seguir, é apresentada a lista de conceitos essenciais ou recursos primários do RxJS que são usados para resolver o gerenciamento de eventos assíncronos:

**Observable**
O observável é usado para representar a idéia de uma coleção invocável de valores ou eventos futuros. Pode ser definido como uma função que cria um observador e o anexa à fonte onde os valores são esperados. Os exemplos observáveis são cliques, eventos do mouse de um elemento dom ou uma solicitação Http, etc

**Observer**
É uma coleção de retornos de chamada usados para especificar como ouvir os valores entregues pelo Observable. Pode ser especificado como um objeto com os próximos métodos next(), error() e complete()
**Subscription**
É usado para representar a execução de um Observável. É usado principalmente para cancelar a execução. Por exemplo, quando o observável é criado, você precisa se inscrever para executar o observável. Também pode ser usado para cancelar a execução.

**Operators**
Os operadores são funções simples usadas para permitir um estilo de programação funcional para lidar com coleções com operações como map, filter, concat, flatMap, etc. É observável como entrada e fornece a saída também na forma de observável.

**Subject**
Um assunto é equivalente a um EventEmitter e usado para multicast de um valor ou evento para vários Observadores. Por exemplo: considere um botão com um ouvinte de eventos; a função anexada ao evento será chamada sempre que o usuário clicar no botão.

**Schedulers**
Os agendadores são expedidores centralizados que são usados para controlar a simultaneidade. Eles são usados para controlar a execução quando a assinatura precisa iniciar e ser notificada.

```
import { Subject } from 'rxjs'  
import { Observable } from 'rxjs'  
import { Observer } from 'rxjs';
import {from, of, fromEvent, interval} from 'rxjs';// Methods to create Observables
import {mapTo, take, tap, map} from "rxjs/operators"//operators
```

### Topicos
- RxJS **Operators**
- RxJS **Observables**
- RxJS **Subscription**
- RxJS **Subjects**
- RxJS **Scheduler**


## RxJS Operators
Os operadores são a parte importante do RxJS. O RxJS fornece uma enorme coleção de operadores. Existem mais de 100 operadores + no RxJS que você pode usar com observáveis. Um operador é uma função pura que assume um observável como entrada e fornece a saída também na forma de um observável.

### Como importar os operadores
```
import { mapTo, take, tap, map } from "rxjs/operators"
```

- Existem mais de 100 operadores
- Os operadores de RxJS nos facilitam a alterar o observável original de alguma maneira e retornam um novo observável
- Os operadores não alteram o observável existente
- Eles simplesmente o modificam e retornam um novo
- Os operadores são conhecidos como o tipo de funções que não modificam as variáveis fora de seu escopo
- Precisamos de um método pipe ( ) para trabalhar com operadores
- categorias de operadores RxJS: Creation, Mathematical, Join or Combination, 
Transformation, Filtering, Utility, Conditional, Multicasting, Error, handling, Boolean, Aggregate

### Syntax of using pipe() Method
```
import { of } from 'rxjs';  
import { map, reduce, filter } from 'rxjs/operators';  
let test1 = of(1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20);  
let case1 = test1.pipe(  
   filter(x => x % 2 === 0),  
   reduce((acc, one) => acc + one, 0)  
)  
case1.subscribe(x => console.log(x));   
```

Na sintaxe acima, criamos um observável usando **of()** método. Este método utiliza os valores 1, 2 e 3. Nesse observável, você pode executar muitas operações usando diferentes tipos de operadores usando o método **pipe()** como a sintaxe acima.

### Operadores de criação

A seguir, é apresentada a lista de operadores que podem ser usados como operadores de criação:

 **Index** | **Operators**    | **Description**                                                                                                                                        
-----------|------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------
 **1\.**   | ajax             | The ajax operator is used to make an ajax request for the given URL\.                                                                                  
 **2\.**   | from             | The from operator is used to create an observable from an array, an array\-like object, a promise, an iterable object, or an observable\-like object\. 
 **3\.**   | fromEvent        | The fromEvent operator is used to give output as an observable that is to be used on elements that emit an event for example buttons, clicks, etc\.    
 **4\.**   | fromEventPattern | The fromEventPattern operator is used to create an observable from the input function that is used to register event handlers\.                        
 **5\.**   | interval         | The interval operator is used to create an Observable for every time for the given time interval\.                                                     
 **6\.**   | of               | The of operator is used to take in the arguments passed and convert them to observable\.                                                               
 **7\.**   | range            | The range operator is used to create an Observable that gives you a sequence of numbers based on the range provided\.                                  
 **8\.**   | throwError       | The throwError operator is used to create an observable that notifies an error\.                                                                       
 **9\.**   | timer            | The timer operator is used to create an observable that emits the value after the timeout and the value will keep increasing after each call\.         
 **10\.**  | iif              | The iif operator is used to decide which Observable will be subscribed\.                                                                               

### Mathematical Operators

Following is the list of operators that can be used as mathematical operators:

 **Index** | **Operators** | **Description**                                                                                                                                                                                                                                                                                           
-----------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 **1\.**   | count         | The count operator is used to take an observable with values and convert it into an observable that gives a single value\.                                                                                                                                                                                
 **2\.**   | max           | The max method is used to take an observable with all values and return an observable with the maximum value from the list\.                                                                                                                                                                              
 **3\.**   | min           | The min method is used to take an observable with all values and return an observable with the minimum value from the list\.                                                                                                                                                                              
 **4\.**   | reduce        | In reduce operator, an accumulator function is used on the input observable\. It returns the accumulated value in an observable form, with an optional seed value passed to the accumulator function\.
So, the reduce function takes two arguments, one accumulator function, and second the seed value\. 

### Join Operators
Following is the list of operators that can be used as join operators:

 **Index** | **Operators** | **Description**                                                                                                                                                                     
-----------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 **1\.**   | concat        | The concat operator is used to sequentially emit the Observable given as input and proceed to the next one\.                                                                        
 **2\.**   | forkJoin      | The forkJoin operator is used to take in an array or dict object as an input and wait for the observable to complete and return the last values emitted from the given observable\. 
 **3\.**   | merge         | The merge operator is used to take in the input observable and emit all the values from the observable and emit one single output observable\.                                      
 **4\.**   | race          | The race operator is used to return an observable that will be a mirror copy of the first source observable\. 

### Transformation Operators
Following is the list of operators that can be used as transformation operators:

 **Index** | **Operators** | **Description**                                                                                                                                                                                                                                                                                                                                                                                                         
-----------|---------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 **1\.**   | buffer        | The buffer operator is used to be operated on an observable and take in argument as an observable\. It starts buffering the values emitted on its original observable array and emits when the observable taken as an argument, emits\. Once the observable taken as arguments emits, the buffer is reset and starts buffering again on original till the input observable emits, and the same process repeats itself\. 
 **2\.**   | bufferCount   | The buffercount operator is used to collect the values from the observable on which it is called and emit the same when the buffer size is given to buffercount matches\.                                                                                                                                                                                                                                               
 **3\.**   | bufferTime    | The bufferTime operator is similar to bufferCount\. It is used to collect the values from the observable on which it is called and emit the bufferTimeSpan\. It takes in 1 argument, i\.e\., bufferTimeSpan\.                                                                                                                                                                                                           
 **4\.**   | bufferToggle  | The bufferToggle operator is used to take two arguments, openings and closingSelector\. The opening arguments are subscribable or a promise to start the buffer\. The second argument closingSelector is again subscribable or promises an indicator to close the buffer and emit the values collected\.                                                                                                                
 **5\.**   | bufferWhen    | The bufferWhen operator is used to give the values in the array form, it takes in one argument as a function that will decide when to close, emit and reset the buffer\.                                                                                                                                                                                                                                                
 **6\.**   | expand        | The expand operator is used to take in a function as an argument applied on the source observable recursively and on the output observable\. The final value is observable\.                                                                                                                                                                                                                                            
 **7\.**   | groupBy       | Te groupBy operator is used to group the output according to specific conditions, and these group items are emitted as GroupedObservable\.                                                                                                                                                                                                                                                                              
 **8\.**   | map           | In the map operator's case, a project function is applied on each value on the source Observable, and the same output is emitted as an Observable\.                                                                                                                                                                                                                                                                     
 **9\.**   | mapTo         | In the mapTo operator, a constant value is given as output along with the Observable every time the source Observable emits a value\.                                                                                                                                                                                                                                                                                   
 **10\.**  | mergeMap      | In the mergeMap operator, a project function is applied on each source value, and the output of it is merged with the output Observable\.                                                                                                                                                                                                                                                                               
 **11\.**  | switchMap     | The switchMap operator is used to apply a project function on each source value\. The output of it is merged with the output Observable, and the value given is the most recent projected Observable\.                                                                                                                                                                                                                  
 **12\.**  | window        | The window operator is used to take an argument windowboundaries which is an observable and give back a nested observable whenever the given windowboundaries emits\.    

### Filtering Operators
Following is the list of operators that can be used as filtering operators:

 **Index** | **Operators**  | **Description**                                                                                                                                                                                       
-----------|----------------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 **1\.**   | debounce       | In the debounce operator, a value is emitted from the source Observable after a while, and the emission is determined by another input given as Observable or promise\.                               
 **2\.**   | debounceTime   | The debounceTime operator is used to emit value from the source observable only after the time is complete\.                                                                                          
 **3\.**   | distinct       | This operator is used to give all the values from the source observable that are distinct compared with the previous values\.                                                                         
 **4\.**   | elementAt      | This operator is used to give a single value from the source observable based upon the given index\.                                                                                                  
 **5\.**   | filter         | This operator is used to filter the values from source Observable based on the predicate function given\.                                                                                             
 **6\.**   | first          | The first operator is used to give the first value emitted by the source Observable\.                                                                                                                 
 **7\.**   | last           | The last operator is used to give the last value emitted by the source Observable\.                                                                                                                   
 **8\.**   | ignoreElements | The ignoreElements operator is used to ignore all the values from the source Observable and only execute calls to complete or error callback functions\.                                              
 **9\.**   | sample         | The sample operator is used to give the most recent value from the source Observable, and the output will depend upon the argument passed to it emits\.                                               
 **10\.**  | skip           | The skip operator is used to give back an observable that will skip the first occurrence of count items taken as input\.                                                                              
 **11\.**  | throttle       | The throttle operator is used to give output and ignore values from the source observable for the time determined by the input function taken as an argument, and the same process will be repeated\. 

Utility Operators
Following is the list of operators that can be used as utility operators:

 **Index** | **Operators** | **Description**                                                                                                                                                                    
-----------|---------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 **1\.**   | tap           | The tap operator contains the output, same as the source observable, and it can be used to log the values to the user from the observable\.                                        
 **2\.**   | delay         | The delay operator is used to delay the values emitted from the source observable based on the timeout given\.                                                                     
 **3\.**   | delayWhen     | The delayWhen operator is used to delay the values emitted from the source observable based on the timeout from another observable taken as input\.                                
 **4\.**   | observeOn     | The observeOn operator is based on the input scheduler\. It is used to reemit the notifications from the source observable\.                                                       
 **5\.**   | subscribeOn   | The subscribeOn operator helps to asynchronous subscribes to the source observable based on the scheduler taken as input\.                                                         
 **6\.**   | timeInterval  | The timeInterval operator is used to return an object containing current value, and the time elapsed between the current and previous value calculated using the scheduler input\. 
 **7\.**   | timestamp     | The timestamp operator is used to return the timestamp along with the value emitted from the source observable\. It tells about the time when the value was emitted\.              
 **8\.**   | timeout       | The timeout operator is used to throw an error if the source observable does not emit a value after the given timeout\.                                                            
 **9\.**   | toArray       | The toArray operator is used to accumulate all the source values from the observable and provide their outputs as an array when the source completes\.        

### Conditional Operators
Following is the list of operators that can be used as conditional operators:

 **Index** | **Operators**  | **Description**                                                                                                                                                                    
-----------|----------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 **1\.**   | defaultIfEmpty | The defaultIfEmpty operator is used to return a default value if the source observable is empty\.                                                                                  
 **2\.**   | every          | The every operator is used to return an observable based on the input function, which satisfies the condition on each of the values on source observable\.                         
 **3\.**   | find           | The find operator is used to return the observable when the source observable's first value satisfies the condition for the predicate function taken as input\.                    
 **4\.**   | findIndex      | The findIndex operator is based on the input schedule\. It is used to reemit the notifications from the source observable\.                                                        
 **5\.**   | isEmpty        | The isEmpty operator gives the output "True" if the input observable goes for complete callback without emitting any values and "False" if the input observable emits any values\. 

### Multicasting Operators
Following is the list of operators that can be used as multicasting operators:

 **Index** | **Operators**   | **Description**                                                                                                                                                                                                                                                       
-----------|-----------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
 **1\.**   | multicast       | A multicast operator shares the single subscription created with other subscribers\. The params that multicast takes in is a subject or a factory method that returns a ConnectableObservable that has a connect method\. The connect method is called to subscribe\. 
 **2\.**   | publish         | The publish operator is used to give back ConnectableObservable and use connect method to subscribe to the observables\.                                                                                                                                              
 **3\.**   | publishBehavior | The publishBehaviour makes use of BehaviourSubject, and returns ConnectableObservable\. The connect method is used to subscribe to the observable created\.                                                                                                           
 **4\.**   | publishLast     | The publishBehaviour operator makes use of AsyncSubject, and returns ConnectableObservable\. The connect method is used to subscribe to the observable created\.                                                                                                      
 **5\.**   | publishReplay   | The publishReplay operator uses behavior subject where it can buffer the values, replay the same to the new subscribers, and return ConnectableObservable\. The connect method is used to subscribe to the observable created\.                                       
 **6\.**   | share           | The share operator is an alias for a multicast operator\. The only difference is that you don't have to called the connect method manually to start the subscription\.

### Error Handling Operators
Following is the list of operators that can be used as error handling operators:

 **Index** | **Operators** | **Description**                                                                                                                                                 
-----------|---------------|-----------------------------------------------------------------------------------------------------------------------------------------------------------------
 **1\.**   | catchError    | The catchError operator is used to take care of catching errors on the source observable by returning a new observable or an error\.                            
 **2\.**   | retry         | The retry operator is used to take care of retrying back on the source observable if there is an error\. The retry is done according to the given input count\. 
 **3\.**   | retryWhen     | \- 

## RxJS Observables

No RxJS, um observável é uma função usada para criar um observador e anexá-lo à fonte de onde os valores são esperados. Por exemplo, cliques, eventos do mouse de um elemento DOM ou de uma solicitação Http etc. são o exemplo de observável.

Em outras palavras, você pode dizer que o observador é um objeto com funções de retorno de chamada, chamado quando há interação com o Observable. Por exemplo, a fonte interagiu por exemplo, clique no botão, Http pedido, etc.

Observáveis também podem ser definidos como coleções preguiçosas de Push de vários valores. Vamos ver um exemplo simples para entender como os observáveis são usados para impulsionar os valores.

Veja o seguinte exemplo:
```
import { Observable } from 'rxjs';  
const observable = new Observable(subscriber => {  
  subscriber.next(10);  
  subscriber.next(20);  
  subscriber.next(30);  
  setTimeout(() => {  
    subscriber.next(40);  
    subscriber.complete();  
  }, 1000);  
});  
```

No exemplo acima, há um observável que empurra os valores 10, 20, 30 imediatamente e de forma síncrona quando subscrito, mas o valor 40 será aumentado após um segundo desde que o método de assinatura foi chamado.

Se você deseja chamar o observável e ver os valores acima, é necessário se inscrever. Veja o seguinte exemplo:
```
import { Observable } from 'rxjs';  
const observable = new Observable(subscriber => {  
  subscriber.next(10);  
  subscriber.next(20);  
  subscriber.next(30);  
  setTimeout(() => {  
    subscriber.next(40);  
    subscriber.complete();  
  }, 1000);  
});  
  
console.log('These are the values just before subscribe');  
observable.subscribe({  
  next(x) { console.log('We have got value ' + x); },  
  error(err) { console.error('something wrong occurred: ' + err); },  
  complete() { console.log('Done successfully'); }  
});  
console.log('This value is just after subscribe');  
```
## RxJs Subscription

Uma subscription RxJS é um objeto usado para representar um recurso descartável, geralmente a execução de um Observable. Quando criamos um Observable, precisamos assinar para executar o Observable.

Uma assinatura possui um método importante, chamado método de cancelamento **unsubscribe()**, que não apresenta argumentos e é usado apenas para descartar/ liberar recursos ou cancelar execuções Observable  do recurso mantido pela assinatura.

### Syntax
```
const subscription = observable.subscribe(x => console.log(x));   
```

### Example of RxJS Subscription
Vamos ver alguns exemplos para entender o conceito de assinatura do RxJS e ver como se inscrever em um observável.

Aqui, estamos usando o operador **count()**:
```
import { of } from 'rxjs';  
import { count } from 'rxjs/operators';  
let all_nums = of(1, 3, 5, 7, 11, 13, 15, 17, 23, 27, 29);  
let final_val = all_nums.pipe(count());  
final_val.subscribe(x => console.log("The total count is "+x));  
```

## RxJS Subjects
Um Subject RxJS é como um Observable. É um tipo especial de Observable que permite que os valores sejam multicasted  para muitos Observers. Em palavras simples, podemos dizer que um subject do RxJS é um multicast observável ou pode conversar com muitos observers.

```
import * as Rx from "rxjs";  
const subject = new Rx.Subject();  
// subscriber 1  
subject.subscribe((data) => {  
    console.log(data);   
});  
// subscriber 2  
subject.subscribe((data) => {  
    console.log(data);   
});  
subject.next(Math.random());  
```

### Como criar um Subject RxJS?

Vamos ver como trabalhar com Subject do RxJS. Para trabalhar com um Subject do RxJS, precisamos importar o Subject da seguinte maneira:
```
import { Subject } from 'rxjs';  
```

Agora, use o seguinte método para criar um objeto de Subject:
```
const subject_test = new Subject();  
```

Igual aos Observable RxJS, um Subject RxJS também possui os três métodos a seguir:
- next(v)
- error(e)
- complete()

### Como se inscrever no Subject RxJS?

Depois de criar o subject RxJS, precisamos subscribe. Uma Subscription é um objeto usado para representar um recurso descartável, geralmente a execução do subject. Podemos criar facilmente várias Subscription no subject usando o seguinte método:

```
subject_test.subscribe({  
   next: (v) => console.log(`From Subject : ${v}`)  
});  
subject_test.subscribe({  
   next: (v) => console.log(`From Subject: ${v}`)  
});   

```

### Como passar dados para o Subject?

Após a subscription, precisamos passar dados para o Subject que criamos. Podemos fazer isso usando o método **next()**.

```
subject_test.next("A");  
```

```
import { Subject } from 'rxjs';  
const subject_test = new Subject();  
subject_test.subscribe({  
   next: (v) => console.log(`From Subject : ${v}`)  
});  
subject_test.subscribe({  
   next: (v) => console.log(`From Subject: ${v}`)  
});  
subject_test.next("Hello");  
subject_test.next("Good Morning");  
```


### Tipos de Subject RxJS

Existem principalmente quatro variantes de sujeitos RxJS:

**Subject** Não possui nenhum valor inicial

**BehaviorSubject** requer um valor inicial

**ReplaySubject**  é usada para emitir um número especificado dos últimos valores emitidos, para novos assinantes.

**AsyncSubject** emite o valor mais recente aos observadores após a conclusão.


### BehaviorSubject

O BehaviorSubject é usado para denotar "o valor atual e mais recente quando chamado". Ele armazena o valor mais recente emitido para seus consumidores e, sempre que um novo Observador se inscrever, receberá imediatamente o "valor atual" do BehaviorSubject.

```
import { BehaviorSubject } from 'rxjs';  
const subject = new BehaviorSubject(0); // 0 is the initial value  
subject.subscribe({  
  next: (v) => console.log(`observerA: ${v}`)  
});  
subject.next(1);  
subject.next(2);  
subject.subscribe({  
  next: (v) => console.log(`observerB: ${v}`)  
});  
subject.next(3);  
```

### ReplaySubject

ReplaySubject é bastante semelhante a um BehaviorSubject. Também é usado para enviar valores antigos para novos assinantes, mas também pode registrar uma parte da execução observável. Um ReplaySubject registra vários valores da execução Observable e os reproduz para novos assinantes.

```
import { ReplaySubject } from 'rxjs';  
const subject = new ReplaySubject(3); // buffer 3 values for new subscribers  
subject.subscribe({  
  next: (v) => console.log(`observerA: ${v}`)  
});  
subject.next(1);  
subject.next(2);  
subject.next(3);  
subject.next(4);  
subject.subscribe({  
  next: (v) => console.log(`observerB: ${v}`)  
});  
subject.next(5);  
```

### AsyncSubject

Nesta variante do RxJS Subject, apenas o último valor da execução observável é enviado aos seus observadores e também é feito após a chamada do método **complete()**.

```
import { AsyncSubject } from 'rxjs';  
const subject = new AsyncSubject();  
subject.subscribe({  
  next: (v) => console.log(`observerA: ${v}`)  
});  
subject.next(1);  
subject.next(2);  
subject.next(3);  
subject.next(4);  
subject.subscribe({  
  next: (v) => console.log(`observerB: ${v}`)  
});  
subject.next(5);  
subject.complete();  
```

## RxJS Scheduler
Um agendador entra em ação para controlar quando uma assinatura é iniciada e quando as notificações são entregues.

Sabemos que um agendador RxJS controla a execução do programa quando a assinatura precisa começar. Podemos definir um agendador básico da seguinte maneira.

```
import { of, asyncScheduler } from "rxjs";  
import { observeOn } from "rxjs/operators";  
of(1, 2, 3)  
  .pipe(observeOn(asyncScheduler))  
  .subscribe(val => console.log(val));
```

Veja o exemplo síncrono
```
import { of, asyncScheduler } from "rxjs";  
import { observeOn } from "rxjs/operators";  
const observable = of(1, 2, 3);  
console.log("Before sync subscribe");  
observable.subscribe({  
  next(x) {  
    console.log(`Got sync value ${x}`);  
  },  
  error(err) {  
    console.error(`Something wrong occurred: ${err}`);  
  },  
  complete() {  
    console.log("This is done now.");  
  }  
});  
console.log("After sync subscribe");  
```
![Alt text](assets\rxjs-working-with-scheduler.png?raw=true "scheduler")

Veja o exemplo assíncrono ( Usando o Agendador )
```
import { of, asyncScheduler } from "rxjs";  
import { observeOn } from "rxjs/operators";  
const observable = of(1, 2, 3);  
console.log("Before async subscribe");  
observable.pipe(observeOn(asyncScheduler)).subscribe({  
  next(x) {  
    console.log(`Got async value ${x}`);  
  },  
  error(err) {  
    console.error(`Gomething wrong occurred: ${err}`);  
  },  
  complete() {  
    console.log("This is done now.");  
  }  
});  
console.log("After async subscribe");  
```

![Alt text](assets\rxjs-working-with-scheduler2.png?raw=true "scheduler")