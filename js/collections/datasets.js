define([
  'backbone',
  'models/dataset'
],
function(Backbone, Dataset) {
  'use strict';

  var base_url  = "http://api.data.cityofsacramento.org/datastreams/search/";
  var api_key   = "a2640ba7039e1e1ddf3d75588a76bb56636db3a0";

  var Datasets = Backbone.Collection.extend({
    model: Dataset,
    url: '/libs/php/curl.php',
    fetch: function() {
      var collection = this;
      $.ajax({
        url: '/libs/php/curl.php',
        async: true,
        data: {
          url: base_url,
          auth_key: api_key,
          query: 'quotes' 
        },
        success: function(data) {
          data = eval('('+data+')');
          /* Sac data portal sometimes returns nothing.
           *   Checking here, and refire if failed.
           *   *Need to wait 1.5sec between calls.
           * ========================================== */
          if(data.length == 0 || data.length == undefined) {
            setTimeout(function() {
              console.log('Funky::API::Fail Try again');   
              collection.fetch();
            },1500);
          }
          collection.reset(data)
        }
         
      });
    },
    initialize: function() {
      console.log('Init::Collection::Datasets');  
/*
      this.fetch({
        async: false,
        add: true,
        data: {
          url: base_url,
          auth_key: api_key,
          query: 'quotes' 
        },
        processData: true,
        success: function(collection, response) {
          console.log('len', response.length)
          console.log(collection.models);
          collection.parse(response);
        }
      });
*/
    },
/*
    parse: function(res) {
      $.each(res,function(index,val) {
        res[index].api_id = res[index].id;
        res[index].id = index;
      });
      console.log('parse',res);
      return res;
    } 
*/
  });

  return Datasets;
});
