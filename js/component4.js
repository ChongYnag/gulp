(function($) {
    $.tplComponentText = {
       
    };
})(jQuery);
(function($) {
    $.tplComponentTextSetting = {
        /**
         * �����ʼ��
         * @return {[type]} [description]
         */
        readhiddenInfo: function() {
            var id = selectedElementInfo.get("id");
            //�洢�ͳ�ʼ�������ı�����Ŀ��
            this.storeAndInitTextWidth();
            //�洢�ͳ�ʼ�������ı��������С�߶�
            this.storeAndInitTextHeight();

            //�洢�ͳ�ʼ�������ı����������
            this.storeAndInitTextFontFamily();
            //�����ܹ�������������Ĺ���
            this.selectTextFontFamily();
            //�洢����������Ĵ�С
            this.storeAndInitTextFontSize();
            //�洢���������������line-height
            this.storeAndInitTextLineHeight();
            //�洢���������������������ɫ
            this.storeAndInitTextColor();
            //���ñ߿���ɫ
            this.storeAndInitBorderColor();
            //���õ�textalignЧ��
            this.storeAndInitTextTextAlign();
            //�����ı������FontStyle����
            this.storeAndInitTextFontStyle();

            //30���洢���߳�ʼ���б��е���ɫ����
            this.storeAndInitTextLinkStyle();
            //31���洢���߳�ʼ��Link��ǩ��textDecoration
            this.storeAndInitTextLinkTextDecoration();

            //����Checkbox�ı߾�
            this.storeAndInitMarginAndPadding();

            // ���Ա߿�����
            this.setStartBtn();

            // ���ö������
            var _textAlign = $("#" + id + "_textAlign").val() * 1;
            $("#tpl-component-2015-12-30-textAlignReshow .align-img").removeClass('active').eq(_textAlign).addClass('active');

            var _textMiddleAlign = $("#" + id + "_textMiddleAlign").val() * 1;
            $("#tpl-sidebar-2016-03-24-textVerticalAlign .vertical-bg").removeClass('active').eq(_textMiddleAlign).addClass('active');

            // ������ק���ƴ�С����
            // setWidth
            // setHeight
            // setMarginTop
            // setMarginLeft
            var setW = $.tplComponentTextSetting.setWidth;
            var setML = $.tplComponentTextSetting.setMarginLeft;
            var setH = $.tplComponentTextSetting.setHeight;
            var setMT = $.tplComponentTextSetting.setMarginTop;
            $.tplComponentResize.initResizeComponent(id, setW, setML, setH, setMT);
            //���̿������λ��
            $.tplComponentMove.initMoveComponent(id, setML, setMT);
            /**
             * ��קλ��������߾ࣻ
             */
            $.dragResizeInitInfo.getCallBack(setML, setMT);
            // �������ê���Ҽ��˵�
            $.customMenu.init(id);
        },
        //������ɫ
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
         * @param colorPickerId ��ʾ����Ҫ�����ɫѡ��Ȩ��input������id
         * @param color ��ʼ������ɫֵ
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
                    //�����ǵ�ѡ������ɫѡ�����е���ɫ֮��ִ�еĲ���

                    //�����id��ʾ������ɫѡ����Ӧ��id
                    if (colorPickerId == "tpl-component-2015-12-30-textLink") { //����������ɫ
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":link", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textVisited") { //����߿���ɫ
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":visited", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textHover") { //����������ɫ
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":hover", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textActive") { //���龭����ɫ
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
                    //�����id��ʾ������ɫѡ����Ӧ��id
                    if (colorPickerId == "tpl-component-2015-12-30-textLink") { //����������ɫ
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":link", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textVisited") { //����߿���ɫ
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":visited", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textHover") { //����������ɫ
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":hover", color);
                    } else if (colorPickerId == "tpl-component-2015-12-30-textActive") { //���龭����ɫ
                        $.tplComponentTextSetting.setLinkStyle(selectedElementInfo, ' .tpl-component-2015-12-30-text-content a', ":active", color);
                    } else if (colorPickerId == "borderColor") {
                        $.tplComponentTextSetting.setColor(selectedElementInfo, " .box", color);
                    }

                    $("#" + colorPickerId).val(color);
                    $.common.regain();
                },
                palette: that.per //�����������ɫֵ
            });
        },
        /**
         * 2���ж�һ���ַ��������Ƿ�Ϊ��
         * �����Ϊ�գ�����true
         * ���Ϊ��:����false
         */
        isNotBlank: function(variable) {
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
        replaceAll: function(str1, str2, str3) {
            var newStr = str1;
            if (this.isNotBlank(str1)) {
                //����gm�е�g��ʾ"ִ��ȫ��ƥ��(��������ƥ��������ҵ���һ��ƥ���ֹͣ)"
                //����gm�е�m��ʾִ�ж���ƥ��
                newStr = str1.replace(new RegExp(str2, "gm"), str3);
            }
            return newStr;
        },
        /**
         * ��������ֵ�����ַ�ʽ�����������������У�px,em,%��"���"�����
         */
        handleInputValue: function(obj, size) {
            //�Ȼ�õ�λ
            var unit = "";
            if ($(obj).parent().parent().find(".select-options li.active").length > 0) {
                unit = $.trim($(obj).parent().parent().find(".select-options li.active").eq(0).text());
                unit = (unit != "���") ? unit : "px";
            } else {
                unit = "px";
            }

            //�жϻ�ȡ����ֵ���Ƿ��������λ������в�����ӣ����û��ֱ����ӵ�λ
            if (size.indexOf(unit) < 0) {
                size = size + unit;
            }
            //ȥ��size����ֵ�͵�λ�Ŀո�,�������˼�ǽ�size�е�����" "����""
            return this.replaceAll(size, " ", "");
        },

        /**
         * �洢������Text�Ŀ��ֵ
         */
        storeAndInitTextWidth: function() {
            //���ѡ�е�Ԫ�ص�idֵ
            var id = selectedElementInfo.get("id");
            //��ô洢���ֵ
            var widthText = $("." + id + "_textWidth").val();
            //���������ֵ���Ե��Ҳ���������
            $("#tpl-component-2015-12-30-textWidth").val(widthText);
        },
        /**
         * @param selectedElementInfo        :���ﺬ�б�ѡ�е�Ԫ�ص�������Ϣ
         * @param childPathOfSelectedElement :�����ʾ��ѡ�е�Ԫ�صĺ��
         * @param obj                        :��ʾ��ǰ�������
         */
        setWidth: function(value, obj) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                if ($('#' + id).children('.resize-cover').length === 0) {
                    $.common.regain();
                }
                // ���϶�
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
         * ͳһ����style�е���ʽ
         * @param {[type]} targetDom [description]
         * @param {[type]} style     [description]
         * @param {[type]} val       [description]
         */
        setStyleCss: function(targetDom, style, val) {
            var id = selectedElementInfo.get("id");
            $.common.removeGeneratedCss(id, targetDom, style);
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            styleText = "#" + id + targetDom + '{' + style + ':' + val + "!important;}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);

        },
        storeAndInitTextHeight: function() {
            //���ѡ�е�Ԫ�ص�idֵ
            var id = selectedElementInfo.get("id");

            //��ô洢��С�߶�ֵ
            var minHeight = $("." + id + "_textHeight").val();

            //��ø������Ŀ��
            //var parentWidth = $("#" + id).parent().css("height");

            //���������ֵ���Ե��Ҳ���������
            $("#tpl-component-2015-12-30-textHeight").val(minHeight);
            $("#" + id + " .tpl-component-2015-12-30-text-content").css('min-height', minHeight)
        },
        /**
         * �����ı��������С�߶�
         * 
         * @param selectedElementInfo        :���ﺬ�б�ѡ�е�Ԫ�ص�������Ϣ
         * @param childPathOfSelectedElement :�����ʾ��ѡ�е�Ԫ�صĺ��
         * @param obj                        :��ʾ��ǰ�������
         */
        setHeight: function(value) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //���Ŀ��ֵ
                var heightText = value.replace('px', '') * 1;
                //�Ƴ�ԭ�е�gao�ȴ�С
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
         * �洢�ͳ�ʼ��margin��padding
         */
        storeAndInitMarginAndPadding: function() {
            //��õ�ǰ��ѡ�е�Ԫ�ص�id
            var id = selectedElementInfo.get("id");
            //�����Ŀ���õ�margin-top
            var textMarginTop = $("." + id + "_textMarginTop").val();
            $("#tpl-component-2015-12-30-textMarginTop").val(textMarginTop);

            //�����Ŀ���õ�margin-bottom
            var textMarginBottom = $("." + id + "_textMarginBottom").val();
            $("#tpl-component-2015-12-30-textMarginBottom").val(textMarginBottom);

            //�����Ŀ���õ�margin-left
            var textMarginLeft = $("." + id + "_textMarginLeft").val();
            $("#tpl-component-2015-12-30-textMarginLeft").val(textMarginLeft);

            //�����Ŀ���õ�margin-right
            var textMarginRight = $("." + id + "_textMarginRight").val();
            $("#tpl-component-2015-12-30-textMarginRight").val(textMarginRight);

            //�����Ŀ���õ�padding-top
            var textPaddingTop = $("." + id + "_textPaddingTop").val();
            $("#tpl-component-2015-12-30-textPaddingTop").val(textPaddingTop);

            //���������Ŀ���õ�padding-bottom
            var textPaddingBottom = $("." + id + "_textPaddingBottom").val();
            $("#tpl-component-2015-12-30-textPaddingBottom").val(textPaddingBottom);

            //���������Ŀ���õ�padding-left
            var textPaddingLeft = $("." + id + "_textPaddingLeft").val();
            $("#tpl-component-2015-12-30-textPaddingLeft").val(textPaddingLeft);

            //���������Ŀ���õ�padding-right
            var textPaddingRight = $("." + id + "_textPaddingRight").val();
            $("#tpl-component-2015-12-30-textPaddingRight").val(textPaddingRight);
        },
        /**
         * selectedElementInfo        :��ʾ���Ǳ�ѡ�е�Ԫ��
         * childPathOfSelectedElement :��ʾ���Ǳ�ѡ�е�Ԫ�صĺ��
         * cssType                    :��ʾ����cssType,��ֵ������margin-top,margin-right,margin-bottom,margin-left
         * classSuffix                :��ʾ�����������class����ֵ�ĺ�׺��������ֵ�Ǵ洢�߾�ֵ������
         * obj                        :��ʾ���ǵ�ǰ�����
         * 
         * ���÷�ʽ����:
         * .setMarginAndPadding(selectedElementInfo,' .column','margin-top','_textMarginTop',this);"
         */
        setMarginAndPadding: function(selectedElementInfo, childPathOfSelectedElement, cssType, classSuffix, obj) {
            //��õ�ǰ��ѡ�е�Ԫ�ص�id
            var id = selectedElementInfo.get("id");

            //��õ�ǰ��д�ĸ߶�ֵ
            var inputValue = $.trim($(obj).val());
            //�����Ŀ���Ϊ�գ�ֱ�ӷ���
            if (!this.isNotBlank(inputValue)) return;
            inputValue = this.handleInputValue(obj, inputValue);
            //ɾ��֮ǰ���õĲ���ֵ
            // this.removeCss(id,childPathOfSelectedElement,cssType);
            //���ò���ֵ
            $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);

            var styleCss = $("#generatedCss").text();
            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + childPathOfSelectedElement + "{" + cssType + ":" + inputValue + " !important;}" + "\r\n";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);

            if (cssType == 'margin-left' || cssType == 'margin-right') {
                $("#tpl-component-2015-12-30-textAlignReshow .align-img").removeClass('active');
            } else {
                $("#tpl-sidebar-2016-03-24-textVerticalAlign .vertical-bg").removeClass('active');
            }
            //����Ԫ�ص��ظ�����
            $("." + id + classSuffix).val(inputValue);
        },
        /**
         * �����ϱ߾�
         * @param {[type]} value [description]
         */
        setMarginTop: function(value) {
            var id = selectedElementInfo.get("id");
            value = value.replace('px', '') * 1 + 'px';
            $.tplComponentTextSetting.setStyleCss('', 'margin-top', value);
            $("." + id + "_textMarginTop").val(value);
        },
        /**
         * ����xia�߾�
         * @param {[type]} value [description]
         */
        setMarginBottom: function(value) {
            var id = selectedElementInfo.get("id");
            value = value.replace('px', '') * 1 + 'px';
            $.tplComponentTextSetting.setStyleCss('', 'margin-bottom', value);
            $("." + id + "_textMarginBottom").val(value);
        },
        /**
         * �����ϱ߾�
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
         * �����ϱ߾�
         * @param {[type]} value [description]
         */
        setMarginRight: function(value) {
            var id = selectedElementInfo.get("id");
            value = value.replace('px', '') * 1 + 'px';
            $.tplComponentTextSetting.setStyleCss('', 'margin-right', value);
            $("." + id + "_textMarginRight").val(value);
        },
        /**
         * �����ı����������
         */
        storeAndInitTextFontFamily: function() {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var fontFamily = $("." + id + "_textFontFamily").val();

            //��ʾ��������
            $("#tpl-component-2015-12-30-text-font-Family-Val").text(fontFamily);
            //��������font-family
            $("#" + id).find('div').eq(0).css('font-family', fontFamily);
        },
        /**
         * �������ֵ�����
         */
        setFontFamily: function() {
            //1�������������
            var fontFamily = $.trim($("#tpl-component-2015-12-30-text-font-Family-Val").text());
            //���ѡ�������ѡ��ֱ�ӷ���
            if (fontFamily == "��ѡ��") return;

            //2�����id������ֵ
            var id = selectedElementInfo.get("id");
            //3���Ƴ���ǰ���õ�����
            $.common.removeGeneratedCss(id, " .tpl-component-2015-12-30-text-content", 'font-family');

            var styleCss = $("#generatedCss").text();

            //������ͨ�����������ʱ���ɵ�����ֵ
            var styleText = "#" + id + " .tpl-component-2015-12-30-text-content{font-family:" + fontFamily + " !important;}";

            //������������
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);

            $("." + id + "_textFontFamily").val(fontFamily);

        },
        /**
         * ѡ�������ʱ�򴥷��������
         */
        selectTextFontFamily: function() {
            $("#tpl-component-2015-12-30-text-font-Family-Val").bind("setFontFamily", function() {
                $.tplComponentTextSetting.setFontFamily();
            });
            $("#tpl-component-2015-12-30-text-font-Family li").click(function(event) {
                //ʹ��triggerHandler�ĺô��Ǵ˺������ᴥ��Ĭ�ϵĺ���������ð��
                $("#tpl-component-2015-12-30-text-font-Family-Val").triggerHandler("setFontFamily", []);

            });
        },
        /**
         * �洢���߳�ʼ�����������С
         */
        storeAndInitTextFontSize: function() {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var fontSize = $("." + id + "_textFontSize").val();
            //��������
            $("#tpl-component-2015-12-30-textFontSize").val(fontSize);
            //��������font-size
            $("#" + id).find('div').eq(0).css('font-size', fontSize);
        },
        /*
         * ����text�������Ҷ���
         */
        setAlign: function(selectedElementInfo, childPathOfSelectedElement, value) {
            //1�����id������ֵ
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
         * ���ô�ֱ����Ķ��뷽ʽ��
         * @param {[type]} value [description]
         */
        setMiddle: function(value) {
            //1�����id������ֵ
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
         * ���ñ�������ִ�С
         */
        setFontSize: function(selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var fontSize = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if (!this.isNotBlank(fontSize)) return;
                //��������С
                fontSize = this.handleInputValue(obj, fontSize);

                //�Ƴ�ԭ���������Сcss
                if (fontSize) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, 'font-size');

                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{font-size:" + fontSize + " !important;}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + "_textFontSize").val(fontSize);

            } catch (e) {
            }
        },

        /**
         * �洢���߳�ʼ�����������и�
         */
        storeAndInitTextLineHeight: function() {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
            var lineHeight = $("." + id + "_textLineHeight").val();
            //��������
            $("#tpl-component-2015-12-30-textLineHeight").val(lineHeight);
            //��������line-height
            $("#" + id).find('div').eq(0).css('line-height', lineHeight);
        },
        /**
         * ���ñ���������и�
         */
        setLineHeight: function(selectedElementInfo, childPathOfSelectedElement, obj) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //2�������д�������С��ֵ
                var lineHeight = $.trim($(obj).val());
                //�����д�������ǿյģ�ֱ�ӷ���
                if (!this.isNotBlank(lineHeight)) return;
                //��������С
                lineHeight = this.handleInputValue(obj, lineHeight);

                //�Ƴ�ԭ���������Сcss
                if (lineHeight) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, 'line-height');
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{line-height:" + lineHeight + " !important;}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + "_textLineHeight").val(lineHeight);

            } catch (e) {
            }
        },
        /**
         * �洢���߳�ʼ���߿����ɫ
         */
        storeAndInitTextColor: function() {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var textColor = $.trim($("." + id + "_textColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            this.initColor("tpl-component-2015-12-30-textColor", textColor);
        },
        storeAndInitBorderColor: function() {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //��ô洢����ɫֵ
            var textColor = $.trim($("." + id + "_borderColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            this.initColor("borderColor", textColor);
        },
       
        /**
         * ���ñ�����������ɫ
         * selectedElementInfo        :��ʾ��ѡ�е�Ԫ��ֵ
         * childPathOfSelectedElement :��ʾ����
         */
        setColor: function(selectedElementInfo, childPathOfSelectedElement, color) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ

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

        // ��������border��ʾ
        setStartBtn: function() { //��ť״̬����
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
         * �洢���߳�ʼ������������뷽ʽ
         */

        storeAndInitTextTextAlign: function() {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            //���֮ǰ������
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
         * ���ñ���������и�
         * value   :��ʾ����ֵ�����Դ��ݵ���"left","center","right"
         */
        setTextAlign: function(selectedElementInfo, childPathOfSelectedElement, value) {
            try {
                //1�����id������ֵ
                var id = selectedElementInfo.get("id");
                //�����д�������ǿյģ�ֱ�ӷ���
                if (!this.isNotBlank(value)) return;

                //�Ƴ�ԭ���������Сcss
                // this.removeCss(id,childPathOfSelectedElement,"text-align");
                if (value) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, 'text-align');
                    var styleCss = $("#generatedCss").text();
                    //4��������ͨ�����������ʱ���ɵ�����ֵ
                    var styleText = "#" + id + childPathOfSelectedElement + "{text-align:" + value + " !important;}";
                    //5���滻���������ƴ��
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                }

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + "_textTextAlign").val(value);

            } catch (e) {
            }
        },

        /**
         * �洢���߳�ʼ������������
         */
        storeAndInitTextFontStyle: function() {
            //���ѡ�еĶ���
            var id = selectedElementInfo.get("id");
            $("#tpl-component-2015-12-30-textFontStyle div").removeClass("active");

            //��������Ƿ�Ӵֵı��
            var textFontWeightFlag = $.trim($("." + id + "_textFontWeight").val());
            //����Ϊ�մ���ʱ��ִ��
            if (textFontWeightFlag != "") {
                $("#tpl-component-2015-12-30-textFontStyle div").eq(parseInt(textFontWeightFlag)).addClass("active");
            }

            //���������ı��
            var textFontStyleFlag = $.trim($("." + id + "_textFontStyle").val());
            if (textFontStyleFlag != "") {
                $("#tpl-component-2015-12-30-textFontStyle div").eq(parseInt(textFontStyleFlag)).addClass("active");
            }

            //����������εı��
            var textTextDecorationFlag = $.trim($("." + id + "_textTextDecoration").val());
            if (textTextDecorationFlag != "") {
                $("#tpl-component-2015-12-30-textFontStyle div").eq(parseInt(textTextDecorationFlag)).addClass("active");
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
        setFontStyle: function(selectedElementInfo, childPathOfSelectedElement, key, type, obj) {
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

                    // $("#tpl-component-2015-12-30-textFontStyle div").eq(2).toggleClass("active");
                } else if (key == "3") {
                    //ɾ����
                    cssType = "text-decoration";
                    fontCss = "text-decoration: line-through;";

                    // $("#tpl-component-2015-12-30-textFontStyle div").eq(3).toggleClass("active");
                }

                //�Ƴ�ԭ�еı߿���ʽ
                if ($(obj).hasClass("active")) {
                    $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);
                    $("." + id + type).val("");
                    return;
                }
                $.common.removeGeneratedCss(id, childPathOfSelectedElement, cssType);

                var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
                //ƴ�Ӷ��뷽ʽcss��ʽ
                var styleText = "#" + id + childPathOfSelectedElement + "{" + fontCss + "}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ

                $("#generatedCss").text(styleCss);

                //������������Ϣ�洢��Ӱ���ֶ���
                $("." + id + type).val(key);

            } catch (e) {
            }
        },
        /**
         * �洢���ʼ���б����ӵ���ɫ
         */
        storeAndInitTextLinkStyle: function() {
            var id = selectedElementInfo.get("id");

            var textLinkColor = $.trim($("." + id + "_textLinkColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            this.initColor("tpl-component-2015-12-30-textLink", textLinkColor);

            var textVisitedColor = $.trim($("." + id + "_textVisitedColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            this.initColor("tpl-component-2015-12-30-textVisited", textVisitedColor);

            var textHoverColor = $.trim($("." + id + "_textHoverColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            this.initColor("tpl-component-2015-12-30-textHover", textHoverColor);

            var textActiveColor = $.trim($("." + id + "_textActiveColor").val());
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            this.initColor("tpl-component-2015-12-30-textActive", textActiveColor);
        },
        /**
         * ����δ�����ʵ�����
         * 
         * a:link                    :��ʾδ�����ʵ�����
         * a:visited                 :�ѱ����ʵ�����
         * a:hover                   :���ָ���ƶ���������
         * a:active                  :���ڱ����������
         * 
         * selectedElementInfo       :��ʾ����ѡ�е�Ԫ�ص���Ϣ
         * childPathOfSelectedElement:��ʾѡ�е�·��
         * type                      :��ʾ���õ����ͣ��ֱ���:link; :visited; :hover; :active
         * color                     :��ʾ���õ���ɫֵ
         * colorPickerId             :��ʾ��ɫѡ������id
         */
        setLinkStyle: function(selectedElementInfo, childPathOfSelectedElement, type, color) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + type, 'color');
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + type + '>span', 'color');
                var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
                var styleText = "#" + id + childPathOfSelectedElement + type + "{color:" + color + " !important;}";
                styleText += "#" + id + childPathOfSelectedElement + type + ">span{color:" + color + " !important;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;

                //����ʽ�ļ���ֵ
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
         * �洢���߳�ʼ��Link��ǩ��textDecoration
         */
        storeAndInitTextLinkTextDecoration: function() {
            var id = selectedElementInfo.get("id");

            var textLinkFlag = parseInt($.trim($("." + id + "_textLinkFlag").val()));
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            $("#tpl-component-2015-12-30-textLinkFlag div").removeClass("active");
            $("#tpl-component-2015-12-30-textLinkFlag div").eq(textLinkFlag).addClass("active");

            var textVisitedFlag = parseInt($.trim($("." + id + "_textVisitedFlag").val()));
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            $("#tpl-component-2015-12-30-textVisitedFlag div").removeClass("active");
            $("#tpl-component-2015-12-30-textVisitedFlag div").eq(textVisitedFlag).addClass("active");

            var textHoverFlag = parseInt($.trim($("." + id + "_textHoverFlag").val()));
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
            $("#tpl-component-2015-12-30-textHoverFlag div").removeClass("active");
            $("#tpl-component-2015-12-30-textHoverFlag div").eq(textHoverFlag).addClass("active");

            var textActiveFlag = parseInt($.trim($("." + id + "_textActiveFlag").val()));
            //��ʼ������ҳ�沿�ֵ�ѡ��Ч��
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
                //����ʾ�߿�
                this.setStyleCss('', 'border', '0 solid ' + _borderColor);

                $("#" + id + "_isShowborder").val(0)
            } else {
                //��ʾ�߿�
                this.setStyleCss('', 'border', '1px solid ' + _borderColor);
                //this.setStyleCss('','border-width','1px');
                $("#" + id + "_isShowborder").val(1)
            }
        },
        // ˮƽ�������
        reSetshuiping: function(obj, inputObj) {
            var id = selectedElementInfo.get("id");

            var value = $("#" + id + inputObj).val() * 1;
            switch (value) {
                case 1:
                    // ˮƽ�������
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.left').addClass('active')
                    break;
                case 2:
                    // ˮƽ��zhong����
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.center').addClass('active')
                    break;
                case 3:
                    // ˮƽ���Ҷ���
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.right').addClass('active')
                    break;
                default:
                    // statements_def
                    break;
            }
        },
        // ��ֱ�������
        reSetChuizhi: function(obj, inputObj) {
            var id = selectedElementInfo.get("id");
            var value = $("#" + id + inputObj).val() * 1
            switch (value) {
                case 1:
                    // ˮƽ�������
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.top').addClass('active')
                    break;
                case 2:
                    // ˮƽ��zhong����
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.middle').addClass('active')
                    break;
                case 3:
                    // ˮƽ���Ҷ���
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.bottom').addClass('active')
                    break;
                default:
                    // statements_def
                    break;
            }
        },
        // ����ckeditor����ʱ��
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
        // ����˫����ʾckeditor�¼�
        showCkEditorEvent: function() {
            // var that = this;
            var id = selectedElementInfo.get("id");
            $("#" + id + " .box").off('click');
            $("#" + id + " .box").on('click', function(e) {

            });
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
        setLinkTextDecoration: function(selectedElementInfo, childPathOfSelectedElement, type, flag) {
            try {
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                //�Ƴ�ԭ�еı߿���ʽ

                var textDecoration = "";
                if (flag == "0") {
                    textDecoration = "none";
                } else if (flag == "1") {
                    textDecoration = "underline";
                }
                $.common.removeGeneratedCss(id, childPathOfSelectedElement + type, 'text-decoration');
                var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ

                var styleText = "#" + id + childPathOfSelectedElement + type + "{text-decoration:" + textDecoration + "!important;}";
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
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
        //ͬ���ı��߶�
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
            // ����ckeditor�����¼�
            // $.tplComponentTextSetting.showCkEditorEvent();
            // CKEDITOR.disableAutoInline = true;
            // CKEDITOR.inline('myEditor');
            // ���ô�ֱ����
            // �Ƿ���ʾ�߿�
            // �����Ƿ���ʾwheel��btn��ť
            $(".tpl-config-2015-12-30-text .visible_border").off('click').on('click', function() {
                // ����Ч��
                var playValue = $.tplComponentTextSetting.hdBtn(this);
                    // ����ѭ������
                $.tplComponentTextSetting.setIsShowBorder(playValue);
            });

            $("input").on('focus', function() {
                $(this)[0].select();
            });

            $('#'+id+' .tpl-component-2015-12-30-text-content').off('blur',$.tplComponentTextSetting.synHeight).on('blur',$.tplComponentTextSetting.synHeight);




            // ������ÿ�ʼ
            var serverPath = $.common.getComponetIMagesUrl(id);
            var jsonData = [];
            /**
             * ѡ����ʱ�Ļص�
             * @param  {[type]}   json [description]
             * @param  {[Number]}   type [1: ϵͳ��� 2���û����]
             * @param  {[Number]}   index [�ڼ������]
             * @return {Function}      [description]
             */
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
                    $("#" + id + "_saveSystemFg").val(index);
                    $("#" + id + "_savecoustomFg").val("");
                } else {
                    // �û����
                    var styleId = json[index].id;
                    var id = selectedElementInfo.get("id");
                    var componentClass = $('#' + id).attr('class').split(' ')[0];
                    $.tplCustomerStyle.changeStyle(styleId, id, componentClass, '', hiddenCb);
                    $("#" + id + "_savecoustomFg").val(index);
                    $("#" + id + "_saveSystemFg").val("");
                }
            }
            // �������ݻص�
            var hiddenCb = $.tplComponentTextSetting.readHiddenInfo;
            // ���ݱ���ķ������
            var saveCoustomFg = "";
            var saveSystemFg = "";
            saveCoustomFg = $("#" + id + "_savecoustomFg").val() === "" ? "" : $("#" + id + "_savecoustomFg").val() * 1;
            saveSystemFg = $("#" + id + "_saveSystemFg").val() === "" ? "" : saveSystemFg = $("#" + id + "_saveSystemFg").val() * 1;
            var targetFg = {
                saveSystemFg: saveSystemFg,
                saveCoustomFg: saveCoustomFg
            };
            // ��ʼ��ϵͳ����������Դ
            counstomStyle.init(jsonData, 1, callback, hiddenCb, targetFg, '�ı����');

            // ������е��û�����������Դ
            var sqluserArr = counstomStyle.getUserStyleData('tpl-component-2016-3-23-picWheel');
            counstomStyle.formatUserarr(sqluserArr.innerStyleByClassName, function(userarr) {
                // ��ʼ���û����
                counstomStyle.init(userarr, 0, callback, hiddenCb, targetFg, '�ı����');
            });
            // ������ý���
        
            var texts = $(".tpl-component-2015-12-30-text").get();
            if (texts && texts.length > 0) {
                $.each(texts, function(index, text) {
                    //���������ʾ
                    $(text).off('mouseenter', $.common.mEShowBorder);
                    //����Ƴ�����
                    $(text).off('mouseleave', $.common.mLHideBorder);
                    //�������ʾ
                    $(text).off('click', $.common.cShowBorder);
                   
                    //���������ʾ
                    $(text).on('mouseenter', {
                        obj: text
                    }, $.common.mEShowBorder);
                    //����Ƴ�����
                    $(text).on('mouseleave', {
                        obj: text
                    }, $.common.mLHideBorder);
                    //�������ʾ
                    $(text).on('click', {
                        obj: text
                    }, $.common.cShowBorder);
                    
                });

            }
            //    ����ʷ��¼��������

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