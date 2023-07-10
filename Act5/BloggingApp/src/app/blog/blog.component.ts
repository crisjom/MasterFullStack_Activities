import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { DataService } from '../services/data.service';
import { Post } from '../interfaces/post.interface'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  postForm: FormGroup;
  posts: Post[];

  constructor(private formBuilder: FormBuilder, private dataService: DataService) {
    this.postForm = this.formBuilder.group({
      title: ['', Validators.required],
      imageUrl: ['', [Validators.required, Validators.pattern('^https?://.+')]],
      text: ['', Validators.required],
      date: ['', Validators.required]
    });
    this.posts = this.dataService.getPosts();
  }

  addPost() {
    if (this.postForm.valid) {
      const newPost = this.postForm.value;
      const enteredDate = newPost.date;
      const formattedDate = this.formatDate(enteredDate);
      newPost.date = formattedDate;
      const isDuplicate = this.posts.some(post => post.title === newPost.title);
      if (isDuplicate) {
        alert('El título de la publicación ya existe. Por favor, elige otro título.');
      } else {
        this.dataService.posts.push(newPost);
        this.resetForm();
      }
    } else {
      alert('Por favor, completa todos los campos correctamente.');
    }
  }

  resetForm() {
    this.postForm.reset();
  }

  formatDate(date: string): string {
    const [year, month, day] = date.split('-');
    return `${day}/${month}/${year}`;
  }
}
