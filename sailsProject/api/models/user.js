var User = {
  attributes: {
  	userName: {
  		type:'string',
  		minLength: 5,
  		maxLength: 20,
  		required: true
  	},
    firstName: 'STRING',
    lastName: 'STRING',
    emailAddress: {
      type: 'email', // Email type will get validated by the ORM
      required: true
    }
  }
};

module.exports = User;