import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostState } from 'src/app/interfaces/PostState';
import { Observable } from 'rxjs/Observable';
import { Post } from 'src/app/models/post.model';
import * as PostActions from '../../../actions/post.actions';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  public post$: Observable<Post>;
  public text: string;

  constructor(private store_post: Store<PostState>) {
    this.post$ = this.store_post.select('post');
  }

  ngOnInit() {}

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
