const db = require('../db');

module.exports = {
  async findAll() {
    const [rows] = await db.query('SELECT * FROM veiculos');
    return rows;
  },
  async findById(id) {
    const [rows] = await db.query('SELECT * FROM veiculos WHERE id = ?', [id]);
    return rows[0];
  },
  async create(modelo, marca_id) {
    const [result] = await db.query('INSERT INTO veiculos (modelo, marca_id) VALUES (?, ?)', [modelo, marca_id]);
    return { id: result.insertId, modelo, marca_id };
  },
  async update(id, modelo, marca_id) {
    await db.query('UPDATE veiculos SET modelo = ?, marca_id = ? WHERE id = ?', [modelo, marca_id, id]);
  },
  async remove(id) {
    await db.query('DELETE FROM veiculos WHERE id = ?', [id]);
  }
};