import { ref, watch } from "vue"

const dadosSalvos = localStorage.getItem("produtos")

export const produtos = ref(
  dadosSalvos ? JSON.parse(dadosSalvos) : []
)
export function adicionarProduto(produto){

  produtos.value.push({

    ...produto,

    disponivel: true

  })

}
export function removerProduto(produto){

  const index = produtos.value.indexOf(produto)
  if (index !== -1) {
    produtos.value.splice(index, 1)
  }
}
export function editarProduto(produtoAtualizado){

  const index =
    produtos.value.findIndex(p =>

      p === produtoAtualizado.original

    )

  if(index !== -1){

    produtos.value[index] =
      produtoAtualizado.novo

  }

}
export function alternarDisponibilidade(index){

  produtos.value[index].disponivel =
    !produtos.value[index].disponivel

}
watch(produtos, (novoValor) => {

  localStorage.setItem(
    "produtos",
    JSON.stringify(novoValor)
  )

}, { deep: true })