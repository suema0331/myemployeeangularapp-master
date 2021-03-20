import { Component, OnInit } from '@angular/core';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  // messageServiceをテンプレートで使用するために、public でDI
  constructor(public messageService: MessageService) { }

  ngOnInit(): void {
  }

}
