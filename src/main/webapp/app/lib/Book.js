Ext.define('bible.lib.Book', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.book-tab',
    closable: true,
    layout: 'fit',
    constructor: function (config) {
        config.items = config.items || [];
        config.items.push({
            xtype: 'dataview',
            autoScroll: true,
            padding: '10 10 10 10',
            tpl: [
                '<tpl for=".">',
                '<cite class="cite">{verse}</cite>&nbsp;{text}',
                '</tpl>' ],
            store: (function () {
                var store = Ext.create('bible.store.Book');
                store.load();
                return store;
            }())
        });
        this.callParent(arguments);
    }
});

