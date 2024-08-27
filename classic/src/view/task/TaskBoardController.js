Ext.define('MyApp.view.task.TaskBoardController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.taskboard',
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
