import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from "../../models/user.model";
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  
  public user: User;
  public status: string;
  constructor(
    private _userService: UserService
  ) { 
    this.user = new User (1,'','','','','','');
  }

  ngOnInit(): void {
  }

  onSubmit (form: NgForm){
      if (!form.valid) {return false}
  this._userService.login(this.user).subscribe(
    response => {
        if (response.status == 'success'){
          form.reset();
        } else {
          this.status = 'error '
        }
    },
    error => { 
      this.status = 'error';
      console.log(error)
    }
  )
}
  

}
