class Jogador {
    nivel;
    saldoVitorias = 0;
    vitorias = 0;
    derrotas = 0;

    constructor(vitorias, derrotas) {
        this.vitorias = vitorias;
        this.derrotas = derrotas;
        this.calcularSaldo();
        this.calcularNivel();
        console.log("O Herói tem de saldo de "+this.saldoVitorias+" está no nível de "+this.nivel);
    }
    
    calcularSaldo() {
        this.saldoVitorias = this.vitorias - this.derrotas;
        return this.vitorias - this.derrotas;
    }

    calcularNivel() {
        if(this.saldoVitorias <= 10) {this.nivel = "Ferro"}
        else if(this.saldoVitorias >= 11 && this.saldoVitorias <= 20) {this.nivel = "Bronze"}
        else if(this.saldoVitorias >= 21 && this.saldoVitorias <= 50) {this.nivel = "Prata"}
        else if(this.saldoVitorias >= 51 && this.saldoVitorias <= 80) {this.nivel = "Ouro"}
        else if(this.saldoVitorias >= 81 && this.saldoVitorias <= 90) {this.nivel = "Diamante"}
        else if(this.saldoVitorias >= 91 && this.saldoVitorias <= 100) {this.nivel = "Lendário"}
        else if(this.saldoVitorias >= 101) {this.nivel = "Imortal"}
    }
}
function gerarVariosJogadores(quantidadeParaGerar) {
    function gerarJogador() {
        return new Jogador(Math.floor(Math.random() * (100 + 1)), Math.floor(Math.random() * (50 + 1)));
    }
    for(let i = 0; i<=quantidadeParaGerar; i++) {
        gerarJogador();
    }
}

gerarVariosJogadores(10);



