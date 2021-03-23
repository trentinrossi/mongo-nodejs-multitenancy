const Person = require('./person.model');

class PersonRepository {
  list(conditions = {}, paging = {}) {
    return Person.find(conditions)
      .skip(paging.offset)
      .limit(paging.limit)
      .sort(paging.sort)
      .lean();
  }

  count(conditions = {}) {
    return Person.countDocuments(conditions);
  }

  findOne(conditions = {}, projection = {}, options = {}) {
    return Person.findOne(conditions, projection, options).lean();
  }

  create(respondent) {
    return Person.create(respondent);
  }

  updateOne(email, respondent) {
    return Person.updateOne({ email }, { $set: respondent });
  }

  delete(email) {
    return Person.deleteOne({ email });
  }

  deleteAll() {
    return Person.deleteMany();
  }
}

module.exports = new PersonRepository();
