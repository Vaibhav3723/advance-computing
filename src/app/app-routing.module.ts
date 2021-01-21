import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminViewComponent } from "./admin-view/admin-view.component";
import { ConfirmationComponent } from "./common/confirmation-page/confirmation.component";
import { PageNotFoundComponent } from "./common/page-not-found/page-not-found.component";
import { UserDetailComponent } from "./users/user-detail.component";

const appRoutes: Routes = [
    { path: '', component: UserDetailComponent},
    { path: 'confirmation/:courseName', component: ConfirmationComponent},
    { path: 'admin-view', component: AdminViewComponent},
    { path: 'not-found', component: PageNotFoundComponent},
    { path: '**', redirectTo: '/not-found'}
]

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {

}