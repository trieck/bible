Ext.define('bible.store.Detail', {
    extend: 'Ext.data.Store',
    model: 'bible.model.Record',
    requires: [ 'bible.lib.CustomXmlReader' ],
    pageSize: 1,
    proxy: {
        type: 'ajax',
        url: '/content/ContentServlet',
        limitParam: false,
        pageParam: false,
        startParam: false,
        extraParams: {
            'function': 'getdoc'
        },

        reader: {
            type: 'custom-xml',
            record: 'record',
            idProperty: '@docid',
            totalProperty: false,
            successProperty: false
        }
    },
    listeners: {
        beforeload: function (store, operation) {
            var proxy = store.getProxy(),
                summary = Ext.getStore("Summary");

            proxy.setExtraParam('db', summary.db);
            proxy.setExtraParam('query', summary.query);
        }
    }
});