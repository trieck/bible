Ext.define('bible.lib.Details', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.details',
    title: 'Details',
    id: "detailsView",
    collapsible: true,
    split: true,
    width: 300,

    initComponent: function () {
        this.addListener("select", this.onSelect);
        this.callParent(arguments);
    },

    /**
     * Fires when a grid row is selected
     * @private
     * @param {Ext.selection.Model} model
     * @param {Ext.data.Model} record
     */
    onSelect: function (model, record) {
        var docid = record.get("docid");
    }
});