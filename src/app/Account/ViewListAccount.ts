import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, Response,Headers,RequestOptions } from '@angular/http';



@Component({
    moduleId: module.id,
    selector: 'ViewListAccount',
    templateUrl: '../HTML/Account/ViewListAccount.html'
})


export class ViewListAccount implements OnInit {
  data : any;
  reload : any;
  showDialog = false;
  selector1="";
  deactivate(id_account:any)
  {

    this.DeactivateAccount(id_account);
    this.ShowListAccount();

  }

  activate(id_account:any)
  {
    this.ActivateAccount(id_account);
    this.ShowListAccount();
  }
  editaccount(id:any)
  {
    this.router.navigate(['/EditAccount', id]);
  }

  Viewdetail(id:any)
  {
    this.router.navigate(['/ViewDetailAccount', id]);

  }


  constructor(public router: Router, public http: Http) {}




  ngOnInit()
  {
    this.ShowListAccount();

  }

  ShowListAccount(): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/account/select', {}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.data=(data) },
        err => alert(err),
      );

  }
  ActivateAccount(id:any): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/account/active', {id:id}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.reload=(data) },


      );

  }
  DeactivateAccount(id: any): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/account/deactive', {id:id}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.reload=(data) },
      );

  }
  save(id:any): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/account/authorize', {id:id,newtype:this.selector1}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.reload=(data) },


      );

  }

}
