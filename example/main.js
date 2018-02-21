const Main = {
    init:function() {
	document.addEventListener('DOMContentLoaded',this.onLoad.bind(this));
	},
	onLoad:function(){
		let router = new Router(document.querySelector('#main-router'));
		console.log('Router',router);	
	}
};
Main.init();