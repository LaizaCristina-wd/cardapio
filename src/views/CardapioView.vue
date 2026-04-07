<script setup>
import { formatarMoeda } from "../utils/formatarMoeda"
import { reactive, computed, ref } from "vue"
import { produtos } from "../store/produtos"
const editandoIndex = ref(null)

const produtoEditando = ref({
  nome: "",
  preco: "",
  categoria: "Lanche",
  descricao: "",
  //disponivel: true
})
function editarProduto(index){

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

  produtos.value[editandoIndex.value] = {
    ...produtoEditando.value
  }

  editandoIndex.value = null

}
function cancelarEdicao(){
  editandoIndex.value = null
}

function removerProduto(index){
  produtos.value.splice(index, 1)
}

/*function alternarDisponibilidade(index){
  produtos.value[index].disponivel =
    !produtos.value[index].disponivel
}
*/
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

    <h2>Controle de Cardápio</h2>

    <div class="filtros">

      <label>Filtrar por categoria:</label>

      <select v-model="filtro.categoria">

        <option value="todas">Todas</option>
        <option value="Lanche">Lanche</option>
        <option value="Bebida">Bebida</option>
        <option value="Sobremesa">Sobremesa</option>

      </select>

    </div>
    <div
    v-if="editandoIndex !== null"
   class="form-edicao"
   >

   <h3>Editando produto</h3>

   <input
    v-model="produtoEditando.nome"
    placeholder="Nome"
   >

  <input
    v-model="produtoEditando.preco"
     @input="atualizarPrecoEdicao"
    placeholder="Preço"
   >
   <textarea
      v-model="produtoEditando.descricao"
      placeholder="Descrição"
    ></textarea>

  <select v-model="produtoEditando.categoria">

    <option>Lanche</option>
    <option>Bebida</option>
    <option>Sobremesa</option>

  </select>

     <div class="acoes">

      <button @click="salvarEdicao">
        salvar
      </button>

      <button @click="cancelarEdicao">
        cancelar
      </button>

  </div>

</div>

    <ul>

      <li
        v-for="(produto, index) in produtosFiltrados"
        :key="index"
        :class="{ indisponivel: !produto.disponivel }"
      >

        <div>

          <strong>{{ produto.nome }}</strong>

          <br>

           <small>{{ produto.descricao }}</small>

          <br>

          R$ {{ produto.preco }}

          <br>

          <small>{{ produto.categoria }}</small>

        </div>
        
        <div class="acoes">
         <!-- <button
          class="toggle"
          @click="alternarDisponibilidade(index)"
          >
         {{ produto.disponivel ? "Disponível" : "Indisponível" }}
         </button> -->
          <button @click="editarProduto(index)">
          Editar
          </button>
        <button @click="removerProduto(index)">
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
.indisponivel{
  opacity: 0.45;
}
.acoes{
  display:flex;
  gap:6px;
}

.toggle{
  background:#f59e0b;
}

.toggle:hover{
  background:#d97706;
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