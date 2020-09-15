import { Component, OnInit } from '@angular/core';
import { PostModel } from '../../models/post-model';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  public post: PostModel;
  constructor() {
  //  this.post = new PostModel();
   }

  ngOnInit(): void {
  }

}
