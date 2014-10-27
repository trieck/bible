Ext.define('bible.store.Content', {
    extend: 'Ext.data.Store',
    model: 'bible.model.Content',
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
        }
    }
});