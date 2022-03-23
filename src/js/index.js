/* 
Quando clicar no pokémon da listagem, temos que esconder o cartão do pokémon aberto e mostrar o cartão correspondente ao que foi selecionado na listagem.

Pra isso vamos precisar trabalhar com dois elementos:

1 - Listagem
2 - Cartão do pokémon


Precisamos criar duas variáveis no JS pra trabalhar com os elementos da tela

Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémon:

1 - Remover a classe "aberto" apenas do cartão que está sendo exibido

2 - Ao clicar em algum pokémon da listagem selecionaremos o id deste pokémon para saber qual cartão mostrar

3 - Remover a classe "ativo", que marca o Pokémon selecionado

4 - Adicionar a classe "ativo" no item da lista selecionado
*/

// Variáveis do JS pra trabalhar com os elementos da tela.

const listaSelecaoPokemons = document.querySelectorAll(".pokemon")

const pokemonsCard = document.querySelectorAll(".cartao-pokemon")

listaSelecaoPokemons.forEach(pokemon => {
    //Vamos precisar trabalhar com um evento de clique feito pelo usuário na listagem de pokémons

    pokemon.addEventListener('click', () => {
        //Remover a classe 'aberto' apenas do cartão aberto.

        const cartaoPokemonAberto = document.querySelector('.aberto')
        cartaoPokemonAberto.classList.remove('aberto')

        // Ao clicar em algum pokémon da listagem selecionaremos o id deste pokémon para saber qual cartão mostrar
        const idPokemonSelecionado = pokemon.attributes.id.value
        
        const idDoCartaoPokemonParaAbrir = `cartao-${idPokemonSelecionado}`

        const cartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        cartaoPokemonParaAbrir.classList.add('aberto')

        //Remover a classe "ativo", que marca o Pokémon selecionado

        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        //Adicionar a classe "ativo" no item da lista selecionado

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})