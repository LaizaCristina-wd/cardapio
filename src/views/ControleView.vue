<script setup>
import { formatarMoeda } from "../utils/formatarMoeda"
import { reactive, computed, ref } from "vue"
import { produtos, editarProduto, removerProduto, alternarDisponibilidade } from "../store/produtos"

const editandoIndex = ref(null)
const produtoEditando = ref({
  nome: "",
  preco: "",
  categoria: "categoria",
  descricao: ""
})
function iniciarEdicao(produto){
  const index = produtos.value.findIndex(p => p.id === produto.id)
  editandoIndex.value = index 
  produtoEditando.value = {
    ...produtos.value[index]
  }
}
function atualizarPrecoEdicao(event){
  produtoEditando.value.preco =
    formatarMoeda(event.target.value)
}
function salvarEdicao(){
   editarProduto({
    ...produtoEditando.value,
    categoria: produtoEditando.value.categoria.toLowerCase().trim()
  })
  editandoIndex.value = null
}
function cancelarEdicao(){
  editandoIndex.value = null
}
const filtro = reactive({
  categoria: "todas"
})
const produtosFiltrados = computed(() => {
  if (filtro.categoria === "todas"){
    return produtos.value
  }
  return produtos.value.filter(
    produto => produto.categoria === filtro.categoria)
})
const totalProdutos = computed(() => produtos.value.length)

const totalPorCategoria = computed(() => {
  console.log(produtos.value)
  return {
    lanche: produtos.value.filter(p => p.categoria === "lanche").length,
    bebida: produtos.value.filter(p => p.categoria === "bebida").length,
    sobremesa: produtos.value.filter(p => p.categoria === "sobremesa").length
  }
})
</script>

<template>
  <div class="container">
    <h2>Controle de Cardápio</h2>
    <div class="cards-resumo">
    <div>Total: {{ totalProdutos }}</div>
    <div>🍔 Lanche {{ totalPorCategoria.lanche }}</div>
    <div>🥤 Bebida {{ totalPorCategoria.bebida }}</div>
    <div>🍰 Sobremesa {{ totalPorCategoria.sobremesa }}</div>
  </div>

  <div class="filtros">
   <label>Filtrar por categoria:</label>
    <select v-model="filtro.categoria">
      <option value="todas">Todas</option>
      <option value="lanche">Lanche</option>
      <option value="bebida">Bebida</option>
      <option value="sobremesa">Sobremesa</option>
    </select>
  </div>

  <div v-if="editandoIndex !== null "class="form-edicao">
  <h3>Editando produto</h3>
  <input
    id="nome"
    name="nome"
    v-model="produtoEditando.nome"
    placeholder="Nome"
   >
  <input
    id="preco"
    name="preco"
    :value="produtoEditando.preco"
    @input="atualizarPrecoEdicao"
    placeholder="Preço"
    >
  <textarea
    id="descricao"
    name="descricao"
    v-model="produtoEditando.descricao"
    placeholder="Descrição"
   ></textarea>
  <select id="categoria" name="categoria" 
  v-model="produtoEditando.categoria">
    <option value="lanche">Lanche</option>
    <option value="bebida">Bebida</option>
    <option value="sobremesa">Sobremesa</option>
  </select>

    <div class="acoes">
      <button class="color-btn" @click="salvarEdicao">
      Salvar
      </button>
      <button class="second-color-btn" @click="cancelarEdicao">
      Cancelar
      </button>
    </div>
  </div>

  <ul class="filtros">
    <li v-for="produto in produtosFiltrados" :key="produto.id"
      :class="{indisponivel: !produto.disponivel}">
      <div>
        <strong>{{ produto.nome }}</strong>
        <br>
          <small>{{ produto.descricao }}</small>
        <br>
          <p>{{ produto.preco }}</p>
        
          <small>{{ produto.categoria }}</small>
      </div>
      
      <div class="acoes">
        <button
         @click="alternarDisponibilidade(produto.id)">
         {{ produto.disponivel? "Disponível" : "Indisponível"}}
        </button>
        <button class="color-btn" @click="iniciarEdicao(produto)">
        Editar
        </button>
        <button class="second-color-btn" @click="removerProduto(produto)">
        Remover
        </button>
      </div>
    </li>
  </ul>
</div>
</template>

<style scoped>
.form-edicao{
  margin-bottom:20px;
  padding:15px;
  background:#f3f4f6;
  border-radius:8px;
  display:flex;
  flex-direction:column;
  gap:8px;
}

.acoes{
  display:flex;
  gap:6px;
}

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
  transition: 0.3s;
}
.indisponivel{
    opacity: 0.4;
}
.color-btn{
  background: #6e6868;
  color: white;
}
.second-color-btn{
  background: #6e6868 ;
  color: white;
}
button{
  padding: 6px 10px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
}

button:hover{
  background: #99ad93;
}

</style>