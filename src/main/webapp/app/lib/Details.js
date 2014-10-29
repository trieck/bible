Ext.define('bible.lib.Details', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.details',
    id: 'tabPanel',
    split: true,
    width: 300,
    layout: 'fit',

    items: [
        {
            title: 'Details',
            items: [
                {
                    xtype: 'toolbar',
                    items: [
                        {
                            xtype: 'button',
                            text: 'Chapter',
                            tooltip: { text: 'Read this Chapter' },
                            focusCls: '',
                            id: 'chapterButton',
                            iconCls: 'chapter-icon',
                            iconAlign: 'top',
                            disabled: true
                        },
                        {
                            xtype: 'button',
                            text: 'Book',
                            tooltip: { text: 'Read this Book' },
                            focusCls: '',
                            id: 'bookButton',
                            iconCls: 'book-icon',
                            iconAlign: 'top',
                            disabled: true
                        }
                    ]
                },
                {
                    xtype: 'dataview',
                    padding: '0 10 0 10',
                    tpl: [
                        '<tpl for=".">',
                        '<h2>{book} {chapter}:{verse}</h2>',
                        '<div>{text}</div><br/>',
                        '</tpl>' ],
                    store: 'Detail',

                    listeners: {
                        beforerender: function (view) {
                            view.store.addListener('datachanged', view.onDataChanged, view);
                        }
                    },

                    onDataChanged: function (store) {
                        var count = store.getCount(),
                            chapterButton = Ext.getCmp('chapterButton'),
                            bookButton = Ext.getCmp('bookButton');
                        if (count > 0) {
                            chapterButton.enable();
                            bookButton.enable();
                        } else {
                            chapterButton.disable();
                            bookButton.disable();
                        }
                    }
                }
            ]
        } ],

    initComponent: function () {
        this.tabBar = {
            border: true
        };

        this.callParent(arguments);
    }
});