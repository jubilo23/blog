import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-dirigir',
  templateUrl: './list-dirigir.component.html',
  styleUrls: ['./list-dirigir.component.css']
})
export class ListDirigirComponent implements OnInit {
  displayedColumns: string[] = ['position', 'name', 'date', 'turn'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  date: String;
  turn: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Alejandro Diaz', date: '5/02/2022', turn: 'Vespertino'},
  {position: 2, name: 'Blanca Diaz', date: '7/02/2022', turn: 'matutino'},
  {position: 3, name: 'Deysi Diaz', date: '10/02/2022', turn: 'Vespertino'},
  {position: 4, name: 'Denise', date: '12/02/2022', turn: 'Matutino'},
  {position: 5, name: 'Jose', date: '14/02/2022', turn: 'Vespertino'}
];
