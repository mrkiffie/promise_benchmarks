function filterFn(entry) {
  return false;
}

export var suite = {
  name: "filter none 1000",
  needs: 'filter',
  initialize: function(Constructor) {
    var array = [ ];
    for (var i = 0; i < 1000; i++) {
      array.push('');
    }
    return array;
  },
  test: function(filter, testInstance, array) {
    filter(array, filterFn).then(function() {
      testInstance.end();
    });
  },
  options: {
    defer: true
  }
};