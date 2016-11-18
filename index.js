var cont = od.gd('cont'),
	str = '',
	ar = ['dblack', 'dwhite'],
	indexArr = [],
	cur = true,
	arrb = [],
	arrf = [],
	onel = 18,
	onesq = onel * onel;
cont.style.height = String(onel * 32) + 'px';
cont.style.width = String(onel * 32) + 'px';
for(var i = 0; i < onesq; i++) {
	indexArr.push(String(i));
	var k = i + 1;
	str += '<span name="' + i + '"><div class="fff"></div>' + '</span>';
}
cont.innerHTML = str;
var sl = document.getElementsByTagName('span');
for(var i = 0; i < onesq; i++) {
	sl[i].addEventListener('click', function(e) {
		var indexOne = this.getAttribute('name');
		var sy = indexArr.indexOf(indexOne);
		if(sy == -1) {
			return false;
		}
		indexArr.splice(sy, 1);
		if(cur) {
			this.getElementsByTagName('div')[0].setAttribute('class', 'dblack');
			arrb.push(parseInt(indexOne) + 1);
			if(win(arrb)) {
				alert('黑方赢了');
				return true;
			};
			setClass('eee');
			cur = false;
		} else {
			this.getElementsByTagName('div')[0].setAttribute('class', 'dwhite');
			arrf.push(parseInt(indexOne) + 1);
			if(win(arrf)) {
				alert('红方赢了');
				return true;
			}
			setClass('fff');
			cur = true;
		}
	})

}

function setClass(c) {
	for(var i in indexArr) {
		sl[indexArr[i]].getElementsByTagName('div')[0].setAttribute('class', c);
	}
}

function win(s) {
	if(s.length < 5) return false;
	var ina = s.sort(function(a, b) {
		return a - b;
	});
	var succ = false;
	for(var i = 0; i < ina.length - 4; i++) {
		var lx = true;
		if(ina[i] % onel != 0 && (ina[i] + 1) % onel != 0 && (ina[i] + 2) % onel != 0 && (ina[i] + 3) % onel != 0) {
			for(var j = 1; j < 5; j++) {
				if(ina[i + j] != (ina[i] + j)) {
					lx = false;
					break;
				}
			}
		} else {
			lx = false;
		}
		if(lx) {
			succ = true;
			break;
		} else {
			var k = 0;
			if(ina[i + onel - 1] % onel != 0 && (ina[i] + onel - 2) % onel != 0 && (ina[i] + onel - 3) % onel != 0 && (ina[i] + onel - 4) % onel != 0) {
				for(var j = (i + 1); j < ina.length; j++) {
					if((ina[j] - ina[i]) / (onel - 1) == 1 || (ina[j] - ina[i]) / (onel - 1) == 2 || (ina[j] - ina[i]) / (onel - 1) == 3 || (ina[j] - ina[i]) / (onel - 1) == 4) {
						k++;
					}
				}
			}
			if(k == 4) {
				succ = true;
				break;
			} else {
				k = 0;
				if(ina[i] % onel != 0 && (ina[i] + 1) % onel != 0 && (ina[i] + 2) % onel != 0 && (ina[i] + 3) % onel != 0) {
					for(var j = (i + 1); j < ina.length; j++) {
						if((ina[j] - ina[i]) / (onel + 1) == 1 || (ina[j] - ina[i]) / (onel + 1) == 2 || (ina[j] - ina[i]) / (onel + 1) == 3 || (ina[j] - ina[i]) / (onel + 1) == 4) {
							k++;
						}
					}
				}
				if(k == 4) {
					succ = true;
					break;
				} else {
					k = 0;
					for(var j = (i + 1); j < ina.length; j++) {
						if((ina[j] - ina[i]) / onel == 1 || (ina[j] - ina[i]) / onel == 2 || (ina[j] - ina[i]) / onel == 3 || (ina[j] - ina[i]) / onel == 4) {
							k++;
						}
					}
					if(k == 4) {
						succ = true;
						break;
					}
				}
			}
		}
	}
	return succ;
}