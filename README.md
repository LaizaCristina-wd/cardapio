#  Sistema de Cardápio

Aplicação desenvolvida com Vue 3 para cadastro, edição e visualização de produtos.

---

## Como rodar o projeto

### 🔹 Localmente

npm install  
npm run dev  

Acesse:
http://localhost:5173  

---

### Com Docker

npm run build  
docker compose up -d  

Acesse:
http://localhost:8080  

---

## Funcionalidades

- Cadastro de produtos
- Edição de produtos
- Remoção de produtos
- Filtro por categoria
- Controle de disponibilidade
- Pré visualização do cardápio

---

## Conceitos aplicados

### Reatividade
- **ref** (referência reativa individual)
  - ControleView.vue (~linha 18) - produtoEditando
  
- **reactive** (objeto reativo)
  - CadastroView.vue (~linha 13) - novoProduto
  - ControleView.vue (~linha 44) - filtro

### Two-way Binding
- **v-model** - binding básico
  - CadastroView.vue (~linha 77) - select categoria
  - ControleView.vue (~linha 82) - select filtro
  
- **v-model.trim** - binding com modifier para remover espaços
  - CadastroView.vue (~linhas 53, 62) - input nome, textarea descrição

### Propriedades Computadas
- **computed** - valores derivados reativos
  - ControleView.vue (~linha 49) - produtosFiltrados
  - ControleView.vue (~linha 57) - totalProdutos
  - ControleView.vue (~linha 59) - totalPorCategoria

### Eventos
- **@input** - evento de entrada em tempo real
  - CadastroView.vue (~linha 67) - atualizarPreco no input preço
  - ControleView.vue (~linha 99) - atualizarPrecoEdicao
  
- **@click** - eventos de clique
  - ControleView.vue (~linhas 143, 147, 151) - botões salvar, cancelar, remover

- **@submit.prevent** - prevenção de envio de formulário
  - CadastroView.vue (~linha 50) - form submit

### Renderização Condicional
- **v-if** - renderização condicional
  - ControleView.vue (~linha 91) - mostrar formulário de edição
  - CardapioView.vue (~linha 8) - mostrar grid de produtos
  
- **v-else** - alternativa quando condição é falsa
  - CardapioView.vue (~linha 22) - mensagem quando sem produtos

### Renderização de Listas
- **v-for** - loop sobre arrays
  - CadastroView.vue (~linha 75) - loop categorias em options
  - ControleView.vue (~linha 82) - loop categorias em select
  - CardapioView.vue (~linha 9) - loop produtos em articles

- **:key** - identificação única de elementos
  - CadastroView.vue (~linha 76) - key em option
  - ControleView.vue (~linha 83) - key em option
  - CardapioView.vue (~linha 10) - key="produto.id" em article

### Classes Dinâmicas
- **:class** - classes CSS condicionais
  - ControleView.vue (~linha 138) - :class="{ indisponivel: !produto.disponivel }"
  - CardapioView.vue (~linha 12) - :class="{ indisponivel: !produto.disponivel }"

### Operadores
- **Spread operator (...)** - desestruturação e cópia de objetos
  - CadastroView.vue (~linha 39) - spread ao criar novo produto
  - ControleView.vue (~linha 21, 35, 101) - spread ao copiar/editar produtos

### Roteamento
- **RouterLink** - navegação entre rotas
  - App.vue (~linhas 9-24) - links de navegação
  
- **RouterView** - placeholder para renderizar componentes
  - App.vue (~linha 27) - onde os componentes de página são renderizados

### Destructuring
- **Destructuring de imports** - importar seletivamente
  - Todos os componentes utilizam (ex: `import { reactive, computed, ref }`)

### Métodos/Funções
- Funções reutilizáveis com lógica de negócio
  - CadastroView.vue: atualizarPreco, limparFormulario, cadastrarProduto
  - ControleView.vue: iniciarEdicao, salvarEdicao, cancelarEdicao, atualizarPrecoEdicao