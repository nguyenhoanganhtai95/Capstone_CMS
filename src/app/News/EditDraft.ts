import {Component, OnInit, Input} from '@angular/core';
import {RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
declare var CKEDITOR :any;
@Component({
    moduleId: module.id,
    selector: 'EditDraft',
    templateUrl: '../HTML/News/EditDraft.html'
})
export class EditDraft implements OnInit {
  title: any;
  data:any;
  short:any;
  edit:any;
  ckeditorContent:any;
  username = JSON.parse(localStorage.getItem('currentUser'));
  constructor(public router: Router, public http: Http, private route: ActivatedRoute) {
  }

  id_account: any;
  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      this.id_account = params['id'];
      this.ShowListAccount(this.id_account);
    });
  }

  ShowListAccount(id_account: any): void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('https://bss-vla.herokuapp.com/news/selectadmindraftdetail', {id: id_account,name:this.username.fullname}, options)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.data = (data)
        },
        err => alert(err),
        () => this.setdata(),
      );
  }
  EditDraft(): void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('https://bss-vla.herokuapp.com/news/edit', {id:this.id_account,title: this.title, shortbrief: this.short,content:"sadsa"}, options)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.edit = (data)
        },
        err => alert(err),
      );
  }

  setdata(): void {
    this.title = this.data[0].title;
    this.short = this.data[0].shortbrief;
    this.ckeditorContent = this.data[0].content;
  }
}
