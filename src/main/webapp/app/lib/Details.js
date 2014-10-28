Ext.define('bible.lib.Details', {
    extend: 'Ext.view.View',
    alias: 'widget.details',
    title: 'Details',
    id: "detailsView",
    collapsible: true,
    split: true,
    width: 300,
    padding: '5',
    tpl: [
        '<tpl for=".">',
        '<h2>{book} {chapter}:{verse}</h2>',
        '<div>{text}</div><br/>',
        '</tpl>'
    ],

    initComponent: function () {
        this.store = Ext.getStore("Detail");
        this.callParent(arguments);
    }
});