const Marca = require('../model/marcaModel');

module.exports = {
  getAll: () => Marca.findAll(),
  getById: (id) => Marca.findById(id),
  create: (data) => Marca.create(data.nome),
  update: (id, data) => Marca.update(id, data.nome),
  remove: (id) => Marca.remove(id),
};