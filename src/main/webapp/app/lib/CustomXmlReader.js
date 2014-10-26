Ext.define('pixieweb.lib.CustomXmlReader', {
    extend: 'Ext.data.XmlReader',
    alias: 'reader.custom-xml',


    getNodeValue: function (node) {
        var ss = new XMLSerializer(), output = "";

        if (node) {
            if (typeof node.normalize === 'function') {
                node.normalize();
            }

            if (!node.childNodes) {
                node = node.firstChild;
                if (node)
                    return node.nodeValue;
            }

            Ext.each(node.childNodes, function (child) {
                output = output + ss.serializeToString(child);
            });

            return output;
        }

        return undefined;
    }

});
