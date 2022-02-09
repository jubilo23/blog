import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-talento',
  templateUrl: './list-talento.component.html',
  styleUrls: ['./list-talento.component.css']
})
export class ListTalentoComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'date'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  date: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Gerardo Rodriguez', date: '5/02/2022'},
  {position: 2, name: 'Laura Gomez', date: '7/02/2022'},
  {position: 3, name: 'Carlos Diaz', date: '10/02/2022'},
  {position: 4, name: 'Alicia Gallardo', date: '12/02/2022'},
  {position: 5, name: 'Ana Cortez', date: '14/02/2022'}
];
