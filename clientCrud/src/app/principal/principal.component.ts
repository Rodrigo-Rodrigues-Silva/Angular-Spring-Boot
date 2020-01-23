import { BancoService } from './../services/banco.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from './../usuario';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.css']
})
export class PrincipalComponent implements OnInit {
  usuarios: Observable<Usuario[]>;
  erro: any;

  constructor(private BancoService: BancoService) { 

    this.atualizar()

  }

  ngOnInit() {
  }

  atualizar() {
    this.BancoService.listaTodos().subscribe(
      (data: Observable<Usuario[]>) => {
      this.usuarios =  data;
      },
      (error: any) => {
        this.erro = error;
      }
    );
  }

  deletar(id: string) {
    this.BancoService.deletar(id)
      .subscribe(
        data => {
          console.log(data);
          this.atualizar();
        },
        error => console.log(error));
  }
}
