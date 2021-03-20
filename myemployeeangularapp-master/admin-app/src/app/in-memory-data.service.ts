import { Injectable } from '@angular/core';
import {InMemoryDbService} from 'angular-in-memory-web-api';
import {Member} from './member';

@Injectable({
  providedIn: 'root'
})

export class InMemoryDataService implements InMemoryDbService {

  createDb() {
    const members = [
      { id: 11, name: 'Normal Cat' },
      { id: 12, name: 'Big Cat' },
      { id: 13, name: 'Small Cat' },
      { id: 14, name: 'Large Cat' },
      { id: 15, name: 'Little Cat' },
      { id: 16, name: 'Cute Cat' },
      { id: 17, name: 'Elegant Cat' },
      { id: 18, name: 'Beautiful Cat' },
      { id: 19, name: 'Sweet Cat' },
      { id: 20, name: 'Lovely Cat' }
    ];
    return { members };
  }

  // 新しくデータ作成したらid付与する
  genId( members: Member[]): number {
    return members.length > 0 ? Math.max(...members.map(member => member.id)) + 1 : 11;
  }
}
