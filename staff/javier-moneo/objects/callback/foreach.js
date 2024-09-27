function map(object, callback) {
  for (let i = 0; i < object.length; i++) {
    callback(object[i]);
  }
}

var users = {
  0: { username: 'Maria', password: '12345678' },
  1: { username: 'Juan', password: '11111111' },
  2: { username: 'Marco', password: '22222222' },
  length: 3,
};

var callback = function (user) {
  console.log(user.username);
};

map(users, callback);
