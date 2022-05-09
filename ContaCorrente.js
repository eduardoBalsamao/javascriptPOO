import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

export class ContaCorrente extends Conta{
    static numeroDeContas = 0;
    //#saldo; proposta https://github.com/tc39/proposal-class-fields#private-fields

    constructor (cliente, agencia) {
        super(0, cliente, agencia); //Referencia o construtor da classe pai (Conta)
        ContaCorrente.numeroDeContas += 1;
    }
}
