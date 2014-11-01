Ext.define('bible.lib.Book', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.book-tab',
    closable: true,
    layout: 'fit',

    constructor: function (config) {
        var store = this.createStore();

        config.items = config.items || [];
        config.items.push({
            xtype: 'dataview',
            autoScroll: true,
            padding: '10',
            tpl: [
                '<tpl for=".">',
                '<cite class="cite">{verse}</cite>&nbsp;{text}',
                '</tpl>' ],
            store: store
        });

        config.dockedItems = config.dockedItems || [];
        config.dockedItems.push({
            xtype: 'pagingtoolbar',
            dock: 'top',
            store: store
        });

        this.callParent(arguments);
    },

    createStore: function () {
        var store = Ext.create('bible.store.Book');
        store.load();
        return store;
    }
});

