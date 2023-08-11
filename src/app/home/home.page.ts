import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public primeiroValor!: number;
  public segundoValor!: number;
  public resultato!: number;
  public operacao!: number;
  

  constructor(private alertController: AlertController) {}

  calcular(){
    if ((this.operacao == 3 && (this.primeiroValor == 0 || this.segundoValor == 0)) ||
      (this.operacao == 2 && (this.primeiroValor == 0 || this.segundoValor == 0))) {
      this.presentAlert('Erro ao calcular!', 'Operação inválida: (multiplicação/divisão) por zero!')
    }else{
      
      if(this.primeiroValor && this.segundoValor && this.operacao){
        if(this.operacao == 0){
          this.resultato = this.primeiroValor + this.segundoValor;
          this.presentAlert('O resultado é:', this.resultato.toString())

        }else if(this.operacao == 1){
          this.resultato = this.primeiroValor - this.segundoValor;
          this.presentAlert('O resultado é:', this.resultato.toString())

        }else if(this.operacao == 2){
          this.resultato = this.primeiroValor / this.segundoValor;
          this.presentAlert('O resultado é:', this.resultato.toString())

        }else if(this.operacao == 3){
          this.resultato = this.primeiroValor * this.segundoValor;
          this.presentAlert('O resultado é:', this.resultato.toString())
        }
        
      }else{
        this.presentAlert('Erro ao calcular!', 'Todos os campos são obrigatórios!')
      }
    }
    this.primeiroValor = NaN;
    this.segundoValor = NaN;
    this.operacao = NaN;
  }

  async presentAlert(subHeader : string, message : string) {
    const alert = await this.alertController.create({
      header: 'Calculadora',
      subHeader: subHeader,
      message: message,
      buttons: ['OK'],
    });

    await alert.present();
    }
  }
  