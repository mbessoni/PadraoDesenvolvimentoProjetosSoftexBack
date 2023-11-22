// Interface Strategy
class OperationStrategy {
    execute(num1, num2) {}
}

// Implementações concretas das estratégias
class AdditionStrategy extends OperationStrategy {
    execute(num1, num2) {
        return num1 + num2;
    }
}

class SubtractionStrategy extends OperationStrategy {
    execute(num1, num2) {
        return num1 - num2;
    }
}

class MultiplicationStrategy extends OperationStrategy {
    execute(num1, num2) {
        return num1 * num2;
    }
}

// Contexto que utiliza a estratégia selecionada
class Calculator {
    constructor(strategy) {
        this.strategy = strategy;
    }

    setStrategy(strategy) {
        this.strategy = strategy;
    }

    performOperation(num1, num2) {
        return this.strategy.execute(num1, num2);
    }
}

// Função principal
function main() {
    const num1 = parseInt(prompt("Digite o primeiro número: "));
    const num2 = parseInt(prompt("Digite o segundo número: "));
    const operation = prompt("Digite a operação (+ para soma, - para subtração, * para multiplicação): ");

    // Criar instância da estratégia com base na operação informada
    let strategy;
    switch (operation) {
        case '+':
            strategy = new AdditionStrategy();
            break;
        case '-':
            strategy = new SubtractionStrategy();
            break;
        case '*':
            strategy = new MultiplicationStrategy();
            break;
        default:
            console.log("Operação inválida.");
            return;
    }

    // Criar a calculadora com a estratégia selecionada
    const calculator = new Calculator(strategy);

    // Realizar a operação e imprimir o resultado
    const result = calculator.performOperation(num1, num2);
    console.log(`Resultado da operação: ${result}`);
}

main();

//A classe OperationStrategy é a interface Strategy, e as implementações concretas (AdditionStrategy, SubtractionStrategy, MultiplicationStrategy) herdam dessa interface.

//A função principal (main) usa prompt para receber input do usuário, cria a instância da estratégia com base na operação informada e, em seguida, realiza a operação usando a calculadora.