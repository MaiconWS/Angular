import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LoginComponent } from "./login/login.component";

const routes: Routes = [
    {path:'', component: LoginComponent},

]

@NgModule({
    declarations:[],
    imports:[RouterModule.forRoot(routes),LoginComponent],
    exports:[RouterModule]
})

export class AppRoutingModule{}