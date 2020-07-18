import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Queue } from '../model/queue'

@Injectable({
  providedIn: 'root'
})
export class QueueService {

  constructor(private http: HttpClient) { }

  getAllMessages(queueId){
    return this.http.get<string[]>('http://localhost:8080/getMessages/'+queueId);
  }

  getAllQueues(){
    return this.http.get<Queue[]>('http://localhost:8080/getQueues');
  }

  addQueue(queueName : string){
    return this.http.get('http://localhost:8080/addQueue/'+queueName,{responseType: 'text'});
  }

  deleteQueue(id : number){
    return this.http.get('http://localhost:8080/deleteQueue/'+id,{responseType: 'text'});
  }

  addMessage(qid:number,message:string){
    
  }


}
