import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuth } from '@angular/fire/auth'
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
//import { map, finalize } from 'rxjs/operators';


@Injectable()
export class OrcamentosProvider {
  private PATH = 'orcamento/';

  constructor(private db: AngularFireDatabase) { }

  save(item: any) {
    const orcamento= {
      name: item.name,
      email: item.email,
      telefone: item.telefone,
      endereco: item.endereco,
      medidas: item.medidas,
      mensagem: item.mensagem
    }
    
  this.db.list(this.PATH).push(orcamento)

  

}
/*get(produtoKey:string){
  return this.db.object(this.PATH + produtoKey)
  .snapshotChanges().pipe(
    map(m => {
    return { key: m.key, ...m.payload.val()};
  }));
}*/

}



