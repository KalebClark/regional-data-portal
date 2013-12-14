define([
  'backbone',
  'collections/datasets',
  'text!tmpl/datasetsview.htm'
],
function(Backbone, Datasets, dsViewTemplate) {
  'use strict';  

  var ds = new Datasets();

  var dataSetsView = Backbone.View.extend({
    template: _.template(dsViewTemplate),
    el: $('#content'),
    collection: ds,
    initialize: function() {
      var _this = this;
      console.log('Init::View::MainView');
      //var ds = new Datasets();
      this.collection.fetch();
      setTimeout(function() {
        console.log(ds);
        _this.render();
      },3000);
    },
    render: function() {
      var _this = this;
       console.log('Render::MainView', this.collection);
       $.each(this.collection.models, function(index,val) {
        //_this.$el.append(_this.template(_this.collection[index].toJSON));  
        _this.$el.append(_this.template(val.collection.models[index].toJSON()));
        console.log(val.collection.models[index]);
        //_this.$el.append(_this.collection[index]);
       });
       //this.$el.html(this.template(this.collection.toJSON()));
       return this;
    }
  });
  return dataSetsView;

})
