<script setup>
import { reactive } from "vue"
import { produtos } from "../store/produtos"

const novoProduto = reactive({
  nome: "",
  preco: "",
  categoria: "Lanche"
})

function formatarMoeda(valor){

  valor = valor.replace(/\D/g, "")

  valor = (Number(valor) / 100).toFixed(2)

  valor = valor.replace(".", ",")

  valor = valor.replace(
    /\B(?=(\d{3})+(?!\d))/g,
    "."
  )

  return "R$ " + valor
}


function atualizarPreco(event){

  novoProduto.preco =
    formatarMoeda(event.target.value)

}

function cadastrarProduto(){

  if(
    novoProduto.nome.trim() === "" ||
    novoProduto.preco === ""
  ){
    alert("Preencha todos os campos")
    return
  }

  produtos.value.push({
    nome: novoProduto.nome,
    preco: novoProduto.preco,
    categoria: novoProduto.categoria,
    disponivel: true
  })


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
        :value="novoProduto.preco"
        @input="atualizarPreco"
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
  border-radius: 8px; border: 1px solid #ddd;
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