const db = require('../db');

module.exports = {
  async findAll() {
    const [rows] = await db.query('SELECT * FROM marcas');
    return rows;
  },
  async findById(id) {
    const [rows] = await db.query('SELECT * FROM marcas WHERE id = ?', [id]);
    return rows[0];
  },
  async create(nome) {
    const [result] = await db.query('INSERT INTO marcas (nome) VALUES (?)', [nome]);
    return { id: result.insertId, nome };
  },
  async update(id, nome) {
    await db.query('UPDATE marcas SET nome = ? WHERE id = ?', [nome, id]);
  },
  async remove(id) {
    await db.query('DELETE FROM marcas WHERE id = ?', [id]);
  }
};