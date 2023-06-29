import { BehaviorSubject, Observable, forkJoin, from, of, throwError } from 'rxjs';
import { Observer } from 'rxjs';
import { interval } from 'rxjs';  
import { Subject } from 'rxjs';
import { catchError, delay, filter, finalize, skipWhile, take, tap } from 'rxjs/operators';  
import { map, first } from 'rxjs/operators';

class LoginService {
    constructor(){}
}
(<any>window).LoginService = new LoginService()

