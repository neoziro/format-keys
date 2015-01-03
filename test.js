var formatKeys = require('./index');
var assert = require('assert');

describe('#formatKeys', function() {

  it('should format keys for object', function () {
    var object = { foo: 'bar', deep: { kung: 'foo' }, ar: [{ foo: 'bar' }] };
    var formattedObject = formatKeys(object, Function.call.bind(''.toUpperCase));
    assert.deepEqual(formattedObject, { FOO: 'bar', DEEP: { KUNG: 'foo' }, AR: [{ FOO: 'bar' }] });
  });

  it('should format keys for array of objects', function() {
    var obj = [
      {
        foo: 'foo',
        bar: 'bar',
        baz: {
          foo: 'foo'
        }
      },
      {
        foo: 'foo'
      }
    ];
    var formatted = formatKeys(obj, Function.call.bind(''.toUpperCase));
    assert.deepEqual(formatted, [
      {
        FOO: 'foo',
        BAR: 'bar',
        BAZ: {
          FOO: 'foo'
        }
      },
      {
        FOO: 'foo'
      }
    ]);
  });

});
