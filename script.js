
async function fetchUsers() {// Função  para buscar dados da API e preencher a tabela
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');//  requisição HTTP para a API e aguarda a resposta
      const users = await response.json();// Converte o corpo da resposta em JSON e aguarda o resultado
      const tableBody = document.querySelector('#userTable tbody');// elemento <tbody> da tabela para inserir os dados
      tableBody.innerHTML = '';// Limpa o conteúdo do <tbody> (remove a mensagem "Carregando...")
  
      // Itera sobre o array de usuários retornado pela API
      users.forEach(user => {
        const row = document.createElement('tr');// Cria um novo elemento <tr> (linha) para cada usuário
        // Formata o endereço completo do usuário como uma string
        const address = `${user.address.street}, ${user.address.suite}, 
                         ${user.address.city}, ${user.address.zipcode}`;
  
        // Formata as coordenadas geográficas (latitude e longitude)
        const coordinates = `Lat: ${user.address.geo.lat}, Lng: ${user.address.geo.lng}`;
  
        
        const company = `${user.company.name} - ${user.company.catchPhrase}`;// Formata as informações da empresa (nome e slogan)
  
        // Preenche a linha da tabela com os dados do usuário
        row.innerHTML = `
          <td>${user.id}</td>         <!-- ID do usuário -->
          <td>${user.name}</td>       <!-- Nome completo do usuário -->
          <td>${user.username}</td>   <!-- Nome de usuário (username) -->
          <td>${user.email}</td>      <!-- Email do usuário -->
          <td>${user.phone}</td>      <!-- Telefone do usuário -->
          <td>${user.website}</td>    <!-- Website do usuário -->
          <td>${address}</td>         <!-- Endereço completo -->
          <td>${coordinates}</td>     <!-- Coordenadas geográficas -->
          <td>${company}</td>         <!-- Nome e slogan da empresa -->
        `;
  
        // Adiciona a nova linha ao <tbody> da tabela
        tableBody.appendChild(row);
      });
  
    } catch (error) {
      // Em caso de erro, exibe a mensagem de erro no console
      console.error('Erro ao buscar usuários:', error);
  
      // Exibe uma mensagem de erro na tabela se a API falhar
      const tableBody = document.querySelector('#userTable tbody');
      tableBody.innerHTML = '<tr><td colspan="9">Erro ao carregar dados.</td></tr>';
    }
  }
  
  // Adiciona um "listener" para executar a função fetchUsers assim que a página carregar
  window.addEventListener('DOMContentLoaded', fetchUsers);
  