import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss', '../../../error-styles.scss']
})
export class ProfileComponent implements OnInit {
  
  emailRegex = new RegExp('(.{6,}@gmail\.(com|bg))');

  get currentUser(){
    return this.userService.currentUser
  }

  constructor(private userService: UserService,
    private router: Router) { }

  ngOnInit() {
  }

  handleProfileEdit({ email, password, rePassword }: { email: string, password: string, rePassword:string }) {
    
  }

  logout() {
    this.userService.logout();
    this.router.navigate(['']);
  }

}
