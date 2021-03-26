const pagingHelper = require('../../helpers/paging.helper');
const filterHelper = require('../../helpers/filter.helper');
const repository = require('./person.repository');

class PersonService {
  async list(params) {
    const query = filterHelper.build(params);
    const paging = pagingHelper.build(params);
    const total = await repository.count(query);
    const data = await repository.list(query, paging);

    return {
      meta: pagingHelper.resolve(paging, total),
      data,
    };
  }

  async getByEmail(email) {
    return repository.findOne({ email });
  }

  async insert(person) {
    return repository.create(person);
  }

  async update(email, person) {
    return repository.updateOne(email, person);
  }

  async delete(email) {
    return repository.delete(email);
  }

  async deleteAll() {
    return repository.deleteAll();
  }
}

module.exports = new PersonService();
