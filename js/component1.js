/*
 * name       :tuzuoquan
 * mail       :tuzq@ucap.com.cn 
 * date       :2016/1/7
 * version    :1.0
 * description:站点栏目树对应的js
 * CopyRight (C) 2016-1-07
 */
(function ($) {
    $.tplComponentList = {
        
    };
})(jQuery);

//定义颜色
var per = [["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(153, 153, 153)", "rgb(183, 183, 183)",
    "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(239, 239, 239)", "rgb(243, 243, 243)", "rgb(255, 255, 255)"],
    ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
        "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"],
    ["rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)", "rgb(255, 242, 204)", "rgb(217, 234, 211)",
        "rgb(208, 224, 227)", "rgb(201, 218, 248)", "rgb(207, 226, 243)", "rgb(217, 210, 233)", "rgb(234, 209, 220)",
        "rgb(221, 126, 107)", "rgb(234, 153, 153)", "rgb(249, 203, 156)", "rgb(255, 229, 153)", "rgb(182, 215, 168)",
        "rgb(162, 196, 201)", "rgb(164, 194, 244)", "rgb(159, 197, 232)", "rgb(180, 167, 214)", "rgb(213, 166, 189)",
        "rgb(204, 65, 37)", "rgb(224, 102, 102)", "rgb(246, 178, 107)", "rgb(255, 217, 102)", "rgb(147, 196, 125)",
        "rgb(118, 165, 175)", "rgb(109, 158, 235)", "rgb(111, 168, 220)", "rgb(142, 124, 195)", "rgb(194, 123, 160)",
        "rgb(166, 28, 0)", "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)", "rgb(106, 168, 79)",
        "rgb(69, 129, 142)", "rgb(60, 120, 216)", "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
        "rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)", "rgb(191, 144, 0)", "rgb(56, 118, 29)",
        "rgb(19, 79, 92)", "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)", "rgb(116, 27, 71)",
        "rgb(91, 15, 0)", "rgb(102, 0, 0)", "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
        "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"]];

/**
 * @param colorPickerId 表示的是要变成颜色选择权的input输入框的id
 * @param color 初始化的颜色值
 * @return
 */
function initColor(colorPickerId, color) {
    $("#" + colorPickerId).spectrum({
        allowEmpty: true,
        color: color,
        showInput: true,
        containerClassName: "full-spectrum",
        showInitial: true,
        showPalette: true,
        showSelectionPalette: true,
        showAlpha: true,
        maxPaletteSize: 10,
        preferredFormat: "hex",
        localStorageKey: "spectrum.demo",
        move: function (color) {
            //以下是当选择了颜色选择器中的颜色之后执行的操作

            //这里的id表示的是颜色选择框对应的id
            if (colorPickerId == "tpl-component-2016-01-09-list-listLink") {                //区块字体颜色
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":link", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listVisited") {       //区块边框颜色
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":visited", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listHover") {         //区块链接颜色
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":hover", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listActive") {        //区块经过颜色
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":active", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listBorderColor") {    //列表边框颜色
                $.tplComponentListListSetting.setBorderColor(selectedElementInfo, ' .list-body ul li', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleBorderColor") {   //标题边框颜色
                $.tplComponentListTitleSetting.setBorderColor(selectedElementInfo, ' .list h1', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleColor") {         //标题颜色
                $.tplComponentListTitleSetting.setColor(selectedElementInfo, ' .list h1 .title-content', color, '_titleColor');
            }else if (colorPickerId == "tpl-component-2016-01-09-list-titleHoverColor") {         //标题颜色
                $.tplComponentListTitleSetting.setHoverColor(selectedElementInfo, ' .list h1 .title-content', color, '_titleHoverColor');
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleRightHoverColor") {         //标题颜色
                $.tplComponentListTitleSetting.setHoverColor(selectedElementInfo, ' .rightDiv a', color, '_titleRightHoverColor');
            }else if (colorPickerId == "tpl-component-2016-01-09-list-titleBackgroundColor") {
                $.tplComponentListTitleSetting.setBackgroundColor(selectedElementInfo, '', color, "_titleBackgroundColor");
            }else if (colorPickerId == "treeH1TitleBackgroundColor") {
                $.tplComponentListTitleSetting.setTitleBackgroundColor(selectedElementInfo, ' h1', color, "_h1TitleBackgroundColor");
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listColor") {
                $.tplComponentListListSetting.setListColor(selectedElementInfo, ' span.line-content', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listHoverColor") {
                $.tplComponentListTitleSetting.setListHoverColor(selectedElementInfo, color , "_listHoverColor");
            }else if (colorPickerId == "tpl-component-2016-01-09-listBorderColor") {
                $.tplComponentListSetting.setBaseBorderColor(selectedElementInfo, ' .list', color);
            }else if (colorPickerId == "tpl-component-2016-01-09-titleBorderColor") {
                $.tplComponentListSetting.setBaseBorderColor(selectedElementInfo, ' h1', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-treeBorderColor") {
                $.tplComponentListSetting.setBaseBorderColor(selectedElementInfo, '', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleLeftBackgroundColor") {
                $.tplComponentListTitleSetting.setBackgroundColor(selectedElementInfo, ' .list h1 .leftDiv', color, "_titleLeftBackgroundColor");
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleRightBackgroundColor") {
                $.tplComponentListTitleSetting.setBackgroundColor(selectedElementInfo, ' .list h1 .rightDiv', color, "_titleRightBackgroundColor");
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listBackgroundColor") {
                $.tplComponentListTitleSetting.setBackgroundColor(selectedElementInfo, ' .list-body', color, "_listBackgroundColor");
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleRightColor") {         //标题颜色
                $.tplComponentListTitleSetting.setColor(selectedElementInfo, ' .rightDiv a', color, '_titleRightColor');
            }

            $("#" + colorPickerId).val(color);
        },
        change: function (color) {
            //以下是当选择了颜色选择器中的颜色之后执行的操作

            //这里的id表示的是颜色选择框对应的id
            if (colorPickerId == "tpl-component-2016-01-09-list-listLink") {                //区块字体颜色
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":link", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listVisited") {       //区块边框颜色
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":visited", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listHover") {         //区块链接颜色
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":hover", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listActive") {        //区块经过颜色
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":active", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listBorderColor") {    //列表边框颜色
                $.tplComponentListListSetting.setBorderColor(selectedElementInfo, ' .list-body ul li', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleBorderColor") {   //标题边框颜色
                $.tplComponentListTitleSetting.setBorderColor(selectedElementInfo, ' .list h1', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleColor") {         //标题颜色
                $.tplComponentListTitleSetting.setColor(selectedElementInfo, ' .list h1 .title-content', color, '_titleColor');
            }else if (colorPickerId == "tpl-component-2016-01-09-list-titleHoverColor") {         //标题颜色
                $.tplComponentListTitleSetting.setHoverColor(selectedElementInfo, ' .list h1 .title-content', color, '_titleHoverColor');
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleRightHoverColor") {         //标题颜色
                $.tplComponentListTitleSetting.setHoverColor(selectedElementInfo, ' .rightDiv a', color, '_titleRightHoverColor');
            }else if (colorPickerId == "tpl-component-2016-01-09-list-titleBackgroundColor") {
                $.tplComponentListTitleSetting.setBackgroundColor(selectedElementInfo, '', color, "_titleBackgroundColor");
            }else if (colorPickerId == "treeH1TitleBackgroundColor") {
                $.tplComponentListTitleSetting.setTitleBackgroundColor(selectedElementInfo, ' h1', color, "_h1TitleBackgroundColor");
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listColor") {
                $.tplComponentListListSetting.setListColor(selectedElementInfo, ' span.line-content', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listHoverColor") {
                $.tplComponentListTitleSetting.setListHoverColor(selectedElementInfo, color , "_listHoverColor");
            }else if (colorPickerId == "tpl-component-2016-01-09-listBorderColor") {
                $.tplComponentListSetting.setBaseBorderColor(selectedElementInfo, ' .list', color);
            }else if (colorPickerId == "tpl-component-2016-01-09-titleBorderColor") {
                $.tplComponentListSetting.setBaseBorderColor(selectedElementInfo, ' h1', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-treeBorderColor") {
                $.tplComponentListSetting.setBaseBorderColor(selectedElementInfo, '', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleLeftBackgroundColor") {
                $.tplComponentListTitleSetting.setBackgroundColor(selectedElementInfo, ' .list h1 .leftDiv', color, "_titleLeftBackgroundColor");
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleRightBackgroundColor") {
                $.tplComponentListTitleSetting.setBackgroundColor(selectedElementInfo, ' .list h1 .rightDiv', color, "_titleRightBackgroundColor");
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listBackgroundColor") {
                $.tplComponentListTitleSetting.setBackgroundColor(selectedElementInfo, ' .list-body', color, "_listBackgroundColor");
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleRightColor") {         //标题颜色
                $.tplComponentListTitleSetting.setColor(selectedElementInfo, ' .rightDiv a', color, '_titleRightColor');
            }

            $("#" + colorPickerId).val(color);
        },
        palette: per //定义的所有颜色值
    });
}

/**
 * @author       :tuzuoquan
 * description   :站点栏目树设置相关功能实现,主要是设置区域的js
 */
(function ($) {
    //站点栏目树设置部分功能实现(下面是基本设置的方法)
    $.tplComponentListSetting = {
        title: "",
        /**
         * 2、判断一个字符串变量是否为空
         * 如果不为空：返回true
         * 如果为空:返回false
         */
        isNotBlank: function (variable) {
            return (variable !== null && typeof(variable) !== "undefined" && variable !== undefined && variable !== "") ? true : false;
        },
        /**
         * 存储或者初始化边框的宽度
         */
        storeBaseListBorderWidth: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderWidth = $("." + id + "_listBaseBorderWidth").val();
            //设置字体
            $("#tpl-component-2016-01-09-listBorderWidth").val(borderWidth);
        },
        storeBaseTitleBorderWidth: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderWidth = $("." + id + "_titleBaseBorderWidth").val();
            //设置字体
            $("#tpl-component-2016-01-09-titleBorderWidth").val(borderWidth);
        },
        storeBaseTreeBorderWidth: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderWidth = $("." + id + "_treeBaseBorderWidth").val();
            //设置字体
            $("#tpl-component-2016-01-09-treeBorderWidth").val(borderWidth);
        },
        addList:function(link,content,time){
            "use strict";
            var id = selectedElementInfo.get("id");
            var date = new Date(parseInt(time));
            var html =  '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)">';
            html += '<b class="line-content1"></b>';
            html += '<a href="' + link + '" target="_blank" class="tpl-component-2016-01-09-list-li-title" onclick="$.common.goToSidebar(this,event,\' .list-body li > a\')">';
            html += '<span class="line-content">'+content+'</span>';
            html += '</a>';
            html += '<span class="tpl-component-2016-01-09-list-li-time" onclick="$.common.goToSidebar(this,event,\' .list-body li > span\')">';
            html += '<span class="time-content" name="'+time+'">'+date.format('yyyy-MM-dd')+'</span>';
            html += '</span>';
            html += '</li>';
            $("#" + id + " #static .list-body ul").append(html);
        },
        setTreeColumn:function(){
            "use strict";
            var id = selectedElementInfo.get("id");
            var column = $("#treeColumn").val();
            var len =  $("#" + id + "  #static .list-body ul li").length;
            if(column > len){
                var index = column - len;
                var html =  '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)">';
                    html += '<b class="line-content1"></b>';
                    html += '<a href="#" target="_blank" class="tpl-component-2016-01-09-list-li-title" onclick="$.common.goToSidebar(this,event,\' .list-body li > a\')">';
                    html += '<span class="line-content">以市场化终结景区任性涨价</span>';
                    html += '</a>';
                    html += '<span class="tpl-component-2016-01-09-list-li-time" onclick="$.common.goToSidebar(this,event,\' .list-body li > span\')">';
                    html += '<span class="time-content" name="1441640593000">2015-09-07</span>';
                    html += '</span>';
                    html += '</li>';
                if(index > 0){
                    for(var i = 0; i < index; i++){
                        $("#" + id + " .list-body ul").append(html);
                    }
                }
            }else if(column < len){
                var liArr = [];
                var index = len - column;
                for(var i = 0; i < len; i++){
                    liArr.push($("#" + id + " #static .list-body ul li")[i]);
                }
                liArr.splice(column, index);
                $("#" + id + " .list-body ul").html('');
                for(var i = 0; i < liArr.length; i++){
                    $("#" + id + " .list-body ul").append(liArr[i]);
                }
            }
            $("." + id + "_column").val(column);
        },
        storeTreeColumn:function(){
            "use strict";
            var id = selectedElementInfo.get("id");
            var column = $("." + id + "_column").val();
            $("#treeColumn").val(column);
        },
        /**
         * 存储或者初始化边框的颜色
         */
        storeBaseListBorderColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var listBorderColor = $.trim($("." + id + "_listBaseBorderColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-listBorderColor", listBorderColor);
        },
        storeBaseTitleBorderColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var titleBorderColor = $.trim($("." + id + "_titleBaseBorderColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-titleBorderColor", titleBorderColor);
        },
        storeBaseTreeBorderColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var treeBorderColor = $.trim($("." + id + "_treeBaseBorderColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-treeBorderColor", treeBorderColor);
        },
        /**
         * 设置边框的颜色
         * selectedElementInfo        :表示被选中的元素值
         * childPathOfSelectedElement :表示其后代
         */
        setBaseBorderColor: function (selectedElementInfo, childPathOfSelectedElement, color) {

            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-color");

                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + childPathOfSelectedElement + "{border-color:" + color + "}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;

                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                $("." + id + "_listBaseBorderColor").val(color);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 设置边框的宽度（粗细）
         */
        setBorderWidth: function (selectedElementInfo, childPathOfSelectedElement, obj ,widthAddress , componentId,selectAddress) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var borderWidth = $.trim($(obj).val());
                if(borderWidth ==  ""){
                    borderWidth = "0px";
                }
                //获得字体大小
                borderWidth = $.tplComponentListSetting.handleInputValue(obj, borderWidth);
                //移除原来的字体大小css
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-width");
                if (borderWidth) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-width:" + borderWidth + "}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + widthAddress).val(borderWidth);

                //$("#" + componentId +" div").addClass("active");
                //$("." + id + selectAddress).val("1_1_1_1");
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        setBorderRadius:function(selectedElementInfo, childPathOfSelectedElement, obj){
            //1、获得id的属性值
            var id = selectedElementInfo.get("id");
            //2、获得填写的字体大小的值
            var borderRadius = $.trim($(obj).val());
            borderRadius = $.tplComponentListSetting.handleInputValue(obj, borderRadius);
            //移除原来的字体大小css
            $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-radius");
            if (borderRadius) {
                var styleCss = $("#generatedCss").text();
                //4、下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + childPathOfSelectedElement + "{border-radius:" + borderRadius + " !important;}";
                //5、替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
            }
            $("." + id + "_titleBaseBorderRadius").val(borderRadius);
            /*上一步，下一步*/
            $.common.regain();
        },
        storeBorderRadius:function(){
            var id = selectedElementInfo.get("id");
            var borderRadius = $("." + id + "_titleBaseBorderRadius").val();
            $("#tpl-component-2016-01-09-titleBorderRadius").val(borderRadius);
        },
        //设置对齐方式
        setAlign: function (obj) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                $.common.removeGeneratedCss(id, "", "margin-left");
                $.common.removeGeneratedCss(id, "", "margin-right");
                var align = $(obj).attr('value');
                var bodyWidth = $("#" + id).parent().width();
                var componentWidth = $("#" + id).width();
                var marginLeft = bodyWidth - componentWidth;
                if (align === 'left') {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + "{margin-right: "+ marginLeft +"px}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("#tpl-component-2016-01-09-listMarginRight").val(marginLeft+"px");
                    $("." + id + "_listMarginRight").val(marginLeft+"px");
                    $("#tpl-component-2016-01-09-listMarginLeft").val("0 px");
                    $("." + id + "_listMarginLeft").val("0 px");
                } else if (align === 'center') {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + "{margin-left: auto}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    styleText = "#" + id + "{margin-right: auto}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("#tpl-component-2016-01-09-listMarginRight").val(marginLeft/2+"px");
                    $("#tpl-component-2016-01-09-listMarginLeft").val(marginLeft/2+"px");
                    $("." + id + "_listMarginRight").val(marginLeft/2+"px");
                    $("." + id + "_listMarginLeft").val(marginLeft/2+"px");
                } else if (align === 'right') {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + "{margin-left: "+ marginLeft +"px}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("#tpl-component-2016-01-09-listMarginLeft").val(marginLeft+"px");
                    $("." + id + "_listMarginLeft").val(marginLeft+"px");
                    $("#tpl-component-2016-01-09-listMarginRight").val("0 px");
                    $("." + id + "_listMarginRight").val("0 px");
                }

                $("." + id + "_align").val(align);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或者初始化水平位置
         */
        storeAndInitAlign: function () {
            var trees = $(".tpl-component-2016-01-09-list");
            var newId = '';
            trees.each(function(i, e) {
                newId = $(e).attr('id');
            })
            var id = newId ||selectedElementInfo.get("id");
            var align = $.trim($("." + id + "_align").val());
            $("#tpl-sidebar-2016-10-8-align div").removeClass("active");
            if (align == "left") {
                $("#tpl-sidebar-2016-10-8-align div").eq(0).addClass("active");
            } else if (align == "center") {
                $("#tpl-sidebar-2016-10-8-align div").eq(1).addClass("active");
                setTimeout(function(){
                    "use strict";
                    var bodyWidth = $("#" + id).parent().width();
                    var componentWidth = $("#" + id)[0].offsetWidth;
                    var marginLeft = bodyWidth - componentWidth;
                    $("#tpl-component-2016-01-09-listMarginRight").val(marginLeft/2+" px");
                    $("#tpl-component-2016-01-09-listMarginLeft").val(marginLeft/2+" px");
                    $("." + id + "_listMarginRight").val(marginLeft/2+" px");
                    $("." + id + "_listMarginLeft").val(marginLeft/2+" px");
                },200)

            } else if (align == "right") {
                $("#tpl-sidebar-2016-10-8-align div").eq(2).addClass("active");
            }
        },
        //设置轮播垂直对齐
        setVerticalAlign: function (type) {
            try {
                var id = selectedElementInfo.get("id");
                $.common.removeGeneratedCss(id, "", "margin-top");
                var pHeight = $("#" + id).parent().height();
                var cHeight = $("#" + id).height();
                var height = pHeight - cHeight;

                if (type == "top") {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + "{margin-top: 0px}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = 0 + 'px';
                    $("#tpl-component-2016-01-09-listMarginTop").val(marginTop);
                    $("." + id + "_listMarginTop").val(marginTop);
                }
                else if (type == "middle") {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + "{margin-top: "+ height / 2 +"px}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = height / 2 + 'px';
                    $("#tpl-component-2016-01-09-listMarginTop").val(marginTop);
                    $("." + id + "_listMarginTop").val(marginTop);
                }
                else if (type == "bottom") {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + "{margin-top: "+ height +"px}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = height + 'px';
                    $("#tpl-component-2016-01-09-listMarginTop").val(marginTop);
                    $("." + id + "_marginTop").val(marginTop);
                }
                $('.' + id + '_verticalAlign').val(type);
                /*上一步，下一步*/
                $.common.regain();

            } catch (e) {
               
               
            }
        },
        /**
         * 存储或者初始化水平位置
         */
        storeAndInitVerticalAlign: function () {
            var id = selectedElementInfo.get("id");
            var align = $.trim($("." + id + "_verticalAlign").val());
            $("#tpl-sidebar-2016-10-8-verticalAlign div").removeClass("active");
            if (align == "top") {
                $("#tpl-sidebar-2016-10-8-verticalAlign div").eq(0).addClass("active");
            } else if (align == "middle") {
                $("#tpl-sidebar-2016-10-8-verticalAlign div").eq(1).addClass("active");
            } else if (align == "bottom") {
                $("#tpl-sidebar-2016-10-8-verticalAlign div").eq(2).addClass("active");
            }
        },
        /**
         * 设置边框的风格
         */
        storeBaseListBorderStyle: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderStyle = $.trim($("." + id + "_listBaseBorderStyle").val());
            //移除所有的选中状态
            $("#tpl-component-2016-01-09-listBorderStyle li").removeClass("active");

            if ($.tplComponentListSetting.isNotBlank(borderStyle)) {
                //设置选中状态
                $("#tpl-component-2016-01-09-listBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },
        storeBaseTreeBorderStyle: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderStyle = $.trim($("." + id + "_treeBaseBorderStyle").val());
            //移除所有的选中状态
            $("#tpl-component-2016-01-09-treeBorderStyle li").removeClass("active");

            if ($.tplComponentListSetting.isNotBlank(borderStyle)) {
                //设置选中状态
                $("#tpl-component-2016-01-09-treeBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },
        storeBaseTitleBorderStyle: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderStyle = $.trim($("." + id + "_titleBaseBorderStyle").val());
            //移除所有的选中状态
            $("#tpl-component-2016-01-09-titleBorderStyle li").removeClass("active");

            if ($.tplComponentListSetting.isNotBlank(borderStyle)) {
                //设置选中状态
                $("#tpl-component-2016-01-09-titleBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },
        /**
         * 设置边框的风格
         */
        setBorderStyle: function (selectedElementInfo, childPathOfSelectedElement, obj, storeAdress) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");

                //2、获得填写的字体大小的值
                var borderStyle = $.trim($(obj).find("i").eq(0).attr("class"));
                //如果填写的字体是空的，直接返回
                if (!$.tplComponentListSetting.isNotBlank(borderStyle)) return;

                //移除原来的字体大小css
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-style");
                if (borderStyle) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-style:" + borderStyle + " !important;}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }
                /*上一步，下一步*/
                $.common.regain();
                //将字体设置信息存储在影藏字段中
                $("." + id + storeAdress).val(borderStyle);
            } catch (e) {
            }
        },
        /**
         * 存储和初始化哪些标题被选中了
         */
        storeBaseListBorderSelected: function () {
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderSelected = $.trim($("." + id + "_listBaseBorderSelected").val());
            var array = borderSelected.split("_");
            //alert(array.length);
            for (var index = 0; index < array.length; ++index) {

                //alert(index + " " + array[index]);
                //表示index表示的这个没有被选中，不设置"active状态"
                if (array[index] == "0") {
                    $("#tpl-component-2016-01-09-listBorderSelected div").eq(index).removeClass("active");
                }
                //如果值为"1",表示index表示的这个被选中了，设置"active"状态
                else {
                    $("#tpl-component-2016-01-09-listBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        storeBaseTitleBorderSelected: function () {
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderSelected = $.trim($("." + id + "_titleBaseBorderSelected").val());
            var array = borderSelected.split("_");
            var styleCss = $("#generatedCss").text();
            var styleText = '';
            //5、替换或者在最后拼接
            //alert(array.length);
            for (var index = 0; index < array.length; ++index) {
                //alert(index + " " + array[index]);
                //表示index表示的这个没有被选中，不设置"active状态"
                if (array[index] == "0") {
                    $("#tpl-component-2016-01-09-titleBorderSelected div").eq(index).removeClass("active");

                    if(index == 0){
                        styleText = "#" + id + " h1{border-top :0px none !important;}";
                    }else if(index == 1){
                        styleText = "#" + id + " h1{border-bottom :0px none !important;}";
                    }else if(index == 3){
                        styleText = "#" + id + " h1{border-right :0px none !important;}"
                    }else if(index == 2){
                        styleText = "#" + id + " h1{border-left :0px none !important;}";
                    }
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }
                //如果值为"1",表示index表示的这个被选中了，设置"active"状态
                else {
                    $("#tpl-component-2016-01-09-titleBorderSelected div").eq(index).addClass("active");
                }
            }

        },
        storeBaseTreeBorderSelected: function () {
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderSelected = $.trim($("." + id + "_treeBaseBorderSelected").val());
            var array = borderSelected.split("_");
            //alert(array.length);
            for (var index = 0; index < array.length; ++index) {

                //alert(index + " " + array[index]);
                //表示index表示的这个没有被选中，不设置"active状态"
                if (array[index] == "0") {
                    $("#tpl-component-2016-01-09-treeBorderSelected div").eq(index).removeClass("active");
                }
                //如果值为"1",表示index表示的这个被选中了，设置"active"状态
                else {
                    $("#tpl-component-2016-01-09-treeBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        /**
         * 设置选中的边框
         */
        setBorderSelected: function (selectedElementInfo, childPathOfSelectedElement, obj ,selectAddress) {
            try {
                var cssType = "";

                //1、获得id的属性值
                var id = selectedElementInfo.get("id");

                //2、获得填写的字体大小的值
                var index = parseInt($.trim($(obj).attr("index")));
                //表示的是上边框
                if (index == 1) {
                    cssType = "border-top";
                }
                //表示的是下边框
                else if (index == 3) {
                    cssType = "border-bottom";
                }
                //表示的是左边框
                else if (index == 5) {
                    cssType = "border-left";
                }
                //表示的是右边框
                else if (index == 7) {
                    cssType = "border-right";
                }

                //如果已经是被选中，点击的时候表示的设置没有边框
                if ($(obj).hasClass("active")) {
                    var styleCss = $("#generatedCss").text();
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":0px none !important;}";

                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    var borderSelected = $("." + id + selectAddress).val();
                    var newborderSelected = "";
                    for (var i = 0; i < borderSelected.length; i++) {
                        if (i == (index - 1)) {
                            newborderSelected += "0";
                        } else {
                            newborderSelected += borderSelected[i];
                        }
                    }

                    $("." + id + selectAddress).val(newborderSelected);
                }
                //如果开始没有选中
                else {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);

                    var borderSelected = $("." + id + selectAddress).val();
                    var newborderSelected = "";
                    for (var i = 0; i < borderSelected.length; i++) {
                        if (i == (index - 1)) {
                            newborderSelected += "1";
                        } else {
                            newborderSelected += borderSelected[i];
                        }
                    }
                    /*上一步，下一步*/
                    $.common.regain();
                    $("." + id + selectAddress).val(newborderSelected);
                }
            } catch (e) {
            }
        },
        setBorderColor: function (selectedElementInfo, childPathOfSelectedElement, color) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "color");

                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + childPathOfSelectedElement + "{color:" + color + " !important;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;

                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                $("." + id + "_listBaseBorderColor").val(color);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        setTreeTime:function(){
            var id = selectedElementInfo.get("id");
            var val = "";
            $("#showTreeTime").click(function(){
                val = "show";
                $.common.removeGeneratedCss(id, " .list-body .tpl-component-2016-01-09-list-li-title", "width");
                $.common.removeGeneratedCss(id, " .list-body .time-content", "display");
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                //移除原有的边框样式
                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + " .list-body .tpl-component-2016-01-09-list-li-title{width:68%;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .list-body .time-content{display:block;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);
                $("." + id + "_treeTime").val(val);
                /*上一步，下一步*/
                $.common.regain();
            });
            $("#hideTreeTime").click(function(){
                val = "hide";
                $.common.removeGeneratedCss(id, " .list-body .tpl-component-2016-01-09-list-li-title", "width");
                $.common.removeGeneratedCss(id, " .list-body .time-content", "display");
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + " .list-body .tpl-component-2016-01-09-list-li-title{width:100%;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .list-body .time-content{display:none;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);
                $("." + id + "_treeTime").val(val);
                /*上一步，下一步*/
                $.common.regain();
            });
        },
        /*
         * 发布时间是否显示回显
         * */
        storeTreeTime:function(){
            var id = selectedElementInfo.get("id");
            var val = $("." + id + "_treeTime").val();
            $("#treeTime .component-radio").removeClass("active");
            if(val == "show"){
                $("#treeTime .component-radio").eq(0).addClass("active");
            }else if(val == "hide"){
                $("#treeTime .component-radio").eq(1).addClass("active");
            }
        },
        set_height: function () {
            try {
                var selectedElementId = selectedElementInfo.get("id");
                var height = $.trim($('#height').val());
                if (height !== '') {
                    var css = '#' + selectedElementId + ' .list .list-body ul{height:' + height.replace(' ', '') + '}\n';
                    $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#' + selectedElementId + ' \.list \.list\-body ul\{height:.*?\}\n', 'g'), ''));
                    $('#generatedCss').append(css);
                    $('.' + selectedElementId + '_height').val(height);
                    /*上一步，下一步*/
                    if($('#'+id).children('.resize-cover').length===0)
                        $.common.regain();
                }

            } catch (e) {
            }
        },
        setHeaderMarginAndPadding: function (selectedElementInfo,
                                             childPathOfSelectedElement, cssType, classSuffix, obj) {

            //获得当前被选中的元素的id
            var id = selectedElementInfo.get("id");

            //获得当前填写的高度值
            var inputValue = $.trim($(obj).val());

            //如果栏目间距为空，直接返回
            if (!this.isNotBlank(inputValue))
                return;
            inputValue = this.handleInputValue(obj, inputValue);

            //删除之前设置的参数值
            $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
            //设置参数值
            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + childPathOfSelectedElement + "{"
                + cssType + ":" + inputValue + " !important;}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;

            $("#generatedCss").text(styleCss);
            //设置元素的重复属性
            $("." + id + classSuffix).val(inputValue);
            /*上一步，下一步*/
            $.common.regain();
        },
        storeHeaderMarginAndPadding: function () {
            //获得当前被选中的元素的id

            var id = selectedElementInfo.get("id");

            //获得布局设置的margin-top
            var layoutMarginTop = $("." + id + "_headerMarginTop").val();
            $("#tpl-header-2016-01-26-headerMarginTop").val(layoutMarginTop);
            //获得布局设置的margin-bottom
            var layoutMarginBottom = $("." + id + "_headerMarginBottom").val();
            $("#tpl-header-2016-01-26-headerMarginBottom").val(layoutMarginBottom);

            //获得布局设置的margin-left
            var layoutMarginLeft = $("." + id + "_headerMarginLeft").val();
            $("#tpl-header-2016-01-26-headerMarginLeft").val(layoutMarginLeft);

            //获得布局设置的margin-right
            var layoutMarginRight = $("." + id + "_headerMarginRight").val();
            $("#tpl-header-2016-01-26-headerMarginRight").val(layoutMarginRight);

            //获得布局设置的padding-top
            var layoutPaddingTop = $("." + id + "_headerPaddingTop").val();
            $("#tpl-header-2016-01-26-headerPaddingTop").val(layoutPaddingTop);

            //获得布局设置的padding-bottom
            var layoutPaddingBottom = $("." + id + "_headerPaddingBottom").val();
            $("#tpl-header-2016-01-26-headerPaddingBottom").val(layoutPaddingBottom);

            //获得布局设置的padding-left
            var layoutPaddingLeft = $("." + id + "_headerPaddingLeft").val();
            $("#tpl-header-2016-01-26-headerPaddingLeft").val(layoutPaddingLeft);

            //获得布局设置的padding-right
            var layoutPaddingRight = $("." + id + "_headerPaddingRight").val();
            $("#tpl-header-2016-01-26-headerPaddingRight").val(layoutPaddingRight);

            var rightMarginTop = $("." + id + "_rightMarginTop").val();
            $("#tpl-tree-2016-07-12-rightMarginTop").val(rightMarginTop);

            var rightMarginBottom = $("." + id + "_rightMarginBottom").val();
            $("#tpl-tree-2016-07-12-rightMarginBottom").val(rightMarginBottom);

            var rightMarginLeft = $("." + id + "_rightMarginLeft").val();
            $("#tpl-tree-2016-07-12-rightMarginLeft").val(rightMarginLeft);

            var rightMarginRight = $("." + id + "_rightMarginRight").val();
            $("#tpl-tree-2016-07-12-rightMarginRight").val(rightMarginRight);

            var listMarginTop = $("." + id + "_treeListMarginTop").val();
            $("#tpl-tree-2016-07-12-listMarginTop").val(listMarginTop);

            var listMarginBottom = $("." + id + "_treeListMarginBottom").val();
            $("#tpl-tree-2016-07-12-listMarginBottom").val(listMarginBottom);

            var listMarginLeft = $("." + id + "_treeListMarginTop").val();
            $("#tpl-tree-2016-07-12-listMarginLeft").val(listMarginLeft);

            var listMarginRight = $("." + id + "_treeListMarginRight").val();
            $("#tpl-tree-2016-07-12-listMarginRight").val(listMarginRight);

            var listPaddingTop = $("." + id + "_treeListPaddingTop").val();
            $("#tpl-tree-2016-07-12-listPaddingTop").val(listPaddingTop);

            var listPaddingBottom = $("." + id + "_treeListPaddingBottom").val();
            $("#tpl-tree-2016-07-12-listPaddingBottom").val(listPaddingBottom);

            var listPaddingLeft = $("." + id + "_treeListPaddingTop").val();
            $("#tpl-tree-2016-07-12-listPaddingLeft").val(listPaddingLeft);

            var listPaddingRight = $("." + id + "_treeListPaddingRight").val();
            $("#tpl-tree-2016-07-12-listPaddingRight").val(listPaddingRight);
        },
        setHeaderHeight: function (selectedElementInfo,
                                   childPathOfSelectedElement, obj) {
            //获得当前被选中的元素的id
            var id = selectedElementInfo.get("id");

            //获得当前填写的高度值
            var inputValue = $.trim($(obj).val());
            var iconHeight = $("#" + id + " .rightDiv .next-icon").height();
            var topVal = inputValue - iconHeight;
            //如果栏目间距为空，直接返回
            if (!this.isNotBlank(inputValue))
                return;
            minHeightText = this.handleInputValue(obj, inputValue);
            topVal = topVal + 'px';
            //获得边框的默认间距
            var minHeight = parseInt(minHeightText.substring(0, minHeightText
                .indexOf("px")));

            //删除原先设置的布局的高度
            $.common.removeGeneratedCss(id, childPathOfSelectedElement, "height");
            $.common.removeGeneratedCss(id, " .leftDiv .title-content", "height");
            $.common.removeGeneratedCss(id, " .leftDiv .title-content", "line-height");
            $.common.removeGeneratedCss(id, " .rightDiv .title-more", "height");
            $.common.removeGeneratedCss(id, " .rightDiv .title-more", "line-height");
            $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "top");
            //设置自身的最小高度
            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + childPathOfSelectedElement
                + "{height:" + minHeightText + "}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .leftDiv .title-content"
                + "{height:" + minHeightText + "}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .leftDiv .title-content"
                + "{line-height:" + minHeightText + "}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .title-more"
                + "{height:" + minHeightText + "}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .title-more"
                + "{line-height:" + minHeightText + "}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .next-icon"
                + "{top:" + topVal + "}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
           /* //获得其内部的column的margin-top的值
            var columnMarginTopText = $("#" + id).css("margin-top");
            var columnMarginTopValue = parseInt(columnMarginTopText.substring(
                0, columnMarginTopText.indexOf("px")));

            //获得其内部的column的margin-bottom的值
            var columnMarginBottomText = $("#" + id).css("margin-top");
            var columnMarginBottomValue = parseInt(columnMarginBottomText.substring(0, columnMarginBottomText.indexOf("px")));

            //设置列的最小高度
            //删除之前设置的列的最小高度
            $.common.removeGeneratedCss(id, "", "height");
            var columnMinHeight = minHeight + columnMarginTopValue
                + columnMarginBottomValue;
            var styleText = "#" + id + " h1{height:" + columnMinHeight
                + "px;}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;*/

            $("#generatedCss").text(styleCss);


            //设置元素的重复属性
            $("." + id + "_headerHeight").val(minHeightText);
            /*上一步，下一步*/
            $.common.regain();

        },
        storeHeaderHeight: function () {
            //获得当前被选中的元素的id
            var id = selectedElementInfo.get("id");

            //获取存储的最小高度的值
            var layoutMinHeight = $("." + id + "_headerHeight").val();
            //将值设置到右侧设置区域中
            $("#tpl-header-2016-01-30-headerHeight").val(layoutMinHeight);
        },
        //显示或隐藏更多图标
        setMoreShowStyle: function () {
            var id = selectedElementInfo.get("id");
            var val = "";
            var html = $("#" + id + " .rightDiv a").html();
            $("#moreShow").click(function () {
                val = "show";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $("#" + id + " .rightDiv a").html(html);
                $("#labelMore").css("opacity",1);
                $("." + id + "_rightShowOrHide").val(val);
                /*上一步，下一步*/
                $.common.regain();
            });
            $("#moreHide").click(function () {
                val = "hide";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                var arr = html.split("<");
                $("#" + id + " .rightDiv a").html("<"+arr[1]);
                $("#labelMore").css("opacity",0);
                $("." + id + "_rightShowOrHide").val(val);
                /*上一步，下一步*/
                $.common.regain();
            });
        },
        storeMoreShowStyle: function () {
            var lists = $(".tpl-component-2016-01-09-list");
            var newId = '';
            lists.each(function(i, e) {
                newId = $(e).attr('id');
            })
            var id = newId ||selectedElementInfo.get("id");
            var value = $.trim($("." + id + "_rightShowOrHide").val());
            $("#moreShowStyle span.component-radio").removeClass("active");
            var html = $("#" + id + " .rightDiv a").html();
            if (value == "show") {
                $("#moreShowStyle span.component-radio").eq(0).addClass("active");
                $("#" + id + " .rightDiv a").html(html);
            } else if (value == "hide") {
                $("#moreShowStyle span.component-radio").eq(1).addClass("active");
                var arr = html.split("<");
                $("#" + id + " .rightDiv a").html("<"+arr[1]);
            }
        },
        //显示或隐藏前置图标
        setLeftIconShowStyle: function () {
            var id = selectedElementInfo.get("id");
            var val = "";
            $("#leftIconShow").click(function () {
                val = "show";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $("#" + id + " .title-icon").css("display","inline-block");
                $("." + id + "_leftShowOrHide").val(val);
                /*上一步，下一步*/
                $.common.regain();
            });
            $("#leftIconHide").click(function () {
                val = "hide";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $("#" + id + " .title-icon").hide();
                $("." + id + "_leftShowOrHide").val(val);
                /*上一步，下一步*/
                $.common.regain();
            });
        },
        storeLeftIconShowStyle: function () {
            var id = selectedElementInfo.get("id");
            var value = $.trim($("." + id + "_leftShowOrHide").val());
            $("#leftIconShowStyle span.component-radio").removeClass("active");
            if (value == "show") {
                $("#leftIconShowStyle span.component-radio").eq(0).addClass("active");
                $("#" + id + " .title-icon").css("display","inline-block");
            } else if (value == "hide") {
                $("#leftIconShowStyle span.component-radio").eq(1).addClass("active");
                $("#" + id + " .title-icon").hide();
            }
        },
        //显示或隐藏列表图标
        setListIconShowStyle: function () {
            var id = selectedElementInfo.get("id");
            var val = "";
            $("#listShow").click(function () {
                val = "show";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $.common.removeGeneratedCss(id, " .line-content", "display");
                $.common.removeGeneratedCss(id, " b.line-content1", "padding-left");
                //设置自身的最小高度
                var styleCss = $("#generatedCss").text();
                //下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + " b.line-content1{display:block}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .line-content{padding-left:15px}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                $("." + id + "_listShowOrHide").val(val);
                /*上一步，下一步*/
                $.common.regain();
            });
            $("#listHide").click(function () {
                val = "hide";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $.common.removeGeneratedCss(id, " .line-content", "display");
                $.common.removeGeneratedCss(id, " b.line-content1", "padding-left");
                //设置自身的最小高度
                var styleCss = $("#generatedCss").text();
                //下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + " b.line-content1{display:none}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " b.line-content{padding-left:0px}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                $("." + id + "_listShowOrHide").val(val);
                /*上一步，下一步*/
                $.common.regain();
            });
        },
        storeListIconShowStyle: function () {
            var id = selectedElementInfo.get("id");
            var value = $.trim($("." + id + "_listShowOrHide").val());
            $("#listShowStyle span.component-radio").removeClass("active");
            if (value == "show") {
                $("#listShowStyle span.component-radio").eq(0).addClass("active");
            } else if (value == "hide") {
                $("#listShowStyle span.component-radio").eq(1).addClass("active");
            }
        },
        //设置链接跳转方式
        setLinkButton: function () {
            var id = selectedElementInfo.get("id");
            var val = "";
            $("#treeLocal").click(function () {
                val = "local";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                var target = $(this).attr("value");
                $("#" + id + " .rightDiv a").attr("target", target);
                $("." + id + "_linkStyle").val(val);
            });
            $("#treeNew").click(function () {
                val = "new";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                var target = $(this).attr("value");
                $("#" + id + " .rightDiv a").attr("target", target);
                $("." + id + "_linkStyle").val(val);
            });
        },
        storeLinkButton: function () {
            var id = selectedElementInfo.get("id");
            var value = $.trim($("." + id + "_linkStyle").val());
            $("#treeLinkStyle span.component-radio").removeClass("active");
            if (value == "local") {
                $("#treeLinkStyle span.component-radio").eq(1).addClass("active");
            } else if (value == "new") {
                $("#treeLinkStyle span.component-radio").eq(0).addClass("active");
            }
        },
        // 滑动按钮特效
        hdBtn: function(id,obj) {
            var playValue = $(obj).attr('play');
            if (playValue === '0') {
                playValue = 1;
                $(obj).find("#" + id).animate({
                    left: 0
                }, 'fast');
            } else {
                playValue = 0;
                $(obj).find("#" + id).animate({
                    left: -30
                }, 'fast');
            }
            $(obj).attr('play', playValue);
            return playValue;
        },
        setRightDistance:function(){
            var id = selectedElementInfo.get("id");
            var value = $("#tpl-component-2016-01-09-list-rightDistance").val() + 'px';
            $.common.removeGeneratedCss(id, " .list h1 .leftDiv a.title-content", "left");
            //设置自身的最小高度
            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + " .list h1 .leftDiv a.title-content{left:"+value+"}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + '_titleRightDistance').val(value);
            /*上一步，下一步*/
            $.common.regain();
        },
        storeRightDistance:function(){
            var id = selectedElementInfo.get("id");
            var value = $("." + id + '_titleRightDistance').val();
            $("#tpl-component-2016-01-09-list-rightDistance").val(value);
        },
        setMoreDistance:function(){
            var id = selectedElementInfo.get("id");
            var value = $("#tpl-component-2016-10-09-list-moreDistance").val() + 'px';
            if($("#" + id + " .next-icon").css("display") == "none"){
                $.common.removeGeneratedCss(id, " .list h1 .rightDiv a", "right");
                //设置自身的最小高度
                var styleCss = $("#generatedCss").text();
                //下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + " .list h1 .rightDiv a{right:"+value+"}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                /*上一步，下一步*/
                $.common.regain();
            }else{
                $.common.removeGeneratedCss(id, " .list h1 .rightDiv a .next-icon", "margin-left");
                //设置自身的最小高度
                var styleCss = $("#generatedCss").text();
                //下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + " .list h1 .rightDiv a{margin-left:"+value+"}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                /*上一步，下一步*/
                $.common.regain();
            }

            $("." + id + '_titleMoreDistance').val(value);
        },
        storeMoreDistance:function(){
            var id = selectedElementInfo.get("id");
            var value = $("." + id + '_titleMoreDistance').val();
            $("#tpl-component-2016-10-09-list-moreDistance").val(value);
        },
        setlistRightDistance:function(){
            var id = selectedElementInfo.get("id");
            var value = $("#tpl-component-2016-10-09-list-listRightDistance").val() + 'px';
            $("#" + id + " .line-content").css({"left":value});
            $.common.removeGeneratedCss(id, " .line-content", "left");
            //设置自身的最小高度
            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + " .line-content{left:"+value+"}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            /*上一步，下一步*/
            $.common.regain();
            $("." + id + '_titlelistRightDistance').val(value);
        },
        storelistRightDistance:function(){
            var id = selectedElementInfo.get("id");

            var value = $("." + id + '_titlelistRightDistance').val();
            $("#tpl-component-2016-10-09-list-listRightDistance").val(value);
        },
        setMoreTitle:function(){
            var id = selectedElementInfo.get("id");
            var value = $("#moreText").val();
            if(value == ""){
                $(".moreText").hide();
                return false;
            }
            var html1 = $("#" + id + " .rightDiv a").html();
            var arr = html1.split("<");
            var html = value + '<' + arr[1];
            $("#" + id + " .rightDiv a").html(html);
            $("#labelMore").html(value);
            $("#labelMore").css("opacity",1);
            $("." + id + "_moreText").val(value);
            $(".moreText").hide();
            $.tplComponentListSetting.setMoreShowStyle();
        },
        storeMoreTitle:function(){
            var trees = $(".tpl-component-2016-01-09-list");
            var newId = '';
            trees.each(function(i, e) {
                newId = $(e).attr('id');
            });
            var id = newId ||selectedElementInfo.get("id");
            var value = $("." + id + "_moreText").val();
            var html1 = $("#" + id + " .rightDiv a").html();
            var arr = html1.split("<");
            var html = value + '<' + arr[1];
            $("#" + id + " .rightDiv a").html(html);
            $("#labelMore").html(value);
        },
        setTitleShowOrHide: function (value) {
            var id = selectedElementInfo.get("id");
            $.common.removeGeneratedCss(id, " h1","display");
            if (value == 1) {
                //$("#" + id + " h1").show();
                var styleCss = $("#generatedCss").text();//获取所有的样式
                //拼接对齐方式css样式
                var styleText ="#" + id + " h1{display:block}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);
            } else {
                //$("#" + id + " h1").hide();
                var styleCss = $("#generatedCss").text();//获取所有的样式
                //拼接对齐方式css样式
                var styleText ="#" + id + " h1{display:none}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);
            }
            $("." + id + "_titleShowOrHide").val(value);
            /*上一步，下一步*/
            $.common.regain();
        },
        storeTitleShowOrHide: function () {
            var id = selectedElementInfo.get("id");
            var value = $.trim($("." + id + "_titleShowOrHide").val());
            if (value == 1) {
                $(".titleShow #titleShow").css("left",'0px');
            } else if (value == 0) {
                $(".titleShow #titleShow").css("left",'-30px');
            }
        },
        setTitleNameShowOrHide: function (value) {
            var id = selectedElementInfo.get("id");
            $.common.removeGeneratedCss(id, " h1 .title-content","display");
            if (value == 1) {
                var styleCss = $("#generatedCss").text();//获取所有的样式
                //拼接对齐方式css样式
                var styleText ="#" + id + " h1 .title-content{display:inline-block}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);
            } else {
                //$("#" + id + " h1 .title-content").hide();
                var styleCss = $("#generatedCss").text();//获取所有的样式
                //拼接对齐方式css样式
                var styleText ="#" + id + " h1 .title-content{display:none}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);
            }
            $("." + id + "_titleNameShowOrHide").val(value);
            /*上一步，下一步*/
            $.common.regain();
        },
        storeTitleNameShowOrHide: function () {
            var id = selectedElementInfo.get("id");
            var value = $.trim($("." + id + "_titleNameShowOrHide").val());
             if (value == 0) {
                $(".titleNameShow #titleNameShow").css("left",'-30px');
            }else {
                $(".titleNameShow #titleNameShow").css("left",'0px');
            }
        },
        
        /**
         * 将str1这个原始的字符串中的str2全部换成str3
         * str1      :最原始的字符串
         * str2      :要被替换的字符串
         * str3      :最终替换成的字符串
         *
         * 此外可以增加String对象的原型方法：
         * String.prototype.replaceAll = function(str2,str3){
		 *     return this.replace(new RegExp(str2,"gm"),str3);
		 * }
         */
        replaceAll: function (str1, str2, str3) {
            var newStr = str1;
            if ($.tplComponentListSetting.isNotBlank(str1)) {
                //其中gm中的g表示"执行全局匹配(查找所有匹配而非在找到第一个匹配后停止)"
                //其中gm中的m表示执行多行匹配
                newStr = str1.replace(new RegExp(str2, "gm"), str3);
            }
            return newStr;
        },

        clearBgImage: function () {
            var id = selectedElementInfo.get("id");	//获得id的属性值
            $.common.removeGeneratedCss(id, "", "background-image");//移除原来的背景图片
            $("#treeTitlePath").css("background","url(../images/index.png) 0 0 repeat");
            $("#treeTitleBgImg").show();
            $("#blockPicture").hide();
            $("." + id + "_h1BgPicDate").val('');
            $("." + id + "_titleBackgroundAbsoluteImg").val('');
            $("." + id + "_titleBackgroundRelativeImg").val('');
            /*上一步，下一步*/
            $.common.regain();
        },
        clearH1TitleBgImage: function () {
            var id = selectedElementInfo.get("id");	//获得id的属性值
            $.common.removeGeneratedCss(id, " h1", "background-image");//移除原来的背景图片
            $("#treeH1TitlePath").css("background","url(../images/index.png) 0 0 repeat");
            $("#treeH1TitleBgImg").show();
            $("#blockH1Picture").hide();
            $.common.removeGeneratedCss(id,  " .title-content", "border");
            var styleCss = $("#generatedCss").text();
            var styleText = "#" + id + " .title-content{ border-bottom: 2px solid rgb(0, 159, 135);}";
            //替换或者在最后拼接

            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);
            $("." + id + "_h1TitleBgPicDate").val('');
            $("." + id + "_h1TitleBackgroundAbsoluteImg").val('');
            $("." + id + "_h1TitleBackgroundRelativeImg").val('');
            /*上一步，下一步*/
            $.common.regain();
        },
        clearListBgImage: function () {
            var id = selectedElementInfo.get("id");	//获得id的属性值
            $.common.removeGeneratedCss(id, " .list-body", "background-image");//移除原来的背景图片
            $("#treeListPath").css("background","url(../images/index.png) 0 0 repeat");
            $("#treeListBgImg").show();
            $("#blockListPicture").hide();
            $("." + id + "_listBgPicDate").val('');
            $("." + id + "_listBackgroundAbsoluteImg").val('');
            $("." + id + "_listBackgroundRelativeImg").val('');
            /*上一步，下一步*/
            $.common.regain();
        },
        /**
         * 处理输入值，这种方式仅仅是针对输入框后带有：px,em,%和"清除"的情况
         */
        handleInputValue:function(obj,size){
            //先获得单位
            var unit = $(obj).attr("unit");
            //判断获取到的值中是否有这个单位，如果有不再添加；如果没有直接添加单位
            if(size.indexOf(unit) === -1) {
                size = size + unit;
            }else{
                size = size;
            }

            //去除size中数值和单位的空格,下面的意思是将size中的所有" "换成""
            return $.tplComponentListSetting.replaceAll(size," ","");
        },
        setWidth: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var width = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if (! $.tplComponentListSetting.isNotBlank(width)) return;
                //获得字体大小

                //移除原来的字体大小css
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "width");
                if (width) {
                    width = width.replace(/\s+/g,"");
                    if(width.indexOf("px")==-1){
                        width = width + "px";
                    }
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{width:" + width + "}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }
                //将字体设置信息存储在影藏字段中
                $("." + id + "_width").val(width);
                /*上一步，下一步*/
                if($('#'+id).children('.resize-cover').length===0)
                    $.common.regain();
            } catch (e) {


            }
        },
        storeAndInitWidth: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的宽度
            var width = $("." + id + "_width").val();

            //设置宽度
            $("#width").val(width);
        },
        /**
         * 改变时间的显示状态
         */
        initTime: function () {
                //1、获得id的属性值
                var trees = $(".tpl-component-2016-01-09-list");
                var newId = '';
                trees.each(function (i, e) {
                    newId = $(e).attr('id');
                });
                var id = newId || selectedElementInfo.get("id");
                var timeFormatText = $("." + id + "_timeFormat").val();
                $("#tpl-component-2016-01-09-list-changeTime").parent().find(".select-content").html(timeFormatText);
                $("#" + id + " #static .time-content").each(function (index, listDomEle) {
                    
                    var timestamp = parseInt($.trim($(listDomEle).attr("name")));
                    var newTimeText = new Date(timestamp).format(timeFormatText);
                    if (newTimeText.indexOf('[') != -1) {
                        newTimeText = newTimeText.substring(0, newTimeText.length);
                    }
                    $(listDomEle).text(newTimeText);
                });
                $("." + id + "_timeFormat").val(timeFormatText);
            
        },
        /**
         * 存储和初始化margin和padding
         */
        storeAndInitMarginAndPadding: function () {
            //获得当前被选中的元素的id
            var id = selectedElementInfo.get("id");
            //获得栏目设置的margin-top
            var listMarginTop = $("." + id + "_listMarginTop").val();
            $("#tpl-component-2016-01-09-listMarginTop").val(listMarginTop);
            //获得栏目设置的margin-bottom
            var listMarginBottom = $("." + id + "_listMarginBottom").val();
            $("#tpl-component-2016-01-09-listMarginBottom").val(listMarginBottom);
            //获得栏目设置的margin-top
            var listMarginLeft = $("." + id + "_listMarginLeft").val();
            $("#tpl-component-2016-01-09-listMarginLeft").val(listMarginLeft);
            //获得栏目设置的margin-bottom
            var listMarginRight = $("." + id + "_listMarginRight").val();
            $("#tpl-component-2016-01-09-listMarginRight").val(listMarginRight);
            //获得栏目设置的padding-top
            var listPaddingTop = $("." + id + "_listPaddingTop").val();
            $("#tpl-component-2016-01-09-listPaddingTop").val(listPaddingTop);
            //获得设置栏目设置的padding-bottom
            var listPaddingBottom = $("." + id + "_listPaddingBottom").val();
            $("#tpl-component-2016-01-09-listPaddingBottom").val(listPaddingBottom);
            //获得设置栏目设置的padding-left
            var listPaddingLeft = $("." + id + "_listPaddingLeft").val();
            $("#tpl-component-2016-01-09-listPaddingLeft").val(listPaddingLeft);
            //获得设置栏目设置的padding-right
            var listPaddingRight = $("." + id + "_listPaddingRight").val();
            $("#tpl-component-2016-01-09-listPaddingRight").val(listPaddingRight);
            //获得标题设置的padding-left
            var titlePaddingLeft = $("." + id + "_titlePaddingLeft").val();
            $("#tpl-component-2016-01-09-titlePaddingLeft").val(titlePaddingLeft);
            //获得标题设置的padding-right
            var titlePaddingRight = $("." + id + "_titlePaddingRight").val();
            $("#tpl-component-2016-01-09-titlePaddingRight").val(titlePaddingRight);
            var titlePaddingTop = $("." + id + "_titlePaddingTop").val();
            $("#tpl-component-2016-01-09-titlePaddingTop").val(titlePaddingTop);
            var titlePaddingBottom = $("." + id + "_titlePaddingBottom").val();
            $("#tpl-component-2016-01-09-titlePaddingBottom").val(titlePaddingBottom);
        },
        /**
         * selectedElementInfo        :表示的是被选中的元素
         * childPathOfSelectedElement :表示的是被选中的元素的后代
         * cssType                    :表示的是cssType,其值可以是margin-top,margin-right,margin-bottom,margin-left
         * classSuffix                :表示的是隐藏域的class属性值的后缀，这个域的值是存储边距值的内容
         * obj                        :表示的是当前输入框
         *
         * 调用方式如下:
         * .setMarginAndPadding(selectedElementInfo,' .column','margin-top','_listMarginTop',this);"
         */
        setMarginAndPadding: function (selectedElementInfo, childPathOfSelectedElement, cssType, classSuffix, obj) {
            //获得当前被选中的元素的id
            var id = selectedElementInfo.get("id");
            //获得当前填写的高度值
            var inputValue = $.trim($(obj).val());
            //如果栏目间距为空，直接返回
            if (!this.isNotBlank(inputValue)) return;
            inputValue = inputValue.replace(/\s+/g,"");
            if(inputValue.indexOf("px")==-1){
                inputValue = inputValue + "px";
            }
            //删除之前设置的参数值
            $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
            if(cssType == 'margin-left' || cssType == 'margin-right'){
                $("." + id + "_align").val("");
                $("#tpl-sidebar-2016-10-8-align div").removeClass("active");
            }else if(cssType == 'margin-top' || cssType == 'margin-bottom'){
                $("." + id + "_verticalAlign").val("");
                $("#tpl-sidebar-2016-10-8-verticalAlign div").removeClass("active");
            }
            //设置参数值
            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":" + inputValue + "}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            //设置元素的重复属性
            $("." + id + classSuffix).val(inputValue);
            /*上一步，下一步*/
            $.common.regain();
        },

    };
    /**
     * 标题高级设置
     */
    $.tplComponentListTitleSetting = {
        storeTitlePic: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得背景图片
            var bgPic = $("." + id + "_titleBackgroundAbsoluteImg").val();
            $("#blockPicture").show();
            if(bgPic != ""){
            	$("#treeTitlePath").css("background", "url("+bgPic+") center center no-repeat");
            	 var img = $("#treeTitlePath");
 				var hWidth = 170;
 				var hHeight = 94;
 				$("<img/>").attr("src", bgPic).load(function() {
 				        //图片的真实宽高
 				        var _width = this.width;
 				        var _height = this.height;
 						//图片容器的宽高
 						var width = hWidth;
 						var height = hHeight;
 						//图片页面中的宽高
 						var iwidth = img.width();
 						var iheight = img.height();
 						//图片真实宽度大于图片容器宽度
 						if(_width>width){
 							//图片宽度为容器宽度
 							iwidth = width;
 							//图片高度 为对应比例数值
 							iheight = Math.floor(_height*width/_width);
 						}else{
 							//图片真实宽度较小
 							//图片宽度为真实宽度
 							iwidth = _width;
 							//图片高度为真实高度
 							iheight = _height;
 						}
 					img.css('background-size',iwidth+'px '+iheight+'px');	
 				});
                 $("#treeTitleBgImg").hide();
            }        
            //$("#uploadBlockPic").parent().parent().css({'background-image':'url('+bgPic+')','background-size':'170px 94px'});
        },
        storeTitleLeftPic: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得背景图片
            var bgPic = $("." + id + "_titleLeftBackgroundAbsoluteImg").val();
            $("#blockLeftPicture").show();
            if(bgPic != ""){
            	$("#treeTitleLeftPath").css("background", "url("+bgPic+") center center no-repeat");
            	 var img = $("#treeTitleLeftPath");
 				var hWidth = 170;
 				var hHeight = 94;
 				$("<img/>").attr("src", bgPic).load(function() {
 				        //图片的真实宽高
 				        var _width = this.width;
 				        var _height = this.height;
 						//图片容器的宽高
 						var width = hWidth;
 						var height = hHeight;
 						//图片页面中的宽高
 						var iwidth = img.width();
 						var iheight = img.height();
 						//图片真实宽度大于图片容器宽度
 						if(_width>width){
 							//图片宽度为容器宽度
 							iwidth = width;
 							//图片高度 为对应比例数值
 							iheight = Math.floor(_height*width/_width);
 						}else{
 							//图片真实宽度较小
 							//图片宽度为真实宽度
 							iwidth = _width;
 							//图片高度为真实高度
 							iheight = _height;
 						}
 					img.css('background-size',iwidth+'px '+iheight+'px');	
 				});
                 $("#treeTitleLeftBgImg").hide();
            }   
            //$("#uploadBlockPic").parent().parent().css({'background-image':'url('+bgPic+')','background-size':'170px 94px'});
        },
        storeTitleRightPic: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得背景图片
            var bgPic = $("." + id + "_titleRightBackgroundAbsoluteImg").val();
            $("#blockRightPicture").show();
            if(bgPic != ""){
            	$("#treeTitleRightPath").css("background", "url("+bgPic+") center center no-repeat");
            	 var img = $("#treeTitleRightPath");
 				var hWidth = 170;
 				var hHeight = 94;
 				$("<img/>").attr("src", bgPic).load(function() {
 				        //图片的真实宽高
 				        var _width = this.width;
 				        var _height = this.height;
 						//图片容器的宽高
 						var width = hWidth;
 						var height = hHeight;
 						//图片页面中的宽高
 						var iwidth = img.width();
 						var iheight = img.height();
 						//图片真实宽度大于图片容器宽度
 						if(_width>width){
 							//图片宽度为容器宽度
 							iwidth = width;
 							//图片高度 为对应比例数值
 							iheight = Math.floor(_height*width/_width);
 						}else{
 							//图片真实宽度较小
 							//图片宽度为真实宽度
 							iwidth = _width;
 							//图片高度为真实高度
 							iheight = _height;
 						}
 					img.css('background-size',iwidth+'px '+iheight+'px');	
 				});
                 $("#treeTitleRightBgImg").hide();
            }   
        },
        storeH1TitlePic: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得背景图片
            var bgPic = $("." + id + "_h1TitleBackgroundAbsoluteImg").val();
            $("#blockH1Picture").show();
            if(bgPic != ""){
                $("#treeH1TitlePath").css("background", "url("+bgPic+") center center no-repeat");
                var img = $("#treeH1TitlePath");
                var hWidth = 170;
                var hHeight = 94;
                $("<img/>").attr("src", bgPic).load(function() {
                    //图片的真实宽高
                    var _width = this.width;
                    var _height = this.height;
                    //图片容器的宽高
                    var width = hWidth;
                    var height = hHeight;
                    //图片页面中的宽高
                    var iwidth = img.width();
                    var iheight = img.height();
                    //图片真实宽度大于图片容器宽度
                    if(_width>width){
                        //图片宽度为容器宽度
                        iwidth = width;
                        //图片高度 为对应比例数值
                        iheight = Math.floor(_height*width/_width);
                    }else{
                        //图片真实宽度较小
                        //图片宽度为真实宽度
                        iwidth = _width;
                        //图片高度为真实高度
                        iheight = _height;
                    }
                    img.css('background-size',iwidth+'px '+iheight+'px');
                });
                $("#treeH1TitleBgImg").hide();
            }
            //$("#uploadBlockPic").parent().parent().css({'background-image':'url('+bgPic+')','background-size':'170px 94px'});
        },
        storeListPic: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得背景图片
            var bgPic = $("." + id + "_listBackgroundAbsoluteImg").val();
            $("#blockListPicture").show();
            if(bgPic != ""){
            	$("#treeListPath").css("background", "url("+bgPic+") center center no-repeat");
            	 var img = $("#treeListPath");
 				var hWidth = 170;
 				var hHeight = 94;
 				$("<img/>").attr("src", bgPic).load(function() {
 				        //图片的真实宽高
 				        var _width = this.width;
 				        var _height = this.height;
 						//图片容器的宽高
 						var width = hWidth;
 						var height = hHeight;
 						//图片页面中的宽高
 						var iwidth = img.width();
 						var iheight = img.height();

 						//图片真实宽度大于图片容器宽度
 						if(_width>width){
 							//图片宽度为容器宽度
 							iwidth = width;
 							//图片高度 为对应比例数值
 							iheight = Math.floor(_height*width/_width);
 						}else{
 							//图片真实宽度较小
 							//图片宽度为真实宽度
 							iwidth = _width;
 							//图片高度为真实高度
 							iheight = _height;
 						}
 					img.css('background-size',iwidth+'px '+iheight+'px');
 				});
                 $("#treeListBgImg").hide();
            }   
        },
        storeAndInitListTitleFontFamily: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var fontFamily = $("." + id + "_titleFontFamily").val();
            //设置字体
            $("#tpl-component-2016-01-09-list-title-font-Family-Val").text(fontFamily);
        },
        storeAndInitListRightTitleFontFamily: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var fontFamily = $("." + id + "_titleRightFontFamily").val();
            //设置字体
            $("#tpl-component-2016-01-09-list-title-rightFont-Family-Val").text(fontFamily);
        },
        /**
         * 设置文字的字体
         */
        setFontFamily: function () {
            //1、获得字体类型
            var fontFamily = $.trim($("#tpl-component-2016-01-09-list-title-font-Family-Val").text());
            //如果选择的是请选择，直接返回
            if (fontFamily == "请选择") return;
            //2、获得id的属性值
            var id = selectedElementInfo.get("id");
            //3、移除先前设置的字体
            $.common.removeGeneratedCss(id, " .title-content", "font-family");
            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + " .title-content{font-family:" + fontFamily + " !important;}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + "_titleFontFamily").val(fontFamily);
            /*上一步，下一步*/
            $.common.regain();
        },
        setRightFontFamily: function () {
            //1、获得字体类型
            var fontFamily = $.trim($("#tpl-component-2016-01-09-list-title-rightFont-Family-Val").text());
            //如果选择的是请选择，直接返回
            if (fontFamily == "请选择") return;
            //2、获得id的属性值
            var id = selectedElementInfo.get("id");
            //3、移除先前设置的字体
            $.common.removeGeneratedCss(id, " .rightDiv a", "font-family");
            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + "  .rightDiv a{font-family:" + fontFamily + " !important;}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + "_titleRightFontFamily").val(fontFamily);
            /*上一步，下一步*/
            $.common.regain();
        },
        /**
         * 选择字体的时候触发这个函数
         */
        selectTitleFontFamily: function () {
            $("#tpl-component-2016-01-09-list-title-font-Family-Val").bind("setFontFamily", function () {
                $.tplComponentListTitleSetting.setFontFamily();
            });
            $("#tpl-component-2016-01-09-list-title-font-Family li").click(function (event) {
                //使用triggerHandler的好处是此函数不会触发默认的函数，不会冒泡
                $("#tpl-component-2016-01-09-list-title-font-Family-Val").triggerHandler("setFontFamily", []);
            });
        },
        selectRightTitleFontFamily: function () {
            $("#tpl-component-2016-01-09-list-title-rightFont-Family-Val").bind("setRightFontFamily", function () {
                $.tplComponentListTitleSetting.setRightFontFamily();
            });
            $("#tpl-component-2016-01-09-list-title-rightFont-Family li").click(function (event) {
                //使用triggerHandler的好处是此函数不会触发默认的函数，不会冒泡
                $("#tpl-component-2016-01-09-list-title-rightFont-Family-Val").triggerHandler("setRightFontFamily", []);
            });
        },
        /**
         * 存储或者初始化标题字体大小
         */
        storeAndInitTitleFontSize: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var fontSize = $("." + id + "_titleFontSize").val();
            //设置字体
            $("#tpl-component-2016-01-09-list-titleFontSize").val(fontSize);
        },
        storeAndInitRightTitleFontSize: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var fontSize = $("." + id + "_titleRightFontSize").val();
            //设置字体
            $("#tpl-component-2016-01-09-list-titleRightFontSize").val(fontSize);
        },
        /**
         * 设置标题的文字大小
         */
        setFontSize: function (selectedElementInfo, childPathOfSelectedElement, obj, storeFontSize) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var fontSize = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if (!$.tplComponentListSetting.isNotBlank(fontSize)) return;
                //获得字体大小
                fontSize = $.tplComponentListSetting.handleInputValue(obj, fontSize);

                //移除原来的字体大小css
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "font-size");
                if (fontSize) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{font-size:" + fontSize + " !important;}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + storeFontSize).val(fontSize);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或者初始化标题字体行高
         */
        storeAndInitTitleLineHeight: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var lineHeight = $("." + id + "_titleLineHeight").val();

            //设置字体
            $("#tpl-component-2016-01-09-list-titleLineHeight").val(lineHeight);
        },
        storeAndInitRightTitleLineHeight: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var lineHeight = $("." + id + "_titleRightLineHeight").val();

            //设置字体
            $("#tpl-component-2016-01-09-list-titleRightLineHeight").val(lineHeight);

        },
        /**
         * 设置标题的文字行高
         */
        setLineHeight: function (selectedElementInfo, childPathOfSelectedElement, obj, storeLineHeight) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var lineHeight = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if (!$.tplComponentListSetting.isNotBlank(lineHeight)) return;
                //获得字体大小
                lineHeight = $.tplComponentListSetting.handleInputValue(obj, lineHeight);
                //移除原来的字体大小css
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "line-height");
                if (lineHeight) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{line-height:" + lineHeight + " !important;}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + storeLineHeight).val(lineHeight);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或者初始化边框的颜色
         */
        storeAndInitTitleColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var titleColor = $.trim($("." + id + "_titleColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-titleColor", titleColor);
        },
        storeAndInitRightTitleColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var titleColor = $.trim($("." + id + "_titleRightColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-titleRightColor", titleColor);
        },
        storeAndInitTitleHoverColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var titleColor = $.trim($("." + id + "_titleHoverColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-titleHoverColor", titleColor);
        },
        storeAndInitTitleRightHoverColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var titleColor = $.trim($("." + id + "_titleRightHoverColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-titleRightHoverColor", titleColor);
        },
        /**
         * 设置标题的字体的颜色
         * selectedElementInfo        :表示被选中的元素值
         * childPathOfSelectedElement :表示其后代
         */
        setColor: function (selectedElementInfo, childPathOfSelectedElement, color, storeColor) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "color");
                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + childPathOfSelectedElement + "{color:" + color + "}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                $("." + id + storeColor).val(color);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        setHoverColor: function (selectedElementInfo, childPathOfSelectedElement, color, storeColor) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + childPathOfSelectedElement + ":hover{color:" + color + "}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                $("." + id + storeColor).val(color);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        setListHoverColor: function (selectedElementInfo, color, storeColor) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + " a.tpl-component-2016-01-09-list-li-title:hover span.line-content{color:" + color + "}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                $("." + id + storeColor).val(color);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或者初始化标题字体行高
         */
        storeAndInitTitleTextAlign: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var textAlign = $.trim($("." + id + "_titleTextAlign").val());
            $("#tpl-component-2016-01-09-list-titleTextAlign div").removeClass("active");
            if (textAlign == "left") {
                $("#tpl-component-2016-01-09-list-titleTextAlign div").eq(0).addClass("active");
            } else if (textAlign == "center") {
                $("#tpl-component-2016-01-09-list-titleTextAlign div").eq(1).addClass("active");
            } else if (textAlign == "right") {
                $("#tpl-component-2016-01-09-list-titleTextAlign div").eq(2).addClass("active");
            }
        },
        /**
         * 设置标题的文字行高
         * value   :表示的是值，可以传递的有"left","center","right"
         */
        setTextAlign: function (selectedElementInfo, childPathOfSelectedElement, value, storeTextAlign) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //如果填写的字体是空的，直接返回
                if (!$.tplComponentListSetting.isNotBlank(value)) return;
                //移除原来的字体大小css
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "text-align");
                if (value) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{text-align:" + value + " !important;}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }
                //将字体设置信息存储在影藏字段中
                $("." + id + storeTextAlign).val(value);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或者初始化标题字体行高
         */
        storeAndInitTitleFontStyle: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            $("#tpl-component-2016-01-09-list-titleFontStyle div").removeClass("active");
            //获得字体是否加粗的标记
            var titleFontWeightFlag = $.trim($("." + id + "_titleFontWeight").val());
            //当不为空串的时候执行
            if (titleFontWeightFlag != "") {
                $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(parseInt(titleFontWeightFlag)).addClass("active");
            }
            //获得字体风格的标记
            var titleFontStyleFlag = $.trim($("." + id + "_titleFontStyle").val());
            if (titleFontStyleFlag != "") {
                $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(parseInt(titleFontStyleFlag)).addClass("active");
            }
            //获得字体修饰的标记
            var titleTextDecorationFlag = $.trim($("." + id + "_titleTextDecoration").val());
            if (titleTextDecorationFlag != "") {
                $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(parseInt(titleTextDecorationFlag)).addClass("active");
            }
        },
        /**
         * 设置选中的元素字体样式
         * selectedElementInfo :表示的是选中的元素的信息
         * childPathOfSelectedElement:表示选中的路径
         * key:表示的是选中的边框显示值 1加粗；2：倾斜；3下划线；4删除线；
         * type:表示的是要存储的是哪种类型
         * obj:this对象
         */
        setHoverFontStyle: function (selectedElementInfo, childPathOfSelectedElement, key, type, obj) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                var cssType = "";
                var fontCss = "";
                if (key == "0") {
                    //加粗
                    cssType = "font-weight";
                    fontCss = "font-weight: bold;";
                } else if (key == "1") {
                    //倾斜
                    cssType = "font-style";
                    fontCss = "font-style: italic;";
                } else if (key == "2") {
                    //下划线
                    cssType = "text-decoration";
                    fontCss = "text-decoration: underline;";

                    $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(3).removeClass("active");
                } else if (key == "3") {
                    //删除线
                    cssType = "text-decoration";
                    fontCss = "text-decoration: line-through;";

                    $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(2).removeClass("active");
                }
                //移除原有的边框样式
                if ($(obj).hasClass("active")) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement+":hover", cssType);
                    $("." + id + type).val("");
                    return;
                }
                var styleCss = $("#generatedCss").text();//获取所有的样式
                //拼接对齐方式css样式
                var styleText = "#" + id + childPathOfSelectedElement + ":hover{" + fontCss + "}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                //将字体设置信息存储在影藏字段中
                $("." + id + type).val(key);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        setFontStyle: function (selectedElementInfo, childPathOfSelectedElement, key, type, obj) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                var cssType = "";
                var fontCss = "";
                if (key == "0") {
                    //加粗
                    cssType = "font-weight";
                    fontCss = "font-weight: bold;";
                } else if (key == "1") {
                    //倾斜
                    cssType = "font-style";
                    fontCss = "font-style: italic;";
                } else if (key == "2") {
                    //下划线
                    cssType = "text-decoration";
                    fontCss = "text-decoration: underline;";

                    $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(3).removeClass("active");
                } else if (key == "3") {
                    //删除线
                    cssType = "text-decoration";
                    fontCss = "text-decoration: line-through;";

                    $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(2).removeClass("active");
                }
                //移除原有的边框样式
                if ($(obj).hasClass("active")) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
                    $("." + id + type).val("");
                    return;
                }
                var styleCss = $("#generatedCss").text();//获取所有的样式
                //拼接对齐方式css样式
                var styleText = "#" + id + childPathOfSelectedElement + "{" + fontCss + "}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                //将字体设置信息存储在影藏字段中
                $("." + id + type).val(key);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或者初始化边框的宽度
         */
        storeAndInitTitleBorderWidth: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderWidth = $("." + id + "_titleBorderWidth").val();
            //设置字体
            $("#tpl-component-2016-01-09-list-titleBorderWidth").val(borderWidth);
        },
        /**
         * 存储或者初始化边框的颜色
         */
        storeAndInitTitleBorderColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var listBorderColor = $.trim($("." + id + "_titleBorderColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-titleBorderColor", listBorderColor);
        },
        /**
         * 设置边框的颜色
         * selectedElementInfo        :表示被选中的元素值
         * childPathOfSelectedElement :表示其后代
         */
        setBorderColor: function (selectedElementInfo, childPathOfSelectedElement, color) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-color");

                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + childPathOfSelectedElement + "{border-color:" + color + " !important;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;

                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                $("." + id + "_titleBorderColor").val(color);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 设置边框的宽度（粗细）
         */
        setBorderWidth: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var borderWidth = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if (!$.tplComponentListSetting.isNotBlank(borderWidth)) return;
                //获得字体大小
                borderWidth = $.tplComponentListSetting.handleInputValue(obj, borderWidth);

                //移除原来的字体大小css
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-width");
                if (borderWidth) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-width:" + borderWidth + "}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + "_titleBorderWidth").val(borderWidth);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 设置边框的风格
         */
        storeAndInitTitleBorderStyle: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderStyle = $.trim($("." + id + "_titleBorderStyle").val());
            //移除所有的选中状态
            $("#tpl-component-2016-01-09-list-titleBorderStyle li").removeClass("active");

            if ($.tplComponentListSetting.isNotBlank(borderStyle)) {
                //设置选中状态
                $("#tpl-component-2016-01-09-list-titleBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },

        /**
         * 存储和初始化哪些标题被选中了
         */
        storeAndInitTitleBorderSelected: function () {
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderSelected = $.trim($("." + id + "_titleBorderSelected").val());
            var array = borderSelected.split("_");
            //alert(array.length);
            for (var index = 0; index < array.length; ++index) {

                //alert(index + " " + array[index]);
                //表示index表示的这个没有被选中，不设置"active状态"
                if (array[index] == "0") {
                    $("#tpl-component-2016-01-09-list-titleBorderSelected div").eq(index).removeClass("active");
                }
                //如果值为"1",表示index表示的这个被选中了，设置"active"状态
                else {
                    $("#tpl-component-2016-01-09-list-titleBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        /**
         * 设置选中的边框
         */
        setBorderSelected: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                var cssType = "";

                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var index = parseInt($.trim($(obj).attr("index")));
                //表示的是上边框
                if (index == 1) {
                    cssType = "border-top";
                }
                //表示的是下边框
                else if (index == 3) {
                    cssType = "border-bottom";
                }
                //表示的是左边框
                else if (index == 5) {
                    cssType = "border-left";
                }
                //表示的是右边框
                else if (index == 7) {
                    cssType = "border-right";
                }

                //如果已经是被选中，点击的时候表示的设置没有边框
                if ($(obj).hasClass("active")) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":0px none !important;}";

                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    var borderSelected = $("." + id + "_titleBorderSelected").val();
                    var newborderSelected = "";
                    for (var i = 0; i < borderSelected.length; i++) {
                        if (i == (index - 1)) {
                            newborderSelected += "0";
                        } else {
                            newborderSelected += borderSelected[i];
                        }
                    }

                    $("." + id + "_titleBorderSelected").val(newborderSelected);
                }
                //如果开始没有选中
                else {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);

                    var borderSelected = $("." + id + "_titleBorderSelected").val();
                    var newborderSelected = "";
                    for (var i = 0; i < borderSelected.length; i++) {
                        if (i == (index - 1)) {
                            newborderSelected += "1";
                        } else {
                            newborderSelected += borderSelected[i];
                        }
                    }

                    $("." + id + "_titleBorderSelected").val(newborderSelected);
                    /*上一步，下一步*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },
        /**
         * 设置或初始化标题的背景颜色
         */
        storeAndInitTitleBackgroundColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var backgroundColor = $.trim($("." + id + "_titleBackgroundColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-titleBackgroundColor", backgroundColor);
        },
        storeAndInitH1TitleBackgroundColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var backgroundColor = $.trim($("." + id + "_h1TitleBackgroundColor").val());
            //初始化配置页面部分的选中效果
            initColor("treeH1TitleBackgroundColor", backgroundColor);
        },
        storeAndInitTitleLeftBackgroundColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var backgroundColor = $.trim($("." + id + "_titleLeftBackgroundColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-titleLeftBackgroundColor", backgroundColor);
        },
        storeAndInitTitleRightBackgroundColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var backgroundColor = $.trim($("." + id + "_titleRightBackgroundColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-titleRightBackgroundColor", backgroundColor);
        },
        /**
         * 设置标题的背景颜色
         */
        setBackgroundColor: function (selectedElementInfo, childPathOfSelectedElement, color, storeBackgroundColor) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background");

                var styleCss = $("#generatedCss").text();//获取所有的样式
                if (color == null) {
                    color = "transparent";
                }
                var styleText = "#" + id + childPathOfSelectedElement + "{background:" + color + " !important;}";
                //替换或者在最后拼接

                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                $("." + id + storeBackgroundColor).val(color);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        setTitleBackgroundColor: function (selectedElementInfo, childPathOfSelectedElement, color, storeBackgroundColor) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background");
                $.common.removeGeneratedCss(id,  " .title-content", "border-bottom");

                var styleCss = $("#generatedCss").text();//获取所有的样式
                if (color == null) {
                    color = "transparent";
                }
                var styleText = "#" + id + childPathOfSelectedElement + "{background:" + color + " !important;}";
                //替换或者在最后拼接

                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .title-content{border-bottom:0 none}";
                //替换或者在最后拼接

                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);
                $("." + id + storeBackgroundColor).val(color);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或初始化定位相关参数
         */
        storeAndInitTitleBackGroundPosition: function () {
            //获取选中元素的id
            var id = selectedElementInfo.get("id");

            //设置点中的是哪个按钮
            var key = $("." + id + "_titleBackgroundPositionBtnKey").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //先删除其它选中效果，然后再添加新的元素选中效果
                $("#tpl-component-2016-01-09-list-titleBackgroundPositionBtnKey i").removeClass("active");
                $("#tpl-component-2016-01-09-list-titleBackgroundPositionBtnKey i").eq(parseInt($.trim(key))).addClass("active");
            }

            //设置改变的值
            var posX = $("." + id + "_titleBackgroundPositionX").val();
            var posY = $("." + id + "_titleBackgroundPositionY").val();

            //设置选中了哪个key
            $("#posX").val(posX);//获取横向坐标值
            $("#posY").val(posY);//获取纵向坐标值
        },
        storeAndInitH1TitleBackGroundPosition: function () {
            //获取选中元素的id
            var id = selectedElementInfo.get("id");

            //设置点中的是哪个按钮
            var key = $("." + id + "_h1TitleBackgroundPositionBtnKey").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //先删除其它选中效果，然后再添加新的元素选中效果
                $("#tpl-component-2016-01-09-list-h1TitleBackgroundPositionBtnKey i").removeClass("active");
                $("#tpl-component-2016-01-09-list-h1TitleBackgroundPositionBtnKey i").eq(parseInt($.trim(key))).addClass("active");
            }

            //设置改变的值
            var posX = $("." + id + "_h1TitleBackgroundPositionX").val();
            var posY = $("." + id + "_h1TitleBackgroundPositionY").val();

            //设置选中了哪个key
            $("#posTitleX").val(posX);//获取横向坐标值
            $("#posTitleY").val(posY);//获取纵向坐标值
        },
        /**
         * 设置选中的元素或者其内部元素的背景定位
         * selectedElementInfo :表示的是选中的元素的信息
         * childPathOfSelectedElement:表示选中的路径
         * key:表示的是背景定位 1：上 2：左 3：右 4：下 5：居中
         * obj 选中的元素
         */
        setBackGroundPosition: function (selectedElementInfo, childPathOfSelectedElement, key, obj) {
            try {
                //首先给文本框赋值
                if (key == '0') {
                    $("#posX").val("50%");
                    $("#posY").val("0%");
                } else if (key == '1') {
                    $("#posX").val("0%");
                    $("#posY").val("50%");
                } else if (key == '2') {
                    $("#posX").val("50%");
                    $("#posY").val("50%");
                } else if (key == '3') {
                    $("#posX").val("100%");
                    $("#posY").val("50%");
                } else if (key == '4') {
                    $("#posX").val("50%");
                    $("#posY").val("100%");
                }
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //移除原来的背景颜色
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background-position");
                if ($(obj).attr('class').search(/active/) < 0) {
                    var posX = $("#posX").val();//获取横向坐标值
                    var posY = $("#posY").val();//获取纵向坐标值
                    //获取所有的css样式
                    var styleCss = $("#generatedCss").text();
                    //下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement +
                        "{background-position:" + posX + " " + posY + ";}";
                    //替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    //设置点中的是哪个按钮
                    $("." + id + "_titleBackgroundPositionBtnKey").val(key);
                    //设置改变的值
                    $("." + id + "_titleBackgroundPositionX").val(posX);
                    $("." + id + "_titleBackgroundPositionY").val(posY);
                    /*上一步，下一步*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },
        setH1TitleBackGroundPosition: function (selectedElementInfo, childPathOfSelectedElement, key, obj) {
            try {
                //首先给文本框赋值
                if (key == '0') {
                    $("#posTitleX").val("50%");
                    $("#posTitleY").val("0%");
                } else if (key == '1') {
                    $("#posTitleX").val("0%");
                    $("#posTitleY").val("50%");
                } else if (key == '2') {
                    $("#posTitleX").val("50%");
                    $("#posTitleY").val("50%");
                } else if (key == '3') {
                    $("#posTitleX").val("100%");
                    $("#posY").val("50%");
                } else if (key == '4') {
                    $("#posTitleX").val("50%");
                    $("#posTitleY").val("100%");
                }
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //移除原来的背景颜色
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background-position");
                if ($(obj).attr('class').search(/active/) < 0) {
                    var posX = $("#posTitleX").val();//获取横向坐标值
                    var posY = $("#posTitleY").val();//获取纵向坐标值
                    //获取所有的css样式
                    var styleCss = $("#generatedCss").text();
                    //下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement +
                        "{background-position:" + posX + " " + posY + ";}";
                    //替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    //设置点中的是哪个按钮
                    $("." + id + "_h1TitleBackgroundPositionBtnKey").val(key);
                    //设置改变的值
                    $("." + id + "_h1TitleBackgroundPositionX").val(posX);
                    $("." + id + "_h1TitleBackgroundPositionY").val(posY);
                    /*上一步，下一步*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },
        setListBackGroundPosition: function (selectedElementInfo, childPathOfSelectedElement, key, obj) {
            try {
                //首先给文本框赋值
                if (key == '0') {
                    $("#posListX").val("50%");
                    $("#posListY").val("0%");
                } else if (key == '1') {
                    $("#posListX").val("0%");
                    $("#posListY").val("50%");
                } else if (key == '2') {
                    $("#posListX").val("50%");
                    $("#posListY").val("50%");
                } else if (key == '3') {
                    $("#posListX").val("100%");
                    $("#posListY").val("50%");
                } else if (key == '4') {
                    $("#posListX").val("50%");
                    $("#posListY").val("100%");
                }
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //移除原来的背景颜色
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background-position");
                if ($(obj).attr('class').search(/active/) < 0) {
                    var posListX = $("#posListX").val();//获取横向坐标值
                    var posListY = $("#posListY").val();//获取纵向坐标值
                    //获取所有的css样式
                    var styleCss = $("#generatedCss").text();
                    //下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement +
                        "{background-position:" + posListX + " " + posListY + ";}";
                    //替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    //设置点中的是哪个按钮
                    $("." + id + "_listBackgroundPositionBtnKey").val(key);
                    //设置改变的值
                    $("." + id + "_listBackgroundPositionX").val(posListX);
                    $("." + id + "_listBackgroundPositionY").val(posListY);
                    /*上一步，下一步*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },
        /**
         * 设置选中的元素或者其内部元素的背景定位
         * selectedElementInfo :表示的是选中的元素的信息
         * childPathOfSelectedElement:表示选中的路径
         */
        setPosition: function (selectedElementInfo, childPathOfSelectedElement) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //移除原来的背景颜色
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background-position");
                var posX = $("#posX").val();//获取横向坐标值
                var posY = $("#posY").val();//获取纵向坐标值
                if (posX.indexOf("%") < 0) {
                    posX = posX + "%";
                }
                if (posY.indexOf("%") < 0) {
                    posY = posY + "%";
                }
                //获取所有的css样式
                var styleCss = $("#generatedCss").text();
                //下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + childPathOfSelectedElement +
                    "{background-position:" + posX + " " + posY + ";}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);

                //设置改变的值
                $("." + id + "_titleBackgroundPositionX").val(posX);
                $("." + id + "_titleBackgroundPositionY").val(posY);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        setH1TitlePosition: function (selectedElementInfo, childPathOfSelectedElement) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //移除原来的背景颜色
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background-position");
                var posX = $("#posTitleX").val();//获取横向坐标值
                var posY = $("#posTitleY").val();//获取纵向坐标值
                if (posX.indexOf("%") < 0) {
                    posX = posX + "%";
                }
                if (posY.indexOf("%") < 0) {
                    posY = posY + "%";
                }
                //获取所有的css样式
                var styleCss = $("#generatedCss").text();
                //下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + childPathOfSelectedElement +
                    "{background-position:" + posX + " " + posY + ";}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);

                //设置改变的值
                $("." + id + "_h1TitleBackgroundPositionX").val(posX);
                $("." + id + "_h1TitleBackgroundPositionY").val(posY);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储和设置标题背景的Repeat属性值
         */
        storeAndInitTitleBackGroundRepeat: function () {
            //获取选中元素的id
            var id = selectedElementInfo.get("id");
            //获得被选中的元素的值
            var key = $("." + id + "_titleBackGroundRepeat").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //设置选中的效果
                $("#tpl-component-2016-01-09-list-titleBackGroundRepeat #repeat i").removeClass("active");
                $("#tpl-component-2016-01-09-list-titleBackGroundRepeat #repeat i").eq(parseInt($.trim(key))).addClass("active");
            }
        },
        storeAndInitH1TitleBackGroundRepeat: function () {
            //获取选中元素的id
            var id = selectedElementInfo.get("id");
            //获得被选中的元素的值
            var key = $("." + id + "_h1TitleBackGroundRepeat").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //设置选中的效果
                $("#tpl-component-2016-01-09-list-h1TitleBackGroundRepeat #repeat i").removeClass("active");
                $("#tpl-component-2016-01-09-list-h1TitleBackGroundRepeat #repeat i").eq(parseInt($.trim(key))).addClass("active");
            }
        },
        /**
         * 设置选中的元素或者其内部元素的背景平铺
         * selectedElementInfo       :表示的是选中的元素的信息
         * childPathOfSelectedElement:表示选中的路径
         * key:表示的是背景平铺的方式 0：平铺；1：横向平铺 2：纵向平铺 3：不平铺
         */
        setBackGroundRepeat: function (selectedElementInfo, childPathOfSelectedElement, key, obj, storeBackGroundRepeat) {
            try {
                if ($(obj).attr('class').search(/active/) < 0) {
                    //1、获得id的属性值
                    var id = selectedElementInfo.get("id");
                    //移除原来的背景颜色
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background-repeat");
                    var value = "";
                    if (key == "0") {
                        value = "repeat";
                    } else if (key == "1") {
                        value = "repeat-x";
                    } else if (key == "2") {
                        value = "repeat-y";
                    } else if (key == "3") {
                        value = "no-repeat";
                    }
                    var styleCss = $("#generatedCss").text();
                    //下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{background-repeat:" + value + ";}";
                    //替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    //设置元素的重复属性
                    $("." + id + storeBackGroundRepeat).val(key);
                    /*上一步，下一步*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },

    };

    /**
     * 列表高级设置
     */
    $.tplComponentListListSetting = {
        storeAndInitListMore: function () {

            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的值
            var listMore = $.trim($("." + id + "_listMore").val());
            $("#tpl-list-2016-03-13-more").val(listMore);
        },
        storeAndInitListHref: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的值
            var listHref = $.trim($("." + id + "_listHref").val());

            $("#tpl-list-2016-03-13-href").val(listHref);
        },
        storeAndInitTitleText: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的值
            var titleText = $.trim($("." + id + "_titleText").val());

            $("#tpl-list-2016-03-13-textTitle").val(titleText);
        },
        storeAndInitListBackgroundColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var listColor = $.trim($("." + id + "_listBackgroundColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-listBackgroundColor", listColor);
        },
        storeAndInitListBackGroundPosition: function () {
            //获取选中元素的id
            var id = selectedElementInfo.get("id");

            //设置点中的是哪个按钮
            var key = $("." + id + "_titleRightBackgroundPositionBtnKey").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //先删除其它选中效果，然后再添加新的元素选中效果
                $("#tpl-component-2016-01-09-list-titleLeftBackgroundPositionBtnKey i").removeClass("active");
                $("#tpl-component-2016-01-09-list-titleLeftBackgroundPositionBtnKey i").eq(parseInt($.trim(key))).addClass("active");
            }

            //设置改变的值
            var posListX = $("." + id + "_listBackgroundPositionX").val();
            var posListY = $("." + id + "_listBackgroundPositionY").val();

            //设置选中了哪个key
            $("#posListX").val(posListX);//获取横向坐标值
            $("#posListY").val(posListY);//获取纵向坐标值
        },
        storeAndInitListBackGroundRepeat: function () {
            //获取选中元素的id
            var id = selectedElementInfo.get("id");
            //获得被选中的元素的值
            var key = $("." + id + "_listBackGroundRepeat").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //设置选中的效果
                $("#tpl-component-2016-01-09-list-listBackGroundRepeat #repeatList i").removeClass("active");
                $("#tpl-component-2016-01-09-list-listBackGroundRepeat #repeatList i").eq(parseInt($.trim(key))).addClass("active");
            }
        },
        storeAndInitListListFontFamily: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var fontFamily = $("." + id + "_listFontFamily").val();

            //设置字体
            $("#tpl-component-2016-01-09-list-list-font-Family-Val").text(fontFamily);
        },
        /**
         * 设置文字的字体
         */
        setFontFamily: function () {
            //1、获得字体类型
            var fontFamily = $.trim($("#tpl-component-2016-01-09-list-list-font-Family-Val").text());
            //如果选择的是请选择，直接返回
            if (fontFamily == "请选择") return;

            //2、获得id的属性值
            var id = selectedElementInfo.get("id");
            //3、移除先前设置的字体
            $.common.removeGeneratedCss(id, " .line-content", "font-family");
            //4、移除时间字体的设置
            $.common.removeGeneratedCss(id, " .tpl-component-2016-01-09-list-li-time", "font-family");
            var styleCss = $("#generatedCss").text();

            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + " .line-content{font-family:" + fontFamily + " !important;}";
            //设置字体类型
            styleCss += "\r\n" + styleText;

            //下面是通过这个设置临时生成的属性值
            styleText = "#" + id + " .tpl-component-2016-01-09-list-li-time{font-family:" + fontFamily + " !important;}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);

            $("." + id + "_listFontFamily").val(fontFamily);
            /*上一步，下一步*/
            $.common.regain();
        },
        /**
         * 选择字体的时候触发这个函数
         */
        selectListFontFamily: function () {
            $("#tpl-component-2016-01-09-list-list-font-Family-Val").bind("setFontFamily", function () {
                $.tplComponentListListSetting.setFontFamily();
            });
            $("#tpl-component-2016-01-09-list-list-font-Family li").click(function (event) {
                //使用triggerHandler的好处是此函数不会触发默认的函数，不会冒泡
                $("#tpl-component-2016-01-09-list-list-font-Family-Val").triggerHandler("setFontFamily", []);
            });
        },
        /**
         * 存储或初始化列表字体的大小
         */
        storeAndInitListFontSize: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var fontSize = $("." + id + "_listFontSize").val();
            //设置字体
            $("#tpl-component-2016-01-09-list-listFontSize").val(fontSize);
        },
        /**
         * 设置标题的文字大小
         */
        setFontSize: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var fontSize = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if (!$.tplComponentListSetting.isNotBlank(fontSize)) return;

                fontSize = $.tplComponentListSetting.handleInputValue(obj, fontSize);

                //移除原来的字体大小css
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + " .line-content", "font-size");
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + " .tpl-component-2016-01-09-list-li-time", "font-size");
                if (fontSize) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + " .line-content{font-size:" + fontSize + " !important;}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;

                    styleText = "#" + id + childPathOfSelectedElement + " .tpl-component-2016-01-09-list-li-time{font-size:" + fontSize + " !important;}";

                    styleCss += "\r\n" + styleText;

                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + "_listFontSize").val(fontSize);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或初始化列表字体的行高
         */
        storeAndInitListLineHeight: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var lineHeight = $("." + id + "_listLineHeight").val();
            //设置字体
            $("#tpl-component-2016-01-09-list-listLineHeight").val(lineHeight);
        },
        /**
         * 设置标题的文字行高
         */
        setLineHeight: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var lineHeight = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if (!$.tplComponentListSetting.isNotBlank(lineHeight)) return;

                lineHeight = $.tplComponentListSetting.handleInputValue(obj, lineHeight);

                //移除原来的字体大小css
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + " .line-content", "line-height");
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + " .tpl-component-2016-01-09-list-li-time", "line-height");
                if (lineHeight) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + " .line-content{line-height:" + lineHeight + "}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;

                    styleText = "#" + id + childPathOfSelectedElement + " .tpl-component-2016-01-09-list-li-time{line-height:" + lineHeight + "}";
                    styleCss += "\r\n" + styleText;
                    styleText = "#" + id + childPathOfSelectedElement + "{line-height:" + lineHeight + "}";
                    styleCss += "\r\n" + styleText;

                    styleText = "#" + id + childPathOfSelectedElement + "{height:" + lineHeight + "}";

                    styleCss += "\r\n" + styleText;

                    styleText = "#" + id + childPathOfSelectedElement + " .line-content1{top:" + (parseInt(lineHeight) - $(".line-content1").width()) / 2 + "px}";

                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + "_listLineHeight").val(lineHeight);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或者初始化边框的颜色
         */
        storeAndInitListColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var titleColor = $.trim($("." + id + "_listColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-listColor", titleColor);
        },
        storeAndInitListHoverColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var titleColor = $.trim($("." + id + "_listHoverColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-listHoverColor", titleColor);
        },
        /**
         * 设置标题的字体的颜色
         * selectedElementInfo        :表示被选中的元素值
         * childPathOfSelectedElement :表示其后代
         */
        setListColor: function (selectedElementInfo, childPathOfSelectedElement, color) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "color");

                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + childPathOfSelectedElement + "{color:" + color + "}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;

                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                $("." + id + "_listColor").val(color);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或初始化列表字体的对齐方式
         */
        storeAndInitListTextAlign: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var textAlign = $.trim($("." + id + "_listTextAlign").val());
            $("#tpl-component-2016-01-09-list-listTextAlign div").removeClass("active");
            if (textAlign == "left") {
                $("#tpl-component-2016-01-09-list-listTextAlign div").eq(0).addClass("active");
            } else if (textAlign == "center") {
                $("#tpl-component-2016-01-09-list-listTextAlign div").eq(1).addClass("active");
            } else if (textAlign == "right") {
                $("#tpl-component-2016-01-09-list-listTextAlign div").eq(2).addClass("active");
            }
        },

        /**
         * 存储或者初始化列表字体风格
         */
        storeAndInitListFontStyle: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            $("#tpl-component-2016-01-09-list-listFontStyle div").removeClass("active");

            //获得字体是否加粗的标记
            var listFontWeightFlag = $.trim($("." + id + "_listFontWeight").val());
            //当不为空串的时候执行
            if (listFontWeightFlag != "") {
                $("#tpl-component-2016-01-09-list-listFontStyle div").eq(parseInt(listFontWeightFlag)).addClass("active");
            }

            //获得字体风格的标记
            var listFontStyleFlag = $.trim($("." + id + "_listFontStyle").val());
            if (listFontStyleFlag != "") {
                $("#tpl-component-2016-01-09-list-listFontStyle div").eq(parseInt(listFontStyleFlag)).addClass("active");
            }

            //获得字体修饰的标记
            var listTextDecorationFlag = $.trim($("." + id + "_listTextDecoration").val());
            if (listTextDecorationFlag != "") {
                $("#tpl-component-2016-01-09-list-listFontStyle div").eq(parseInt(listTextDecorationFlag)).addClass("active");
            }
        },
        /**
         * 设置选中的元素字体样式
         * selectedElementInfo :表示的是选中的元素的信息
         * childPathOfSelectedElement:表示选中的路径
         * key:表示的是选中的边框显示值 1加粗；2：倾斜；3下划线；4删除线；
         * obj:this对象
         */
        setFontStyle: function (selectedElementInfo, childPathOfSelectedElement, key, type, obj) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                var cssType = "";
                var fontCss = "";
                if (key == "0") {
                    //加粗
                    cssType = "font-weight";
                    fontCss = "font-weight: bold;";
                } else if (key == "1") {
                    //倾斜
                    cssType = "font-style";
                    fontCss = "font-style: italic;";
                } else if (key == "2") {
                    //下划线
                    cssType = "text-decoration";
                    fontCss = "text-decoration: underline;";

                    $("#tpl-component-2016-01-09-list-listFontStyle div").eq(3).removeClass("active");
                } else if (key == "3") {
                    //删除线
                    cssType = "text-decoration";
                    fontCss = "text-decoration: line-through;";

                    $("#tpl-component-2016-01-09-list-listFontStyle div").eq(2).removeClass("active");
                }

                //移除原有的边框样式
                if ($(obj).hasClass("active")) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
                    $("." + id + type).val("");
                    return;
                }

                var styleCss = $("#generatedCss").text();//获取所有的样式
                //拼接对齐方式css样式
                var styleText = "#" + id + childPathOfSelectedElement + "{" + fontCss + "}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                //将字体设置信息存储在影藏字段中
                $("." + id + type).val(key);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或者初始化列表边框的颜色
         */
        storeAndInitListBorderColor: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var listBorderColor = $.trim($("." + id + "_listBorderColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-01-09-list-listBorderColor", listBorderColor);
        },
        /**
         * 设置列表边框的颜色
         * selectedElementInfo        :表示被选中的元素值
         * childPathOfSelectedElement :表示其后代
         */
        setBorderColor: function (selectedElementInfo, childPathOfSelectedElement, color) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-color");

                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + childPathOfSelectedElement + "{border-color:" + color + " !important;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;

                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                $("." + id + "_listBorderColor").val(color);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或者初始化边框的宽度
         */
        storeAndInitListBorderWidth: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderWidth = $("." + id + "_listBorderWidth").val();
            //设置字体
            $("#tpl-component-2016-01-09-list-listBorderWidth").val(borderWidth);
        },
        /**
         * 设置边框的宽度（粗细）
         */
        setBorderWidth: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var borderWidth = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if (!$.tplComponentListSetting.isNotBlank(borderWidth)) return;
                //获得字体大小
                borderWidth = $.tplComponentListSetting.handleInputValue(obj, borderWidth);

                //移除原来的字体大小css
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-width");
                if (borderWidth) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-width:" + borderWidth + "}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + "_listBorderWidth").val(borderWidth);
                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * 存储或者初始化边框的风格
         */
        storeAndInitListBorderStyle: function () {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderStyle = $("." + id + "_listBorderStyle").val();

            //移除所有的选中状态
            $("#tpl-component-2016-01-09-list-listBorderStyle li").removeClass("active");
            if ($.tplComponentListSetting.isNotBlank(borderStyle)) {
                //设置选中状态
                $("#tpl-component-2016-01-09-list-listBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },

        /**
         * 存储和初始化哪些标题被选中了
         */
        storeAndInitListBorderSelected: function () {
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderSelected = $.trim($("." + id + "_listBorderSelected").val());
            var array = borderSelected.split("_");
            var styleText = '';
            var styleCss = $("#generatedCss").text();
            //alert(array.length);
            for (var index = 0; index < array.length; ++index) {
                //alert(index + " " + array[index]);
                //表示index表示的这个没有被选中，不设置"active状态"
                if (array[index] == "0") {
                    $("#tpl-component-2016-01-09-list-listBorderSelected div").eq(index).removeClass("active");
                    if(index == 0){
                        styleText = "#" + id + " .list-body li{border-top :0px none !important;}";
                    }else if(index == 1){
                        styleText = "#" + id + " .list-body li{border-bottom :0px none !important;}";
                    }else if(index == 3){
                        styleText = "#" + id + " .list-body li{border-right :0px none !important;}"
                    }else if(index == 2){
                        styleText = "#" + id + " .list-body li{border-left :0px none !important;}";
                    }
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }
                //如果值为"1",表示index表示的这个被选中了，设置"active"状态
                else {
                    $("#tpl-component-2016-01-09-list-listBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        /**
         * 设置选中的边框
         */
        setBorderSelected: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                var cssType = "";

                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var index = parseInt($.trim($(obj).attr("index")));
                //表示的是上边框
                if (index == 1) {
                    cssType = "border-top";
                }
                //表示的是下边框
                else if (index == 3) {
                    cssType = "border-bottom";
                }
                //表示的是左边框
                else if (index == 5) {
                    cssType = "border-left";
                }
                //表示的是右边框
                else if (index == 7) {
                    cssType = "border-right";
                }

                //如果已经是被选中，点击的时候表示的设置没有边框
                if ($(obj).hasClass("active")) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":0px none !important;}";


                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    var borderSelected = $("." + id + "_listBorderSelected").val();
                    var newborderSelected = "";
                    for (var i = 0; i < borderSelected.length; i++) {
                        if (i == (index - 1)) {
                            newborderSelected += "0";
                        } else {
                            newborderSelected += borderSelected[i];
                        }
                    }

                    $("." + id + "_listBorderSelected").val(newborderSelected);
                }
                //如果开始没有选中
                else {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);

                    var borderSelected = $("." + id + "_listBorderSelected").val();
                    var newborderSelected = "";
                    for (var i = 0; i < borderSelected.length; i++) {
                        if (i == (index - 1)) {
                            newborderSelected += "1";
                        } else {
                            newborderSelected += borderSelected[i];
                        }
                    }

                    $("." + id + "_listBorderSelected").val(newborderSelected);
                    /*上一步，下一步*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },
        /**
         * 存储或者初始化Link标签的textDecoration
         */
        storeAndInitListLinkTextDecoration: function () {
            var id = selectedElementInfo.get("id");

            var listLinkFlag = parseInt($.trim($("." + id + "_listLinkFlag").val()));
            //初始化配置页面部分的选中效果
            $("#tpl-component-2016-01-09-list-listLinkFlag div").removeClass("active");
            $("#tpl-component-2016-01-09-list-listLinkFlag div").eq(listLinkFlag).addClass("active");

            var listVisitedFlag = parseInt($.trim($("." + id + "_listVisitedFlag").val()));
            //初始化配置页面部分的选中效果
            $("#tpl-component-2016-01-09-list-listVisitedFlag div").removeClass("active");
            $("#tpl-component-2016-01-09-list-listVisitedFlag div").eq(listVisitedFlag).addClass("active");

            var listHoverFlag = parseInt($.trim($("." + id + "_listHoverFlag").val()));
            //初始化配置页面部分的选中效果
            $("#tpl-component-2016-01-09-list-listHoverFlag div").removeClass("active");
            $("#tpl-component-2016-01-09-list-listHoverFlag div").eq(listHoverFlag).addClass("active");

            var listActiveFlag = parseInt($.trim($("." + id + "_listActiveFlag").val()));
            //初始化配置页面部分的选中效果
            $("#tpl-component-2016-01-09-list-listActiveFlag div").removeClass("active");
            $("#tpl-component-2016-01-09-list-listActiveFlag div").eq(listActiveFlag).addClass("active");
        },
        /**
         * 设置连接在下面四中情况的时候的text-decoration
         *
         * a:link                    :表示未被访问的连接
         * a:visited                 :已被访问的连接
         * a:hover                   :鼠标指针移动到连接上
         * a:active                  :正在被点击的链接
         *
         * selectedElementInfo       :被选中的元素信息集合
         * childPathOfSelectedElement:被选中的元素的后代选择器
         * type                      :表示的是上面四中值，分别有:link; :visited; :hover; :active
         * flag                      :表示的是选择的第几个图标，从0:默认不带underline;1:带underline
         */
        setLinkTextDecoration: function (selectedElementInfo, childPathOfSelectedElement, type, flag) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + type, "text-decoration");

                var textDecoration = "";
                if (flag == "0") {
                    textDecoration = "none";
                } else if (flag == "1") {
                    textDecoration = "underline";
                }

                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + childPathOfSelectedElement + type + " span.line-content{text-decoration:" + textDecoration + " !important;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;

                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                if (type == ":link") {
                    $("." + id + "_listLinkFlag").val(flag);
                } else if (type == ":visited") {
                    $("." + id + "_listVisitedFlag").val(flag);
                } else if (type == ":hover") {
                    $("." + id + "_listHoverFlag").val(flag);
                } else if (type == ":active") {
                    $("." + id + "_listActiveFlag").val(flag);
                }

                /*上一步，下一步*/
                $.common.regain();
            } catch (e) {
            }
        },

       /*
       *更多标题的功能实现
       * */
        rightTitleIconUpload:function(html,path){
            var id = selectedElementInfo.get("id");
            $("#rightIcon .leftArea span").html(html);
            $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "background-image");
            $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "background-repeat");
            $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "background-position");
            $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "display");
            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + " .rightDiv .next-icon{background-image:"+path+"}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .next-icon{background-repeat:no-repeat}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .next-icon{background-position:center center}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .next-icon{display:block}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + "_rightSelectCurrentIcon").val(html);
            $("." + id + "_rightSelectCurrentIconPath").val(path);
        },
        removeRightUploadIcon:function(){
            var id = selectedElementInfo.get("id");
            $("#rightSelectIcon .removeUploadIcon").click(function(e){
                $("#rightIcon .leftArea span").html("无");
                $("#" + id + " .rightDiv .next-icon").css({"background-image":""});
                $(e.target).parent().remove();
                var html = $("#rightSelectIcon ul").html();
                $("." + id + "_rightSelectHtml").val(html);
                $("." + id + "_rightSelectCurrentIcon").val("无");
                $("#rightSelectIcon").hide()
            })
        },
        rightSelectIcon:function (){
            var id = selectedElementInfo.get("id");
            $("#rightSelectIcon ul li .showTreeIcon").off('click').on("click",function(e){
                if($(e.target).hasClass("selectIcon")){
                    var path = $(e.target).css("background-image");
                    var html = $(e.target).parent().html();
                    $.tplComponentListListSetting.rightTitleIconUpload(html,path);
                    /*上一步，下一步*/
                    $.common.regain();
                }else if($(e.target).parent().hasClass("noIcon")){
                    var html = $(e.target).html();
                    $("#rightIcon .leftArea span").html(html);
                    //$("#" + id + " .rightDiv .next-icon").css({"display":"none"});
                    $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "background-image");
                    $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "display");
                    var styleCss = $("#generatedCss").text();
                    //下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + " .rightDiv .next-icon{background-image:''}";
                    //设置字体类型
                    styleCss += "\r\n" + styleText;
                    styleText = "#" + id + " .rightDiv .next-icon{display:none}";
                    //设置字体类型
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("." + id + "_rightSelectCurrentIcon").val(html);
                    /*上一步，下一步*/
                    $.common.regain();
                }
                $("#rightSelectIcon").hide();
            });
            //清空
            $("#rightSelectIcon ul li.removeTreeAll").off('click').on("click",function(e) {
                $("#rightSelectIcon .removeUploadIcon").parent().remove();
                var html = $("#rightSelectIcon ul").html();
                $("." + id + "_rightSelectHtml").val(html);
                $("#rightIcon .leftArea span").html("无");
                $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "background-image");
                $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "display");
                var styleCss = $("#generatedCss").text();
                //下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + " .rightDiv .next-icon{background-image:''}";
                //设置字体类型
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .rightDiv .next-icon{display:none}";
                //设置字体类型
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                /*上一步，下一步*/
                $.common.regain();
            })

        },
        rightUploadBtn:function(){
            var id = selectedElementInfo.get("id");
            var ulHtml = "";
            var pathArr = ["","","",];
            //点击按钮显示弹框
            $("#rightIcon").off('click').on('click',function(e){
                if($("#rightSelectIcon").css("display") == "none"){
                    $("#rightSelectIcon").show();
                    $(".treeSelectIcon").mCustomScrollbar("destroy");
                    $(".treeSelectIcon").mCustomScrollbar({
                        theme: 'dark',
                        autoDraggerLength: true,
                        contentTouchScroll: false,
                        documentTouchScroll: false,
                        advanced: {
                            updateOnBrowserResize: true,
                            updateOnContentResize: true,
                            autoHideScrollbar: true,
                            autoScrollOnFocus: false
                        }
                    });
                }else{
                    $("#rightSelectIcon").hide();
                }
                e.stopPropagation();
            })

            //点击按钮上传图片
            $("#rightTitleUploadifyBtn").off('click').on("click",function () {
                var val = $("." + id + "_titleRightBgPicDate").val();
                $.dialogUpPic.initDialog(val, "1", function (data) {
                    var iconClass = "select" + new Date().getTime();
                    var path = data.all[0].path;
                    var html = "";
                    html += '<li>';
                    html += '<span class="showTreeIcon">';
                    html += '<i class="selectIcon '+ iconClass +'"></i>';
                    html += '</span>';
                    html += '<span class="removeIcon removeUploadIcon">X</span>';
                    html += '</li>';
                    $(html).insertBefore("#rightSelectIcon .removeTreeAll");
                    //给动态添加的li添加图片
                    $("." + iconClass).css("background-image","url("+ path +")");
                    $("." + iconClass).css("background-position","center center");
                    $("." + iconClass).css("background-repeat","no-repeat");
                    $("<img/>").attr("src", path).load(function() {
                        var picWidth = this.width;
                        if(picWidth > 49){
                            $("." + iconClass).css("background-size","cover");
                        }
                    })
                    var value = JSON.stringify(data);
                    $("." + id + "_titleRightBgPicDate").val(value);
                    //将添加的图片地址存放到数组中
                    pathArr.push(path);
                    $("." + id + "_titleRightBackgroundAbsoluteImg").val(pathArr);
                    //将新增的li存放起来
                    ulHtml = html + ulHtml;
                    $("." + id + "_rightSelectIcon").val(ulHtml);
                    //将所有的li存放起来
                    var html = $("#rightSelectIcon ul").html();
                    $("." + id + "_rightSelectHtml").val(html);
                    //执行删除和选择功能
                    $.tplComponentListListSetting.rightSelectIcon();
                    $.tplComponentListListSetting.removeRightUploadIcon();
                    //上传后就在列表中显示
                    var picHtml = $(html).find("."+iconClass);
                    $(picHtml).css("background-image","url("+ path +")");
                    $(picHtml).css("background-position","center center");
                    $(picHtml).css("background-repeat","no-repeat");
                    var picPath = 'url('+path+')';
                    $.tplComponentListListSetting.rightTitleIconUpload(picHtml,picPath);

                });
            });
        },
        storeRightSelectIcon:function(){
            var id = selectedElementInfo.get("id");
            //回显点击后选择框显示的内容
            var currentIcon = $("." + id + "_rightSelectCurrentIcon").val();
            var path = $("." + id + "_rightSelectCurrentIconPath").val();
            $("#rightIcon .leftArea span").html(currentIcon);

            //回显动态添加的li的图片
            var html = $("." + id + "_rightSelectIcon").val();
            var value =  $("." + id + "_titleRightBackgroundAbsoluteImg").val();
            var pathArr = value.split(",");
            $(html).insertBefore("#rightSelectIcon .removeTreeAll");
            var j = 3, iLen =  $("#rightSelectIcon li").find("i[class^='select']").length;
            for(; j < iLen; j++){
                $("#rightSelectIcon li").find("i[class^='select']").eq(j).css("background-image","url("+ pathArr[j] +") no-repeat center right");
                $("#rightSelectIcon li").find("i[class^='select']").eq(j).css("background-repeat","no-repeat");
                $("#rightSelectIcon li").find("i[class^='select']").eq(j).css("background-position","center center");
            }

            //回显删除后的内容
            var currentHtml = $("." + id + "_rightSelectHtml").val();
            $("#rightSelectIcon ul").html(currentHtml);

        },

        /*
         *列表标题的功能实现
         * */
        listIconUpload:function(html,path){
            var id = selectedElementInfo.get("id");
            $("#listIcon .leftArea span").html(html);
            $.common.removeGeneratedCss(id, " li  b.line-content1", "background-image");
            $.common.removeGeneratedCss(id, " li  b.line-content1", "background-position");
            $.common.removeGeneratedCss(id, " li  b.line-content1", "background-repeat");
            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + " li  b.line-content1{background-image:" + path + "}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " li  b.line-content1{background-position:center center}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " li  b.line-content1{background-repeat:no-repeat}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + "_listSelectCurrentIcon").val(html);
            $("." + id + "_listSelectCurrentIconPath").val(path);
        },
        removeListUploadIcon:function(){
            var id = selectedElementInfo.get("id");
            $("#listSelectIcon .removeUploadIcon").click(function(e){
                $("#listIcon .leftArea span").html("无");
                $("#" + id + " li  b.line-content1").css({"background-image":"none"});
                $(e.target).parent().remove();
                var html = $("#listSelectIcon ul").html();
                $("." + id + "_listSelectHtml").val(html);
                $("." + id + "_listSelectCurrentIcon").val("无");
                $("#listSelectIcon").hide()
            })
        },
        listSelectIcon:function (){
            var id = selectedElementInfo.get("id");
           $("#listSelectIcon ul li .showTreeIcon").off('click').on("click",function(e){
                if($(e.target).hasClass("selectIcon")){
                    var path = $(e.target).css("background-image");
                    var html = $(e.target).parent().html();
                    $.tplComponentListListSetting.listIconUpload(html,path);
                    /*上一步，下一步*/
                    $.common.regain();
                }else if($(e.target).parent().hasClass("noIcon")){
                    var html = $(e.target).html();
                    $("#listIcon .leftArea span").html(html);
                    $.common.removeGeneratedCss(id, " li  b.line-content1", "background-image");
                    var styleCss = $("#generatedCss").text();
                    //下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + " li  b.line-content1{background-image:'none'}";
                    //设置字体类型
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("." + id + "_listSelectCurrentIcon").val(html);
                    /*上一步，下一步*/
                    $.common.regain();
                }
                $("#listSelectIcon").hide();
            });
            //清空
            $("#listSelectIcon ul li.removeTreeAll").off('click').on("click",function(e) {
                $("#listSelectIcon .removeUploadIcon").parent().remove();
                var html = $("#listSelectIcon ul").html();
                $("." + id + "_listSelectHtml").val(html);
                $("#listIcon .leftArea span").html("无");
                $.common.removeGeneratedCss(id, " li  b.line-content1", "background-image");
                var styleCss = $("#generatedCss").text();
                //下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + " li  b.line-content1{background-image:'none'}";
                //设置字体类型
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                /*上一步，下一步*/
                $.common.regain();
            })

        },
        listUploadBtn:function(){
            var id = selectedElementInfo.get("id");
            var ulHtml = "";
            var pathArr = ["","","",];
            //点击按钮显示弹框
            $("#listIcon").off('click').on('click',function(e){
                if($("#listSelectIcon").css("display") == "none"){
                    $("#listSelectIcon").show();
                    $(".treeSelectIcon").mCustomScrollbar("destroy");
                    $(".treeSelectIcon").mCustomScrollbar({
                        theme: 'dark',
                        autoDraggerLength: true,
                        contentTouchScroll: false,
                        documentTouchScroll: false,
                        advanced: {
                            updateOnBrowserResize: true,
                            updateOnContentResize: true,
                            autoHideScrollbar: true,
                            autoScrollOnFocus: false
                        }
                    });
                }else{
                    $("#listSelectIcon").hide();
                }
                e.stopPropagation();
            })

            //点击按钮上传图片
            $("#listTitleUploadifyBtn").off('click').on("click",function () {
                var val = $("." + id + "_listBgPicDate").val();
                $.dialogUpPic.initDialog(val, "1", function (data) {
                    var iconClass = "select" + new Date().getTime();
                    var path = data.all[0].path;
                    var html = "";

                    html += '<li>';
                    html += '<span class="showTreeIcon">';
                    html += '<i class="selectIcon '+ iconClass +'"></i>';
                    html += '</span>';
                    html += '<span class="removeIcon removeUploadIcon">X</span>';
                    html += '</li>';
                    $(html).insertBefore("#listSelectIcon .removeTreeAll");
                    //给动态添加的li添加图片
                    $("." + iconClass).css("background-image","url("+ path +")");
                    $("." + iconClass).css("background-repeat","no-repeat");
                    $("." + iconClass).css("background-position","center center");
                    $("<img/>").attr("src", path).load(function() {
                        var picWidth = this.width;
                        if(picWidth > 49){
                            $("." + iconClass).css("background-size","cover");
                        }
                    })
                    var value = JSON.stringify(data);
                    $("." + id + "_listBgPicDate").val(value);
                    //将添加的图片地址存放到数组中
                    pathArr.push(path);
                    $("." + id + "_listBackgroundAbsoluteImg").val(pathArr);
                    //将新增的li存放起来
                    ulHtml = html + ulHtml;
                    $("." + id + "_listSelectIcon").val(ulHtml);
                    //将所有的li存放起来
                    var html1 = $("#listSelectIcon ul").html();
                    $("." + id + "_listSelectHtml").val(html1);
                    //执行删除和选择功能
                    $.tplComponentListListSetting.listSelectIcon();
                    $.tplComponentListListSetting.removeListUploadIcon();

                    //上传后就在列表中显示
                    var picHtml = $(html).find("."+iconClass);
                    $(picHtml).css("background-image","url("+ path +")");
                    $(picHtml).css("background-position","center center");
                    $(picHtml).css("background-repeat","no-repeat");
                    var picPath = 'url('+path+')';
                    $.tplComponentListListSetting.listIconUpload(picHtml,picPath);


                });
            });
        },
        storeListSelectIcon:function(){
            var id = selectedElementInfo.get("id");

            //回显动态添加的li的图片
            var html = $("." + id + "_listSelectIcon").val();
            var value =  $("." + id + "_listBackgroundAbsoluteImg").val();
            var pathArr = value.split(",");
            $(html).insertBefore("#listSelectIcon .removeTreeAll");
            var j = 3, iLen =  $("#listSelectIcon li").find("i[class^='select']").length;
            for(; j < iLen; j++){
                $("#listSelectIcon li").find("i[class^='select']").eq(j).css("background-image","url("+ pathArr[j] +")");
                $("#listSelectIcon li").find("i[class^='select']").eq(j).css("background-repeat","no-repeat");
                $("#listSelectIcon li").find("i[class^='select']").eq(j).css("background-position","center center");
            }

            //回显点击后选择框显示的内容
            var currentIcon = $("." + id + "_listSelectCurrentIcon").val();
            $("#listIcon .leftArea span").html(currentIcon);
            //回显删除后的内容
            var currentHtml = $("." + id + "_listSelectHtml").val();
            $("#listSelectIcon ul").html(currentHtml);
        },

        /*
         *前置标题的功能实现
         * */
        leftTitleIconUpload:function(html,path){
            var id = selectedElementInfo.get("id");
            $("#leftIcon .leftArea span").html(html);
            //$("#" + id + " .leftDiv .title-icon").css({background:path});
            $.common.removeGeneratedCss(id, " .leftDiv .title-icon", "background-image");
            $.common.removeGeneratedCss(id, " .leftDiv .title-icon", "background-position");
            $.common.removeGeneratedCss(id, " .leftDiv .title-icon", "background-repeat");
            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + " .leftDiv .title-icon{background-image:"+path+"}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .leftDiv .title-icon{background-position:center center}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .leftDiv .title-icon{background-repeat:no-repeat}";
            //设置字体类型
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + "_leftSelectCurrentIcon").val(html);
            $("." + id + "_leftSelectCurrentIconPath").val(path);
        },
        removeLeftUploadIcon:function(){
            var id = selectedElementInfo.get("id");
            $("#leftSelectIcon .removeUploadIcon").click(function(e){
                $("#leftIcon .leftArea span").html("无");
                $("#" + id + " .leftDiv .title-icon").css({"background-image":""});
                $(e.target).parent().remove();
                var html = $("#leftSelectIcon ul").html();
                $("." + id + "_leftSelectHtml").val(html);
                $("." + id + "_leftSelectCurrentIcon").val("无");
                $("#leftSelectIcon").hide()
            })
        },
        leftSelectIcon:function (){
            var id = selectedElementInfo.get("id");
            $("#leftSelectIcon ul li .showTreeIcon").off('click').on("click",function(e){
                if($(e.target).hasClass("selectIcon")){
                    var path = $(e.target).css("background-image");
                    var html = $(e.target).parent().html();
                    $.tplComponentListListSetting.leftTitleIconUpload(html,path);
                    /*上一步，下一步*/
                    $.common.regain();
                }else if($(e.target).parent().hasClass("noIcon")){
                    var html = $(e.target).html();
                    $("#leftIcon .leftArea span").html(html);
                    //$("#" + id + " .leftDiv .title-icon").css({background:""});
                    $.common.removeGeneratedCss(id, " .leftDiv .title-icon", "background-image");
                    var styleCss = $("#generatedCss").text();
                    //下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + " .leftDiv .title-icon{background-image:''}";
                    //设置字体类型
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("." + id + "_leftSelectCurrentIcon").val(html);
                    /*上一步，下一步*/
                    $.common.regain();
                }
                $("#leftSelectIcon").hide();
            });
            //清空
            $("#leftSelectIcon ul li.removeTreeAll").off('click').on("click",function(e) {
                $("#leftSelectIcon .removeUploadIcon").parent().remove();
                var html = $("#leftSelectIcon ul").html();
                $("." + id + "_leftSelectHtml").val(html);
                $("#leftIcon .leftArea span").html("无");
                $.common.removeGeneratedCss(id, " .leftDiv .title-icon", "background-image");
                var styleCss = $("#generatedCss").text();
                //下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + " .leftDiv .title-icon{background-image:''}";
                //设置字体类型
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                /*上一步，下一步*/
                $.common.regain();
            })

        },
        leftUploadBtn:function(){
            var id = selectedElementInfo.get("id");
            var ulHtml = "";
            var pathArr = ["","","",];
            //点击按钮显示弹框
            $("#leftIcon").off('click').on('click',function(e){
                if($("#leftSelectIcon").css("display") == "none"){
                    $("#leftSelectIcon").show();
                    $(".treeSelectIcon").mCustomScrollbar("destroy");
                    $(".treeSelectIcon").mCustomScrollbar({
                        theme: 'dark',
                        autoDraggerLength: true,
                        contentTouchScroll: false,
                        documentTouchScroll: false,
                        advanced: {
                            updateOnBrowserResize: true,
                            updateOnContentResize: true,
                            autoHideScrollbar: true,
                            autoScrollOnFocus: false
                        }
                    });
                }else{
                    $("#leftSelectIcon").hide();
                }
                e.stopPropagation();
            })

            //点击按钮上传图片
            $("#leftTitleUploadifyBtn").off('click').on("click",function () {
                var val = $("." + id + "_titleLeftBgPicDate").val();
                $.dialogUpPic.initDialog(val, "1", function (data) {
                    var iconClass = "select" + new Date().getTime();
                    var path = data.all[0].path;
                    var html = "";
                    html += '<li>';
                    html += '<span class="showTreeIcon">';
                    html += '<i class="selectIcon '+ iconClass +'"></i>';
                    html += '</span>';
                    html += '<span class="removeIcon removeUploadIcon">X</span>';
                    html += '</li>';
                    $(html).insertBefore("#leftSelectIcon .removeTreeAll");
                    //给动态添加的li添加图片
                    $("." + iconClass).css("background-image","url("+ path +")");
                    $("." + iconClass).css("background-position","center center");
                    $("." + iconClass).css("background-repeat","no-repeat");
                    $("<img/>").attr("src", path).load(function() {
                        var picWidth = this.width;
                        if(picWidth > 49){
                            $("." + iconClass).css("background-size","cover");
                        }
                    })
                    var value = JSON.stringify(data);
                    $("." + id + "_titleLeftBgPicDate").val(value);
                    //将添加的图片地址存放到数组中
                    pathArr.push(path);
                    $("." + id + "_titleLeftBackgroundAbsoluteImg").val(pathArr);
                    //将新增的li存放起来
                    ulHtml = html + ulHtml;
                    $("." + id + "_leftSelectIcon").val(ulHtml);
                    //将所有的li存放起来
                    var html = $("#leftSelectIcon ul").html();
                    $("." + id + "_leftSelectHtml").val(html);
                    //执行删除和选择功能
                    $.tplComponentListListSetting.leftSelectIcon();
                    $.tplComponentListListSetting.removeLeftUploadIcon();
                    var picHtml = $(html).find("."+iconClass);
                    $(picHtml).css("background-image","url("+ path +")");
                    $(picHtml).css("background-position","center center");
                    $(picHtml).css("background-repeat","no-repeat");
                    var picPath = 'url('+path+')';
                    $.tplComponentListListSetting.leftTitleIconUpload(picHtml,picPath);

                });
            });
        },
        storeLeftSelectIcon:function(){
            var id = selectedElementInfo.get("id");

            //回显动态添加的li的图片
            var html = $("." + id + "_leftSelectIcon").val();
            var value =  $("." + id + "_titleLeftBackgroundAbsoluteImg").val();
            var pathArr = value.split(",");
            $(html).insertBefore("#leftSelectIcon .removeTreeAll");
            var j = 3, iLen =  $("#leftSelectIcon li").find("i[class^='select']").length;
            for(; j < iLen; j++){
                $("#leftSelectIcon li").find("i[class^='select']").eq(j).css("background-image","url("+ pathArr[j] +")")
                $("#leftSelectIcon li").find("i[class^='select']").eq(j).css("background-repeat","no-repeat")
                $("#leftSelectIcon li").find("i[class^='select']").eq(j).css("background-position","center center")
            }

            //回显点击后选择框显示的内容
            var currentIcon = $("." + id + "_leftSelectCurrentIcon").val();
            $("#leftIcon .leftArea span").html(currentIcon);

            //回显删除后的内容
            var currentHtml = $("." + id + "_leftSelectHtml").val();
            $("#leftSelectIcon ul").html(currentHtml);
        },

        /**
         * 动态属性设置开始
         */
        /*
         * 设置栏目标题切换
         * */
        setChannelTitle:function(){
        	var id = selectedElementInfo.get("id");
        	var val = "";
        	$("#channelNameBtn").click(function(){
        		val = "channelName";
        		$(this).addClass("active").siblings(".component-radio").removeClass("active");
        		$("#" + id + " .leftDiv CMSPRO_CHANNEL").attr("field","channelName");
        		$("." + id + "_channelTitle").val(val);
                $.tplComponentListListSetting.dynamicCall();
        	})
        	$("#showNameBtn").click(function(){
        		val = "displayName";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
        		$("#" + id + " .leftDiv CMSPRO_CHANNEL").attr("field","displayName");
        		$("." + id + "_channelTitle").val(val);
                $.tplComponentListListSetting.dynamicCall();
        	})

        },
        /*
         * 栏目标题切换回显
         * */
        storeChannelTitle:function(){
        	var id = selectedElementInfo.get("id");
        	var value = $("." + id + "_channelTitle").val();
        	$("#channelTitle .component-radio").removeClass("active");
        	if(value == "channelName"){
        		$("#channelTitle .component-radio").eq(0).addClass("active");
        	}else if(value == "displayName"){
        		$("#channelTitle .component-radio").eq(1).addClass("active");
        	}
        },
        /*
         * 设置稿件显示数量
         * */
        setArticleNum:function(){
        	var id = selectedElementInfo.get("id");
        	var num = $("#articleNum").val();
        	$("#" + id + " .list-body CMSPRO_DOCUMENTS").attr("num",num);
        	$("." + id + "_articleNum").val(num);
            $.tplComponentListListSetting.dynamicCall();
        },
        /*
         * 稿件显示数量回显
         * */
        storeArticleNum:function(){
        	var id = selectedElementInfo.get("id");
        	var num = $("." + id + "_articleNum").val();
        	
        	$("#articleNum").val(num);
        },
        /*
         * 设置稿件类型
         * */
        setArticleType:function(){
        	var id = selectedElementInfo.get("id");
        	var value = $("." + id + "_articleType").val();
        	var len = $("#articleType .operate-box1").length;
        	$("#articleType .component-checkbox").click(function(){
        		if($(this).css("background-position") == "-60px 0px"){
                    $(this).css("background-position","-16px 0px");
        			$(this).attr("check","checked");
        			value +=  $(this).next().attr("value");
        			
        		}else{
                    $(this).css("background-position","-60px 0px");
        			$(this).attr("check","");
        			if(value.indexOf($(this).next().attr("value")) != -1){
        				value = value.replace($(this).next().attr("value"),"")
        			}
        		}
        		var i = 0;
            	for(; i < len; i++){
            		if($("#articleType .component-checkbox").eq(0).attr("check")=="checked" && $("#articleType .component-checkbox").eq(1).attr("check")=="checked" && $("#articleType .component-checkbox").eq(2).attr("check")=="checked"){
            			var type = "0|1|2|3|4|9|8";
            		}else if($("#articleType .component-checkbox").eq(0).attr("check")=="checked" && $("#articleType .component-checkbox").eq(1).attr("check")=="checked"){
            			var type = "0|1|2|3|4|9";
            		}else if($("#articleType .component-checkbox").eq(0).attr("check")=="checked" && $("#articleType .component-checkbox").eq(2).attr("check")=="checked"){
            			var type = "0|1|2|3|4|8";
            		}else if($("#articleType .component-checkbox").eq(1).attr("check")=="checked" && $("#articleType .component-checkbox").eq(2).attr("check")=="checked"){
            			var type = "9|8";
            		}else if($("#articleType .component-checkbox").eq(0).attr("check")=="checked"){
            			var type = "0|1|2|3|4";
            		}else if($("#articleType .component-checkbox").eq(1).attr("check")=="checked"){
            			var type = "9";
            		}else if($("#articleType .component-checkbox").eq(2).attr("check")=="checked"){
            			var type = "8";
            		}else{
            			var type = "0|1|2|3|4";
            		}
            		
            	}
            	$("#" + id + " .list-body CMSPRO_DOCUMENTS").attr("DOCUMENTTYPE",type);
        		$("." + id + "_articleType").val(value);
                $("." + id + "_cmsdocType").val(type);
                $.tplComponentListListSetting.dynamicCall();
        	});
        },
        /*
         * 稿件类型回显
         * */
        storeArticleType:function(){
        	 var id = selectedElementInfo.get("id");
             var value = $("." + id + "_articleType").val();
             var arr = value.split("");
             var len = arr.length;
             if(len == 3){
                 $("#articleType .operate-box1").find(".component-checkbox").css("background-position","-16px 0");
             }else if(value == "98" || value == "89"){
                 $("#articleType .operate-box1").eq(1).find(".component-checkbox").css("background-position","-16px 0");
                 $("#articleType .operate-box1").eq(2).find(".component-checkbox").css("background-position","-16px 0");
                 $("#articleType .operate-box1").eq(0).find(".component-checkbox").css("background-position","-60px 0");
             }else if(value == "09" || value == "90"){
                 $("#articleType .operate-box1").eq(0).find(".component-checkbox").css("background-position","-16px 0");
                 $("#articleType .operate-box1").eq(1).find(".component-checkbox").css("background-position","-16px 0");
                 $("#articleType .operate-box1").eq(2).find(".component-checkbox").css("background-position","-60px 0");
             }else if(value == "08" || value == "80"){
                 $("#articleType .operate-box1").eq(0).find(".component-checkbox").css("background-position","-16px 0");
                 $("#articleType .operate-box1").eq(2).find(".component-checkbox").css("background-position","-16px 0");
                 $("#articleType .operate-box1").eq(1).find(".component-checkbox").css("background-position","-60px 0");
             }else if(value == "0"){
                 $("#articleType .operate-box1").eq(0).find(".component-checkbox").css("background-position","-16px 0");
                 $("#articleType .operate-box1").eq(2).find(".component-checkbox").css("background-position","-60px 0");
                 $("#articleType .operate-box1").eq(1).find(".component-checkbox").css("background-position","-60px 0");
             }else if(value == "8"){
                 $("#articleType .operate-box1").eq(0).find(".component-checkbox").css("background-position","-60px 0");
                 $("#articleType .operate-box1").eq(2).find(".component-checkbox").css("background-position","-16px 0");
                 $("#articleType .operate-box1").eq(1).find(".component-checkbox").css("background-position","-60px 0");
             }else if(value == "9"){
                 $("#articleType .operate-box1").eq(0).find(".component-checkbox").css("background-position","-60px 0");
                 $("#articleType .operate-box1").eq(2).find(".component-checkbox").css("background-position","-60px 0");
                 $("#articleType .operate-box1").eq(1).find(".component-checkbox").css("background-position","-16px 0");
             } 	
        },
        /*
         * 设置稿件开始显示位置
         * */
        setArticleStart:function(){
        	var id = selectedElementInfo.get("id");
        	var start = $("#articleStart").val();
            $("." + id + "_articleStart").val(start);
        	if(start == "0"){
        		start = 0;
        	}else{
        		start = start - 1;
        	}
            $("#" + id + " .list-body CMSPRO_DOCUMENTS").attr("STARTPOS",start);
            $.tplComponentListListSetting.dynamicCall();
        },
        /*
         * 稿件开始显示位置回显
         * */
        storeArticleStart:function(){
        	var id = selectedElementInfo.get("id");
        	var start = $("." + id + "_articleStart").val();
        	$("#articleStart").val(start);
        },
        /*
         * 设置是否启用批次
         * */
        setStartUsing:function(){
        	var id = selectedElementInfo.get("id");
        	var val = "";
        	$("#startUsing").click(function(){
        		val = "startUsing";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
        		$("#" + id + " .list-body CMSPRO_DOCUMENTS").attr("BATCHRULE","true");
        		$("." + id + "_startUsing").val(val);
        		$("." + id + "_cmsBatchRule").val("true");
                $.tplComponentListListSetting.dynamicCall();
        	})
        	$("#stopUsing").click(function(){
        		val = "stopUsing";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
        		$("#" + id + " .list-body CMSPRO_DOCUMENTS").attr("BATCHRULE","false");
        		$("." + id + "_startUsing").val(val);
                $("." + id + "_cmsBatchRule").val("false");
                $.tplComponentListListSetting.dynamicCall();
        	})

        },
        /*
         * 是否启用批次回显
         * */
        storeStartUsing:function(){
        	var id = selectedElementInfo.get("id");
        	var val = $("." + id + "_startUsing").val();
        	$("#pcAttr .component-radio").removeClass("active");
        	if(val == "startUsing"){
        		$("#pcAttr .component-radio").eq(0).addClass("active");
        	}else if(val == "stopUsing"){
        		$("#pcAttr .component-radio").eq(1).addClass("active");
        	}
        },
        /*
         * 设置标题显示类型
         * */
        setArticleHeader:function(){
        	var id = selectedElementInfo.get("id");
        	var val = "";
        	$("#titleHeader").click(function(){
        		val = "title";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
        		$("#" + id + " .line-content CMSPRO_DOCUMENT").attr("FIELD",val);
        		$("." + id + "_articleHeader").val(val);
                $.tplComponentListListSetting.dynamicCall();
        	})
        	$("#subTitleHeader").click(function(){
        		val = "subTitle";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $("#" + id + " .line-content CMSPRO_DOCUMENT").attr("FIELD",val);
        		$("." + id + "_articleHeader").val(val);
                $.tplComponentListListSetting.dynamicCall();
        	})

        },
        /*
         * 标题显示类型回显
         * */
        storeArticleHeader:function(){
        	var id = selectedElementInfo.get("id");
        	var val = $("." + id + "_articleHeader").val();
        	$("#articleHeader .component-radio").removeClass("active");
        	if(val == "title"){
        		$("#articleHeader .component-radio").eq(0).addClass("active");
        	}else if(val == "subTitle"){
        		$("#articleHeader .component-radio").eq(1).addClass("active");
        	}
        },
        /*
         * 设置发布时间是否显示
         * */
        setPublishTime:function(){
        	var id = selectedElementInfo.get("id");
        	var val = "";
            $("#showTime").click(function(){
        		val = "showTime";
                $.common.removeGeneratedCss(id, " .list-body .tpl-component-2016-01-09-list-li-title", "width");
                $.common.removeGeneratedCss(id, " .list-body .time-content", "display");
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + " .list-body .tpl-component-2016-01-09-list-li-title{width:68%;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .list-body .time-content{display:block;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);
        		$("." + id + "_publishTime").val(val);
                /*上一步，下一步*/
                $.common.regain();
        	})
        	$("#hideTime").click(function(){
        		val = "hideTime";
                $.common.removeGeneratedCss(id, " .list-body .tpl-component-2016-01-09-list-li-title", "width");
                $.common.removeGeneratedCss(id, " .list-body .time-content", "display");
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText = "#" + id + " .list-body .tpl-component-2016-01-09-list-li-title{width:100%;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .list-body .time-content{display:none;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);
        		$("." + id + "_publishTime").val(val);
                /*上一步，下一步*/
                $.common.regain();
        	})
        },
        /*
         * 发布时间是否显示回显
         * */
        storePublishTime:function(){
        	var id = selectedElementInfo.get("id");
        	var val = $("." + id + "_publishTime").val();
        	$("#publishTime .component-radio").removeClass("active");
        	if(val == "showTime"){
        		$("#publishTime .component-radio").eq(0).addClass("active");
        	}else if(val == "hideTime"){
        		$("#publishTime .component-radio").eq(1).addClass("active");
        	}
        },
        /*
         * 设置链接
         * */
        setDynamicLink:function(){
        	var id = selectedElementInfo.get("id");
        	var val = "";
        	$("#addLink").click(function(){
        		val = "addLink";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
        		$("#" + id + " #cmsCode ul li a").attr("href","<CMSPRO_DOCUMENT FIELD='url'></CMSPRO_DOCUMENT>");
        		$("." + id + "_dynamicLink").val(val);
                $.tplComponentListListSetting.dynamicCall();
        	})
        	$("#removeLink").click(function(){
        		val = "removeLink";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
        		$("#" + id + " #cmsCode ul li a").removeAttr("href");
        		$("#" + id + " #static ul li").find('a').removeAttr("href");
        		$("." + id + "_dynamicLink").val(val);
        	})
        },
        /*
         * 是否添加超链接回显
         * */
        storeDynamicLink:function(){
        	var id = selectedElementInfo.get("id");
        	var val = $("." + id + "_dynamicLink").val();
        	$("#dynamicLink .component-radio").removeClass("active");
        	if(val == "addLink"){
        		$("#dynamicLink .component-radio").eq(0).addClass("active");
        	}else if(val == "removeLink"){
        		$("#dynamicLink .component-radio").eq(1).addClass("active");
        	}
        },
        /*
         * 标题显示最大长度回显
         * */
        storeMaxLength:function(){

        },
        /**
         * 第一次的时候将title的值保存到隐藏域中，后续修改title的时候，不管怎样这个隐藏于都是之前的一个备份
         * 存储最原始的title值
         */
        storeAndInitTitleInfo: function () {
            //1、这里表示的是选中的元素的值,获得选中的元素的id值
            var selectedElementId = selectedElementInfo.get("id");
            var len = $("." + selectedElementId + "_maxLength").val();

            var channelContent = "";
            $("#maxLength").val(len);
            for(var i = 0, l = $("#" + selectedElementId + " #static .list-body li").length; i < l; i++){
                channelContent = $.trim($("#" + selectedElementId + " #static .list-body li").eq(i).find(".line-content").html()) + "|" + channelContent;
            }
            channelContent = channelContent.substr(0,channelContent.length-1);
            $("." + selectedElementId + "_channelName").val(channelContent);
            //获得到设置的标题字数的值
            var channelNameNum = $("." + selectedElementId + "_maxLength").val();
            if(channelNameNum == ""){
                channelNameNum = 99999999999;
            }
            var end = parseInt(channelNameNum);
            var channelContentArr = channelContent.split("|");
            channelContentArr = channelContentArr.reverse();
            for(var j = 0,k = channelContentArr.length;j < k ;j++){
                if(end > channelContentArr[j].length){
                    var newChannelName = channelContentArr[j];
                }else{
                    var newChannelName = channelContentArr[j].substring(0, end) + "...";
                }
                $("#" + selectedElementId + "  #static .list-body li").eq(j).find(".line-content").html(newChannelName);
            }
        },
        /**
         * 设置栏目标题的字数
         * selectedElementInfo        :表示的是当前选中的元素
         * childPathOfSelectedElement :传递的后代的定位值
         * obj                        :表示的是填写参数的文本框
         */
        setChannelNameNum: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            var id = selectedElementInfo.get("id");
            var channelNameNum = $.trim($(obj).val());
            $("#" + id + " .line-content CMSPRO_DOCUMENT").attr("num",channelNameNum);
            var channelContent = $("." + id + "_channelName").val();
            if(channelNameNum == ""){
                channelNameNum = 99999999999;
            }
            var end = parseInt(channelNameNum);
            var channelContentArr = channelContent.split("|");
            channelContentArr = channelContentArr.reverse();
            for(var j = 0,k = channelContentArr.length;j < k ;j++){
                if(end > channelContentArr[j].length){
                    var newChannelName = channelContentArr[j];
                }else{
                    if(end == channelContentArr[j].length){
                        var newChannelName = channelContentArr[j].substring(0, end)
                    }else{
                        var newChannelName = channelContentArr[j].substring(0, end) + "...";
                    }
                }
                $("#" + id + "  #static .list-body li").eq(j).find(".line-content").text(newChannelName);
            }
            //存储标题的字数信息
            $("." + id + "_maxLength").val(end);
            /*上一步，下一步*/
            $.common.regain();
        },
        /*
         * 设置链接跳转方式
         * */
        setOpenWay: function () {
            var id = selectedElementInfo.get("id");
            var val = "";
            $("#channelLocalBtn").click(function () {
                val = "local";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $("#" + id + " ul li a").attr("TARGET","_self");
                $("." + id + "_linkBtn").val(val);
                /*上一步，下一步*/
                $.common.regain();
            });
            $("#channelNewBtn").click(function () {
                val = "new";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $("#" + id + " ul li a").attr("TARGET","_blank");
                $("." + id + "_linkBtn").val(val);
                /*上一步，下一步*/
                $.common.regain();
            });
        },
        /*
         * 链接跳转方式回显
         * */
        storeOpenWay: function () {
            var id = selectedElementInfo.get("id");
            var value = $.trim($("." + id + "_linkBtn").val());
            $("#openWay span.component-radio").removeClass("active");
            if (value == "local") {
                $("#openWay span.component-radio").eq(1).addClass("active");
            } else if (value == "new") {
                $("#openWay span.component-radio").eq(0).addClass("active");
            }
        },
        deleteCmsLm: function() {
            var id = selectedElementInfo.get("id");
            $("." + id + "_cmsColumnsName").val('');
            $("#cmsColumnsFont").hide();
            // 取消选择栏目
            $.cmsTree.cancelSelectCmsLm();
            $("#" + id).addClass('staticComponent').removeClass('dynamicComponent');
            $("#" + id + ' #cmsCode').find('cmspro_documents').attr("sitecode", '');
            $("#" + id + ' #cmsCode').find('cmspro_documents').attr("channelcode", '');
            $("#" + id + " #cmsCode CMSPRO_CHANNELS").attr('sitecode', '');
            $("#" + id + " #cmsCode CMSPRO_CHANNELS").attr('CODE', '');
            var html = '<h1>';
                html += '<div class="leftDiv" targetAttr="titleBasic" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\'.leftDiv\')">';
                html += '<i class="title-icon"></i>';
                html += '<a class="title-content" name="开普新闻" target="_blank">开普新闻</a>';
                html += '</div>';
                html += '<div class="rightDiv" targetAttr="more" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\'.rightDiv\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/fadasai1463453026257.shtml" class="title-more channelDataList_11c0d32a9c8f496f92cccab9f78b922c_1473210879117_titleLinkMore" target="_blank">更多>><i class="next-icon"></i>';
                html += '</a>';
                html += '</div>';
                html += '</h1>';
                html += '<div class="list-body">';
                html += '<ul class="tpl-component-2016-01-09-list-list-body-ul0">';
                html += '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\' .list-body li\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/201509/1edea52d7edd44678a2344d10fafc53c.shtml" target="_blank" class="tpl-component-2016-01-09-list-li-title">';
                html += '<b class="line-content1"></b>';
                html += '<span class="line-content" name="以市场化终结景区任性涨价">以市场化终结景区任性涨价</span>';
                html += '<span class="tpl-component-2016-01-09-list-li-time">';
                html += '</a>';
                html += '<span class="time-content" name="1441641054000">2015-09-07</span>';
                html += '</span>';
                html += '</li>';
                html += '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\' .list-body li\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/201509/dd1c6cd5e2014c1ba0196ca2e8e5d4b7.shtml" target="_blank" class="tpl-component-2016-01-09-list-li-title">';
                html += '<b class="line-content1"></b>';
                html += '<span class="line-content" name="顶级大赛奖金高达1800万美元 电竞产业链崛起揭秘">顶级大赛奖金高达1800万美元 电竞产业链崛起揭秘</span>';
                html += '</a>';
                html += '<span class="tpl-component-2016-01-09-list-li-time">';
                html += '<span class="time-content" name="1441640660000">2015-09-07</span>';
                html += '</span>';
                html += '</li>';
                html += '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\' .list-body li\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/201509/908ed73d3880484684453c1e68ebb83c.shtml" target="_blank" class="tpl-component-2016-01-09-list-li-title">';
                html += '<b class="line-content1"></b>';
                html += '<span class="line-content" name="王思聪助推顶级电竞主播年薪千万">王思聪助推顶级电竞主播年薪千万</span>';
                html += '</a>';
                html += '<span class="tpl-component-2016-01-09-list-li-time">';
                html += '<span class="time-content" name="1441640643000">2015-09-07</span>';
                html += '</span>';
                html += '</li>';
                html += '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\' .list-body li\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/201509/86a6902cf70e4a92adc3299badc1b583.shtml" target="_blank" class="tpl-component-2016-01-09-list-li-title">';
                html += '<b class="line-content1"></b>';
                html += '<span class="line-content" name="网上卖杂粮 商务部鼓励电商下乡扶贫">网上卖杂粮 商务部鼓励电商下乡扶贫</span>';
                html += '</a>';
                html += '<span class="tpl-component-2016-01-09-list-li-time">';
                html += '<span class="time-content" name="1441640593000">2015-09-07</span>';
                html += '</span>';
                html += '</li>';
                html += '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\' .list-body li\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/201509/ef32eb6edb124ad789ded2e9341dec7d.shtml" target="_blank" class="tpl-component-2016-01-09-list-li-title">';
                html += '<b class="line-content1"></b>';
                html += '<span class="line-content" name="韩朝“马拉松”谈判继续 离散家属团聚时间存分歧">韩朝“马拉松”谈判继续 离散家属团聚时间存分歧</span>';
                html += '</a>';
                html += '<span class="tpl-component-2016-01-09-list-li-time">';
                html += '<span class="time-content" name="1441640102000">2015-09-07</span>';
                html += '</span>';
                html += '</ul>';
                html += '</div>';
            $("#" + id + " #static div").html(html);
            $.tplComponentListListSetting.initAttr();
        },
        basePublic:function(code){
            var id = selectedElementInfo.get("id");
            var publishTime = [];
            var date = 0;
            var cmsHtml= '';
            $("#" + id + " .list-body").html('')
            var channelCode = $("." + id + "_cmsChannelCode").val();
            var siteCode = $("." + id + "_cmsSitCode").val();
            var docType = $("." + id + "_cmsdocType").val();
            var articleNum = $("." + id + "_articleNum").val();
            var start = $('.' + id + "_articleStart").val();
            if(start == 0){
                start= 0
            }else{
                start = start - 1;
            }
            var batchRule = $("." + id + "_cmsBatchRule").val();
            var titleClickTab = ' targetAttr="titleBasic" onmouseenter="$.common.heightLight(this,event,\'.leftDiv\')" onclick="$.common.goToSidebar(this,event,\'.leftDiv\')"';
            var listClickTab = ' targetAttr="list" onmouseenter="$.common.heightLight(this,event,\'.list-body li\')" onclick="$.common.goToSidebar(this,event,\'.list-body li\')"';
            var moreClickTab = ' targetAttr="more" onmouseenter="$.common.heightLight(this,event,\'.rightDiv\')" onclick="$.common.goToSidebar(this,event,\'.rightDiv\')"';
            var moreText = $("." + id + "_moreText").val();
            var titleVal = $("." + id + "_articleHeader").val();
            var ul = '<ul class = "tpl-component-2016-01-09-list-list-body-ul0"></ul>'
            $("#" + id + " .list-body").append(ul);
            for(var j = 0; j < articleNum; j++) {
                $.ajax({
                    type: 'post',
                    async: false,
                    url: '/app-tpl-webapp/common/gainChannelListAndManuscripts.action',
                    data: code,
                    dataType: 'json',
                    success: function (data) {
                        if(data[0].manuscriptsNews[0].channelUrl.indexOf("http") != -1){
                            var localHostLink = '';
                        }else{
                            var localHostLink = previewPortal + '/';
                        }
                        //var channelName = $('.' + id + "_channelTitle").val() == "channelName" ? data[0].channelsInfo[0].channelName : data[0].channelsInfo[0].displayName;
                        var len = data[0].manuscriptsNews.length ;
                        var i = 0;
                        var html = '';
                        var name = '';
                        var channelUrl = localHostLink + data[0].manuscriptsNews[0].channelUrl;
                        name += '<div class="leftDiv" '+titleClickTab+'>'
                        name += '<i class="title-icon"></i>'
                        name += '<a href="'+channelUrl+'" class="title-content" name="' + $("." + id + "_cmsName").val() + '" target="_blank">' + $("." + id + "_cmsName").val() + '</a>'
                        name += '</div>'
                        name += '<div class="rightDiv" '+moreClickTab+'>'
                        name += '<a href="'+ channelUrl +'" class="title-more channelDataList_'+id.split("_")[1]+'_' + new Date().getTime() + '_titleLinkMore" target="_blank">'
                        name +=  moreText + '<i class="next-icon"></i>'
                        name += '</a>'
                        name += '</div>'
                        $("#" + id + " #static h1").html(name);
                        for (; i < len; i++) {
                            if(data[0].manuscriptsNews[i].url.indexOf("http") != -1){
                                var localHostLink1 = '';
                            }else{
                                var localHostLink1 = previewPortal + '/';
                            }
                            date = new Date(data[0].manuscriptsNews[i].publishedTime);
                            publishTime.push(date.format('yyyy-MM-dd'));
                            var url = localHostLink1 + data[0].manuscriptsNews[i].url;
                            var channelContent = $("." + id + "_articleHeader").val() == "title" ? data[0].manuscriptsNews[i].title : data[0].manuscriptsNews[i].subTitle;
                            html += '<li '+listClickTab+'>'
                            html += '<a href="' + url + '" target="_blank" class="tpl-component-2016-01-09-list-li-title">'
                            html += '<b class="line-content1"></b>'
                            html += '<span class="line-content" title=\''+channelContent+'\'>' + channelContent + '</span>'
                            html += '</a>'
                            html += '<a class="tpl-component-2016-01-09-list-li-time">'
                            html += '<span class="time-content" name="' + data[0].manuscriptsNews[i].publishedTime + '">' + publishTime[i] + '</span>'
                            html += '</a>'
                            html += '</li>'
                        }
                        $("#" + id + " #static .list-body .tpl-component-2016-01-09-list-list-body-ul0").html(html);
                    }
                })
            }
            cmsHtml += '<CMSPRO_DOCUMENTS SITECODE="'+siteCode+'" CHANNELCODE="'+channelCode+'" NUM="'+articleNum+'" DOCUMENTTYPE="'+docType+'" STARTPOS="'+start+'" BATCHRULE="'+batchRule+'">'
            cmsHtml += '<li '+listClickTab+'>'
            cmsHtml += '<a href="<CMSPRO_DOCUMENT FIELD=\'url\'></CMSPRO_DOCUMENT>" target="_blank" class="tpl-component-2016-01-09-list-li-title">'
            cmsHtml += '<b class="line-content1"></b>'
            cmsHtml += '<span class="line-content" title="<CMSPRO_DOCUMENT FIELD=\'title\'></CMSPRO_DOCUMENT>" name="<CMSPRO_DOCUMENT FIELD=\'title\'></CMSPRO_DOCUMENT>">'
            cmsHtml += '<CMSPRO_DOCUMENT FIELD='+titleVal+'></CMSPRO_DOCUMENT>'
            cmsHtml += '</span>'
            cmsHtml += '</a>'
            cmsHtml += '<span class="tpl-component-2016-01-09-list-li-time">'
            cmsHtml += '<span class="time-content" name="">'
            cmsHtml += '<CMSPRO_DOCUMENT FIELD="publishedTime" DATEFORMAT="yyyy-MM-dd" ></CMSPRO_DOCUMENT>'
            cmsHtml += '</span>'
            cmsHtml += '</span>'
            cmsHtml += '</li>'
            cmsHtml += '</CMSPRO_DOCUMENTS>'
            $("#" + id + " #cmsCode .list-body ul").html(cmsHtml);
            $.tplComponentListListSetting.storeAndInitTitleInfo();
            $.common.removeGeneratedCss(id, " .list-body li", "width")
            $.common.removeGeneratedCss(id, " .list-body li", "float")
            var listNum = $("." + id + "_listNum").val();
            var allList = $("." + id + "_articleNum").val();
            var liWidth = ((100 - (listNum-1)*4)/ listNum) + "%";
            var styleCss = $("#generatedCss").text();
            var styleText = "#" + id + " .list-body li{width: "+liWidth+";float:left}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            for(var i = 1;i < allList; i++) {
                if (i % listNum == 0) {
                    $.common.removeGeneratedCss(id, " .list-body li:nth-of-type("+i+")", "margin-right");
                    styleText = "#" + id + " .list-body li:nth-of-type(" + (i) + "){margin-right: 0px}";
                }else{
                    $.common.removeGeneratedCss(id, " .list-body li:nth-of-type("+i+")", "margin-right");
                    styleText = "#" + id + " .list-body li:nth-of-type(" + (i) + "){margin-right: 4%}";
                }
                styleCss += "\r\n" + styleText;
            }
            $("#generatedCss").text(styleCss);
            /*上一步，下一步*/
            $.common.regain();
        },
        /**
         * 返回code对象
         * @param  {[json]} obj [{siteCode: "test222", channelCode: "333", name: "3333"}]
         * @return {[type]}     [description]
         */
        callBackCode: function(obj) {
            if (obj.state === '0') {
                var id = selectedElementInfo.get("id");
                $("#" + id + " #static .list-body li").remove();
                for(var i = 0; i < obj.staticArr.length; i++){
                    var content = obj.staticArr[i].title;
                    var link = obj.staticArr[i].channelUrl;
                    $.tplComponentListSetting.addList(link,content,obj.staticArr[i].time);
                }
                return;
            } else if (obj.state === '1') {
                if (obj.name === undefined) {
                    return;
                }
                var id = selectedElementInfo.get("id");
                $("#cmsColumnsFont .selectlmLi").eq(0).find('.selectLmText').html(obj.name);
                $("." + id + "_cmsColumnsName").val(obj.name);
                $("#cmsColumnsFont").show();
                //   设置选择栏目的 siteCode   CHANNELCODE
                $("#" + id + " #cmsCode cmspro_documents").attr('sitecode', obj.siteCode);
                $("#" + id + " #cmsCode cmspro_documents").attr('channelcode', obj.channelCode);
                $("#" + id).removeClass('staticComponent').addClass('dynamicComponent');
                $("." + id + "_cmsSitCode").val(obj.siteCode);
                $("." + id + "_cmsChannelId").val(obj.channelId);
                $("." + id + "_cmsName").val(obj.name);
                $("." + id + "_cmsChannelCode").val(obj.channelCode);
                $.tplComponentListListSetting.dynamicCall();
            }
        },
        storeSelectCms:function(){
            var id = selectedElementInfo.get("id");
            var val = $("." + id + "_cmsColumnsName").val();
            if(val != ""){
                $("#cmsColumnsFont .selectlmLi").eq(0).find('.selectLmText').html(val);
                $("#cmsColumnsFont").show();
            }else{
                $("#cmsColumnsFont .selectlmLi").eq(0).find('.selectLmText').html("");
                $("#cmsColumnsFont").hide();
            }
        },
        /**
         * 显示选择栏目弹框
         * @return {[type]} [description]
         */
        showCmsTree: function() {
            $.cmsTree.init(this.callBackCode);
        },
        setListNum:function(){
            var id = selectedElementInfo.get("id");
            $("#articleList li").off('click').on('click',function(){
                var num = $(this).text();
                $.common.removeGeneratedCss(id, " .list-body li", "width")
                $.common.removeGeneratedCss(id, " .list-body li", "float")

                $(this).addClass("active").siblings('li').removeClass("active");
                var allList = $("." + id + "_articleNum").val();
                $("." + id + "_listNum").val(num);
                var liWidth = ((100 - (num-1)*4)/ num) + "%";
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " .list-body li{width: "+liWidth+";float:left}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;

                for(var i = 1;i < allList; i++) {
                    if (i % num == 0) {
                        $.common.removeGeneratedCss(id, " .list-body li:nth-of-type("+i+")", "margin-right");
                        styleText = "#" + id + " .list-body li:nth-of-type(" + (i) + "){margin-right: 0px}";
                    }else{
                        $.common.removeGeneratedCss(id, " .list-body li:nth-of-type("+i+")", "margin-right");
                        styleText = "#" + id + " .list-body li:nth-of-type(" + (i) + "){margin-right: 4%}";
                    }


                    styleCss += "\r\n" + styleText;
                }
                $("#generatedCss").text(styleCss);
                /*上一步，下一步*/
                $.common.regain();
            })
        },
        storeListNum:function(){
            var id = selectedElementInfo.get("id");
            var num = $("." + id + "_listNum").val();
            $("#articleList li").removeClass("active");
            $("#articleList li").eq(num-1).addClass("active");
        },
        dynamicCall:function(){
            var id = selectedElementInfo.get("id");
            var start = $("." + id + "_articleStart").val();
            if(start == 0){
                start = 0
            }else{
                start = start - 1
            }
            var code = {
                m_websiteCodeName: $("." + id + "_cmsSitCode").val(),
                m_channelCodeName:$("." + id + "_cmsChannelCode").val(),
                websiteCodeName: $("." + id + "_cmsSitCode").val(),
                channelCodeName:$("." + id + "_cmsChannelCode").val(),
                m_num:$("." + id + "_articleNum").val(),
                startPos:start,
                m_startPos:start,
                m_documentType:$("." + id + "_cmsdocType").val(),
                m_batchRule:$("." + id + "_cmsBatchRule").val() == "true" ? true : false,
                num:$("." + id + "_maxLength").val()
            };
            if($("." + id + "_cmsSitCode").val() != '' || $("." + id + "_cmsChannelId").val() != ''){
                $.tplComponentListListSetting.basePublic(code)
            }
        },
        initAttr:function(){
            var id = selectedElementInfo.get("id");
            $("." + id + "_cmsSitCode").val("");
            $("." + id + "_cmsChannelCode").val("");
            $("." + id + "_listNum").val("1");
            $("." + id + "_cmsdocType").val("0|1|2|3|4|9|8");
            $("." + id + "_cmsBatchRule").val("false");
            $("." + id + "_maxLength").val("");
            $("." + id + "_cmsColumnsName").val("");
            $("." + id + "_publishTime").val("showTime");
            $("." + id + "_articleHeader").val("title");
            $("." + id + "_dynamicLink").val("addLink");
            $("." + id + "_startUsing").val("stopUsing");
            $("." + id + "_articleStart").val("1");
            $("." + id + "_articleType").val("098");
            $("." + id + "_articleNum").val("5");
            $("." + id + "_channelTitle").val("channelName");
            var script = $('head').find('script[class=' + id + ']');
            $("script." + id + "").remove();
            $("head").append(script);
        },
        readHiddenInfo:function(){
            $.tplComponentListSetting.initTime();
            //8、存储或初始化设置Margin和Padding
            $.tplComponentListSetting.storeAndInitMarginAndPadding();
            //9、存储或初始化边框的类型
            $.tplComponentListSetting.storeBaseListBorderStyle();
            $.tplComponentListSetting.storeBaseTreeBorderStyle();
            $.tplComponentListSetting.storeBaseTitleBorderStyle();
            //10、存储或初始化边框的宽度
            $.tplComponentListSetting.storeBaseListBorderWidth();
            $.tplComponentListSetting.storeBaseTitleBorderWidth();
            $.tplComponentListSetting.storeBaseTreeBorderWidth();
            $.tplComponentListSetting.storeBorderRadius();
            $.tplComponentListSetting.storeTreeColumn();
            //11、存储或初始化边框的颜色
            $.tplComponentListSetting.storeBaseListBorderColor();
            $.tplComponentListSetting.storeBaseTitleBorderColor();
            $.tplComponentListSetting.storeBaseTreeBorderColor();
            //12、存储或初始化边框的选中

            $.tplComponentListSetting.storeAndInitAlign();
            $.tplComponentListSetting.storeAndInitVerticalAlign();
            $.tplComponentListSetting.storeRightDistance();
            $.tplComponentListSetting.storeMoreDistance();
            $.tplComponentListSetting.storelistRightDistance();
            $.tplComponentListSetting.storeMoreTitle();
            $.tplComponentListSetting.storeLinkButton();
            $.tplComponentListSetting.setLinkButton();
            //执行更多图标显示或隐藏
            $.tplComponentListSetting.setMoreShowStyle();
            $.tplComponentListSetting.storeMoreShowStyle();
            //执行前置图标显示或隐藏
            $.tplComponentListSetting.setLeftIconShowStyle();
            $.tplComponentListSetting.storeLeftIconShowStyle();
            //执行列表图标显示或隐藏
            $.tplComponentListSetting.setListIconShowStyle();
            $.tplComponentListSetting.storeListIconShowStyle();

            $.tplComponentListSetting.setTreeTime();
            $.tplComponentListSetting.storeTreeTime();
            /****************标题高级设置********************/
            $.tplComponentListTitleSetting.storeTitlePic();
            $.tplComponentListTitleSetting.storeTitleLeftPic();
            $.tplComponentListTitleSetting.storeTitleRightPic();
            $.tplComponentListTitleSetting.storeListPic();
            $.tplComponentListTitleSetting.storeH1TitlePic();

            //1、当选择了字体之后触发设置字体的功能
            $.tplComponentListTitleSetting.selectTitleFontFamily();
            $.tplComponentListTitleSetting.selectRightTitleFontFamily();
            //2、存储或者初始化标题的字体
            $.tplComponentListTitleSetting.storeAndInitListTitleFontFamily();
            $.tplComponentListTitleSetting.storeAndInitListRightTitleFontFamily();
            //3、存储或者初始化标题的字体大小
            $.tplComponentListTitleSetting.storeAndInitTitleFontSize();
            $.tplComponentListTitleSetting.storeAndInitRightTitleFontSize();
            //4、存储或者初始化标题的字体行高
            $.tplComponentListTitleSetting.storeAndInitTitleLineHeight();
            $.tplComponentListTitleSetting.storeAndInitRightTitleLineHeight();
            //5、存储或者初始化标题的颜色
            $.tplComponentListTitleSetting.storeAndInitTitleColor();
            $.tplComponentListTitleSetting.storeAndInitTitleHoverColor();
            $.tplComponentListTitleSetting.storeAndInitTitleRightHoverColor();
            $.tplComponentListTitleSetting.storeAndInitRightTitleColor();
            //6、存储或者初始化标题的字体对齐方式
            $.tplComponentListTitleSetting.storeAndInitTitleTextAlign();
            //7、存储或者初始化标题的字体的风格
            $.tplComponentListTitleSetting.storeAndInitTitleFontStyle();
            //8、存储或者初始化标题边框的颜色
            $.tplComponentListTitleSetting.storeAndInitTitleBorderColor();
            //9、存储或者初始化标题的边框的风格
            $.tplComponentListTitleSetting.storeAndInitTitleBorderStyle();
            //10、存储或者初始化标题的边框的宽度
            $.tplComponentListTitleSetting.storeAndInitTitleBorderWidth();
            //11、存储或者初始化选中了哪些边框
            $.tplComponentListTitleSetting.storeAndInitTitleBorderSelected();
            //12、存储或者初始化标题的背景颜色
            $.tplComponentListTitleSetting.storeAndInitTitleBackgroundColor();
            $.tplComponentListTitleSetting.storeAndInitTitleLeftBackgroundColor();
            $.tplComponentListTitleSetting.storeAndInitTitleRightBackgroundColor();
            $.tplComponentListTitleSetting.storeAndInitH1TitleBackgroundColor();
            //13、存储或初始化标题定位参数
            $.tplComponentListTitleSetting.storeAndInitTitleBackGroundPosition();
            $.tplComponentListTitleSetting.storeAndInitH1TitleBackGroundPosition();
            //14、存储或初始化标题背景的Repeat属性
            $.tplComponentListTitleSetting.storeAndInitTitleBackGroundRepeat();
            $.tplComponentListTitleSetting.storeAndInitH1TitleBackGroundRepeat();
            //15、存储或初始化标题的边距
            $.tplComponentListSetting.storeHeaderMarginAndPadding();
            //15、存储或初始化标题的高度
            $.tplComponentListSetting.storeHeaderHeight();

            /****************列表高级设置********************/
            //1、当选择了字体之后触发设置字体的功能
            $.tplComponentListListSetting.selectListFontFamily();
            //2、存储或者初始化列表的字体
            $.tplComponentListListSetting.storeAndInitListListFontFamily();
            //3、存储或者初始化字体的大小
            $.tplComponentListListSetting.storeAndInitListFontSize();
            //4、存储或者初始化字体的行高
            $.tplComponentListListSetting.storeAndInitListLineHeight();
            //5、存储或者初始化字体的颜色
            $.tplComponentListListSetting.storeAndInitListColor();
            $.tplComponentListListSetting.storeAndInitListHoverColor();
            //6、存储或者初始化列表的对齐方式
            $.tplComponentListListSetting.storeAndInitListTextAlign();
            //7、存储或者初始化列表的边框的颜色
            $.tplComponentListListSetting.storeAndInitListBorderColor();
            //8、存储或者初始化列表的字体的风格
            $.tplComponentListListSetting.storeAndInitListFontStyle();
            //9、存储或者初始化列表的边框的风格
            $.tplComponentListListSetting.storeAndInitListBorderStyle();
            //10、存储或者初始化列表的边框的宽度
            $.tplComponentListListSetting.storeAndInitListBorderWidth();
            //11、存储或者初始化列表选中了哪些边框
            $.tplComponentListListSetting.storeAndInitListBorderSelected();
            //12、存储或者初始化列表中的颜色设置
            // $.tplComponentListListSetting.storeAndInitListLinkStyle();
            //13、存储或者初始化Link标签的textDecoration
            $.tplComponentListListSetting.storeAndInitListLinkTextDecoration();
            //14、存储或初始化列表的背景颜色
            $.tplComponentListListSetting.storeAndInitListBackgroundColor();
            //14、存储或初始化列表的背景位置
            $.tplComponentListListSetting.storeAndInitListBackGroundPosition();
            //14、存储或初始化列表的背景平铺
            $.tplComponentListListSetting.storeAndInitListBackGroundRepeat();
            //14、存储或初始化列表的更多链接地址
            $.tplComponentListListSetting.storeAndInitListHref();
            //14、存储或初始化列表的更多
            $.tplComponentListListSetting.storeAndInitListMore();
            //14、存储或初始化标题文本
            $.tplComponentListListSetting.storeAndInitTitleText();
            //14、存储或初始化列表行数
            $.tplComponentListSetting.storeTitleShowOrHide();
            $.tplComponentListSetting.storeTitleNameShowOrHide();


            $.tplComponentListSetting.storeAndInitWidth();
            $.tplComponentListListSetting.setChannelTitle();
            $.tplComponentListListSetting.storeChannelTitle();
            $.tplComponentListListSetting.storeArticleNum();
            $.tplComponentListListSetting.setArticleType();
            $.tplComponentListListSetting.storeArticleStart();
            $.tplComponentListListSetting.storeStartUsing();
            $.tplComponentListListSetting.setStartUsing();
            $.tplComponentListListSetting.setArticleHeader();
            $.tplComponentListListSetting.storeArticleHeader();
            $.tplComponentListListSetting.setPublishTime();
            $.tplComponentListListSetting.storePublishTime();
            $.tplComponentListListSetting.setDynamicLink();
            $.tplComponentListListSetting.storeDynamicLink();
            $.tplComponentListListSetting.storeMaxLength();
            $.tplComponentListListSetting.setOpenWay();
            $.tplComponentListListSetting.storeOpenWay();
            $.tplComponentListListSetting.storeListNum();
            $.tplComponentListListSetting.setListNum();
            //更多图标
            $.tplComponentListListSetting.storeRightSelectIcon();
            $.tplComponentListListSetting.rightSelectIcon();
            $.tplComponentListListSetting.removeRightUploadIcon();
            $.tplComponentListListSetting.rightUploadBtn();
            //前置图标
            $.tplComponentListListSetting.storeLeftSelectIcon();
            $.tplComponentListListSetting.leftSelectIcon();
            $.tplComponentListListSetting.removeLeftUploadIcon();
            $.tplComponentListListSetting.leftUploadBtn();
            //列表图标
            $.tplComponentListListSetting.storeListSelectIcon();
            $.tplComponentListListSetting.listSelectIcon();
            $.tplComponentListListSetting.removeListUploadIcon();
            $.tplComponentListListSetting.listUploadBtn();
            $.tplComponentListListSetting.storeArticleType();
            $.tplComponentListSetting.storeBaseListBorderSelected();
            $.tplComponentListSetting.storeBaseTitleBorderSelected();
            $.tplComponentListSetting.storeBaseTreeBorderSelected();
            $.tplComponentListListSetting.storeSelectCms();
        }
    };
})(jQuery);


/**
 * 取消背景图片
 * @param cId 取消按钮的id
 * @param hiddenPath 隐藏字段， 存放的图片路径的text的id值
 * @param imgDivId img所在的div的id值
 */
function cancelBackgroundImg(cId, hiddenPath, imgDivId) {
    //清除背景上传图片
    $("#" + cId).click(function () {
        var bgImgPath = $("#" + hiddenPath).val();
        if (bgImgPath == "" || bgImgPath == null) {
            return false;
        } else {
            $.ajax({
                url: basePath + "/style/removeFile.action",
                async: false,
                type: 'post',
                dataType: 'json',
                data: {
                    'thumbnail': bgImgPath
                },
                success: function (data) {
                    if (data.result == "success") {
                        $("#" + hiddenPath).val("");
                        var id = selectedElementInfo.get("id");	//获得id的属性值
                        $.common.removeGeneratedCss(id, "", "background-image");//移除原来的背景图片
                        $("#" + imgDivId).hide();
                    } else {
                        alert("文件不存在");
                    }
                }
            });
        }
    });
}

$(function () {
    //try catch的目的是为了让脱离app-tpl-webapp的时候这个也不错
    if ($('head').find('script[name=systemJs]').length > 0) {
        var id = selectedElementInfo.get('id');
        $("body").find(".full-spectrum").remove();
        //位标题添加背景图片
        $("#treeTitleBg").click(function () {
            var val = $("." + id + "_h1BgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, "", "background-image");//移除原来的背景图片
                var path = data.all[0].path;
                $("#treeTitlePath").css("background", "url("+path+") center center no-repeat");
                var img = $("#treeTitlePath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //图片的真实宽高
				        var _width = this.width;
				        var _height = this.height;
						//图片容器的宽高
						var width = hWidth;
						var height = hHeight;
						//图片页面中的宽高
						var iwidth = img.width();
						var iheight = img.height();
						//图片真实宽度大于图片容器宽度
						if(_width>width){
							//图片宽度为容器宽度
							iwidth = width;
							//图片高度 为对应比例数值
							iheight = Math.floor(_height*width/_width);
						}else{
							//图片真实宽度较小
							//图片宽度为真实宽度
							iwidth = _width;
							//图片高度为真实高度
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#treeTitleBgImg").hide();
                $("#blockPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " {background-image: url('" + path + "');}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_h1BgPicDate").val(value);
                $("." + id + "_titleBackgroundAbsoluteImg").val(path);
                /*上一步，下一步*/
                $.common.regain();
            });
        });
        $("#treeTitlePath").click(function () {
            var val = $("." + id + "_h1BgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, "", "background-image");//移除原来的背景图片
                var path = data.all[0].path;
                $("#treeTitlePath").css("background", "url("+path+") center center no-repeat");
                $("#treeTitleBgImg").hide();
                var img = $("#treeTitlePath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //图片的真实宽高
				        var _width = this.width;
				        var _height = this.height;
						//图片容器的宽高
						var width = hWidth;
						var height = hHeight;
						//图片页面中的宽高
						var iwidth = img.width();
						var iheight = img.height();
						//图片真实宽度大于图片容器宽度
						if(_width>width){
							//图片宽度为容器宽度
							iwidth = width;
							//图片高度 为对应比例数值
							iheight = Math.floor(_height*width/_width);
						}else{
							//图片真实宽度较小
							//图片宽度为真实宽度
							iwidth = _width;
							//图片高度为真实高度
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " {background-image: url('" + path + "');}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_h1BgPicDate").val(value);
                $("." + id + "_titleBackgroundAbsoluteImg").val(path);
                /*上一步，下一步*/
                $.common.regain();
            });
        });
        $("#treeH1TitleBg").click(function () {
            var val = $("." + id + "_h1TitleBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1", "background-image");//移除原来的背景图片
                $.common.removeGeneratedCss(id, " .title-content", "border-bottom");//移除原来的背景图片
                var path = data.all[0].path;
                $("#treeH1TitlePath").css("background", "url("+path+") center center no-repeat");
                var img = $("#treeH1TitlePath");
                var hWidth = 170;
                var hHeight = 94;
                $("<img/>").attr("src", path).load(function() {
                    //图片的真实宽高
                    var _width = this.width;
                    var _height = this.height;
                    //图片容器的宽高
                    var width = hWidth;
                    var height = hHeight;
                    //图片页面中的宽高
                    var iwidth = img.width();
                    var iheight = img.height();
                    //图片真实宽度大于图片容器宽度
                    if(_width>width){
                        //图片宽度为容器宽度
                        iwidth = width;
                        //图片高度 为对应比例数值
                        iheight = Math.floor(_height*width/_width);
                    }else{
                        //图片真实宽度较小
                        //图片宽度为真实宽度
                        iwidth = _width;
                        //图片高度为真实高度
                        iheight = _height;
                    }
                    img.css('background-size',iwidth+'px '+iheight+'px');
                });
                $("#treeH1TitleBgImg").hide();
                $("#blockH1Picture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1" + " {background-image: url('" + path + "');}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .title-content" + " {border-bottom:0 none}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_h1TitleBgPicDate").val(value);
                $("." + id + "_h1TitleBackgroundAbsoluteImg").val(path);
                /*上一步，下一步*/
                $.common.regain();
            });
        });
        $("#treeH1TitlePath").click(function () {
            var val = $("." + id + "_h1TitleBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1", "background-image");//移除原来的背景图片
                $.common.removeGeneratedCss(id, " .title-content", "border-bottom");//移除原来的背景图片
                var path = data.all[0].path;
                $("#treeH1TitlePath").css("background", "url("+path+") center center no-repeat");
                var img = $("#treeH1TitlePath");
                var hWidth = 170;
                var hHeight = 94;
                $("<img/>").attr("src", path).load(function() {
                    //图片的真实宽高
                    var _width = this.width;
                    var _height = this.height;
                    //图片容器的宽高
                    var width = hWidth;
                    var height = hHeight;
                    //图片页面中的宽高
                    var iwidth = img.width();
                    var iheight = img.height();
                    //图片真实宽度大于图片容器宽度
                    if(_width>width){
                        //图片宽度为容器宽度
                        iwidth = width;
                        //图片高度 为对应比例数值
                        iheight = Math.floor(_height*width/_width);
                    }else{
                        //图片真实宽度较小
                        //图片宽度为真实宽度
                        iwidth = _width;
                        //图片高度为真实高度
                        iheight = _height;
                    }
                    img.css('background-size',iwidth+'px '+iheight+'px');
                });
                $("#treeH1TitleBgImg").hide();
                $("#blockH1Picture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1" + " {background-image: url('" + path + "')}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .title-content" + " {border-bottom:0 none}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_h1TitleBgPicDate").val(value);
                $("." + id + "_h1TitleBackgroundAbsoluteImg").val(path);
                /*上一步，下一步*/
                $.common.regain();
            });
        });
        $("#treeTitleLeftBg").click(function () {
            var val = $("." + id + "_leftDivBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1 .leftDiv", "background-image");//移除原来的背景图片
                var path = data.all[0].path;
                $("#treeTitleLeftPath").css("background", "url("+path+") center center no-repeat");
                $("#treeTitleLeftBgImg").hide();
                var img = $("#treeTitleLeftPath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //图片的真实宽高
				        var _width = this.width;
				        var _height = this.height;
						//图片容器的宽高
						var width = hWidth;
						var height = hHeight;
						//图片页面中的宽高
						var iwidth = img.width();
						var iheight = img.height();
						//图片真实宽度大于图片容器宽度
						if(_width>width){
							//图片宽度为容器宽度
							iwidth = width;
							//图片高度 为对应比例数值
							iheight = Math.floor(_height*width/_width);
						}else{
							//图片真实宽度较小
							//图片宽度为真实宽度
							iwidth = _width;
							//图片高度为真实高度
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockLeftPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1 .leftDiv" + " {background-image: url('" + path + "')}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_leftDivBgPicDate").val(value);
                $("." + id + "_titleLeftBackgroundAbsoluteImg").val(path);
                /*上一步，下一步*/
                $.common.regain();
            });
        });
        $("#treeTitleLeftPath").click(function () {
            var val = $("." + id + "_leftDivBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1 .leftDiv", "background-image");//移除原来的背景图片
                var path = data.all[0].path;
                $("#treeTitleLeftPath").css("background", "url("+path+") center center no-repeat");
                $("#treeTitleLeftBgImg").hide();
                var img = $("#treeTitleLeftPath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //图片的真实宽高
				        var _width = this.width;
				        var _height = this.height;
						//图片容器的宽高
						var width = hWidth;
						var height = hHeight;
						//图片页面中的宽高
						var iwidth = img.width();
						var iheight = img.height();
						//图片真实宽度大于图片容器宽度
						if(_width>width){
							//图片宽度为容器宽度
							iwidth = width;
							//图片高度 为对应比例数值
							iheight = Math.floor(_height*width/_width);
						}else{
							//图片真实宽度较小
							//图片宽度为真实宽度
							iwidth = _width;
							//图片高度为真实高度
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockLeftPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1 .leftDiv" + " {background-image: url('" + path + "')}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_leftDivBgPicDate").val(value);
                $("." + id + "_titleLeftBackgroundAbsoluteImg").val(path);
                /*上一步，下一步*/
                $.common.regain();
            });
        });
        $("#treeTitleRightBg").click(function () {
            var val = $("." + id + "_rightDivBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1 .rightDiv", "background-image");//移除原来的背景图片
                var path = data.all[0].path;
                $("#treeTitleRightPath").css("background", "url("+path+") center center no-repeat");
                $("#treeTitleRightBgImg").hide();
                var img = $("#treeTitleRightBgImg");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //图片的真实宽高
				        var _width = this.width;
				        var _height = this.height;
						//图片容器的宽高
						var width = hWidth;
						var height = hHeight;
						//图片页面中的宽高
						var iwidth = img.width();
						var iheight = img.height();
						//图片真实宽度大于图片容器宽度
						if(_width>width){
							//图片宽度为容器宽度
							iwidth = width;
							//图片高度 为对应比例数值
							iheight = Math.floor(_height*width/_width);
						}else{
							//图片真实宽度较小
							//图片宽度为真实宽度
							iwidth = _width;
							//图片高度为真实高度
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockRightPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1 .rightDiv" + " {background-image: url('" + path + "');}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_rightDivBgPicDate").val(value);
                $("." + id + "_titleRightBackgroundAbsoluteImg").val(path);
                /*上一步，下一步*/
                $.common.regain();
            });
        });
        $("#treeTitleRightPath").click(function () {
            var val = $("." + id + "_rightDivBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1 .rightDiv", "background-image");//移除原来的背景图片
                var path = data.all[0].path;
                $("#treeTitleRightPath").css("background", "url("+path+") center center no-repeat");
                $("#treeTitleRightBgImg").hide();
                var img = $("#treeTitleRightBgImg");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //图片的真实宽高
				        var _width = this.width;
				        var _height = this.height;
						//图片容器的宽高
						var width = hWidth;
						var height = hHeight;
						//图片页面中的宽高
						var iwidth = img.width();
						var iheight = img.height();
						//图片真实宽度大于图片容器宽度
						if(_width>width){
							//图片宽度为容器宽度
							iwidth = width;
							//图片高度 为对应比例数值
							iheight = Math.floor(_height*width/_width);
						}else{
							//图片真实宽度较小
							//图片宽度为真实宽度
							iwidth = _width;
							//图片高度为真实高度
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockRightPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1 .rightDiv" + " {background-image: url('" + path + "');}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_rightDivBgPicDate").val(value);
                $("." + id + "_titleRightBackgroundAbsoluteImg").val(path);
                /*上一步，下一步*/
                $.common.regain();
            });
        });
        $("#treeListBg").click(function () {
            var val = $("." + id + "_listBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " .list-body", "background-image");//移除原来的背景图片
                var path = data.all[0].path;
                $("#treeListPath").css("background", "url("+path+") center center no-repeat");
                $("#treeListBgImg").hide();

                var img = $("#treeListPath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //图片的真实宽高
				        var _width = this.width;
				        var _height = this.height;
						//图片容器的宽高
						var width = hWidth;
						var height = hHeight;
						//图片页面中的宽高
						var iwidth = img.width();
						var iheight = img.height();
						//图片真实宽度大于图片容器宽度
						if(_width>width){
							//图片宽度为容器宽度
							iwidth = width;
							//图片高度 为对应比例数值
							iheight = Math.floor(_height*width/_width);
						}else{
							//图片真实宽度较小
							//图片宽度为真实宽度
							iwidth = _width;
							//图片高度为真实高度
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockListPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " .list-body" + " {background-image: url('" + path + "');}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_listBgPicDate").val(value);
                $("." + id + "_listBackgroundAbsoluteImg").val(path);
                /*上一步，下一步*/
                $.common.regain();
            });
        });
        $("#treeListPath").click(function () {
            var val = $("." + id + "_listBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " .list-body", "background-image");//移除原来的背景图片
                var path = data.all[0].path;
                $("#treeListPath").css("background", "url("+path+") center center no-repeat");
                $("#treeListBgImg").hide();
                var img = $("#treeListPath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //图片的真实宽高
				        var _width = this.width;
				        var _height = this.height;
						//图片容器的宽高
						var width = hWidth;
						var height = hHeight;
						//图片页面中的宽高
						var iwidth = img.width();
						var iheight = img.height();
						//图片真实宽度大于图片容器宽度
						if(_width>width){
							//图片宽度为容器宽度
							iwidth = width;
							//图片高度 为对应比例数值
							iheight = Math.floor(_height*width/_width);
						}else{
							//图片真实宽度较小
							//图片宽度为真实宽度
							iwidth = _width;
							//图片高度为真实高度
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockListPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " .list-body" + " {background-image: url('" + path + "');}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_listBgPicDate").val(value);
                $("." + id + "_listBackgroundAbsoluteImg").val(path);
                /*上一步，下一步*/
                $.common.regain();
            });
        });
        $('#height').val($('.' + id + '_height').val());
        $("#height").on('blur', $.tplComponentListSetting.set_height);
       

        $("#listIcon").off('click').on('click',function(){
            var val = $("." + id + "_listBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " .list-body li  b.line-content1", "background");
                var path = data.all[0].path;
                var css = '#' + id + ' .list-body li  b.line-content1{background:url(' + path + ') center center no-repeat}\n';
                $('#generatedCss').append(css);
                var value = JSON.stringify(data);
                $("." + id + "_listBgPicDate").val(value);
            });
        });
        $("#listCancle").off('click').on('click',function(){
            $.common.removeGeneratedCss(id, " .list-body li  b.line-content1", "background");
            $("." + id + "_listBgPicDate").val("");
        });
        // 风格设置开始
        var serverPath = $.common.getComponetIMagesUrl(id);
        var jsonData = [{
                name: '默认风格',
                childElement: "",
                childIndexElement: " .tpl-component-2016-01-09-list-change",
                classStyle: 'tpl-component-2016-01-09-list-style',
                url: serverPath + '/images/localDefault.png',
                className: 'tpl-component-2016-01-09-list-style1',
                fileName: 'index_1',
                id: id,
            }, {
                name: '双列风格',
                childElement: "",
                childIndexElement: " .tpl-component-2016-01-09-list-change",
                classStyle: 'tpl-component-2016-01-09-list-style',
                url: serverPath + '/images/locallTwo.png',
                className: 'tpl-component-2016-01-09-list-style2',
                fileName: 'index_2',
                id: id,

            }, {
                name: '三列风格',
                childElement: "",
                childIndexElement: " .tpl-component-2016-01-09-list-change",
                classStyle: 'tpl-component-2016-01-09-list-style',
                url: serverPath + '/images/locallThree.png',
                className: 'tpl-component-2016-01-09-list-style3',
                fileName: 'index_3',
                id: id,

            }];
        function callback(json, type, index, hiddenCb) {
            // 系统风格
            if (type === 1) {
                var className = json[index].className,
                    childElement = json[index].childElement,
                    childIndexElement = json[index].childIndexElement,
                    classStyle = json[index].classStyle,
                    fileName = json[index].fileName,
                    id = json[index].id;
                $.cssGenerator.changeContent(id, childElement, childIndexElement, classStyle, className, fileName, hiddenCb);
                $("." + id + "_saveSystemFg").val(index);
                $("." + id + "_savecoustomFg").val("");
            } else {
                // 用户风格
                var styleId = json[index].id;
                var id = selectedElementInfo.get("id");
                var componentClass = $('#' + id).attr('class').split(' ')[0];
                $.tplCustomerStyle.changeStyle(styleId, id, componentClass, '', hiddenCb);
                $("." + id + "_savecoustomFg").val(index);
                $("." + id + "_saveSystemFg").val("");
            }
        }
        // 回显数据回调
        var hiddenCb = $.tplComponentListListSetting.readHiddenInfo;
        // 传递保存的风格索引
        var saveCoustomFg = "";
        var saveSystemFg = "";
        saveCoustomFg = $("." + id + "_savecoustomFg").val() === "" ? "" : $("." + id + "_savecoustomFg").val() * 1;
        saveSystemFg = $("." + id + "_saveSystemFg").val() === "" ? "" : saveSystemFg = $("." + id + "_saveSystemFg").val() * 1;
        var targetFg = {
            saveSystemFg: saveSystemFg,
            saveCoustomFg: saveCoustomFg
        };
        /**
         * 初始化操作
         * @param  {[type]} arr       数据资源
         * @param  {[Boolean]} isSystem       是否是系统风格
         * @param  {要放置的位置} targetBox [description]
         * @param  {callback} cb [点击确定的时候，选择风格的回调操作]
         * @param  {callback} hiddenCb [点击确定之后 通过回调函数cb来调用hiddenCb 来回显config中的值]
         * @param  {Number} targetFg [传递保存的风格]
         * @return {[type]}           [description]
         */
        // 初始化系统风格的数据资源
        counstomStyle.init(jsonData, 1, callback, hiddenCb, targetFg, "稿件列表");

        // 获得所有的用户风格的数据资源
        var sqluserArr = counstomStyle.getUserStyleData('tpl-component-2016-01-09-list');
        counstomStyle.formatUserarr(sqluserArr.innerStyleByClassName, function(userarr) {
            // 初始化用户风格
            counstomStyle.init(userarr, 0, callback, hiddenCb, targetFg);
        });
        // 风格设置结束
        $("input").on("focus", function(e) {
            $(this)[0].select();
        });
        //点击空白关闭弹框
        $(document).off('click').on('click',function(){
            $("#leftSelectIcon").hide();
            $("#rightSelectIcon").hide();
            $("#listSelectIcon").hide();
        })
        $(".treeSelectIcon").mCustomScrollbar("destroy");
        $(".treeSelectIcon").mCustomScrollbar({
            theme: 'dark',
            autoDraggerLength: true,
            contentTouchScroll: false,
            documentTouchScroll: false,
            advanced: {
                updateOnBrowserResize: true,
                updateOnContentResize: true,
                autoHideScrollbar: true,
                autoScrollOnFocus: false
            }
        });
        var lists = $(".tpl-component-2016-01-09-list").get();
        if (lists && lists.length > 0) {
            $.each(lists, function (index, list) {
                $(list).off('mouseenter', $.common.mEShowBorder);
                $(list).off('mouseleave', $.common.mLHideBorder);
                $(list).off('click', $.common.cShowBorder);
               
                $(list).on('mouseenter', {obj: list}, $.common.mEShowBorder);
                $(list).on('mouseleave', {obj: list}, $.common.mLHideBorder);
                $(list).on('click', {obj: list}, $.common.cShowBorder);
               
                var _list = $(list).children('.list');
                if (_list.length > 0) {
                    if ($(_list).find('.list-footer').length === 0) {
                        $(_list).css('padding-bottom', '0px');
                    }
                }
            });
        }
        $("#changeTime").click(function () {
            if ($("#tpl-component-2016-01-09-list-changeTime").css("display") == "none") {
                $("#tpl-component-2016-01-09-list-changeTime").css("display", "block");
            } else {
                $("#tpl-component-2016-01-09-list-changeTime").css("display", "none");
            }
        });
        $("#tpl-component-2016-01-09-list-changeTime li").click(function () {
            var value = $(this).text();
            $("#changeTime span").text(value);
            $("#tpl-component-2016-01-09-list-changeTime").css("display", "none");
            $("." + id + "_timeFormat").val(value);
            $.tplComponentListSetting.initTime();
        })
        var checkboxButtons = $('.tpl-sidebar-2016-01-09-list .component-checkbox').get();
        if (checkboxButtons && checkboxButtons.length > 0) {
            $.each(checkboxButtons, function (index, btn) {
                $(btn).click(function (event) {
                    /* Act on the event */
                    if (!$(this).children('.checkbox-checked').html()) {
                        $(this).children('.checkbox-checked').html('&radic;');
                    } else {
                        $(this).children('.checkbox-checked').html('');
                    }
                });
            });
        }
        var checkboxTexts = $('.tpl-sidebar-2016-01-09-list .checkbox-text').get();
        if (checkboxTexts && checkboxTexts.length > 0) {
            $.each(checkboxTexts, function (index, txt) {
                $(txt).click(function (event) {
                    /* Act on the event */
                    if (!$(this).prev('.component-checkbox').children('.checkbox-checked').html()) {
                        $(this).prev('.component-checkbox').children('.checkbox-checked').html('&radic;');
                    } else {
                        $(this).prev('.component-checkbox').children('.checkbox-checked').html('');
                    }
                });
            });
        }

        $(".moreChange").off('click').on('click', function() {
            $(".moreText").show();
        });
        $(".moreCancle").off('click').on('click', function() {
            var html = $("#" + id + " .rightDiv a").html();
            var arr = html.split("<");
            $("#" + id + " .rightDiv a").html("<"+arr[1]);
            $("." + id + "_moreText").val("");
            $("#moreText").val("");
            $("#labelMore").css("opacity",0);
        });
        $(".section-tab-box .titleShow").off('click').on('click', function() {
            // 滑动效果
            var playValue = $.tplComponentListSetting.hdBtn("titleShow",this)

            $("." + id + "_titleShowOrHide").val(playValue)
            // 设置循环播放
            $.tplComponentListSetting.setTitleShowOrHide(playValue)
        });
        $(".section-tab-box .titleNameShow").off('click').on('click', function() {
            // 滑动效果
            var playValue = $.tplComponentListSetting.hdBtn("titleNameShow",this)

            $("." + id + "_titleNameShowOrHide").val(playValue)
            // 设置循环播放
            $.tplComponentListSetting.setTitleNameShowOrHide(playValue)
        });

        //调用拖拽改变大小
        $.tplComponentResize.initResizeComponent(id,
            function(width){
                $('#width').val(width.replace(' ',''));
                $('#width').trigger('blur');
            },
            function(left){
                $('#tpl-component-2016-01-09-listMarginLeft').val(left);
                $('#tpl-component-2016-01-09-listMarginLeft').trigger('blur');
            },function(height){
                $('#height').val(height);
                $('#height').trigger('blur');
            },function(top){
                $('#tpl-component-2016-01-09-listMarginTop').val(top);
                $('#tpl-component-2016-01-09-listMarginTop').trigger('blur');
            })
        //调用键盘移动事件
        $.tplComponentMove.initMoveComponent(id,
            function(left){
                $('#tpl-component-2016-01-09-listMarginLeft').val(left);
                $('#tpl-component-2016-01-09-listMarginLeft').trigger('blur');
            },function(top){
                $('#tpl-component-2016-01-09-listMarginTop').val(top);
                $('#tpl-component-2016-01-09-listMarginTop').trigger('blur');
            })
        //调用随意拖动
        $.dragResizeInitInfo.getCallBack(function(marginLeft,marginTop){
            $('#tpl-component-2016-01-09-listMarginLeft').val(marginLeft);
            $('#tpl-component-2016-01-09-listMarginLeft').trigger('blur');
            $('#tpl-component-2016-01-09-listMarginTop').val(marginTop);
            $('#tpl-component-2016-01-09-listMarginTop').trigger('blur');
        });
        // 添加热区锚点右键菜单通过组件或者布局单独调用
        $.customMenu.init(id);
    };
});
$(function(){
    try {
        /****************基本设置***********************/
        //7、改变时间的显示状态
        $.tplComponentListListSetting.readHiddenInfo()
    }catch(e){
    }

})