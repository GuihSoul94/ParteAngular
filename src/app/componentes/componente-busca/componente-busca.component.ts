import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';

@Component({
  selector: 'componente-busca',
  templateUrl: './componente-busca.component.html',
  styleUrls: ['./componente-busca.component.css']
})
export class ComponenteBuscaComponent implements OnInit {
  cabecalhoAutorizacao: any;
  resultadoAutorizacao: any = localStorage.getItem('token');
  reqHeader = new HttpHeaders({
    Authorization: this.resultadoAutorizacao
  });
  respostaGeral: any;
  aparecerForm: any = false;
  respostaPokemon: any;
  pokemonConcluido: any = false;
  nomeFormatado: any;
  tipos: any = false;
  converteAltura: any;
  convertePeso: any;

  escolhaPokemon: string;
  corpo: any = {
    username: 'user',
    password: 'senha'
 };
  constructor(private http: HttpClient) {
    this.http = http;
  }
   listarPokemon() {
     const criterioBusca = this.escolhaPokemon.toLowerCase();
     return this.http
      .get('http://localhost:4200/api/pokemon/' + criterioBusca, {
        headers: this.reqHeader
      })
      .subscribe(data => {
   this.respostaPokemon = data;
   this.converteAltura = (this.respostaPokemon.height / 10);
   this.convertePeso = (this.respostaPokemon.weight / 10);
   this.nomeFormatado =
          this.respostaPokemon.name.substring(0, 1).toUpperCase() +
          this.respostaPokemon.name.substring(
            1,
            this.respostaPokemon.name.length
          );
   if (this.respostaPokemon.types.length > 1) {
          this.tipos = true;
        }
   this.pokemonConcluido = true;
      }, err =>
      alert('Erro ao buscar o pokemon!'));
  }

  proximoPokemon(i) {
    // tslint:disable-next-line: radix
    const conversao = parseInt(i);
    const numero = conversao + 1;
    return this.http
      .get('http://localhost:4200/api/pokemon/' + numero, {
        headers: this.reqHeader
      })
      .subscribe(data => {
        this.respostaPokemon = data;
        this.converteAltura = (this.respostaPokemon.height / 10);
        this.convertePeso = (this.respostaPokemon.weight / 10);
        this.nomeFormatado =
          this.respostaPokemon.name.substring(0, 1).toUpperCase() +
          this.respostaPokemon.name.substring(
            1,
            this.respostaPokemon.name.length
          );
        if (this.respostaPokemon.types.length > 1) {
          this.tipos = true;
        }
        this.pokemonConcluido = true;
      }, err =>
      alert('Erro ao buscar o pokemon!'));
  }

  antigoPokemon(i) {
    const conversao = parseInt(i);
    let numero = conversao - 1;
    if (numero === 0) {
      numero = 1;
    }
    return this.http
      .get('http://localhost:4200/api/pokemon/' + numero, {
        headers: this.reqHeader
      })
      .subscribe(data => {
        this.respostaPokemon = data;
        this.converteAltura = (this.respostaPokemon.height / 10);
        this.convertePeso = (this.respostaPokemon.weight / 10);
        this.nomeFormatado =
          this.respostaPokemon.name.substring(0, 1).toUpperCase() +
          this.respostaPokemon.name.substring(
            1,
            this.respostaPokemon.name.length
          );
        if (this.respostaPokemon.types.length > 1) {
          this.tipos = true;
        }
        this.pokemonConcluido = true;
      }, err =>
      alert('Erro ao buscar o pokemon!'));
  }

  ngOnInit() {
    const httpOptions = {
      headers: new HttpHeaders({ 'Authorization': '' }),
      observe: 'response' as 'response'
    };
    this.http.post('http://localhost:4200/login', this.corpo, httpOptions).subscribe((res: HttpResponse<any>) => {
    const editarString = res.headers.get('Authorization');
    const stringEditada = editarString.split(' ');
    this.cabecalhoAutorizacao = stringEditada[1];
    localStorage.setItem('token', this.cabecalhoAutorizacao);
    });

  }
}
