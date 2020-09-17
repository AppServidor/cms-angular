import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { User } from "../../models/user.model";
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [UserService]
})
export class RegisterComponent implements OnInit {

  public user: User;
  public status: string;
  constructor(
    private _userService: UserService
  ) { 
    this.user = new User (1,'','','','','ROLE_USER','');
  }
  ngOnInit(): void {
  }
  onSubmit (form: NgForm){
    if (!form.valid) {return false}
this._userService.register(this.user).subscribe(
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

