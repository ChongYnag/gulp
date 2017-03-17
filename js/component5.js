/*
*author:ywy
 */
(function($){
    $.tplComponentErwm = {
        
    };
})($);
(function($){
    $.tplComponentErwmSetting = {
        //添加图片
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
                        imgHtml +=              '<span class="bottomContent"  onclick="CKEDITORHandler.tplEditSelectedContent(\'\',selectedElementInfo,\' li.erwm .bottomContent\')">下文本</span>';
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
                        //4、下面是通过这个设置临时生成的属性值
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
         *判断一个字符串变量是否为空
         * 如果不为空：返回true
         * 如果为空:返回false
         */
        isNotBlank:function(variable){
            return (variable != null && typeof(variable) != "undefined" && variable != undefined && variable != "") ? true : false;
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
        replaceAll:function(str1,str2,str3) {
            var newStr  = str1;
            if(this.isNotBlank(str1)) {
                //其中gm中的g表示"执行全局匹配(查找所有匹配而非在找到第一个匹配后停止)"
                //其中gm中的m表示执行多行匹配
                newStr = str1.replace(new RegExp(str2,"gm"),str3);
            }
            return newStr;
        },
        /**
         * 清除样式
         */
        removeCss:function(id,childPathOfSelectedElement,cssType){
            //替换原来的css样式
            var oldStyleCss = $("#generatedCss").html().replace(
                new RegExp("#"+ id + childPathOfSelectedElement + ".*?{.*"+cssType+".*?}"),"");

            oldStyleCss = this.replaceAll(oldStyleCss,"\r\n","");

            $("#generatedCss").text(oldStyleCss);
        },
        /**
         * 处理输入值，这种方式仅仅是针对输入框后带有：px,em,%和"清楚"的情况
         */
        handleInputValue:function(obj,size){
            //先获得单位
            var unit = $(obj).attr("unit");
            //判断获取到的值中是否有这个单位，如果有不再添加；如果没有直接添加单位
            if(size.indexOf(unit) != -1) {
                size = size
            }else{
                size = size + unit;
            }

            //去除size中数值和单位的空格,下面的意思是将size中的所有" "换成""
            return this.replaceAll(size," ","");
        },
        //设置宽度
        setWidth: function(selectedElementInfo,childPathOfSelectedElement,childPathOfSelectedElement2,obj,storeAddreee){
            try{
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var width = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if(!this.isNotBlank(width)) return;
                //获得字体大小

                //移除原来的字体大小css
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"width");
                $.common.removeGeneratedCss(id,childPathOfSelectedElement2,"width");

                if(width){
                    width = width.replace(/\s+/g,"");
                    if(width.indexOf("px")==-1){
                        width = width + "px";
                    }
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{width:" + width + "}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    styleText = "#" + id + childPathOfSelectedElement2 + "{width:" + width + "}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + storeAddreee).val(width);
                /*上一步，下一步*/
                if($('#'+id).children('.resize-cover').length===0)
                    $.common.regain();
            }catch(e){
            }
        },
        /**
         * 存储或者初始化宽度
         */
        storeAndInitWidth:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的宽度
            var width = $("." + id + "_width").val();


            //设置宽度
            $("#width").val(width);
        },
        storeAndInitPicWidth:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的宽度
            var picWidth = $("." + id + "_picWidth").val();


            //设置宽度
            $("#picWidth").val(picWidth);
        },
        //设置高度
        setHeight: function(selectedElementInfo,childPathOfSelectedElement,obj,storeAdress){
            try{
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var height = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if(!height) return;
                //获得字体大小

                //移除原来的字体大小css
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"height");

                if(height){
                    height = height.replace(" ","");
                    if(height.indexOf("px")===-1){
                        height = height + "px";
                    }
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{height:" + height + "}";

                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + storeAdress).val(height);
                /*上一步，下一步*/
                if($('#'+id).children('.resize-cover').length===0)
                    $.common.regain();
            }catch(e){
            }
        },
        /**
         * 存储或者初始化高度
         */
        storeAndInitHeight:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的高度
            var height = $("." + id + "_height").val();
            //设置高度
            $("#height").val(height);
        },
        storeAndInitErwmHeight:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的高度
            var height = $("." + id + "_erwmHeight").val();
            //设置高度
            $("#erwmHeight").val(height);
        },
        storeAndInitPicHeight:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的高度
            var picHeight = $("." + id + "_picHeight").val();
            //设置高度
            $("#picHeight").val(picHeight);
        },
        //设置对齐方式
        setAlign : function(obj) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                var align = $(obj).attr('value');
                var bodyWidth = $("#workspace-body").width();
                var componentWidth = $("#" + id).width();
                var marginLeft = bodyWidth - componentWidth;
                $.common.removeGeneratedCss(id,"","margin-left");
                $.common.removeGeneratedCss(id,"","margin-right");
                if(align==='left'){
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + "{margin-right: "+ marginLeft +"px}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("#tpl-sidebar-2016-04-11-marginRight").val(marginLeft+"px");
                    $("." + id + "_marginRight").val(marginLeft+"px");
                    $("#tpl-sidebar-2016-04-11-marginLeft").val("0 px");
                    $("." + id + "_marginLeft").val("0 px");
                }else if(align==='center'){
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + "{margin-left: auto}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    styleText = "#" + id + "{margin-right: auto}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("#tpl-sidebar-2016-04-11-marginRight").val(marginLeft/2+"px");
                    $("#tpl-sidebar-2016-04-11-marginLeft").val(marginLeft/2+"px");
                    $("." + id + "_marginRight").val(marginLeft/2+"px");
                    $("." + id + "_marginLeft").val(marginLeft/2+"px");
                }else if(align==='right'){
                    if($("#" + id + " .erwmClose").length>0){
                        var styleCss = $("#generatedCss").text();
                        //4、下面是通过这个设置临时生成的属性值
                        var styleText = "#" + id + "{margin-left: "+ marginLeft +"px}";
                        //5、替换或者在最后拼接
                        styleCss += "\r\n" + styleText;
                        $("#generatedCss").text(styleCss);
                        $("#tpl-sidebar-2016-04-11-marginLeft").val(marginLeft+"px");
                        $("." + id + "_marginLeft").val(marginLeft+"px");
                        $("#tpl-sidebar-2016-04-11-marginRight").val("20 px");
                        $("." + id + "_marginRight").val("20 px");
                    }else{
                        var styleCss = $("#generatedCss").text();
                        //4、下面是通过这个设置临时生成的属性值
                        var styleText = "#" + id + "{margin-left: "+ marginLeft +"px}";
                        //5、替换或者在最后拼接
                        styleCss += "\r\n" + styleText;
                        $("#generatedCss").text(styleCss);
                        $("#tpl-sidebar-2016-04-11-marginLeft").val(marginLeft+"px");
                        $("." + id + "_marginLeft").val(marginLeft+"px");
                        $("#tpl-sidebar-2016-04-11-marginRight").val("0 px");
                        $("." + id + "_marginRight").val("0 px");
                    }
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
        storeAndInitAlign:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
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
        //设置轮播垂直对齐
        setVerticalAlign:function(type){
            try{
                var id = selectedElementInfo.get("id");
                $.common.removeGeneratedCss(id,"",type);
                var pHeight = $("#"+id).parent().height();
                var cHeight = $("#"+id).height();
                var height = pHeight-cHeight;
                if(type == "top"){
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + "{margin-top: 0px}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = 0 + 'px';
                    $("#tpl-sidebar-2016-04-11-marginTop").val(marginTop);
                    $("." + id + "_marginTop").val(marginTop);
                }
                else if(type == "middle"){
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + "{margin-top: "+ height / 2 +"px}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = height / 2 + 'px';
                    $("#tpl-sidebar-2016-04-11-marginTop").val(marginTop);
                    $("." + id + "_marginTop").val(marginTop);
                }
                else if(type == "bottom"){
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + "{margin-top: "+ height +"px}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    var marginTop = height + 'px';
                    $("#tpl-sidebar-2016-04-11-marginTop").val(marginTop);
                    $("." + id + "_marginTop").val(marginTop);
                }
                $('.' + id + '_verticalAlign').val(type);

                /*上一步，下一步*/
                $.common.regain();
            }catch(e){
            }
        },
        /**
         * 存储或者初始化水平位置
         */
        storeAndInitVerticalAlign:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
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
         * 存储和初始化margin和padding
         */
        storeAndInitMarginAndPadding:function(){
            //获得当前被选中的元素的id
            var id = selectedElementInfo.get("id");
            //获得栏目设置的margin-top
            var marginTop = $("." + id + "_marginTop").val();
            $("#tpl-sidebar-2016-04-11-marginTop").val(marginTop);
            //获得栏目设置的margin-bottom
            var marginBottom = $("." + id + "_marginBottom").val();
            $("#tpl-sidebar-2016-04-11-marginBottom").val(marginBottom);
            //获得栏目设置的margin-left
            var marginLeftVal = $("." + id + "_marginLeft").val();
            $("#tpl-sidebar-2016-04-11-marginLeft").val(marginLeftVal);
            //获得栏目设置的margin-right
            var marginRight = $("." + id + "_marginRight").val();
            $("#tpl-sidebar-2016-04-11-marginRight").val(marginRight);
            //获得栏目设置的margin-top
            var picMarginTop = $("." + id + "_picMarginTop").val();
            $("#tpl-sidebar-2016-04-11-picMarginTop").val(picMarginTop);
            //获得栏目设置的margin-bottom
            var picMarginBottom = $("." + id + "_picMarginBottom").val();
            $("#tpl-sidebar-2016-04-11-picMarginBottom").val(picMarginBottom);
            //获得栏目设置的margin-left
            var picPaddingLeft = $("." + id + "_picMarginLeft").val();
            $("#tpl-sidebar-2016-04-11-picPaddingLeft").val(picPaddingLeft);
            //获得栏目设置的margin-right
            var picMarginRight = $("." + id + "_picMarginRight").val();
            $("#tpl-sidebar-2016-04-11-picMarginRight").val(picMarginRight);
            //获得栏目设置的padding-right
            var picMarginRight = $("." + id + "_picPaddingRight").val();
            $("#tpl-sidebar-2016-04-11-paddingRight").val(picMarginRight);
            //获得栏目设置的padding-top
            var picPaddingTop = $("." + id + "_picPaddingTop").val();
            $("#tpl-sidebar-2016-04-11-paddingTop").val(picPaddingTop);
            //获得栏目设置的padding-left
            var picPaddingLeft = $("." + id + "_picPaddingLeft").val();
            $("#tpl-sidebar-2016-04-11-paddingLeft").val(picPaddingLeft);
            //获得栏目设置的padding-bottom
            var picPaddingBottom = $("." + id + "_picPaddingBottom").val();
            $("#tpl-sidebar-2016-04-11-paddingBottom").val(picPaddingBottom);
            //获得下文本的padding-right
            var bottomContentPaddingRight = $("." + id + "_bottomContentPaddingRight").val();
            $("#tpl-sidebar-2016-04-11-bottomContentPaddingRight").val(bottomContentPaddingRight);
            //获得下文本的padding-left
            var bottomContentPaddingLeft = $("." + id + "_bottomContentPaddingLeft").val();
            $("#tpl-sidebar-2016-04-11-bottomContentPaddingLeft").val(bottomContentPaddingLeft);
            //获得下文本的margin-top
            var bottomContentMarginTop = $("." + id + "_bottomContentMarginTop").val();
            $("#tpl-sidebar-2016-04-11-bottomContentMarginTop").val(bottomContentMarginTop);
            //获得下文本的margin-bottom
            var bottomContentMarginBottom = $("." + id + "_bottomContentMarginBottom").val();
            $("#tpl-sidebar-2016-04-11-bottomContentMarginBottom").val(bottomContentMarginBottom);
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
        setMarginAndPadding:function(selectedElementInfo,childPathOfSelectedElement,cssType,classSuffix,obj) {
            //获得当前被选中的元素的id
            var id = selectedElementInfo.get("id");
            if(cssType == 'margin-left' || cssType == 'margin-right'){
                $("." + id + "_align").val("");
                $("#tpl-sidebar-2016-04-11-align div").removeClass("active");
            }else if(cssType == 'margin-top' || cssType == 'margin-bottom'){
                $("." + id + "_verticalAlign").val("");
                $("#tpl-sidebar-2016-04-11-verticalAlign div").removeClass("active");
            }
            //获得当前填写的高度值
            var inputValue = $.trim($(obj).val());

            //如果栏目间距为空，直接返回
            if(!this.isNotBlank(inputValue)) return;
            if(inputValue.indexOf(' px') != -1){
                inputValue = inputValue.replace(' px', '');
            }

            //删除之前设置的参数值
            $.common.removeGeneratedCss(id,childPathOfSelectedElement,cssType);
            //设置参数值
            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":" + inputValue + "px}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);

            //设置元素的重复属性
            $("." + id + classSuffix).val(inputValue);
            /*上一步，下一步*/
            $.common.regain();
        },
        /**
         * 设置边框的风格
         */
        storeAndIniterwmBorderStyle:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的边框风格
            var borderStyle = $.trim($("." + id + "_erwmBorderStyle").val());
            //移除所有的选中状态
            $("#tpl-component-2016-04-11-erwm-erwmBorderStyle li").removeClass("active");

            if(this.isNotBlank(borderStyle)) {
                //设置选中状态
                $("#tpl-component-2016-04-11-erwm-erwmBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },
        storeAndIniterwmPicBorderStyle:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的边框风格
            var borderStyle = $.trim($("." + id + "_erwmPicBorderStyle").val());
            //移除所有的选中状态
            $("#tpl-component-2016-04-11-erwm-erwmPicBorderStyle li").removeClass("active");

            if(this.isNotBlank(borderStyle)) {
                //设置选中状态
                $("#tpl-component-2016-04-11-erwm-erwmPicBorderStyle").find("." + borderStyle).parent().addClass("active");
            }
        },
        /**
         * 设置边框的风格
         */
        setBorderStyle:function(selectedElementInfo,childPathOfSelectedElement,obj,storeAdress){
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var borderStyle = $.trim($(obj).find("i").eq(0).attr("class"));
                //如果填写的字体是空的，直接返回
                if(!this.isNotBlank(borderStyle)) return;

                //移除原来的字体大小css
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"border-style");
                if(borderStyle){
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-style:" + borderStyle + " !important;}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + storeAdress).val(borderStyle);
                /*上一步，下一步*/
                $.common.regain();
            } catch(e) {
            }
        },
        /**
         * 存储和初始化哪些标题被选中了
         */
        storeAndInitErwmBorderSelected:function(){
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderSelected = $.trim($("." + id + "_erwmBorderSelected").val());
            var array = borderSelected.split("_");
            for(var index = 0; index < array.length; ++index) {
                //表示index表示的这个没有被选中，不设置"active状态"
                if(array[index] == "0")
                {
                    $("#tpl-component-2016-04-11-erwm-erwmBorderSelected div").eq(index).removeClass("active");
                }
                //如果值为"1",表示index表示的这个被选中了，设置"active"状态
                else
                {
                    $("#tpl-component-2016-04-11-erwm-erwmBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        storeAndInitErwmPicBorderSelected:function(){
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderSelected = $.trim($("." + id + "_erwmPicBorderSelected").val());
            var array = borderSelected.split("_");
            for(var index = 0; index < array.length; ++index) {
                //表示index表示的这个没有被选中，不设置"active状态"
                if(array[index] == "0")
                {
                    $("#tpl-component-2016-04-11-erwm-erwmPicBorderSelected div").eq(index).removeClass("active");
                }
                //如果值为"1",表示index表示的这个被选中了，设置"active"状态
                else
                {
                    $("#tpl-component-2016-04-11-erwm-erwmPicBorderSelected div").eq(index).addClass("active");
                }
            }
        },
        /**
         * 设置选中的边框
         */
        setBorderSelected:function(selectedElementInfo,childPathOfSelectedElement,obj,storeAddress){
            try {
                var cssType = "";

                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var index = parseInt($.trim($(obj).attr("index")));
                //表示的是上边框
                if(index == 1) {
                    cssType = "border-top";
                }
                //表示的是下边框
                else if(index == 3) {
                    cssType = "border-bottom";
                }
                //表示的是左边框
                else if(index == 5) {
                    cssType = "border-left";
                }
                //表示的是右边框
                else if(index == 7) {
                    cssType = "border-right";
                }

                //如果已经是被选中，点击的时候表示的设置没有边框
                if($(obj).hasClass("active")) {
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":0px none !important;}";

                    //5、替换或者在最后拼接
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
                //如果开始没有选中
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
                /*上一步，下一步*/
                $.common.regain();
            } catch(e) {
            }
        },
        /**
         * 存储或者初始化边框的颜色
         */
        storeAndInitErwmBorderColor:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var erwmBorderColor = $.trim($("." + id + "_erwmBorderColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-04-11-erwm-erwmBorderColor",erwmBorderColor);
        },
        storeAndInitErwmPicBorderColor:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var erwmBorderColor = $.trim($("." + id + "_erwmPicBorderColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-04-11-erwm-erwmPicBorderColor",erwmBorderColor);
        },

        /**
         * 设置边框的颜色
         * selectedElementInfo        :表示被选中的元素值
         * childPathOfSelectedElement :表示其后代
         */
        setBorderColor:function(selectedElementInfo,childPathOfSelectedElement,color,storeAdress){
            try{
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"border-color");

                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText ="#"+ id + childPathOfSelectedElement + "{border-color:" + color + " !important;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;

                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                $("." + id + storeAdress).val(color);
                /*上一步，下一步*/
                $.common.regain();
            }catch(e){
            }
        },
        /**
         * 存储或者初始化边框的宽度
         */
        storeAndInitErwmBorderWidth:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderWidth = $("." + id + "_erwmBorderWidth").val();
            //设置字体
            $("#tpl-component-2016-04-11-erwm-erwmBorderWidth").val(borderWidth);
        },
        storeAndInitErwmPicBorderWidth:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var borderWidth = $("." + id + "_erwmPicBorderWidth").val();
            //设置字体
            $("#tpl-component-2016-04-11-erwm-erwmPicBorderWidth").val(borderWidth);
        },
        /**
         * 设置边框的宽度（粗细）
         */
        setBorderWidth:function(selectedElementInfo,childPathOfSelectedElement,obj,storeAdress,storeSelectAdress){
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var borderWidth = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if(!this.isNotBlank(borderWidth)) return;
                //获得字体大小
                borderWidth = this.handleInputValue(obj,borderWidth);
                //移除原来的字体大小css
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"border-width");
                if(borderWidth){
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{border-width:" + borderWidth + " !important;}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + storeAdress).val(borderWidth);

                $("#tpl-component-2016-04-11-erwm-erwmBorderSelected div").addClass("active");
                $("." + id + storeSelectAdress).val("1_1_1_1");
                /*上一步，下一步*/
                $.common.regain();
            } catch(e) {
            }
        },

        /**
         * 存储或者初始化字体背景的颜色
         */
        storeAndInitErwmBottomContentBgColor:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var bottomContentBgColor = $.trim($("." + id + "_bottomContentBgColor").val());
            //初始化配置页面部分的选中效果
            initColor("tpl-component-2016-04-11-erwm-erwmBottomContentBackgroundColor",bottomContentBgColor);
        },
        /**
         * 设置背景颜色
         * selectedElementInfo        :表示被选中的元素值
         * childPathOfSelectedElement :表示其后代
         */
        setBgColor:function(selectedElementInfo,childPathOfSelectedElement,color,storeAdress){
            try{
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id,childPathOfSelectedElement,"background-color");

                var styleCss = $("#generatedCss").text();//获取所有的样式
                var styleText ="#"+ id + childPathOfSelectedElement + "{background-color:" + color + " !important;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;

                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                $("." + id + storeAdress).val(color);
                /*上一步，下一步*/
                $.common.regain();
            }catch(e){
            }
        },
        /**
         * 存储或初始化列表字体的对齐方式
         */
        storeAndInitErwmTextAlign:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
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
        //回显是文本水平居中
        storeAndIniterwmContentTextAlign:function(){
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
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
        //设置是否隐藏
        setShowOrHide:function(){
            var id = selectedElementInfo.get("id");
            var value = null;
            $('#btnShow').on('click',function(){
                value = "show";
                $('#btnShow').addClass("active");
                $('#btnHide').removeClass("active");
                $('<i class="erwmClose" onclick="$.tplComponentErwmSetting.closeButton();"></i>').insertBefore($("#"+id+" #erwm .picture-holder"));
                $("." + id + "_showorhide").val(value);
                /*上一步，下一步*/
                $.common.regain();
            });
            $('#btnHide').on('click',function(){
                value = "hide";
                $('#btnShow').removeClass("active");
                $('#btnHide').addClass("active");
                $("#" + id + " .picturegroup .erwmClose").remove();
                $("." + id + "_showorhide").val(value);
                /*上一步，下一步*/
                $.common.regain();
            });
        },
        //回显是否隐藏
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
        //关闭按钮
        closeButton:function(){
            var id = selectedElementInfo.get("id");
            $("#" + id + " .picturegroup #erwm").hide();
            $("#" + id + " .picturegroup").hide();
            //$("#" + id + " .erwm-icon-bg").show();

        },
        //设置添加链接
        setLinkButton:function(target){
            var id = selectedElementInfo.get('id');
            $("#" + id + " .picture-holder a").attr("target",target);
            $("." + id + "_linkBtn").val(target);
            $.common.regain();
        },
        //回显添加的链接
        storeLinkButton:function(){
            var id = selectedElementInfo.get('id');
            $('#linkTarget .component-radio .radio-checked').removeClass('active');
            $('#linkTarget .component-radio[_target="' + $("." + id + "_linkBtn").val() + '"] .radio-checked').addClass('active');
        },
        //设置文字是否回显
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
                //4、下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + " .picture-holder li span.bottomContent" + "{display: block;}";
                //5、替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                styleText = "#" + id + " .picturegroup .picture-holder li .bottomContent" + "{width: "+contentWidth+"}";
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                $("." + id + "_bottomcontentshoworhide").val(value);
                /*上一步，下一步*/
                $.common.regain();
            });
            $('#erwmBottomContentHide').click(function(){
                value = "hide";
                $('#erwmBottomContentShow').removeClass("active");
                $('#erwmBottomContentHide').addClass("active");
                $.common.removeGeneratedCss(id," .picture-holder li span.bottomContent","display");
                var styleCss = $("#generatedCss").text();
                //4、下面是通过这个设置临时生成的属性值
                var styleText = "#" + id + " .picture-holder li span.bottomContent" + "{display: none;}";
                //5、替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
                $("." + id + "_bottomcontentshoworhide").val(value);
                /*上一步，下一步*/
                $.common.regain();
            });
        },
        //回显文字是否显示
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
            //存储和初始化宽度
            $.tplComponentErwmSetting.storeAndInitWidth();
            $.tplComponentErwmSetting.storeAndInitPicWidth();

            //存储和初始化高度
            $.tplComponentErwmSetting.storeAndInitHeight();
            $.tplComponentErwmSetting.storeAndInitErwmHeight();
            $.tplComponentErwmSetting.storeAndInitPicHeight();

            //存储和初始化MarginAndPadding
            $.tplComponentErwmSetting.storeAndInitMarginAndPadding();

            //存储和初始化边框风格
            $.tplComponentErwmSetting.storeAndIniterwmBorderStyle();
            $.tplComponentErwmSetting.storeAndIniterwmPicBorderStyle();

            //存储和初始化边框宽度
            $.tplComponentErwmSetting.storeAndInitErwmBorderWidth();
            $.tplComponentErwmSetting.storeAndInitErwmPicBorderWidth();

            //存储和初始化边框选择
            $.tplComponentErwmSetting.storeAndInitErwmBorderSelected();
            $.tplComponentErwmSetting.storeAndInitErwmPicBorderSelected();

            //存储和初始化边框颜色
            $.tplComponentErwmSetting.storeAndInitErwmBorderColor();
            $.tplComponentErwmSetting.storeAndInitErwmPicBorderColor();

            //存储和初始化字体背景颜色
            $.tplComponentErwmSetting.storeAndInitErwmBottomContentBgColor();

            //存储和初始化字体对齐方式
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
//定义颜色
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
 * @param colorPickerId 表示的是要变成颜色选择权的input输入框的id
 * @param color 初始化的颜色值
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
            //以下是当选择了颜色选择器中的颜色之后执行的操作

            //这里的id表示的是颜色选择框对应的id
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
            //以下是当选择了颜色选择器中的颜色之后执行的操作

            //这里的id表示的是颜色选择框对应的id
            if(colorPickerId == "tpl-component-2016-04-11-erwm-erwmBorderColor"){
                $.tplComponentErwmSetting.setBorderColor(selectedElementInfo,' .picturegroup',color,'_erwmBorderColor');
            }else if(colorPickerId == "tpl-component-2016-04-11-erwm-erwmPicBorderColor"){
                $.tplComponentErwmSetting.setBorderColor(selectedElementInfo,' .picturegroup #erwm',color,'_erwmPicBorderColor');
            }else if(colorPickerId == "tpl-component-2016-04-11-erwm-erwmBottomContentBackgroundColor"){
                $.tplComponentErwmSetting.setBgColor(selectedElementInfo,' .bottomContent',color,'_bottomContentBgColor');
            }

            $("#" + colorPickerId).val(color);
        },
        palette: per //定义的所有颜色值
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

            //鼠标移入显示
            $(pic).on('mouseenter', {obj: pic}, $.common.mEShowBorder);
            //鼠标移出隐藏
            $(pic).on('mouseleave', {obj: pic}, $.common.mLHideBorder);
            //鼠标点击显示
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
                    /*上一步，下一步*/
                    $.common.regain();
                });

            });
            $("#" + id + " #erwmImg").click(function(){
                $("#" + id + " .erwm-pic").css("display","block");
                $("#" + id + " .erwm-pic .erwmClose").click(function(){
                    $("#" + id + " .erwm-pic").css("display","none");
                });
            });

            // 风格设置开始
            var serverPath = $.common.getComponetIMagesUrl(id);
            var jsonData =  [
                {
                    name: '默认',
                    childElement: " #erwm",
                    childIndexElement: " .tpl-component-2016-04-11-erwm-change",
                    classStyle: 'tpl-component-2016-04-11-erwm-style',
                    url: serverPath + '/images/default.png',
                    className: 'tpl-component-2016-04-11-erwm-style1',
                    fileName: 'index_1',
                    id: id,
                }, {
                    name: '无关闭按钮',
                    childElement: " #erwm",
                    childIndexElement: " .tpl-component-2016-04-11-erwm-change",
                    classStyle: 'tpl-component-2016-04-11-erwm-style',
                    url: serverPath + '/images/noClose .png',
                    className: 'tpl-component-2016-04-11-erwm-style2',
                    fileName: 'closeBtn',
                    id: id,
                }, {
                    name: '显示下文本',
                    childElement: " #erwm",
                    childIndexElement: " .tpl-component-2016-04-11-erwm-change",
                    classStyle: 'tpl-component-2016-04-11-erwm-style',
                    url: serverPath + '/images/bottomContent.png',
                    className: 'tpl-component-2016-04-11-erwm-style3',
                    fileName: 'bottomContent',
                    id: id,

                },{
                    name: '无按钮显示文本',
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
            var hiddenCb = $.tplComponentErwmSetting.readHiddenInfo;
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
            counstomStyle.init(jsonData, 1, callback, hiddenCb, targetFg, "二维码");

            // 获得所有的用户风格的数据资源
            var sqluserArr = counstomStyle.getUserStyleData('tpl-component-2016-04-11-erwm');
            counstomStyle.formatUserarr(sqluserArr.innerStyleByClassName, function(userarr) {
                // 初始化用户风格
                counstomStyle.init(userarr, 0, callback, hiddenCb, targetFg);
            });

            //跳转方式
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

            // 风格设置结束
            $.tplComponentMove.initMoveComponent(id,
                function(left){
                    $('#tpl-sidebar-2016-04-11-marginLeft').val(left);
                    $('#tpl-sidebar-2016-04-11-marginLeft').trigger('blur');
                },function(top){
                    $('#tpl-sidebar-2016-04-11-marginTop').val(top);
                    $('#tpl-sidebar-2016-04-11-marginTop').trigger('blur');
                });
            //调用随意拖动
            $.dragResizeInitInfo.getCallBack(function(marginLeft){
                $('#tpl-sidebar-2016-04-11-marginLeft').val(marginLeft);
                $('#tpl-sidebar-2016-04-11-marginLeft').trigger('blur');
            },function(marginTop){
                "use strict";
                $('#tpl-sidebar-2016-04-11-marginTop').val(marginTop);
                $('#tpl-sidebar-2016-04-11-marginTop').trigger('blur');
            });
            //调用键盘移动事件
            $.tplComponentMove.initMoveComponent(id,
                function(left){
                    $('#tpl-sidebar-2016-04-11-marginLeft').val(left);
                    $('#tpl-sidebar-2016-04-11-marginLeft').trigger('blur');
                },function(top){
                    $('#tpl-sidebar-2016-04-11-marginTop').val(top);
                    $('#tpl-sidebar-2016-04-11-marginTop').trigger('blur');
                });
            //调用拖拽改变大小
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
            // 添加热区锚点右键菜单通过组件或者布局单独调用
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