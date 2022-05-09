import { Cliente } from "./Cliente.js";

export class ContaCorrente {
    static numeroDeContas = 0;

    agencia;


    _cliente;
    //#saldo; proposta https://github.com/tc39/proposal-class-fields#private-fields
    _saldo = 0; 

    set cliente(novoValor){
        if(novoValor instanceof Cliente){
            this._cliente = novoValor;
        }else{
            return;
        }
    }

    get cliente(){
        return this._cliente;
    }
    get saldo(){
        return this.saldo;
    }

    constructor (agencia, cliente) {
        this.agencia = agencia;
        this.cliente = cliente;
        ContaCorrente.numeroDeContas += 1;
    }

    sacar(valor){
        if(this._saldo < valor){
            console.log("Saldo insuficiente");
        }else{
            this._saldo -= valor;
            //console.log("Saldo: ", this._saldo);
        }
        return valor;
    }

    depositar(valor){
        if(valor < 0){
            console.log("Impossivel fazer um deposito negativo");
            return; //Early return
        }else{
            this._saldo += valor;
            //console.log("Saldo: ", this._saldo);
        }
    }
    
    transferir (valor, conta){
        if (valor < 0){
            console.log("Impossivel fazer uma transferencia negativa");
            return;
        }if (this._saldo < valor){
            console.log("Saldo indisponivel");
            return;
        }
        else{
            const valorSacado = this.sacar(valor);
            conta.depositar(valorSacado);
        }
    }
}
