/** Works as interface **/
module.exports = class UserRepository {
    async create(user){
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async update(user) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async delete(userId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async get(userId) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async list() {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }

    async getUserByEmail(email) {
        throw new Error('ERR_METHOD_NOT_IMPLEMENTED');
    }
}