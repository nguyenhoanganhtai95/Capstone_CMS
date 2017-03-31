import {Component, OnInit, Input} from '@angular/core';
import {RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import { Http, Response,Headers,RequestOptions } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'Login',
    templateUrl: '../HTML/Account/Login.html'
})
export class Login implements OnInit {
  data:any;
  email = "";
  id="";
  fullname=""

  constructor(public router: Router, public http: Http) {
  }
    ngOnInit() { }
  Login(email:any,password:any): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.email = email;
    this.http.post('https://bss-vla.herokuapp.com/account/login', {email:email,password:password}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.data=(data) },
        err => alert(err),
        () =>  alert(this.check())
      );
  }

  check():boolean
  {
    if(this.data.toString() == '')
    {
     return false;
    }
    else {
      localStorage.setItem('currentUser',JSON.stringify({id:this.data[0]._id,email:this.data[0].email,fullname:this.data[0].fullname,type:this.data[0].type}));
      window.location.href="/home";

    }
  }
}
