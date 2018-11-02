import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FirstRoutingModule } from './first-routing.module';
import { FirstComponent } from './first/first.component';
import { postReducer } from 'src/app/reducers/post.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [
    FirstComponent
  ],
  imports: [
    CommonModule,
    FirstRoutingModule,
    StoreModule.forRoot({
      post: postReducer, /// <--- add reducer here
    })
  ]
})
export class FirstModule { }
