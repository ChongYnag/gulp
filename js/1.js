/*
 * @Author: jiangchongyang
 * @Date:   2017-03-14 16:20:05
 * @Last Modified by:   jiangchongyang
 * @Last Modified time: 2017-03-14 18:03:33
 */
$(function() {
	//入口函数
	if (window.localStorage) {
		initJs('common-logic', 'js/common-logic.js');
		initJs('component', 'js/component.js');
		initJs('component1', 'js/component1.js');
		initJs('component2', 'js/component2.js');
		initJs('component3', 'js/component3.js');
		initJs('component4', 'js/component4.js');
		initJs('component5', 'js/component5.js');
	} else {
		addfile('js/common-logic.js', 'js');
		addfile('js/component.js', 'js');
		addfile('js/component1.js', 'js');
		addfile('js/component2.js', 'js');
		addfile('js/component3.js', 'js');
		addfile('js/component4.js', 'js');
		addfile('js/component5.js', 'js');
	}
});

function initJs(name, url) {
	var xhr;
	var js = window.localStorage ? localStorage.getItem(name) : "";
	if (js == null || js.length == 0) {
		if (window.ActiveXObject) {
			xhr = new ActiveXObject("Microsoft.XMLHTTP");
		} else if (window.XMLHttpRequest) {
			xhr = new XMLHttpRequest();
		}
		xhr.open("GET", url);
		xhr.send(null);
		xhr.onreadystatechange = function() {
			if (xhr.readyState == 4 && xhr.status == 200) {
				js = xhr.responseText;
				localStorage.setItem(name, js);
				js = js == null ? "" : js;
				addTxt(js, "js");
			}
		};
	} else {
		addTxt(js, "js");
	}
}
//第二步：初始化Css
// function initCss(name, url) {
// 	var xhr;
// 	var css = window.localStorage ? localStorage.getItem(name) : "";
// 	if (css == null || css.length == 0) {
// 		if (window.ActiveXObject) {
// 			xhr = new ActiveXObject("Microsoft.XMLHTTP");
// 		} else if (window.XMLHttpRequest) {
// 			xhr = new XMLHttpRequest();
// 		}
// 		xhr.open("GET", url);
// 		xhr.send(null);
// 		xhr.onreadystatechange = function() {
// 			if (xhr.readyState == 4 && xhr.status == 200) {
// 				css = xhr.responseText;
// 				localStorage.setItem(name, css);
// 				css = css == null ? "" : css;
// 				css = css.replace(/images\//g, "style/images/");
// 				addTxt(css, "css");
// 			}
// 		};
// 	} else {
// 		css = css.replace(/images\//g, "style/images/");
// 		addTxt(css, "css");
// 	}
// }

function addTxt(text, fileType) {
	var head = document.getElementsByTagName('head').item(0);
	var link;
	if (fileType == "js") {
		link = document.createElement("script");
		link.type = "text/javascript";
		link.innerHTML = text;
	} else {
		link = document.createElement("style");
		link.type = "text/css";
		link.innerHTML = text;
	}
	head.appendChild(link);
}

function addfile(src, fileType) {
	var head = document.getElementsByTagName('head').item(0);
	var link;
	if (fileType == "js") {
		link = document.createElement("script");
		link.type = "text/javascript";
		link.attributes("src") = src;
	} else {
		link = document.createElement("style");
		link.type = "text/css";
		link.attributes("src") = src;
	}
	head.appendChild(link);
}