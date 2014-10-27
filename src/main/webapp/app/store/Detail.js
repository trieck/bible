Ext.define('bible.store.Detail', {
    extend: 'Ext.data.Store',
    model: 'bible.model.Detail',
    requires: [ 'bible.lib.CustomXmlReader' ],
    proxy: {
        type: 'ajax',
        url: '/content/ContentServlet',
        extraParams: {
            'function': 'getdoc'
        },

        reader: {
            type: 'custom-xml',
            record: 'record',
            root: 'record',
            idProperty: '@docid',
            successProperty: false
        }
    },
    listeners: {
        beforeload: function (store, operation) {

        }
    }
});