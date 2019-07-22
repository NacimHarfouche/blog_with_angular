import { Component, OnInit, Input } from '@angular/core';

export interface Post {
  title: string;
  content: string;
  loveIts: number;
  created_at: Date;
} 

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  @Input()
  post: Post;

  constructor() { }

  ngOnInit() {
  }

  getColor() {
    if(this.post.loveIts > 0) {
      return "green";
    } else if (this.post.loveIts < 0) {
      return "red";
    }
  }

  handleLike(count: number) {
    this.post.loveIts += count;
  }
}
