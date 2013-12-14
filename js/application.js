define([
  'backbone',
  'models/dataset',
  'collections/datasets'
],
function(Backbone, Dataset, Datasets) {
  'use strict';

  var _this = this;

  var MainView = Backbone.View.extend({
    el: $('#content'),
    initialize: function() {
      console.log('Init::View::MainView');
      var ds = new Datasets();
      ds.fetch();
      this.render();
      setTimeout(function() {
        console.log(ds);
      },3000);
    },
    render: function() {
       console.log('Render::MainView');
      
    }
  });
  var mainview = new MainView();

});
