Ext.define('MyApp.model.Task', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'id', type: 'number' },
        { name: 'number', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'name', type: 'string' },
        { name: 'status', type: 'string' },
        { name: 'importance', type: 'string' },
        { name: 'date', type: 'date' }
    ]
});
