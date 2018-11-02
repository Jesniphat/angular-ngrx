import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { FirstModule } from './modules/first/first.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// ngrx
import { StoreModule } from '@ngrx/store';
import { simpleReducer } from './reducers/simple.reducer';
import { postReducer } from './reducers/post.reducer';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FirstModule,
    StoreModule.forRoot({
      post: postReducer, /// <--- add reducer here
      message: simpleReducer
    })
  ],
  providers: [],
  exports: [
    FirstModule
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
