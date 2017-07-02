const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
      users = new Users();
      users.users = [{
        id: '1',
        name: 'Mike',
        room: 'Node Course'
      }, {
        id: '2',
        name: 'Jen',
        room: 'React Course'
      }, {
        id: '3',
        name: 'Julie',
        room: 'Node Course'
      }];
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '123',
      name: 'Herman',
      room: 'The Office Fans'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var resUser = users.removeUser('1');

    expect(resUser.id).toBe('1');
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var resUser = users.removeUser('123');

    expect(resUser).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var resUser = users.getUser('3');

    expect(resUser.id).toBe('3');
  });

  it('should not find user', () => {
    var resUser = users.getUser('123');

    expect(resUser).toNotExist();
  });

  it('should return names for node course', () => {
    var userList = users.getUserList('Node Course');

    expect(userList).toEqual(['Mike', 'Julie']);
  });

  it('should return names for react course', () => {
    var userList = users.getUserList('React Course');

    expect(userList).toEqual(['Jen']);
  });
});
