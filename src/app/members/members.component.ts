import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';

import { MemberService } from '../member.service';

export interface PeriodicElement {
  id: number;
  name: string;
  dob: Date;
  contact: string;
  group: string
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css']
})
export class MembersComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name', 'dob', 'contact', 'group'];
  dataSource = new MatTableDataSource<any>();

  constructor(
    private memberService: MemberService,
    private router: Router) {
  }

  ngOnInit(): void {
    this.memberService.getMembers().subscribe((members) => {
      this.dataSource.data = members
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  addMember() {
    this.router.navigate(['/sideNavbar/addMember']);
  }
}
