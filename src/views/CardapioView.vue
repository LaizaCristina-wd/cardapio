<script setup>
import { produtos } from "../store/produtos"
</script>
<template>
  <section>
    <h1>Visualizar Cardápio</h1>

    <div v-if="produtos.length" class="grid">
      <article
        v-for="produto in produtos"
        :key="produto.id"
        class="card"
        :class="{ indisponivel: !produto.disponivel }"
      >
        <h2>{{ produto.nome }}</h2>
        <p class="descricao">{{ produto.descricao }}</p>
        <p class="preco">{{ produto.preco }}</p>
        <span class="categoria">{{ produto.categoria }}</span>
      </article>
    </div>

    <p v-else class="vazio">Nenhum produto cadastrado ainda.</p>
  </section>
</template>
<style scoped>
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

.card {
  padding: 20px;
  border-radius: 16px;
  background: white;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.08);
}

.card.indisponivel {
  opacity: 0.4;
  filter: grayscale(100%);
}

h1 {
  text-align: center;
  margin-bottom: 30px;
}

h2 {
  margin-bottom: 10px;
}

.descricao {
  color: #4b5563;
  margin-bottom: 18px;
}

.preco {
  font-size: 1.1rem;
  font-weight: 700;
  margin-bottom: 10px;
}

.categoria {
  display: inline-block;
  padding: 6px 12px;
  border-radius: 999px;
  background: #f3f4f6;
  color: #374151;
  font-size: 0.9rem;
}

.vazio {
  text-align: center;
  color: #6b7280;
  font-size: 1rem;
  margin-top: 40px;
}
</style>