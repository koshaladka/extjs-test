Ext.define('MyApp.view.task.TaskGrid', {
    extend: 'Ext.grid.Panel',
    xtype: 'taskgrid',
    requires: [
        'MyApp.view.task.TaskGridController',
        'MyApp.view.task.TaskModal'
    ],
    controller: 'taskgrid',
    store: {
        type: 'tasks'
    },
    columns: [{
        text: 'Task Number',
        dataIndex: 'id',
        flex: 1
    }, {
        text: 'Task Name',
        dataIndex: 'title',
        flex: 1
    }, {
        text: 'Name',
        dataIndex: 'name',
        flex: 1
    }, {
        text: 'Status',
        dataIndex: 'status',
        flex: 1
    }, {
        text: 'Importance',
        dataIndex: 'importance',
        flex: 1
    }, {
        text: 'Date',
        dataIndex: 'date',
        flex: 1
    }],
    viewConfig: {
        plugins: {
            ptype: 'gridviewdragdrop',
            dragGroup: 'taskDDGroup',
            dropGroup: 'taskDDGroup'
        },
        listeners: {
            drop: 'onDrop'
        }
    },
    listeners: {
        itemclick: 'onItemClick'
    }
});
