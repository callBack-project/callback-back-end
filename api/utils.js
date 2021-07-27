const bcrypt = require('bcrypt')

const passwordSaltRounds = 10

const utils = {
  hashPassword(password){
    return bcrypt.hash(password, passwordSaltRounds);
  }
}
 
module.exports = utils