Ext.define('MyApp.view.main.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.main',
    init: function() {
        var store = Ext.getStore('tasks');
        store.load();
    }
});
