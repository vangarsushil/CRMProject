import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MemberService } from '../member.service';

@Component({
  selector: 'app-add-member',
  templateUrl: './add-member.component.html',
  styleUrls: ['./add-member.component.css']
})
export class AddMemberComponent implements OnInit {
  memberForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private memberService: MemberService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.memberForm = this.fb.group({
      id: ['', Validators.required],
      name: ['', Validators.required],
      dob: ['', Validators.required],
      contact: ['', [Validators.required, Validators.minLength(10)]],
      group: ['', Validators.required]
    });
  }


  onSubmit(): void {
    if (this.memberForm.valid) {
      const memberData = this.memberForm.value;
      this.memberService.addMember(memberData);
      this.router.navigate(['/sideNavbar/members']);
    } else {
      alert('Please fill out all fields');
    }
  }

}