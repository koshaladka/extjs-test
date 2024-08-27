Ext.define('MyApp.view.task.TaskBoard', {
    extend: 'Ext.panel.Panel',
    xtype: 'taskboard',
    requires: [
        'MyApp.view.task.TaskBoardController',
        'MyApp.view.task.TaskModal'
    ],
    controller: 'taskboard',
    layout: 'column',
    defaults: {
        columnWidth: 0.25,
        padding: 10
    },
    items: [{
        xtype: 'panel',
        title: 'PLAN',
        items: [{
            xtype: 'dataview',
            store: {
                type: 'tasks',
                filters: [{
                    property: 'status',
                    value: 'PLAN'
                }]
            },
            itemSelector: 'div.task-item',
            tpl: [
                '<tpl for=".">',
                '<div class="task-item" style="background-color: {[this.getImportanceColor(values.importance)]};">',
                '<h3>{id}</h3>',
                '<p>{title}</p>',
                '</div>',
                '</tpl>',
                {
                    getImportanceColor: function(importance) {
                        switch (importance) {
                            case 'MUST':
                                return 'red';
                            case 'SHOULD':
                                return 'yellow';
                            case 'COULD':
                                return 'green';
                            default:
                                return 'white';
                        }
                    }
                }
            ],
            listeners: {
                itemclick: 'onItemClick'
            }
        }]
    }, {
        xtype: 'panel',
        title: 'IN PROGRESS',
        items: [{
            xtype: 'dataview',
            store: {
                type: 'tasks',
                filters: [{
                    property: 'status',
                    value: 'IN PROGRESS'
                }]
            },
            itemSelector: 'div.task-item',
            tpl: [
                '<tpl for=".">',
                '<div class="task-item" style="background-color: {[this.getImportanceColor(values.importance)]};">',
                '<h3>{id}</h3>',
                '<p>{title}</p>',
                '</div>',
                '</tpl>',
                {
                    getImportanceColor: function(importance) {
                        switch (importance) {
                            case 'MUST':
                                return 'red';
                            case 'SHOULD':
                                return 'yellow';
                            case 'COULD':
                                return 'green';
                            default:
                                return 'white';
                        }
                    }
                }
            ],
            listeners: {
                itemclick: 'onItemClick'
            }
        }]
    }, {
        xtype: 'panel',
        title: 'TESTING',
        items: [{
            xtype: 'dataview',
            store: {
                type: 'tasks',
                filters: [{
                    property: 'status',
                    value: 'TESTING'
                }]
            },
            itemSelector: 'div.task-item',
            tpl: [
                '<tpl for=".">',
                '<div class="task-item" style="background-color: {[this.getImportanceColor(values.importance)]};">',
                '<h3>{id}</h3>',
                '<p>{title}</p>',
                '</div>',
                '</tpl>',
                {
                    getImportanceColor: function(importance) {
                        switch (importance) {
                            case 'MUST':
                                return 'red';
                            case 'SHOULD':
                                return 'yellow';
                            case 'COULD':
                                return 'green';
                            default:
                                return 'white';
                        }
                    }
                }
            ],
            listeners: {
                itemclick: 'onItemClick'
            }
        }]
    }, {
        xtype: 'panel',
        title: 'DONE',
        items: [{
            xtype: 'dataview',
            store: {
                type: 'tasks',
                filters: [{
                    property: 'status',
                    value: 'DONE'
                }]
            },
            itemSelector: 'div.task-item',
            tpl: [
                '<tpl for=".">',
                '<div class="task-item" style="background-color: {[this.getImportanceColor(values.importance)]};">',
                '<h3>{id}</h3>',
                '<p>{title}</p>',
                '</div>',
                '</tpl>',
                {
                    getImportanceColor: function(importance) {
                        switch (importance) {
                            case 'MUST':
                                return 'red';
                            case 'SHOULD':
                                return 'yellow';
                            case 'COULD':
                                return 'green';
                            default:
                                return 'white';
                        }
                    }
                }
            ],
            listeners: {
                itemclick: 'onItemClick'
            }
        }]
    }]
});
