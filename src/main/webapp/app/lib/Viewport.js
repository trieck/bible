Ext.define('bible.lib.Viewport', {
    extend: 'Ext.Viewport',
    alias: 'bible-viewport',
    layout: 'border',
    defaults: {
        split: true
    },

    requires: [ 'bible.lib.Summary', 'bible.lib.Details' ],

    items: [
        {
            region: 'west',
            collapsible: true,
            title: 'Bible Search Engine',
            width: 200,
            border: true,
            dockedItems: [
                {
                    xtype: 'toolbar',
                    height: '100%',
                    dock: 'top',
                    layout: 'vbox',
                    items: [
                        {
                            xtype: 'combo',
                            padding: '5',
                            id: 'bibleVersion',
                            tooltip: { text: 'Bible Version' },
                            rtl: false,
                            editable: false,
                            forceSelection: true,
                            fieldLabel: 'Version',
                            displayField: 'name',
                            valueField: 'value',
                            width: 180,
                            labelWidth: 45,
                            value: 'niv',
                            store: Ext.create('Ext.data.Store', {
                                fields: [ 'name', 'value' ],
                                data: [
                                    { name: 'ASV', value: 'asv' },
                                    { name: 'Basic English', value: 'basic-english' },
                                    { name: 'Darby', value: 'darby' },
                                    { name: 'Geneva', value: 'geneva' },
                                    { name: 'KJV', value: 'kjv' },
                                    { name: 'NIV', value: 'niv' },
                                    { name: 'Latin Vulgate', value: 'vulgate' },
                                    { name: 'World English Bible', value: 'web' }
                                ]
                            })
                        },
                        {

                            xtype: 'trigger',
                            id: 'searchText',
                            name: 'search',
                            padding: '0 5 5 5',
                            width: 180,
                            emptyText: 'Enter search query...',
                            trigger1Cls: 'x-form-clear-trigger',
                            trigger2Cls: 'x-form-search-trigger',
                            onTrigger1Click: function (e) {
                                var me = this;
                                me.fireEvent("clearClick", this, e);
                            },
                            onTrigger2Click: function (e) {
                                var me = this;
                                me.fireEvent("searchClick", this, e);
                            },
                            listeners: {
                                specialkey: function (field, e) {
                                    var me = this;
                                    if (e.getKey() === e.ENTER) {
                                        me.onTrigger2Click();
                                    }
                                }
                            }
                        } ]
                }
            ]
        },
        {
            region: 'east',
            xtype: 'details'
        }, {
            region: 'center',
            xtype: 'summary-grid'
        }
    ],

    initComponent: function () {
        Ext.tip.QuickTipManager.init();
        this.callParent(arguments);
    }
});
