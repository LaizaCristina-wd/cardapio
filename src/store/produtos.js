import { ref, watch } from "vue"

const dadosSalvos = localStorage.getItem("produtos")

export const produtos = ref(
  dadosSalvos ? JSON.parse(dadosSalvos) : []
)

watch(produtos, (novoValor) => {

  localStorage.setItem(
    "produtos",
    JSON.stringify(novoValor)
  )

}, { deep: true })