import { Injectable } from '@angular/core';
import { Log } from '../models/Log';

@Injectable({
  providedIn: 'root'
})
export class LogService {
  logs: Log[];

  constructor() {
    this.logs = [
      {id: '1', text: 'Set up MongoDB', date: new Date('03/21/2021 12:34:23')},
      {id: '1', text: 'Set up development server', date: new Date('03/22/2021 3:42:23')},
      {id: '1', text: 'Set up MongoDB', date: new Date('03/23/2021 10:30:20')},
      {id: '1', text: 'Create user model schema', date: new Date('03/24/2021 2:20:15')},
      {id: '1', text: 'User authentication', date: new Date('03/25/2021 1:16:24')},
    ]
   }

   getLogs(){
     return this.logs;
   }
}
