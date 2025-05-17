import { Component } from '@angular/core';
import { SigninComponent } from "../signin/signin.component";

@Component({
  selector: 'app-login',
  imports: [SigninComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

}
