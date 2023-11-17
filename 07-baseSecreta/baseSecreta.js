var SistemaSeguranca = /** @class */ (function () {
    function SistemaSeguranca() {
        this.senhaBaseSecreta = "senha_secreta";
        // Construtor privado para evitar a criação de instâncias diretas
    }
    SistemaSeguranca.getInstance = function () {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    };
    SistemaSeguranca.prototype.acessarBaseSecreta = function (senha) {
        if (senha === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta!");
        }
        else {
            console.log("Acesso negado à Base Secreta!");
        }
    };
    SistemaSeguranca.instancia = null;
    return SistemaSeguranca;
}());
// Programa principal
var sistemaSeguranca = SistemaSeguranca.getInstance();
// Agente tenta acessar a Base Secreta com senha correta
sistemaSeguranca.acessarBaseSecreta("senha_secreta");
// Agente tenta acessar a Base Secreta com senha incorreta
sistemaSeguranca.acessarBaseSecreta("senha_incorreta");
// Tentando criar outra instância (não deve ser possível)
var outroSistemaSeguranca = SistemaSeguranca.getInstance();
console.log(sistemaSeguranca === outroSistemaSeguranca); // Deve imprimir true, indicando que é a mesma instância
