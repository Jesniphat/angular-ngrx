import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { PostState } from 'src/app/interfaces/PostState';
import { Observable } from 'rxjs/Observable';
import { Post } from 'src/app/models/post.model';
// import * as PostActions from '../../../actions/post.actions';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss']
})
export class FirstComponent implements OnInit {
  public post$: Observable<Post>;

  constructor(private store_post: Store<PostState>) { }

  ngOnInit() {
    this.post$ = this.store_post.select('post');
  }

}
