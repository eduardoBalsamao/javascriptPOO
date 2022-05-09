import {ContaCorrente} from "./ContaCorrente.js";
import {Cliente} from "./Cliente.js";

const cliente1 = new Cliente("Eduardo", 11122233389);
const cliente2 = new Cliente("Saulo", 88822233389);

const conta1 = new ContaCorrente(1001, cliente1);
//conta1.#saldo = 200; Error pois o saldo é um atributo privado.
conta1.depositar(200);
conta1.depositar(-1);

const conta2 = new ContaCorrente(1002, cliente2);


const valorSacado = conta1.sacar(100);
console.log("Valor sacado ", valorSacado);
console.log(conta1);
conta1.transferir(50, conta2)
console.log(conta2)
console.log(conta1)

//conta1.saldo = 3000; Error pois a classe ContaCorrente só tem getter.
console.log(conta1.cliente)
console.log(ContaCorrente.numeroDeContas);
