Ext.define('pixieweb.controller.AppController', {
    extend: 'Ext.app.Controller',
    stores: ['Content'],

    init: function () {
        this.control({
            "#searchText": {
                clearClick: this.onClearClick,
                searchClick: this.onSearchClick
            }
        });
    },

    onClearClick: function (trigger) {
        var store = Ext.getStore('Content');
        trigger.setValue(Ext.emptyString);
        store.removeAll();
    },

    onSearchClick: function (trigger, event) {
        var store = Ext.getStore('Content');
        store.loadPage(1);
    }
});
