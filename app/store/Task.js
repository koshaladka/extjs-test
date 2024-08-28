Ext.define('MyApp.store.Tasks', {
    extend: 'Ext.data.Store',
    alias: 'store.tasks',
    model: 'MyApp.model.Task',
    proxy: {
        type: 'localstorage',
        id: 'tasks'
    },
    data: [
        { id: 1, number: 'TSK-0001', title: 'Task 1', name: 'Андрей', status: 'PLAN', importance: 'MUST', date: '2023-10-01' },
        { id: 2, number: 'TSK-0002', title: 'Task 2', name: 'Сергей', status: 'IN PROGRESS', importance: 'SHOULD', date: '2023-10-02' },
        { id: 3, number: 'TSK-0003', title: 'Task 3', name: 'Андрей', status: 'TESTING', importance: 'COULD', date: '2023-10-03' },
        { id: 4, number: 'TSK-0004', title: 'Task 4', name: 'Сергей', status: 'DONE', importance: 'MUST', date: '2023-10-04' },
        { id: 5, number: 'TSK-0005', title: 'Task 5', name: 'Андрей', status: 'PLAN', importance: 'SHOULD', date: '2023-10-05' },
        { id: 6, number: 'TSK-0006', title: 'Task 6', name: 'Сергей', status: 'IN PROGRESS', importance: 'COULD', date: '2023-10-06' },
        { id: 7, number: 'TSK-0007', title: 'Task 7', name: 'Андрей', status: 'TESTING', importance: 'MUST', date: '2023-10-07' },
        { id: 8, number: 'TSK-0008', title: 'Task 8', name: 'Сергей', status: 'DONE', importance: 'SHOULD', date: '2023-10-08' },
        { id: 9, number: 'TSK-0009', title: 'Task 9', name: 'Андрей', status: 'PLAN', importance: 'COULD', date: '2023-10-09' },
        { id: 10, number: 'TSK-0010', title: 'Task 10', name: 'Сергей', status: 'IN PROGRESS', importance: 'MUST', date: '2023-10-10' }
    ],
    sorters: [
        { property: 'name', direction: 'ASC' },
        { property: 'importance', direction: 'DESC' }
    ]
});
