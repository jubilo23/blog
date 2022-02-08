import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-predica',
  templateUrl: './list-predica.component.html',
  styleUrls: ['./list-predica.component.css']
})
export class ListPredicaComponent implements OnInit {
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
  {position: 1, name: 'Rodolfo Montes', date: '5/02/2022', turn: 'Vespertino'},
  {position: 2, name: 'Blanca Diaz', date: '7/02/2022', turn: 'Vespertino'},
  {position: 3, name: 'Elizabeth', date: '10/02/2022', turn: 'Vespertino'},
  {position: 4, name: 'Jose', date: '12/02/2022', turn: 'Matutino'},
  {position: 5, name: 'Adrian', date: '14/02/2022', turn: 'Vespertino'}
];