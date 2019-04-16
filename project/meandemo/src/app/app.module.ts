import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { entryComponent } from './entry/entry.component';
import { entryDetailComponent } from './entry-detail/entry-detail.component';
import { entryCreateComponent } from './entry-create/entry-create.component';
import { entryEditComponent } from './entry-edit/entry-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from "@angular/material";

const appRoutes: Routes = [
  {
    path: 'entries',
    component: entryComponent,
    data: { title: 'entry List' }
  },
  {
    path: 'entry-details/:id',
    component: entryDetailComponent,
    data: { title: 'entry Details' }
  },
  {
    path: 'entry-create',
    component: entryCreateComponent,
    data: { title: 'Create entry' }
  },
  {
    path: 'entry-edit/:id',
    component: entryEditComponent,
    data: { title: 'Edit entry' }
  },
  { path: '',
    redirectTo: '/entries',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    entryComponent,
    entryDetailComponent,
    entryCreateComponent,
    entryEditComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
