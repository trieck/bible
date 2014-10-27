Ext.define('bible.controller.AppController', {
    extend: 'Ext.app.Controller',
    stores: [ 'Summary' ],

    init: function () {
        this.control({
            "#searchText": {
                clearClick: this.onClearClick,
                searchClick: this.onSearchClick
            },
            "#summaryGrid": {
                select: this.onSelect
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

    onSelect: function (model, rec) {
        var details = Ext.getCmp("detailsView");
        details.fireEvent("select", model, rec);
    }
});
