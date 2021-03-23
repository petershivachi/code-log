import { Injectable } from '@angular/core';
import { Log } from '../models/Log';
import { BehaviorSubject } from 'rxjs';
import { Observable } from 'rxjs';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({id: null, text: null, date: null});
  selectedLog = this.logSource.asObservable();
  private stateSource = new BehaviorSubject<boolean>(true);
  stateClear = this.stateSource.asObservable();

  constructor() {
    // this.logs = [
    //   {id: '1', text: 'Set up MongoDB', date: new Date('03/21/2021 12:34:23')},
    //   {id: '2', text: 'Set up development server', date: new Date('03/22/2021 3:42:23')},
    //   {id: '3', text: 'Set up MongoDB', date: new Date('03/23/2021 10:30:20')},
    //   {id: '4', text: 'Create user model schema', date: new Date('03/24/2021 2:20:15')},
    //   {id: '5', text: 'User authentication', date: new Date('03/25/2021 1:16:24')},
    // ]

    this.logs = [];
   }

   getLogs(): Observable<Log[]>{
     if(localStorage.getItem('logs') === null){
       this.logs = []
     }else {
       this.logs = JSON.parse(localStorage.getItem('logs'));
     }
     return of(this.logs.sort((a, b) => 
       b.date - a.date
     ))
   }

   setFormLog(log: Log){
     this.logSource.next(log)
   }

   addLog(log: Log){
     this.logs.unshift(log)

     localStorage.setItem('logs', JSON.stringify(this.logs));
   }

   updateLog(log: Log){
     this.logs.forEach((cur, index) => {
       if(log.id === cur.id ){
         this.logs.splice(index, 1);
       }
     });
     this.logs.unshift(log)

     localStorage.setItem('logs', JSON.stringify(this.logs));
   }

   deleteLog(log: Log){
    this.logs.forEach((cur, index) => {
      if(log.id === cur.id){
        this.logs.splice(index, 1);
      }
    })

    localStorage.setItem('logs', JSON.stringify(this.logs));
   }

   clearState(){
     this.stateSource.next(true)
   }

}
