import { ref, watch } from "vue"

const dadosSalvos = localStorage.getItem("produtos")
export const produtos = ref(
  dadosSalvos ? JSON.parse(dadosSalvos).map(p =>({...p,
    categoria: p.categoria?.toLowerCase() || ""
  })): []
)

export function adicionarProduto(produto) {
  produtos.value.push({
    ...produto,
    id: crypto.randomUUID(),
    disponivel: true
  })
}

export function removerProduto(produto) {
  const index = produtos.value.findIndex(p => p.id === produto.id)
  if (index !== -1) {
    produtos.value.splice(index, 1)
  }
}

export function editarProduto(produtoAtualizado) {
  const index = produtos.value.findIndex(p => p.id === produtoAtualizado.id)
  if (index !== -1) {
    produtos.value[index] = {
      ...produtoAtualizado,
      categoria: produtoAtualizado.categoria?.toLowerCase() || ""
    }
  }
}

export function alternarDisponibilidade(id) {
  const produto = produtos.value.find(p => p.id === id)
  if (produto) {
    produto.disponivel = !produto.disponivel
  }
}

watch(produtos, (novoValor) => {
  localStorage.setItem("produtos", JSON.stringify(novoValor))
}, { deep: true })
