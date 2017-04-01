/**
 * Created by Masu on 2/27/2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {RouterModule, Routes, Router, ActivatedRoute, Params} from '@angular/router';
import { Http, Response,Headers,RequestOptions } from '@angular/http';
declare var CKEDITOR :any;

@Component({
  moduleId: module.id,
    selector: 'news',
   templateUrl: '../HTML/News/news.component.html',


})

export class NewsComponent implements OnInit{

  data:any;
  date = new Date();
  ckeditorContent="";
username = JSON.parse(localStorage.getItem('currentUser'));
  constructor(public router: Router, public http: Http) {

  }

ngOnInit() {

  CKEDITOR.replace( 'editor1' ,
    {

    });
}
  CreateDraft(title:any,shortbrief:any): void {
  alert(this.ckeditorContent);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    this.http.post('https://bss-vla.herokuapp.com/news/createdraft', {title:title,shortbrief:shortbrief,content:this.ckeditorContent,owner:this.username.fullname,createdate:this.date}, options)
      .map((res:Response) => res.json())
      .subscribe(
        data => {this.data=(data) },
        err => alert(err),
        () => alert('done')
      );
  }

}
