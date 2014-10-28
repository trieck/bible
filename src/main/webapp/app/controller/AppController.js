Ext.define('bible.controller.AppController', {
    extend: 'Ext.app.Controller',
    stores: [ 'Summary', 'Detail' ],

    init: function () {
        this.control({
            "#searchText": {
                clearClick: this.onClearClick,
                searchClick: this.onSearchClick
            },
            "#summaryGrid": {
                selectionchange: this.onSelect
            }
        });
    },

    onClearClick: function (trigger) {
        var summary = Ext.getStore("Summary"),
            detail = Ext.getStore("Detail");

        summary.removeAll();
        detail.removeAll();

        trigger.setValue(Ext.emptyString);
    },

    onSearchClick: function () {
        var summary = Ext.getStore("Summary"),
            detail = Ext.getStore("Detail");

        summary.loadPage(1);
        detail.removeAll();
    },

    onSelect: function (model, selections) {
        var record = selections[ 0 ], docid, store;

        if (record) {
            docid = record.get("docid");
            store = Ext.getStore("Detail");
            store.load({ params: { docid: docid } });
        }
    }
});
