export class Cliente {

    //_cpf; //Atributo privado

    get cpf(){
        return this._cpf;
    }

    constructor (nome, cpf) { //Construtor
        this.nome = nome;
        this._cpf = cpf;
    }
}