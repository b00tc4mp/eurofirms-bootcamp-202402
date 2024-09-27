function map(object, callback) {
  var result = {};
  for (let i = 0; i < object.length; i++) {
    result[i] = callback(object[i]);
  }
  result.length = object.length;
  return result;
}

var users = {
  0: { username: 'Maria', password: '12345678' },
  1: { username: 'Juan', password: '11111111' },
  2: { username: 'Marco', password: '22222222' },
  length: 3,
};

var callback = function (user) {
  return user.username;
};
console.log('---------------MAP----------------');

var resultMap = map(users, callback);
console.log(resultMap);
