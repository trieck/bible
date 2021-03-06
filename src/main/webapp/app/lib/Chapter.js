Ext.define('bible.lib.Chapter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chapter-tab',
    closable: true,
    layout: 'fit',

    constructor: function (config) {
        var store = this.createStore();

        config.items = config.items || [];
        config.items.push({
            xtype: 'dataview',
            padding: '10',
            autoScroll: true,
            tpl: [
                '<h2>' + config.book + ' ' + config.chapter + '</h2>',
                '<tpl for=".">',
                '<sup class="verse">{verse}</sup>&nbsp;{text}',
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
        var store = Ext.create('bible.store.Chapter');
        store.load();
        return store;
    }
});

