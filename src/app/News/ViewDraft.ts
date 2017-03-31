import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes, Router } from '@angular/router';
import { Http, Response,Headers,RequestOptions } from '@angular/http';

@Component({
    moduleId: module.id,
    selector: 'ViewDraft',
    templateUrl: '../HTML/News/ViewDraft.html'
})
export class ViewDraft implements OnInit {
  data: any;
  reload: any;
approve:any;
  constructor(public router: Router, public http: Http) {
  }

  username = JSON.parse(localStorage.getItem('currentUser'));

  ngOnInit() {
    this.ShowListAccount();
  }

  ShowListAccount(): void {
    if(this.username.type == 'Content Admin')
    {

    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('https://bss-vla.herokuapp.com/news/selectadmindraft', {name: this.username.fullname}, options)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.data = (data)
        },
        err => alert(err),

      );
    }
    else
    {
      let headers = new Headers({'Content-Type': 'application/json'});
      let options = new RequestOptions({headers: headers});
      this.http.post('https://bss-vla.herokuapp.com/news/selecteditordraft', {name: this.username.fullname}, options)
        .map((res: Response) => res.json())
        .subscribe(
          data => {
            this.data = (data)
          },
          err => alert(err),
        );
    }

  }

  editdraft(id: any) {
    this.router.navigate(['/EditDraft', id]);
  }

  DeleteDraft(id: any): void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('https://bss-vla.herokuapp.com/news/delete', {id: id}, options)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.reload = (data)
        },
      );

  }

  Approve(id: any): void {
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    this.http.post('https://bss-vla.herokuapp.com/news/approve', {id: id}, options)
      .map((res: Response) => res.json())
      .subscribe(
        data => {
          this.approve = (data)
        },
      );

  }
}
