Ext.define('MyApp.view.task.TaskGridController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskgrid',
    onDrop: function(node, data, overModel, dropPosition, eOpts) {
        var record = data.records[0];
        record.set('status', overModel.get('status'));
        record.save();
    },
    onItemClick: function(view, record, item, index, e, eOpts) {
        var modal = Ext.create('MyApp.view.task.TaskModal', {
            viewModel: {
                data: {
                    record: record
                }
            }
        });
        modal.show();
    }
});
