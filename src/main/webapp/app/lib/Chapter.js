Ext.define('bible.lib.Chapter', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.chapter-tab',
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
                var store = Ext.create('bible.store.Chapter');
                store.load();
                return store;
            }())
        });
        this.callParent(arguments);
    }
});

