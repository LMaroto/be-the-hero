const connection = require("../database/index");

module.exports = {
  async store(req, res) {
    const { id } = req.body;

    const ong = await connection("ongs")
      .where("id", id)
      .select("name")
      .first();

    if (!ong) {
      return res.status(400).json({ error: "No ong found with this id." });
    }

    return res.json(ong);
  }
};
