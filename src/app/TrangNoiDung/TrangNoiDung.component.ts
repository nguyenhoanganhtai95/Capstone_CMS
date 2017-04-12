/**
 * Created by haitr on 3/17/2017.
 */
import {Component, OnInit, Input} from '@angular/core';
import {Tintuc} from "../Models/Tintuc";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {TintucServices} from "../Services/Tintuc.services";
import {Headers, RequestOptions, Http, Response} from "@angular/http";
declare var $: any;
@Component({
  moduleId: module.id,
  selector: 'trang-noidung',
  templateUrl: 'TrangNoiDung.UI.html',
  styleUrls: ['TrangNoiDung.style.css']
})
export class TrangNoiDungComponent implements OnInit {
  private subscription: Subscription;
  tintuc: Tintuc[];
  news: Tintuc[];

  constructor(private activatedRoute: ActivatedRoute,
              public tintucServices: TintucServices,
              public router: Router) {
  }

  ngAfterViewInit() {

  }

  ngOnInit() {
    this.getNewsById();
    this.getNewsRelate();
  }

  getNewsById(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any)=> {
        let id = param['id'];
        console.log(id);
        this.tintucServices.getNewsById(id)
          .subscribe(
            dulieu=> {
              this.tintuc = dulieu;
              console.log(this.tintuc);
            },
            err=>alert(err)
          );
      })
  };

  getNewsRelate(): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any)=> {
        let id = param['id'];
        let cate = param['route'];
        console.log(id);
        this.tintucServices.getNewsRelate(id, cate)
          .subscribe(
            dulieu=> {
              this.news = dulieu;
              console.log(this.news);
            },
            err=>alert(err)
          );
      })
  };

  Nav(id: any): void {
    this.subscription = this.activatedRoute.params.subscribe(
      (param: any)=> {
        let cate = param['route'];
        this.router.navigateByUrl('noidung/' + cate + '/' + id);
        $('html,body').animate({
            scrollTop: $("#content").offset().top
          },
          'slow');
      }
    )
  }
}
