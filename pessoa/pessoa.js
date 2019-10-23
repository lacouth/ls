class Pessoa{
    
    constructor(nome, idade, sexo, data){
        this._nome = nome
        this._idade = idade
        this._sexo = sexo
        this._data = data
       
    }
    apresentar(){
        return `Olá, meu nome é ${this._nome}, eu tenho ${this._idade} anos `;
    }

    setNome(n){
        this._nome = n
    }

    getNome(){
        return this._nome;
    }

    setIdade(i){
        this._idade = i
    }

    getIdade(){
        return this._idade
    }
    
    setSexo(x){
        this._sexo = x
    }

    getSexo(){
        return this._sexo
    }

    setIdade(i){
        this._idade = i
    }

    getIdade(){
        return this._idade
    }


}

let p = new Pessoa("Patric",36,"M","08/08/1983")
p.setNome('Lacouth')
console.log(p.apresentar())