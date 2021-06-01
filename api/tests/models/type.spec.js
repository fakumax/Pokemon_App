const { Type, conn } = require('../../src/db.js');
const { expect } = require('chai');

describe('Type model', () => {
  before(() => conn.authenticate()
    .catch((err) => {
      console.error('Unable to connect to the database:', err);
    }));
  describe('Validators', () => {
    beforeEach(() => Type.sync({ force: true }));
    describe('Id and Name', () => {
      
      it('should throw an error if name is null', (done) => {
        Type.create({id:4})
          .then(() => done(new Error('It requires a valid name')))
          .catch(() => done());
      });
      it('should work when its a valid id and name', () => {
        Type.create({ id: 4 ,name: 'Air'});
      });
    });
  });
});
