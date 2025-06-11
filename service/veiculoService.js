const Veiculo = require('../model/veiculoModel');

module.exports = {
  getAll: () => Veiculo.findAll(),
  getById: (id) => Veiculo.findById(id),
  create: (data) => Veiculo.create(data.modelo, data.marca_id),
  update: (id, data) => Veiculo.update(id, data.modelo, data.marca_id),
  remove: (id) => Veiculo.remove(id),
};