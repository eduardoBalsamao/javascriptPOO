export class Conta{
    constructor(saldoInicial, agencia, cliente) {
        this._saldo = saldoInicial;
        this._agencia = agencia;
        this._cliente = cliente;
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