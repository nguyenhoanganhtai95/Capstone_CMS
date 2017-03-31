import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'ViewNews',
    templateUrl: '../HTML/News/ViewNews.html'
})
export class ViewNews implements OnInit {
  data : any;
  post:any;
  constructor(public router: Router, public http: Http) {
  }
  deletedraft()
  {

  }
  ngOnInit()
  {
    this.ShowListAccount();
  }
  ShowListAccount(): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/news/selectadminnews', {}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.data=(data) },
        err => alert(err),
      );

  }
  postss(id:any): void {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/news/post', {id:id,postdate:Date.now()}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.post=(data) },
        err => alert(err),
      );

  }
  deactivate(id:any): void {

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/news/post', {id:id,postdate:Date.now()}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.post=(data) },
        err => alert(err),
      );

  }

}
