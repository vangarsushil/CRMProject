import { Injectable } from '@angular/core';

import { BehaviorSubject } from 'rxjs';

export interface Member {
  id: number;
  name: string;
  dob: Date;
  contact: string;
  group: string
}

@Injectable({
  providedIn: 'root'
})
export class MemberService {
  private members: Member[] = [
    { id: 1, name: 'Sushil', dob: new Date(), contact: '8484818470', group: 'Morning' },
    { id: 2, name: 'Pavan', dob: new Date(), contact: '1111111111', group: 'Morning' },
    { id: 3, name: 'Aniket', dob: new Date(), contact: '1122334455', group: 'Morning' },
    { id: 4, name: 'Raju', dob: new Date(), contact: '9900887766', group: 'Morning' },
  ];
  private membersSubject = new BehaviorSubject<Member[]>(this.members);

  constructor() { }

  getMembers(): BehaviorSubject<Member[]> {
    return this.membersSubject;
  }

  addMember(member: Member): void {
    this.members.push(member);
    this.membersSubject.next(this.members);
  }
}
