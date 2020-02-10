import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss', '../../error-styles.scss']
})
export class RegisterComponent implements OnInit {

  emailRegex = new RegExp('(.{6,}@gmail\.(com|bg))');

  constructor() { }

  ngOnInit() {
  }

  handleRegister({ email, password, rePassword }: { email: string, password: string, rePassword:string }) {
    
  }

}
