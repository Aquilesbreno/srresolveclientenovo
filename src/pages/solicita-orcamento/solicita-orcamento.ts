import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { OrcamentosProvider } from '../../providers/orcamentos/orcamentos'




@IonicPage()
@Component({
  selector: 'page-solicita-orcamento',
  templateUrl: 'solicita-orcamento.html',
})
export class SolicitaOrcamentoPage {
  // criar formulĂˇrio
  form: FormGroup;
//armazenar produtos
  orcamento: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private formBuilder: FormBuilder,
              private toast: ToastController,
              private orcamentoProvider: OrcamentosProvider) {

                this.createForm();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrcamentoPage');
  }

  private createForm(){
    this.form = this.formBuilder.group({
      key: [''],
      name: ['', Validators.required],
      email: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco:[''],
      medidas:[''],
      mensagem: ['']
    })
  }

  onSubmit(){
    if (this.form.valid) {
      this.orcamentoProvider.save(this.form.value);
      this.toast.create({
        message: "Orçamento enviado com sucesso",
          duration:3000,
          position: 'bottom'})
          .present();
      //this.toast.create({ message: 'Orçamento salvo com sucesso', duration: 3000}).present();
      //this.navCtrl.setRoot('HomePage')
      this.navCtrl.pop();
    }
  }


}