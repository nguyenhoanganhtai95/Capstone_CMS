import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';
@Component({
    moduleId: module.id,
    selector: 'CreateBanner',
    templateUrl: '../HTML/Banner/CreateBanner.html'
})
export class CreateBanner implements OnInit {
  public uploader:FileUploader = new FileUploader({url:'http://localhost:3001/upload'});
    constructor() { }

    ngOnInit() {

    }

}
