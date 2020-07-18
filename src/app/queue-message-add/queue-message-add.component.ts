import { Component, OnInit, Inject } from '@angular/core';
import {QueueService} from '../service/queue.service'
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";


@Component({
  selector: 'app-queue-message-add',
  templateUrl: './queue-message-add.component.html',
  styleUrls: ['./queue-message-add.component.css']
})
export class QueueMessageAddComponent implements OnInit {
  qid:number;
  constructor(private dialogRef: MatDialogRef<QueueMessageAddComponent>,@Inject(MAT_DIALOG_DATA) public data: any, 
  private queueService : QueueService) { 
    this.qid=data.qidNew;
    console.log("id:"+this.qid)
  }

  ngOnInit() {
  }


  add(qId:number,message:string){
    console.log("id new::"+qId);
    console.log("msg:"+message)

    
    this.queueService.addMessage(qId,message)
  }
}
