import { Adicional } from "./adicional.js"

export class QueijoParmesaoRalado extends Adicional {
    constructor(sanduiche) {
      super(sanduiche)
      this.description += " com queijo parmesão ralado"
    }
  
    cost() {
      return this.sanduiche.cost() + 2.00
    }
  }
  