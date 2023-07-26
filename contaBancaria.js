var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Classe "Conta Bancária"
var ContaBancaria = /** @class */ (function () {
    function ContaBancaria() {
        this.saldo = 0;
    }
    ContaBancaria.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    };
    ContaBancaria.prototype.sacar = function (valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        }
    };
    ContaBancaria.prototype.verificarSaldo = function () {
        return this.saldo;
    };
    return ContaBancaria;
}());
// Subclasse "Conta Poupança"
var ContaPoupanca = /** @class */ (function (_super) {
    __extends(ContaPoupanca, _super);
    function ContaPoupanca() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.juros = 0.02; // Taxa de juros de 2% para conta poupança
        return _this;
    }
    ContaPoupanca.prototype.calcularJuros = function () {
        var jurosCalculados = this.saldo * this.juros;
        this.depositar(jurosCalculados);
    };
    return ContaPoupanca;
}(ContaBancaria));
// Subclasse "Conta Corrente"
var ContaCorrente = /** @class */ (function (_super) {
    __extends(ContaCorrente, _super);
    function ContaCorrente(limite) {
        var _this = _super.call(this) || this;
        _this.limite = limite;
        return _this;
    }
    ContaCorrente.prototype.sacar = function (valor) {
        var saldoComLimite = this.saldo + this.limite;
        if (valor > 0 && valor <= saldoComLimite) {
            this.saldo -= valor;
        }
    };
    return ContaCorrente;
}(ContaBancaria));
// Exemplo de uso
var contaPoupanca = new ContaPoupanca();
contaPoupanca.depositar(1000);
contaPoupanca.calcularJuros();
console.log("Saldo da Conta Poupança:", contaPoupanca.verificarSaldo());
var contaCorrente = new ContaCorrente(500);
contaCorrente.depositar(2000);
contaCorrente.sacar(1500);
console.log("Saldo da Conta Corrente:", contaCorrente.verificarSaldo());
