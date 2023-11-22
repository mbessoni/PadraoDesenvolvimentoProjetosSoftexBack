// Observer class
class Editor {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notify(event, data) {
        this.observers.forEach(observer => observer.update(event, data));
    }
}

// Concrete Observer class
class TextEditor extends Editor {
    constructor() {
        super();
        this.lines = [];
    }

    insertLine(lineNumber, text) {
        this.lines.splice(lineNumber, 0, text);
        this.notify('lineInserted', { lineNumber, text });
    }

    removeLine(lineNumber) {
        const removedLine = this.lines.splice(lineNumber, 1)[0];
        this.notify('lineRemoved', { lineNumber, removedLine });
    }

    saveToFile() {
        this.notify('save', { content: this.lines.join('\n') });
    }
}

// Concrete Observer class to handle events
class ConsoleObserver {
    update(event, data) {
        switch (event) {
            case 'lineInserted':
                console.log(`Line ${data.lineNumber} inserted: ${data.text}`);
                break;
            case 'lineRemoved':
                console.log(`Line ${data.lineNumber} removed: ${data.removedLine}`);
                break;
            case 'save':
                console.log('Content saved to file:\n', data.content);
                break;
            default:
                break;
        }
    }
}

// Main function
function main() {
    const textEditor = new TextEditor();
    const consoleObserver = new ConsoleObserver();

    // Subscribe the console observer to the text editor
    textEditor.addObserver(consoleObserver);

    console.log("Enter text. Type 'EOF' on a new line to save and exit.");

    // Receive lines of text from the user
    let lineNumber = 0;
    let userInput = '';

    while (userInput !== 'EOF') {
        userInput = prompt(`Enter text for line ${lineNumber + 1}: `);
        if (userInput !== 'EOF') {
            textEditor.insertLine(lineNumber, userInput);
            lineNumber++;
        }
    }

    // Save content to file and print the content
    textEditor.saveToFile();
}

// Run the application
main();


//Editor é a classe observável (Observable) e TextEditor é uma subclasse que implementa as funcionalidades específicas de um editor de texto. 
//A classe ConsoleObserver é um observador concreto que lida com eventos e imprime mensagens no console.
//A função main simula a interação do usuário, solicitando linhas de texto até que "EOF" seja digitado. 
//O conteúdo é então salvo em um arquivo (simulado pelo método saveToFile) e impresso no console.