//error = new RangeError('shoes are small')
//error = new TypeError('shoes are not for football')
error = new ReferenceError('nike shoes are not here')

if (error instanceof RangeError) alert('wrong shoes number')
else if (error instanceof TypeError) alert('wrong shoes type')
else if (error instanceof ReferenceError) alert('shoes do not exist here')

