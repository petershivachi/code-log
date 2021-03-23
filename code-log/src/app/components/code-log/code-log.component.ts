import { Component, OnInit } from '@angular/core';
import { Log } from '../../models/Log';
import { LogService } from '../../services/log.service';

@Component({
  selector: 'app-code-log',
  templateUrl: './code-log.component.html',
  styleUrls: ['./code-log.component.css']
})
export class CodeLogComponent implements OnInit {
  logs: Log[];

  constructor( private logService: LogService) { }

  ngOnInit(): void {
    this.logService.getLogs().subscribe(logs => this.logs = logs);
   }

   onSelect(log: Log){
     this.logService.setFormLog(log);
   }

}
