import {Cliente} from "./Cliente.js";
import { Gerente } from "./Funcionario/Gerente.js";
import { Diretor } from "./Funcionario/Diretor.js";
import { SistemaAutenticacao } from "./SistemaAutenticacao.js";

const diretor =  new Diretor("Edu", 10000, 11122233390);
const gerente = new Gerente("Thiago", 5000, 22211133389);

diretor.cadastrarSenha("123456");
gerente.cadastrarSenha("123")

const logado = SistemaAutenticacao.login(diretor, "123456");
const logado2 = SistemaAutenticacao.login(gerente, "123");

console.log(logado)
console.log(logado2)

const cliente = new Cliente("Debora", 78945612379, "456");
const logado3 = SistemaAutenticacao.login(cliente, "456");
console.log(logado3)