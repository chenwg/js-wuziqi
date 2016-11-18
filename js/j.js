var rclass = /[\t\r\n\f]/g;
function Od(id){
	this.id = id;
}
Od.prototype.gd = function(idString){
	return document.getElementById(String(idString));
}
Od.prototype.hasClass = function(selector){//来自jquery
        var className = " " + selector + " ",
            i = 0,
            l = this.length;
        for (; i < l; i++) {
            if (this[i].nodeType === 1 &&
                (" " + this[i].className + " ").replace(rclass, " ").indexOf(className) > -1) {
                return true;
            }
        }

        return false;
}

var od = new Od();