import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForestryWindowComponent } from './windows/forestry-window/forestry-window.component';
import { AddForestryDialogComponent } from './views/forestry-view/add-forestry-dialog/add-forestry-dialog.component';
import { ForestryListComponent } from './views/forestry-view/forestry-list/forestry-list.component';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatDialogModule} from "@angular/material/dialog";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatSelectModule} from "@angular/material/select";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatListModule} from "@angular/material/list";
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from "@angular/material/input";
import { AddForestryDialogFormComponent } from './views/forestry-view/add-forestry-dialog/add-forestry-dialog-form/add-forestry-dialog-form.component';
import { PositiveDialogComponent } from './views/dialogs/positive-dialog/positive-dialog.component';
import { NegativeDialogComponent } from './views/dialogs/negative-dialog/negative-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    ForestryWindowComponent,
    AddForestryDialogComponent,
    ForestryListComponent,
    AddForestryDialogFormComponent,
    PositiveDialogComponent,
    NegativeDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatListModule,
    NgbModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
