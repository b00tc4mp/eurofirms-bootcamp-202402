function filter(object, callback) {
  var result = { length: 0 };
  for (let i = 0; i < object.length; i++) {
    var valueCallback = callback(object[i]);
    if (valueCallback) {
      result[result.length] = object[i];
      result.length++;
    }
  }

  return result;
}

var users = {
  0: { username: 'Maria', password: '12345678' },
  1: { username: 'Juan', password: '11111111' },
  2: { username: 'Marco', password: '22222222' },
  3: { username: 'Alejandra', password: '22222222' },
  4: { username: 'Juliana', password: '22222222' },
  length: 5,
};

var callback = function (user) {
    return user.username.length > 5
};
console.log('---------------FILTER----------------');

var resultFilter = filter(users, callback);
console.log(resultFilter);
