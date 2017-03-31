import {Component, OnInit, Input} from '@angular/core';
import {RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'ChangePassword',
    templateUrl: '../HTML/Account/ChangePassword.html'
})
export class ChangePassword implements OnInit {
  id_account: any;
  data:any;
  constructor(public router: Router, public http: Http, private route: ActivatedRoute) {}


    ngOnInit() {
      this.route.params.subscribe((params: Params) => {
        this.id_account = params['id'];


      });
    }
  changepassword(id: any,newpassword:any,confirmpass:any): void {
    alert(newpassword+confirmpass);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});

    this.http.post('https://bss-vla.herokuapp.com/account/changepassword', {id: id}, options)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.data = (data)
        },
      );
  }

  }
