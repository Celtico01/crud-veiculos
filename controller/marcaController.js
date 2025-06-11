const service = require('../service/marcaService');

module.exports = {
  async getAll(req, res) {
    const marcas = await service.getAll();
    res.json(marcas);
  },
  async getById(req, res) {
    const marca = await service.getById(req.params.id);
    if (marca) res.json(marca);
    else res.status(404).send('Marca não encontrada');
  },
  async create(req, res) {
    const novaMarca = await service.create(req.body);
    res.status(201).json(novaMarca);
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