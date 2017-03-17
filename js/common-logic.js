/**
 * 公共的一些逻辑和方法
 */

(function($){
	$.common = {
			heightLight: function(){},
			removeHeightLight: function(){},
			goToallsidebar: function(){},
			goToSidebar: function(){}
	}
	
	
})(jQuery)

// 移除高亮选择的组件的标记
 $(function(){
	 $("#workspace-body").find('.high-light-hover').removeClass('high-light-hover');
	 $("#workspace-body").find('.high-light').removeClass('high-light');
	 if($('#sidebar-body').length===0){
		var dpr, rem, scale;
		var docEl = document.documentElement;
		var fontEl = document.createElement('style');
		var metaEl = document.querySelector('meta[name="viewport"]');
	
		dpr = window.devicePixelRatio || 1;
		rem = docEl.clientWidth * dpr / 10;
		scale = (1 / dpr).toFixed(1);
	
	
		// 设置viewport，进行缩放，达到高清效果
		metaEl.setAttribute('content', 'width=' + Math.round(docEl.clientWidth*dpr) + ',height='+ Math.round(docEl.clientHeight/dpr)+',initial-scale=' + scale + ',maximum-scale=1, minimum-scale=' + scale + ',user-scalable=yes');
	
		// 设置data-dpr属性，留作的css hack之用
		docEl.setAttribute('data-dpr', dpr);
	
		// 动态写入样式
		docEl.firstElementChild.appendChild(fontEl);
		fontEl.innerHTML = 'html{font-size:' + rem + 'px!important;}';
	
		// 给js调用的，某一dpr下rem和px之间的转换函数
		window.rem2px = function(v) {
		    v = parseFloat(v);
		    return v * rem;
		};
		window.px2rem = function(v) {
		    v = parseFloat(v);
		    return v / rem;
		};
	
		window.dpr = dpr;
		window.rem = rem;
	 }
	 
 })


/**
 * 监听页面所有的a链接
 */
var listenLink = function() {
    if ($(".icon-yul").hasClass("active") && $(".icon-yul").length) {
        //    			在设计器预览页面（a链接应该跳转）
        return true;
    } else if ($(".icon-yul").legnth === 0) {
        //    			在发布后的页面；所有的a链接都可以跳转
        return true;
    } else if (!$(".icon-yul").hasClass("active") && $(".icon-yul").length) {
        //    			在设计器页面
        if ($(this).attr('href').search(/javascript/) >=0 || $(this).attr('href') == '#') {
            return true;
        } else {
            return false;
        }
    }
}

//点击a链接的时候，判断是否应该跳转页面；
setInterval(function() {
    var allLinks = $("#workspace-body a");
    $(allLinks).off('click', listenLink).on('click', listenLink);
}, 200)

$(function(){
	//将可以编辑的元素设置为不可编辑
	$('body').find('[contenteditable="true"]').attr('contenteditable',false);
})

