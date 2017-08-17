const dbConnection = require('../database/db_connection');

const checkPw = (userLogin, callback) => {
  const checkPwQuery = 'SELECT password FROM users WHERE username = $1';
  const checkPwArray = [userLogin];

  dbConnection.query(checkPwQuery, checkPwArray, (err, res) => { //conect between addUserArray to dbConnection
    if (err) {
      return callback(err)
    } else {
      console.log("success pulling pw");
      callback(null, res.rows[0]) // null cuz we don't have a error
    }
  })

}

module.exports = checkPw;
