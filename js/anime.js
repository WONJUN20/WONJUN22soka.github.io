var fold = function(id) {
	if (typeof(id) === 'object') {
		for (var i = 0, len = id.length; i < len; i++) {
			fe(id[i]);
		}
	} else {
		fe(id);
	}
};

var fe = function(id) {
	var target = document.getElementById(id),
	    isNone = target.style.display === 'none';

	target.style.display    = isNone ? 'block' : 'none';
	target.style.visibility = isNone ? 'visible' : 'hidden';
};

// 読み込み時に非表示にする
fold(['a01', 'a02']);