// Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from './../environments/environment';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { CommonCompsModule } from './common/common-comp.module';
import { ReactiveFormsModule } from '@angular/forms';
import { MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// Components
import { AppComponent } from './app.component';
import { UserDetailComponent } from './users/user-detail.component';
import { PageNotFoundComponent } from './common/page-not-found/page-not-found.component';
import { AdminViewComponent } from './admin-view/admin-view.component';

@NgModule({
  declarations: [
    AppComponent,
    UserDetailComponent,
    PageNotFoundComponent,
    AdminViewComponent,
  ],
  imports: [
    BrowserModule,
    CommonCompsModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    MatTableModule,
    MatPaginatorModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
