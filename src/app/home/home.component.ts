import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  books: any[] = [];
  searchQuery: string = '';

  constructor(private bookService: BookService) {}

  ngOnInit() {
    this.loadFeaturedBooks();
  }

  loadFeaturedBooks() {
    this.bookService.searchBooks('programming').subscribe(
      (data) => {
        this.books = data.items || [];
      },
      (error) => {
        console.error('Erro ao carregar livros em destaque:', error);
      }
    );
  }

  searchBooks() {
    this.bookService.searchBooks(this.searchQuery).subscribe(
      (data) => {
        this.books = data.items || [];
      },
      (error) => {
        console.error('Erro ao buscar livros:', error);
      }
    );
  }
}