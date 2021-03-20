import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  messeges: string[] = [];

  // メッセージを受け取る
  add(message: string) {
    this.messeges.push(message);
  }

  // 自分のメッセージをクリア
  clear() {
    this.messeges = [];
  }
}
