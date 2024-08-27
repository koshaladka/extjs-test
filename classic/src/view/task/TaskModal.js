Ext.define('MyApp.view.task.TaskModal', {
    extend: 'Ext.window.Window',
    xtype: 'taskmodal',
    title: 'Task Details',
    modal: true,
    width: 400,
    height: 300,
    layout: 'fit',
    items: [{
        xtype: 'form',
        items: [{
            xtype: 'textfield',
            name: 'id',
            fieldLabel: 'Task Number',
            bind: '{record.id}'
        }, {
            xtype: 'textfield',
            name: 'title',
            fieldLabel: 'Task Name',
            bind: '{record.title}'
        }, {
            xtype: 'textfield',
            name: 'name',
            fieldLabel: 'Name',
            bind: '{record.name}'
        }, {
            xtype: 'combobox',
            name: 'status',
            fieldLabel: 'Status',
            store: ['PLAN', 'IN PROGRESS', 'TESTING', 'DONE'],
            bind: '{record.status}'
        }, {
            xtype: 'combobox',
            name: 'importance',
            fieldLabel: 'Importance',
            store: ['MUST', 'SHOULD', 'COULD'],
            bind: '{record.importance}'
        }, {
            xtype: 'datefield',
            name: 'date',
            fieldLabel: 'Date',
            bind: '{record.date}'
        }],
        buttons: [{
            text: 'Save',
            handler: function() {
                var form = this.up('form').getForm();
                if (form.isValid()) {
                    form.updateRecord();
                    this.up('window').close();
                }
            }
        }, {
            text: 'Cancel',
            handler: function() {
                this.up('window').close();
            }
        }]
    }]
});
