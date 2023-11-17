class SistemaSeguranca {
    private static instancia: SistemaSeguranca | null = null;
    private senhaBaseSecreta: string = "senha_secreta";

    private constructor() {
        // Construtor privado para evitar a criação de instâncias diretas
    }

    public static getInstance(): SistemaSeguranca {
        if (!SistemaSeguranca.instancia) {
            SistemaSeguranca.instancia = new SistemaSeguranca();
        }
        return SistemaSeguranca.instancia;
    }

    public acessarBaseSecreta(senha: string): void {
        if (senha === this.senhaBaseSecreta) {
            console.log("Acesso concedido à Base Secreta!");
        } else {
            console.log("Acesso negado à Base Secreta!");
        }
    }
}

// Programa principal
const sistemaSeguranca = SistemaSeguranca.getInstance();

// Agente tenta acessar a Base Secreta com senha correta
sistemaSeguranca.acessarBaseSecreta("senha_secreta");

// Agente tenta acessar a Base Secreta com senha incorreta
sistemaSeguranca.acessarBaseSecreta("senha_incorreta");

// Tentando criar outra instância (não deve ser possível)
const outroSistemaSeguranca = SistemaSeguranca.getInstance();
console.log(sistemaSeguranca === outroSistemaSeguranca); // Deve imprimir true, indicando que é a mesma instância
