import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserService } from './service/user.service';
import  {HttpClientModule} from '@angular/common/http';
import { QueueComponent } from './queue/queue.component'
import { AppMaterialModule } from './material/app-material/app-material.module'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {FormsModule} from '@angular/forms';
import { QueueMessagesComponent } from './queue-messages/queue-messages.component';
import { MatDialogModule } from '@angular/material';
import { QueueMessageAddComponent } from './queue-message-add/queue-message-add.component'

@NgModule({
  declarations: [
    AppComponent,
    QueueComponent,
    QueueMessagesComponent,
    QueueMessageAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppMaterialModule,
    FormsModule,
    MatDialogModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent],
  entryComponents: [QueueComponent,QueueMessagesComponent,QueueMessageAddComponent]
})
export class AppModule { }
