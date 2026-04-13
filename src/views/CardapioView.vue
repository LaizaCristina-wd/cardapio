<script setup>
import {
  produtos
} from "../store/produtos"
</script>
<template>
<h1>Preview do Cardápio</h1>
<div class="grid">
  <div
    v-for="(produto, index) in produtos"
      :key="index"
      class="card">
        <h2>
          {{ produto.nome }}
        </h2>
        <br>
      <small>{{ produto.descricao }}</small>
        <p>
          R$ {{ produto.preco }}
        </p>
      <small>
        {{ produto.categoria }}
      </small>
   
  </div>
</div>
</template>
<style scoped>
  .grid{
    display: grid;
    grid-template-columns:
    repeat( auto-fill, minmax(220px,1fr));
    gap: 20px;
  }
  .card{
    padding: 20px;
    border-radius: 12px;
    background: white;
    box-shadow: 0 2px 8px #ddd;
  }

  h1{
    text-align: center;
    margin-bottom: 30px;
  }
   h2{
    margin-bottom: 10px;
  }
   p{
    font-size: 18px;
    font-weight: bold;
    margin: 10px 0;
  }
   small{
    color: #555;
  }
  button{
      margin-top: 15px;
      padding: 8px 14px;
      border: none;
      border-radius: 6px;
      background: #22c55e;
      color: white;
      cursor: pointer;
  }
</style>