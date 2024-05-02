import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  nome: string = 'The lord of the Books';
  email: string = '';
  contact: string = '';
  message: string = '';

  submitForm(): void {
    // Verifica se os campos de entrada estão preenchidos
    if (this.email) {
      // Cria um objeto com as informações do formulário
      const formData = {
        nome: this.nome,
        email: this.email,
        contact: this.contact,
        message: this.message
      };

      // Converte o objeto em uma string JSON
      const formDataString = JSON.stringify(formData);

      // Salva as informações no LocalStorage com uma chave única
      localStorage.setItem('formData', formDataString);

      // Limpa os campos de entrada após o envio do formulário
      this.email = '';
      this.contact = '';
      this.message = '';

      // Exibe uma mensagem de confirmação ou redireciona para outra página
      alert('Formulário enviado com sucesso!');
    } else {
      // Exibe uma mensagem de erro se algum campo estiver vazio
      alert('Por favor, preencha o campo de e-mail.');
    }
  }
}
