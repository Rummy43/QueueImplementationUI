import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import {QueueService} from '../service/queue.service'

@Component({
  selector: 'app-queue-messages',
  templateUrl: './queue-messages.component.html',
  styleUrls: ['./queue-messages.component.css']
})
export class QueueMessagesComponent implements OnInit {
  description  = "Angular First Material Dialog";
  qid:number;
  constructor( private dialogRef: MatDialogRef<QueueMessagesComponent>,@Inject(MAT_DIALOG_DATA) public data: any, private queueService : QueueService) 
  {
    this.qid=data.qid;
   }
  messages : string[];

  ngOnInit() {
    console.log("in dialog ngInit")
    this.loadAllMessages();
  }

  loadAllMessages(){
    this.queueService.getAllMessages(this.qid).subscribe(
      data=> {
        this.messages=data;
        console.log("size:"+this.messages.length)
      }
    )
    


  }

  save() {
    this.dialogRef.close();
}

  close() {
      this.dialogRef.close();
  }

}
