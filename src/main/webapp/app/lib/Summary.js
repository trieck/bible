Ext.define('bible.lib.Summary', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.summary-grid',
    title: 'Summary',
    id: 'summaryGrid',
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
        this.store = Ext.getStore('Summary');

        this.dockedItems = this.dockedItems || [];
        this.dockedItems.push({
            store: this.store,
            xtype: 'pagingtoolbar',
            dock: 'bottom',
            displayInfo: true
        });

        this.on('selectionchange', this.onSelect, this);

        this.callParent(arguments);
    },

    /**
     * React to a grid item being selected
     * @private
     * @param {Ext.selection.Model} model The selection model
     * @param {Array} selections An array of selections
     */
    onSelect: function (model, selections) {
        var selected = selections[ 0 ];
        if (selected) {
            this.fireEvent('select', model, selected);
        }
    }
});

