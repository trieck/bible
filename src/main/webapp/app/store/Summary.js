Ext.define('bible.store.Summary', {
    extend: 'Ext.data.Store',
    model: 'bible.model.Record',
    requires: [ 'bible.lib.CustomXmlReader' ],
    pageSize: 25,
    proxy: {
        type: 'ajax',
        url: '/content/ContentServlet',
        limitParam: 'count',
        pageParam: false,
        extraParams: {
            'function': 'search'
        },

        reader: {
            type: 'custom-xml',
            record: 'record',
            root: 'results',
            idProperty: '@docid',
            totalProperty: '@count',
            successProperty: false
        }
    },
    listeners: {
        beforeload: function (store, operation) {
            var proxy = store.getProxy(),
                db = Ext.getCmp('bibleVersion').getValue(),
                query = Ext.String.format("text[{0}]", Ext.getCmp('searchText').getValue()),
                start = (operation.start || 0) + 1;

            proxy.setExtraParam('db', db);
            proxy.setExtraParam('query', query);
            proxy.setExtraParam('start', start);
        },

        load: function (store, records, successful) {
            if (successful) {
                var reader = store.getProxy().getReader();
                var root = reader.xmlData.documentElement;
                store.db = reader.getNodeValue(Ext.DomQuery.selectNode("@db", root));
                store.query = reader.getNodeValue(Ext.DomQuery.selectNode("@query", root));
                store.query_time = reader.getNodeValue(Ext.DomQuery.selectNode("@query-time", root));
            }
        }
    }
});