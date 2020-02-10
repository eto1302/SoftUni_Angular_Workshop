import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserComponent } from './user/user.component';
import { ProfileComponent } from './profile/profile.component';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserComponent, ProfileComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule
  ]
})
export class UserModule { }
