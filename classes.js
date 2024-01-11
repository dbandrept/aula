/* Exemplo de classe + encapsulamento */

class Individuo {
    constructor(nome,apelido,datanascimento,genero="",publicidade=false,obs=""){
        this.Nome=nome;
        this.Apelido=apelido;
        this.DataNascimento=datanascimento;

        this.Genero=genero;
        this.Publicidade=publicidade;
        this.Obs=obs;
    }

    NomeCompleto(){
        return this.Nome +" "+ this.Apelido;
    }

    Idade(){
        var hoje=new Date();
        var datanascimento =new Date(this.DataNascimento);
        var idade=hoje.getFullYear() - this.datanascimento.getFullYear();

        return idade;
    }

    

    
}