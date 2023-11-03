import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})
export class DataBindingComponent implements OnInit {

  url: string = 'http://Rafaela.com';

  cursoAngular :boolean = true;
  urlImagem = 'https://loremflickr.com/640/360'

  valorAtual: string ='';
  valorSalvo: any;
  isMouseOver: boolean = false ;

  getValor () {
      return 1;
  }
  getCurtirCurso (){
    return true;
  }

  botaoClicado() {
    alert('Botao clicado!');
  }

  onKeyUp(evento: KeyboardEvent){
    this.valorAtual = (<HTMLInputElement>evento.target).value;
  }
  salvarValor(valor: any){
    this.valorSalvo = valor;
  }
  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }

  postar() {
    console.log('Post efetuado!');
  }

  constructor() { }

  ngOnInit() {
  }

}
