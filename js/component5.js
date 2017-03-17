/*
*author:ywy
 */
(function($){
    $.tplComponentErwm = {
        
    };
})($);
(function($){
    $.tplComponentErwmSetting = {
        //���ͼƬ
        addPic: function (link,imgPath,imgName) {
                var id = selectedElementInfo.get('id');
                if($("#" + id + " .picturegroup #erwm").length>=1){
                    return;
                }else{
                    $("#" + id + " .picturegroup").show();
                    $("#" + id + " .erwm-icon-bg").hide();
                    if(link==""){
                        link ="javascript:;";
                    }
                    var imgHtml= '<div id="erwm">'
                        imgHtml +=      '<i class="erwmClose" onclick="$.tplComponentErwmSetting.closeButton();"></i>';
                        imgHtml +=      '<ul class="picture-holder">';
                        imgHtml +=          '<li class="erwm">';
                        imgHtml +=              '<a href="'+link+'"><img id="imgId" src="' + imgPath + '"></img></a>';
                        imgHtml +=              '<span class="bottomContent"  onclick="CKEDITORHandler.tplEditSelectedContent(\'\',selectedElementInfo,\' li.erwm .bottomContent\')">���ı�</span>';
                        imgHtml +=          '</li>';
                        imgHtml +=      '</ul>';
                        imgHtml += '</div>';
                    $("#" + id + " .picturegroup").append(imgHtml);

                    $("#" + id + " #imgId").load(function(){
                        var baseWidth = this.width;
                        var baseHeight = this.height;
                        $("#" + id + " .picturegroup #erwm").width(baseWidth);
                        $("#" + id + " .picturegroup #erwm").height(baseHeight);
                        $.common.removeGeneratedCss(id,"","width");
                        var styleCss = $("#generatedCss").text();
                        //4��������ͨ�����������ʱ���ɵ�����ֵ
                        var styleText = "#" + id + "{width:" + baseWidth + "px;}";
                        styleCss += "\r\n" + styleText;
                        $("#generatedCss").text(styleCss);
                        $("." + id + "_width").val(baseWidth);
                        $("#width").val(baseWidth + ' px');
                        $("." + id + "_erwmHeight").val(baseHeight);
                        $("#erwmHeight").val(baseHeight + ' px');
                    });
                    $("." + id + "_imgInfo").val($('#picInfo').html());
                }
        },
        /**
         *�ж�һ���ַ��������Ƿ�Ϊ��
         * �����Ϊ�գ�����true
         * ���Ϊ��:����false
         */
        isNotBlank:function(variable){
            return (variable != null && typeof(variable) != "undefined" && variable != undefined && variable != "") ? true : false;
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
        replaceAll:function(str1,str2,str3) {
            var newStr  = str1;
            if(this.isNotBlank(str1)) {
                //����gm�е�g��ʾ"ִ��ȫ��ƥ��(��������ƥ��������ҵ���һ��ƥ���ֹͣ)"
                //����gm�е�m��ʾִ�ж���ƥ��
                newStr = str1.replace(new RegExp(str2,"gm"),str3);
            }
            return newStr;
        },
        /**
         * �����ʽ
         */
        removeCss:function(id,childPathOfSelectedElement,cssType){
            //�滻ԭ����css��ʽ
            var oldStyleCss = $("#generatedCss").html().replace(
                new RegExp("#"+ id + childPathOfSelectedElement + ".*?{.*"+cssType+".*?}"),"");

            oldStyleCss = this.replaceAll(oldStyleCss,"\r\n","");

            $("#generatedCss").text(oldStyleCss);
        },
        /**
         * ��������ֵ�����ַ�ʽ�����������������У�px,em,%��"���"�����
         */
        handleInputValue:function(obj,size){
            //�Ȼ�õ�λ
            var unit = $(obj).attr("unit");
            //�жϻ�ȡ����ֵ���Ƿ��������λ������в�����ӣ����û��ֱ����ӵ�λ
            if(size.indexOf(unit) != -1) {
                size = size
            }else{
                size = size + unit;
            }

            //ȥ��size����ֵ�͵�λ�Ŀո�,�������˼�ǽ�size�е�����" "����""
            return this.replaceAll(size," ","");
        },
        //���ÿ��
        setWidth: function(selectedElementInfo,childPathOfSelectedElement,childPathOfSelectedElement2,obj,storeAddreee){
            try{
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var width = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if(!this.isNotBlank(width)) return;
                //��������С

                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"width");
                $.common.removeGeneratedCss(id,childPathOfSelectedElement2,"width");

                if(width){
                    width = width.replace(/\s+/g,"");
                    if(width.indexOf("px")==-1){
                        width = width + "px";
                    }
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{width:" + width + "}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    styleText = "#" + id + childPathOfSelectedElement2 + "{width:" + width + "}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + storeAddreee).val(width);
                /*��һ������һ��*/
                if($('#'+id).children('.resize-cover').length===0)
                    $.common.regain();
            }catch(e){
            }
        },
        /**
         * �洢���߳�ʼ�����
         */
        storeAndInitWidth:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ�Ŀ��
            var width = $("." + id + "_width").val();


            //���ÿ��
            $("#width").val(width);
        },
        storeAndInitPicWidth:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ�Ŀ��
            var picWidth = $("." + id + "_picWidth").val();


            //���ÿ��
            $("#picWidth").val(picWidth);
        },
        //���ø߶�
        setHeight: function(selectedElementInfo,childPathOfSelectedElement,obj,storeAdress){
            try{
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var height = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if(!height) return;
                //��������С

                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"height");

                if(height){
                    height = height.replace(" ","");
                    if(height.indexOf("px")===-1){
                        height = height + "px";
                    }
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{height:" + height + "}";

                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + storeAdress).val(height);
                /*��һ������һ��*/
                if($('#'+id).children('.resize-cover').length===0)
                    $.common.regain();
            }catch(e){
            }
        },
        /**
         * �洢���߳�ʼ���߶�
         */
        storeAndInitHeight:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ�ĸ߶�
            var height = $("." + id + "_height").val();
            //���ø߶�
            $("#height").val(height);
        },
        storeAndInitErwmHeight:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ�ĸ߶�
            var height = $("." + id + "_erwmHeight").val();
            //���ø߶�
            $("#erwmHeight").val(height);
        },
        storeAndInitPicHeight:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ�ĸ߶�
            var picHeight = $("." + id + "_picHeight").val();
            //���ø߶�
            $("#picHeight").val(picHeight);
        },
        //���ö��뷽ʽ
        setAlign : function(obj) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                var align = $(obj).attr('value');
                var bodyWidth = $("#workspace-body").width();
                var componentWidth = $("#" + id).width();
                var marginLeft = bodyWidth - componentWidth;
                $.common.removeGeneratedCss(id,"","margin-left");
                $.common.removeGeneratedCss(id,"","margin-right");
                if(align==='left'){
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + "{margin-right: "+ marginLeft +"px}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("#tpl-sidebar-2016-04-11-marginRight").val(marginLeft+"px");
                    $("." + id + "_marginRight").val(marginLeft+"px");
                    $("#tpl-sidebar-2016-04-11-marginLeft").val("0 px");
                    $("." + id + "_marginLeft").val("0 px");
                }else if(align==='center'){
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + "{margin-left: auto}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    styleText = "#" + id + "{margin-right: auto}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("#tpl-sidebar-2016-04-11-marginRight").val(marginLeft/2+"px");
                    $("#tpl-sidebar-2016-04-11-marginLeft").val(marginLeft/2+"px");
                    $("." + id + "_marginRight").val(marginLeft/2+"px");
                    $("." + id + "_marginLeft").val(marginLeft/2+"px");
                }else if(align==='right'){
                    if($("#" + id + " .erwmClose").length>0){
                        var styleCss = $("#generatedCss").text();
                        //4��������ͨ�����������ʱ���ɵ�����ֵ
                        var styleText = "#" + id + "{margin-left: "+ marginLeft +"px}";
                        //5���滻���������ƴ��
                        styleCss += "\r\n" + styleText;
                        $("#generatedCss").text(styleCss);
                        $("#tpl-sidebar-2016-04-11-marginLeft").val(marginLeft+"px");
                        $("." + id + "_marginLeft").val(marginLeft+"px");
                        $("#tpl-sidebar-2016-04-11-marginRight").val("20 px");
                        $("." + id + "_marginRight").val("20 px");
                    }else{
                        var styleCss = $("#generatedCss").text();
                        //4��������ͨ�����������ʱ���ɵ�����ֵ
                        var styleText = "#" + id + "{margin-left: "+ marginLeft +"px}";
                        //5���滻���������ƴ��
                        styleCss += "\r\n" + styleText;
                        $("#generatedCss").text(styleCss);
                        $("#tpl-sidebar-2016-04-11-marginLeft").val(marginLeft+"px");
                        $("." + id + "_marginLeft").val(marginLeft+"px");
                        $("#tpl-sidebar-2016-04-11-marginRight").val("0 px");
                        $("." + id + "_marginRight").val("0 px");
                    }
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
        storeAndInitAlign:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var align = $.trim($("." + id + "_align").val());
            $("#tpl-sidebar-2016-04-11-align div").removeClass("active");
            if(align == "left") {
                $("#tpl-sidebar-2016-04-11-align div").eq(0).addClass("active");
            } else if(align == "center") {
                $("#tpl-sidebar-2016-04-11-align div").eq(1).addClass("active");
            } else if(align == "right") {
                $("#tpl-sidebar-2016-04-11-align div").eq(2).addClass("active");
            }
        },
        //�����ֲ���ֱ����
        setVerticalAlign:function(type){
            try{
                var id = selectedElementInfo.get("id");
                $.common.removeGeneratedCss(id,"",type);
                var pHeight = $("#"+id).parent().height();
                var cHeight = $("#"+id).height();
                var height = pHeight-cHeight;
                if(type == "top"){
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + "{margin-top: 0px}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = 0 + 'px';
                    $("#tpl-sidebar-2016-04-11-marginTop").val(marginTop);
                    $("." + id + "_marginTop").val(marginTop);
                }
                else if(type == "middle"){
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + "{margin-top: "+ height / 2 +"px}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = height / 2 + 'px';
                    $("#tpl-sidebar-2016-04-11-marginTop").val(marginTop);
                    $("." + id + "_marginTop").val(marginTop);
                }
                else if(type == "bottom"){
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + "{margin-top: "+ height +"px}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = height + 'px';
                    $("#tpl-sidebar-2016-04-11-marginTop").val(marginTop);
                    $("." + id + "_marginTop").val(marginTop);
                }
                $('.' + id + '_verticalAlign').val(type);

                /*��һ������һ��*/
                $.common.regain();
            }catch(e){
            }
        },
        /**
         * �洢���߳�ʼ��ˮƽλ��
         */
        storeAndInitVerticalAlign:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var verticalAlign = $.trim($("." + id + "_verticalAlign").val());
            $("#tpl-sidebar-2016-04-11-verticalAlign div").removeClass("active");
            if(verticalAlign == "top") {
                $("#tpl-sidebar-2016-04-11-verticalAlign div").eq(0).addClass("active");
            } else if(verticalAlign == "middle") {
                $("#tpl-sidebar-2016-04-11-verticalAlign div").eq(1).addClass("active");
            } else if(verticalAlign == "bottom") {
                $("#tpl-sidebar-2016-04-11-verticalAlign div").eq(2).addClass("active");
            }
        },
        /**
         * �洢�ͳ�ʼ��margin��padding
         */
        storeAndInitMarginAndPadding:function(){
            //��õ�ǰ��ѡ�е�Ԫ�ص�id
            var id = selectedElementInfo.get("id");
            //�����Ŀ���õ�margin-top
            var marginTop = $("." + id + "_marginTop").val();
            $("#tpl-sidebar-2016-04-11-marginTop").val(marginTop);
            //�����Ŀ���õ�margin-bottom
            var marginBottom = $("." + id + "_marginBottom").val();
            $("#tpl-sidebar-2016-04-11-marginBottom").val(marginBottom);
            //�����Ŀ���õ�margin-left
            var marginLeftVal = $("." + id + "_marginLeft").val();
            $("#tpl-sidebar-2016-04-11-marginLeft").val(marginLeftVal);
            //�����Ŀ���õ�margin-right
            var marginRight = $("." + id + "_marginRight").val();
            $("#tpl-sidebar-2016-04-11-marginRight").val(marginRight);
            //�����Ŀ���õ�margin-top
            var picMarginTop = $("." + id + "_picMarginTop").val();
            $("#tpl-sidebar-2016-04-11-picMarginTop").val(picMarginTop);
            //�����Ŀ���õ�margin-bottom
            var picMarginBottom = $("." + id + "_picMarginBottom").val();
            $("#tpl-sidebar-2016-04-11-picMarginBottom").val(picMarginBottom);
            //�����Ŀ���õ�margin-left
            var picPaddingLeft = $("." + id + "_picMarginLeft").val();
            $("#tpl-sidebar-2016-04-11-picPaddingLeft").val(picPaddingLeft);
            //�����Ŀ���õ�margin-right
            var picMarginRight = $("." + id + "_picMarginRight").val();
            $("#tpl-sidebar-2016-04-11-picMarginRight").val(picMarginRight);
            //�����Ŀ���õ�padding-right
            var picMarginRight = $("." + id + "_picPaddingRight").val();
            $("#tpl-sidebar-2016-04-11-paddingRight").val(picMarginRight);
            //�����Ŀ���õ�padding-top
            var picPaddingTop = $("." + id + "_picPaddingTop").val();
            $("#tpl-sidebar-2016-04-11-paddingTop").val(picPaddingTop);
            //�����Ŀ���õ�padding-left
            var picPaddingLeft = $("." + id + "_picPaddingLeft").val();
            $("#tpl-sidebar-2016-04-11-paddingLeft").val(picPaddingLeft);
            //�����Ŀ���õ�padding-bottom
            var picPaddingBottom = $("." + id + "_picPaddingBottom").val();
            $("#tpl-sidebar-2016-04-11-paddingBottom").val(picPaddingBottom);
            //������ı���padding-right
            var bottomContentPaddingRight = $("." + id + "_bottomContentPaddingRight").val();
            $("#tpl-sidebar-2016-04-11-bottomContentPaddingRight").val(bottomContentPaddingRight);
            //������ı���padding-left
            var bottomContentPaddingLeft = $("." + id + "_bottomContentPaddingLeft").val();
            $("#tpl-sidebar-2016-04-11-bottomContentPaddingLeft").val(bottomContentPaddingLeft);
            //������ı���margin-top
            var bottomContentMarginTop = $("." + id + "_bottomContentMarginTop").val();
            $("#tpl-sidebar-2016-04-11-bottomContentMarginTop").val(bottomContentMarginTop);
            //������ı���margin-bottom
            var bottomContentMarginBottom = $("." + id + "_bottomContentMarginBottom").val();
            $("#tpl-sidebar-2016-04-11-bottomContentMarginBottom").val(bottomContentMarginBottom);
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
        setMarginAndPadding:function(selectedElementInfo,childPathOfSelectedElement,cssType,classSuffix,obj) {
            //��õ�ǰ��ѡ�е�Ԫ�ص�id
            var id = selectedElementInfo.get("id");
            if(cssType == 'margin-left' || cssType == 'margin-right'){
                $("." + id + "_align").val("");
                $("#tpl-sidebar-2016-04-11-align div").removeClass("active");
            }else if(cssType == 'margin-top' || cssType == 'margin-bottom'){
                $("." + id + "_verticalAlign").val("");
                $("#tpl-sidebar-2016-04-11-verticalAlign div").removeClass("active");
            }
            //��õ�ǰ��д�ĸ߶�ֵ
            var inputValue = $.trim($(obj).val());

            //�����Ŀ���Ϊ�գ�ֱ�ӷ���
            if(!this.isNotBlank(inputValue)) return;
            if(inputValue.indexOf(' px') != -1){
                inputValue = inputValue.replace(' px', '');
            }

            //ɾ��֮ǰ���õĲ���ֵ
            $.common.removeGeneratedCss(id,childPathOfSelectedElement,cssType);
            //���ò���ֵ
            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":" + inputValue + "px}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);

            //����Ԫ�ص��ظ�����
            $("." + id + classSuffix).val(inputValue);
            /*��һ������һ��*/
            $.common.regain();
        },
        /**
         * ���ñ߿�ķ��
         */
        storeAndIniterwmBorderStyle:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ�ı߿���
            var borderStyle = $.trim($("." + id + "_erwmBorderStyle").val());
            //�Ƴ����е�ѡ��״̬
            $("#tpl-component-2016-04-11-erwm-erwmBorderStyle li").removeClass("active");

            if(this.isNotBlank(borderStyle)) {
                //����ѡ��״̬
                $("#tpl-component-2016-04-11-erwm-erwmBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },
        storeAndIniterwmPicBorderStyle:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ�ı߿���
            var borderStyle = $.trim($("." + id + "_erwmPicBorderStyle").val());
            //�Ƴ����е�ѡ��״̬
            $("#tpl-component-2016-04-11-erwm-erwmPicBorderStyle li").removeClass("active");

            if(this.isNotBlank(borderStyle)) {
                //����ѡ��״̬
                $("#tpl-component-2016-04-11-erwm-erwmPicBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },
        /**
         * ���ñ߿�ķ��
         */
        setBorderStyle:function(selectedElementInfo,childPathOfSelectedElement,obj,storeAdress){
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var borderStyle = $.trim($(obj).find("i").eq(0).attr("class"));
                //�����д�������ǿյģ�ֱ�ӷ���
                if(!this.isNotBlank(borderStyle)) return;

                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"border-style");
                if(borderStyle){
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-style:" + borderStyle + " !important;}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + storeAdress).val(borderStyle);
                /*��һ������һ��*/
                $.common.regain();
            } catch(e) {
            }
        },
        /**
         * �洢�ͳ�ʼ����Щ���ⱻѡ����
         */
        storeAndInitErwmBorderSelected:function(){
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderSelected = $.trim($("." + id + "_erwmBorderSelected").val());
            var array = borderSelected.split("_");
            for(var index = 0; index < array.length; ++index) {
                //��ʾindex��ʾ�����û�б�ѡ�У�������"active״̬"
                if(array[index] == "0")
                {
                    $("#tpl-component-2016-04-11-erwm-erwmBorderSelected div").eq(index).removeClass("active");
                }
                //���ֵΪ"1",��ʾindex��ʾ�������ѡ���ˣ�����"active"״̬
                else
                {
                    $("#tpl-component-2016-04-11-erwm-erwmBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        storeAndInitErwmPicBorderSelected:function(){
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderSelected = $.trim($("." + id + "_erwmPicBorderSelected").val());
            var array = borderSelected.split("_");
            for(var index = 0; index < array.length; ++index) {
                //��ʾindex��ʾ�����û�б�ѡ�У�������"active״̬"
                if(array[index] == "0")
                {
                    $("#tpl-component-2016-04-11-erwm-erwmPicBorderSelected div").eq(index).removeClass("active");
                }
                //���ֵΪ"1",��ʾindex��ʾ�������ѡ���ˣ�����"active"״̬
                else
                {
                    $("#tpl-component-2016-04-11-erwm-erwmPicBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        /**
         * ����ѡ�еı߿�
         */
        setBorderSelected:function(selectedElementInfo,childPathOfSelectedElement,obj,storeAddress){
            try {
                var cssType = "";

                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var index = parseInt($.trim($(obj).attr("index")));
                //��ʾ�����ϱ߿�
                if(index == 1) {
                    cssType = "border-top";
                }
                //��ʾ�����±߿�
                else if(index == 3) {
                    cssType = "border-bottom";
                }
                //��ʾ������߿�
                else if(index == 5) {
                    cssType = "border-left";
                }
                //��ʾ�����ұ߿�
                else if(index == 7) {
                    cssType = "border-right";
                }

                //����Ѿ��Ǳ�ѡ�У������ʱ���ʾ������û�б߿�
                if($(obj).hasClass("active")) {
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":0px none !important;}";

                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    var borderSelected = $("." + id + "_erwmBorderSelected").val();
                    var newborderSelected = "";
                    for(var i = 0;i < borderSelected.length; i++) {
                        if(i == (index - 1)) {
                            newborderSelected += "0";
                        } else {
                            newborderSelected += borderSelected[i];
                        }
                    }

                    $("." + id + storeAddress).val(newborderSelected);
                }
                //�����ʼû��ѡ��
                else {
                    $.common.removeGeneratedCss(id,childPathOfSelectedElement,cssType);

                    var borderSelected = $("." + id + storeAddress).val();
                    var newborderSelected = "";
                    for(var i = 0;i < borderSelected.length; i++) {
                        if(i == (index - 1)) {
                            newborderSelected += "1";
                        } else {
                            newborderSelected += borderSelected[i];
                        }
                    }

                    $("." + id + storeAddress).val(newborderSelected);
                }
                /*��һ������һ��*/
                $.common.regain();
            } catch(e) {
            }
        },
        /**
         * �洢���߳�ʼ���߿����ɫ
         */
        storeAndInitErwmBorderColor:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var erwmBorderColor = $.trim($("." + id + "_erwmBorderColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-04-11-erwm-erwmBorderColor",erwmBorderColor);
        },
        storeAndInitErwmPicBorderColor:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var erwmBorderColor = $.trim($("." + id + "_erwmPicBorderColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-04-11-erwm-erwmPicBorderColor",erwmBorderColor);
        },

        /**
         * ���ñ߿����ɫ
         * selectedElementInfo        :��ʾ��ѡ�е�Ԫ��ֵ
         * childPathOfSelectedElement :��ʾ����
         */
        setBorderColor:function(selectedElementInfo,childPathOfSelectedElement,color,storeAdress){
            try{
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"border-color");

                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText ="#"+ id + childPathOfSelectedElement + "{border-color:" + color + " !important;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;

                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                $("." + id + storeAdress).val(color);
                /*��һ������һ��*/
                $.common.regain();
            }catch(e){
            }
        },
        /**
         * �洢���߳�ʼ���߿�Ŀ��
         */
        storeAndInitErwmBorderWidth:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderWidth = $("." + id + "_erwmBorderWidth").val();
            //��������
            $("#tpl-component-2016-04-11-erwm-erwmBorderWidth").val(borderWidth);
        },
        storeAndInitErwmPicBorderWidth:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var borderWidth = $("." + id + "_erwmPicBorderWidth").val();
            //��������
            $("#tpl-component-2016-04-11-erwm-erwmPicBorderWidth").val(borderWidth);
        },
        /**
         * ���ñ߿�Ŀ�ȣ���ϸ��
         */
        setBorderWidth:function(selectedElementInfo,childPathOfSelectedElement,obj,storeAdress,storeSelectAdress){
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var borderWidth = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if(!this.isNotBlank(borderWidth)) return;
                //��������С
                borderWidth = this.handleInputValue(obj,borderWidth);
                //�Ƴ�ԭ���������Сcss
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"border-width");
                if(borderWidth){
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-width:" + borderWidth + " !important;}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + storeAdress).val(borderWidth);

                $("#tpl-component-2016-04-11-erwm-erwmBorderSelected div").addClass("active");
                $("." + id + storeSelectAdress).val("1_1_1_1");
                /*��һ������һ��*/
                $.common.regain();
            } catch(e) {
            }
        },

        /**
         * �洢���߳�ʼ�����屳������ɫ
         */
        storeAndInitErwmBottomContentBgColor:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var bottomContentBgColor = $.trim($("." + id + "_bottomContentBgColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            initColor("tpl-component-2016-04-11-erwm-erwmBottomContentBackgroundColor",bottomContentBgColor);
        },
        /**
         * ���ñ�����ɫ
         * selectedElementInfo        :��ʾ��ѡ�е�Ԫ��ֵ
         * childPathOfSelectedElement :��ʾ����
         */
        setBgColor:function(selectedElementInfo,childPathOfSelectedElement,color,storeAdress){
            try{
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"background-color");

                var styleCss = $("#generatedCss").text();//��ȡ���е���ʽ
                var styleText ="#"+ id + childPathOfSelectedElement + "{background-color:" + color + " !important;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;

                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

                $("." + id + storeAdress).val(color);
                /*��һ������һ��*/
                $.common.regain();
            }catch(e){
            }
        },
        /**
         * �洢���ʼ���б�����Ķ��뷽ʽ
         */
        storeAndInitErwmTextAlign:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var textAlign = $.trim($("." + id + "_titleTextAlign").val());
            $("#tpl-component-2016-04-11-erwm-titleTextAlign div").removeClass("active");
            if(textAlign == "left") {
                $("#tpl-component-2016-04-11-erwm-titleTextAlign div").eq(0).addClass("active");
            } else if(textAlign == "center") {
                $("#tpl-component-2016-04-11-erwm-titleTextAlign div").eq(1).addClass("active");
            } else if(textAlign == "right") {
                $("#tpl-component-2016-04-11-erwm-titleTextAlign div").eq(2).addClass("active");
            }
        },
        //�������ı�ˮƽ����
        storeAndIniterwmContentTextAlign:function(){
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var textAlign = $.trim($("." + id + "_contentTextAlign").val());
            $("#tpl-component-2016-04-11-erwm-contentTextAlign div").removeClass("active");
            if(textAlign == "left") {
                $("#tpl-component-2016-04-11-erwm-contentTextAlign div").eq(0).addClass("active");
            } else if(textAlign == "center") {
                $("#tpl-component-2016-04-11-erwm-contentTextAlign div").eq(1).addClass("active");
            } else if(textAlign == "right") {
                $("#tpl-component-2016-04-11-erwm-contentTextAlign div").eq(2).addClass("active");
            }
        },
        //�����Ƿ�����
        setShowOrHide:function(){
            var id = selectedElementInfo.get("id");
            var value = null;
            $('#btnShow').on('click',function(){
                value = "show";
                $('#btnShow').addClass("active");
                $('#btnHide').removeClass("active");
                $('<i class="erwmClose" onclick="$.tplComponentErwmSetting.closeButton();"></i>').insertBefore($("#"+id+" #erwm .picture-holder"));
                $("." + id + "_showorhide").val(value);
                /*��һ������һ��*/
                $.common.regain();
            });
            $('#btnHide').on('click',function(){
                value = "hide";
                $('#btnShow').removeClass("active");
                $('#btnHide').addClass("active");
                $("#" + id + " .picturegroup .erwmClose").remove();
                $("." + id + "_showorhide").val(value);
                /*��һ������һ��*/
                $.common.regain();
            });
        },
        //�����Ƿ�����
        storeShowOrHide:function(){
            var id = selectedElementInfo.get("id");
            var value = $.trim($("." + id + "_showorhide").val());
            $("#tpl-sidebar-2016-04-11-btn button").removeClass("active");
            if(value == "show") {
                $("#tpl-sidebar-2016-04-11-btn button").eq(0).addClass("active");
            } else if(value == "hide") {
                $("#tpl-sidebar-2016-04-11-btn button").eq(1).addClass("active");
            }
        },
        //�رհ�ť
        closeButton:function(){
            var id = selectedElementInfo.get("id");
            $("#" + id + " .picturegroup #erwm").hide();
            $("#" + id + " .picturegroup").hide();
            //$("#" + id + " .erwm-icon-bg").show();

        },
        //�����������
        setLinkButton:function(target){
            var id = selectedElementInfo.get('id');
            $("#" + id + " .picture-holder a").attr("target",target);
            $("." + id + "_linkBtn").val(target);
            $.common.regain();
        },
        //������ӵ�����
        storeLinkButton:function(){
            var id = selectedElementInfo.get('id');
            $('#linkTarget .component-radio .radio-checked').removeClass('active');
            $('#linkTarget .component-radio[_target="' + $("." + id + "_linkBtn").val() + '"] .radio-checked').addClass('active');
        },
        //���������Ƿ����
        setBottomContentShowOrHide:function(){
            var id = selectedElementInfo.get("id");
            var value = null;
            $('#erwmBottomContentShow').click(function(){
                value = "show";
                $('#erwmBottomContentShow').addClass("active");
                $('#erwmBottomContentHide').removeClass("active");
                var contentWidth =  $("#" + id + " .picturegroup .picture-holder li img").width();
                $.common.removeGeneratedCss(id," .picture-holder li span.bottomContent","display");
                $.common.removeGeneratedCss(id," .picturegroup .picture-holder li .bottomContent","width");
                var styleCss = $("#generatedCss").text();
                //4��������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + " .picture-holder li span.bottomContent" + "{display: block;}";
                //5���滻���������ƴ��
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .picturegroup .picture-holder li .bottomContent" + "{width: "+contentWidth+"}";
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                $("." + id + "_bottomcontentshoworhide").val(value);
                /*��һ������һ��*/
                $.common.regain();
            });
            $('#erwmBottomContentHide').click(function(){
                value = "hide";
                $('#erwmBottomContentShow').removeClass("active");
                $('#erwmBottomContentHide').addClass("active");
                $.common.removeGeneratedCss(id," .picture-holder li span.bottomContent","display");
                var styleCss = $("#generatedCss").text();
                //4��������ͨ�����������ʱ���ɵ�����ֵ
                var styleText = "#" + id + " .picture-holder li span.bottomContent" + "{display: none;}";
                //5���滻���������ƴ��
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                $("." + id + "_bottomcontentshoworhide").val(value);
                /*��һ������һ��*/
                $.common.regain();
            });
        },
        //���������Ƿ���ʾ
        storeBottomContentShowOrHide:function(){
            var id = selectedElementInfo.get("id");
            var value = $.trim($("." + id + "_bottomcontentshoworhide").val());
            $("#tpl-sidebar-2016-06-06-erwmBottomContentBtn button").removeClass("active");
            if(value == "show") {
                $("#tpl-sidebar-2016-06-06-erwmBottomContentBtn button").eq(1).addClass("active");
            } else if(value == "hide") {
                $("#tpl-sidebar-2016-06-06-erwmBottomContentBtn button").eq(0).addClass("active");
            }
        },
        readHiddenInfo: function () {
            //�洢�ͳ�ʼ�����
            $.tplComponentErwmSetting.storeAndInitWidth();
            $.tplComponentErwmSetting.storeAndInitPicWidth();

            //�洢�ͳ�ʼ���߶�
            $.tplComponentErwmSetting.storeAndInitHeight();
            $.tplComponentErwmSetting.storeAndInitErwmHeight();
            $.tplComponentErwmSetting.storeAndInitPicHeight();

            //�洢�ͳ�ʼ��MarginAndPadding
            $.tplComponentErwmSetting.storeAndInitMarginAndPadding();

            //�洢�ͳ�ʼ���߿���
            $.tplComponentErwmSetting.storeAndIniterwmBorderStyle();
            $.tplComponentErwmSetting.storeAndIniterwmPicBorderStyle();

            //�洢�ͳ�ʼ���߿���
            $.tplComponentErwmSetting.storeAndInitErwmBorderWidth();
            $.tplComponentErwmSetting.storeAndInitErwmPicBorderWidth();

            //�洢�ͳ�ʼ���߿�ѡ��
            $.tplComponentErwmSetting.storeAndInitErwmBorderSelected();
            $.tplComponentErwmSetting.storeAndInitErwmPicBorderSelected();

            //�洢�ͳ�ʼ���߿���ɫ
            $.tplComponentErwmSetting.storeAndInitErwmBorderColor();
            $.tplComponentErwmSetting.storeAndInitErwmPicBorderColor();

            //�洢�ͳ�ʼ�����屳����ɫ
            $.tplComponentErwmSetting.storeAndInitErwmBottomContentBgColor();

            //�洢�ͳ�ʼ��������뷽ʽ
            $.tplComponentErwmSetting.storeAndInitErwmTextAlign();
            $.tplComponentErwmSetting.storeAndIniterwmContentTextAlign();
            $.tplComponentErwmSetting.storeAndInitAlign();
            $.tplComponentErwmSetting.storeAndInitVerticalAlign();
            $.tplComponentErwmSetting.storeShowOrHide();
            $.tplComponentErwmSetting.setShowOrHide();
            //$.tplComponentErwmSetting.setLinkButton();
            $.tplComponentErwmSetting.storeLinkButton();
            $.tplComponentErwmSetting.setBottomContentShowOrHide();
            $.tplComponentErwmSetting.storeBottomContentShowOrHide();
        }
    };
})($);
//������ɫ
var per=[["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(153, 153, 153)","rgb(183, 183, 183)",
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
function initColor(colorPickerId,color){
    $("#"+colorPickerId).spectrum({
        allowEmpty:true,
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
            if(colorPickerId == "tpl-component-2016-04-11-erwm-erwmBorderColor"){
                $.tplComponentErwmSetting.setBorderColor(selectedElementInfo,' .picturegroup',color,'_erwmBorderColor');
            }else if(colorPickerId == "tpl-component-2016-04-11-erwm-erwmPicBorderColor"){
                $.tplComponentErwmSetting.setBorderColor(selectedElementInfo,' .picturegroup #erwm',color,'_erwmPicBorderColor');
            }else if(colorPickerId == "tpl-component-2016-04-11-erwm-erwmBottomContentBackgroundColor"){
                $.tplComponentErwmSetting.setBgColor(selectedElementInfo,' .bottomContent',color,'_bottomContentBgColor');
            }

            $("#" + colorPickerId).val(color);
        },
        change: function (color) {
            //�����ǵ�ѡ������ɫѡ�����е���ɫ֮��ִ�еĲ���

            //�����id��ʾ������ɫѡ����Ӧ��id
            if(colorPickerId == "tpl-component-2016-04-11-erwm-erwmBorderColor"){
                $.tplComponentErwmSetting.setBorderColor(selectedElementInfo,' .picturegroup',color,'_erwmBorderColor');
            }else if(colorPickerId == "tpl-component-2016-04-11-erwm-erwmPicBorderColor"){
                $.tplComponentErwmSetting.setBorderColor(selectedElementInfo,' .picturegroup #erwm',color,'_erwmPicBorderColor');
            }else if(colorPickerId == "tpl-component-2016-04-11-erwm-erwmBottomContentBackgroundColor"){
                $.tplComponentErwmSetting.setBgColor(selectedElementInfo,' .bottomContent',color,'_bottomContentBgColor');
            }

            $("#" + colorPickerId).val(color);
        },
        palette: per //�����������ɫֵ
    });
}
$(function(){
    try{
        $.tplComponentErwmSetting.readHiddenInfo();
    }catch(e) {
    }

});
$(function() {
    try {
        if ($('head').find('script[name=systemJs]').length > 0) {
            var id = selectedElementInfo.get('id');
            $.common.pictureCarousels.remove(id);
            var pic = $("#" + id).get();

            //���������ʾ
            $(pic).on('mouseenter', {obj: pic}, $.common.mEShowBorder);
            //����Ƴ�����
            $(pic).on('mouseleave', {obj: pic}, $.common.mLHideBorder);
            //�������ʾ
            $(pic).on('click', {obj: pic}, $.common.cShowBorder);

            $('#picInfo').html($('.' + id + '_imgInfo').val());
            $("#erwmBtn").click(function(){
                var val = $("." + id + "_jsonData").val();
                $.dialogUpPic.initDialog(val,"1",function(data){
                    $("#" + id + " .picturegroup #erwm").remove();
                    var path = data.all[0].path;
                    var link = data.all[0].link;
                    var name = data.all[0].name;
                    $.tplComponentErwmSetting.addPic(link,path,name);
                    var value = JSON.stringify(data);
                    $("." + id + "_jsonData").val(value);
                    /*��һ������һ��*/
                    $.common.regain();
                });

            });
            $("#" + id + " #erwmImg").click(function(){
                $("#" + id + " .erwm-pic").css("display","block");
                $("#" + id + " .erwm-pic .erwmClose").click(function(){
                    $("#" + id + " .erwm-pic").css("display","none");
                });
            });

            // ������ÿ�ʼ
            var serverPath = $.common.getComponetIMagesUrl(id);
            var jsonData =  [
                {
                    name: 'Ĭ��',
                    childElement: " #erwm",
                    childIndexElement: " .tpl-component-2016-04-11-erwm-change",
                    classStyle: 'tpl-component-2016-04-11-erwm-style',
                    url: serverPath + '/images/default.png',
                    className: 'tpl-component-2016-04-11-erwm-style1',
                    fileName: 'index_1',
                    id: id,
                }, {
                    name: '�޹رհ�ť',
                    childElement: " #erwm",
                    childIndexElement: " .tpl-component-2016-04-11-erwm-change",
                    classStyle: 'tpl-component-2016-04-11-erwm-style',
                    url: serverPath + '/images/noClose .png',
                    className: 'tpl-component-2016-04-11-erwm-style2',
                    fileName: 'closeBtn',
                    id: id,
                }, {
                    name: '��ʾ���ı�',
                    childElement: " #erwm",
                    childIndexElement: " .tpl-component-2016-04-11-erwm-change",
                    classStyle: 'tpl-component-2016-04-11-erwm-style',
                    url: serverPath + '/images/bottomContent.png',
                    className: 'tpl-component-2016-04-11-erwm-style3',
                    fileName: 'bottomContent',
                    id: id,

                },{
                    name: '�ް�ť��ʾ�ı�',
                    childElement: " #erwm",
                    childIndexElement: " .tpl-component-2016-04-11-erwm-change",
                    classStyle: 'tpl-component-2016-04-11-erwm-style',
                    url: serverPath + '/images/onlyBottom.png',
                    className: 'tpl-component-2016-04-11-erwm-style4',
                    fileName: 'onlyBottomContent',
                    id: id,

                }
            ];
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
            var hiddenCb = $.tplComponentErwmSetting.readHiddenInfo;
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
            counstomStyle.init(jsonData, 1, callback, hiddenCb, targetFg, "��ά��");

            // ������е��û�����������Դ
            var sqluserArr = counstomStyle.getUserStyleData('tpl-component-2016-04-11-erwm');
            counstomStyle.formatUserarr(sqluserArr.innerStyleByClassName, function(userarr) {
                // ��ʼ���û����
                counstomStyle.init(userarr, 0, callback, hiddenCb, targetFg);
            });

            //��ת��ʽ
            $('#linkTarget .component-radio').off('click').on('click', function(event) {
                if (!$(this).children('.radio-checked').hasClass('active')) {
                    $(this).children('.radio-checked').addClass('active');
                    $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
                    $.tplComponentErwmSetting.setLinkButton($(this).attr('_target'));
                }
            });
          
            $('#linkTarget .radio-text').off('click').on('click', function(event) {
                if (!$(this).prev('.component-radio').children('.radio-checked').attr('class') || $(this).prev('.component-radio').children('.radio-checked').attr('class').search(/active/) < 0) {
                    $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
                    $(this).prev('.component-radio').children('.radio-checked').addClass('active');
                    $.tplComponentErwmSetting.setLinkButton($(this).prev('.component-radio').attr('_target'));
                }
            });

            // ������ý���
            $.tplComponentMove.initMoveComponent(id,
                function(left){
                    $('#tpl-sidebar-2016-04-11-marginLeft').val(left);
                    $('#tpl-sidebar-2016-04-11-marginLeft').trigger('blur');
                },function(top){
                    $('#tpl-sidebar-2016-04-11-marginTop').val(top);
                    $('#tpl-sidebar-2016-04-11-marginTop').trigger('blur');
                });
            //���������϶�
            $.dragResizeInitInfo.getCallBack(function(marginLeft){
                $('#tpl-sidebar-2016-04-11-marginLeft').val(marginLeft);
                $('#tpl-sidebar-2016-04-11-marginLeft').trigger('blur');
            },function(marginTop){
                "use strict";
                $('#tpl-sidebar-2016-04-11-marginTop').val(marginTop);
                $('#tpl-sidebar-2016-04-11-marginTop').trigger('blur');
            });
            //���ü����ƶ��¼�
            $.tplComponentMove.initMoveComponent(id,
                function(left){
                    $('#tpl-sidebar-2016-04-11-marginLeft').val(left);
                    $('#tpl-sidebar-2016-04-11-marginLeft').trigger('blur');
                },function(top){
                    $('#tpl-sidebar-2016-04-11-marginTop').val(top);
                    $('#tpl-sidebar-2016-04-11-marginTop').trigger('blur');
                });
            //������ק�ı��С
            // $.tplComponentResize.initResizeComponent(id,
            //     function(width){
            //         $('#width').val(width);
            //         $('#width').trigger('blur');
            //     },
            //     function(left){
            //         $('#tpl-sidebar-2016-04-11-marginLeft').val(left);
            //         $('#tpl-sidebar-2016-04-11-marginLeft').trigger('blur');
            //     },function(height){
            //         $('#erwmHeight').val(height);
            //         $('#erwmHeight').trigger('blur');
            //     },function(top){
            //         $('#tpl-sidebar-2016-04-11-marginTop').val(top);
            //         $('#tpl-sidebar-2016-04-11-marginTop').trigger('blur');
            //     });
            // �������ê���Ҽ��˵�ͨ��������߲��ֵ�������
            $.customMenu.init(id);
        }else {
            var pics = $('.tpl-component-2016-04-11-erwm').get();
            if (pics && pics.length > 0) {
                $.each(pics, function (index, pic) {
                    var id = $(pic).attr("id");
                    $("#" + id + " .erwmClose").click(function () {
                        $("#" + id + " .picturegroup #erwm").hide();
                    });
                });
            }
        }
    }catch(e) {
    }

});