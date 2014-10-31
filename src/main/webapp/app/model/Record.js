Ext.define('bible.model.Record', {
    extend: 'Ext.data.Model',
    uses: [ 'bible.lib.Highlighter' ],
    fields: [
        { name: 'docid', type: 'int', mapping: '@docid' },
        {
            name: 'book',
            convert: function (value) {
                return bible.lib.Highlighter.highlight(value);
            }
        },
        {
            name: 'chapter',
            convert: function (value) {
                return bible.lib.Highlighter.highlight(value);
            }
        },
        {
            name: 'verse',
            convert: function (value) {
                return bible.lib.Highlighter.highlight(value);
            }
        },
        {
            name: 'text',
            convert: function (value) {
                return bible.lib.Highlighter.highlight(value);
            }
        }
    ]
});
