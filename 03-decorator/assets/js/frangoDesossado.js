import { Sanduiche } from "./sanduiche.js"

export class FrangoDesossado extends Sanduiche {
    constructor() {
      super()
      this.description += " frango desossado"
    }
  
    cost() {
      return 4.50
    }
  }