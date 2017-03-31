import { RouterModule, Routes } from '@angular/router';
import { NewsComponent }   from '../News/CreateDraft';
import {EditAccount} from "./EditAccount";
import {EditDraft} from "../News/EditDraft";
import {CreateAccount} from "./CreateAccount";
import {ViewListAccount} from "./ViewListAccount";
import {Authorize} from "./Authorize";
import {ActivateAccount} from "./ActivateAccount";
import {ViewDetailAccount} from "./ViewDetailAccount";
import {ViewDraft} from "../News/ViewDraft"
import {Transfer} from "../News/Transfer";
import {AddCategories} from "../Categories/AddCategories";
import {EditCategories} from "../Categories/EditCategories";
import {CreateBanner} from "../Banner/CreateBanner";
import {EditBanner} from "../Banner/EditBanner";
import {EditPopup} from "../Pop-up/EditPopup";
import {Banner} from "../Banner/Banner";
import {Popup} from "../Pop-up/Popup";
import {ChangePassword} from "./ChangePassword";
import {ViewNews} from "../News/ViewNews";
import {ViewCategories} from "../Categories/ViewCategories";
import {AddcategoriesLv2} from "../Categories/AddcategoriesLv2";
import {Login} from "./Login";
import {register} from "./register";
export const HomeRouter: Routes = [
  { path: 'EditAccount/:id',  component: EditAccount },
  { path: 'news',  component: NewsComponent },
  { path: 'EditDraft/:id',  component: EditDraft },
  { path: 'CreateAccount',  component: CreateAccount },
  { path: 'ViewListAccount',  component: ViewListAccount },
  { path: 'ActivateAccount',  component: ActivateAccount },
  { path: 'Authorize',  component: Authorize },
  { path: 'ViewDetailAccount/:id',  component: ViewDetailAccount },
  { path: 'ViewDraft',  component: ViewDraft },
  { path: 'Transfer',  component: Transfer },
  { path: 'AddCategories',  component: AddCategories },
  { path: 'EditCategories/:id',  component: EditCategories },
  { path: 'CreateBanner',  component: CreateBanner },
  { path: 'EditBanner',  component: EditBanner },
  { path: 'CreatePop-up',  component: EditPopup },
  { path: 'EditPop-up',  component: EditPopup },
  { path: 'Banner',  component: Banner },
  { path: 'Pop-up',  component: Popup },
  { path: 'ChangePassword',  component: ChangePassword },
  { path: 'ViewNews',  component: ViewNews },
  { path: 'ViewCategories',  component: ViewCategories },
  { path: 'AddCategories/:id',  component:AddcategoriesLv2 },
];
