export class Cliente {

    //_cpf; //Atributo privado

    get cpf(){
        return this._cpf;
    }

    constructor (nome, cpf, senha) { //Construtor
        this.nome = nome;
        this._cpf = cpf;
        this._senha = senha;
    }
}