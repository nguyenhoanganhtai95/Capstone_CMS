import {Component, ElementRef, OnInit} from '@angular/core';
import {Router} from "@angular/router";
declare var $: any;
var toggle = true;

@Component({
  moduleId : module.id,
  selector: 'home',
  templateUrl: '../HTML/app.component.html'
})
export class home
{
  username = "";

  lala()
  {
    myFunction();
  }
  logout()
  {
    localStorage.removeItem('currentUser');
    window.location.href="/login";
  }
  ngOnInit() {
    this.username = JSON.parse(localStorage.getItem('currentUser'));

    $(".sidebar-icon").click(function () {

      if (toggle) {
        $(".page-container").addClass("sidebar-collapsed").removeClass("sidebar-collapsed-back");
        $("#menu span").css({"position": "absolute"});
      }
      else {
        $(".page-container").removeClass("sidebar-collapsed").addClass("sidebar-collapsed-back");
        setTimeout(function () {
          $("#menu span").css({"position": "relative"});
        }, 400);
      }

      toggle = !toggle;


    });

    $(".clickclass").click(function() {
      alert("sas");
      $('.example').addClass("exami");

    });
  }


}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}
