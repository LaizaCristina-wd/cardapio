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

- Reatividade (ref, reactive)

  CadastroView.vue (~linha 5)

  ControleView.vue (~linha 34)

- Computed (filtro de produtos)

  ControleView.vue(~linhas 37-46)

- Eventos (@click)

  ControleView.vue (~linhas 104-134)

- Eventos (@input)

  CadastroView.vue (~linha 50)

  ControleView.vue (~linha 87)

- v-model (two-way binding)

  CadastroView.vue (linhas 41-53)

  ControleView.vue (linhas 67-97)

- v-if (renderização condicional) 

  ControleView.vue (~linha 75)

- v-for (renderização de listas) 

  CardapioView.vue (~linha 9)

  ControleView.vue (~linha 114)

- :key (identificação de elementos em listas) 

  CardapioView.vue (~linha 11)

  ControleView.vue (~linha 114)

- :class (classes dinâmicas) 

  CardapioView.vue (~linha 12)
  ControleView.vue (~linha 115)

- Spread operator (...)