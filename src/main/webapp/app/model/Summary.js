Ext.define('bible.model.Summary', {
    extend: 'Ext.data.Model',
    fields: [
        { name: 'docid', type: 'int', mapping: '@docid' },
        { name: 'book', type: 'string' },
        { name: 'chapter', type: 'int' },
        { name: 'verse', type: 'int' },
        {
            name: 'text', convert: function (value) {
            if (value) {
                // highlight tags to HTML
                value = value.replace(/<highlight>/g, "<span class=\"highlight\">");
                value = value.replace(/<\/highlight>/g, "</span>");
            }

            return value;
        }
        } ]
});
