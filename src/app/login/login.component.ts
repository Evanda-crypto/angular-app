import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(private router: Router, private http: HttpClient) { }

  login(formData: any) {

    const headers = new HttpHeaders()
    .set('Accept', 'application/json')
    // .set('Custom-Header', 'value');
    formData = {
      "username": formData.username,
      "password": formData.password
    }

    return this.http.post('http://localhost:13000/komp/api/token/create',formData,{headers:headers}).subscribe(function (response) {
      console.log(response);
    })
  }

}
