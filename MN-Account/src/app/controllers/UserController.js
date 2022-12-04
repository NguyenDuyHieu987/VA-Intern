const db = require('../../config/db');

class UserController {
  getUsers(req, res) {
    const sql = 'SELECT * FROM users';
    db.query(sql, (err, response) => {
      if (err) throw err;
      res.json(response);
    });
  }
}

module.exports = new UserController();
