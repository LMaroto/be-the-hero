const connection = require('../database/index');
const crypto = require('crypto');

module.exports = {
  async index(req, res) {
    const ongs = await connection('ongs').select('*');

    return res.json(ongs);
  },

  async store(req, res) {
    const { name, email, whatsapp, city, uf } = req.body;

    /* Gerando ID aleatório para a ONG */
    const id = crypto.randomBytes(4).toString('HEX');

    await connection('ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    });

    return res.json({ id });
  }
};
