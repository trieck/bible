Ext.application({
	name: 'pixieweb',
	appFolder: 'app',
	controllers: ['AppController'],
	uses: 'pixieweb.lib.Viewport',
	launch: function () {
		Ext.create('pixielib-viewport');
	}
});
