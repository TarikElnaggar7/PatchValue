import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AppComponent, ParentComponent, ChildComponent],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent },
      { path: 'parent', component: ParentComponent },
      { path: 'child', component: ChildComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
