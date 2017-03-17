/*
 * name       :tuzuoquan
 * mail       :tuzq@ucap.com.cn 
 * date       :2016/1/7
 * version    :1.0
 * description:վ����Ŀ����Ӧ��js
 * CopyRight (C) 2016-1-07
 */
(function ($) {
    $.tplComponentList = {
        
    };
})(jQuery);

//������ɫ
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
 * @param colorPickerId ��ʾ����Ҫ�����ɫѡ��Ȩ��input������id
 * @param color ��ʼ������ɫֵ
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
            //�����ǵ�ѡ������ɫѡ�����е���ɫ֮��ִ�еĲ���

            //�����id��ʾ������ɫѡ����Ӧ��id
            if (colorPickerId == "tpl-component-2016-01-09-list-listLink") {                //����������ɫ
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":link", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listVisited") {       //����߿���ɫ
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":visited", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listHover") {         //����������ɫ
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":hover", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listActive") {        //���龭����ɫ
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":active", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listBorderColor") {    //�б�߿���ɫ
                $.tplComponentListListSetting.setBorderColor(selectedElementInfo, ' .list-body ul li', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleBorderColor") {   //����߿���ɫ
                $.tplComponentListTitleSetting.setBorderColor(selectedElementInfo, ' .list h1', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleColor") {         //������ɫ
                $.tplComponentListTitleSetting.setColor(selectedElementInfo, ' .list h1 .title-content', color, '_titleColor');
            }else if (colorPickerId == "tpl-component-2016-01-09-list-titleHoverColor") {         //������ɫ
                $.tplComponentListTitleSetting.setHoverColor(selectedElementInfo, ' .list h1 .title-content', color, '_titleHoverColor');
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleRightHoverColor") {         //������ɫ
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
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleRightColor") {         //������ɫ
                $.tplComponentListTitleSetting.setColor(selectedElementInfo, ' .rightDiv a', color, '_titleRightColor');
            }

            $("#" + colorPickerId).val(color);
        },
        change: function (color) {
            //�����ǵ�ѡ������ɫѡ�����е���ɫ֮��ִ�еĲ���

            //�����id��ʾ������ɫѡ����Ӧ��id
            if (colorPickerId == "tpl-component-2016-01-09-list-listLink") {                //����������ɫ
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":link", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listVisited") {       //����߿���ɫ
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":visited", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listHover") {         //����������ɫ
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":hover", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listActive") {        //���龭����ɫ
                $.tplComponentListListSetting.setLinkStyle(selectedElementInfo, ' .list-body ul li a', ":active", color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-listBorderColor") {    //�б�߿���ɫ
                $.tplComponentListListSetting.setBorderColor(selectedElementInfo, ' .list-body ul li', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleBorderColor") {   //����߿���ɫ
                $.tplComponentListTitleSetting.setBorderColor(selectedElementInfo, ' .list h1', color);
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleColor") {         //������ɫ
                $.tplComponentListTitleSetting.setColor(selectedElementInfo, ' .list h1 .title-content', color, '_titleColor');
            }else if (colorPickerId == "tpl-component-2016-01-09-list-titleHoverColor") {         //������ɫ
                $.tplComponentListTitleSetting.setHoverColor(selectedElementInfo, ' .list h1 .title-content', color, '_titleHoverColor');
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleRightHoverColor") {         //������ɫ
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
            } else if (colorPickerId == "tpl-component-2016-01-09-list-titleRightColor") {         //������ɫ
                $.tplComponentListTitleSetting.setColor(selectedElementInfo, ' .rightDiv a', color, '_titleRightColor');
            }

            $("#" + colorPickerId).val(color);
        },
        palette: per //�����������ɫֵ
    });
}

/**
 * @author       :tuzuoquan
 * description   :վ����Ŀ��������ع���ʵ��,��Ҫ�����������js
 */
(function ($) {
    //վ����Ŀ�����ò��ֹ���ʵ��(�����ǻ������õķ���)
    $.tplComponentListSetting = {
        title: "",
        /**
         * 2���ж�һ���ַ��������Ƿ�Ϊ��
         * �����Ϊ�գ�����true
         * ���Ϊ��:����false
         */
        isNotBlank: function (variable) {
            return (variable !== null && typeof(variable) !== "undefined" && variable !== undefined && variable !== "") ? true : false;
        },
        /**
         * �洢���߳�ʼ���߿�Ŀ��
         */
        storeBaseListBorderWidth: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderWidth = $("." + id + "_listBaseBorderWidth").val();
            //��������
            $("#tpl-component-2016-01-09-listBorderWidth").val(borderWidth);
        },
        storeBaseTitleBorderWidth: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderWidth = $("." + id + "_titleBaseBorderWidth").val();
            //��������
            $("#tpl-component-2016-01-09-titleBorderWidth").val(borderWidth);
        },
        storeBaseTreeBorderWidth: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderWidth = $("." + id + "_treeBaseBorderWidth").val();
            //��������
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
                    html += '<span class="line-content">���г����սᾰ�������Ǽ�</span>';
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
         * �洢���߳�ʼ���߿����ɫ
         */
        storeBaseListBorderColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var listBorderColor = $.trim($("." + id + "_listBaseBorderColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-listBorderColor", listBorderColor);
        },
        storeBaseTitleBorderColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var titleBorderColor = $.trim($("." + id + "_titleBaseBorderColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-titleBorderColor", titleBorderColor);
        },
        storeBaseTreeBorderColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var treeBorderColor = $.trim($("." + id + "_treeBaseBorderColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-treeBorderColor", treeBorderColor);
        },
        /**
         * ���ñ߿����ɫ
         * selectedElementInfo        :��ʾ��ѡ�е�Ԫ��ֵ
         * childPathOfSelectedElement :��ʾ����
         */
        setBaseBorderColor: function (selectedElementInfo, childPathOfSelectedElement, color) {

            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-color");

                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + childPathOfSelectedElement + "{border-color:" + color + "}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;

                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                $("." + id + "_listBaseBorderColor").val(color);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * ���ñ߿�Ŀ�ȣ���ϸ��
         */
        setBorderWidth: function (selectedElementInfo, childPathOfSelectedElement, obj ,widthAddress , componentId,selectAddress) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var borderWidth = $.trim($(obj).val());
                if(borderWidth ==  ""){
                    borderWidth = "0px";
                }
                //��������С
                borderWidth = $.tplComponentListSetting.handleInputValue(obj, borderWidth);
                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-width");
                if (borderWidth) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-width:" + borderWidth + "}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + widthAddress).val(borderWidth);

                //$("#" + componentId +" div").addClass("active");
                //$("." + id + selectAddress).val("1_1_1_1");
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        setBorderRadius:function(selectedElementInfo, childPathOfSelectedElement, obj){
            //1�����id������ֵ
            var id = selectedElementInfo.get("id");
            //2�������д�������С��ֵ
            var borderRadius = $.trim($(obj).val());
            borderRadius = $.tplComponentListSetting.handleInputValue(obj, borderRadius);
            //�Ƴ�ԭ���������Сcss
            $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-radius");
            if (borderRadius) {
                var styleCss = $("#generatedCss").text();
                //4��������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + childPathOfSelectedElement + "{border-radius:" + borderRadius + " !important;}";
                //5���滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
            }
            $("." + id + "_titleBaseBorderRadius").val(borderRadius);
            /*��һ������һ��*/
            $.common.regain();
        },
        storeBorderRadius:function(){
            var id = selectedElementInfo.get("id");
            var borderRadius = $("." + id + "_titleBaseBorderRadius").val();
            $("#tpl-component-2016-01-09-titleBorderRadius").val(borderRadius);
        },
        //���ö��뷽ʽ
        setAlign: function (obj) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                $.common.removeGeneratedCss(id, "", "margin-left");
                $.common.removeGeneratedCss(id, "", "margin-right");
                var align = $(obj).attr('value');
                var bodyWidth = $("#" + id).parent().width();
                var componentWidth = $("#" + id).width();
                var marginLeft = bodyWidth - componentWidth;
                if (align === 'left') {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + "{margin-right: "+ marginLeft +"px}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("#tpl-component-2016-01-09-listMarginRight").val(marginLeft+"px");
                    $("." + id + "_listMarginRight").val(marginLeft+"px");
                    $("#tpl-component-2016-01-09-listMarginLeft").val("0 px");
                    $("." + id + "_listMarginLeft").val("0 px");
                } else if (align === 'center') {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + "{margin-left: auto}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    styleText = "#" + id + "{margin-right: auto}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("#tpl-component-2016-01-09-listMarginRight").val(marginLeft/2+"px");
                    $("#tpl-component-2016-01-09-listMarginLeft").val(marginLeft/2+"px");
                    $("." + id + "_listMarginRight").val(marginLeft/2+"px");
                    $("." + id + "_listMarginLeft").val(marginLeft/2+"px");
                } else if (align === 'right') {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + "{margin-left: "+ marginLeft +"px}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("#tpl-component-2016-01-09-listMarginLeft").val(marginLeft+"px");
                    $("." + id + "_listMarginLeft").val(marginLeft+"px");
                    $("#tpl-component-2016-01-09-listMarginRight").val("0 px");
                    $("." + id + "_listMarginRight").val("0 px");
                }

                $("." + id + "_align").val(align);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ��ˮƽλ��
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
        //�����ֲ���ֱ����
        setVerticalAlign: function (type) {
            try {
                var id = selectedElementInfo.get("id");
                $.common.removeGeneratedCss(id, "", "margin-top");
                var pHeight = $("#" + id).parent().height();
                var cHeight = $("#" + id).height();
                var height = pHeight - cHeight;

                if (type == "top") {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + "{margin-top: 0px}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = 0 + 'px';
                    $("#tpl-component-2016-01-09-listMarginTop").val(marginTop);
                    $("." + id + "_listMarginTop").val(marginTop);
                }
                else if (type == "middle") {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + "{margin-top: "+ height / 2 +"px}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = height / 2 + 'px';
                    $("#tpl-component-2016-01-09-listMarginTop").val(marginTop);
                    $("." + id + "_listMarginTop").val(marginTop);
                }
                else if (type == "bottom") {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + "{margin-top: "+ height +"px}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = height + 'px';
                    $("#tpl-component-2016-01-09-listMarginTop").val(marginTop);
                    $("." + id + "_marginTop").val(marginTop);
                }
                $('.' + id + '_verticalAlign').val(type);
                /*��һ������һ��*/
                $.common.regain();

            } catch (e) {
               
               
            }
        },
        /**
         * �洢���߳�ʼ��ˮƽλ��
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
         * ���ñ߿�ķ��
         */
        storeBaseListBorderStyle: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderStyle = $.trim($("." + id + "_listBaseBorderStyle").val());
            //�Ƴ����е�ѡ��״̬
            $("#tpl-component-2016-01-09-listBorderStyle li").removeClass("active");

            if ($.tplComponentListSetting.isNotBlank(borderStyle)) {
                //����ѡ��״̬
                $("#tpl-component-2016-01-09-listBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },
        storeBaseTreeBorderStyle: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderStyle = $.trim($("." + id + "_treeBaseBorderStyle").val());
            //�Ƴ����е�ѡ��״̬
            $("#tpl-component-2016-01-09-treeBorderStyle li").removeClass("active");

            if ($.tplComponentListSetting.isNotBlank(borderStyle)) {
                //����ѡ��״̬
                $("#tpl-component-2016-01-09-treeBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },
        storeBaseTitleBorderStyle: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderStyle = $.trim($("." + id + "_titleBaseBorderStyle").val());
            //�Ƴ����е�ѡ��״̬
            $("#tpl-component-2016-01-09-titleBorderStyle li").removeClass("active");

            if ($.tplComponentListSetting.isNotBlank(borderStyle)) {
                //����ѡ��״̬
                $("#tpl-component-2016-01-09-titleBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },
        /**
         * ���ñ߿�ķ��
         */
        setBorderStyle: function (selectedElementInfo, childPathOfSelectedElement, obj, storeAdress) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");

                //2�������д�������С��ֵ
                var borderStyle = $.trim($(obj).find("i").eq(0).attr("class"));
                //�����д�������ǿյģ�ֱ�ӷ���
                if (!$.tplComponentListSetting.isNotBlank(borderStyle)) return;

                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-style");
                if (borderStyle) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-style:" + borderStyle + " !important;}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }
                /*��һ������һ��*/
                $.common.regain();
                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + storeAdress).val(borderStyle);
            } catch (e) {
            }
        },
        /**
         * �洢�ͳ�ʼ����Щ���ⱻѡ����
         */
        storeBaseListBorderSelected: function () {
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderSelected = $.trim($("." + id + "_listBaseBorderSelected").val());
            var array = borderSelected.split("_");
            //alert(array.length);
            for (var index = 0; index < array.length; ++index) {

                //alert(index + " " + array[index]);
                //��ʾindex��ʾ�����û�б�ѡ�У�������"active״̬"
                if (array[index] == "0") {
                    $("#tpl-component-2016-01-09-listBorderSelected div").eq(index).removeClass("active");
                }
                //���ֵΪ"1",��ʾindex��ʾ�������ѡ���ˣ�����"active"״̬
                else {
                    $("#tpl-component-2016-01-09-listBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        storeBaseTitleBorderSelected: function () {
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderSelected = $.trim($("." + id + "_titleBaseBorderSelected").val());
            var array = borderSelected.split("_");
            var styleCss = $("#generatedCss").text();
            var styleText = '';
            //5���滻���������ƴ��
            //alert(array.length);
            for (var index = 0; index < array.length; ++index) {
                //alert(index + " " + array[index]);
                //��ʾindex��ʾ�����û�б�ѡ�У�������"active״̬"
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
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }
                //���ֵΪ"1",��ʾindex��ʾ�������ѡ���ˣ�����"active"״̬
                else {
                    $("#tpl-component-2016-01-09-titleBorderSelected div").eq(index).addClass("active");
                }
            }

        },
        storeBaseTreeBorderSelected: function () {
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderSelected = $.trim($("." + id + "_treeBaseBorderSelected").val());
            var array = borderSelected.split("_");
            //alert(array.length);
            for (var index = 0; index < array.length; ++index) {

                //alert(index + " " + array[index]);
                //��ʾindex��ʾ�����û�б�ѡ�У�������"active״̬"
                if (array[index] == "0") {
                    $("#tpl-component-2016-01-09-treeBorderSelected div").eq(index).removeClass("active");
                }
                //���ֵΪ"1",��ʾindex��ʾ�������ѡ���ˣ�����"active"״̬
                else {
                    $("#tpl-component-2016-01-09-treeBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        /**
         * ����ѡ�еı߿�
         */
        setBorderSelected: function (selectedElementInfo, childPathOfSelectedElement, obj ,selectAddress) {
            try {
                var cssType = "";

                //1�����id������ֵ
                var id = selectedElementInfo.get("id");

                //2�������д�������С��ֵ
                var index = parseInt($.trim($(obj).attr("index")));
                //��ʾ�����ϱ߿�
                if (index == 1) {
                    cssType = "border-top";
                }
                //��ʾ�����±߿�
                else if (index == 3) {
                    cssType = "border-bottom";
                }
                //��ʾ������߿�
                else if (index == 5) {
                    cssType = "border-left";
                }
                //��ʾ�����ұ߿�
                else if (index == 7) {
                    cssType = "border-right";
                }

                //����Ѿ��Ǳ�ѡ�У������ʱ���ʾ������û�б߿�
                if ($(obj).hasClass("active")) {
                    var styleCss = $("#generatedCss").text();
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":0px none !important;}";

                    //5���滻���������ƴ��
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
                //�����ʼû��ѡ��
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
                    /*��һ������һ��*/
                    $.common.regain();
                    $("." + id + selectAddress).val(newborderSelected);
                }
            } catch (e) {
            }
        },
        setBorderColor: function (selectedElementInfo, childPathOfSelectedElement, color) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "color");

                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + childPathOfSelectedElement + "{color:" + color + " !important;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;

                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                $("." + id + "_listBaseBorderColor").val(color);
                /*��һ������һ��*/
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
                //�Ƴ�ԭ�еı߿���ʽ
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + " .list-body .tpl-component-2016-01-09-list-li-title{width:68%;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .list-body .time-content{display:block;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);
                $("." + id + "_treeTime").val(val);
                /*��һ������һ��*/
                $.common.regain();
            });
            $("#hideTreeTime").click(function(){
                val = "hide";
                $.common.removeGeneratedCss(id, " .list-body .tpl-component-2016-01-09-list-li-title", "width");
                $.common.removeGeneratedCss(id, " .list-body .time-content", "display");
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + " .list-body .tpl-component-2016-01-09-list-li-title{width:100%;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .list-body .time-content{display:none;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);
                $("." + id + "_treeTime").val(val);
                /*��һ������һ��*/
                $.common.regain();
            });
        },
        /*
         * ����ʱ���Ƿ���ʾ����
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
                    /*��һ������һ��*/
                    if($('#'+id).children('.resize-cover').length===0)
                        $.common.regain();
                }

            } catch (e) {
            }
        },
        setHeaderMarginAndPadding: function (selectedElementInfo,
                                             childPathOfSelectedElement, cssType, classSuffix, obj) {

            //��õ�ǰ��ѡ�е�Ԫ�ص�id
            var id = selectedElementInfo.get("id");

            //��õ�ǰ��д�ĸ߶�ֵ
            var inputValue = $.trim($(obj).val());

            //�����Ŀ���Ϊ�գ�ֱ�ӷ���
            if (!this.isNotBlank(inputValue))
                return;
            inputValue = this.handleInputValue(obj, inputValue);

            //ɾ��֮ǰ���õĲ���ֵ
            $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
            //���ò���ֵ
            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + childPathOfSelectedElement + "{"
                + cssType + ":" + inputValue + " !important;}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;

            $("#generatedCss").text(styleCss);
            //����Ԫ�ص��ظ�����
            $("." + id + classSuffix).val(inputValue);
            /*��һ������һ��*/
            $.common.regain();
        },
        storeHeaderMarginAndPadding: function () {
            //��õ�ǰ��ѡ�е�Ԫ�ص�id

            var id = selectedElementInfo.get("id");

            //��ò������õ�margin-top
            var layoutMarginTop = $("." + id + "_headerMarginTop").val();
            $("#tpl-header-2016-01-26-headerMarginTop").val(layoutMarginTop);
            //��ò������õ�margin-bottom
            var layoutMarginBottom = $("." + id + "_headerMarginBottom").val();
            $("#tpl-header-2016-01-26-headerMarginBottom").val(layoutMarginBottom);

            //��ò������õ�margin-left
            var layoutMarginLeft = $("." + id + "_headerMarginLeft").val();
            $("#tpl-header-2016-01-26-headerMarginLeft").val(layoutMarginLeft);

            //��ò������õ�margin-right
            var layoutMarginRight = $("." + id + "_headerMarginRight").val();
            $("#tpl-header-2016-01-26-headerMarginRight").val(layoutMarginRight);

            //��ò������õ�padding-top
            var layoutPaddingTop = $("." + id + "_headerPaddingTop").val();
            $("#tpl-header-2016-01-26-headerPaddingTop").val(layoutPaddingTop);

            //��ò������õ�padding-bottom
            var layoutPaddingBottom = $("." + id + "_headerPaddingBottom").val();
            $("#tpl-header-2016-01-26-headerPaddingBottom").val(layoutPaddingBottom);

            //��ò������õ�padding-left
            var layoutPaddingLeft = $("." + id + "_headerPaddingLeft").val();
            $("#tpl-header-2016-01-26-headerPaddingLeft").val(layoutPaddingLeft);

            //��ò������õ�padding-right
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
            //��õ�ǰ��ѡ�е�Ԫ�ص�id
            var id = selectedElementInfo.get("id");

            //��õ�ǰ��д�ĸ߶�ֵ
            var inputValue = $.trim($(obj).val());
            var iconHeight = $("#" + id + " .rightDiv .next-icon").height();
            var topVal = inputValue - iconHeight;
            //�����Ŀ���Ϊ�գ�ֱ�ӷ���
            if (!this.isNotBlank(inputValue))
                return;
            minHeightText = this.handleInputValue(obj, inputValue);
            topVal = topVal + 'px';
            //��ñ߿��Ĭ�ϼ��
            var minHeight = parseInt(minHeightText.substring(0, minHeightText
                .indexOf("px")));

            //ɾ��ԭ�����õĲ��ֵĸ߶�
            $.common.removeGeneratedCss(id, childPathOfSelectedElement, "height");
            $.common.removeGeneratedCss(id, " .leftDiv .title-content", "height");
            $.common.removeGeneratedCss(id, " .leftDiv .title-content", "line-height");
            $.common.removeGeneratedCss(id, " .rightDiv .title-more", "height");
            $.common.removeGeneratedCss(id, " .rightDiv .title-more", "line-height");
            $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "top");
            //�����������С�߶�
            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + childPathOfSelectedElement
                + "{height:" + minHeightText + "}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .leftDiv .title-content"
                + "{height:" + minHeightText + "}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .leftDiv .title-content"
                + "{line-height:" + minHeightText + "}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .title-more"
                + "{height:" + minHeightText + "}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .title-more"
                + "{line-height:" + minHeightText + "}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .next-icon"
                + "{top:" + topVal + "}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
           /* //������ڲ���column��margin-top��ֵ
            var columnMarginTopText = $("#" + id).css("margin-top");
            var columnMarginTopValue = parseInt(columnMarginTopText.substring(
                0, columnMarginTopText.indexOf("px")));

            //������ڲ���column��margin-bottom��ֵ
            var columnMarginBottomText = $("#" + id).css("margin-top");
            var columnMarginBottomValue = parseInt(columnMarginBottomText.substring(0, columnMarginBottomText.indexOf("px")));

            //�����е���С�߶�
            //ɾ��֮ǰ���õ��е���С�߶�
            $.common.removeGeneratedCss(id, "", "height");
            var columnMinHeight = minHeight + columnMarginTopValue
                + columnMarginBottomValue;
            var styleText = "#" + id + " h1{height:" + columnMinHeight
                + "px;}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;*/

            $("#generatedCss").text(styleCss);


            //����Ԫ�ص��ظ�����
            $("." + id + "_headerHeight").val(minHeightText);
            /*��һ������һ��*/
            $.common.regain();

        },
        storeHeaderHeight: function () {
            //��õ�ǰ��ѡ�е�Ԫ�ص�id
            var id = selectedElementInfo.get("id");

            //��ȡ�洢����С�߶ȵ�ֵ
            var layoutMinHeight = $("." + id + "_headerHeight").val();
            //��ֵ���õ��Ҳ�����������
            $("#tpl-header-2016-01-30-headerHeight").val(layoutMinHeight);
        },
        //��ʾ�����ظ���ͼ��
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
                /*��һ������һ��*/
                $.common.regain();
            });
            $("#moreHide").click(function () {
                val = "hide";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                var arr = html.split("<");
                $("#" + id + " .rightDiv a").html("<"+arr[1]);
                $("#labelMore").css("opacity",0);
                $("." + id + "_rightShowOrHide").val(val);
                /*��һ������һ��*/
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
        //��ʾ������ǰ��ͼ��
        setLeftIconShowStyle: function () {
            var id = selectedElementInfo.get("id");
            var val = "";
            $("#leftIconShow").click(function () {
                val = "show";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $("#" + id + " .title-icon").css("display","inline-block");
                $("." + id + "_leftShowOrHide").val(val);
                /*��һ������һ��*/
                $.common.regain();
            });
            $("#leftIconHide").click(function () {
                val = "hide";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $("#" + id + " .title-icon").hide();
                $("." + id + "_leftShowOrHide").val(val);
                /*��һ������һ��*/
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
        //��ʾ�������б�ͼ��
        setListIconShowStyle: function () {
            var id = selectedElementInfo.get("id");
            var val = "";
            $("#listShow").click(function () {
                val = "show";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $.common.removeGeneratedCss(id, " .line-content", "display");
                $.common.removeGeneratedCss(id, " b.line-content1", "padding-left");
                //�����������С�߶�
                var styleCss = $("#generatedCss").text();
                //������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + " b.line-content1{display:block}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .line-content{padding-left:15px}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                $("." + id + "_listShowOrHide").val(val);
                /*��һ������һ��*/
                $.common.regain();
            });
            $("#listHide").click(function () {
                val = "hide";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $.common.removeGeneratedCss(id, " .line-content", "display");
                $.common.removeGeneratedCss(id, " b.line-content1", "padding-left");
                //�����������С�߶�
                var styleCss = $("#generatedCss").text();
                //������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + " b.line-content1{display:none}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " b.line-content{padding-left:0px}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                $("." + id + "_listShowOrHide").val(val);
                /*��һ������һ��*/
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
        //����������ת��ʽ
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
        // ������ť��Ч
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
            //�����������С�߶�
            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + " .list h1 .leftDiv a.title-content{left:"+value+"}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + '_titleRightDistance').val(value);
            /*��һ������һ��*/
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
                //�����������С�߶�
                var styleCss = $("#generatedCss").text();
                //������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + " .list h1 .rightDiv a{right:"+value+"}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                /*��һ������һ��*/
                $.common.regain();
            }else{
                $.common.removeGeneratedCss(id, " .list h1 .rightDiv a .next-icon", "margin-left");
                //�����������С�߶�
                var styleCss = $("#generatedCss").text();
                //������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + " .list h1 .rightDiv a{margin-left:"+value+"}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                /*��һ������һ��*/
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
            //�����������С�߶�
            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + " .line-content{left:"+value+"}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            /*��һ������һ��*/
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
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                //ƴ�Ӷ��뷽ʽcss��ʽ
                var styleText ="#" + id + " h1{display:block}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);
            } else {
                //$("#" + id + " h1").hide();
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                //ƴ�Ӷ��뷽ʽcss��ʽ
                var styleText ="#" + id + " h1{display:none}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);
            }
            $("." + id + "_titleShowOrHide").val(value);
            /*��һ������һ��*/
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
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                //ƴ�Ӷ��뷽ʽcss��ʽ
                var styleText ="#" + id + " h1 .title-content{display:inline-block}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);
            } else {
                //$("#" + id + " h1 .title-content").hide();
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                //ƴ�Ӷ��뷽ʽcss��ʽ
                var styleText ="#" + id + " h1 .title-content{display:none}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);
            }
            $("." + id + "_titleNameShowOrHide").val(value);
            /*��һ������һ��*/
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
         * ��str1���ԭʼ���ַ����е�str2ȫ������str3
         * str1      :��ԭʼ���ַ���
         * str2      :Ҫ���滻���ַ���
         * str3      :�����滻�ɵ��ַ���
         *
         * �����������String�����ԭ�ͷ�����
         * String.prototype.replaceAll = function(str2,str3){
		 *     return this.replace(new RegExp(str2,"gm"),str3);
		 * }
         */
        replaceAll: function (str1, str2, str3) {
            var newStr = str1;
            if ($.tplComponentListSetting.isNotBlank(str1)) {
                //����gm�е�g��ʾ"ִ��ȫ��ƥ��(��������ƥ��������ҵ���һ��ƥ���ֹͣ)"
                //����gm�е�m��ʾִ�ж���ƥ��
                newStr = str1.replace(new RegExp(str2, "gm"), str3);
            }
            return newStr;
        },

        clearBgImage: function () {
            var id = selectedElementInfo.get("id");	//���id������ֵ
            $.common.removeGeneratedCss(id, "", "background-image");//�Ƴ�ԭ���ı���ͼƬ
            $("#treeTitlePath").css("background","url(../images/index.png) 0 0 repeat");
            $("#treeTitleBgImg").show();
            $("#blockPicture").hide();
            $("." + id + "_h1BgPicDate").val('');
            $("." + id + "_titleBackgroundAbsoluteImg").val('');
            $("." + id + "_titleBackgroundRelativeImg").val('');
            /*��һ������һ��*/
            $.common.regain();
        },
        clearH1TitleBgImage: function () {
            var id = selectedElementInfo.get("id");	//���id������ֵ
            $.common.removeGeneratedCss(id, " h1", "background-image");//�Ƴ�ԭ���ı���ͼƬ
            $("#treeH1TitlePath").css("background","url(../images/index.png) 0 0 repeat");
            $("#treeH1TitleBgImg").show();
            $("#blockH1Picture").hide();
            $.common.removeGeneratedCss(id,  " .title-content", "border");
            var styleCss = $("#generatedCss").text();
            var styleText = "#" + id + " .title-content{ border-bottom: 2px solid rgb(0, 159, 135);}";
            //�滻���������ƴ��

            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);
            $("." + id + "_h1TitleBgPicDate").val('');
            $("." + id + "_h1TitleBackgroundAbsoluteImg").val('');
            $("." + id + "_h1TitleBackgroundRelativeImg").val('');
            /*��һ������һ��*/
            $.common.regain();
        },
        clearListBgImage: function () {
            var id = selectedElementInfo.get("id");	//���id������ֵ
            $.common.removeGeneratedCss(id, " .list-body", "background-image");//�Ƴ�ԭ���ı���ͼƬ
            $("#treeListPath").css("background","url(../images/index.png) 0 0 repeat");
            $("#treeListBgImg").show();
            $("#blockListPicture").hide();
            $("." + id + "_listBgPicDate").val('');
            $("." + id + "_listBackgroundAbsoluteImg").val('');
            $("." + id + "_listBackgroundRelativeImg").val('');
            /*��һ������һ��*/
            $.common.regain();
        },
        /**
         * ��������ֵ�����ַ�ʽ�����������������У�px,em,%��"���"�����
         */
        handleInputValue:function(obj,size){
            //�Ȼ�õ�λ
            var unit = $(obj).attr("unit");
            //�жϻ�ȡ����ֵ���Ƿ��������λ������в�����ӣ����û��ֱ����ӵ�λ
            if(size.indexOf(unit) === -1) {
                size = size + unit;
            }else{
                size = size;
            }

            //ȥ��size����ֵ�͵�λ�Ŀո�,�������˼�ǽ�size�е�����" "����""
            return $.tplComponentListSetting.replaceAll(size," ","");
        },
        setWidth: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var width = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if (! $.tplComponentListSetting.isNotBlank(width)) return;
                //��������С

                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "width");
                if (width) {
                    width = width.replace(/\s+/g,"");
                    if(width.indexOf("px")==-1){
                        width = width + "px";
                    }
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{width:" + width + "}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }
                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + "_width").val(width);
                /*��һ������һ��*/
                if($('#'+id).children('.resize-cover').length===0)
                    $.common.regain();
            } catch (e) {


            }
        },
        storeAndInitWidth: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ�Ŀ��
            var width = $("." + id + "_width").val();

            //���ÿ��
            $("#width").val(width);
        },
        /**
         * �ı�ʱ�����ʾ״̬
         */
        initTime: function () {
                //1�����id������ֵ
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
         * �洢�ͳ�ʼ��margin��padding
         */
        storeAndInitMarginAndPadding: function () {
            //��õ�ǰ��ѡ�е�Ԫ�ص�id
            var id = selectedElementInfo.get("id");
            //�����Ŀ���õ�margin-top
            var listMarginTop = $("." + id + "_listMarginTop").val();
            $("#tpl-component-2016-01-09-listMarginTop").val(listMarginTop);
            //�����Ŀ���õ�margin-bottom
            var listMarginBottom = $("." + id + "_listMarginBottom").val();
            $("#tpl-component-2016-01-09-listMarginBottom").val(listMarginBottom);
            //�����Ŀ���õ�margin-top
            var listMarginLeft = $("." + id + "_listMarginLeft").val();
            $("#tpl-component-2016-01-09-listMarginLeft").val(listMarginLeft);
            //�����Ŀ���õ�margin-bottom
            var listMarginRight = $("." + id + "_listMarginRight").val();
            $("#tpl-component-2016-01-09-listMarginRight").val(listMarginRight);
            //�����Ŀ���õ�padding-top
            var listPaddingTop = $("." + id + "_listPaddingTop").val();
            $("#tpl-component-2016-01-09-listPaddingTop").val(listPaddingTop);
            //���������Ŀ���õ�padding-bottom
            var listPaddingBottom = $("." + id + "_listPaddingBottom").val();
            $("#tpl-component-2016-01-09-listPaddingBottom").val(listPaddingBottom);
            //���������Ŀ���õ�padding-left
            var listPaddingLeft = $("." + id + "_listPaddingLeft").val();
            $("#tpl-component-2016-01-09-listPaddingLeft").val(listPaddingLeft);
            //���������Ŀ���õ�padding-right
            var listPaddingRight = $("." + id + "_listPaddingRight").val();
            $("#tpl-component-2016-01-09-listPaddingRight").val(listPaddingRight);
            //��ñ������õ�padding-left
            var titlePaddingLeft = $("." + id + "_titlePaddingLeft").val();
            $("#tpl-component-2016-01-09-titlePaddingLeft").val(titlePaddingLeft);
            //��ñ������õ�padding-right
            var titlePaddingRight = $("." + id + "_titlePaddingRight").val();
            $("#tpl-component-2016-01-09-titlePaddingRight").val(titlePaddingRight);
            var titlePaddingTop = $("." + id + "_titlePaddingTop").val();
            $("#tpl-component-2016-01-09-titlePaddingTop").val(titlePaddingTop);
            var titlePaddingBottom = $("." + id + "_titlePaddingBottom").val();
            $("#tpl-component-2016-01-09-titlePaddingBottom").val(titlePaddingBottom);
        },
        /**
         * selectedElementInfo        :��ʾ���Ǳ�ѡ�е�Ԫ��
         * childPathOfSelectedElement :��ʾ���Ǳ�ѡ�е�Ԫ�صĺ��
         * cssType                    :��ʾ����cssType,��ֵ������margin-top,margin-right,margin-bottom,margin-left
         * classSuffix                :��ʾ�����������class����ֵ�ĺ�׺��������ֵ�Ǵ洢�߾�ֵ������
         * obj                        :��ʾ���ǵ�ǰ�����
         *
         * ���÷�ʽ����:
         * .setMarginAndPadding(selectedElementInfo,' .column','margin-top','_listMarginTop',this);"
         */
        setMarginAndPadding: function (selectedElementInfo, childPathOfSelectedElement, cssType, classSuffix, obj) {
            //��õ�ǰ��ѡ�е�Ԫ�ص�id
            var id = selectedElementInfo.get("id");
            //��õ�ǰ��д�ĸ߶�ֵ
            var inputValue = $.trim($(obj).val());
            //�����Ŀ���Ϊ�գ�ֱ�ӷ���
            if (!this.isNotBlank(inputValue)) return;
            inputValue = inputValue.replace(/\s+/g,"");
            if(inputValue.indexOf("px")==-1){
                inputValue = inputValue + "px";
            }
            //ɾ��֮ǰ���õĲ���ֵ
            $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
            if(cssType == 'margin-left' || cssType == 'margin-right'){
                $("." + id + "_align").val("");
                $("#tpl-sidebar-2016-10-8-align div").removeClass("active");
            }else if(cssType == 'margin-top' || cssType == 'margin-bottom'){
                $("." + id + "_verticalAlign").val("");
                $("#tpl-sidebar-2016-10-8-verticalAlign div").removeClass("active");
            }
            //���ò���ֵ
            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":" + inputValue + "}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            //����Ԫ�ص��ظ�����
            $("." + id + classSuffix).val(inputValue);
            /*��һ������һ��*/
            $.common.regain();
        },

    };
    /**
     * ����߼�����
     */
    $.tplComponentListTitleSetting = {
        storeTitlePic: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ñ���ͼƬ
            var bgPic = $("." + id + "_titleBackgroundAbsoluteImg").val();
            $("#blockPicture").show();
            if(bgPic != ""){
            	$("#treeTitlePath").css("background", "url("+bgPic+") center center no-repeat");
            	 var img = $("#treeTitlePath");
 				var hWidth = 170;
 				var hHeight = 94;
 				$("<img/>").attr("src", bgPic).load(function() {
 				        //ͼƬ����ʵ���
 				        var _width = this.width;
 				        var _height = this.height;
 						//ͼƬ�����Ŀ��
 						var width = hWidth;
 						var height = hHeight;
 						//ͼƬҳ���еĿ��
 						var iwidth = img.width();
 						var iheight = img.height();
 						//ͼƬ��ʵ��ȴ���ͼƬ�������
 						if(_width>width){
 							//ͼƬ���Ϊ�������
 							iwidth = width;
 							//ͼƬ�߶� Ϊ��Ӧ������ֵ
 							iheight = Math.floor(_height*width/_width);
 						}else{
 							//ͼƬ��ʵ��Ƚ�С
 							//ͼƬ���Ϊ��ʵ���
 							iwidth = _width;
 							//ͼƬ�߶�Ϊ��ʵ�߶�
 							iheight = _height;
 						}
 					img.css('background-size',iwidth+'px '+iheight+'px');	
 				});
                 $("#treeTitleBgImg").hide();
            }        
            //$("#uploadBlockPic").parent().parent().css({'background-image':'url('+bgPic+')','background-size':'170px 94px'});
        },
        storeTitleLeftPic: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ñ���ͼƬ
            var bgPic = $("." + id + "_titleLeftBackgroundAbsoluteImg").val();
            $("#blockLeftPicture").show();
            if(bgPic != ""){
            	$("#treeTitleLeftPath").css("background", "url("+bgPic+") center center no-repeat");
            	 var img = $("#treeTitleLeftPath");
 				var hWidth = 170;
 				var hHeight = 94;
 				$("<img/>").attr("src", bgPic).load(function() {
 				        //ͼƬ����ʵ���
 				        var _width = this.width;
 				        var _height = this.height;
 						//ͼƬ�����Ŀ��
 						var width = hWidth;
 						var height = hHeight;
 						//ͼƬҳ���еĿ��
 						var iwidth = img.width();
 						var iheight = img.height();
 						//ͼƬ��ʵ��ȴ���ͼƬ�������
 						if(_width>width){
 							//ͼƬ���Ϊ�������
 							iwidth = width;
 							//ͼƬ�߶� Ϊ��Ӧ������ֵ
 							iheight = Math.floor(_height*width/_width);
 						}else{
 							//ͼƬ��ʵ��Ƚ�С
 							//ͼƬ���Ϊ��ʵ���
 							iwidth = _width;
 							//ͼƬ�߶�Ϊ��ʵ�߶�
 							iheight = _height;
 						}
 					img.css('background-size',iwidth+'px '+iheight+'px');	
 				});
                 $("#treeTitleLeftBgImg").hide();
            }   
            //$("#uploadBlockPic").parent().parent().css({'background-image':'url('+bgPic+')','background-size':'170px 94px'});
        },
        storeTitleRightPic: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ñ���ͼƬ
            var bgPic = $("." + id + "_titleRightBackgroundAbsoluteImg").val();
            $("#blockRightPicture").show();
            if(bgPic != ""){
            	$("#treeTitleRightPath").css("background", "url("+bgPic+") center center no-repeat");
            	 var img = $("#treeTitleRightPath");
 				var hWidth = 170;
 				var hHeight = 94;
 				$("<img/>").attr("src", bgPic).load(function() {
 				        //ͼƬ����ʵ���
 				        var _width = this.width;
 				        var _height = this.height;
 						//ͼƬ�����Ŀ��
 						var width = hWidth;
 						var height = hHeight;
 						//ͼƬҳ���еĿ��
 						var iwidth = img.width();
 						var iheight = img.height();
 						//ͼƬ��ʵ��ȴ���ͼƬ�������
 						if(_width>width){
 							//ͼƬ���Ϊ�������
 							iwidth = width;
 							//ͼƬ�߶� Ϊ��Ӧ������ֵ
 							iheight = Math.floor(_height*width/_width);
 						}else{
 							//ͼƬ��ʵ��Ƚ�С
 							//ͼƬ���Ϊ��ʵ���
 							iwidth = _width;
 							//ͼƬ�߶�Ϊ��ʵ�߶�
 							iheight = _height;
 						}
 					img.css('background-size',iwidth+'px '+iheight+'px');	
 				});
                 $("#treeTitleRightBgImg").hide();
            }   
        },
        storeH1TitlePic: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ñ���ͼƬ
            var bgPic = $("." + id + "_h1TitleBackgroundAbsoluteImg").val();
            $("#blockH1Picture").show();
            if(bgPic != ""){
                $("#treeH1TitlePath").css("background", "url("+bgPic+") center center no-repeat");
                var img = $("#treeH1TitlePath");
                var hWidth = 170;
                var hHeight = 94;
                $("<img/>").attr("src", bgPic).load(function() {
                    //ͼƬ����ʵ���
                    var _width = this.width;
                    var _height = this.height;
                    //ͼƬ�����Ŀ��
                    var width = hWidth;
                    var height = hHeight;
                    //ͼƬҳ���еĿ��
                    var iwidth = img.width();
                    var iheight = img.height();
                    //ͼƬ��ʵ��ȴ���ͼƬ�������
                    if(_width>width){
                        //ͼƬ���Ϊ�������
                        iwidth = width;
                        //ͼƬ�߶� Ϊ��Ӧ������ֵ
                        iheight = Math.floor(_height*width/_width);
                    }else{
                        //ͼƬ��ʵ��Ƚ�С
                        //ͼƬ���Ϊ��ʵ���
                        iwidth = _width;
                        //ͼƬ�߶�Ϊ��ʵ�߶�
                        iheight = _height;
                    }
                    img.css('background-size',iwidth+'px '+iheight+'px');
                });
                $("#treeH1TitleBgImg").hide();
            }
            //$("#uploadBlockPic").parent().parent().css({'background-image':'url('+bgPic+')','background-size':'170px 94px'});
        },
        storeListPic: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ñ���ͼƬ
            var bgPic = $("." + id + "_listBackgroundAbsoluteImg").val();
            $("#blockListPicture").show();
            if(bgPic != ""){
            	$("#treeListPath").css("background", "url("+bgPic+") center center no-repeat");
            	 var img = $("#treeListPath");
 				var hWidth = 170;
 				var hHeight = 94;
 				$("<img/>").attr("src", bgPic).load(function() {
 				        //ͼƬ����ʵ���
 				        var _width = this.width;
 				        var _height = this.height;
 						//ͼƬ�����Ŀ��
 						var width = hWidth;
 						var height = hHeight;
 						//ͼƬҳ���еĿ��
 						var iwidth = img.width();
 						var iheight = img.height();

 						//ͼƬ��ʵ��ȴ���ͼƬ�������
 						if(_width>width){
 							//ͼƬ���Ϊ�������
 							iwidth = width;
 							//ͼƬ�߶� Ϊ��Ӧ������ֵ
 							iheight = Math.floor(_height*width/_width);
 						}else{
 							//ͼƬ��ʵ��Ƚ�С
 							//ͼƬ���Ϊ��ʵ���
 							iwidth = _width;
 							//ͼƬ�߶�Ϊ��ʵ�߶�
 							iheight = _height;
 						}
 					img.css('background-size',iwidth+'px '+iheight+'px');
 				});
                 $("#treeListBgImg").hide();
            }   
        },
        storeAndInitListTitleFontFamily: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var fontFamily = $("." + id + "_titleFontFamily").val();
            //��������
            $("#tpl-component-2016-01-09-list-title-font-Family-Val").text(fontFamily);
        },
        storeAndInitListRightTitleFontFamily: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var fontFamily = $("." + id + "_titleRightFontFamily").val();
            //��������
            $("#tpl-component-2016-01-09-list-title-rightFont-Family-Val").text(fontFamily);
        },
        /**
         * �������ֵ�����
         */
        setFontFamily: function () {
            //1�������������
            var fontFamily = $.trim($("#tpl-component-2016-01-09-list-title-font-Family-Val").text());
            //���ѡ�������ѡ��ֱ�ӷ���
            if (fontFamily == "��ѡ��") return;
            //2�����id������ֵ
            var id = selectedElementInfo.get("id");
            //3���Ƴ���ǰ���õ�����
            $.common.removeGeneratedCss(id, " .title-content", "font-family");
            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + " .title-content{font-family:" + fontFamily + " !important;}";
            //������������
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + "_titleFontFamily").val(fontFamily);
            /*��һ������һ��*/
            $.common.regain();
        },
        setRightFontFamily: function () {
            //1�������������
            var fontFamily = $.trim($("#tpl-component-2016-01-09-list-title-rightFont-Family-Val").text());
            //���ѡ�������ѡ��ֱ�ӷ���
            if (fontFamily == "��ѡ��") return;
            //2�����id������ֵ
            var id = selectedElementInfo.get("id");
            //3���Ƴ���ǰ���õ�����
            $.common.removeGeneratedCss(id, " .rightDiv a", "font-family");
            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + "  .rightDiv a{font-family:" + fontFamily + " !important;}";
            //������������
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + "_titleRightFontFamily").val(fontFamily);
            /*��һ������һ��*/
            $.common.regain();
        },
        /**
         * ѡ�������ʱ�򴥷��������
         */
        selectTitleFontFamily: function () {
            $("#tpl-component-2016-01-09-list-title-font-Family-Val").bind("setFontFamily", function () {
                $.tplComponentListTitleSetting.setFontFamily();
            });
            $("#tpl-component-2016-01-09-list-title-font-Family li").click(function (event) {
                //ʹ��triggerHandler�ĺô��Ǵ˺������ᴥ��Ĭ�ϵĺ���������ð��
                $("#tpl-component-2016-01-09-list-title-font-Family-Val").triggerHandler("setFontFamily", []);
            });
        },
        selectRightTitleFontFamily: function () {
            $("#tpl-component-2016-01-09-list-title-rightFont-Family-Val").bind("setRightFontFamily", function () {
                $.tplComponentListTitleSetting.setRightFontFamily();
            });
            $("#tpl-component-2016-01-09-list-title-rightFont-Family li").click(function (event) {
                //ʹ��triggerHandler�ĺô��Ǵ˺������ᴥ��Ĭ�ϵĺ���������ð��
                $("#tpl-component-2016-01-09-list-title-rightFont-Family-Val").triggerHandler("setRightFontFamily", []);
            });
        },
        /**
         * �洢���߳�ʼ�����������С
         */
        storeAndInitTitleFontSize: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var fontSize = $("." + id + "_titleFontSize").val();
            //��������
            $("#tpl-component-2016-01-09-list-titleFontSize").val(fontSize);
        },
        storeAndInitRightTitleFontSize: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var fontSize = $("." + id + "_titleRightFontSize").val();
            //��������
            $("#tpl-component-2016-01-09-list-titleRightFontSize").val(fontSize);
        },
        /**
         * ���ñ�������ִ�С
         */
        setFontSize: function (selectedElementInfo, childPathOfSelectedElement, obj, storeFontSize) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var fontSize = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if (!$.tplComponentListSetting.isNotBlank(fontSize)) return;
                //��������С
                fontSize = $.tplComponentListSetting.handleInputValue(obj, fontSize);

                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "font-size");
                if (fontSize) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{font-size:" + fontSize + " !important;}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + storeFontSize).val(fontSize);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ�����������и�
         */
        storeAndInitTitleLineHeight: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var lineHeight = $("." + id + "_titleLineHeight").val();

            //��������
            $("#tpl-component-2016-01-09-list-titleLineHeight").val(lineHeight);
        },
        storeAndInitRightTitleLineHeight: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var lineHeight = $("." + id + "_titleRightLineHeight").val();

            //��������
            $("#tpl-component-2016-01-09-list-titleRightLineHeight").val(lineHeight);

        },
        /**
         * ���ñ���������и�
         */
        setLineHeight: function (selectedElementInfo, childPathOfSelectedElement, obj, storeLineHeight) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var lineHeight = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if (!$.tplComponentListSetting.isNotBlank(lineHeight)) return;
                //��������С
                lineHeight = $.tplComponentListSetting.handleInputValue(obj, lineHeight);
                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "line-height");
                if (lineHeight) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{line-height:" + lineHeight + " !important;}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + storeLineHeight).val(lineHeight);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ���߿����ɫ
         */
        storeAndInitTitleColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var titleColor = $.trim($("." + id + "_titleColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-titleColor", titleColor);
        },
        storeAndInitRightTitleColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var titleColor = $.trim($("." + id + "_titleRightColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-titleRightColor", titleColor);
        },
        storeAndInitTitleHoverColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var titleColor = $.trim($("." + id + "_titleHoverColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-titleHoverColor", titleColor);
        },
        storeAndInitTitleRightHoverColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var titleColor = $.trim($("." + id + "_titleRightHoverColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-titleRightHoverColor", titleColor);
        },
        /**
         * ���ñ�����������ɫ
         * selectedElementInfo        :��ʾ��ѡ�е�Ԫ��ֵ
         * childPathOfSelectedElement :��ʾ����
         */
        setColor: function (selectedElementInfo, childPathOfSelectedElement, color, storeColor) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "color");
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + childPathOfSelectedElement + "{color:" + color + "}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                $("." + id + storeColor).val(color);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        setHoverColor: function (selectedElementInfo, childPathOfSelectedElement, color, storeColor) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + childPathOfSelectedElement + ":hover{color:" + color + "}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                $("." + id + storeColor).val(color);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        setListHoverColor: function (selectedElementInfo, color, storeColor) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + " a.tpl-component-2016-01-09-list-li-title:hover span.line-content{color:" + color + "}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                $("." + id + storeColor).val(color);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ�����������и�
         */
        storeAndInitTitleTextAlign: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
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
         * ���ñ���������и�
         * value   :��ʾ����ֵ�����Դ��ݵ���"left","center","right"
         */
        setTextAlign: function (selectedElementInfo, childPathOfSelectedElement, value, storeTextAlign) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //�����д�������ǿյģ�ֱ�ӷ���
                if (!$.tplComponentListSetting.isNotBlank(value)) return;
                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "text-align");
                if (value) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{text-align:" + value + " !important;}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }
                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + storeTextAlign).val(value);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ�����������и�
         */
        storeAndInitTitleFontStyle: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            $("#tpl-component-2016-01-09-list-titleFontStyle div").removeClass("active");
            //��������Ƿ�Ӵֵı��
            var titleFontWeightFlag = $.trim($("." + id + "_titleFontWeight").val());
            //����Ϊ�մ���ʱ��ִ��
            if (titleFontWeightFlag != "") {
                $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(parseInt(titleFontWeightFlag)).addClass("active");
            }
            //���������ı��
            var titleFontStyleFlag = $.trim($("." + id + "_titleFontStyle").val());
            if (titleFontStyleFlag != "") {
                $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(parseInt(titleFontStyleFlag)).addClass("active");
            }
            //����������εı��
            var titleTextDecorationFlag = $.trim($("." + id + "_titleTextDecoration").val());
            if (titleTextDecorationFlag != "") {
                $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(parseInt(titleTextDecorationFlag)).addClass("active");
            }
        },
        /**
         * ����ѡ�е�Ԫ��������ʽ
         * selectedElementInfo :��ʾ����ѡ�е�Ԫ�ص���Ϣ
         * childPathOfSelectedElement:��ʾѡ�е�·��
         * key:��ʾ����ѡ�еı߿���ʾֵ 1�Ӵ֣�2����б��3�»��ߣ�4ɾ���ߣ�
         * type:��ʾ����Ҫ�洢������������
         * obj:this����
         */
        setHoverFontStyle: function (selectedElementInfo, childPathOfSelectedElement, key, type, obj) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                var cssType = "";
                var fontCss = "";
                if (key == "0") {
                    //�Ӵ�
                    cssType = "font-weight";
                    fontCss = "font-weight: bold;";
                } else if (key == "1") {
                    //��б
                    cssType = "font-style";
                    fontCss = "font-style: italic;";
                } else if (key == "2") {
                    //�»���
                    cssType = "text-decoration";
                    fontCss = "text-decoration: underline;";

                    $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(3).removeClass("active");
                } else if (key == "3") {
                    //ɾ����
                    cssType = "text-decoration";
                    fontCss = "text-decoration: line-through;";

                    $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(2).removeClass("active");
                }
                //�Ƴ�ԭ�еı߿���ʽ
                if ($(obj).hasClass("active")) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement+":hover", cssType);
                    $("." + id + type).val("");
                    return;
                }
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                //ƴ�Ӷ��뷽ʽcss��ʽ
                var styleText = "#" + id + childPathOfSelectedElement + ":hover{" + fontCss + "}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + type).val(key);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        setFontStyle: function (selectedElementInfo, childPathOfSelectedElement, key, type, obj) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                var cssType = "";
                var fontCss = "";
                if (key == "0") {
                    //�Ӵ�
                    cssType = "font-weight";
                    fontCss = "font-weight: bold;";
                } else if (key == "1") {
                    //��б
                    cssType = "font-style";
                    fontCss = "font-style: italic;";
                } else if (key == "2") {
                    //�»���
                    cssType = "text-decoration";
                    fontCss = "text-decoration: underline;";

                    $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(3).removeClass("active");
                } else if (key == "3") {
                    //ɾ����
                    cssType = "text-decoration";
                    fontCss = "text-decoration: line-through;";

                    $("#tpl-component-2016-01-09-list-titleFontStyle div").eq(2).removeClass("active");
                }
                //�Ƴ�ԭ�еı߿���ʽ
                if ($(obj).hasClass("active")) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
                    $("." + id + type).val("");
                    return;
                }
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                //ƴ�Ӷ��뷽ʽcss��ʽ
                var styleText = "#" + id + childPathOfSelectedElement + "{" + fontCss + "}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + type).val(key);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ���߿�Ŀ��
         */
        storeAndInitTitleBorderWidth: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderWidth = $("." + id + "_titleBorderWidth").val();
            //��������
            $("#tpl-component-2016-01-09-list-titleBorderWidth").val(borderWidth);
        },
        /**
         * �洢���߳�ʼ���߿����ɫ
         */
        storeAndInitTitleBorderColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var listBorderColor = $.trim($("." + id + "_titleBorderColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-titleBorderColor", listBorderColor);
        },
        /**
         * ���ñ߿����ɫ
         * selectedElementInfo        :��ʾ��ѡ�е�Ԫ��ֵ
         * childPathOfSelectedElement :��ʾ����
         */
        setBorderColor: function (selectedElementInfo, childPathOfSelectedElement, color) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-color");

                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + childPathOfSelectedElement + "{border-color:" + color + " !important;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;

                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                $("." + id + "_titleBorderColor").val(color);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * ���ñ߿�Ŀ�ȣ���ϸ��
         */
        setBorderWidth: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var borderWidth = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if (!$.tplComponentListSetting.isNotBlank(borderWidth)) return;
                //��������С
                borderWidth = $.tplComponentListSetting.handleInputValue(obj, borderWidth);

                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-width");
                if (borderWidth) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-width:" + borderWidth + "}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + "_titleBorderWidth").val(borderWidth);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * ���ñ߿�ķ��
         */
        storeAndInitTitleBorderStyle: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderStyle = $.trim($("." + id + "_titleBorderStyle").val());
            //�Ƴ����е�ѡ��״̬
            $("#tpl-component-2016-01-09-list-titleBorderStyle li").removeClass("active");

            if ($.tplComponentListSetting.isNotBlank(borderStyle)) {
                //����ѡ��״̬
                $("#tpl-component-2016-01-09-list-titleBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },

        /**
         * �洢�ͳ�ʼ����Щ���ⱻѡ����
         */
        storeAndInitTitleBorderSelected: function () {
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderSelected = $.trim($("." + id + "_titleBorderSelected").val());
            var array = borderSelected.split("_");
            //alert(array.length);
            for (var index = 0; index < array.length; ++index) {

                //alert(index + " " + array[index]);
                //��ʾindex��ʾ�����û�б�ѡ�У�������"active״̬"
                if (array[index] == "0") {
                    $("#tpl-component-2016-01-09-list-titleBorderSelected div").eq(index).removeClass("active");
                }
                //���ֵΪ"1",��ʾindex��ʾ�������ѡ���ˣ�����"active"״̬
                else {
                    $("#tpl-component-2016-01-09-list-titleBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        /**
         * ����ѡ�еı߿�
         */
        setBorderSelected: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                var cssType = "";

                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var index = parseInt($.trim($(obj).attr("index")));
                //��ʾ�����ϱ߿�
                if (index == 1) {
                    cssType = "border-top";
                }
                //��ʾ�����±߿�
                else if (index == 3) {
                    cssType = "border-bottom";
                }
                //��ʾ������߿�
                else if (index == 5) {
                    cssType = "border-left";
                }
                //��ʾ�����ұ߿�
                else if (index == 7) {
                    cssType = "border-right";
                }

                //����Ѿ��Ǳ�ѡ�У������ʱ���ʾ������û�б߿�
                if ($(obj).hasClass("active")) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":0px none !important;}";

                    //5���滻���������ƴ��
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
                //�����ʼû��ѡ��
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
                    /*��һ������һ��*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },
        /**
         * ���û��ʼ������ı�����ɫ
         */
        storeAndInitTitleBackgroundColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var backgroundColor = $.trim($("." + id + "_titleBackgroundColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-titleBackgroundColor", backgroundColor);
        },
        storeAndInitH1TitleBackgroundColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var backgroundColor = $.trim($("." + id + "_h1TitleBackgroundColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("treeH1TitleBackgroundColor", backgroundColor);
        },
        storeAndInitTitleLeftBackgroundColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var backgroundColor = $.trim($("." + id + "_titleLeftBackgroundColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-titleLeftBackgroundColor", backgroundColor);
        },
        storeAndInitTitleRightBackgroundColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var backgroundColor = $.trim($("." + id + "_titleRightBackgroundColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-titleRightBackgroundColor", backgroundColor);
        },
        /**
         * ���ñ���ı�����ɫ
         */
        setBackgroundColor: function (selectedElementInfo, childPathOfSelectedElement, color, storeBackgroundColor) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background");

                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                if (color == null) {
                    color = "transparent";
                }
                var styleText = "#" + id + childPathOfSelectedElement + "{background:" + color + " !important;}";
                //�滻���������ƴ��

                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                $("." + id + storeBackgroundColor).val(color);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        setTitleBackgroundColor: function (selectedElementInfo, childPathOfSelectedElement, color, storeBackgroundColor) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background");
                $.common.removeGeneratedCss(id,  " .title-content", "border-bottom");

                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                if (color == null) {
                    color = "transparent";
                }
                var styleText = "#" + id + childPathOfSelectedElement + "{background:" + color + " !important;}";
                //�滻���������ƴ��

                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .title-content{border-bottom:0 none}";
                //�滻���������ƴ��

                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);
                $("." + id + storeBackgroundColor).val(color);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���ʼ����λ��ز���
         */
        storeAndInitTitleBackGroundPosition: function () {
            //��ȡѡ��Ԫ�ص�id
            var id = selectedElementInfo.get("id");

            //���õ��е����ĸ���ť
            var key = $("." + id + "_titleBackgroundPositionBtnKey").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //��ɾ������ѡ��Ч����Ȼ��������µ�Ԫ��ѡ��Ч��
                $("#tpl-component-2016-01-09-list-titleBackgroundPositionBtnKey i").removeClass("active");
                $("#tpl-component-2016-01-09-list-titleBackgroundPositionBtnKey i").eq(parseInt($.trim(key))).addClass("active");
            }

            //���øı��ֵ
            var posX = $("." + id + "_titleBackgroundPositionX").val();
            var posY = $("." + id + "_titleBackgroundPositionY").val();

            //����ѡ�����ĸ�key
            $("#posX").val(posX);//��ȡ��������ֵ
            $("#posY").val(posY);//��ȡ��������ֵ
        },
        storeAndInitH1TitleBackGroundPosition: function () {
            //��ȡѡ��Ԫ�ص�id
            var id = selectedElementInfo.get("id");

            //���õ��е����ĸ���ť
            var key = $("." + id + "_h1TitleBackgroundPositionBtnKey").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //��ɾ������ѡ��Ч����Ȼ��������µ�Ԫ��ѡ��Ч��
                $("#tpl-component-2016-01-09-list-h1TitleBackgroundPositionBtnKey i").removeClass("active");
                $("#tpl-component-2016-01-09-list-h1TitleBackgroundPositionBtnKey i").eq(parseInt($.trim(key))).addClass("active");
            }

            //���øı��ֵ
            var posX = $("." + id + "_h1TitleBackgroundPositionX").val();
            var posY = $("." + id + "_h1TitleBackgroundPositionY").val();

            //����ѡ�����ĸ�key
            $("#posTitleX").val(posX);//��ȡ��������ֵ
            $("#posTitleY").val(posY);//��ȡ��������ֵ
        },
        /**
         * ����ѡ�е�Ԫ�ػ������ڲ�Ԫ�صı�����λ
         * selectedElementInfo :��ʾ����ѡ�е�Ԫ�ص���Ϣ
         * childPathOfSelectedElement:��ʾѡ�е�·��
         * key:��ʾ���Ǳ�����λ 1���� 2���� 3���� 4���� 5������
         * obj ѡ�е�Ԫ��
         */
        setBackGroundPosition: function (selectedElementInfo, childPathOfSelectedElement, key, obj) {
            try {
                //���ȸ��ı���ֵ
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
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ���ı�����ɫ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background-position");
                if ($(obj).attr('class').search(/active/) < 0) {
                    var posX = $("#posX").val();//��ȡ��������ֵ
                    var posY = $("#posY").val();//��ȡ��������ֵ
                    //��ȡ���е�css��ʽ
                    var styleCss = $("#generatedCss").text();
                    //������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement +
                        "{background-position:" + posX + " " + posY + ";}";
                    //�滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    //���õ��е����ĸ���ť
                    $("." + id + "_titleBackgroundPositionBtnKey").val(key);
                    //���øı��ֵ
                    $("." + id + "_titleBackgroundPositionX").val(posX);
                    $("." + id + "_titleBackgroundPositionY").val(posY);
                    /*��һ������һ��*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },
        setH1TitleBackGroundPosition: function (selectedElementInfo, childPathOfSelectedElement, key, obj) {
            try {
                //���ȸ��ı���ֵ
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
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ���ı�����ɫ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background-position");
                if ($(obj).attr('class').search(/active/) < 0) {
                    var posX = $("#posTitleX").val();//��ȡ��������ֵ
                    var posY = $("#posTitleY").val();//��ȡ��������ֵ
                    //��ȡ���е�css��ʽ
                    var styleCss = $("#generatedCss").text();
                    //������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement +
                        "{background-position:" + posX + " " + posY + ";}";
                    //�滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    //���õ��е����ĸ���ť
                    $("." + id + "_h1TitleBackgroundPositionBtnKey").val(key);
                    //���øı��ֵ
                    $("." + id + "_h1TitleBackgroundPositionX").val(posX);
                    $("." + id + "_h1TitleBackgroundPositionY").val(posY);
                    /*��һ������һ��*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },
        setListBackGroundPosition: function (selectedElementInfo, childPathOfSelectedElement, key, obj) {
            try {
                //���ȸ��ı���ֵ
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
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ���ı�����ɫ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background-position");
                if ($(obj).attr('class').search(/active/) < 0) {
                    var posListX = $("#posListX").val();//��ȡ��������ֵ
                    var posListY = $("#posListY").val();//��ȡ��������ֵ
                    //��ȡ���е�css��ʽ
                    var styleCss = $("#generatedCss").text();
                    //������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement +
                        "{background-position:" + posListX + " " + posListY + ";}";
                    //�滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    //���õ��е����ĸ���ť
                    $("." + id + "_listBackgroundPositionBtnKey").val(key);
                    //���øı��ֵ
                    $("." + id + "_listBackgroundPositionX").val(posListX);
                    $("." + id + "_listBackgroundPositionY").val(posListY);
                    /*��һ������һ��*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },
        /**
         * ����ѡ�е�Ԫ�ػ������ڲ�Ԫ�صı�����λ
         * selectedElementInfo :��ʾ����ѡ�е�Ԫ�ص���Ϣ
         * childPathOfSelectedElement:��ʾѡ�е�·��
         */
        setPosition: function (selectedElementInfo, childPathOfSelectedElement) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ���ı�����ɫ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background-position");
                var posX = $("#posX").val();//��ȡ��������ֵ
                var posY = $("#posY").val();//��ȡ��������ֵ
                if (posX.indexOf("%") < 0) {
                    posX = posX + "%";
                }
                if (posY.indexOf("%") < 0) {
                    posY = posY + "%";
                }
                //��ȡ���е�css��ʽ
                var styleCss = $("#generatedCss").text();
                //������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + childPathOfSelectedElement +
                    "{background-position:" + posX + " " + posY + ";}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);

                //���øı��ֵ
                $("." + id + "_titleBackgroundPositionX").val(posX);
                $("." + id + "_titleBackgroundPositionY").val(posY);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        setH1TitlePosition: function (selectedElementInfo, childPathOfSelectedElement) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ���ı�����ɫ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "background-position");
                var posX = $("#posTitleX").val();//��ȡ��������ֵ
                var posY = $("#posTitleY").val();//��ȡ��������ֵ
                if (posX.indexOf("%") < 0) {
                    posX = posX + "%";
                }
                if (posY.indexOf("%") < 0) {
                    posY = posY + "%";
                }
                //��ȡ���е�css��ʽ
                var styleCss = $("#generatedCss").text();
                //������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + childPathOfSelectedElement +
                    "{background-position:" + posX + " " + posY + ";}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);

                //���øı��ֵ
                $("." + id + "_h1TitleBackgroundPositionX").val(posX);
                $("." + id + "_h1TitleBackgroundPositionY").val(posY);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢�����ñ��ⱳ����Repeat����ֵ
         */
        storeAndInitTitleBackGroundRepeat: function () {
            //��ȡѡ��Ԫ�ص�id
            var id = selectedElementInfo.get("id");
            //��ñ�ѡ�е�Ԫ�ص�ֵ
            var key = $("." + id + "_titleBackGroundRepeat").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //����ѡ�е�Ч��
                $("#tpl-component-2016-01-09-list-titleBackGroundRepeat #repeat i").removeClass("active");
                $("#tpl-component-2016-01-09-list-titleBackGroundRepeat #repeat i").eq(parseInt($.trim(key))).addClass("active");
            }
        },
        storeAndInitH1TitleBackGroundRepeat: function () {
            //��ȡѡ��Ԫ�ص�id
            var id = selectedElementInfo.get("id");
            //��ñ�ѡ�е�Ԫ�ص�ֵ
            var key = $("." + id + "_h1TitleBackGroundRepeat").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //����ѡ�е�Ч��
                $("#tpl-component-2016-01-09-list-h1TitleBackGroundRepeat #repeat i").removeClass("active");
                $("#tpl-component-2016-01-09-list-h1TitleBackGroundRepeat #repeat i").eq(parseInt($.trim(key))).addClass("active");
            }
        },
        /**
         * ����ѡ�е�Ԫ�ػ������ڲ�Ԫ�صı���ƽ��
         * selectedElementInfo       :��ʾ����ѡ�е�Ԫ�ص���Ϣ
         * childPathOfSelectedElement:��ʾѡ�е�·��
         * key:��ʾ���Ǳ���ƽ�̵ķ�ʽ 0��ƽ�̣�1������ƽ�� 2������ƽ�� 3����ƽ��
         */
        setBackGroundRepeat: function (selectedElementInfo, childPathOfSelectedElement, key, obj, storeBackGroundRepeat) {
            try {
                if ($(obj).attr('class').search(/active/) < 0) {
                    //1�����id������ֵ
                    var id = selectedElementInfo.get("id");
                    //�Ƴ�ԭ���ı�����ɫ
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
                    //������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{background-repeat:" + value + ";}";
                    //�滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    //����Ԫ�ص��ظ�����
                    $("." + id + storeBackGroundRepeat).val(key);
                    /*��һ������һ��*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },

    };

    /**
     * �б�߼�����
     */
    $.tplComponentListListSetting = {
        storeAndInitListMore: function () {

            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢��ֵ
            var listMore = $.trim($("." + id + "_listMore").val());
            $("#tpl-list-2016-03-13-more").val(listMore);
        },
        storeAndInitListHref: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢��ֵ
            var listHref = $.trim($("." + id + "_listHref").val());

            $("#tpl-list-2016-03-13-href").val(listHref);
        },
        storeAndInitTitleText: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢��ֵ
            var titleText = $.trim($("." + id + "_titleText").val());

            $("#tpl-list-2016-03-13-textTitle").val(titleText);
        },
        storeAndInitListBackgroundColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var listColor = $.trim($("." + id + "_listBackgroundColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-listBackgroundColor", listColor);
        },
        storeAndInitListBackGroundPosition: function () {
            //��ȡѡ��Ԫ�ص�id
            var id = selectedElementInfo.get("id");

            //���õ��е����ĸ���ť
            var key = $("." + id + "_titleRightBackgroundPositionBtnKey").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //��ɾ������ѡ��Ч����Ȼ��������µ�Ԫ��ѡ��Ч��
                $("#tpl-component-2016-01-09-list-titleLeftBackgroundPositionBtnKey i").removeClass("active");
                $("#tpl-component-2016-01-09-list-titleLeftBackgroundPositionBtnKey i").eq(parseInt($.trim(key))).addClass("active");
            }

            //���øı��ֵ
            var posListX = $("." + id + "_listBackgroundPositionX").val();
            var posListY = $("." + id + "_listBackgroundPositionY").val();

            //����ѡ�����ĸ�key
            $("#posListX").val(posListX);//��ȡ��������ֵ
            $("#posListY").val(posListY);//��ȡ��������ֵ
        },
        storeAndInitListBackGroundRepeat: function () {
            //��ȡѡ��Ԫ�ص�id
            var id = selectedElementInfo.get("id");
            //��ñ�ѡ�е�Ԫ�ص�ֵ
            var key = $("." + id + "_listBackGroundRepeat").val();
            if ($.tplComponentListSetting.isNotBlank(key)) {
                //����ѡ�е�Ч��
                $("#tpl-component-2016-01-09-list-listBackGroundRepeat #repeatList i").removeClass("active");
                $("#tpl-component-2016-01-09-list-listBackGroundRepeat #repeatList i").eq(parseInt($.trim(key))).addClass("active");
            }
        },
        storeAndInitListListFontFamily: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var fontFamily = $("." + id + "_listFontFamily").val();

            //��������
            $("#tpl-component-2016-01-09-list-list-font-Family-Val").text(fontFamily);
        },
        /**
         * �������ֵ�����
         */
        setFontFamily: function () {
            //1�������������
            var fontFamily = $.trim($("#tpl-component-2016-01-09-list-list-font-Family-Val").text());
            //���ѡ�������ѡ��ֱ�ӷ���
            if (fontFamily == "��ѡ��") return;

            //2�����id������ֵ
            var id = selectedElementInfo.get("id");
            //3���Ƴ���ǰ���õ�����
            $.common.removeGeneratedCss(id, " .line-content", "font-family");
            //4���Ƴ�ʱ�����������
            $.common.removeGeneratedCss(id, " .tpl-component-2016-01-09-list-li-time", "font-family");
            var styleCss = $("#generatedCss").text();

            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + " .line-content{font-family:" + fontFamily + " !important;}";
            //������������
            styleCss += "\r\n" + styleText;

            //������ͨ�����������ʱ���ɵ�����ֵ
            styleText = "#" + id + " .tpl-component-2016-01-09-list-li-time{font-family:" + fontFamily + " !important;}";
            //������������
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);

            $("." + id + "_listFontFamily").val(fontFamily);
            /*��һ������һ��*/
            $.common.regain();
        },
        /**
         * ѡ�������ʱ�򴥷��������
         */
        selectListFontFamily: function () {
            $("#tpl-component-2016-01-09-list-list-font-Family-Val").bind("setFontFamily", function () {
                $.tplComponentListListSetting.setFontFamily();
            });
            $("#tpl-component-2016-01-09-list-list-font-Family li").click(function (event) {
                //ʹ��triggerHandler�ĺô��Ǵ˺������ᴥ��Ĭ�ϵĺ���������ð��
                $("#tpl-component-2016-01-09-list-list-font-Family-Val").triggerHandler("setFontFamily", []);
            });
        },
        /**
         * �洢���ʼ���б�����Ĵ�С
         */
        storeAndInitListFontSize: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var fontSize = $("." + id + "_listFontSize").val();
            //��������
            $("#tpl-component-2016-01-09-list-listFontSize").val(fontSize);
        },
        /**
         * ���ñ�������ִ�С
         */
        setFontSize: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var fontSize = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if (!$.tplComponentListSetting.isNotBlank(fontSize)) return;

                fontSize = $.tplComponentListSetting.handleInputValue(obj, fontSize);

                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + " .line-content", "font-size");
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + " .tpl-component-2016-01-09-list-li-time", "font-size");
                if (fontSize) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + " .line-content{font-size:" + fontSize + " !important;}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;

                    styleText = "#" + id + childPathOfSelectedElement + " .tpl-component-2016-01-09-list-li-time{font-size:" + fontSize + " !important;}";

                    styleCss += "\r\n" + styleText;

                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + "_listFontSize").val(fontSize);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���ʼ���б�������и�
         */
        storeAndInitListLineHeight: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var lineHeight = $("." + id + "_listLineHeight").val();
            //��������
            $("#tpl-component-2016-01-09-list-listLineHeight").val(lineHeight);
        },
        /**
         * ���ñ���������и�
         */
        setLineHeight: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var lineHeight = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if (!$.tplComponentListSetting.isNotBlank(lineHeight)) return;

                lineHeight = $.tplComponentListSetting.handleInputValue(obj, lineHeight);

                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + " .line-content", "line-height");
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + " .tpl-component-2016-01-09-list-li-time", "line-height");
                if (lineHeight) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + " .line-content{line-height:" + lineHeight + "}";
                    //5���滻���������ƴ��
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

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + "_listLineHeight").val(lineHeight);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ���߿����ɫ
         */
        storeAndInitListColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var titleColor = $.trim($("." + id + "_listColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-listColor", titleColor);
        },
        storeAndInitListHoverColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var titleColor = $.trim($("." + id + "_listHoverColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-listHoverColor", titleColor);
        },
        /**
         * ���ñ�����������ɫ
         * selectedElementInfo        :��ʾ��ѡ�е�Ԫ��ֵ
         * childPathOfSelectedElement :��ʾ����
         */
        setListColor: function (selectedElementInfo, childPathOfSelectedElement, color) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "color");

                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + childPathOfSelectedElement + "{color:" + color + "}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;

                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                $("." + id + "_listColor").val(color);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���ʼ���б�����Ķ��뷽ʽ
         */
        storeAndInitListTextAlign: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
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
         * �洢���߳�ʼ���б�������
         */
        storeAndInitListFontStyle: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            $("#tpl-component-2016-01-09-list-listFontStyle div").removeClass("active");

            //��������Ƿ�Ӵֵı��
            var listFontWeightFlag = $.trim($("." + id + "_listFontWeight").val());
            //����Ϊ�մ���ʱ��ִ��
            if (listFontWeightFlag != "") {
                $("#tpl-component-2016-01-09-list-listFontStyle div").eq(parseInt(listFontWeightFlag)).addClass("active");
            }

            //���������ı��
            var listFontStyleFlag = $.trim($("." + id + "_listFontStyle").val());
            if (listFontStyleFlag != "") {
                $("#tpl-component-2016-01-09-list-listFontStyle div").eq(parseInt(listFontStyleFlag)).addClass("active");
            }

            //����������εı��
            var listTextDecorationFlag = $.trim($("." + id + "_listTextDecoration").val());
            if (listTextDecorationFlag != "") {
                $("#tpl-component-2016-01-09-list-listFontStyle div").eq(parseInt(listTextDecorationFlag)).addClass("active");
            }
        },
        /**
         * ����ѡ�е�Ԫ��������ʽ
         * selectedElementInfo :��ʾ����ѡ�е�Ԫ�ص���Ϣ
         * childPathOfSelectedElement:��ʾѡ�е�·��
         * key:��ʾ����ѡ�еı߿���ʾֵ 1�Ӵ֣�2����б��3�»��ߣ�4ɾ���ߣ�
         * obj:this����
         */
        setFontStyle: function (selectedElementInfo, childPathOfSelectedElement, key, type, obj) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                var cssType = "";
                var fontCss = "";
                if (key == "0") {
                    //�Ӵ�
                    cssType = "font-weight";
                    fontCss = "font-weight: bold;";
                } else if (key == "1") {
                    //��б
                    cssType = "font-style";
                    fontCss = "font-style: italic;";
                } else if (key == "2") {
                    //�»���
                    cssType = "text-decoration";
                    fontCss = "text-decoration: underline;";

                    $("#tpl-component-2016-01-09-list-listFontStyle div").eq(3).removeClass("active");
                } else if (key == "3") {
                    //ɾ����
                    cssType = "text-decoration";
                    fontCss = "text-decoration: line-through;";

                    $("#tpl-component-2016-01-09-list-listFontStyle div").eq(2).removeClass("active");
                }

                //�Ƴ�ԭ�еı߿���ʽ
                if ($(obj).hasClass("active")) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
                    $("." + id + type).val("");
                    return;
                }

                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                //ƴ�Ӷ��뷽ʽcss��ʽ
                var styleText = "#" + id + childPathOfSelectedElement + "{" + fontCss + "}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + type).val(key);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ���б�߿����ɫ
         */
        storeAndInitListBorderColor: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var listBorderColor = $.trim($("." + id + "_listBorderColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-01-09-list-listBorderColor", listBorderColor);
        },
        /**
         * �����б�߿����ɫ
         * selectedElementInfo        :��ʾ��ѡ�е�Ԫ��ֵ
         * childPathOfSelectedElement :��ʾ����
         */
        setBorderColor: function (selectedElementInfo, childPathOfSelectedElement, color) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-color");

                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + childPathOfSelectedElement + "{border-color:" + color + " !important;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;

                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                $("." + id + "_listBorderColor").val(color);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ���߿�Ŀ��
         */
        storeAndInitListBorderWidth: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderWidth = $("." + id + "_listBorderWidth").val();
            //��������
            $("#tpl-component-2016-01-09-list-listBorderWidth").val(borderWidth);
        },
        /**
         * ���ñ߿�Ŀ�ȣ���ϸ��
         */
        setBorderWidth: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var borderWidth = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if (!$.tplComponentListSetting.isNotBlank(borderWidth)) return;
                //��������С
                borderWidth = $.tplComponentListSetting.handleInputValue(obj, borderWidth);

                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "border-width");
                if (borderWidth) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-width:" + borderWidth + "}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + "_listBorderWidth").val(borderWidth);
                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ���߿�ķ��
         */
        storeAndInitListBorderStyle: function () {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderStyle = $("." + id + "_listBorderStyle").val();

            //�Ƴ����е�ѡ��״̬
            $("#tpl-component-2016-01-09-list-listBorderStyle li").removeClass("active");
            if ($.tplComponentListSetting.isNotBlank(borderStyle)) {
                //����ѡ��״̬
                $("#tpl-component-2016-01-09-list-listBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },

        /**
         * �洢�ͳ�ʼ����Щ���ⱻѡ����
         */
        storeAndInitListBorderSelected: function () {
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderSelected = $.trim($("." + id + "_listBorderSelected").val());
            var array = borderSelected.split("_");
            var styleText = '';
            var styleCss = $("#generatedCss").text();
            //alert(array.length);
            for (var index = 0; index < array.length; ++index) {
                //alert(index + " " + array[index]);
                //��ʾindex��ʾ�����û�б�ѡ�У�������"active״̬"
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
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }
                //���ֵΪ"1",��ʾindex��ʾ�������ѡ���ˣ�����"active"״̬
                else {
                    $("#tpl-component-2016-01-09-list-listBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        /**
         * ����ѡ�еı߿�
         */
        setBorderSelected: function (selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                var cssType = "";

                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var index = parseInt($.trim($(obj).attr("index")));
                //��ʾ�����ϱ߿�
                if (index == 1) {
                    cssType = "border-top";
                }
                //��ʾ�����±߿�
                else if (index == 3) {
                    cssType = "border-bottom";
                }
                //��ʾ������߿�
                else if (index == 5) {
                    cssType = "border-left";
                }
                //��ʾ�����ұ߿�
                else if (index == 7) {
                    cssType = "border-right";
                }

                //����Ѿ��Ǳ�ѡ�У������ʱ���ʾ������û�б߿�
                if ($(obj).hasClass("active")) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":0px none !important;}";


                    //5���滻���������ƴ��
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
                //�����ʼû��ѡ��
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
                    /*��һ������һ��*/
                    $.common.regain();
                }
            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ��Link��ǩ��textDecoration
         */
        storeAndInitListLinkTextDecoration: function () {
            var id = selectedElementInfo.get("id");

            var listLinkFlag = parseInt($.trim($("." + id + "_listLinkFlag").val()));
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            $("#tpl-component-2016-01-09-list-listLinkFlag div").removeClass("active");
            $("#tpl-component-2016-01-09-list-listLinkFlag div").eq(listLinkFlag).addClass("active");

            var listVisitedFlag = parseInt($.trim($("." + id + "_listVisitedFlag").val()));
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            $("#tpl-component-2016-01-09-list-listVisitedFlag div").removeClass("active");
            $("#tpl-component-2016-01-09-list-listVisitedFlag div").eq(listVisitedFlag).addClass("active");

            var listHoverFlag = parseInt($.trim($("." + id + "_listHoverFlag").val()));
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            $("#tpl-component-2016-01-09-list-listHoverFlag div").removeClass("active");
            $("#tpl-component-2016-01-09-list-listHoverFlag div").eq(listHoverFlag).addClass("active");

            var listActiveFlag = parseInt($.trim($("." + id + "_listActiveFlag").val()));
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            $("#tpl-component-2016-01-09-list-listActiveFlag div").removeClass("active");
            $("#tpl-component-2016-01-09-list-listActiveFlag div").eq(listActiveFlag).addClass("active");
        },
        /**
         * �����������������������ʱ���text-decoration
         *
         * a:link                    :��ʾδ�����ʵ�����
         * a:visited                 :�ѱ����ʵ�����
         * a:hover                   :���ָ���ƶ���������
         * a:active                  :���ڱ����������
         *
         * selectedElementInfo       :��ѡ�е�Ԫ����Ϣ����
         * childPathOfSelectedElement:��ѡ�е�Ԫ�صĺ��ѡ����
         * type                      :��ʾ������������ֵ���ֱ���:link; :visited; :hover; :active
         * flag                      :��ʾ����ѡ��ĵڼ���ͼ�꣬��0:Ĭ�ϲ���underline;1:��underline
         */
        setLinkTextDecoration: function (selectedElementInfo, childPathOfSelectedElement, type, flag) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + type, "text-decoration");

                var textDecoration = "";
                if (flag == "0") {
                    textDecoration = "none";
                } else if (flag == "1") {
                    textDecoration = "underline";
                }

                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + childPathOfSelectedElement + type + " span.line-content{text-decoration:" + textDecoration + " !important;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;

                //����ʽ�ļ���ֵ
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

                /*��һ������һ��*/
                $.common.regain();
            } catch (e) {
            }
        },

       /*
       *�������Ĺ���ʵ��
       * */
        rightTitleIconUpload:function(html,path){
            var id = selectedElementInfo.get("id");
            $("#rightIcon .leftArea span").html(html);
            $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "background-image");
            $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "background-repeat");
            $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "background-position");
            $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "display");
            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + " .rightDiv .next-icon{background-image:"+path+"}";
            //������������
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .next-icon{background-repeat:no-repeat}";
            //������������
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .next-icon{background-position:center center}";
            //������������
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .rightDiv .next-icon{display:block}";
            //������������
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + "_rightSelectCurrentIcon").val(html);
            $("." + id + "_rightSelectCurrentIconPath").val(path);
        },
        removeRightUploadIcon:function(){
            var id = selectedElementInfo.get("id");
            $("#rightSelectIcon .removeUploadIcon").click(function(e){
                $("#rightIcon .leftArea span").html("��");
                $("#" + id + " .rightDiv .next-icon").css({"background-image":""});
                $(e.target).parent().remove();
                var html = $("#rightSelectIcon ul").html();
                $("." + id + "_rightSelectHtml").val(html);
                $("." + id + "_rightSelectCurrentIcon").val("��");
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
                    /*��һ������һ��*/
                    $.common.regain();
                }else if($(e.target).parent().hasClass("noIcon")){
                    var html = $(e.target).html();
                    $("#rightIcon .leftArea span").html(html);
                    //$("#" + id + " .rightDiv .next-icon").css({"display":"none"});
                    $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "background-image");
                    $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "display");
                    var styleCss = $("#generatedCss").text();
                    //������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + " .rightDiv .next-icon{background-image:''}";
                    //������������
                    styleCss += "\r\n" + styleText;
                    styleText = "#" + id + " .rightDiv .next-icon{display:none}";
                    //������������
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("." + id + "_rightSelectCurrentIcon").val(html);
                    /*��һ������һ��*/
                    $.common.regain();
                }
                $("#rightSelectIcon").hide();
            });
            //���
            $("#rightSelectIcon ul li.removeTreeAll").off('click').on("click",function(e) {
                $("#rightSelectIcon .removeUploadIcon").parent().remove();
                var html = $("#rightSelectIcon ul").html();
                $("." + id + "_rightSelectHtml").val(html);
                $("#rightIcon .leftArea span").html("��");
                $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "background-image");
                $.common.removeGeneratedCss(id, " .rightDiv .next-icon", "display");
                var styleCss = $("#generatedCss").text();
                //������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + " .rightDiv .next-icon{background-image:''}";
                //������������
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .rightDiv .next-icon{display:none}";
                //������������
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                /*��һ������һ��*/
                $.common.regain();
            })

        },
        rightUploadBtn:function(){
            var id = selectedElementInfo.get("id");
            var ulHtml = "";
            var pathArr = ["","","",];
            //�����ť��ʾ����
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

            //�����ť�ϴ�ͼƬ
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
                    //����̬��ӵ�li���ͼƬ
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
                    //����ӵ�ͼƬ��ַ��ŵ�������
                    pathArr.push(path);
                    $("." + id + "_titleRightBackgroundAbsoluteImg").val(pathArr);
                    //��������li�������
                    ulHtml = html + ulHtml;
                    $("." + id + "_rightSelectIcon").val(ulHtml);
                    //�����е�li�������
                    var html = $("#rightSelectIcon ul").html();
                    $("." + id + "_rightSelectHtml").val(html);
                    //ִ��ɾ����ѡ����
                    $.tplComponentListListSetting.rightSelectIcon();
                    $.tplComponentListListSetting.removeRightUploadIcon();
                    //�ϴ�������б�����ʾ
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
            //���Ե����ѡ�����ʾ������
            var currentIcon = $("." + id + "_rightSelectCurrentIcon").val();
            var path = $("." + id + "_rightSelectCurrentIconPath").val();
            $("#rightIcon .leftArea span").html(currentIcon);

            //���Զ�̬��ӵ�li��ͼƬ
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

            //����ɾ���������
            var currentHtml = $("." + id + "_rightSelectHtml").val();
            $("#rightSelectIcon ul").html(currentHtml);

        },

        /*
         *�б����Ĺ���ʵ��
         * */
        listIconUpload:function(html,path){
            var id = selectedElementInfo.get("id");
            $("#listIcon .leftArea span").html(html);
            $.common.removeGeneratedCss(id, " li  b.line-content1", "background-image");
            $.common.removeGeneratedCss(id, " li  b.line-content1", "background-position");
            $.common.removeGeneratedCss(id, " li  b.line-content1", "background-repeat");
            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + " li  b.line-content1{background-image:" + path + "}";
            //������������
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " li  b.line-content1{background-position:center center}";
            //������������
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " li  b.line-content1{background-repeat:no-repeat}";
            //������������
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + "_listSelectCurrentIcon").val(html);
            $("." + id + "_listSelectCurrentIconPath").val(path);
        },
        removeListUploadIcon:function(){
            var id = selectedElementInfo.get("id");
            $("#listSelectIcon .removeUploadIcon").click(function(e){
                $("#listIcon .leftArea span").html("��");
                $("#" + id + " li  b.line-content1").css({"background-image":"none"});
                $(e.target).parent().remove();
                var html = $("#listSelectIcon ul").html();
                $("." + id + "_listSelectHtml").val(html);
                $("." + id + "_listSelectCurrentIcon").val("��");
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
                    /*��һ������һ��*/
                    $.common.regain();
                }else if($(e.target).parent().hasClass("noIcon")){
                    var html = $(e.target).html();
                    $("#listIcon .leftArea span").html(html);
                    $.common.removeGeneratedCss(id, " li  b.line-content1", "background-image");
                    var styleCss = $("#generatedCss").text();
                    //������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + " li  b.line-content1{background-image:'none'}";
                    //������������
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("." + id + "_listSelectCurrentIcon").val(html);
                    /*��һ������һ��*/
                    $.common.regain();
                }
                $("#listSelectIcon").hide();
            });
            //���
            $("#listSelectIcon ul li.removeTreeAll").off('click').on("click",function(e) {
                $("#listSelectIcon .removeUploadIcon").parent().remove();
                var html = $("#listSelectIcon ul").html();
                $("." + id + "_listSelectHtml").val(html);
                $("#listIcon .leftArea span").html("��");
                $.common.removeGeneratedCss(id, " li  b.line-content1", "background-image");
                var styleCss = $("#generatedCss").text();
                //������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + " li  b.line-content1{background-image:'none'}";
                //������������
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                /*��һ������һ��*/
                $.common.regain();
            })

        },
        listUploadBtn:function(){
            var id = selectedElementInfo.get("id");
            var ulHtml = "";
            var pathArr = ["","","",];
            //�����ť��ʾ����
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

            //�����ť�ϴ�ͼƬ
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
                    //����̬��ӵ�li���ͼƬ
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
                    //����ӵ�ͼƬ��ַ��ŵ�������
                    pathArr.push(path);
                    $("." + id + "_listBackgroundAbsoluteImg").val(pathArr);
                    //��������li�������
                    ulHtml = html + ulHtml;
                    $("." + id + "_listSelectIcon").val(ulHtml);
                    //�����е�li�������
                    var html1 = $("#listSelectIcon ul").html();
                    $("." + id + "_listSelectHtml").val(html1);
                    //ִ��ɾ����ѡ����
                    $.tplComponentListListSetting.listSelectIcon();
                    $.tplComponentListListSetting.removeListUploadIcon();

                    //�ϴ�������б�����ʾ
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

            //���Զ�̬��ӵ�li��ͼƬ
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

            //���Ե����ѡ�����ʾ������
            var currentIcon = $("." + id + "_listSelectCurrentIcon").val();
            $("#listIcon .leftArea span").html(currentIcon);
            //����ɾ���������
            var currentHtml = $("." + id + "_listSelectHtml").val();
            $("#listSelectIcon ul").html(currentHtml);
        },

        /*
         *ǰ�ñ���Ĺ���ʵ��
         * */
        leftTitleIconUpload:function(html,path){
            var id = selectedElementInfo.get("id");
            $("#leftIcon .leftArea span").html(html);
            //$("#" + id + " .leftDiv .title-icon").css({background:path});
            $.common.removeGeneratedCss(id, " .leftDiv .title-icon", "background-image");
            $.common.removeGeneratedCss(id, " .leftDiv .title-icon", "background-position");
            $.common.removeGeneratedCss(id, " .leftDiv .title-icon", "background-repeat");
            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + " .leftDiv .title-icon{background-image:"+path+"}";
            //������������
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .leftDiv .title-icon{background-position:center center}";
            //������������
            styleCss += "\r\n" + styleText;
            styleText = "#" + id + " .leftDiv .title-icon{background-repeat:no-repeat}";
            //������������
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            $("." + id + "_leftSelectCurrentIcon").val(html);
            $("." + id + "_leftSelectCurrentIconPath").val(path);
        },
        removeLeftUploadIcon:function(){
            var id = selectedElementInfo.get("id");
            $("#leftSelectIcon .removeUploadIcon").click(function(e){
                $("#leftIcon .leftArea span").html("��");
                $("#" + id + " .leftDiv .title-icon").css({"background-image":""});
                $(e.target).parent().remove();
                var html = $("#leftSelectIcon ul").html();
                $("." + id + "_leftSelectHtml").val(html);
                $("." + id + "_leftSelectCurrentIcon").val("��");
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
                    /*��һ������һ��*/
                    $.common.regain();
                }else if($(e.target).parent().hasClass("noIcon")){
                    var html = $(e.target).html();
                    $("#leftIcon .leftArea span").html(html);
                    //$("#" + id + " .leftDiv .title-icon").css({background:""});
                    $.common.removeGeneratedCss(id, " .leftDiv .title-icon", "background-image");
                    var styleCss = $("#generatedCss").text();
                    //������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + " .leftDiv .title-icon{background-image:''}";
                    //������������
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("." + id + "_leftSelectCurrentIcon").val(html);
                    /*��һ������һ��*/
                    $.common.regain();
                }
                $("#leftSelectIcon").hide();
            });
            //���
            $("#leftSelectIcon ul li.removeTreeAll").off('click').on("click",function(e) {
                $("#leftSelectIcon .removeUploadIcon").parent().remove();
                var html = $("#leftSelectIcon ul").html();
                $("." + id + "_leftSelectHtml").val(html);
                $("#leftIcon .leftArea span").html("��");
                $.common.removeGeneratedCss(id, " .leftDiv .title-icon", "background-image");
                var styleCss = $("#generatedCss").text();
                //������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + " .leftDiv .title-icon{background-image:''}";
                //������������
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                /*��һ������һ��*/
                $.common.regain();
            })

        },
        leftUploadBtn:function(){
            var id = selectedElementInfo.get("id");
            var ulHtml = "";
            var pathArr = ["","","",];
            //�����ť��ʾ����
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

            //�����ť�ϴ�ͼƬ
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
                    //����̬��ӵ�li���ͼƬ
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
                    //����ӵ�ͼƬ��ַ��ŵ�������
                    pathArr.push(path);
                    $("." + id + "_titleLeftBackgroundAbsoluteImg").val(pathArr);
                    //��������li�������
                    ulHtml = html + ulHtml;
                    $("." + id + "_leftSelectIcon").val(ulHtml);
                    //�����е�li�������
                    var html = $("#leftSelectIcon ul").html();
                    $("." + id + "_leftSelectHtml").val(html);
                    //ִ��ɾ����ѡ����
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

            //���Զ�̬��ӵ�li��ͼƬ
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

            //���Ե����ѡ�����ʾ������
            var currentIcon = $("." + id + "_leftSelectCurrentIcon").val();
            $("#leftIcon .leftArea span").html(currentIcon);

            //����ɾ���������
            var currentHtml = $("." + id + "_leftSelectHtml").val();
            $("#leftSelectIcon ul").html(currentHtml);
        },

        /**
         * ��̬�������ÿ�ʼ
         */
        /*
         * ������Ŀ�����л�
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
         * ��Ŀ�����л�����
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
         * ���ø����ʾ����
         * */
        setArticleNum:function(){
        	var id = selectedElementInfo.get("id");
        	var num = $("#articleNum").val();
        	$("#" + id + " .list-body CMSPRO_DOCUMENTS").attr("num",num);
        	$("." + id + "_articleNum").val(num);
            $.tplComponentListListSetting.dynamicCall();
        },
        /*
         * �����ʾ��������
         * */
        storeArticleNum:function(){
        	var id = selectedElementInfo.get("id");
        	var num = $("." + id + "_articleNum").val();
        	
        	$("#articleNum").val(num);
        },
        /*
         * ���ø������
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
         * ������ͻ���
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
         * ���ø����ʼ��ʾλ��
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
         * �����ʼ��ʾλ�û���
         * */
        storeArticleStart:function(){
        	var id = selectedElementInfo.get("id");
        	var start = $("." + id + "_articleStart").val();
        	$("#articleStart").val(start);
        },
        /*
         * �����Ƿ���������
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
         * �Ƿ��������λ���
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
         * ���ñ�����ʾ����
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
         * ������ʾ���ͻ���
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
         * ���÷���ʱ���Ƿ���ʾ
         * */
        setPublishTime:function(){
        	var id = selectedElementInfo.get("id");
        	var val = "";
            $("#showTime").click(function(){
        		val = "showTime";
                $.common.removeGeneratedCss(id, " .list-body .tpl-component-2016-01-09-list-li-title", "width");
                $.common.removeGeneratedCss(id, " .list-body .time-content", "display");
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + " .list-body .tpl-component-2016-01-09-list-li-title{width:68%;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .list-body .time-content{display:block;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);
        		$("." + id + "_publishTime").val(val);
                /*��һ������һ��*/
                $.common.regain();
        	})
        	$("#hideTime").click(function(){
        		val = "hideTime";
                $.common.removeGeneratedCss(id, " .list-body .tpl-component-2016-01-09-list-li-title", "width");
                $.common.removeGeneratedCss(id, " .list-body .time-content", "display");
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText = "#" + id + " .list-body .tpl-component-2016-01-09-list-li-title{width:100%;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .list-body .time-content{display:none;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);
        		$("." + id + "_publishTime").val(val);
                /*��һ������һ��*/
                $.common.regain();
        	})
        },
        /*
         * ����ʱ���Ƿ���ʾ����
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
         * ��������
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
         * �Ƿ���ӳ����ӻ���
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
         * ������ʾ��󳤶Ȼ���
         * */
        storeMaxLength:function(){

        },
        /**
         * ��һ�ε�ʱ��title��ֵ���浽�������У������޸�title��ʱ�򣬲���������������ڶ���֮ǰ��һ������
         * �洢��ԭʼ��titleֵ
         */
        storeAndInitTitleInfo: function () {
            //1�������ʾ����ѡ�е�Ԫ�ص�ֵ,���ѡ�е�Ԫ�ص�idֵ
            var selectedElementId = selectedElementInfo.get("id");
            var len = $("." + selectedElementId + "_maxLength").val();

            var channelContent = "";
            $("#maxLength").val(len);
            for(var i = 0, l = $("#" + selectedElementId + " #static .list-body li").length; i < l; i++){
                channelContent = $.trim($("#" + selectedElementId + " #static .list-body li").eq(i).find(".line-content").html()) + "|" + channelContent;
            }
            channelContent = channelContent.substr(0,channelContent.length-1);
            $("." + selectedElementId + "_channelName").val(channelContent);
            //��õ����õı���������ֵ
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
         * ������Ŀ���������
         * selectedElementInfo        :��ʾ���ǵ�ǰѡ�е�Ԫ��
         * childPathOfSelectedElement :���ݵĺ���Ķ�λֵ
         * obj                        :��ʾ������д�������ı���
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
            //�洢�����������Ϣ
            $("." + id + "_maxLength").val(end);
            /*��һ������һ��*/
            $.common.regain();
        },
        /*
         * ����������ת��ʽ
         * */
        setOpenWay: function () {
            var id = selectedElementInfo.get("id");
            var val = "";
            $("#channelLocalBtn").click(function () {
                val = "local";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $("#" + id + " ul li a").attr("TARGET","_self");
                $("." + id + "_linkBtn").val(val);
                /*��һ������һ��*/
                $.common.regain();
            });
            $("#channelNewBtn").click(function () {
                val = "new";
                $(this).addClass("active").siblings(".component-radio").removeClass("active");
                $("#" + id + " ul li a").attr("TARGET","_blank");
                $("." + id + "_linkBtn").val(val);
                /*��һ������һ��*/
                $.common.regain();
            });
        },
        /*
         * ������ת��ʽ����
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
            // ȡ��ѡ����Ŀ
            $.cmsTree.cancelSelectCmsLm();
            $("#" + id).addClass('staticComponent').removeClass('dynamicComponent');
            $("#" + id + ' #cmsCode').find('cmspro_documents').attr("sitecode", '');
            $("#" + id + ' #cmsCode').find('cmspro_documents').attr("channelcode", '');
            $("#" + id + " #cmsCode CMSPRO_CHANNELS").attr('sitecode', '');
            $("#" + id + " #cmsCode CMSPRO_CHANNELS").attr('CODE', '');
            var html = '<h1>';
                html += '<div class="leftDiv" targetAttr="titleBasic" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\'.leftDiv\')">';
                html += '<i class="title-icon"></i>';
                html += '<a class="title-content" name="��������" target="_blank">��������</a>';
                html += '</div>';
                html += '<div class="rightDiv" targetAttr="more" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\'.rightDiv\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/fadasai1463453026257.shtml" class="title-more channelDataList_11c0d32a9c8f496f92cccab9f78b922c_1473210879117_titleLinkMore" target="_blank">����>><i class="next-icon"></i>';
                html += '</a>';
                html += '</div>';
                html += '</h1>';
                html += '<div class="list-body">';
                html += '<ul class="tpl-component-2016-01-09-list-list-body-ul0">';
                html += '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\' .list-body li\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/201509/1edea52d7edd44678a2344d10fafc53c.shtml" target="_blank" class="tpl-component-2016-01-09-list-li-title">';
                html += '<b class="line-content1"></b>';
                html += '<span class="line-content" name="���г����սᾰ�������Ǽ�">���г����սᾰ�������Ǽ�</span>';
                html += '<span class="tpl-component-2016-01-09-list-li-time">';
                html += '</a>';
                html += '<span class="time-content" name="1441641054000">2015-09-07</span>';
                html += '</span>';
                html += '</li>';
                html += '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\' .list-body li\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/201509/dd1c6cd5e2014c1ba0196ca2e8e5d4b7.shtml" target="_blank" class="tpl-component-2016-01-09-list-li-title">';
                html += '<b class="line-content1"></b>';
                html += '<span class="line-content" name="������������ߴ�1800����Ԫ �羺��ҵ���������">������������ߴ�1800����Ԫ �羺��ҵ���������</span>';
                html += '</a>';
                html += '<span class="tpl-component-2016-01-09-list-li-time">';
                html += '<span class="time-content" name="1441640660000">2015-09-07</span>';
                html += '</span>';
                html += '</li>';
                html += '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\' .list-body li\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/201509/908ed73d3880484684453c1e68ebb83c.shtml" target="_blank" class="tpl-component-2016-01-09-list-li-title">';
                html += '<b class="line-content1"></b>';
                html += '<span class="line-content" name="��˼�����ƶ����羺������нǧ��">��˼�����ƶ����羺������нǧ��</span>';
                html += '</a>';
                html += '<span class="tpl-component-2016-01-09-list-li-time">';
                html += '<span class="time-content" name="1441640643000">2015-09-07</span>';
                html += '</span>';
                html += '</li>';
                html += '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\' .list-body li\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/201509/86a6902cf70e4a92adc3299badc1b583.shtml" target="_blank" class="tpl-component-2016-01-09-list-li-title">';
                html += '<b class="line-content1"></b>';
                html += '<span class="line-content" name="���������� ���񲿹������������ƶ">���������� ���񲿹������������ƶ</span>';
                html += '</a>';
                html += '<span class="tpl-component-2016-01-09-list-li-time">';
                html += '<span class="time-content" name="1441640593000">2015-09-07</span>';
                html += '</span>';
                html += '</li>';
                html += '<li targetAttr="list" onmouseenter="$.common.heightLight(this,event)" onclick="$.common.goToSidebar(this,event,\' .list-body li\')">';
                html += '<a href="http://127.0.0.1:8888/demo/jtxw/201509/ef32eb6edb124ad789ded2e9341dec7d.shtml" target="_blank" class="tpl-component-2016-01-09-list-li-title">';
                html += '<b class="line-content1"></b>';
                html += '<span class="line-content" name="�����������ɡ�̸�м��� ��ɢ�����ž�ʱ������">�����������ɡ�̸�м��� ��ɢ�����ž�ʱ������</span>';
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
            //�滻���������ƴ��
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
            /*��һ������һ��*/
            $.common.regain();
        },
        /**
         * ����code����
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
                //   ����ѡ����Ŀ�� siteCode   CHANNELCODE
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
         * ��ʾѡ����Ŀ����
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
                //�滻���������ƴ��
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
                /*��һ������һ��*/
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
            //8���洢���ʼ������Margin��Padding
            $.tplComponentListSetting.storeAndInitMarginAndPadding();
            //9���洢���ʼ���߿������
            $.tplComponentListSetting.storeBaseListBorderStyle();
            $.tplComponentListSetting.storeBaseTreeBorderStyle();
            $.tplComponentListSetting.storeBaseTitleBorderStyle();
            //10���洢���ʼ���߿�Ŀ��
            $.tplComponentListSetting.storeBaseListBorderWidth();
            $.tplComponentListSetting.storeBaseTitleBorderWidth();
            $.tplComponentListSetting.storeBaseTreeBorderWidth();
            $.tplComponentListSetting.storeBorderRadius();
            $.tplComponentListSetting.storeTreeColumn();
            //11���洢���ʼ���߿����ɫ
            $.tplComponentListSetting.storeBaseListBorderColor();
            $.tplComponentListSetting.storeBaseTitleBorderColor();
            $.tplComponentListSetting.storeBaseTreeBorderColor();
            //12���洢���ʼ���߿��ѡ��

            $.tplComponentListSetting.storeAndInitAlign();
            $.tplComponentListSetting.storeAndInitVerticalAlign();
            $.tplComponentListSetting.storeRightDistance();
            $.tplComponentListSetting.storeMoreDistance();
            $.tplComponentListSetting.storelistRightDistance();
            $.tplComponentListSetting.storeMoreTitle();
            $.tplComponentListSetting.storeLinkButton();
            $.tplComponentListSetting.setLinkButton();
            //ִ�и���ͼ����ʾ������
            $.tplComponentListSetting.setMoreShowStyle();
            $.tplComponentListSetting.storeMoreShowStyle();
            //ִ��ǰ��ͼ����ʾ������
            $.tplComponentListSetting.setLeftIconShowStyle();
            $.tplComponentListSetting.storeLeftIconShowStyle();
            //ִ���б�ͼ����ʾ������
            $.tplComponentListSetting.setListIconShowStyle();
            $.tplComponentListSetting.storeListIconShowStyle();

            $.tplComponentListSetting.setTreeTime();
            $.tplComponentListSetting.storeTreeTime();
            /****************����߼�����********************/
            $.tplComponentListTitleSetting.storeTitlePic();
            $.tplComponentListTitleSetting.storeTitleLeftPic();
            $.tplComponentListTitleSetting.storeTitleRightPic();
            $.tplComponentListTitleSetting.storeListPic();
            $.tplComponentListTitleSetting.storeH1TitlePic();

            //1����ѡ��������֮�󴥷���������Ĺ���
            $.tplComponentListTitleSetting.selectTitleFontFamily();
            $.tplComponentListTitleSetting.selectRightTitleFontFamily();
            //2���洢���߳�ʼ�����������
            $.tplComponentListTitleSetting.storeAndInitListTitleFontFamily();
            $.tplComponentListTitleSetting.storeAndInitListRightTitleFontFamily();
            //3���洢���߳�ʼ������������С
            $.tplComponentListTitleSetting.storeAndInitTitleFontSize();
            $.tplComponentListTitleSetting.storeAndInitRightTitleFontSize();
            //4���洢���߳�ʼ������������и�
            $.tplComponentListTitleSetting.storeAndInitTitleLineHeight();
            $.tplComponentListTitleSetting.storeAndInitRightTitleLineHeight();
            //5���洢���߳�ʼ���������ɫ
            $.tplComponentListTitleSetting.storeAndInitTitleColor();
            $.tplComponentListTitleSetting.storeAndInitTitleHoverColor();
            $.tplComponentListTitleSetting.storeAndInitTitleRightHoverColor();
            $.tplComponentListTitleSetting.storeAndInitRightTitleColor();
            //6���洢���߳�ʼ�������������뷽ʽ
            $.tplComponentListTitleSetting.storeAndInitTitleTextAlign();
            //7���洢���߳�ʼ�����������ķ��
            $.tplComponentListTitleSetting.storeAndInitTitleFontStyle();
            //8���洢���߳�ʼ������߿����ɫ
            $.tplComponentListTitleSetting.storeAndInitTitleBorderColor();
            //9���洢���߳�ʼ������ı߿�ķ��
            $.tplComponentListTitleSetting.storeAndInitTitleBorderStyle();
            //10���洢���߳�ʼ������ı߿�Ŀ��
            $.tplComponentListTitleSetting.storeAndInitTitleBorderWidth();
            //11���洢���߳�ʼ��ѡ������Щ�߿�
            $.tplComponentListTitleSetting.storeAndInitTitleBorderSelected();
            //12���洢���߳�ʼ������ı�����ɫ
            $.tplComponentListTitleSetting.storeAndInitTitleBackgroundColor();
            $.tplComponentListTitleSetting.storeAndInitTitleLeftBackgroundColor();
            $.tplComponentListTitleSetting.storeAndInitTitleRightBackgroundColor();
            $.tplComponentListTitleSetting.storeAndInitH1TitleBackgroundColor();
            //13���洢���ʼ�����ⶨλ����
            $.tplComponentListTitleSetting.storeAndInitTitleBackGroundPosition();
            $.tplComponentListTitleSetting.storeAndInitH1TitleBackGroundPosition();
            //14���洢���ʼ�����ⱳ����Repeat����
            $.tplComponentListTitleSetting.storeAndInitTitleBackGroundRepeat();
            $.tplComponentListTitleSetting.storeAndInitH1TitleBackGroundRepeat();
            //15���洢���ʼ������ı߾�
            $.tplComponentListSetting.storeHeaderMarginAndPadding();
            //15���洢���ʼ������ĸ߶�
            $.tplComponentListSetting.storeHeaderHeight();

            /****************�б�߼�����********************/
            //1����ѡ��������֮�󴥷���������Ĺ���
            $.tplComponentListListSetting.selectListFontFamily();
            //2���洢���߳�ʼ���б������
            $.tplComponentListListSetting.storeAndInitListListFontFamily();
            //3���洢���߳�ʼ������Ĵ�С
            $.tplComponentListListSetting.storeAndInitListFontSize();
            //4���洢���߳�ʼ��������и�
            $.tplComponentListListSetting.storeAndInitListLineHeight();
            //5���洢���߳�ʼ���������ɫ
            $.tplComponentListListSetting.storeAndInitListColor();
            $.tplComponentListListSetting.storeAndInitListHoverColor();
            //6���洢���߳�ʼ���б�Ķ��뷽ʽ
            $.tplComponentListListSetting.storeAndInitListTextAlign();
            //7���洢���߳�ʼ���б�ı߿����ɫ
            $.tplComponentListListSetting.storeAndInitListBorderColor();
            //8���洢���߳�ʼ���б������ķ��
            $.tplComponentListListSetting.storeAndInitListFontStyle();
            //9���洢���߳�ʼ���б�ı߿�ķ��
            $.tplComponentListListSetting.storeAndInitListBorderStyle();
            //10���洢���߳�ʼ���б�ı߿�Ŀ��
            $.tplComponentListListSetting.storeAndInitListBorderWidth();
            //11���洢���߳�ʼ���б�ѡ������Щ�߿�
            $.tplComponentListListSetting.storeAndInitListBorderSelected();
            //12���洢���߳�ʼ���б��е���ɫ����
            // $.tplComponentListListSetting.storeAndInitListLinkStyle();
            //13���洢���߳�ʼ��Link��ǩ��textDecoration
            $.tplComponentListListSetting.storeAndInitListLinkTextDecoration();
            //14���洢���ʼ���б�ı�����ɫ
            $.tplComponentListListSetting.storeAndInitListBackgroundColor();
            //14���洢���ʼ���б�ı���λ��
            $.tplComponentListListSetting.storeAndInitListBackGroundPosition();
            //14���洢���ʼ���б�ı���ƽ��
            $.tplComponentListListSetting.storeAndInitListBackGroundRepeat();
            //14���洢���ʼ���б�ĸ������ӵ�ַ
            $.tplComponentListListSetting.storeAndInitListHref();
            //14���洢���ʼ���б�ĸ���
            $.tplComponentListListSetting.storeAndInitListMore();
            //14���洢���ʼ�������ı�
            $.tplComponentListListSetting.storeAndInitTitleText();
            //14���洢���ʼ���б�����
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
            //����ͼ��
            $.tplComponentListListSetting.storeRightSelectIcon();
            $.tplComponentListListSetting.rightSelectIcon();
            $.tplComponentListListSetting.removeRightUploadIcon();
            $.tplComponentListListSetting.rightUploadBtn();
            //ǰ��ͼ��
            $.tplComponentListListSetting.storeLeftSelectIcon();
            $.tplComponentListListSetting.leftSelectIcon();
            $.tplComponentListListSetting.removeLeftUploadIcon();
            $.tplComponentListListSetting.leftUploadBtn();
            //�б�ͼ��
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
 * ȡ������ͼƬ
 * @param cId ȡ����ť��id
 * @param hiddenPath �����ֶΣ� ��ŵ�ͼƬ·����text��idֵ
 * @param imgDivId img���ڵ�div��idֵ
 */
function cancelBackgroundImg(cId, hiddenPath, imgDivId) {
    //��������ϴ�ͼƬ
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
                        var id = selectedElementInfo.get("id");	//���id������ֵ
                        $.common.removeGeneratedCss(id, "", "background-image");//�Ƴ�ԭ���ı���ͼƬ
                        $("#" + imgDivId).hide();
                    } else {
                        alert("�ļ�������");
                    }
                }
            });
        }
    });
}

$(function () {
    //try catch��Ŀ����Ϊ��������app-tpl-webapp��ʱ�����Ҳ����
    if ($('head').find('script[name=systemJs]').length > 0) {
        var id = selectedElementInfo.get('id');
        $("body").find(".full-spectrum").remove();
        //λ������ӱ���ͼƬ
        $("#treeTitleBg").click(function () {
            var val = $("." + id + "_h1BgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, "", "background-image");//�Ƴ�ԭ���ı���ͼƬ
                var path = data.all[0].path;
                $("#treeTitlePath").css("background", "url("+path+") center center no-repeat");
                var img = $("#treeTitlePath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //ͼƬ����ʵ���
				        var _width = this.width;
				        var _height = this.height;
						//ͼƬ�����Ŀ��
						var width = hWidth;
						var height = hHeight;
						//ͼƬҳ���еĿ��
						var iwidth = img.width();
						var iheight = img.height();
						//ͼƬ��ʵ��ȴ���ͼƬ�������
						if(_width>width){
							//ͼƬ���Ϊ�������
							iwidth = width;
							//ͼƬ�߶� Ϊ��Ӧ������ֵ
							iheight = Math.floor(_height*width/_width);
						}else{
							//ͼƬ��ʵ��Ƚ�С
							//ͼƬ���Ϊ��ʵ���
							iwidth = _width;
							//ͼƬ�߶�Ϊ��ʵ�߶�
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#treeTitleBgImg").hide();
                $("#blockPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " {background-image: url('" + path + "');}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_h1BgPicDate").val(value);
                $("." + id + "_titleBackgroundAbsoluteImg").val(path);
                /*��һ������һ��*/
                $.common.regain();
            });
        });
        $("#treeTitlePath").click(function () {
            var val = $("." + id + "_h1BgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, "", "background-image");//�Ƴ�ԭ���ı���ͼƬ
                var path = data.all[0].path;
                $("#treeTitlePath").css("background", "url("+path+") center center no-repeat");
                $("#treeTitleBgImg").hide();
                var img = $("#treeTitlePath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //ͼƬ����ʵ���
				        var _width = this.width;
				        var _height = this.height;
						//ͼƬ�����Ŀ��
						var width = hWidth;
						var height = hHeight;
						//ͼƬҳ���еĿ��
						var iwidth = img.width();
						var iheight = img.height();
						//ͼƬ��ʵ��ȴ���ͼƬ�������
						if(_width>width){
							//ͼƬ���Ϊ�������
							iwidth = width;
							//ͼƬ�߶� Ϊ��Ӧ������ֵ
							iheight = Math.floor(_height*width/_width);
						}else{
							//ͼƬ��ʵ��Ƚ�С
							//ͼƬ���Ϊ��ʵ���
							iwidth = _width;
							//ͼƬ�߶�Ϊ��ʵ�߶�
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " {background-image: url('" + path + "');}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_h1BgPicDate").val(value);
                $("." + id + "_titleBackgroundAbsoluteImg").val(path);
                /*��һ������һ��*/
                $.common.regain();
            });
        });
        $("#treeH1TitleBg").click(function () {
            var val = $("." + id + "_h1TitleBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1", "background-image");//�Ƴ�ԭ���ı���ͼƬ
                $.common.removeGeneratedCss(id, " .title-content", "border-bottom");//�Ƴ�ԭ���ı���ͼƬ
                var path = data.all[0].path;
                $("#treeH1TitlePath").css("background", "url("+path+") center center no-repeat");
                var img = $("#treeH1TitlePath");
                var hWidth = 170;
                var hHeight = 94;
                $("<img/>").attr("src", path).load(function() {
                    //ͼƬ����ʵ���
                    var _width = this.width;
                    var _height = this.height;
                    //ͼƬ�����Ŀ��
                    var width = hWidth;
                    var height = hHeight;
                    //ͼƬҳ���еĿ��
                    var iwidth = img.width();
                    var iheight = img.height();
                    //ͼƬ��ʵ��ȴ���ͼƬ�������
                    if(_width>width){
                        //ͼƬ���Ϊ�������
                        iwidth = width;
                        //ͼƬ�߶� Ϊ��Ӧ������ֵ
                        iheight = Math.floor(_height*width/_width);
                    }else{
                        //ͼƬ��ʵ��Ƚ�С
                        //ͼƬ���Ϊ��ʵ���
                        iwidth = _width;
                        //ͼƬ�߶�Ϊ��ʵ�߶�
                        iheight = _height;
                    }
                    img.css('background-size',iwidth+'px '+iheight+'px');
                });
                $("#treeH1TitleBgImg").hide();
                $("#blockH1Picture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1" + " {background-image: url('" + path + "');}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .title-content" + " {border-bottom:0 none}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_h1TitleBgPicDate").val(value);
                $("." + id + "_h1TitleBackgroundAbsoluteImg").val(path);
                /*��һ������һ��*/
                $.common.regain();
            });
        });
        $("#treeH1TitlePath").click(function () {
            var val = $("." + id + "_h1TitleBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1", "background-image");//�Ƴ�ԭ���ı���ͼƬ
                $.common.removeGeneratedCss(id, " .title-content", "border-bottom");//�Ƴ�ԭ���ı���ͼƬ
                var path = data.all[0].path;
                $("#treeH1TitlePath").css("background", "url("+path+") center center no-repeat");
                var img = $("#treeH1TitlePath");
                var hWidth = 170;
                var hHeight = 94;
                $("<img/>").attr("src", path).load(function() {
                    //ͼƬ����ʵ���
                    var _width = this.width;
                    var _height = this.height;
                    //ͼƬ�����Ŀ��
                    var width = hWidth;
                    var height = hHeight;
                    //ͼƬҳ���еĿ��
                    var iwidth = img.width();
                    var iheight = img.height();
                    //ͼƬ��ʵ��ȴ���ͼƬ�������
                    if(_width>width){
                        //ͼƬ���Ϊ�������
                        iwidth = width;
                        //ͼƬ�߶� Ϊ��Ӧ������ֵ
                        iheight = Math.floor(_height*width/_width);
                    }else{
                        //ͼƬ��ʵ��Ƚ�С
                        //ͼƬ���Ϊ��ʵ���
                        iwidth = _width;
                        //ͼƬ�߶�Ϊ��ʵ�߶�
                        iheight = _height;
                    }
                    img.css('background-size',iwidth+'px '+iheight+'px');
                });
                $("#treeH1TitleBgImg").hide();
                $("#blockH1Picture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1" + " {background-image: url('" + path + "')}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .title-content" + " {border-bottom:0 none}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_h1TitleBgPicDate").val(value);
                $("." + id + "_h1TitleBackgroundAbsoluteImg").val(path);
                /*��һ������һ��*/
                $.common.regain();
            });
        });
        $("#treeTitleLeftBg").click(function () {
            var val = $("." + id + "_leftDivBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1 .leftDiv", "background-image");//�Ƴ�ԭ���ı���ͼƬ
                var path = data.all[0].path;
                $("#treeTitleLeftPath").css("background", "url("+path+") center center no-repeat");
                $("#treeTitleLeftBgImg").hide();
                var img = $("#treeTitleLeftPath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //ͼƬ����ʵ���
				        var _width = this.width;
				        var _height = this.height;
						//ͼƬ�����Ŀ��
						var width = hWidth;
						var height = hHeight;
						//ͼƬҳ���еĿ��
						var iwidth = img.width();
						var iheight = img.height();
						//ͼƬ��ʵ��ȴ���ͼƬ�������
						if(_width>width){
							//ͼƬ���Ϊ�������
							iwidth = width;
							//ͼƬ�߶� Ϊ��Ӧ������ֵ
							iheight = Math.floor(_height*width/_width);
						}else{
							//ͼƬ��ʵ��Ƚ�С
							//ͼƬ���Ϊ��ʵ���
							iwidth = _width;
							//ͼƬ�߶�Ϊ��ʵ�߶�
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockLeftPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1 .leftDiv" + " {background-image: url('" + path + "')}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_leftDivBgPicDate").val(value);
                $("." + id + "_titleLeftBackgroundAbsoluteImg").val(path);
                /*��һ������һ��*/
                $.common.regain();
            });
        });
        $("#treeTitleLeftPath").click(function () {
            var val = $("." + id + "_leftDivBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1 .leftDiv", "background-image");//�Ƴ�ԭ���ı���ͼƬ
                var path = data.all[0].path;
                $("#treeTitleLeftPath").css("background", "url("+path+") center center no-repeat");
                $("#treeTitleLeftBgImg").hide();
                var img = $("#treeTitleLeftPath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //ͼƬ����ʵ���
				        var _width = this.width;
				        var _height = this.height;
						//ͼƬ�����Ŀ��
						var width = hWidth;
						var height = hHeight;
						//ͼƬҳ���еĿ��
						var iwidth = img.width();
						var iheight = img.height();
						//ͼƬ��ʵ��ȴ���ͼƬ�������
						if(_width>width){
							//ͼƬ���Ϊ�������
							iwidth = width;
							//ͼƬ�߶� Ϊ��Ӧ������ֵ
							iheight = Math.floor(_height*width/_width);
						}else{
							//ͼƬ��ʵ��Ƚ�С
							//ͼƬ���Ϊ��ʵ���
							iwidth = _width;
							//ͼƬ�߶�Ϊ��ʵ�߶�
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockLeftPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1 .leftDiv" + " {background-image: url('" + path + "')}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_leftDivBgPicDate").val(value);
                $("." + id + "_titleLeftBackgroundAbsoluteImg").val(path);
                /*��һ������һ��*/
                $.common.regain();
            });
        });
        $("#treeTitleRightBg").click(function () {
            var val = $("." + id + "_rightDivBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1 .rightDiv", "background-image");//�Ƴ�ԭ���ı���ͼƬ
                var path = data.all[0].path;
                $("#treeTitleRightPath").css("background", "url("+path+") center center no-repeat");
                $("#treeTitleRightBgImg").hide();
                var img = $("#treeTitleRightBgImg");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //ͼƬ����ʵ���
				        var _width = this.width;
				        var _height = this.height;
						//ͼƬ�����Ŀ��
						var width = hWidth;
						var height = hHeight;
						//ͼƬҳ���еĿ��
						var iwidth = img.width();
						var iheight = img.height();
						//ͼƬ��ʵ��ȴ���ͼƬ�������
						if(_width>width){
							//ͼƬ���Ϊ�������
							iwidth = width;
							//ͼƬ�߶� Ϊ��Ӧ������ֵ
							iheight = Math.floor(_height*width/_width);
						}else{
							//ͼƬ��ʵ��Ƚ�С
							//ͼƬ���Ϊ��ʵ���
							iwidth = _width;
							//ͼƬ�߶�Ϊ��ʵ�߶�
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockRightPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1 .rightDiv" + " {background-image: url('" + path + "');}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_rightDivBgPicDate").val(value);
                $("." + id + "_titleRightBackgroundAbsoluteImg").val(path);
                /*��һ������һ��*/
                $.common.regain();
            });
        });
        $("#treeTitleRightPath").click(function () {
            var val = $("." + id + "_rightDivBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " h1 .rightDiv", "background-image");//�Ƴ�ԭ���ı���ͼƬ
                var path = data.all[0].path;
                $("#treeTitleRightPath").css("background", "url("+path+") center center no-repeat");
                $("#treeTitleRightBgImg").hide();
                var img = $("#treeTitleRightBgImg");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //ͼƬ����ʵ���
				        var _width = this.width;
				        var _height = this.height;
						//ͼƬ�����Ŀ��
						var width = hWidth;
						var height = hHeight;
						//ͼƬҳ���еĿ��
						var iwidth = img.width();
						var iheight = img.height();
						//ͼƬ��ʵ��ȴ���ͼƬ�������
						if(_width>width){
							//ͼƬ���Ϊ�������
							iwidth = width;
							//ͼƬ�߶� Ϊ��Ӧ������ֵ
							iheight = Math.floor(_height*width/_width);
						}else{
							//ͼƬ��ʵ��Ƚ�С
							//ͼƬ���Ϊ��ʵ���
							iwidth = _width;
							//ͼƬ�߶�Ϊ��ʵ�߶�
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockRightPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " h1 .rightDiv" + " {background-image: url('" + path + "');}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_rightDivBgPicDate").val(value);
                $("." + id + "_titleRightBackgroundAbsoluteImg").val(path);
                /*��һ������һ��*/
                $.common.regain();
            });
        });
        $("#treeListBg").click(function () {
            var val = $("." + id + "_listBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " .list-body", "background-image");//�Ƴ�ԭ���ı���ͼƬ
                var path = data.all[0].path;
                $("#treeListPath").css("background", "url("+path+") center center no-repeat");
                $("#treeListBgImg").hide();

                var img = $("#treeListPath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //ͼƬ����ʵ���
				        var _width = this.width;
				        var _height = this.height;
						//ͼƬ�����Ŀ��
						var width = hWidth;
						var height = hHeight;
						//ͼƬҳ���еĿ��
						var iwidth = img.width();
						var iheight = img.height();
						//ͼƬ��ʵ��ȴ���ͼƬ�������
						if(_width>width){
							//ͼƬ���Ϊ�������
							iwidth = width;
							//ͼƬ�߶� Ϊ��Ӧ������ֵ
							iheight = Math.floor(_height*width/_width);
						}else{
							//ͼƬ��ʵ��Ƚ�С
							//ͼƬ���Ϊ��ʵ���
							iwidth = _width;
							//ͼƬ�߶�Ϊ��ʵ�߶�
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockListPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " .list-body" + " {background-image: url('" + path + "');}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_listBgPicDate").val(value);
                $("." + id + "_listBackgroundAbsoluteImg").val(path);
                /*��һ������һ��*/
                $.common.regain();
            });
        });
        $("#treeListPath").click(function () {
            var val = $("." + id + "_listBgPicDate").val();
            $.dialogUpPic.initDialog(val, "1", function (data) {
                $.common.removeGeneratedCss(id, " .list-body", "background-image");//�Ƴ�ԭ���ı���ͼƬ
                var path = data.all[0].path;
                $("#treeListPath").css("background", "url("+path+") center center no-repeat");
                $("#treeListBgImg").hide();
                var img = $("#treeListPath");
				var hWidth = 170;
				var hHeight = 94;
				$("<img/>").attr("src", path).load(function() {
				        //ͼƬ����ʵ���
				        var _width = this.width;
				        var _height = this.height;
						//ͼƬ�����Ŀ��
						var width = hWidth;
						var height = hHeight;
						//ͼƬҳ���еĿ��
						var iwidth = img.width();
						var iheight = img.height();
						//ͼƬ��ʵ��ȴ���ͼƬ�������
						if(_width>width){
							//ͼƬ���Ϊ�������
							iwidth = width;
							//ͼƬ�߶� Ϊ��Ӧ������ֵ
							iheight = Math.floor(_height*width/_width);
						}else{
							//ͼƬ��ʵ��Ƚ�С
							//ͼƬ���Ϊ��ʵ���
							iwidth = _width;
							//ͼƬ�߶�Ϊ��ʵ�߶�
							iheight = _height;
						}
					img.css('background-size',iwidth+'px '+iheight+'px');	
				});
                $("#blockListPicture").show();
                var styleCss = $("#generatedCss").text();
                var styleText = "#" + id + " .list-body" + " {background-image: url('" + path + "');}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                var value = JSON.stringify(data);
                $("." + id + "_listBgPicDate").val(value);
                $("." + id + "_listBackgroundAbsoluteImg").val(path);
                /*��һ������һ��*/
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
        // ������ÿ�ʼ
        var serverPath = $.common.getComponetIMagesUrl(id);
        var jsonData = [{
                name: 'Ĭ�Ϸ��',
                childElement: "",
                childIndexElement: " .tpl-component-2016-01-09-list-change",
                classStyle: 'tpl-component-2016-01-09-list-style',
                url: serverPath + '/images/localDefault.png',
                className: 'tpl-component-2016-01-09-list-style1',
                fileName: 'index_1',
                id: id,
            }, {
                name: '˫�з��',
                childElement: "",
                childIndexElement: " .tpl-component-2016-01-09-list-change",
                classStyle: 'tpl-component-2016-01-09-list-style',
                url: serverPath + '/images/locallTwo.png',
                className: 'tpl-component-2016-01-09-list-style2',
                fileName: 'index_2',
                id: id,

            }, {
                name: '���з��',
                childElement: "",
                childIndexElement: " .tpl-component-2016-01-09-list-change",
                classStyle: 'tpl-component-2016-01-09-list-style',
                url: serverPath + '/images/locallThree.png',
                className: 'tpl-component-2016-01-09-list-style3',
                fileName: 'index_3',
                id: id,

            }];
        function callback(json, type, index, hiddenCb) {
            // ϵͳ���
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
                // �û����
                var styleId = json[index].id;
                var id = selectedElementInfo.get("id");
                var componentClass = $('#' + id).attr('class').split(' ')[0];
                $.tplCustomerStyle.changeStyle(styleId, id, componentClass, '', hiddenCb);
                $("." + id + "_savecoustomFg").val(index);
                $("." + id + "_saveSystemFg").val("");
            }
        }
        // �������ݻص�
        var hiddenCb = $.tplComponentListListSetting.readHiddenInfo;
        // ���ݱ���ķ������
        var saveCoustomFg = "";
        var saveSystemFg = "";
        saveCoustomFg = $("." + id + "_savecoustomFg").val() === "" ? "" : $("." + id + "_savecoustomFg").val() * 1;
        saveSystemFg = $("." + id + "_saveSystemFg").val() === "" ? "" : saveSystemFg = $("." + id + "_saveSystemFg").val() * 1;
        var targetFg = {
            saveSystemFg: saveSystemFg,
            saveCoustomFg: saveCoustomFg
        };
        /**
         * ��ʼ������
         * @param  {[type]} arr       ������Դ
         * @param  {[Boolean]} isSystem       �Ƿ���ϵͳ���
         * @param  {Ҫ���õ�λ��} targetBox [description]
         * @param  {callback} cb [���ȷ����ʱ��ѡ����Ļص�����]
         * @param  {callback} hiddenCb [���ȷ��֮�� ͨ���ص�����cb������hiddenCb ������config�е�ֵ]
         * @param  {Number} targetFg [���ݱ���ķ��]
         * @return {[type]}           [description]
         */
        // ��ʼ��ϵͳ����������Դ
        counstomStyle.init(jsonData, 1, callback, hiddenCb, targetFg, "����б�");

        // ������е��û�����������Դ
        var sqluserArr = counstomStyle.getUserStyleData('tpl-component-2016-01-09-list');
        counstomStyle.formatUserarr(sqluserArr.innerStyleByClassName, function(userarr) {
            // ��ʼ���û����
            counstomStyle.init(userarr, 0, callback, hiddenCb, targetFg);
        });
        // ������ý���
        $("input").on("focus", function(e) {
            $(this)[0].select();
        });
        //����հ׹رյ���
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
            // ����Ч��
            var playValue = $.tplComponentListSetting.hdBtn("titleShow",this)

            $("." + id + "_titleShowOrHide").val(playValue)
            // ����ѭ������
            $.tplComponentListSetting.setTitleShowOrHide(playValue)
        });
        $(".section-tab-box .titleNameShow").off('click').on('click', function() {
            // ����Ч��
            var playValue = $.tplComponentListSetting.hdBtn("titleNameShow",this)

            $("." + id + "_titleNameShowOrHide").val(playValue)
            // ����ѭ������
            $.tplComponentListSetting.setTitleNameShowOrHide(playValue)
        });

        //������ק�ı��С
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
        //���ü����ƶ��¼�
        $.tplComponentMove.initMoveComponent(id,
            function(left){
                $('#tpl-component-2016-01-09-listMarginLeft').val(left);
                $('#tpl-component-2016-01-09-listMarginLeft').trigger('blur');
            },function(top){
                $('#tpl-component-2016-01-09-listMarginTop').val(top);
                $('#tpl-component-2016-01-09-listMarginTop').trigger('blur');
            })
        //���������϶�
        $.dragResizeInitInfo.getCallBack(function(marginLeft,marginTop){
            $('#tpl-component-2016-01-09-listMarginLeft').val(marginLeft);
            $('#tpl-component-2016-01-09-listMarginLeft').trigger('blur');
            $('#tpl-component-2016-01-09-listMarginTop').val(marginTop);
            $('#tpl-component-2016-01-09-listMarginTop').trigger('blur');
        });
        // �������ê���Ҽ��˵�ͨ��������߲��ֵ�������
        $.customMenu.init(id);
    };
});
$(function(){
    try {
        /****************��������***********************/
        //7���ı�ʱ�����ʾ״̬
        $.tplComponentListListSetting.readHiddenInfo()
    }catch(e){
    }

})