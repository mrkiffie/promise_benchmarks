"use strict";
var Promise = require("./promise").Promise;

function defer(label) {
  var deferred = {
    // pre-allocate shape
    resolve: undefined,
    reject:  undefined,
    promise: undefined
  };

  deferred.promise = new Promise(function(resolve, reject) {
    deferred.resolve = resolve;
    deferred.reject = reject;
  }, label);

  return deferred;
}

exports.defer = defer;