const axios = require('axios');

const baseURL = 'http://localhost:3000/api';

async function testarAPI() {
  try {
    console.log('=== Testando Marcas ===');

    // Criar nova marca
    const novaMarca = await axios.post(`${baseURL}/marcas`, {
      nome: 'Toyota'
    });
    console.log('Marca criada:', novaMarca.data);

    const marcaId = novaMarca.data.id || novaMarca.data._id;

    // Buscar todas as marcas
    const marcas = await axios.get(`${baseURL}/marcas`);
    console.log('Marcas existentes:', marcas.data);

    // Buscar marca por ID
    const marca = await axios.get(`${baseURL}/marcas/${marcaId}`);
    console.log('Marca por ID:', marca.data);

    // Atualizar marca
    const marcaAtualizada = await axios.put(`${baseURL}/marcas/${marcaId}`, {
      nome: 'Toyota Atualizada'
    });
    console.log('Marca atualizada:', marcaAtualizada.data);

    // Deletar marca
    await axios.delete(`${baseURL}/marcas/${marcaId}`);
    console.log('Marca deletada com sucesso.');

    console.log('\n=== Testando Veículos ===');

    // Criar novo veículo
    const novoVeiculo = await axios.post(`${baseURL}/veiculos`, {
      modelo: 'Corolla',
      ano: 2024,
      marcaId: marcaId // Pode adaptar isso conforme o schema do seu banco
    });
    console.log('Veículo criado:', novoVeiculo.data);

    const veiculoId = novoVeiculo.data.id || novoVeiculo.data._id;

    // Buscar todos os veículos
    const veiculos = await axios.get(`${baseURL}/veiculos`);
    console.log('Veículos existentes:', veiculos.data);

    // Buscar veículo por ID
    const veiculo = await axios.get(`${baseURL}/veiculos/${veiculoId}`);
    console.log('Veículo por ID:', veiculo.data);

    // Atualizar veículo
    const veiculoAtualizado = await axios.put(`${baseURL}/veiculos/${veiculoId}`, {
      modelo: 'Corolla Altis',
      ano: 2025,
      marcaId: marcaId
    });
    console.log('Veículo atualizado:', veiculoAtualizado.data);

    // Deletar veículo
    await axios.delete(`${baseURL}/veiculos/${veiculoId}`);
    console.log('Veículo deletado com sucesso.');

  } catch (error) {
    console.error('Erro durante os testes:', error.response?.data || error.message);
  }
}

testarAPI();
