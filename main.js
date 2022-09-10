// aqui estamos chamando o modulo superHero e suas funções
import Hero, { printHeroName, printHeroPower } from './superHero.js'

// estanciamos o objeto com o nome Hero vindo de superHero
const hero = new Hero('Homeland', 'Ser um fdp')

// metodos que tbm foram exportados
printHeroName(hero)
printHeroPower(hero)

// obs.: toda vez que formos utilizar modulos javascript é necessario na chamada do arquivo no html inserir o tipo de arquivo conforme abaixo:
// <script type="module" src="main.js"></script>