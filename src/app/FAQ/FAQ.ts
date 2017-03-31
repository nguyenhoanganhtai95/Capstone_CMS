import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'FAQ',
    templateUrl: '../HTML/FAQ/FAQ.html'
})
export class FAQ implements OnInit {
  data : any;
  constructor(public router: Router, public http: Http) {
  }
  deletedraft()
  {

  }
  ngOnInit()
  {
    this.getData();
  }
  getData():
  void {
    this.http.get('http://192.168.201.1:3000/account')
      .map((res: Response) => res.json())
      .subscribe(
        data => {

          this.data = data;
        },

        () => console.log('done')
      );
  }

}
