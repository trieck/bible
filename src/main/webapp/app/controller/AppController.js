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
        var store = Ext.getStore('Summary');
        trigger.setValue(Ext.emptyString);
        store.removeAll();
    },

    onSearchClick: function () {
        var store = Ext.getStore('Summary');
        store.loadPage(1);
    },

    onSelect: function (model, selections) {
        var selected = selections[ 0 ],
            details = Ext.getCmp("detailsView");
        if (selected) {
            details.load(selected);
        }
    }
});
