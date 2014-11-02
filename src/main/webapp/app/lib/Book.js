Ext.define('bible.lib.Book', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.book-tab',
    closable: true,
    layout: 'fit',

    constructor: function (config) {
        var store = this.createStore();

        config.items = config.items || [];
        config.items.push({
            xtype: 'dataview',
            autoScroll: true,
            padding: '10',
            tpl: [
                '<h2>' + config.book + '</h2>',
                '{% this.chapter = undefined; %}',
                '<tpl for=".">',
                '{[this.renderChapter(values)]}',
                '<sup class="verse">{verse}</sup>&nbsp;{text}',
                '</tpl>',
                {
                    renderChapter: function (values) {
                        if (this.chapter !== values.chapter) {
                            this.chapter = values.chapter;
                            return Ext.String.format("<h3>Chapter {0}</h3>", values.chapter);
                        }
                    }
                }
            ],
            store: store
        });

        config.dockedItems = config.dockedItems || [];
        config.dockedItems.push({
            xtype: 'pagingtoolbar',
            dock: 'top',
            store: store
        });

        this.callParent(arguments);
    },

    createStore: function () {
        var store = Ext.create('bible.store.Book');
        store.load();
        return store;
    }
});

