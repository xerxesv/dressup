var WolfRouter = Backbone.Router.extend( {
    
    routes: {
      'a/:save': 'save',
      'a':'index'
    }
});

var router = new WolfRouter();
