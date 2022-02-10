import { Component } from '@angular/core';

const date = new Date(); 
/*console.log("Date = " + date);
console.log("Year = " + date.getFullYear());
console.log("Date = " + date.getDate());
console.log("Month = " + date.getMonth().toLocaleString);
console.log("Day = " + date.getDay());
console.log("Hours = " + date.getHours());
console.log("Minutes = " + date.getMinutes());
console.log("Seconds = " + date);
console.log("letters "+dateString.slice(4,24));*/
let dateString: string = date.toString();

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  title = 'blog';
  //greeting = "fecha: "+date.getDate()+"/"+(date.getMonth()+1)+"/"+date.getFullYear();
  greeting = "Fecha: "+dateString.slice(4,24);    
}




