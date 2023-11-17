import {FrangoDesossado} from "./assets/js/frangoDesossado"
import {Pepperoni} from "./assets/js/addPepperoni.js"
import {QueijoParmesaoRalado} from "./assets/js/addQueijo.js"
import {Carne} from "./assets/js/carne.js"

  const meuSanduiche = new FrangoDesossado()
  const sanduicheComQueijo = new QueijoParmesaoRalado(meuSanduiche)
  const sanduicheComQueijoEPepperoni = new Pepperoni(sanduicheComQueijo)
  
  console.log(sanduicheComQueijoEPepperoni.getDescription() + " custa R$ " + sanduicheComQueijoEPepperoni.cost().toFixed(2))