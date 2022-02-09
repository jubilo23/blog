import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-aseo',
  templateUrl: './list-aseo.component.html',
  styleUrls: ['./list-aseo.component.css']
})
export class ListAseoComponent implements OnInit {

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
  {position: 1, name: 'Lorena Montes', date: '5/02/2022'},
  {position: 2, name: 'Rodolfo Montes', date: '7/02/2022'},
  {position: 3, name: 'Juan Castro', date: '10/02/2022'},
  {position: 4, name: 'Lidia Rosas', date: '12/02/2022'},
  {position: 5, name: 'Martin Carrillo', date: '14/02/2022'}
];
