import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-school-sunday',
  templateUrl: './list-school-sunday.component.html',
  styleUrls: ['./list-school-sunday.component.css']
})
export class ListSchoolSundayComponent implements OnInit {

  displayedColumns: string[] = ['position', 'name', 'date', 'nivel'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}

export interface PeriodicElement {
  name: string;
  position: number;
  date: String;
  nivel: String;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Arely Deysi', date: '5/02/2022', nivel: 'jovenes'},
  {position: 2, name: 'Alexa Fernanda', date: '7/02/2022', nivel: 'niños'},
  {position: 3, name: 'Rodrigo Galvez', date: '10/02/2022', nivel: 'adolescentes'},
  {position: 4, name: 'Mariana Rojas', date: '12/02/2022', nivel: 'jovenes'},
  {position: 5, name: 'Pilar Martinez', date: '14/02/2022', nivel: 'parvulos'}
];
