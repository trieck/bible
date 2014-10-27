Ext.define('bible.model.Summary', {
    extend: 'Ext.data.Model',
    uses: [ 'bible.lib.Highlighter' ],
    fields: [
        { name: 'docid', type: 'int', mapping: '@docid' },
        { name: 'book', type: 'string' },
        { name: 'chapter', type: 'int' },
        { name: 'verse', type: 'int' },
        {
            name: 'text',
            convert: function (value) {
                return bible.lib.Highlighter.highlight(value);
            }
        }
    ]
});