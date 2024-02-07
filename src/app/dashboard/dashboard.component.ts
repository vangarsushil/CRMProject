import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

export interface CollectionElement {
  no: number;
  name: string;
  date: any;
  amount: string;
}

const ELEMENT_DATA: CollectionElement[] = [
  { no: 1, name: 'Sushil', date: new Date, amount: '200' },
  { no: 2, name: 'Lalit', date: new Date, amount: '12' },
  { no: 3, name: 'Aniket', date: new Date, amount: '32' },
  { no: 4, name: 'Rahul', date: new Date, amount: '33' },
  { no: 5, name: 'Monika', date: new Date, amount: '33' },
  { no: 6, name: 'Akshi', date: new Date, amount: '323' },
  { no: 7, name: 'Sunil', date: new Date, amount: '323' },
  { no: 8, name: 'Rohit', date: new Date, amount: '232' },
  { no: 9, name: 'Shashank', date: new Date, amount: '2323' },
  { no: 10, name: 'Tonny', date: new Date, amount: '32' },
];


export interface ExpenseElement {
  no: number;
  spend: string;
  amount: string;
}


const ELEMENT_DATA_Expense: ExpenseElement[] = [
  { no: 1, spend: 'Rent', amount: '1000' },
  { no: 2, spend: 'Staff Salaries', amount: '3232' },
  { no: 3, spend: 'Marketing & Advertising', amount: '323' },
  { no: 4, spend: 'Equipment Maintenance	', amount: '3232' },
  { no: 5, spend: 'Cleaning Services	', amount: '121' },
  { no: 6, spend: 'Insurance', amount: '1222' },
  { no: 7, spend: 'Licenses & Permits	', amount: '2222' },
  { no: 8, spend: 'Supplies (Towels, cleaning items)	', amount: '235' },
  { no: 9, spend: 'Software & Technology (like Exercise.com)', amount: '8889' },
  { no: 10, spend: 'Insurance', amount: '32' },
];



@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  displayedColumns: string[] = ['no', 'name', 'date', 'amount'];
  dataSource = ELEMENT_DATA;

  displayedColumns1: string[] = ['no', 'spend', 'amount'];
  expenseDataSource = ELEMENT_DATA_Expense;

  constructor() { }

  ngOnInit(): void {
  }

}
