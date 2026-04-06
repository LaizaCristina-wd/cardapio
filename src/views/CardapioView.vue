<script setup>
import { reactive, computed, ref } from "vue"

const produtos = ref([
  {
    nome: "X-Burger",
    preco: 18,
    categoria: "Lanche"
  },
  {
    nome: "Coca-cola",
    preco: 6,
    categoria: "Bebida"
  },
  {
    nome: "Pudim",
    preco: 9,
    categoria: "Sobremesa"
  }
])

function removerProduto(index){
  produtos.value.splice(index, 1)
}

const filtro = reactive({
  categoria: "todas"
})

const produtosFiltrados = computed(() => {

  if (filtro.categoria === "todas"){
    return produtos.value
  }

  return produtos.value.filter(
    produto => produto.categoria === filtro.categoria
  )

})
</script>

<template>

  <div class="container">

    <h2>Cardápio</h2>

    <div class="filtros">

      <label>Filtrar por categoria:</label>

      <select v-model="filtro.categoria">

        <option value="todas">Todas</option>
        <option value="Lanche">Lanche</option>
        <option value="Bebida">Bebida</option>
        <option value="Sobremesa">Sobremesa</option>

      </select>

    </div>

    <ul>

      <li
        v-for="(produto, index) in produtosFiltrados"
        :key="index"
      >

        <div>

          <strong>{{ produto.nome }}</strong>

          <br>

          R$ {{ produto.preco }}

          <br>

          <small>{{ produto.categoria }}</small>

        </div>

        <button @click="removerProduto(index)">
          remover
        </button>

      </li>

    </ul>

  </div>

</template>

<style scoped>

.container{
  max-width: 420px;
  margin: 40px auto;
  padding: 25px;
  background: white;
  border-radius: 12px;
  box-shadow: 0 10px 25px rgba(0,0,0,0.08);
}

.filtros{
  margin-bottom: 20px;
  display:flex;
  flex-direction:column;
  gap:6px;
}

select{
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

ul{
  list-style: none;
  padding: 0;
}

li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #f9fafb;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
}

button{
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  background: #ef4444;
  color: white;
  cursor: pointer;
}

button:hover{
  background: #dc2626;
}

</style>