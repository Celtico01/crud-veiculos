const service = require('../service/veiculoService');

module.exports = {
  async getAll(req, res) {
    const veiculos = await service.getAll();
    res.json(veiculos);
  },
  async getById(req, res) {
    const veiculo = await service.getById(req.params.id);
    if (veiculo) res.json(veiculo);
    else res.status(404).send('Veículo não encontrado');
  },
  async create(req, res) {
    const novoVeiculo = await service.create(req.body);
    res.status(201).json(novoVeiculo);
  },
  async update(req, res) {
    await service.update(req.params.id, req.body);
    res.sendStatus(204);
  },
  async remove(req, res) {
    await service.remove(req.params.id);
    res.sendStatus(204);
  }
};