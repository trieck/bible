Ext.define('bible.lib.Details', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.details',
    split: true,
    width: 300,
    layout: 'fit',

    items: [ {
        xtype: 'dataview',
        padding: '5',
        title: 'Details',
        tpl: [
            '<tpl for=".">',
            '<h2>{book} {chapter}:{verse}</h2>',
            '<div>{text}</div><br/>',
            '</tpl>' ],
        store: 'Detail'
    } ],

    initComponent: function () {
        this.tabBar = {
            border: true
        };

        this.callParent(arguments);
    }
});