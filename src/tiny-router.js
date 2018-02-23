class Router {
    constructor(router) {
        if (!router.hasAttribute(Router.CONST.ROUTER_ATTRIBUTE)) throw `router element requires ${Router.CONST.ROUTER_ATTRIBUTE} attribute`;
        this.router = router;
        this.sectionCollection = [];
        this.currentSection = null;
        this.setSections();
        this.routeTo(this.getCurrentHash());
        window.addEventListener("hashchange", this.onHashChange.bind(this), false);
    }
    setSections() {
        this.sectionCollection = this.router.querySelectorAll(`[${Router.CONST.SECTION_ROUTE_ATTRIBUTE}]`);
        this.sectionCollection.forEach((section) => {
            this.hideSection(section);
        });
    }
    hideSection(section) {
        section.style.visibility = 'hidden';
        section.style.opacity = '0';
        section.style.transition = 'visibility 0s, opacity 0.5s linear';
    }
    showSection(section) {
        if (this.currentSection) {
            this.hideSection(this.currentSection);
        }
        this.currentSection = section;
        section.style.visibility = 'visible';
        section.style.opacity = '1';
    }
    getCurrentHash() {
        let hash = window.location.hash;
        if (hash) return hash;
        return '#/';
    }
    routeTo(hash,isChange) {
        let hashClean = hash.replace('#', '');
        let section = this.router.querySelector(`[${Router.CONST.SECTION_ROUTE_ATTRIBUTE}="${hashClean}"]`);
        if (section) {
        	this.showSection(section);
        	if(!isChange)history.pushState(null, null, hash);
        } else{
            section = this.router.querySelector(`[${Router.CONST.SECTION_ROUTE_ATTRIBUTE}="/"]`);
        	if(section)this.showSection(section);
        	if(!isChange)history.pushState(null, null, '#/');
        }
    }
    onHashChange() {
        this.routeTo(this.getCurrentHash(),true);
    }
}
Router.CONST = {
    ROUTER_ATTRIBUTE: 'data-router',
    SECTION_ROUTE_ATTRIBUTE: 'data-route'
};