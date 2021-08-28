const bcrypt = require('bcrypt')
const { User } = require('../db/models')

const passwordSaltRounds = 10

const utils = {
  hashPassword (password){
    return bcrypt.hash(password, passwordSaltRounds);
  },

  comparePassword (password, hash) {
    return bcrypt.compare(password, hash)
  },

  async getByEmail(email) {
    if (typeof email !== 'string') {
      throw Error('Error in [get]: Need at least 1 query value passed, email')
    }
    
    return await User.findOne({
      where: {
        email
      }
    })
  },

  async isExistingUser(email) {
    const user = await utils.getByEmail(email)

    return !!user
  }
}
 
module.exports = utils