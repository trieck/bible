Ext.define('bible.lib.Details', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.details',
    title: 'Details',
    id: "detailsView",
    collapsible: true,
    split: true,
    width: 300,

    initComponent: function () {
        this.callParent(arguments);
    },

    load: function (record) {
        var docid = record.get("docid");
        var store = Ext.getStore('Detail');
        store.load({ params: { docid: docid } });
    }
});