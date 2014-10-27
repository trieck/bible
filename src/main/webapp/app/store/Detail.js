Ext.define('bible.store.Detail', {
    extend: 'Ext.data.Store',
    model: 'bible.model.Detail',
    requires: [ 'bible.lib.CustomXmlReader' ],
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
                summary = Ext.getStore("Summary"),
                db = summary.db,
                query = summary.query;

            proxy.setExtraParam('db', db);
            proxy.setExtraParam('query', query);
        }
    }
});