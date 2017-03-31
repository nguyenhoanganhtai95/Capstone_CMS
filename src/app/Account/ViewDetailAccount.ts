import {Component, OnInit, Input} from '@angular/core';
import {RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
@Component({
    moduleId: module.id,
    selector: 'ViewDetailAccount',
    templateUrl: '../HTML/Account/ViewDetailAccount.html'
})
export class ViewDetailAccount implements OnInit {
  data : any;

  @Input() fathername: string;
  constructor(public router: Router, public http: Http,private route: ActivatedRoute) {

  }
  id_account: any;
  ngOnInit()
  {
    //this.test = this.route.params['id'];
    //alert(this.test.toString());
    //this.getData(this.route.params['id']);
    this.route.params.subscribe((params: Params) => {
      this.id_account = params['id'];
      this.postData(this.id_account);
    });
  }
  postData(id_account: any): void {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/account/selectbyid', {id:id_account}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.data=(data) },
        err => alert(err),
        () => alert('done')
      );
  }


}
