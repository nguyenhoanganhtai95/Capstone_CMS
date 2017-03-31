import {Component, OnInit, Input} from '@angular/core';
import {RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
@Component({
  moduleId: module.id,
  selector: 'EditCategories',
  templateUrl: '../HTML/Categories/EditCategories.html'
})
export class EditCategories implements OnInit {
  id_categories:any;
  data:any;
  categoriesname:any;
  constructor(public router: Router, public http: Http,private route: ActivatedRoute) {
    this.route.params.subscribe((params: Params) => {
      this.id_categories = params['id'];

  });
  }
  ngOnInit() {
    this.ShowCategories();
  }
  ShowCategories(): void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('hhttps://bss-vla.herokuapp.com/category/selectlv1', {id:this.id_categories}, options)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.data = (data)
        },
        err => alert(err),
        () => alert(this.data[0].name),
      );
  }


}
