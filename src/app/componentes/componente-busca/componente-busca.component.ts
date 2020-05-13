import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'componente-busca',
  templateUrl: './componente-busca.component.html',
  styleUrls: ['./componente-busca.component.css']
})
export class ComponenteBuscaComponent implements OnInit {
  numeroHeader: string =
    'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJ1c2VyIiwiZXhwIjoxNTg5OTY4MzY2fQ.' +
    'eaoy7euvQ29dyPPZYfsRm0xEjlN_s04q1MGPUbQpuFdN2jcWIGIV60Yhe7AR-bqNPU4M3O-2b-02GPdtp-lV7w';
  reqHeader = new HttpHeaders({
    Authorization: this.numeroHeader
  });
  respostaGeral: any;
  aparecerForm: any = false;
  respostaPokemon: any;
  pokemonConcluido: any = false;
  nomeFormatado: any;
  tipos: any = false;

  escolhaPokemon: string;

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
        this.nomeFormatado =
          this.respostaPokemon.name.substring(0, 1).toUpperCase() +
          this.respostaPokemon.name.substring(
            1,
            this.respostaPokemon.name.length
          );
        console.log(data);
        if (this.respostaPokemon.types.length > 1) {
          this.tipos = true;
        }
        this.pokemonConcluido = true;
      }, err => 
      alert("Erro ao buscar o pokemon!"));
  }

  ngOnInit() {}
}
