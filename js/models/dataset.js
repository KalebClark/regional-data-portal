define([
  'backbone'
],
function(Backbone) {
  'use strict';

  var Dataset = Backbone.Model.extend({
    initialize: function() {
      console.log('Init::Model::Dataset');
    }
  });
  return Dataset;
});
