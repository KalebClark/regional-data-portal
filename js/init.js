require.config({
  deps: ['application'], 

  shim: {
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    } 
  }, 
  paths: {
    jquery:       '../libs/javascript/jquery/jquery',
    jqueryui:     '../libs/javascript/jqueryui/jqueryui',
    underscore:   '../libs/javascript/underscore/underscore',
    backbone:     '../libs/javascript/backbone/backbone'  
  } 
});
