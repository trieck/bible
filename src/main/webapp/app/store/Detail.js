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
        beforeload: function (store) {
            var proxy = store.getProxy(),
                summary = Ext.getStore("Summary");

            proxy.setExtraParam('db', summary.db);
            proxy.setExtraParam('query', summary.query);
        },

        load: function (store, records, successful) {
            if (successful) {
                var reader = store.getProxy().getReader();
                var root = reader.xmlData.documentElement;
                store.db = reader.getNodeValue(Ext.DomQuery.selectNode("@db", root));
                store.docid = reader.getNodeValue(Ext.DomQuery.selectNode("@docid", root));
                store.query = reader.getNodeValue(Ext.DomQuery.selectNode("@query", root));
                store.book = reader.getNodeValue(Ext.DomQuery.selectNode("//book", root));
                store.chapter = reader.getNodeValue(Ext.DomQuery.selectNode("//chapter", root));
            }
        }
    }
});