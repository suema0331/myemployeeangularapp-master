import { Component, OnInit } from '@angular/core';
import { Member } from '../member';
// import { MEMBERS } from '../mock-members';
import {MemberService} from '../member.service';
import {MessageService} from '../message.service';

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {

  // members = MEMBERS; // モックデータを挿入
  members: Member[]; // 配列として再定義
  // member: Member = {　// interfaceを参照
  //   id: 1,
  //   name: 'Manager Cat'
  // };

  // selectedMember: Member;

  constructor(
    private memberService: MemberService,
    // private messageService: MessageService
  ) { } // コンストラクタは自分のフィールドの初期化のみ実行する

  ngOnInit(): void {
    this.getMembers(); // 外部データの取得
  }

  // onSelect(member: Member): void{
  //   this.selectedMember = member;
  //   this.messageService.add(`MembersComponent: 社員データ (id=${member.id}) が選択されました！`);
  // }

  getMembers(): void{
    // this.members = this.mamberService.getMembers();
    this.memberService.getMembers() //  Observavleではsubscribeメソッドが使える。
      .subscribe(members => this.members = members); // of関数で渡ってくる値(members配列)を受け取る
  }

  add(name: string): void{
    name = name.trim(); // 空白削除
    if (!name) { return; }
    this.memberService.addMember({name} as Member) // 型キャスト
      .subscribe(member => {
        this.members.push(member);
      });
  }

   delete(member: Member): void{
    this.members = this.members.filter(m => m !== member); // サーバデータとの生合成を取るために、コンポネントデータも更新
    this.memberService.deleteMember(member).subscribe();
    // Observavleでデータを受け取るには、subscribeが必要。subscribeでhttpリクエストが実行される。
  }
}
