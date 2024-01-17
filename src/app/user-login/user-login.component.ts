import { Component } from '@angular/core';

@Component({
  selector: '[app-user-login]',
  templateUrl: './user-login.component.html',
  styleUrl: './user-login.component.css'
})
export class UserLoginComponent {
  name: string = 'Evance';

  title: string = "KOMP Angualr login";

  onChangName(event: any) {
    this.name = event.target.value;
  }


  signIn(event: any) {

    console.log(event);
  }
}
