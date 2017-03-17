(function($) {
    $.tplComponentText = {
       
    };
})(jQuery);
(function($) {
    $.tplComponentTextSetting = {
        /**
         * 组件初始化
         * @return {[type]} [description]
         */
        readhiddenInfo: function() {
            var id = selectedElementInfo.get("id");
            //存储和初始化设置文本组件的宽度
            this.storeAndInitTextWidth();
            //存储和初始化设置文本组件的最小高度
            this.storeAndInitTextHeight();

            //存储和初始化设置文本组件的字体
            this.storeAndInitTextFontFamily();
            //设置能够触发设置字体的功能
            this.selectTextFontFamily();
            //存储和设置字体的大小
            this.storeAndInitTextFontSize();
            //存储和设置文字组件的line-height
            this.storeAndInitTextLineHeight();
            //存储和设置文字组件的字体颜色
            this.storeAndInitTextColor();
            //设置边框颜色
            this.storeAndInitBorderColor();
            //设置的textalign效果
            this.storeAndInitTextTextAlign();
            //设置文本组件的FontStyle属性
            this.storeAndInitTextFontStyle();

            //30、存储或者初始化列表中的颜色设置
            this.storeAndInitTextLinkStyle();
            //31、存储或者初始化Link标签的textDecoration
            this.storeAndInitTextLinkTextDecoration();

            //设置Checkbox的边距
            this.storeAndInitMarginAndPadding();

            // 回显边框设置
            this.setStartBtn();

            // 设置对齐回显
            var _textAlign = $("#" + id + "_textAlign").val() * 1;
            $("#tpl-component-2015-12-30-textAlignReshow .align-img").removeClass('active').eq(_textAlign).addClass('active');

            var _textMiddleAlign = $("#" + id + "_textMiddleAlign").val() * 1;
            $("#tpl-sidebar-2016-03-24-textVerticalAlign .vertical-bg").removeClass('active').eq(_textMiddleAlign).addClass('active');

            // 调用拖拽控制大小方法
            // setWidth
            // setHeight
            // setMarginTop
            // setMarginLeft
            var setW = $.tplComponentTextSetting.setWidth;
            var setML = $.tplComponentTextSetting.setMarginLeft;
            var setH = $.tplComponentTextSetting.setHeight;
            var setMT = $.tplComponentTextSetting.setMarginTop;
            $.tplComponentResize.initResizeComponent(id, setW, setML, setH, setMT);
            //键盘控制组件位置
            $.tplComponentMove.initMoveComponent(id, setML, setMT);
            /**
             * 拖拽位置设置左边距；
             */
            $.dragResizeInitInfo.getCallBack(setML, setMT);
            // 添加热区锚点右键菜单
            $.customMenu.init(id);
        },
        //定义颜色
        per: [
            ["rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)", "rgb(153, 153, 153)", "rgb(183, 183, 183)",
                "rgb(204, 204, 204)", "rgb(217, 217, 217)", "rgb(239, 239, 239)", "rgb(243, 243, 243)", "rgb(255, 255, 255)"
            ],
            ["rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)", "rgb(255, 255, 0)", "rgb(0, 255, 0)",
                "rgb(0, 255, 255)", "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)", "rgb(255, 0, 255)"
            ],
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
                "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)", "rgb(32, 18, 77)", "rgb(76, 17, 48)"
            ]
        ],
        /**
         * @param colorPickerId 表示的是要变成颜色选择权的input输入框的id
         * @param color 初始化的颜色值
         * @return
         */
        initColor: function(colorPickerId, color) {
            var that = this;
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
                preferredFormat: "hex3",
                localStorageKey: "spectrum.demo",
                move: function(color) {
                    //以下是当选择了颜色选择器中的颜色之后执行的操作

                    //这里的id表示的是颜色选择框对应的id
                    if (colorPickerId == "tpl-component-2015-12-30-textLink") { //区块字体颜色
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":link", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textVisited") { //区块边框颜色
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":visited", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textHover") { //区块链接颜色
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":hover", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textActive") { //区块经过颜色
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":active", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textColor") {
                        $.tplComponentTextSetting.setColor(selectedElementInfo, " .tpl-component-2015-12-30-text-content", color);
                    } else if (colorPickerId == "borderColor") {
                        $.tplComponentTextSetting.setColor(selectedElementInfo, " .box", color);
                    }

                    $("#" + colorPickerId).val(color);
                    $.common.regain();
                },
                change: function(color) {
                    //这里的id表示的是颜色选择框对应的id
                    if (colorPickerId == "tpl-component-2015-12-30-textLink") { //区块字体颜色
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":link", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textVisited") { //区块边框颜色
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":visited", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textHover") { //区块链接颜色
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":hover", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textActive") { //区块经过颜色
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":active", color);
                    } else if (colorPickerId == "borderColor") {
                        $.tplComponentTextSetting.setColor(selectedElementInfo, " .box", color);
                    }

                    $("#" + colorPickerId).val(color);
                    $.common.regain();
                },
                palette: that.per //定义的所有颜色值
            });
        },
        /**
         * 2、判断一个字符串变量是否为空
         * 如果不为空：返回true
         * 如果为空:返回false
         */
        isNotBlank: function(variable) {
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
        replaceAll: function(str1, str2, str3) {
            var newStr = str1;
            if (this.isNotBlank(str1)) {
                //其中gm中的g表示"执行全局匹配(查找所有匹配而非在找到第一个匹配后停止)"
                //其中gm中的m表示执行多行匹配
                newStr = str1.replace(new RegExp(str2, "gm"), str3);
            }
            return newStr;
        },
        /**
         * 处理输入值，这种方式仅仅是针对输入框后带有：px,em,%和"清楚"的情况
         */
        handleInputValue: function(obj, size) {
            //先获得单位
            var unit = "";
            if ($(obj).parent().parent().find(".select-options li.active").length > 0) {
                unit = $.trim($(obj).parent().parent().find(".select-options li.active").eq(0).text());
                unit = (unit != "清空") ? unit : "px";
            } else {
                unit = "px";
            }

            //判断获取到的值中是否有这个单位，如果有不再添加；如果没有直接添加单位
            if (size.indexOf(unit) < 0) {
                size = size + unit;
            }
            //去除size中数值和单位的空格,下面的意思是将size中的所有" "换成""
            return this.replaceAll(size, " ", "");
        },

        /**
         * 存储或设置Text的宽度值
         */
        storeAndInitTextWidth: function() {
            //获得选中的元素的id值
            var id = selectedElementInfo.get("id");
            //获得存储宽度值
            var widthText = $("." + id + "_textWidth").val();
            //将这个参数值回显到右侧设置区域
            $("#tpl-component-2015-12-30-textWidth").val(widthText);
        },
        /**
         * @param selectedElementInfo        :这里含有被选中的元素的所有信息
         * @param childPathOfSelectedElement :这里表示被选中的元素的后代
         * @param obj                        :表示当前的输入框
         */
        setWidth: function(value, obj) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                if ($('#' + id).children('.resize-cover').length === 0) {
                    $.common.regain();
                }
                // 是拖动
                var unit;
                if (obj) {
                    unit = $(obj).attr('unit');
                } else {
                    unit = 'px';
                }
                value = value.replace(unit, '') * 1;
                $.tplComponentTextSetting.setStyleCss('', 'width', value + unit);
                $("." + id + "_textWidth").val(value + ' ' + unit);
                $("#tpl-component-2015-12-30-textWidth").val(value + unit);
            } catch (e) {
            }
        },
        /**
         * 统一设置style中的样式
         * @param {[type]} targetDom [description]
         * @param {[type]} style     [description]
         * @param {[type]} val       [description]
         */
        setStyleCss: function(targetDom, style, val) {
            var id = selectedElementInfo.get("id");
            $.common.removeGeneratedCss(id, targetDom, style);
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            styleText = "#" + id + targetDom + '{' + style + ':' + val + "!important;}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);

        },
        storeAndInitTextHeight: function() {
            //获得选中的元素的id值
            var id = selectedElementInfo.get("id");

            //获得存储最小高度值
            var minHeight = $("." + id + "_textHeight").val();

            //获得父容器的宽度
            //var parentWidth = $("#" + id).parent().css("height");

            //将这个参数值回显到右侧设置区域
            $("#tpl-component-2015-12-30-textHeight").val(minHeight);
            $("#" + id + " .tpl-component-2015-12-30-text-content").css('min-height', minHeight)
        },
        /**
         * 设置文本组件的最小高度
         * 
         * @param selectedElementInfo        :这里含有被选中的元素的所有信息
         * @param childPathOfSelectedElement :这里表示被选中的元素的后代
         * @param obj                        :表示当前的输入框
         */
        setHeight: function(value) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //过的宽度值
                var heightText = value.replace('px', '') * 1;
                //移除原有的gao度大小
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, "min-height");
                //debugger;
                var textBoxHeight = $("#" + id + ' .box').height();
                if (textBoxHeight > heightText) {
                    heightText = textBoxHeight;
                }
                $.tplComponentTextSetting.setStyleCss('', 'min-height', heightText+'px');
                $("." + id + "_textHeight").val(heightText+' px');
                $("#tpl-component-2015-12-30-textHeight").val(heightText+' px');
            } catch (e) {
            }
        },
        /**
         * 存储和初始化margin和padding
         */
        storeAndInitMarginAndPadding: function() {
            //获得当前被选中的元素的id
            var id = selectedElementInfo.get("id");
            //获得栏目设置的margin-top
            var textMarginTop = $("." + id + "_textMarginTop").val();
            $("#tpl-component-2015-12-30-textMarginTop").val(textMarginTop);

            //获得栏目设置的margin-bottom
            var textMarginBottom = $("." + id + "_textMarginBottom").val();
            $("#tpl-component-2015-12-30-textMarginBottom").val(textMarginBottom);

            //获得栏目设置的margin-left
            var textMarginLeft = $("." + id + "_textMarginLeft").val();
            $("#tpl-component-2015-12-30-textMarginLeft").val(textMarginLeft);

            //获得栏目设置的margin-right
            var textMarginRight = $("." + id + "_textMarginRight").val();
            $("#tpl-component-2015-12-30-textMarginRight").val(textMarginRight);

            //获得栏目设置的padding-top
            var textPaddingTop = $("." + id + "_textPaddingTop").val();
            $("#tpl-component-2015-12-30-textPaddingTop").val(textPaddingTop);

            //获得设置栏目设置的padding-bottom
            var textPaddingBottom = $("." + id + "_textPaddingBottom").val();
            $("#tpl-component-2015-12-30-textPaddingBottom").val(textPaddingBottom);

            //获得设置栏目设置的padding-left
            var textPaddingLeft = $("." + id + "_textPaddingLeft").val();
            $("#tpl-component-2015-12-30-textPaddingLeft").val(textPaddingLeft);

            //获得设置栏目设置的padding-right
            var textPaddingRight = $("." + id + "_textPaddingRight").val();
            $("#tpl-component-2015-12-30-textPaddingRight").val(textPaddingRight);
        },
        /**
         * selectedElementInfo        :表示的是被选中的元素
         * childPathOfSelectedElement :表示的是被选中的元素的后代
         * cssType                    :表示的是cssType,其值可以是margin-top,margin-right,margin-bottom,margin-left
         * classSuffix                :表示的是隐藏域的class属性值的后缀，这个域的值是存储边距值的内容
         * obj                        :表示的是当前输入框
         * 
         * 调用方式如下:
         * .setMarginAndPadding(selectedElementInfo,' .column','margin-top','_textMarginTop',this);"
         */
        setMarginAndPadding: function(selectedElementInfo, childPathOfSelectedElement, cssType, classSuffix, obj) {
            //获得当前被选中的元素的id
            var id = selectedElementInfo.get("id");

            //获得当前填写的高度值
            var inputValue = $.trim($(obj).val());
            //如果栏目间距为空，直接返回
            if (!this.isNotBlank(inputValue)) return;
            inputValue = this.handleInputValue(obj, inputValue);
            //删除之前设置的参数值
            // this.removeCss(id,childPathOfSelectedElement,cssType);
            //设置参数值
            $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);

            var styleCss = $("#generatedCss").text();
            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":" + inputValue + " !important;}" + "\r\n";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);

            if (cssType == 'margin-left' || cssType == 'margin-right') {
                $("#tpl-component-2015-12-30-textAlignReshow .align-img").removeClass('active');
            } else {
                $("#tpl-sidebar-2016-03-24-textVerticalAlign .vertical-bg").removeClass('active');
            }
            //设置元素的重复属性
            $("." + id + classSuffix).val(inputValue);
        },
        /**
         * 设置上边距
         * @param {[type]} value [description]
         */
        setMarginTop: function(value) {
            var id = selectedElementInfo.get("id");
            value = value.replace('px', '') * 1 + 'px';
            $.tplComponentTextSetting.setStyleCss('', 'margin-top', value);
            $("." + id + "_textMarginTop").val(value);
        },
        /**
         * 设置xia边距
         * @param {[type]} value [description]
         */
        setMarginBottom: function(value) {
            var id = selectedElementInfo.get("id");
            value = value.replace('px', '') * 1 + 'px';
            $.tplComponentTextSetting.setStyleCss('', 'margin-bottom', value);
            $("." + id + "_textMarginBottom").val(value);
        },
        /**
         * 设置上边距
         * @param {[type]} value [description]
         */
        setMarginLeft: function(value) {
            value = value + '';
            var id = selectedElementInfo.get("id");
            value = value.replace('px', '') * 1 + 'px';
            $.tplComponentTextSetting.setStyleCss('', 'margin-left', value);
            $("." + id + "_textMarginLeft").val(value);
            $("#tpl-component-2015-12-30-textMarginLeft").val(value);
        },
        /**
         * 设置上边距
         * @param {[type]} value [description]
         */
        setMarginRight: function(value) {
            var id = selectedElementInfo.get("id");
            value = value.replace('px', '') * 1 + 'px';
            $.tplComponentTextSetting.setStyleCss('', 'margin-right', value);
            $("." + id + "_textMarginRight").val(value);
        },
        /**
         * 设置文本组件的字体
         */
        storeAndInitTextFontFamily: function() {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var fontFamily = $("." + id + "_textFontFamily").val();

            //显示设置字体
            $("#tpl-component-2015-12-30-text-font-Family-Val").text(fontFamily);
            //设置字体font-family
            $("#" + id).find('div').eq(0).css('font-family', fontFamily);
        },
        /**
         * 设置文字的字体
         */
        setFontFamily: function() {
            //1、获得字体类型
            var fontFamily = $.trim($("#tpl-component-2015-12-30-text-font-Family-Val").text());
            //如果选择的是请选择，直接返回
            if (fontFamily == "请选择") return;

            //2、获得id的属性值
            var id = selectedElementInfo.get("id");
            //3、移除先前设置的字体
            $.common.removeGeneratedCss(id, " .tpl-component-2015-12-30-text-content", 'font-family');

            var styleCss = $("#generatedCss").text();

            //下面是通过这个设置临时生成的属性值
            var styleText = "#" + id + " .tpl-component-2015-12-30-text-content{font-family:" + fontFamily + " !important;}";

            //设置字体类型
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);

            $("." + id + "_textFontFamily").val(fontFamily);

        },
        /**
         * 选择字体的时候触发这个函数
         */
        selectTextFontFamily: function() {
            $("#tpl-component-2015-12-30-text-font-Family-Val").bind("setFontFamily", function() {
                $.tplComponentTextSetting.setFontFamily();
            });
            $("#tpl-component-2015-12-30-text-font-Family li").click(function(event) {
                //使用triggerHandler的好处是此函数不会触发默认的函数，不会冒泡
                $("#tpl-component-2015-12-30-text-font-Family-Val").triggerHandler("setFontFamily", []);

            });
        },
        /**
         * 存储或者初始化标题字体大小
         */
        storeAndInitTextFontSize: function() {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var fontSize = $("." + id + "_textFontSize").val();
            //设置字体
            $("#tpl-component-2015-12-30-textFontSize").val(fontSize);
            //设置字体font-size
            $("#" + id).find('div').eq(0).css('font-size', fontSize);
        },
        /*
         * 设置text的左中右对齐
         */
        setAlign: function(selectedElementInfo, childPathOfSelectedElement, value) {
            //1、获得id的属性值
            var id = selectedElementInfo.get("id");
            var width = $("#" + id).outerWidth();
            var parentWidth = $("#" + id).parent().width();
            var marginLeft = 0;
            switch (value) {
                case 'left':
                    $("#" + id + "_textAlign").val(0);
                    this.setStyleCss('', 'margin-left', '0px');
                    this.setStyleCss('', 'margin-right', 'auto');
                    marginLeft = 0;
                    break;
                case 'center':
                    $("#" + id + "_textAlign").val(1);
                    this.setStyleCss('', 'margin-left', 'auto');
                    this.setStyleCss('', 'margin-right', 'auto');
                    marginLeft = (parentWidth - width) / 2
                    break;
                case 'right':
                    $("#" + id + "_textAlign").val(2);
                    this.setStyleCss('', 'margin-left', 'auto');
                    this.setStyleCss('', 'margin-right', '0px');
                    marginLeft = parentWidth - width
                    break;
                default:
                    // statements_def
                    break;
            }
            marginLeft = parseInt(marginLeft, 10);
            $("#tpl-component-2015-12-30-textMarginLeft").val(marginLeft + ' px');

        },
        /**
         * 设置垂直方向的对齐方式；
         * @param {[type]} value [description]
         */
        setMiddle: function(value) {
            //1、获得id的属性值
            var id = selectedElementInfo.get("id");
            var parentHeight = $("#" + id).parent().height();
            var height = $("#" + id).height();
            var marginTop = 0;

            switch (value) {
                case 0:
                    marginTop = 0;
                    $("#" + id + "_textMiddleAlign").val(0);
                    break;
                case 1:
                    marginTop = (parentHeight - height) / 2;
                    $("#" + id + "_textMiddleAlign").val(1);
                    break;
                case 2:
                    marginTop = parentHeight - height;
                    $("#" + id + "_textMiddleAlign").val(2);
                    break;
                default:
                    // statements_def
                    break;
            }
            $("#tpl-sidebar-2016-03-24-textVerticalAlign .vertical-bg").removeClass('active').eq(value).addClass('active');
            marginTop = parseInt(marginTop, 10);
            this.setStyleCss('', 'margin-top', marginTop + 'px');
            $("#tpl-component-2015-12-30-textMarginTop").val(marginTop + 'px');

        },
        /**
         * 设置标题的文字大小
         */
        setFontSize: function(selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var fontSize = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if (!this.isNotBlank(fontSize)) return;
                //获得字体大小
                fontSize = this.handleInputValue(obj, fontSize);

                //移除原来的字体大小css
                if (fontSize) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, 'font-size');

                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{font-size:" + fontSize + " !important;}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + "_textFontSize").val(fontSize);

            } catch (e) {
            }
        },

        /**
         * 存储或者初始化标题字体行高
         */
        storeAndInitTextLineHeight: function() {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var lineHeight = $("." + id + "_textLineHeight").val();
            //设置字体
            $("#tpl-component-2015-12-30-textLineHeight").val(lineHeight);
            //设置字体line-height
            $("#" + id).find('div').eq(0).css('line-height', lineHeight);
        },
        /**
         * 设置标题的文字行高
         */
        setLineHeight: function(selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //2、获得填写的字体大小的值
                var lineHeight = $.trim($(obj).val());
                //如果填写的字体是空的，直接返回
                if (!this.isNotBlank(lineHeight)) return;
                //获得字体大小
                lineHeight = this.handleInputValue(obj, lineHeight);

                //移除原来的字体大小css
                if (lineHeight) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, 'line-height');
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{line-height:" + lineHeight + " !important;}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + "_textLineHeight").val(lineHeight);

            } catch (e) {
            }
        },
        /**
         * 存储或者初始化边框的颜色
         */
        storeAndInitTextColor: function() {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var textColor = $.trim($("." + id + "_textColor").val());
            //初始化配置页面部分的选中效果
            this.initColor("tpl-component-2015-12-30-textColor", textColor);
        },
        storeAndInitBorderColor: function() {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得存储的颜色值
            var textColor = $.trim($("." + id + "_borderColor").val());
            //初始化配置页面部分的选中效果
            this.initColor("borderColor", textColor);
        },
       
        /**
         * 设置标题的字体的颜色
         * selectedElementInfo        :表示被选中的元素值
         * childPathOfSelectedElement :表示其后代
         */
        setColor: function(selectedElementInfo, childPathOfSelectedElement, color) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式

                if (childPathOfSelectedElement.indexOf('.box') != -1) {
                    this.setStyleCss('', 'border-color', color);
                    this.setStyleCss('', 'border-style', 'solid');
                    this.setStyleCss('', 'border-width', '1px');
                    $("." + id + "_borderColor").val(color);
                } else {
                    this.setStyleCss('', 'color', color);
                    $("." + id + "_textColor").val(color);
                }

            } catch (e) {
            }
        },

        // 重新设置border显示
        setStartBtn: function() { //按钮状态回显
            var id = selectedElementInfo.get("id");
            var playValue = $("#" + id + '_isShowborder').val() * 1;

            if (playValue == 0) {
                $(".visible_border").find("#pic_zoom").animate({
                    left: -30
                }, 'fast')
            } else {
                $(".visible_border").find("#pic_zoom").animate({
                    left: 0
                }, 'fast')
            }
            $(".visible_border").attr('play', playValue);

            return playValue;
        },

        /**
         * 存储或者初始化标题字体对齐方式
         */

        storeAndInitTextTextAlign: function() {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            //获得之前的字体
            var textAlign = $.trim($("." + id + "_textTextAlign").val());
            $("#tpl-component-2015-12-30-textTextAlign div").removeClass("active");
            if (textAlign == "left") {
                $("#tpl-component-2015-12-30-textTextAlign div").eq(0).addClass("active");
            } else if (textAlign == "center") {
                $("#tpl-component-2015-12-30-textTextAlign div").eq(1).addClass("active");
            } else if (textAlign == "right") {
                $("#tpl-component-2015-12-30-textTextAlign div").eq(2).addClass("active");
            }
        },
        /**
         * 设置标题的文字行高
         * value   :表示的是值，可以传递的有"left","center","right"
         */
        setTextAlign: function(selectedElementInfo, childPathOfSelectedElement, value) {
            try {
                //1、获得id的属性值
                var id = selectedElementInfo.get("id");
                //如果填写的字体是空的，直接返回
                if (!this.isNotBlank(value)) return;

                //移除原来的字体大小css
                // this.removeCss(id,childPathOfSelectedElement,"text-align");
                if (value) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, 'text-align');
                    var styleCss = $("#generatedCss").text();
                    //4、下面是通过这个设置临时生成的属性值
                    var styleText = "#" + id + childPathOfSelectedElement + "{text-align:" + value + " !important;}";
                    //5、替换或者在最后拼接
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //将字体设置信息存储在影藏字段中
                $("." + id + "_textTextAlign").val(value);

            } catch (e) {
            }
        },

        /**
         * 存储或者初始化标题字体风格
         */
        storeAndInitTextFontStyle: function() {
            //获得选中的对象
            var id = selectedElementInfo.get("id");
            $("#tpl-component-2015-12-30-textFontStyle div").removeClass("active");

            //获得字体是否加粗的标记
            var textFontWeightFlag = $.trim($("." + id + "_textFontWeight").val());
            //当不为空串的时候执行
            if (textFontWeightFlag != "") {
                $("#tpl-component-2015-12-30-textFontStyle div").eq(parseInt(textFontWeightFlag)).addClass("active");
            }

            //获得字体风格的标记
            var textFontStyleFlag = $.trim($("." + id + "_textFontStyle").val());
            if (textFontStyleFlag != "") {
                $("#tpl-component-2015-12-30-textFontStyle div").eq(parseInt(textFontStyleFlag)).addClass("active");
            }

            //获得字体修饰的标记
            var textTextDecorationFlag = $.trim($("." + id + "_textTextDecoration").val());
            if (textTextDecorationFlag != "") {
                $("#tpl-component-2015-12-30-textFontStyle div").eq(parseInt(textTextDecorationFlag)).addClass("active");
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
        setFontStyle: function(selectedElementInfo, childPathOfSelectedElement, key, type, obj) {
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

                    // $("#tpl-component-2015-12-30-textFontStyle div").eq(2).toggleClass("active");
                } else if (key == "3") {
                    //删除线
                    cssType = "text-decoration";
                    fontCss = "text-decoration: line-through;";

                    // $("#tpl-component-2015-12-30-textFontStyle div").eq(3).toggleClass("active");
                }

                //移除原有的边框样式
                if ($(obj).hasClass("active")) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
                    $("." + id + type).val("");
                    return;
                }
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);

                var styleCss = $("#generatedCss").text(); //获取所有的样式
                //拼接对齐方式css样式
                var styleText = "#" + id + childPathOfSelectedElement + "{" + fontCss + "}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值

                $("#generatedCss").text(styleCss);

                //将字体设置信息存储在影藏字段中
                $("." + id + type).val(key);

            } catch (e) {
            }
        },
        /**
         * 存储或初始化列表链接的颜色
         */
        storeAndInitTextLinkStyle: function() {
            var id = selectedElementInfo.get("id");

            var textLinkColor = $.trim($("." + id + "_textLinkColor").val());
            //初始化配置页面部分的选中效果
            this.initColor("tpl-component-2015-12-30-textLink", textLinkColor);

            var textVisitedColor = $.trim($("." + id + "_textVisitedColor").val());
            //初始化配置页面部分的选中效果
            this.initColor("tpl-component-2015-12-30-textVisited", textVisitedColor);

            var textHoverColor = $.trim($("." + id + "_textHoverColor").val());
            //初始化配置页面部分的选中效果
            this.initColor("tpl-component-2015-12-30-textHover", textHoverColor);

            var textActiveColor = $.trim($("." + id + "_textActiveColor").val());
            //初始化配置页面部分的选中效果
            this.initColor("tpl-component-2015-12-30-textActive", textActiveColor);
        },
        /**
         * 设置未被访问的连接
         * 
         * a:link                    :表示未被访问的连接
         * a:visited                 :已被访问的连接
         * a:hover                   :鼠标指针移动到连接上
         * a:active                  :正在被点击的链接
         * 
         * selectedElementInfo       :表示的是选中的元素的信息
         * childPathOfSelectedElement:表示选中的路径
         * type                      :表示设置的类型，分别有:link; :visited; :hover; :active
         * color                     :表示设置的颜色值
         * colorPickerId             :表示颜色选择器的id
         */
        setLinkStyle: function(selectedElementInfo, childPathOfSelectedElement, type, color) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + type, 'color');
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + type + '>span', 'color');
                var styleCss = $("#generatedCss").text(); //获取所有的样式
                var styleText = "#" + id + childPathOfSelectedElement + type + "{color:" + color + " !important;}";
                styleText += "#" + id + childPathOfSelectedElement + type + ">span{color:" + color + " !important;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;

                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                if (type == ":link") {
                    $("." + id + "_textLinkColor").val(color);
                } else if (type == ":visited") {
                    $("." + id + "_textVisitedColor").val(color);
                } else if (type == ":hover") {
                    $("." + id + "_textHoverColor").val(color);
                } else if (type == ":active") {
                    $("." + id + "_textActiveColor").val(color);
                }

            } catch (e) {
            }
        },
        /**
         * 存储或者初始化Link标签的textDecoration
         */
        storeAndInitTextLinkTextDecoration: function() {
            var id = selectedElementInfo.get("id");

            var textLinkFlag = parseInt($.trim($("." + id + "_textLinkFlag").val()));
            //初始化配置页面部分的选中效果
            $("#tpl-component-2015-12-30-textLinkFlag div").removeClass("active");
            $("#tpl-component-2015-12-30-textLinkFlag div").eq(textLinkFlag).addClass("active");

            var textVisitedFlag = parseInt($.trim($("." + id + "_textVisitedFlag").val()));
            //初始化配置页面部分的选中效果
            $("#tpl-component-2015-12-30-textVisitedFlag div").removeClass("active");
            $("#tpl-component-2015-12-30-textVisitedFlag div").eq(textVisitedFlag).addClass("active");

            var textHoverFlag = parseInt($.trim($("." + id + "_textHoverFlag").val()));
            //初始化配置页面部分的选中效果
            $("#tpl-component-2015-12-30-textHoverFlag div").removeClass("active");
            $("#tpl-component-2015-12-30-textHoverFlag div").eq(textHoverFlag).addClass("active");

            var textActiveFlag = parseInt($.trim($("." + id + "_textActiveFlag").val()));
            //初始化配置页面部分的选中效果
            $("#tpl-component-2015-12-30-textActiveFlag div").removeClass("active");
            $("#tpl-component-2015-12-30-textActiveFlag div").eq(textActiveFlag).addClass("active");
        },
        hdBtn: function(obj) {
            var playValue = $(obj).attr('play')
            if (playValue == 0) {
                playValue = 1;
                $(obj).find("#pic_zoom").animate({
                    left: 0
                }, 'fast')
            } else {
                playValue = 0;
                $(obj).find("#pic_zoom").animate({
                    left: -30
                }, 'fast')
            }
            $(obj).attr('play', playValue);
            return playValue;
        },
        
        setIsShowBorder: function(value) {
            var id = selectedElementInfo.get("id");
            var _borderColor = $("." + id + "_borderColor").val();
            if (value == 0) {
                //不显示边框
                this.setStyleCss('', 'border', '0 solid ' + _borderColor);

                $("#" + id + "_isShowborder").val(0)
            } else {
                //显示边框
                this.setStyleCss('', 'border', '1px solid ' + _borderColor);
                //this.setStyleCss('','border-width','1px');
                $("#" + id + "_isShowborder").val(1)
            }
        },
        // 水平对齐回显
        reSetshuiping: function(obj, inputObj) {
            var id = selectedElementInfo.get("id");

            var value = $("#" + id + inputObj).val() * 1;
            switch (value) {
                case 1:
                    // 水平居左对齐
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.left').addClass('active')
                    break;
                case 2:
                    // 水平居zhong对齐
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.center').addClass('active')
                    break;
                case 3:
                    // 水平居右对齐
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.right').addClass('active')
                    break;
                default:
                    // statements_def
                    break;
            }
        },
        // 垂直对齐回显
        reSetChuizhi: function(obj, inputObj) {
            var id = selectedElementInfo.get("id");
            var value = $("#" + id + inputObj).val() * 1
            switch (value) {
                case 1:
                    // 水平居左对齐
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.top').addClass('active')
                    break;
                case 2:
                    // 水平居zhong对齐
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.middle').addClass('active')
                    break;
                case 3:
                    // 水平居右对齐
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.bottom').addClass('active')
                    break;
                default:
                    // statements_def
                    break;
            }
        },
        // 控制ckeditor出现时机
        showCkEditor: function(obj) {
            var id = selectedElementInfo.get("id");
            var textAble = $("#" + id).find('.text-able')[0];
            var element = CKEDITOR.dom.element.get(textAble)
            var windowWidth = $(window).width();
            var left = $(".sidebar-panel-body").position().left;

            if (windowWidth === left) {
                return;
            } else {
                if (CKEDITOR.instances.editor1) {
                    CKEDITOR.instances.editor1.destroy();
                }
                CKEDITOR.inline(element);
            }

        },
        // 出发双击显示ckeditor事件
        showCkEditorEvent: function() {
            // var that = this;
            var id = selectedElementInfo.get("id");
            $("#" + id + " .box").off('click');
            $("#" + id + " .box").on('click', function(e) {

            });
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
        setLinkTextDecoration: function(selectedElementInfo, childPathOfSelectedElement, type, flag) {
            try {
                //获取选中元素的id
                var id = selectedElementInfo.get("id");
                //移除原有的边框样式

                var textDecoration = "";
                if (flag == "0") {
                    textDecoration = "none";
                } else if (flag == "1") {
                    textDecoration = "underline";
                }
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + type, 'text-decoration');
                var styleCss = $("#generatedCss").text(); //获取所有的样式

                var styleText = "#" + id + childPathOfSelectedElement + type + "{text-decoration:" + textDecoration + "!important;}";
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);

                if (type == ":link") {
                    $("." + id + "_textLinkFlag").val(flag);
                } else if (type == ":visited") {
                    $("." + id + "_textVisitedFlag").val(flag);
                } else if (type == ":hover") {
                    $("." + id + "_textHoverFlag").val(flag);
                } else if (type == ":active") {
                    $("." + id + "_textActiveFlag").val(flag);
                }
            } catch (e) {
            }
        },
        //同步文本高度
        synHeight:function(){
            var id = selectedElementInfo.get("id");
            var height = $('#'+id+' .tpl-component-2015-12-30-text-content').height();
            var _height = String($('#tpl-component-2015-12-30-textHeight').val()).replace('px','')*1;
            if(height>_height){
                $('#tpl-component-2015-12-30-textHeight').val(height+' px').trigger('blur');
            }
        }
    };
})(jQuery);

$(function() {
    try {
        if ($('head').find('script[name=systemJs]').length > 0) {
            $("body").find(".full-spectrum").remove();
            var id = selectedElementInfo.get("id");
            $.tplComponentTextSetting.readhiddenInfo();
            // 出发ckeditor监听事件
            // $.tplComponentTextSetting.showCkEditorEvent();
            // CKEDITOR.disableAutoInline = true;
            // CKEDITOR.inline('myEditor');
            // 设置垂直对齐
            // 是否显示边框
            // 设置是否显示wheel的btn按钮
            $(".tpl-config-2015-12-30-text .visible_border").off('click').on('click', function() {
                // 滑动效果
                var playValue = $.tplComponentTextSetting.hdBtn(this);
                    // 设置循环播放
                $.tplComponentTextSetting.setIsShowBorder(playValue);
            });

            $("input").on('focus', function() {
                $(this)[0].select();
            });

            $('#'+id+' .tpl-component-2015-12-30-text-content').off('blur',$.tplComponentTextSetting.synHeight).on('blur',$.tplComponentTextSetting.synHeight);




            // 风格设置开始
            var serverPath = $.common.getComponetIMagesUrl(id);
            var jsonData = [];
            /**
             * 选择风格时的回调
             * @param  {[type]}   json [description]
             * @param  {[Number]}   type [1: 系统风格 2：用户风格]
             * @param  {[Number]}   index [第几个风格]
             * @return {Function}      [description]
             */
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
                    $("#" + id + "_saveSystemFg").val(index);
                    $("#" + id + "_savecoustomFg").val("");
                } else {
                    // 用户风格
                    var styleId = json[index].id;
                    var id = selectedElementInfo.get("id");
                    var componentClass = $('#' + id).attr('class').split(' ')[0];
                    $.tplCustomerStyle.changeStyle(styleId, id, componentClass, '', hiddenCb);
                    $("#" + id + "_savecoustomFg").val(index);
                    $("#" + id + "_saveSystemFg").val("");
                }
            }
            // 回显数据回调
            var hiddenCb = $.tplComponentTextSetting.readHiddenInfo;
            // 传递保存的风格索引
            var saveCoustomFg = "";
            var saveSystemFg = "";
            saveCoustomFg = $("#" + id + "_savecoustomFg").val() === "" ? "" : $("#" + id + "_savecoustomFg").val() * 1;
            saveSystemFg = $("#" + id + "_saveSystemFg").val() === "" ? "" : saveSystemFg = $("#" + id + "_saveSystemFg").val() * 1;
            var targetFg = {
                saveSystemFg: saveSystemFg,
                saveCoustomFg: saveCoustomFg
            };
            // 初始化系统风格的数据资源
            counstomStyle.init(jsonData, 1, callback, hiddenCb, targetFg, '文本组件');

            // 获得所有的用户风格的数据资源
            var sqluserArr = counstomStyle.getUserStyleData('tpl-component-2016-3-23-picWheel');
            counstomStyle.formatUserarr(sqluserArr.innerStyleByClassName, function(userarr) {
                // 初始化用户风格
                counstomStyle.init(userarr, 0, callback, hiddenCb, targetFg, '文本组件');
            });
            // 风格设置结束
        
            var texts = $(".tpl-component-2015-12-30-text").get();
            if (texts && texts.length > 0) {
                $.each(texts, function(index, text) {
                    //鼠标移入显示
                    $(text).off('mouseenter', $.common.mEShowBorder);
                    //鼠标移出隐藏
                    $(text).off('mouseleave', $.common.mLHideBorder);
                    //鼠标点击显示
                    $(text).off('click', $.common.cShowBorder);
                   
                    //鼠标移入显示
                    $(text).on('mouseenter', {
                        obj: text
                    }, $.common.mEShowBorder);
                    //鼠标移出隐藏
                    $(text).on('mouseleave', {
                        obj: text
                    }, $.common.mLHideBorder);
                    //鼠标点击显示
                    $(text).on('click', {
                        obj: text
                    }, $.common.cShowBorder);
                    
                });

            }
            //    做历史记录操作监听

            $('.tpl-sicebar-text .select-content').off('blur', $.common.regain).on('blur', $.common.regain);
            $('.tpl-config-2015-12-30-text .select-content').off('blur', $.common.regain).on('blur', $.common.regain);
            $('.tpl-config-2015-12-30-text .vertical-bg').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-config-2015-12-30-text .align-img').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-config-2015-12-30-text #pic_zoom').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-config-2015-12-30-text .select-options li').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-config-2015-12-30-text .select-img-options li').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-config-2015-12-30-text .radioIcon').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-config-2015-12-30-text .t-icon').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-config-2015-12-30-text .checkIcon').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-sidebar-text .href-font').off('click', $.common.regain).on('click', $.common.regain);
        }

    } catch (e) {
    }
});