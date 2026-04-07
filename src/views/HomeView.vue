<template>
  <div class="home">
    <h1 class="text-center text-success mb-4">Controle de Produtos</h1>

    <h2>Gerencie seu cardápio de forma simples</h2>

    <p>
      Este sistema permite cadastrar produtos do seu restaurante,
      organizar por categoria e visualizar o cardápio.
    </p>

    <div class="acoes">

      <router-link to="/cadastro">
        <button>Cadastrar produtos</button>
      </router-link>

      <router-link to="/cardapio">
        <button>Ver cardápio</button>
      </router-link>

    </div>

  </div>
</template>

<style scoped>

.home{
  max-width: 600px;
  margin: 40px auto;
  text-align: center;
}

p{
  margin: 20px 0;
  color: #555;
}

.acoes{
  display: flex;
  justify-content: center;
  gap: 15px;
}

button{
  padding: 10px 18px;
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