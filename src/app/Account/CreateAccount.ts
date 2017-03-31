import {Component, OnInit, Input} from '@angular/core';
import {RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'CreateAccount',
    templateUrl: '../HTML/Account/CreateAccount.html'
})
export class CreateAccount implements OnInit {
  data : any;
  constructor(public router: Router, public http: Http) {
  }

  ngOnInit()
  {

  }
  Createaccount(fullname:any,email:any): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/account/create', {fullname:fullname,email:email}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.data=(data) },
        err => alert(err),
        () => alert('done')
      );
  }
}
