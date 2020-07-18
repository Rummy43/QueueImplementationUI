import { Component, OnInit } from '@angular/core';
import {Queue} from '../model/queue'
import {QueueService} from '../service/queue.service'
import {MatDialog} from '@angular/material'
import {QueueMessagesComponent} from '../queue-messages/queue-messages.component'
import {QueueMessageAddComponent} from '../queue-message-add/queue-message-add.component'

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.css']
})
export class QueueComponent implements OnInit {

  constructor(private queueService : QueueService, public dialog : MatDialog) { }
  disableFlag : boolean = true;
  queues : Queue[];

  openDialog(id:number){
    console.log("id:"+id)
    this.dialog.open(QueueMessagesComponent,{
      data:{
        qid: id,
      }
    })
  }

  addDialog(id:number){
    console.log("qid DDDDDL:"+id)
    this.dialog.open(QueueMessageAddComponent,{
      data:{
        qidNew: id,
      }
    })
  }


  ngOnInit() {
    this.getAllQueues();
  }

  getAllQueues(){
    this.queueService.getAllQueues().subscribe(
      data=> {
        this.queues=data;
      }
    )
  }

  addQueue(queue : string){
    console.log("here..."+queue)
    this.queueService.addQueue(queue).subscribe(
      data =>{
        console.log(data);
        this.getAllQueues();
      }
    )
    
  }

  enableAddBtn(val : string){
    console.log("val..."+val)
    if(val.length>0){
      this.disableFlag=false;
    }else{
      this.disableFlag=true;
    }
  }

  deleteMessage(id:number){
    console.log("in delete:"+id);
    if(id!=null){
      this.queueService.deleteQueue(id).subscribe(
        daxyta=> {
          console.log(daxyta);
          this.getAllQueues()
        }
      )
    }else{
      alert("invalid id provided")
    }
  }

  openDialog1() {
    alert("hello..")
    const dialogRef = this.dialog.open(QueueMessagesComponent,{
      data:{
        message: 'Are you sure want to delete?',
        buttonText: {
          ok: 'Save',
          cancel: 'No'
        }
      }
    });
  }

}
