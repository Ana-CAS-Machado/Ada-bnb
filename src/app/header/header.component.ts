import { Component } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  searchQuery: string = ''; // Defina a variável searchQuery aqui se necessário

  constructor(private bookService: BookService) {} // Injete o BookService se necessário

  searchBooks() {
    // Implemente a lógica de busca aqui, se necessário
  }
}
