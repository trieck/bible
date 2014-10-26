Ext.define('pixieweb.lib.Summary', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.summary-grid',
    title: 'Summary',
    columns: [
        {
            text: 'Verse',
            flex: 1,
            draggable: false,
            menuDisabled: true,
            sortable: false,
            resizable: true,
            xtype: 'templatecolumn',
            tpl: "{book} {chapter}:{verse}"
        },
        {
            text: 'Text',
            flex: 3,
            draggable: false,
            menuDisabled: true,
            sortable: false,
            resizable: true,
            dataIndex: 'text',
            renderer: function (value, metadata) {
                metadata.tdAttr = 'data-qtip="' + Ext.htmlEncode(value) + '"';
                return value;
            }
        }
    ],

    viewConfig: {
        trackOver: true,
        stripeRows: false
    },

    initComponent: function () {
        this.store = Ext.getStore('Content');

        this.dockedItems = this.dockedItems || [];
        this.dockedItems.push({
            store: this.store,
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true
        });

        this.callParent(arguments);
    }
});

