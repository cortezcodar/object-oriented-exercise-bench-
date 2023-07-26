// Classe "Conta Bancária"
class ContaBancaria {
  protected saldo: number;

  constructor() {
    this.saldo = 0;
  }

  depositar(valor: number): void {
    if (valor > 0) {
      this.saldo += valor;
    }
  }

  sacar(valor: number): void {
    if (valor > 0 && valor <= this.saldo) {
      this.saldo -= valor;
    }
  }

  verificarSaldo(): number {
    return this.saldo;
  }
}

// Subclasse "Conta Poupança"
class ContaPoupanca extends ContaBancaria {
  private readonly juros: number = 0.02; // Taxa de juros de 2% para conta poupança

  calcularJuros(): void {
    const jurosCalculados = this.saldo * this.juros;
    this.depositar(jurosCalculados);
  }
}

// Subclasse "Conta Corrente"
class ContaCorrente extends ContaBancaria {
  private readonly limite: number;

  constructor(limite: number) {
    super();
    this.limite = limite;
  }

  sacar(valor: number): void {
    const saldoComLimite = this.saldo + this.limite;
    if (valor > 0 && valor <= saldoComLimite) {
      this.saldo -= valor;
    }
  }
}

// Exemplo de uso
const contaPoupanca = new ContaPoupanca();
contaPoupanca.depositar(1000);
contaPoupanca.calcularJuros();
console.log("Saldo da Conta Poupança:", contaPoupanca.verificarSaldo());

const contaCorrente = new ContaCorrente(500);
contaCorrente.depositar(2000);
contaCorrente.sacar(1500);
console.log("Saldo da Conta Corrente:", contaCorrente.verificarSaldo());
