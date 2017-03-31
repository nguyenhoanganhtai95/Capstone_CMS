import {NgModule, enableProdMode}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule, Routes} from '@angular/router';
import {NewsComponent}   from './News/CreateDraft';
import {MaterialModule} from "@angular/material";
import {EditAccount} from "./Account/EditAccount";
import {EditDraft} from "./News/EditDraft";
import {AppComponent} from "./app.component";
import {CreateAccount} from "./Account/CreateAccount";
import {ViewListAccount} from "./Account/ViewListAccount";
import {Authorize} from "./Account/Authorize";
import {ActivateAccount} from "./Account/ActivateAccount";
import {ViewDetailAccount} from "./Account/ViewDetailAccount";
import {ViewDraft} from "./News/ViewDraft"
import {Transfer} from "./News/Transfer";
import {AddCategories} from "./Categories/AddCategories";
import {EditCategories} from "./Categories/EditCategories";
import {CreateBanner} from "./Banner/CreateBanner";
import {EditBanner} from "./Banner/EditBanner";
import {CreatePopup} from "./Pop-up/CreatePopup";
import {EditPopup} from "./Pop-up/EditPopup";
import {Banner} from "./Banner/Banner";
import {Popup} from "./Pop-up/Popup";
import {FormsModule} from "@angular/forms";
import {ChangePassword} from "./Account/ChangePassword";
import {ViewNews} from "./News/ViewNews";
import {ViewCategories} from "./Categories/ViewCategories";
import {CommonModule} from "@angular/common";
import {AddcategoriesLv2} from "./Categories/AddcategoriesLv2";
import {Login} from "./Account/Login";
import {register} from "./Account/register";
import {AppRoutingModule} from "./app-routing.component";
import {home} from "./Account/home";
import {AuthGuard} from "./Auth/Auth";
import {CKEditorModule} from 'ng2-ckeditor';
import { FileSelectDirective, FileDropDirective } from 'ng2-file-upload';
enableProdMode()

@NgModule({
  imports: [BrowserModule, MaterialModule, FormsModule, CommonModule, AppRoutingModule, CKEditorModule],

  declarations: [
    AppComponent, NewsComponent, EditAccount, EditDraft, CreateAccount, ViewListAccount, ChangePassword, Authorize,
    ActivateAccount, ViewDetailAccount, ViewDraft, Transfer, AddCategories, EditCategories, CreateBanner, EditBanner
    , CreatePopup, EditPopup, Banner, Popup, ViewNews, ViewCategories, AddcategoriesLv2, Login, register, home,FileSelectDirective
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule],
  providers: [AuthGuard]

})
export class AppModule {
}
