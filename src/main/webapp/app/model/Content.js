Ext.define('pixieweb.model.Content', {
    extend: 'Ext.data.Model',
    fields: [ 'book', 'chapter', 'verse', {
        name: 'text', convert: function (value) {
            if (value) {
                // highlight
                value = value.replace(/<highlight>/g, "<span class=\"highlight\">");
                value = value.replace(/<\/highlight>/g, "</span>");
            }
            
            return value;
        }
    } ]
});
