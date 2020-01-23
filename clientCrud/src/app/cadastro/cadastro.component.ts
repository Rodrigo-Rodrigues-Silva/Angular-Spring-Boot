import { Email } from './../email';
import { Usuario } from './../usuario';
import { Component, OnInit, ViewChild, ElementRef,ViewChildren } from '@angular/core';
import { BancoService } from './../services/banco.service';
import { ActivatedRoute } from "@angular/router";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  @ViewChild('nome', null) nome: ElementRef;
  @ViewChild('sexo', null) sexo: ElementRef;
  @ViewChild('nascimento', null) nascimento: ElementRef;
  @ViewChild('id', null) idElemento: ElementRef;

  usuario: Usuario = new Usuario();
  mensagem : String;
  lista : Array<Email>;
  respostas: Array<String>;
 
  constructor(private BancoService: BancoService, private route: ActivatedRoute) {
    let id = this.route.snapshot.params['id'];

    if (id != null) {
      this.BancoService.listarUm(id).subscribe(data => {
        this.usuario = data;
        this.nome.nativeElement.value = this.usuario.nome;
        this.sexo.nativeElement.value = this.usuario.sexo;;
        this.nascimento.nativeElement.value = this.usuario.nascimento;
        this.idElemento.nativeElement.value = this.usuario.id;

      }, error => console.log(error));
    }

    this.lista = [];
    this.respostas =[];
  }

  ngOnInit() {

  }

  salvar() {
    this.usuario.nome = this.nome.nativeElement.value;
    this.usuario.sexo = this.sexo.nativeElement.value;
    this.usuario.nascimento = this.nascimento.nativeElement.value;

    if (this.idElemento.nativeElement.value == "") {

      this.BancoService.criar(this.usuario).subscribe(
        data => {
          this.mensagem = 'Adicionado';
          this.nome.nativeElement.value = "";
          this.sexo.nativeElement.value = "";
          this.nascimento.nativeElement.value = "";
        },
        error => console.log(error)
      );
    } else {
      
      this.BancoService.alterar(this.usuario.id,this.usuario).subscribe(
        data => {
          this.mensagem = 'Alterado';
        },
        error => console.log(error)
      );

    }
  }

  novoEmail(){
    this.lista.push(new Email());
  }

  imprimirVarios(){
      var inputs = document.getElementsByClassName('email');
      
      this.mensagem = inputs[0].toString();
      console.log(inputs[0]);

      for (var i=0;i<inputs.length;++i){
        this.respostas.push("a");
      }

      
  }
}
