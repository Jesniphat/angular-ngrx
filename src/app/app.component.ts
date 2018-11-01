import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

import { AppState } from './interfaces/AppState';
import { Post } from './models/post.model';
import { PostState } from './interfaces/PostState';
import * as PostActions from './actions/post.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public title = 'angular-ngrx';

  public message$: Observable<string>;
  public post$: Observable<Post>;

  public text: string; /// form input val

  constructor(private store: Store<AppState>, private store_post: Store<PostState>) {
    this.message$ = this.store.select('message');
    this.post$ = this.store_post.select('post');
  }

  public spanishMessage() {
    this.store.dispatch({type: 'SPANISH'});
  }

  public frenchMessage() {
    this.store.dispatch({type: 'FRENCH'});
  }

  public editText() {
    this.store_post.dispatch(new PostActions.EditText(this.text) );
  }

  public resetPost() {
    this.store_post.dispatch(new PostActions.Reset());
  }

  public upvote() {
    this.store_post.dispatch(new PostActions.Upvote());
  }

  public downvote() {
    this.store_post.dispatch(new PostActions.Downvote());
  }
}
