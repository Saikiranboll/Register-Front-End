import { Routes } from '@angular/router';
import { Register } from './register/register';
import { Signin } from './signin/signin';
import { ThankYou } from './thank-you/thank-you';
import { LoggedIn } from './logged-in/logged-in';

export const routes: Routes = [

    {path:"register",component:Register},
    {path:"",component:Signin},
    {path:"thank-you",component:ThankYou},
    {path:"logged-in",component:LoggedIn}
];
