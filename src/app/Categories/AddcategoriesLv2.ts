import {Component, OnInit, Input} from '@angular/core';
import {RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'AddcategoriesLv2',
    templateUrl: "../HTML/Categories/AddCategoriesLv2.html"
})
export class AddcategoriesLv2 implements OnInit {
  id_account:any;
  data : any;

  constructor(public router: Router, public http: Http, private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.id_account = params['id'];

    }
    )};
  ngOnInit()
  {
  }
  Create(category:any): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/category/createlv2', {id:this.id_account,name:category}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.data=(data) },
        err => alert(err),
        () => alert('done')
      );
  }
}
