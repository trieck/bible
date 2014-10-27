Ext.application({
    name: 'bible',
    appFolder: 'app',
    controllers: [ 'AppController' ],
    uses: 'bible.lib.Viewport',
    launch: function () {
        Ext.create('bible-viewport');
    }
});
