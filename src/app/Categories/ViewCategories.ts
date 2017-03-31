import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'ViewCategories',
    templateUrl: '../HTML/Categories/ViewCategories.html'
})
export class ViewCategories implements OnInit {
  data : any;
  deleteRS:any;
  constructor(public router: Router, public http: Http) {
  }
  deletelv1(id:any): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/category/deletelv1', {id:id}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.deleteRS=(data) },
        err => alert(err),
        () => alert('done')
      );
  }
  deletelv2(id:any): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/category/deletelv2', {id:id}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.deleteRS=(data) },
        err => alert(err),
        () => alert('done')
      );
  }
  ngOnInit()
  {
    this.ShowCategories();
  }
  ShowCategories(): void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('https://bss-vla.herokuapp.com/category/select', options)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.data = (data)
        },
        err => alert(err),
      );
  }
  create(id:any)
  {
    this.router.navigate(['/AddCategories', id]);
  }
  editlv1(id:any)
  {
    this.router.navigate(['/EditCategories', id]);
  }


}
