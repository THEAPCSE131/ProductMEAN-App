import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MyserviceService } from '../appServices/myservice.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  constructor(private service: MyserviceService, private routes: Router) {}
  msg: string = '';
  check(uname: string, pwd: string) {
    var output = this.service.checkUandP(uname, pwd);
    if (output === true) {
      this.routes.navigate(['/home']);
    } else {
      this.msg = 'Invalid Username OR Passowrd';
    }
  }

  ngOnInit(): void {}
}
