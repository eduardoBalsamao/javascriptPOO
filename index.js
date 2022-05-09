import {ContaCorrente} from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js";
import { Conta } from "./Conta.js";
import { ContaPoupanca } from "./ContaPoupanca.js";


const cliente1 = new Cliente("Eduardo", 11122233389);
const cliente2 = new Cliente("Saulo", 88822233389);

const conta1 = new ContaCorrente(100, cliente1, 1001);
//conta1.#saldo = 200; Error pois o saldo é um atributo privado.
conta1.depositar(200);
conta1.depositar(-1);

const conta2 = new ContaCorrente(200, cliente2, 1002);


const valorSacado = conta1.sacar(100);
console.log("Valor sacado ", valorSacado);
console.log("____________________________________");
console.log(conta1);
conta1.transferir(50, conta2)
console.log("____________________________________");
console.log(conta2)
console.log("____________________________________");
console.log(conta1)

//conta1.saldo = 3000; Error pois a classe ContaCorrente só tem getter.
console.log("Numero de contas: ",ContaCorrente.numeroDeContas);
console.log("____________________________________");
const conta3 = new ContaPoupanca(50, 1001, cliente1);
conta3.depositar(100);
console.log(conta3)
