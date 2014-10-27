Ext.define('bible.lib.Highlighter', {
    statics: {
        highlight: function (value) {
            if (value) {
                // highlight tags to HTML
                value = value.replace(/<highlight>/g, "<span class=\"highlight\">");
                value = value.replace(/<\/highlight>/g, "</span>");
            }

            return value;
        }
    }
});