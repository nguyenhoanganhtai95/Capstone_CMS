import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'Popup',
    templateUrl: '../HTML/Pop-up/Pop-up.html'
})
export class Popup implements OnInit {
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
    this.http.get('https://bss-vla.herokuapp.com/account')
      .map((res: Response) => res.json())
      .subscribe(
        data => {

          this.data = data;
        },

        () => console.log('done')
      );
  }

}
