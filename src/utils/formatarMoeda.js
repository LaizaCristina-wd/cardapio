export function formatarMoeda(valor){
 if (!valor) return ""

  valor = valor
    .toString()
    .replace(/[^\d]/g, "")

  valor = (Number(valor) / 100).toFixed(2)

  valor = valor
    .replace(".", ",")
    .replace(/\B(?=(\d{3})+(?!\d))/g, ".") //regex para adicionar pontos a cada 3 dígitos

  return `${valor}`
}