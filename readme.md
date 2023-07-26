# Conta Bancária em TypeScript

Este é um projeto em TypeScript que implementa uma classe "Conta Bancária" com métodos para depositar, sacar e verificar o saldo. Além disso, foram criadas subclasses "Conta Poupança" e "Conta Corrente" com regras específicas para cada tipo de conta.
## Como testar

Certifique-se de ter o Node.js instalado no seu sistema.

1. Clone este repositório para o seu ambiente local.

2. Navegue até a pasta do projeto através do terminal ou prompt de comando.

3. Execute o comando `npm install` para instalar as dependências do projeto.

4. Abra o arquivo `contaBancaria.ts` e adicione o código fornecido neste arquivo.

5. Execute o comando `tsc ContaBancaria.ts` para compilar o código TypeScript.

5. Execute o comando `node ContaBancaria.js` para executar o arquivo de teste.

7. O resultado do teste será exibido no console.


## Classe "Conta Bancária"

A classe "Conta Bancária" representa uma conta genérica em um banco. Ela possui os seguintes métodos:

### Construtor

#### `new ContaBancaria()`

Cria uma nova instância da classe "Conta Bancária" com saldo inicial zerado.

### Métodos

#### `depositar(valor: number): void`

Realiza um depósito na conta bancária. O `valor` do depósito deve ser um número positivo.

#### `sacar(valor: number): void`

Realiza um saque na conta bancária. O `valor` do saque deve ser um número positivo e não pode exceder o saldo disponível.

#### `verificarSaldo(): number`

Retorna o saldo atual da conta bancária.

## Classe "Conta Poupança"

A classe "Conta Poupança" é uma subclasse da "Conta Bancária" e possui regras específicas para contas poupança.

### Construtor

#### `new ContaPoupanca()`

Cria uma nova instância da classe "Conta Poupança" com saldo inicial zerado e uma taxa de juros de 2% (configurada por padrão).

### Métodos

#### `calcularJuros(): void`

Calcula os juros da conta poupança e adiciona ao saldo.

## Classe "Conta Corrente"

A classe "Conta Corrente" é uma subclasse da "Conta Bancária" e possui regras específicas para contas correntes.

### Construtor

#### `new ContaCorrente(limite: number)`

Cria uma nova instância da classe "Conta Corrente" com saldo inicial zerado e um limite de crédito especificado.

### Métodos

#### `sacar(valor: number): void`

Realiza um saque na conta corrente. O `valor` do saque deve ser um número positivo e pode exceder o saldo disponível até o limite de crédito.

---
