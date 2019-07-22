import { Component } from '@angular/core';
import { Post } from './post/post.component';
import { getLocaleEraNames } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'blog';

  posts: Post[] = [
    {
      title: 'Mon premier post',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sed doloremque, totam minima ex corporis fuga facilis eligendi excepturi',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sed doloremque, totam minima ex corporis fuga facilis eligendi excepturi et praesentium',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam ea, labore eius facere voluptas, consequuntur, aut possimus consequatur qui sequi optio? Quis vitae iure placeat quisquam accusamus vero.',
      loveIts: 0,
      created_at: new Date()
    }
  ]
}
