import {Component, OnInit, Input} from '@angular/core';
import {RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'EditAccount',
  templateUrl: '../HTML/Account/EditAccount.html'
})
export class EditAccount implements OnInit {
  data: any;
  edit: any;
  id_account: any;
  email = "";
fullname="";
  constructor(public router: Router, public http: Http, private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id_account = params['id'];
      this.ShowListAccount(this.id_account);

    });

  }

  Editaccount(fullname: any, email: any,): void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    alert(this.id_account+fullname+email);
    this.http.post('https://bss-vla.herokuapp.com/account/edit', {id:this.id_account,fullname: fullname, email: email}, options)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.edit = (data)
        },
        err => alert(err),
      );
  }

  ShowListAccount(id_account: any): void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('https://bss-vla.herokuapp.com/account/selectbyid', {id: id_account}, options)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.data = (data)
        },
        err => alert(err),
        () =>  this.setdata(),

      );
  }
  setdata():void
  {
    this.fullname = this.data[0].fullname;
    this.email = this.data[0].email;
  }
}
