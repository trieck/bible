Ext.define('bible.lib.Details', {
    extend: 'Ext.tab.Panel',
    alias: 'widget.details',
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
                            iconAlign: 'top'
                        },
                        {
                            xtype: 'button',
                            text: 'Book',
                            tooltip: { text: 'Read this Book' },
                            focusCls: '',
                            id: 'bookButton',
                            iconCls: 'book-icon',
                            iconAlign: 'top'
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
                    store: 'Detail'
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