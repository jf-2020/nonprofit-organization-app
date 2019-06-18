const chai = require('chai'),
      expect = chai.expect,
      chaiAsPromised = require('chai-as-promised');

chai.use(chaiAsPromised).should();

const User = require('../models/m_user');

describe('Users model tests', () => {
    // Given an email addres, do we get a user object in return
    it('should be a valid user object', async () => {
        const userInstance = new User(null, null, null, null, null, null, null, null);    
        console.log("user:", userInstance);
        expect(userInstance).to.be.an('object');
    });
});