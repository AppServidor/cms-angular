import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Post } from 'src/app/models/post.model';
import { PostService } from "../../services/post.service";
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  
  public post :Post;
  public status: string;
  constructor( private _postService: PostService) { 
    this.post = new Post(1,'','','','','');
   }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if (!form.valid) {return false}
    this._postService.newPost(this.post).subscribe(
      response => {
          if (response.status == 'success'){
            form.reset();
          } else {
            this.status = 'error'
          }
      },
      error => { 
        this.status = 'error';
        console.log(error)
      }
    )
  }
}
