Ext.define('bible.controller.AppController', {
    extend: 'Ext.app.Controller',
    stores: [ 'Summary', 'Detail' ],
    uses: [ 'bible.lib.Chapter' ],

    init: function () {
        this.control({
            "#searchText": {
                clearClick: this.onClearClick,
                searchClick: this.onSearchClick
            },
            "#summaryGrid": {
                selectionchange: this.onSelect
            },
            '#chapterButton': {
                click: this.onChapterClick,
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
    },

    onChapterClick: function () {
        var store = Ext.getStore("Detail"),
            panel = Ext.getCmp('tabPanel'),
            title = Ext.String.format("{0} {1}", store.book, store.chapter),
            selector = Ext.String.format("panel[title='{0}']", title),
            tab = panel.child(selector);

        if (Ext.isEmpty(tab)) {
            tab = panel.add({
                xtype: 'chapter-tab',
                title: title
            });
        }

        panel.setActiveTab(tab);
    }
});
