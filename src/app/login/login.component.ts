import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  usuario : any;
  password: any;
  resultado: any;
  
  constructor(private router : Router) {
   
   }

  ngOnInit() {

  }

  login() {
    this.resultado = " ";
    //console.log("usuario="+this.usuario);
    //console.log("password="+this.password);

    if ((this.usuario == undefined  || this.usuario == "") && (this.password == undefined || this.password == "")){
      this.resultado =  "Ingrese usuario y contraseña";
    }else if ((this.usuario == undefined  || this.usuario == "")) {
      this.resultado =  "Ingrese el usuario";
    }else if ((this.password == undefined || this.password == "")){
      this.resultado =  "Ingrese el password";
    }else if (this.usuario == "admin" && this.password == "admin2022"){
      //this.resultado =  "Bienvenido al sistema";
      this.router.navigate(["/home"]);
    }else{
      this.resultado = "Usuario o Contraseña incorrectos";
    }
  }

  
}
