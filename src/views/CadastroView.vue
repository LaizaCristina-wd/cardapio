<script setup>
import { reactive } from "vue"

const novoProduto = reactive({
  nome: "",
  preco: "",
  categoria: "Lanche"
})

function cadastrarProduto(){

  if(
    novoProduto.nome.trim() === "" ||
    novoProduto.preco === ""
  ){
    alert("Preencha todos os campos")
    return
  }

  console.log("Produto cadastrado:", {
    nome: novoProduto.nome,
    preco: novoProduto.preco,
    categoria: novoProduto.categoria
  })

  // limpar formulário
  novoProduto.nome = ""
  novoProduto.preco = ""
  novoProduto.categoria = "Lanche"
}
</script>

<template>

  <div class="container">

    <h2>Cadastrar produto</h2>

    <div class="form">

      <input
        v-model="novoProduto.nome"
        placeholder="Nome do produto"
      />

      <input
        v-model="novoProduto.preco"
        type="number"
        placeholder="Preço"
      />

      <select v-model="novoProduto.categoria">
        <option>Lanche</option>
        <option>Bebida</option>
        <option>Sobremesa</option>
      </select>

      <button @click="cadastrarProduto">
        cadastrar
      </button>

    </div>

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

.form{
  display:flex;
  flex-direction:column;
  gap:10px;
}

input, select{
  padding: 10px;
  border-radius: 8px;
  border: 1px solid #ddd;
}

button{
  padding: 10px;
  border-radius: 8px;
  border: none;
  background: #22c55e;
  color: white;
  cursor: pointer;
}

button:hover{
  background: #16a34a;
}

</style>