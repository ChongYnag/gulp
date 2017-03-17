(function($) {
    $.tplComponentPicture = {
        
    };
})(jQuery);
$(function() {
    if ($('head').find('script[name=systemJs]').length > 0) {
        var pictures = $(".tpl-component-2016-01-07-picture").get();
        if (pictures && pictures.length > 0) {
            $.each(pictures, function(index, pic) {
                //���������ʾ
                $(pic).off('mouseenter', $.common.mEShowBorder);
                //����Ƴ�����
                $(pic).off('mouseleave', $.common.mLHideBorder);
                //�������ʾ
                $(pic).off('click', $.common.cShowBorder);
            
                //���������ʾ
                $(pic).on('mouseenter', {
                    obj: pic
                }, $.common.mEShowBorder);
                //����Ƴ�����
                $(pic).on('mouseleave', {
                    obj: pic
                }, $.common.mLHideBorder);
                //�������ʾ
                $(pic).on('click', {
                    obj: pic
                }, $.common.cShowBorder);
                

            });
        }
    }
    $('input').on('click', function() {
        $(this).focus();
    });
});

(function($) {
    $.tplComponentPictureSetting = {
        readHiddenInfo: function(newId) {

            var id = newId || selectedElementInfo.get("id");
            //�߾�
            var _up = $("#" + id + "_picUP").val();
            var _down = $("#" + id + "_picDOWN").val();
            var _width = $("#" + id + "_picWidth").val();
            var _height = $("#" + id + "_picHeight").val();
            var _url = $("#" + id + "_url").val();
            var _marginLeft = $("#" + id + "_picMarginLeft").val();
            var _picMarginRight = $("#" + id + "_picMarginRight").val();
            var _picBottomFontHtml = $("#" + id + "_picBottomFontHtml").val();

            // ��ȡ�߶�ֵ
            var _bottomBoxHeight = $("#" + id + "_bottomBoxHeight").val();
            // ���ø߶�ֵ
            $("#bottomBoxHeight").val(_bottomBoxHeight);
            /*�ڱ߾�*/
            var _bottomPaddingTop = $("#" + id + "_bottomPaddingTop").val();
            $("#bottomPaddingTop").val(_bottomPaddingTop);
            var _bottomPaddingLeft = $("#" + id + "_bottomPaddingLeft").val();
            $("#bottomPaddingLeft").val(_bottomPaddingLeft);
            var _bottomPaddingRight = $("#" + id + "_bottomPaddingRight").val();
            $("#bottomPaddingRight").val(_bottomPaddingRight);
            var _bottomPaddingBottom = $("#" + id + "_bottomPaddingBottom").val();
            $("#bottomPaddingBottom").val(_bottomPaddingBottom);
                /*�ڱ߾�*/

            $("#bottomBoxHeightPic").css('height', _bottomBoxHeight);
            $("#tplRadioUP").val(_up);
            $("#tplRadioDOWN").val(_down);
            $("#tplRadioWidth").val(_width);
            $.tplComponentPictureSetting.setImgWidth(_width);
            $("#tplRadioHeight").val(_height);
            $("#tplRadioMarginLeft").val(_marginLeft);
            $("#tplRadioMarginRight").val(_picMarginRight);
            $("#picBottomFontHtml").val(_picBottomFontHtml);
            // this.setFontHtml(_picBottomFontHtml)
            $("#target_a").val(_url);

            //���õײ�box����ɫ
            var _bottomBoxColor = $("#" + id + "_bottomBoxColor").val();
            $.tplComponentPictureSetting.initClorDefault("#bottomBoxColor", _bottomBoxColor, $.tplComponentPictureSetting.setBottomBoxColor);
            $.tplComponentPictureSetting.setBottomBoxColor(_bottomBoxColor);



            // �������hover titleЧ��

            // ���ñ��⾭������ɫ
            var _titleHoverColor = $("#" + id + "_titleHoverColor").val();
            $.tplComponentPictureSetting.initClorDefault("#titleHoverColor", _titleHoverColor, $.tplComponentPictureSetting.setBottomtitleHoverColor);
            $.tplComponentPictureSetting.setBottomtitleHoverColor(_titleHoverColor);

            var _titleColor = $("#" + id + "_titleColor").val();
            $.tplComponentPictureSetting.initClorDefault("#titleColor", _titleColor, $.tplComponentPictureSetting.setBottomtitleColor);
            $.tplComponentPictureSetting.setBottomtitleColor(_titleColor);

            // ˮƽ���봹ֱ�������
            $.tplComponentPictureSetting.reSetshuiping("#tpl-sidebar-2016-01-13-pictrueAlign", '_shuiping');
            $.tplComponentPictureSetting.reSetChuizhi("#tpl-sidebar-2016-04-06-pictrueVerticalAlign", '_chuizhi');

            //���õײ������ʾ����Ч����
            var _isShowHoverBtn = $("#" + id + "_isShowHoverBtn").val() * 1;
            $.tplComponentPictureSetting.setBottomDisplay(_isShowHoverBtn);
            $("#setBottomDisplay .radio-checked").removeClass('active').eq(_isShowHoverBtn).addClass('active');

            $.tplComponentPictureSetting.reshowBottomFontAlign();

            // ͸����
            var opacityVal = $("#" + id + "_opacity").val();
            $("#setOpacity").val(opacityVal);
            //ͼƬ����ϸλ�û���
            var _FontPos = $("#" + id + "_FontPos").val() * 1;
            $("#pictrueFontPos").find('.align-img').removeClass('active');
            $("#pictrueFontPos").find('.align-img').eq(_FontPos).addClass('active');
            //�������±߾�
            var _fontMarginTop = $("#" + id + "_fontMarginTop").val();
            $("#fontMarginTop").val(_fontMarginTop);
            var _fontMarginBottom = $("#" + id + "_fontMarginBottom").val();
            $("#fontMarginBottom").val(_fontMarginBottom);

            var _scrollHeight = $("#" + id + '_scrollHeight').val();
            $("#setScrollHeight").val(_scrollHeight);

            // ����Ĭ�ϵ�ͼƬ
            $.tplComponentPictureSetting.initAddPic();
            // ���ø������
            var _cmsDocumentTypeArr = String($("#" + id + "_cmsDocumentTypeArr").val()).split(',');
            $.tplComponentPictureSetting.bindcheckBox(_cmsDocumentTypeArr, "#gjlx .myCheckBox_liu");
            // ��ʾ����
            var _cmsDocumentSetfontNum = $("#" + id + "_cmsDocumentSetfontNum").val();
            $.tplComponentPictureSetting.bindfontLength(_cmsDocumentSetfontNum);
            // ����cmsͼƬ���������ͻ���
            var _cmspro_documentSetMs = $("#" + id + "_cmspro_documentSetMs").val();
            $.tplComponentPictureSetting.bindCmsDocumentSetMs(_cmspro_documentSetMs);
            // ����cmsͼƬ�ı������ͻ���
            var _cmspro_documentSetTitle = $("#" + id + "_cmspro_documentSetTitle").val();
            $.tplComponentPictureSetting.bindCmsDocumentSetTitle(_cmspro_documentSetTitle);
            // ����cmsͼƬ��������
            var _cmspro_documentTitle = $("#" + id + "_cmspro_documentTitle").val();
            $.tplComponentPictureSetting.bindCmsDocumentTitle(_cmspro_documentTitle);
            // ����cmsͼƬ����������
            var _cmspro_documentMs = $("#" + id + "_cmspro_documentMs").val();
            $.tplComponentPictureSetting.bindCmsDocumentMs(_cmspro_documentMs);
            //���÷�������
            var _batchrule = $("#" + id + "_batchrule").val();
            $.tplComponentPictureSetting.bindpicBtn(_batchrule);


            // �ӵڼ�ƪ�����ʼ��ȡ
            var _cmsDocumentStartPos = $("#" + id + "_cmsDocumentStartPos").val() * 1;
            _cmsDocumentStartPos = _cmsDocumentStartPos <= 1 ? 1 : _cmsDocumentStartPos + 1;

            $("#cmsDocumentStartPos").val(_cmsDocumentStartPos);

            // ѡ��վ����Ŀ������
            var _cmsColumnsName = $("#" + id + "_cmsColumnsName").val();
            if (_cmsColumnsName) {
                $("#cmsColumnsFont .selectlmLi").eq(0).find('.selectLmText').html(_cmsColumnsName);
                $("#cmsColumnsFont").show();
            } else {
                $("#cmsColumnsFont").hide();
            }
            /**
             * ��������ͼƬ�ľ���
             */
            $.tplComponentPictureSetting.resetImgAlign();
            $.tplComponentPictureSetting.resetFontPos();
            $.tplComponentPictureSetting.setDisplayFont();
            $.tplComponentPictureSetting.setDisplayTitleFont();
            $.tplComponentPictureSetting.setDefultBg();
            var width = $("#" + id).width();
            $("#" + id).css('width', width);
            // �������ӻ���״̬
            var targetVal = $("#" + id + "_targetLink").val();
            $.tplComponentPictureSetting.bindTargetLink(targetVal);

            // ����title����
            var _titleFamily = $("#" + id + "_titleFamily").val();
            $("#titleFamily").html(_titleFamily);
            $.tplComponentPictureSetting.setTitleFamily();

            // �����������ô�С
            var _titleFontSize = $("#" + id + "_titleFontSize").val();
            $("#titleFontSize").val(_titleFontSize);
            var _xxFontSize = $("#" + id + "_xxFontSize").val();
            $("#xxFontSize").val(_xxFontSize);

            // ���Ա�������margin
            var _titleMargin = JSON.parse($("#" + id + "_titleMargin").html());
            $("#titleMarginTop").val(_titleMargin.top);
            $("#titleMarginBottom").val(_titleMargin.bottom);
            $("#titleMarginLeft").val(_titleMargin.left);
            $("#titleMarginRight").val(_titleMargin.right);
            $.tplComponentPictureSetting.setTitleMargin();

            // ������ϸ����margin
            var _xxMargin = JSON.parse($("#" + id + "_xxMargin").html());
            $("#xxMarginTop").val(_xxMargin.top);
            $("#xxMarginBottom").val(_xxMargin.bottom);
            $("#xxMarginLeft").val(_xxMargin.left);
            $("#xxMarginRight").val(_xxMargin.right);
            $.tplComponentPictureSetting.setxxMargin();

            // ���� ����ϸ�� ����ɫ
            var _xxColor = $("#" + id + "_xxColor").val();
            $.tplComponentPictureSetting.initColor("#xxColor", _xxColor, $.tplComponentPictureSetting.setxxColor);
            $.tplComponentPictureSetting.setxxColor(_xxColor);

            //���õײ�ժҪ����ɫ
            var _bottomBoxfontColor = $("#" + id + "_bottomBoxfontColor").val();
            $.tplComponentPictureSetting.initClorDefault("#xxColor", _bottomBoxfontColor, $.tplComponentPictureSetting.setBottomBoxfontColor);
            $.tplComponentPictureSetting.setBottomBoxfontColor(_bottomBoxfontColor);

            // ����ժҪ��������ɫ
            //var _xxHoverColor = $("#" + id + "_xxHoverColor").val();
            //$.tplComponentPictureSetting.initColor("#titleHoverColor", _xxHoverColor, $.tplComponentPictureSetting.setxxHoverColor);
            //$.tplComponentPictureSetting.setxxHoverColor(_xxHoverColor);

            // ���á���ϸ�� ����ɫ
            var _xxFontColor = $("#" + id + "_xxFontColor").val();
            $.tplComponentPictureSetting.initColor("#xxFontColor", _xxFontColor, $.tplComponentPictureSetting.setMorenXxFontColor);
            $.tplComponentPictureSetting.setMorenXxFontColor(_xxFontColor);

            // ���á���ϸ������ ����ɫ
            var _xxFontHoverColor = $("#" + id + "_xxFontHoverColor").val();
            $.tplComponentPictureSetting.initColor("#xxFontHoverColor", _xxFontHoverColor, $.tplComponentPictureSetting.setXxHoverFontColor);
            $.tplComponentPictureSetting.setXxHoverFontColor(_xxFontHoverColor);


            // �Ƿ���ӡ���ϸ��
            var _isAddxxFont = $("#" + id + "_isAddxxFont").val();
            $.tplComponentPictureSetting.setStartBtn('.visibleMs', _isAddxxFont);

            // �Ƿ�����������
            var _isIndent = $("#" + id + "_isIndent").val();
            $.tplComponentPictureSetting.setStartBtn('.xxIndent', _isIndent);

            // ������ϸ�и�
            var _xxLineHeight = $("#" + id + "_xxLineHeight").val();
            $("#xxLIneHeight").val(_xxLineHeight);

            // ������ϸ����
            var _xxAlign = $("#" + id + "_xxAlign").val() * 1;
            $.tplComponentPictureSetting.bindxxAlign(_xxAlign);

            // ���Ա���Ӵ�Ч��
            $.tplComponentPictureSetting.bindTitleWeight();
            // ���Ա����»���
            $.tplComponentPictureSetting.bindTiltleDecoration();
            $.tplComponentPictureSetting.bindMemoWeight();
            $.tplComponentPictureSetting.bindMemoDecoration();

            // ����������
            $.tplComponentPictureSetting.bindtitleAlign();
            // �����и߻���
            var _titleLineheight = $("#" + id + "_titleLineheight").val();
            $("#titleLineHeight").val(_titleLineheight);
            $.tplComponentPictureSetting.setxxFamily();
            $.tplComponentPictureSetting.setTitleFamily();
            $.tplComponentPictureSetting.setxxMargin();
            $.tplComponentPictureSetting.bindSetxxPos($("#" + id + "_FontPos").val());
            //������ͼƬ�Ŀ��
            //$.tplComponentPictureSetting.bindsetPicwh();
            //var _bottomBoxfontColor = $("#" + id + "_bottomBoxfontColor").val();
            //$.tplComponentPictureSetting.setBottomAndInitColor("#bottomBoxfontColor", 'color', _bottomBoxfontColor);
            //�󶨿�����õ�keypress�¼�
            //$.cssGenerator.bindKeypressEvent($.tplComponentPictureSetting.setwidthbykeyEvent,$.tplComponentPictureSetting.setHeightbykeyEvent)

            // ������ק���ƴ�С����
            // setImgWidth
            // setImgHeight
            // setUp
            // setMarginLeft
            var setW = $.tplComponentPictureSetting.setImgWidth;
            var setML = $.tplComponentPictureSetting.setMarginLeft;
            var setH = $.tplComponentPictureSetting.setImgHeight;
            var setMT = $.tplComponentPictureSetting.setUp;
            $.tplComponentResize.initResizeComponent(id, setW, setML, setH, setMT);
            $.tplComponentMove.initMoveComponent(id, setML, setMT);
            /**
             * ��קλ��������߾�
             */
            $.dragResizeInitInfo.getCallBack(setML, setMT);
            // �������ê���Ҽ��˵�
            $.customMenu.init(id);
        },
        /**
         * ͨ��keypress�¼����������ȣ�
         * @param pos �������ң� 0 ��1 ��
         */
        setwidthbykeyEvent: function(pos) {
            var id = selectedElementInfo.get("id");
            var w;
            //���������ȱ��
            if (pos === 1) {
                w = $("#" + id + "_picWidth").val().replace('px', '') * 1 + 1;
            } else {
                //���������ȱ�С
                w = $("#" + id + "_picWidth").val().replace('px', '') * 1 - 1;
            }
            $("#" + id + "_picWidth").val(w + ' px');
            $("#tplRadioWidth").val(w + ' px');
            $.tplComponentPictureSetting.setStyleCss(id, '', 'margin-left', w + 'px');
            //$.tplComponentPictureSetting.setStyleCss(id, ' .picture-holder', 'margin-left', w+'px');
        },
        /**
         * ͨ��keypress�¼����������ȣ�
         * @param pos �������ң� 0 ��1 ��
         */
        setHeightbykeyEvent: function(pos) {
            var id = selectedElementInfo.get("id");
            var h;
            if (pos) {
                //��������߶ȱ��
                h = $("#" + id + "_picHeight").val().replace('px', '') * 1 + 1;
            } else {
                //��������߶ȱ�С
                h = $("#" + id + "_picHeight").val().replace('px', '') * 1 - 1;
            }
            $.tplComponentPictureSetting.setStyleCss(id, '', 'margin-top', h + 'px');
        },
        /**
         * ������ͼƬ�Ŀ��
         */
        // bindsetPicwh: function() {
        //     var id = selectedElementInfo.get("id");
        //     var w = $("#" + id + "_picWidth").val().replace('px', '') * 1 + 'px';
        //     var h = $("#" + id + "_picHeight").val().replace('px', '') * 1 + 'px';
        //     $.tplComponentPictureSetting.setStyleCss(id, '', 'width', w);
        //     var _FontPos = $("#" + id + "_FontPos").val() * 1;
        //     var fontHeight = $('#' + id + ' .bottom_font').outerHeight();
        //     switch (_FontPos) {
        //         case 0:
        //             break;
        //         case 2:
        //             h = (h.replace('px', '') * 1 + $("#" + id + " .bottom_font").outerHeight()) + 'px';
        //             break;
        //     }
        //     this.setStyleCss(id, '', 'height', h);
        // },

        /**
         * 0: ������ʾ�� 1:Ĭ�ϲ���ʾ����꾭����ʾ�� 2: Ĭ����ʾ����꾭����ʾ
         * @param setVal
         */
        setBottomDisplay: function(setVal) {
            var id = selectedElementInfo.get("id");
            setVal = setVal * 1;
            var temp = '';
            switch (setVal) {
                case 0:
                    this.setStyleCss(id, ' .bottom_font', 'display', 'none');
                    this.setStyleCss(id, ':hover .bottom_font', 'display', 'none');
                    break;
                case 1:
                    this.setStyleCss(id, ' .bottom_font', 'display', 'none');
                    this.setStyleCss(id, ':hover .bottom_font', 'display', 'block');
                    break;
                case 2:
                    this.setStyleCss(id, ' .bottom_font', 'display', 'block');
                    this.setStyleCss(id, ':hover .bottom_font', 'display', 'block');
                    break;
            }
            $("#" + id + "_isShowHoverBtn").val(setVal);
            $("#setBottomDisplay .radio-checked").removeClass('active').eq(setVal).addClass('active');
            var _bottomBoxfontColor = $("#" + id + "_bottomBoxfontColor").val();
            $.tplComponentPictureSetting.setBottomAndInitColor("#bottomBoxfontColor", 'color', _bottomBoxfontColor);
        },
        /**
         * ���õײ�title�������ɫ��
         * @param color
         */
        setBottomtitleColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' h2.moren', 'color', color);
            $.tplComponentPictureSetting.setStyleCss(id, ' h2.moren a', 'color', color);
            $("#" + id + "_titleColor").val(color);
        },
        /**
         * ����tiltle��hoverЧ��
         * @param {[type]} color [description]
         */
        setBottomtitleHoverColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' h2.moren:hover', 'color', color);
            $.tplComponentPictureSetting.setStyleCss(id, ' h2.moren a:hover', 'color', color);
            $("#" + id + "_titleHoverColor").val(color);
        },
        /**
         * ���õײ����ֵ���ɫ
         * @param color
         */
        setBottomBoxfontColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' .bottom_font span.moren', 'color', color);
            $("#" + id + "_bottomBoxfontColor").val(color);
        },
        /**
         * ���õײ���������ɫ
         * @param color
         */
        setBottomBoxColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' .bottom_font', 'background-color', color);
            $("#" + id + "_bottomBoxColor").val(color);

        },
        /**display
         * ����bottom��
         * @param  {[type]} val [description]
         * @return {[type]}     [description]
         */
        bindBottomDisplay: function(val) {
            var id = selectedElementInfo.get("id");
            //  0: bhover 1:bnone 2:bdisplay 
            $("#" + id).removeClass('.bhover').removeClass('.bnone').removeClass('bdisplay');
            switch (val) {
                case 0:
                    $("#" + id).addClass('bhover');
                    break;
                case 1:
                    $("#" + id).addClass('bnone');
                    break;
                case 2:
                    $("#" + id).addClass('bdisplay');
                    break;
            }
            $("#" + id + "_isShowHoverBtn").val(val);

        },
        /**
         * ����λ��
         * @param  {String} pos 0 ͼ�� 1 ͼ�� 2 ͼ��
         * @return {[type]}     [description]
         */
        bindSetxxPos: function(pos) {
            pos = pos * 1;
            var id = selectedElementInfo.get("id");
            $("#setxxPos .radio-checked").removeClass('active');
            switch (pos) {
                case 0:
                    $("#setxxPos .radio-checked").eq(0).addClass("active");
                    break;
                case 1:
                    $("#setxxPos .radio-checked").eq(1).addClass("active");
                    break;
                case 2:
                    $("#setxxPos .radio-checked").eq(2).addClass("active");
                    break;
            }
        },
        /**
         *�������� ��ϸ�� λ��
         * @param  {String} pos 0 ͼ�� 1 ͼ�� 2 ͼ��
         * @return {[type]}     [description]
         */
        setxxPos: function(pos) {
            var id = selectedElementInfo.get("id");
            $("#setxxPos .radio-checked").removeClass('active');
            var _bottomBoxColor;
            switch (pos) {
                case 0:
                    $("#" + id + "_FontPos").val(0);
                    $("#setxxPos .radio-checked").eq(0).addClass("active");
                    _bottomBoxColor = 'rgba(16, 16, 15, 0.701961)';
                    $("#" + id + "_titleColor").val('#fff');
                    $("#" + id + "_titleHoverColor").val('#fff');
                    $("#" + id + "_xxColor").val('#fff');
                    $("#" + id + "_xxHoverColor").val('#fff');

                    break;
                case 1:
                    _bottomBoxColor = 'rgba(0,0,0,0)';
                    $("#" + id + "_FontPos").val(1);
                    $("#setxxPos .radio-checked").eq(1).addClass("active");
                    $("#" + id + "_titleColor").val('#333');
                    $("#" + id + "_titleHoverColor").val('#333');
                    $("#" + id + "_xxColor").val('#333');
                    $("#" + id + "_xxHoverColor").val('#333');
                    break;
                case 2:
                    _bottomBoxColor = 'rgba(0,0,0,0)';
                    $("#" + id + "_FontPos").val(2);
                    $("#setxxPos .radio-checked").eq(2).addClass("active");
                    $("#" + id + "_titleColor").val('#333');
                    $("#" + id + "_titleHoverColor").val('#333');
                    $("#" + id + "_xxColor").val('#333');
                    $("#" + id + "_xxHoverColor").val('#333');
                    $("#" + id + "_bottomBoxfontColor").val("#333");
                    break;
            }
            //���õײ�box����ɫ
            this.initClorDefault("#bottomBoxColor", _bottomBoxColor, $.tplComponentPictureSetting.setBottomBoxColor);
            $.tplComponentPictureSetting.setBottomBoxColor(_bottomBoxColor);
            this.readHiddenInfo();
        },
        initAddPic: function() {
            var id = selectedElementInfo.get("id");
            if ($("#" + id).find(' #static img').attr('src')) {
                return;
            }
            var serverPath = $.common.getComponetIMagesUrl(id);
            // �ֲ���ʼ״̬
            var pics = [{
                path: serverPath + '/images/localPictrue.jpg',
                name: '��ˮ�����ţ��������������Ȼ���ʺ�',
                title: '�˾ӻ�����ѧ��һ��������۾�Ϊ�о�����,����̽�����뻷��֮����໥��ϵ�Ŀ�ѧ��'
            }];
            // �洢��ʼ����·����
            var jsonData = {
                yun: [],
                local: [],
                all: []
            };

            for (var i = 0; i < pics.length; i++) {
                this.addPic(pics[i].path, pics[i].name);
                var obj = {};
                obj.path = pics[i].path;
                obj.name = pics[i].name;
                obj.link = '';
                obj.title = pics[i].title;
                // jsonData.all.push(obj);
                jsonData.local.push(obj);
            }
            $("#" + id + "_JSONdata").val(JSON.stringify(jsonData));
            if (!$("#" + id + "_picWidth").val()) {
                return;
            }
            var initWidth = $("#" + id + "_picWidth").val().replace('px', "");
            this.setImgWidth(initWidth);

        },
        /**
         * ����Ĭ��ͼƬ�Ĵ�С
         * @param {str} src ��ַ
         */
        setDefaultImgSize: function(src) {
            var id = selectedElementInfo.get("id");
            var that = this;
            $('<img>').attr('src', src).load(function() {
                var width = this.width;
                var height = this.height;
                $("#tplRadioWidth").val(width + ' px');
                $("#tplRadioHeigh").val(height + ' px');
                $("#" + id + "_picWidth").val(width + ' px');
                $("#" + id + "_picHeight").val(width + ' px');
                that.setImgWidth(width);
            });

        },

        initAddPics: function(isAdd) {
            var id = selectedElementInfo.get("id");
            if (isAdd) return;
            var serverPath = $.common.getComponetIMagesUrl(id);
            // �ֲ���ʼ״̬
            var pics = [{
                path: serverPath + '/images/localPictrue.jpg',
                name: '��ˮ�����ţ��������������Ȼ���ʺ�',
                title2: '��ˮ�����ţ��������������Ȼ���ʺ�'
            }];
            // �洢��ʼ����·����
            var jsonData = {
                yun: [],
                local: [],
                all: []
            };
            for (var i = 0; i < pics.length; i++) {
                this.addPic(pics[i].path, pics[i].name);
                var obj = {};
                obj.path = pics[i].path;
                obj.name = pics[i].name;
                obj.link = '';
                obj.title = '';
                // jsonData.all.push(obj);
                jsonData.local.push(obj);
            }
            var initWidth = $("#" + id + "_picWidth").val().replace('px', "");
            this.setImgWidth(initWidth);

        },
        addPic: function(imgPath, fileName, link) {
            var id = selectedElementInfo.get("id");
            if (!imgPath) {
                $("#" + id + ' img').addClass('hide');
                this.setStyleCss(id, ' img', 'display', 'none');
                //$("#"+id+" .bottom_font").html('');
                //this.setStyleCss(id, ' .bottom_font', 'display', 'none');
                return;
            } else {
                $("#" + id + ' img').removeClass('hide');
                //this.setStyleCss(id, ' .bottom_font', 'display', 'block');
                this.setStyleCss(id, ' img', 'display', 'block');
            }
            var backAllclick = 'onclick="$.common.goToallsidebar()"';
            var imgHtml = '<img ' + backAllclick + ' src="' + imgPath + '" />';

            if ($("#" + id + " #static.picture-holder").find('img').length > 0) {
                $("#" + id + " #static.picture-holder").find('img').attr('src', imgPath)
            } else {
                $("#" + id + " #static.picture-holder").append(imgHtml);
            }
            // ����ͼƬ�ײ�����������ΪfileName
            if (fileName.indexOf('.') != -1) {
                fileName = fileName.split('.')[0]
            }
            $("#" + id).find(" #static .bottom_font span").html('ժҪ');
            $("#" + id).find(" #static .bottom_font h2.moren").html(fileName);

            $("#" + id + " .picture-icon-bg").hide();
            if (link) {
                $("#" + id + " .picture-holder").find('img').wrap('<a href="' + link + '"></a>');
                // this.setBottomWidth(imgPath);
                $("#" + id).find(" #static .bottom_font span").html('ժҪ');
                $("#" + id).find(" #static .bottom_font h2.moren").html('<a href="' + link + '">' + fileName + '</a>');
            } else {
                var img = $("#" + id + " #static.picture-holder").find('img');
                $("#" + id + " #static.picture-holder").find('a').remove();
                $("#" + id + " #static.picture-holder").append(img);
            }
        },
        /**
         * ����ckeditor������ʱ��
         * @param  {[type]} obj [description]
         * @return {[type]}     [description]
         */
        showCkEditor: function(obj) {
            var id = selectedElementInfo.get("id");
            var windowWidth = $(window).width();
            var cmslm = $("#" + id + "_cmsColumnsName").val();
            if (!$(".icon-yul").hasClass('active') && !cmslm) {
                CKEDITORHandler.tplEditSelectedContent('', selectedElementInfo, '', true, obj);
            } else {
                return;
            }

        },
        setBottomWidth: function(imgPath) {
            var targetId = selectedElementInfo.get("id");
            var img = $("#" + targetId).find(".picture-holder .bottom_font").next();
            var imgWidth;
            img[0].onload = function() { //ͼƬ������ɵ�ʱ��
                    imgWidth = img.width();
                    $("#" + targetId).find(".picture-holder .bottom_font").css('width', imgWidth)
                    $("#" + targetId).find(".picture-holder .bottom_font").css({
                        'left': '50%',
                        'margin-left': -imgWidth / 2
                    })
                }
                // ���ͼƬ��text-algin;
            var txtAlign = $("#" + targetId).find('.picture-holder').css('text-align');
            var selfWidth = $("#" + targetId).find(".picture-holder .bottom_font").siblings('img').width()
            if (txtAlign == 'center') {

                $("#" + targetId).find(".picture-holder .bottom_font").css({
                    'left': '50%',
                    'width': selfWidth,
                    'margin-left': -selfWidth / 2
                })
            } else if (txtAlign == 'left') {
                $("#" + targetId).find(".picture-holder .bottom_font").css({
                    'left': 0,
                    'width': selfWidth,
                    'margin-left': 0
                })
            } else if (txtAlign == 'right') {
                $("#" + targetId).find(".picture-holder .bottom_font").css({
                    'left': "",
                    'right': 0,
                    'width': selfWidth,
                    'margin-left': 0
                })
            }

        },
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
         * ��ͼ��������
         * @param {[type]} childPathOfSelectedElement [description]
         * @param {[type]} obj                        [description]
         */
        setScrollHeight: function(val) {
            try {
                if (val.indexOf('px') == -1) {
                    val = val * 1;
                } else {
                    val = val.replace('px', '') * 1;
                }
                //��ȡѡ��Ԫ�ص�id
                var id = selectedElementInfo.get("id");
                var styleCss, styleText;
                if (val !== 0) {
                    this.setStyleCss(id, '', 'height', val + 'px');
                    this.setStyleCss(id, '', 'overflow-y', 'scroll');
                    $("#" + id + "_scrollHeight").val(val + ' px');
                    return;
                } else {
                    val = $("#" + id + "_picHeight").val().replace('px', '') * 1;
                    this.setStyleCss(id, '', 'height', val + 'px');
                    $.common.removeGeneratedCss(id, "", 'overflow-y');
                    $("#" + id + "_scrollHeight").val('');
                }

            } catch (e) {
            }
        },
        /**
         * ��ӵ�style����ʽ
         * @param {[type]} id    [description]
         * @param {string} child ���ѡ����
         * @param {String} style [��ʽ����]
         * @param {[String]} val   ��ʽֵ
         */
        setStyleCss: function(id, child, style, val) {
            $.common.removeGeneratedCss(id, child, style, val);
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            var styleText = "#" + id + child + "{" + style + ":" + val + ";}";
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            return styleText;
        },
        // �ײ�����ˮƽλ�û���
        reshowBottomFontAlign: function() {
            var id = selectedElementInfo.get("id");
            var value = $("#" + id + "_bottomFontAlign").val() * 1;
            switch (value) {
                case 1:
                    $("#bottomFontAlign .align-img").removeClass('active');
                    $("#bottomFontAlign .align-img").eq(0).addClass('active');
                    break;
                case 2:
                    $("#bottomFontAlign .align-img").removeClass('active');
                    $("#bottomFontAlign .align-img").eq(1).addClass('active');
                    break;
                case 3:
                    $("#bottomFontAlign .align-img").removeClass('active');
                    $("#bottomFontAlign .align-img").eq(2).addClass('active');
                    break;
                default:
                    // statements_def
                    break;
            }
        },
        /**
         * ����͸����
         * @param {[type]} obj [description]
         */
        setOpacity: function(obj) {
            try {
                var id = selectedElementInfo.get("id");
                // removeCss(id,"opacity");

                var reg = /^[0-9]*$/;
                var value = obj.value;
                if (value) {
                    value = value.replace(/\s+/g, "");
                    if (!reg.test(value)) {
                        $(obj).val("");
                        return;
                    }
                    this.setStyleCss(id, " .picture-holder img", 'opacity', value / 100);
                    $("#" + id + "_opacity").val(value)
                }

            } catch (e) {
            }
        },
        setFontHtml: function(value) {
            try {
                var id = selectedElementInfo.get("id");
                var target = $("#" + id).find(".bottom_font").html(value)
            } catch (e) {
            }

        },
        setUp: function(value) {
            try {
                var id = selectedElementInfo.get("id");
                if (value) {
                    $("#tpl-sidebar-2016-04-06-pictrueVerticalAlign").find('.vertical-bg').removeClass('active');
                    $("#" + id + "_chuizhi").val(4);
                    value = value + '';
                    value = value.replace('px', '') * 1 + 'px';
                    $.common.removeGeneratedCss(id, "", 'margin-top');
                    var styleCss = $("#generatedCss").text();
                    var styleText = "#" + id + "{margin-top:" + value + " !important;}";
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $.tplComponentPictureSetting.storeUp(value);
                    $("#tplRadioUP").val(value);
                }

            } catch (e) {
            }
        },
        setDown: function(value) {
            try {
                var id = selectedElementInfo.get("id");
                if (value) {
                    $("#tpl-sidebar-2016-04-06-pictrueVerticalAlign").find('.vertical-bg').removeClass('active');
                    $("#" + id + "_chuizhi").val(4);
                    value = value.replace(/\s+/g, "");
                    if (value.indexOf("px") == -1) {
                        value = value + "px";
                    }
                    $.common.removeGeneratedCss(id, "", 'margin-bottom');
                    var styleCss = $("#generatedCss").text();

                    var styleText = "#" + id + "{margin-bottom:" + value + " !important;}";
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);

                    this.storeDown(value);

                }

            } catch (e) {
            }
        },
        /**
         * �����������߾�
         * @param {[type]} value [description]
         */
        setMarginLeft: function(value) {
            try {
                var id = selectedElementInfo.get("id");
                value = value + '';
                value = value.replace('px', '') * 1;
                $("#tpl-sidebar-2016-01-13-pictrueAlign").find('.align-img').removeClass('active');
                $("#" + id + "_shuiping").val(4);
                $.tplComponentPictureSetting.setStyleCss(id, '', 'margin-left', value + 'px');
                $("#" + id + '_picMarginLeft').val(value + ' px');
                // ����ˮƽ����Ϊ����Ծ״̬
                $("#tpl-sidebar-2016-01-13-pictrueAlign .vertical-bg").removeClass('active');
                $("#tplRadioMarginLeft").val(value + ' px');
            } catch (e) {
            }
        },
        /**
         * ����������ұ߾�
         * @param {[type]} value [description]
         */
        setMarginRight: function(value) {
            try {
                if (value.indexOf('px') == -1) {
                    value = value * 1;
                } else {
                    value = value.replace('px', '') * 1;
                }
                var id = selectedElementInfo.get("id");
                if (value) {
                    $("#tpl-sidebar-2016-01-13-pictrueAlign").find('.align-img').removeClass('active');
                    $("#" + id + "_shuiping").val(4);
                    $.tplComponentPictureSetting.setStyleCss(id, '', 'margin-right', value + 'px');
                    $("#" + id + '_picMarginRight').val(value);

                }

            } catch (e) {
            }
        },
        // ����ͼƬ�Ŀ��
        setImgWidth: function(value) {
            try {
                var id = selectedElementInfo.get("id");
                value = value + "";
                if ($('#' + id).children('.resize-cover').length === 0) {
                    $.common.regain();
                }
                if (value) {
                    value = value.replace(/\s+/g, "");
                    if (value.indexOf("px") == -1 && value.indexOf("%") == -1) {
                        value = value + "px";
                    }
                    $.common.removeGeneratedCss(id, " .picture-holder", 'width');
                    $.common.removeGeneratedCss(id, "", 'width');

                    var styleCss = $("#generatedCss").text();
                    var styleText = "#" + id + " .picture-holder" + " " + "{width:" + value + " !important;}";
                    styleText += "#" + id + "" + " " + "{width:" + value + " !important;}";
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    $("#" + id + "_picWidth").val(value);
                    // this.storeWidth(value);
                    // this.setBottomWidth();
                    $("#tplRadioWidth").val(value);
                }

            } catch (e) {
            }
        },
        setImgHeight: function(value) {
            try {
                var id = selectedElementInfo.get("id");
                value = value.replace('px', '') * 1 + 'px';
                $.tplComponentPictureSetting.setStyleCss(id, '', 'height', value);
                $("#" + id + "_picHeight").val(value);
                $("#tplRadioHeight").val(value);

                if ($('#' + id).children('.resize-cover').length === 0) {
                    $.common.regain();
                }
            } catch (e) {
            }
        },
        setBottomHeight: function(value) {
            try {
                var id = selectedElementInfo.get("id");

                if (value) {
                    value = value.replace(/\s+/g, "");
                    if (value.indexOf("px") == -1 && value.indexOf("%") == -1) {
                        value = value + "px";
                    }
                    $.common.removeGeneratedCss(id, " .bottom_font", 'height');

                    var styleCss = $("#generatedCss").text();
                    var styleText = "#" + id + " .bottom_font" + " " + "{height:" + value + " !important;line-height:" + value + " !important;}";
                    styleCss += "\r\n" + styleText;
                    $("#generatedCss").text(styleCss);
                    this.storeBottomHeight(value);

                }
            } catch (e) {
            }
        },
        setFontAlign: function(value) {
            try {
                var id = selectedElementInfo.get("id");

                if (value) {
                    $("#" + id).find(".bottom_font").css('text-align', value);
                    switch (value) {
                        case 'left':
                            $("#" + id + "_bottomFontAlign").val(1)
                            break;
                        case 'center':
                            $("#" + id + "_bottomFontAlign").val(2)
                            break;
                        case 'right':
                            $("#" + id + "_bottomFontAlign").val(3)
                            break;
                        default:
                            // statements_def
                            break;
                    }
                }

            } catch (e) {
            }
        },
        setBottomPadding: function(style, value) { //����bottom�����box��padding
            var id = selectedElementInfo.get("id");
            if (value.indexOf('px') != -1) {
                value = value.slice(0, -2) * 1
            }
            value = value * 1;
            switch (style) {
                case 'padding-top':
                    $("#" + id).find(".bottom_font").css({
                        'padding-top': value
                    });
                    $.tplComponentPictureSetting.storeInfo('_bottomPaddingTop', value);
                    break;
                case 'padding-left':
                    $("#" + id).find(".bottom_font").css({
                        'padding-left': value
                    })
                    $.tplComponentPictureSetting.storeInfo('_bottomPaddingLeft', value);
                    break;
                case 'padding-right':
                    $("#" + id).find(".bottom_font").css({
                        'padding-right': value
                    })
                    $.tplComponentPictureSetting.storeInfo('_bottomPaddingRight', value);
                    break;
                case 'padding-bottom':
                    $("#" + id).find(".bottom_font").css({
                        'padding-bottom': value
                    })
                    $.tplComponentPictureSetting.storeInfo('_bottomPaddingBottom', value);
                    break;
                default:
                    // statements_def
                    break;
            }

        },
        storeInfo: function(obj, value) {
            var id = selectedElementInfo.get("id");
            value = value + ' '
            if (value.indexOf('px') == -1) {
                value += 'px'
            }
            $("#" + id + obj).val(value);
        },
        storeFontBottomHtml: function(value) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_picBottomFontHtml").val(value);
        },
        storeBottomHeight: function(value) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_bottomBoxHeight").val(value);
        },
        storeUp: function(up) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_picUP").val(up);
        },
        storeDown: function(down) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_picDOWN").val(down);
        },
        storeWidth: function(width) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_picWidth").val(width);
        },
        storeHeight: function(height) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_picHeight").val(height);
        },
        storeMarginLeft: function(margnLeft) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_picMarginLeft").val(height);
        },
        storeMarginRight: function(margnRight) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_picMarginRight").val(margnRight);
        },


        /**
         * ����ժҪ�и�
         * @param  {[string]} val [�и�ֵ]
         */
        setxxLineHeight: function(val) {
            if (val.indexOf('px') == -1) {
                val = val + 'px'
            } else {
                val = val.replace('px', '') * 1;
            }
            var id = selectedElementInfo.get("id");
            $("#" + id + "_xxLineHeight").val(val + ' px');
            $.common.removeGeneratedCss(id, ' span.moren', 'line-height');
            var styleText = "#" + id + ' span.moren' + "{line-height:" + val + "px!important;}";
            styleText += "\r\n";
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);

        },

        /**
         * title�������
         * @return {[type]} [description]
         */
        bindtitleAlign: function() {
            var id = selectedElementInfo.get("id");
            var align = $("#" + id + "_titleAlign").val() * 1;
            $("#set-title-align .align-img").removeClass('active');
            $("#set-title-align .align-img").removeClass('active').eq(align).addClass("active");
            this.setTitleAlign(align);
        },
        /**
         * [����ժҪ�»���]
         * @return {[type]} [description]
         */
        bindMemoDecoration: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var decoration = JSONobj.decoration;
            if (!decoration) {
                // ���ó�normal
                $('#memoDecoration').removeClass('t-icon-decoration').addClass("t-icon-decoration-default");
            } else {
                $('#memoDecoration').removeClass('t-icon-decoration-default').addClass("t-icon-decoration");
            }
        },
        /**
         * ����ժҪ�ļӴ�Ч��
         * @return {[type]} [description]
         */
        bindMemoWeight: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var fontWeight = JSONobj.fontWeight;
            if (!fontWeight) {
                // ���ó�weight
                $('#memoWeight').removeClass('t-icon-weight').addClass("t-icon-weight-default");
            } else {
                $('#memoWeight').removeClass('t-icon-weight-default').addClass("t-icon-weight");
            }
        },
        /**
         * [����ժҪ�»���]
         * @return {[type]} [description]
         */
        bindTiltleDecoration: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_weightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_weightDecoration").html());
            var decoration = JSONobj.decoration;
            if (!decoration) {
                // ���ó�normal
                $('#titleDecoration').removeClass('t-icon-decoration').addClass("t-icon-decoration-default");
            } else {
                $('#titleDecoration').removeClass('t-icon-decoration-default').addClass("t-icon-decoration");
            }
        },
        /**
         * ����title�ļӴ�Ч��
         * @return {[type]} [description]
         */
        bindTitleWeight: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_weightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_weightDecoration").html());
            var fontWeight = JSONobj.fontWeight;
            if (!fontWeight) {
                // ���ó�weight
                $('#titleWeight').removeClass('t-icon-weight').addClass("t-icon-weight-default");
            } else {
                $('#titleWeight').removeClass('t-icon-weight-default').addClass("t-icon-weight");
            }
        },
        /**
         * ������ϸ�������
         * @param  {number} align �������� 0 1 2
         * @return {[type]}       [description]
         */
        bindxxAlign: function(align) {
            $("#xxAlign .align-img").removeClass('active');
            $("#xxAlign .align-img").eq(align).addClass('active');
        },
        /**
         * ��ť״̬����
         * @param {string} obj       domѡ����
         * @param {boolean} playValue �Ƿ��Ǵ�״̬
         */
        setStartBtn: function(obj, playValue) { //��ť״̬����
            if (playValue == 0) {
                $(obj).find(".pic_zoom").animate({
                    left: -30
                }, 'fast')
            } else {
                $(obj).find(".pic_zoom").animate({
                    left: 0
                }, 'fast')
            }
            $(obj).attr('play', playValue);
            return playValue;
        },
        /**
         * ����ժҪmemo �ļӴ�Ч��
         */
        setBottomMemoWeightEvent: function(eventDom) {
            var id = selectedElementInfo.get("id");
            var JSONobj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var fontWeight = JSONobj.fontWeight;
            if (!fontWeight) {
                // ���ó�weight
                $(eventDom).removeClass('t-icon-weight-default').addClass("t-icon-weight");
                JSONobj.fontWeight = true;
            } else {
                $(eventDom).removeClass('t-icon-weight').addClass("t-icon-weight-default");
                JSONobj.fontWeight = false;
            }
            $("#" + id + "_memoWeightDecoration").html(JSON.stringify(JSONobj))
            this.setBottomMemoWeight();
        },
        /**
         * ����memo��hover�»���Ч�� �¼�
         */
        setBottomMemoDecorationEvent: function(eventDom) {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var decoration = JSONobj.decoration;
            if (!decoration) {
                // ���ó�weight
                $(eventDom).removeClass('t-icon-decoration-default').addClass("t-icon-decoration");
                JSONobj.decoration = true;
            } else {
                $(eventDom).removeClass('t-icon-decoration').addClass("t-icon-decoration-default");
                JSONobj.decoration = false;
            }
            $("#" + id + "_memoWeightDecoration").html(JSON.stringify(JSONobj))
            this.setBottomMemoDecoration();
        },
        /**
         * ����memo��hover�»���Ч��
         */
        setBottomMemoDecoration: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var decoration = obj.decoration;
            $.common.removeGeneratedCss(id, ' :hover a.xx', 'text-decoration');
            var styleText = "";
            if (decoration) {
                styleText = "#" + id + ' :hover a.xx' + "{text-decoration: underline!important;}";
            } else {
                styleText = "#" + id + ' :hover a.xx' + "{text-decoration: normal!important;}";
            }
            styleText += "\r\n";
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);

        },
        /**
         * [setBottomMemoWeight description]
         */
        setBottomMemoWeight: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var fontWeight = obj.fontWeight;
            $.common.removeGeneratedCss(id, ' .bottom_font a.xx', 'font-weight');
            var styleText = "";
            if (fontWeight) {
                styleText = "#" + id + ' .bottom_font a.xx' + "{font-weight: bold!important;}";
            } else {
                styleText = "#" + id + ' .bottom_font a.xx' + "{font-weight: normal!important;}";
            }
            styleText += "\r\n";
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);
        },
        /**
         * ���á���ϸ��hover ����ɫ
         * @param color
         */
        setXxHoverFontColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' span.moren a.xx:hover', 'color', color);
            $("#" + id + "_xxFontHoverColor").val(color);
        },
        /**
         * ���á���ϸ��Ĭ�ϵ���ɫ
         */
        setMorenXxFontColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' span.moren a.xx', 'color', color);
            $("#" + id + "_xxFontColor").val(color);
        },

        /**
         * ���á���ϸ������ɫ
         * @param {[function]} [callback]
         * @param {[string]} id [domѡ����]
         */
        setxxFontColor: function(id, callback, color) {
            var that = this;
            $(id).spectrum({
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
                    callback(color);
                    $.common.regain();
                },
                change: function(color) {
                    callback(color);
                    $.common.regain();
                },
                palette: per
            });
        },
        /**
         * ���õײ�title�������ɫ
         * @param {[string]} id    input ��id
         * @param {[string]} color ��ɫֵ
         * @param {[number]} ishover �Ƿ�����꾭��
         * @param {[number]} isxx �Ƿ�����ϸ����
         */
        setBottomColor: function(id, color, ishover, isxx) {
            var that = this;
            $(id).spectrum({
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
                    if (!ishover && !isxx) {
                        // �Ǳ���������ɫ
                        that.bindsetTitleColor(color, 0);
                    } else if (ishover && !isxx) {
                        // �Ǳ��⾭��������ɫ
                        that.bindsetTitleHoverColor(color, 0);
                    } else if (ishover && isxx) {
                        // ��ϸ����������ɫ
                        that.bindsetTitleHoverColor(color, 1);
                    } else if (!ishover && isxx) {
                        // ��ϸ������ɫ
                        that.bindsetTitleColor(color, 1);
                    }
                    $.common.regain();
                },
                change: function(color) {
                    if (!ishover && !isxx) {
                        // �Ǳ���������ɫ
                        that.bindsetTitleColor(color, 0);
                    } else if (ishover && !isxx) {
                        // �Ǳ��⾭��������ɫ
                        that.bindsetTitleHoverColor(color, 0);
                    } else if (ishover && isxx) {
                        // ��ϸ����������ɫ
                        that.bindsetTitleHoverColor(color, 1);
                    } else if (!ishover && isxx) {
                        // ��ϸ������ɫ
                        that.bindsetTitleColor(color, 1);
                    }
                    $.common.regain();
                },
                palette: per
            });
        },
        /**
         * ����title�Ӵ�Ч��
         * @param {[type]} eventDom [description]
         */
        setBottomTitleWeightEvent: function(eventDom) {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_weightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_weightDecoration").html());
            var fontWeight = JSONobj.fontWeight;
            if (!fontWeight) {
                // ���ó�weight
                $(eventDom).removeClass('t-icon-weight-default').addClass("t-icon-weight");
                JSONobj.fontWeight = true;
            } else {
                $(eventDom).removeClass('t-icon-weight').addClass("t-icon-weight-default");
                JSONobj.fontWeight = false;
            }
            $("#" + id + "_weightDecoration").html(JSON.stringify(JSONobj))
            this.setBottomTitleWeight();

        },
        /**
         * ����memoժҪ�»���Ч��
         * @param {[type]} eventDom [description]
         */
        setBottomTiltleDecorationEvent: function(eventDom) {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_weightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_weightDecoration").html());
            var decoration = JSONobj.decoration;
            if (!decoration) {
                // ���ó�weight
                $(eventDom).removeClass('t-icon-decoration-default').addClass("t-icon-decoration");
                JSONobj.decoration = true;
            } else {
                $(eventDom).removeClass('t-icon-decoration').addClass("t-icon-decoration-default");
                JSONobj.decoration = false;
            }
            $("#" + id + "_weightDecoration").html(JSON.stringify(JSONobj))
            this.setBottomTitleDecoration();

        },
        /**
         * ����ժҪ���»���
         */
        setBottomTitleDecoration: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_weightDecoration").html());
            var decoration = obj.decoration;
            $.common.removeGeneratedCss(id, ' :hover h2.moren', 'text-decoration');
            var styleText = "";
            if (decoration) {
                styleText = "#" + id + ' :hover h2.moren' + "{text-decoration: underline!important;}";
            } else {
                styleText = "#" + id + ' :hover h2.moren' + "{text-decoration: normal!important;}";
            }
            styleText += "\r\n";
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);

        },
        /**
         * [���õײ����ֵļӴ�/���Ӵ�Ч��]
         */
        setBottomTitleWeight: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_weightDecoration").html());
            var fontWeight = obj.fontWeight;
            $.common.removeGeneratedCss(id, ' h2.moren', 'font-weight');
            var styleText = "";
            if (fontWeight) {
                styleText = "#" + id + ' h2.moren' + "{font-weight: bold!important;}";
            } else {
                styleText = "#" + id + ' h2.moren' + "{font-weight: normal!important;}";
            }
            styleText += "\r\n";
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);

        },
        /**
         * ���ñ��⾭����ɫ
         * @param  {string} color ��ɫֵ
         * @param  {number} isxx �Ƿ���������ϸ����ɫ
         */
        bindsetTitleHoverColor: function(color, isxx) {
            var id = selectedElementInfo.get("id");
            var targetDom = isxx ? ':hover span.moren' : ':hover h2.moren a';
            $.common.removeGeneratedCss(id, targetDom, 'color');
            var styleText = "#" + id + targetDom + "{color:" + color + "!important;}";
            styleText += "\r\n";
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);
            if (isxx) {
                $("#" + id + "_xxHoverColor").val(color);
            } else {
                $("#" + id + "_titleHoverColor").val(color);
            }

        },
        /**
         * ���ñ�����ɫ
         * @param  {string} color ��ɫֵ
         * @param  {number} isxx �Ƿ���������ϸ����ɫ
         */
        bindsetTitleColor: function(color, isxx) {
            var id = selectedElementInfo.get("id");
            if (isxx) {
                $("#" + id + "_xxColor").val(color);
                this.setStyleCss(id, ' span.moren', 'color', color);
            } else {
                $("#" + id + "_titleColor").val(color);
                this.setStyleCss(id, ' h2.moren', 'color', color);
                this.setStyleCss(id, ' h2.moren a', 'color', color);
            }
        },
        /**
         * ������ϸ��margin
         */
        setxxMargin: function() {
            var id = selectedElementInfo.get("id");
            var marginObj = JSON.parse($("#" + id + "_titleMargin").html());

            var top = $("#xxMarginTop").val();
            var bottom = $("#xxMarginBottom").val();
            var left = $("#xxMarginLeft").val();
            var right = $("#xxMarginRight").val();

            var obj = {
                left: left,
                top: top,
                right: right,
                bottom: bottom
            }
            for (prop in obj) {
                obj[prop] = obj[prop].indexOf('px') ? obj[prop].replace(' px', '') + ' px' : obj[prop];
            }
            $("#" + id + "_xxMargin").html(JSON.stringify(obj));
            this.setStyleCss(id, ' span.moren', 'margin-top', obj.top.replace(" ", ""));
            this.setStyleCss(id, ' span.moren', 'margin-bottom', obj.bottom.replace(" ", ""));
            this.setStyleCss(id, ' span.moren', 'margin-left', obj.left.replace(" ", ""));
            this.setStyleCss(id, ' a.xx', 'margin-right', obj.right.replace(" ", ""));

        },

        /**
         * ������ϸ����
         * @param  {[number]} val [�����־ 0 1 2]
         * @return {[type]}   [description]
         */
        setxxAlign: function(val) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_xxAlign").val(val);
            $.common.removeGeneratedCss(id, ' .bottom_font', 'text-align');
            switch (val) {
                case 0:
                    styleText = "#" + id + ' .bottom_font' + "{text-align: left!important;}";
                    break;
                case 1:
                    styleText = "#" + id + ' .bottom_font' + "{text-align: center!important;}";
                    break;
                case 2:
                    styleText = "#" + id + ' .bottom_font' + "{text-align: right!important;}";
                    break;
            }
            styleText += "\r\n";
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);
            var align = $("#" + id + "_titleAlign").val() * 1;
            this.setTitleAlign(align);

        },

        /**
         * ���Ƿ���ӡ���ϸ���ĵ���¼�
         * @return {[type]} [description]
         */
        bindSetisAddXxEvent: function() {
            var id = selectedElementInfo.get("id");

            // ���û��ѡ������Ŀ��return
            if (!$("#" + id + "_cmsData").val()) {
                alert('����ѡ������Ŀ');
                return;
            }
            var isAdd = $("#" + id + "_isAddxxFont").val() * 1;
            isAdd = isAdd === 0 ? 1 : 0;
            $("#" + id + "_isAddxxFont").val(isAdd);
            this.setStartBtn('.visibleMs', isAdd);
            var bottomFontBoxs = $("#" + id + " .bottom_font");
            if (isAdd) {
                this.setStyleCss(id, ' .bottom_font .xx', 'visibility', 'visible');
            } else {
                this.setStyleCss(id, ' .bottom_font .xx', 'visibility', 'hidden');
            }
        },
        /**
         * ����title��margin
         */
        setTitleMargin: function() {
            var id = selectedElementInfo.get("id");
            var marginObj = JSON.parse($("#" + id + "_titleMargin").html());

            var top = $("#titleMarginTop").val();
            var bottom = $("#titleMarginBottom").val();
            var left = $("#titleMarginLeft").val();
            var right = $("#titleMarginRight").val();

            var obj = {
                left: left,
                top: top,
                right: right,
                bottom: bottom
            }
            for (prop in obj) {
                obj[prop] = obj[prop].indexOf('px') ? obj[prop].replace(' px', '') + ' px' : obj[prop];
            }
            $("#" + id + "_titleMargin").html(JSON.stringify(obj));

            // ������߾�
            $.common.removeGeneratedCss(id, ' h2.moren', 'margin-top');
            $.common.removeGeneratedCss(id, ' h2.moren', 'margin-left');
            $.common.removeGeneratedCss(id, ' h2.moren', 'margin-bottom');
            $.common.removeGeneratedCss(id, ' h2.moren', 'margin-right');

            var styleText = "#" + id + " h2.moren" + "{margin-top:" + obj.top.replace(" ", "") + "!important;}";
            styleText += "\r\n";
            styleText += "#" + id + " h2.moren" + "{margin-bottom:" + obj.bottom.replace(" ", "") + "!important;}";
            styleText += "\r\n";
            styleText += "#" + id + " h2.moren" + "{margin-right:" + obj.right.replace(" ", "") + "!important;}";
            styleText += "\r\n";
            styleText += "#" + id + " h2.moren" + "{margin-left:" + obj.left.replace(" ", "") + "!important;}";
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);

        },
        /**
         * ����title������
         */
        setTitleFamily: function() {
            var id = selectedElementInfo.get("id");
            $("#selectTitleFamily li").on('click', function() {
                var famiyHtml = $(this).html();
                $("#titleFamily").html(famiyHtml);
                $("#" + id + "_titleFamily").val(famiyHtml);
                $.common.removeGeneratedCss(id, " h2.moren", 'font-family');
                var styleText = "#" + id + " h2.moren{font-family:" + famiyHtml + "!important;}";
                var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

            });
        },
        /**
         * ������ϸ������
         */
        setxxFamily: function() {
            var id = selectedElementInfo.get("id");
            $("#selectxxFamily li").on('click', function() {
                var famiyHtml = $(this).html();
                $("#titleFamily").html(famiyHtml);
                $("#" + id + "_titleFamily").val(famiyHtml);
                $.common.removeGeneratedCss(id, " span.moren", 'font-family');
                var styleText = "#" + id + " span.moren{font-family:" + famiyHtml + "!important;}";
                var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
                //�滻���������ƴ��
                styleCss += "\r\n" + styleText;
                //����ʽ�ļ���ֵ
                $("#generatedCss").text(styleCss);

            });
        },
        /**
         *����title�Ķ��뷽ʽ
         * @param {number} value 0,1,2,
         */
        setTitleAlign: function(value) {
            var id = selectedElementInfo.get("id");
            $.common.removeGeneratedCss(id, ' h2.moren', 'text-align');
            $("#" + id + "_titleAlign").val(value);
            var styleText = "";
            switch (value) {
                case 0:
                    styleText = "#" + id + ' h2.moren' + "{text-align: left!important;}";
                    break;
                case 1:
                    styleText = "#" + id + ' h2.moren' + "{text-align: center!important;}";
                    break;
                case 2:
                    styleText = "#" + id + ' h2.moren' + "{text-align: right!important;}";
                    break;
            }
            styleText += "\r\n";
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);

        },
        /**
         * ����title�и�
         * @param {[type]} value [description]
         */
        setLineHeight: function(value) {
            if (value.indexOf('px') == -1) {
                value = value + 'px'
            } else {
                value = value.replace('px', '') * 1;
            }
            var id = selectedElementInfo.get("id");
            $("#" + id + "_titleLineheight").val(value + ' px');
            $.common.removeGeneratedCss(id, ' h2.moren', 'line-height');
            var styleText = "#" + id + ' h2.moren' + "{line-height:" + value + "px!important;}";
            styleText += "\r\n";
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);

        },
        /**
         * ���ñ�������Ĵ�С
         * @param {string} value  �����Сֵ
         * @param {string} target �������ö���λ
         * @param {string} saveId ����洢����λ
         */
        setFontSize: function(value, target, saveId) {
            if (value.indexOf('px') == -1) {
                value = value * 1;
            } else {
                value = value.replace('px', '') * 1;
            }
            var id = selectedElementInfo.get("id");
            $.common.removeGeneratedCss(id, target, 'font-size');
            var styleText = "#" + id + target + "{font-size:" + value + "px!important;}";
            var styleCss = $("#generatedCss").text(); //��ȡ���е���ʽ
            //�滻���������ƴ��
            styleCss += "\r\n" + styleText;
            //����ʽ�ļ���ֵ
            $("#generatedCss").text(styleCss);
            $("#" + id + saveId).val(value + ' px')

        },
        /**
         * ����Ĭ�ϵĵײ��ı�����ɫ
         */
        setDefultBg: function() {
            var id = selectedElementInfo.get("id");
            var isDisplayBottomTitleFont = $("#" + id + "_bottomFontBg").val();
            if (isDisplayBottomTitleFont) {
                //$("#" + id + " .bottom_font").css({'background': isDisplayBottomTitleFont, 'color': '#fff'});
            } else {
                //$("#" + id + " .bottom_font").css({'background': 'none', 'color': '#333'});
            }
        },
        /**
         * �����Ƿ���ʾ�ײ�����
         */
        setDisplayTitleFont: function() {
            var id = selectedElementInfo.get("id");
            var isDisplayBottomTitleFont = $("#" + id + "_bottomFontTitleDisplay").val() * 1;
            var _titleColor = $("#" + id + "_titleColor").val();
            if (isDisplayBottomTitleFont) {
                $("#" + id + " .bottom_font h2").show();
                this.setStyleCss(id, ' .bottom_font h2', 'display', 'block');
                //this.setBottomColor("#titleColor", _titleColor, 0, 0);
            } else {
                this.setStyleCss(id, ' .bottom_font h2', 'display', 'none')
            }

        },
        /**_
         * �����Ƿ���ʾ�ײ�����
         */
        setDisplayFont: function() {
            var id = selectedElementInfo.get("id");
            var isDisplayBottomFont = $("#" + id + "_bottomFontDisplay").val() * 1;
            if (isDisplayBottomFont) {
                this.setStyleCss(id, ' .bottom_font span.moren', 'display', 'inline-block');
            } else {
                this.setStyleCss(id, ' .bottom_font span.moren', 'display', 'none');
                //$("#" + id + " .bottom_font").hide();
            }

        },
        /**
         * ����hover�¼�
         */
        bindHoverEvent: function() {
            // var id = selectedElementInfo.get("id");
            // $("#" + id).find(' #static .picture-holder').off('mouseenter').off('mouseleave');
            // $("#" + id).find('.bottom_font').show();
        },
        /**
         * �����������ֵ�λ��
         */
        resetFontPos: function() {
            var id = selectedElementInfo.get("id");
            var _FontPos = $("#" + id + "_FontPos").val() * 1;
            switch (_FontPos) {
                case 0:
                    this.setFontDefualt();
                    break;
                case 1:
                    this.setTop();
                    break;
                case 2:
                    this.setBottom();
                    break;
            }

        },
        /**
         * ɾ����ǰѡ�е���Ŀ
         * isAdd �Ƿ����ͼƬ
         * @return {[type]} [description]
         */
        deleteCmsLm: function(isAdd) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_cmsColumnsName").val('');
            $("#" + id + "_cmsData").val("");
            $("#cmsColumnsFont").hide();
            // ȡ��ѡ����Ŀ
            $.cmsTree.cancelSelectCmsLm();
            $("#" + id).addClass('staticComponent').removeClass('dynamicComponent');
            $("#" + id + ' #cmsCode').find('cmspro_documents').attr("sitecode", '');
            $("#" + id + ' #cmsCode').find('cmspro_documents').attr("channelcode", '');
            this.deletecall(id);
            this.initAddPics(isAdd);
            if ($("#" + id + ' img').hasClass('hide')) {
                this.setStyleCss(id, ' .bottom_font', 'display', 'none');
            } else {
                this.setStyleCss(id, ' .bottom_font', 'display', 'block');
            }

        },
        /**
         * ɾ������Ŀ����֮��Ĳ���
         * @return {[type]} [description]
         */
        deletecall: function(id) {
            $("#" + id + "_cmsData").val('');
            // ���ø������
            $("#" + id + "_cmsDocumentTypeArr").val('0|1|2|3|4|5,8,9');
            // ��ʾ����
            $("#" + id + "_cmsDocumentSetfontNum").val('');
            // ����cmsͼƬ���������ͻ���
            $("#" + id + "_cmspro_documentSetMs").val(1);
            // ����cmsͼƬ�ı������ͻ���
            $("#" + id + "_cmspro_documentSetTitle").val('1');
            // ����cmsͼƬ��������
            //$("#" + id + "_cmspro_documentTitle").val(1);
            // ����cmsͼƬ����������
            //$("#" + id + "_cmspro_documentMs").val(1);
            //���÷�������
            $("#" + id + "_batchrule").val(0);
            // �ӵڼ�ƪ�����ʼ��ȡ
            $("#" + id + "_cmsDocumentStartPos").val(0);
            // ����cmsͼƬ���������ͻ���
            $("#" + id + "_cmspro_documentSetMs").val(1);
            this.readHiddenInfo();
        },
        /**
         * ����code����
         * @param  {[json]} obj [{siteCode: "test222", channelCode: "333", name: "3333"}]
         * @return {[type]}     [description]
         */
        callBackCode: function(obj) {
            //��̬�߼���obj����  staticArr ������ѡ��ĸ���б�
            if (obj.state === '0') {
                var path = obj.staticArr[0].path;
                var name = obj.staticArr[0].title;
                var link = obj.staticArr[0].channelUrl;
                $.tplComponentPictureSetting.addPic(path, name, link);
                return;
            } else if (obj.state === '1') {
                // ��̬�߼���
                if (obj.name === undefined) {
                    return;
                }
                var id = selectedElementInfo.get("id");
                $("#cmsColumnsFont .selectlmLi").eq(0).find('.selectLmText').html(obj.name);
                $("#" + id + "_cmsColumnsName").val(obj.name);
                $("#cmsColumnsFont").show();
                //   ����ѡ����Ŀ�� siteCode   CHANNELCODE
                $("#" + id + " #cmsCode cmspro_documents").attr('sitecode', obj.siteCode);
                $("#" + id + " #cmsCode cmspro_documents").attr('channelcode', obj.channelCode);
                $("#" + id + "_cmsData").val(JSON.stringify(obj));
                $("#" + id).removeClass('staticComponent').addClass('dynamicComponent');
                $.tplComponentPictureSetting.setCmsData();
            }
        },
        showCmsTree: function() {
            $.cmsTree.init(this.callBackCode);
        },
        /**
         * �洢������
         * @param  {arr} inputArr ����
         * @param  {$dom} checkBox checkbox Jquery����
         * @return {[type]}          [description]
         */
        bindcheckBox: function(inputArr) {
            for (var i = 0; i < inputArr.length; i++) {
                if (inputArr[i]) {
                    $('#cmsDocumentsLx .checkIcon').eq(i).addClass('active');
                } else {
                    $('#cmsDocumentsLx .checkIcon').eq(i).removeClass('active');
                }
            }
        },
        /**
         * ����ģ�壬�Լ��洢�������
         * @param  {number} index 0,1,2��λ�ã�
         * @return {[type]}       [description]
         */
        checkBoxEvent: function(domE, index) {
            $(domE).find('.checkIcon').toggleClass('active');
            var id = selectedElementInfo.get("id");
            var _cmsDocumentTypeArr = $("#" + id + "_cmsDocumentTypeArr").val().split(',');
            switch (index) {
                case 0:
                    _cmsDocumentTypeArr[0] = $(domE).find('.checkIcon').hasClass('active') ? '0|1|2|3|4|5' : '';
                    break;
                case 1:
                    _cmsDocumentTypeArr[1] = $(domE).find('.checkIcon').hasClass('active') ? '8' : '';
                    break;
                case 2:
                    _cmsDocumentTypeArr[2] = $(domE).find('.checkIcon').hasClass('active') ? '9' : '';
                    break;
            }
            $("#" + id + "_cmsDocumentTypeArr").val(_cmsDocumentTypeArr.join(','));
            // ����ģ��
            $("#" + id + " #cmsCode cmspro_documents").attr('documenttype', _cmsDocumentTypeArr.join('|'));
            this.setCmsData();
        },
        /**
         * ����������ʾ������
         * @param  {[String]} len [��ʾ�����ĳ��Ȼ���]
         * @return {[type]}     [description]
         */
        bindfontLength: function(len) {
            var id = selectedElementInfo.get("id");
            if (!len) {
                $("#cmsDocumentSetfontNum").val('');
            } else {
                $("#cmsDocumentSetfontNum").val(len);
            }
        },
        setFontLength1: function(val) {

            var id = selectedElementInfo.get("id");
            var reg = /\d/gi;
            var htmlCon = $("#" + id + " #static .bottom_font span.moren span").text();
            var oldLength = htmlCon.length;
            if (reg.test(val * 1) && val !== '0') {
                $("#" + id + "_cmsDocumentSetfontNum").val(val);
                $("#" + id + " #cmsCode .ms_liu cmspro_document").attr('num', val);
                if (oldLength > val * 1) {
                    $("#" + id + " #static .bottom_font span.moren span").html(htmlCon.slice(0, val) + '...')
                } else {
                    $("#" + id + " #static .bottom_font span.moren span").html(htmlCon.slice(0, val))
                }
            } else {
                $("#" + id + "_cmsDocumentSetfontNum").val('');
                $("#" + id + " #cmsCode cmspro_document").removeAttr('num');
            }

        },
        /**
         * ����cms�е����ñ�ǩ�ĳ���
         * @param str
         * @returns {*}
         */
        backtextIndex: function(str, val) {
            var textCount = 0;
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                if (/^[\u0000-\u00ff]$/.test(c)) //ƥ��˫�ֽ�
                {
                    textCount += 0.5;
                } else {
                    textCount += 1;
                }
                if (textCount >= Number(val)) {
                    return i + 1;
                }
            }
            return str.length;
        },
        /*
         * ����cms���ݣ����ú󲻽�ȡ�ֵĳ���
         * */
        setCmsData2: function() {
            var id = selectedElementInfo.get("id");
            var info = this.getCmsInfo();
            if (info.appendixsList.length === 0) {
                this.setStyleCss(id, ' img', 'display', 'none');
                return;
            } else {
                this.setStyleCss(id, ' img', 'display', 'block');
            }
            var picSrc = info.appendixsList[0][0].path;
            var reg = /http(s)?:\/\//;
            var picHref = "";
            //    �ж��Ƿ���http httpsǰ׺
            if (reg.test(info.manuscriptsInfo[0].url)) {
                picHref = info.manuscriptsInfo[0].url;
            } else {
                picHref = previewPortal + '/' + info.manuscriptsInfo[0].url;
            }
            $("#" + id + "_picLink").val(picHref);
            var targetVal = $("#" + id + "_targetLink").val();
            var img = $("#" + id + " #static.picture-holder img");
            img.attr({ 'src': picSrc });
            if (img.parent()[0].tagName !== 'A') {
                img.wrap('<a href="' + picHref + '" target="' + targetVal + '"></a>');
            } else {
                img.parent().attr('href', picHref);
            }
            if ($("#radioTitleSelect .list .radioIcon").eq(0).hasClass('active')) {
                //    �������
                var title = info.manuscriptsInfo[0].title;
                title = '<a href="' + picHref + '" target="_blank" style="text-decoration:none;">' + title + '</a>';
                $("#" + id + " #static .bottom_font h2").html(title);
            } else {
                var subTitle = info.manuscriptsInfo[0].subTitle;
                subTitle = '<a href="' + picHref + '" target="_blank" style="text-decoration:none;">' + subTitle + '</a>';
                $("#" + id + " #static .bottom_font h2").html(subTitle);
            }
            var ms;
            ms = info.manuscriptsInfo[0].memo;

            ms = '<span>' + ms + '</span>' + '<a class="xx" href="' + picHref + '" target="' + targetVal + '" style="text-decoration:none;">����ϸ��</a>'
            $("#" + id + " #static .bottom_font span.moren").html(ms).addClass('');
            var fontLength = $("#" + id + "_cmsDocumentSetfontNum").val().length;
            //this.setDefaultImgSize(picSrc);
            $.common.regain();
        },
        /**
         * ����cms�б�����ʾ������
         * @param {[type]} val [description]
         */
        setFontLength: function(val) {
            this.setCmsData2();
            var id = selectedElementInfo.get("id");
            var reg = /\d/gi;
            var htmlCon = $("#" + id + " #static .bottom_font span.moren span").text();
            var oldLength = htmlCon.length;
            var cmsFontLength = this.backtextIndex(htmlCon, val);

            if (reg.test(val * 1) && val !== '0') {
                $("#" + id + "_cmsDocumentSetfontNum").val(val);
                $("#" + id + " #cmsCode .ms_liu cmspro_document").attr('num', val);
                if (oldLength > val * 1) {
                    $("#" + id + " #static .bottom_font span.moren span").html(htmlCon.slice(0, cmsFontLength) + '...');
                } else {
                    $("#" + id + " #static .bottom_font span.moren span").html(htmlCon.slice(0, cmsFontLength));
                }
            } else {
                $("#" + id + "_cmsDocumentSetfontNum").val('');
                $("#" + id + " #cmsCode cmspro_document").removeAttr('num');
            }
        },
        /**
         * ���������ֵĳ���
         */
        setFontLength2: function() {
            var id = selectedElementInfo.get("id");
            var val = $("#" + id + "_cmsDocumentSetfontNum").val();
            if (!val) return;
            var reg = /\d/gi;
            var htmlCon = $("#" + id + " #static .bottom_font span.moren span").text();
            var oldLength = htmlCon.length;
            var cmsFontLength = this.backtextIndex(htmlCon, val);
            if (reg.test(val * 1) && val !== '0') {
                $("#" + id + "_cmsDocumentSetfontNum").val(val);
                $("#" + id + " #cmsCode .ms_liu cmspro_document").attr('num', val);
                if (oldLength > val * 1) {
                    $("#" + id + " #static .bottom_font span.moren span").html(htmlCon.slice(0, cmsFontLength) + '...')
                } else {
                    $("#" + id + " #static .bottom_font span.moren span").html(htmlCon.slice(0, cmsFontLength))
                }
            } else {
                $("#" + id + "_cmsDocumentSetfontNum").val('');
                $("#" + id + " #cmsCode cmspro_document").removeAttr('num');
            }
        },
        /**
         * ����ͼƬ����״̬
         * @param  {str} val 0������ʾ���� 1�� ��ʾ����
         * @return {[type]}     [description]
         */
        bindCmsDocumentTitle: function(val) {
            var id = selectedElementInfo.get("id");
            if (val === '0') {
                $("#cmspro_documentTitle").removeClass('active');
            } else {
                $("#cmspro_documentTitle").addClass('active');
            }
        },
        /**
         * ����cmsͼƬ��������״̬����
         * @param  {[String]} val [�洢�ı������͵�ֵ]
         * @return {[type]}     [description]
         */
        bindCmsDocumentSetMs: function(val) {
            $("#radioMsSelect .list").find('.radioIcon').removeClass('active');
            if (val === '0') {
                $("#radioMsSelect .list").eq(1).find('.radioIcon').addClass('active');
            } else {
                $("#radioMsSelect .list").eq(0).find('.radioIcon').addClass('active');
            }
        },
        /**
         * ����ͼƬ����״̬
         * @param  {[str]} val 0������ʾ���� 1�� ��ʾ����
         * @return {[type]}     [description]
         */
        bindCmsDocumentMs: function(val) {
            if (val === '0') {
                $("#cmspro_documentMs").removeClass('active');
            } else {
                $("#cmspro_documentMs").addClass('active');
            }
        },
        /**
         * �������
         * @param str
         */
        chuliparams: function(str) {
            var len = str.length;
            var endStr = "";
            switch (len) {
                case 4:
                    endStr = str.substr(1);
                    break;
                case 3:
                    endStr = str.substr(1, 2);
                    break;
                case 1:
                    endStr = '0|1|2|3|4|5|8|9';
                    break;
                case 2:
                    endStr = str.substr(1);
                    break;
                default:
                    endStr = str;
            }
            return endStr;
        },
        getCmsParams: function() {
            var id = selectedElementInfo.get("id");
            if (!$("#" + id + "_cmsData").val()) {
                alert('����ѡ������Ŀ');
                return;
            }
            var m_startPos = $("#" + id + "_cmsDocumentStartPos").val() * 1;
            var m_documentType = $("#" + id + "_cmsDocumentTypeArr").val().split(',').join('|').replace('||', "|");
            m_documentType = this.chuliparams(m_documentType);
            var params = {
                m_websiteCodeName: JSON.parse($("#" + id + "_cmsData").val()).siteCode,
                m_channelCodeName: JSON.parse($("#" + id + "_cmsData").val()).channelCode,
                m_documentType: m_documentType,
                m_startPos: m_startPos,
                m_batchRule: $("#" + id + "_batchrule").val() * 1 == 1 ? true : false,
                m_num: 1
            };
            return params;
        },
        /*
         *
         * ���cms����
         * */
        getCmsInfo: function() {
            var url = '/app-tpl-webapp/common/gainManuscriptsAndAppendixs.action';
            var params = this.getCmsParams();
            return this.ajaxData(url, params)[0];
        },
        //��ȡ��̨����
        ajaxData: function(_url, params) {
            var _data = "";
            $.ajax({
                type: "post",
                url: _url,
                data: params,
                dataType: 'json',
                async: false,
                success: function(data) {
                    _data = data;
                }
            });
            return _data;
        },

        /**
         * ����������������
         * @param {[type]} domObj   [description]
         */
        setDocumentSetTitle: function(domObj) {
            if ($(domObj).find('.radioIcon').hasClass('active') || $(domObj).find('.radioIcon').hasClass('disable')) {
                return;
            }

            var id = selectedElementInfo.get("id");
            $("#radioTitleSelect .radioIcon").removeClass('active');
            $(domObj).find('.radioIcon').addClass('active');
            var currvalue = $(domObj).find('.radioIcon').attr("data-val");

            var info = this.getCmsInfo();
            if (currvalue === '0') {
                // Ӧ�����ó�title
                $("#" + id + " #cmsCode .title_liu cmspro_document").attr('FIELD', 'subTitle');
                var title = info.manuscriptsInfo[0].title;
            } else {
                var subtitle = info.manuscriptsInfo[0].subTitle;
                // Ӧ�����ó�subTitle
                $("#" + id + " #cmsCode .title_liu cmspro_document").attr('FIELD', 'title');
            }
            $("#" + id + '_cmspro_documentSetTitle').val(currvalue);
            this.setCmsData();
        },

        /**
         * ���ñ�����ʾ����
         * @param {dom} domObj   checkbox����
         * @param {[type]} inputStr [description]
         */
        setCmsDocumentsTitleEvent: function(domObj, inputStr) {
            var id = selectedElementInfo.get("id");
            $(domObj).find('.checkIcon').toggleClass('active');
            var state = $(domObj).find('.checkIcon').hasClass('active') ? 1 : 0;
            $("#" + id + "_cmspro_documentTitle").val(state);
            if (state === 0) {
                // ����ʾtitle
                //$("#" + id + " #cmsCode .bottom_font h2").hide();
                //$("#" + id + " #static .bottom_font h2").hide();
                this.setStyleCss(id, ' #cmsCode .bottom_font h2', 'display', 'none');
                this.setStyleCss(id, ' #static .bottom_font h2', 'display', 'none');
                $("#radioTitleSelect .radioIcon").removeClass('active').addClass('disable');
            } else {
                // ��ʾtitle
                //$("#" + id + " #cmsCode .bottom_font h2").show();
                //$("#" + id + " #static .bottom_font h2").show();
                this.setStyleCss(id, ' #cmsCode .bottom_font h2', 'display', 'block');
                this.setStyleCss(id, ' #static .bottom_font h2', 'display', 'block');
                $("#radioTitleSelect .radioIcon").removeClass('disable');
                // ����cmsͼƬ�ı������ͻ���
                var _cmspro_documentSetTitle = $("#" + id + "_cmspro_documentSetTitle").val();
                this.bindCmsDocumentSetTitle(_cmspro_documentSetTitle);
            }
        },
        /**
         * ����������ʾ����
         * @param {dom} domObj   checkbox����
         * @param {[type]} inputStr [description]
         */
        setCmsDocumentsMs: function(domObj, inputStr) {
            var id = selectedElementInfo.get("id");
            $(domObj).find('.checkIcon').toggleClass('active');
            var state = $(domObj).find('.checkIcon').hasClass('active') ? 1 : 0;
            $("#" + id + "_cmspro_documentMs").val(state);
            if (state === 0) {
                // ����ʾms
                //$("#" + id + " #cmsCode .bottom_font span.moren").hide();
                //$("#" + id + " #static .bottom_font span.moren").hide();
                //$("#" + id + " #static .bottom_font span.moren a.xx").hide();
                this.setStyleCss(id, ' #cmsCode .bottom_font span.moren', 'display', 'none');
                this.setStyleCss(id, ' #static .bottom_font span.moren', 'display', 'none');
                this.setStyleCss(id, ' #static .bottom_font span.moren a.xx', 'display', 'none');
                // ����ѡ��ť����Ϊ����ѡ��״̬
                $("#radioMsSelect .radioIcon").removeClass('active').addClass('disable');
                // ����ʾ��������Ϊ����״̬
                $("#cmsDocumentSetfontNum").attr({ 'disabled': 'disabled' }).addClass('form-control');
            } else {
                // ��ʾms
                //$("#" + id + " #cmsCode .bottom_font span.moren").show();
                //$("#" + id + " #static .bottom_font span.moren").show();
                //$("#" + id + " #static .bottom_font span.moren a.xx").show();
                this.setStyleCss(id, ' #cmsCode .bottom_font span.moren', 'display', 'inline-block');
                this.setStyleCss(id, ' #static .bottom_font span.moren', 'display', 'inline-block');
                this.setStyleCss(id, ' #static .bottom_font span.moren a.xx', 'display', 'inline-block');
                // ����ʾ��������Ϊ����״̬
                $("#cmsDocumentSetfontNum").removeAttr('disabled').removeClass('form-control');
                // ����ѡ��ť����Ϊ��ѡ��״̬
                $("#radioMsSelect .radioIcon").removeClass('disable');
                // �������ð�ť״̬
                var _cmspro_documentSetMs = $("#" + id + "_cmspro_documentSetMs").val();
                this.bindCmsDocumentSetMs(_cmspro_documentSetMs);
            }
        },
        /**
         * ���zi�������������
         * @param {[type]} domObj   [description]
         */
        setDocumentSetMs: function(domObj) {
            $.tplComponentPictureSetting.setFontLength($("#" + id + "_cmsDocumentSetfontNum").val());
            if ($(domObj).find('.radioIcon').hasClass('active') || $(domObj).find('.radioIcon').hasClass('disable')) {
                return;
            }
            var id = selectedElementInfo.get("id");
            $("#radioMsSelect .radioIcon").removeClass('active');
            $(domObj).find('.radioIcon').addClass('active');
            var currvalue = $(domObj).attr('data-val');
            if (currvalue === '0') {
                // Ӧ�����ó�content
                $("#" + id + " #cmsCode .ms_liu cmspro_document").attr('FIELD', 'content');
            } else {
                $("#" + id + " #cmsCode .ms_liu cmspro_document").attr('FIELD', 'memo');
            }
            $("#" + id + '_cmspro_documentSetMs').val(currvalue);
            this.setCmsData();
        },
        /**
         * ���÷�����������
         * @param  {dom} obj   ��ť
         * @param  {number} index ��λ��ť
         * @return {[type]}       [description]
         */
        toggolePici: function(obj, flag) {
            var id = selectedElementInfo.get("id");
            $("#piciRadiaBtn .radioIcon").removeClass('active');
            $(obj).find('.radioIcon').addClass('active');
            // �����÷�������
            if (flag == 0) {
                $("#" + id + "_batchrule").val(0);
                $("#" + id + " #cmsCode cmspro_documents").attr("BATCHRULE", false);
            } else {
                $("#" + id + "_batchrule").val(1);
                $("#" + id + " #cmsCode cmspro_documents").attr("BATCHRULE", true);
            }
            this.setCmsData();
        },
        /*
         * ����cms���ݣ�
         * */
        setCmsData: function() {
            var id = selectedElementInfo.get("id");
            var info = this.getCmsInfo();
            if (info.appendixsList.length === 0) {
                this.setStyleCss(id, ' img', 'display', 'none');
                return;
            } else {
                this.setStyleCss(id, ' img', 'display', 'block');
            }
            var picSrc = info.appendixsList[0][0].path;
            var reg = /http(s)?:\/\//;
            var picHref = "";
            //    �ж��Ƿ���http httpsǰ׺
            if (reg.test(info.manuscriptsInfo[0].url)) {
                picHref = info.manuscriptsInfo[0].url;
            } else {
                picHref = previewPortal + '/' + info.manuscriptsInfo[0].url;
            }
            $("#" + id + "_picLink").val(picHref);
            var targetVal = $("#" + id + "_targetLink").val();
            var img = $("#" + id + " #static.picture-holder img");
            img.attr({ 'src': picSrc });
            if (img.parent()[0].tagName !== 'A') {
                img.wrap('<a href="' + picHref + '" target="' + targetVal + '"></a>');
            } else {
                img.parent().attr('href', picHref);
            }
            if ($("#radioTitleSelect .list .radioIcon").eq(0).hasClass('active')) {
                //    �������
                var title = info.manuscriptsInfo[0].title;
                title = '<a href="' + picHref + '" target="_blank" style="text-decoration:none;">' + title + '</a>';
                $("#" + id + " #static .bottom_font h2").html(title);
            } else {
                var subTitle = info.manuscriptsInfo[0].subTitle;
                subTitle = '<a href="' + picHref + '" target="_blank" style="text-decoration:none;">' + subTitle + '</a>';
                $("#" + id + " #static .bottom_font h2").html(subTitle);
            }
            var ms;
            ms = info.manuscriptsInfo[0].memo;

            ms = '<span>' + ms + '</span>' + '<a class="xx" href="' + picHref + '" target="' + targetVal + '" style="text-decoration:none;">����ϸ��</a>'
            $("#" + id + " #static .bottom_font span.moren").html(ms).addClass('');
            var fontLength = $("#" + id + "_cmsDocumentSetfontNum").val().length;
            //this.setDefaultImgSize(picSrc);
            $.common.regain();
            this.setFontLength2();
        },
        /**
         * ���Է������ΰ�ť״̬
         * @param  {str} val 0|1
         * @return {[type]}     [description]
         */
        bindpicBtn: function(val) {
            if (val === '1') {
                $("#piciRadiaBtn .radioIcon").removeClass('active').eq(0).addClass('active');
            } else {
                $("#piciRadiaBtn .radioIcon").removeClass('active').eq(1).addClass('active');
            }
        },
        /**
         * ���Ǵӵڼ�ƪ��������л�ȡͼƬ
         * @param  {number} num ����ֵ
         * @return {[type]}     [description]
         */
        getGjStart: function(num) {
            num = parseInt(num);
            var id = selectedElementInfo.get("id");
            if (num < 1) {
                num = 0;
                $("#cmsDocumentStartPos").val(1);
            } else {
                num--;
            }
            $("#" + id + " cmspro_documents").attr('startpos', num);
            $("#" + id + " #cmsCode cmspro_documents").attr({ "startpos": num });
            $("#" + id + "_cmsDocumentStartPos").val(num);
            this.setCmsData();
        },
        /**
         * ����cmsͼƬ��������״̬����
         * @param  {[String]} val [�洢�ı������͵�ֵ]
         * @return {[type]}     [description]
         */
        bindCmsDocumentSetTitle: function(val) {
            $("#radioTitleSelect .list").find('.radioIcon').removeClass('active');
            if (val === '0') {
                // subTitle
                $("#radioTitleSelect .list").eq(1).find('.radioIcon').addClass('active');
            } else {
                $("#radioTitleSelect .list").eq(0).find('.radioIcon').addClass('active');
            }
        },
        /**
         * ����ժҪ�Ƿ�����������
         */
        bindxxTextIndentEvent: function() {
            var id = selectedElementInfo.get("id");
            // �Ƿ�����������
            var isIndent = $("#" + id + "_isIndent").val() * 1;
            isIndent = isIndent === 0 ? 1 : 0;
            $("#" + id + "_isIndent").val(isIndent);
            this.setStartBtn('.xxIndent', isIndent);
            // ������е���ϸspan
            var xxs = $("#" + id + " .bottom_font span.moren");
            if ($(xxs).hasClass('indent')) {
                $(xxs).removeClass('indent');
            } else {
                $(xxs).addClass('indent');
            }
        },
        /**
         * ��̬���ð�ť�Ŀ���
         * @param obj
         * @param flag
         */
        hdbtn2: function(obj, flag) {
            var box = $(obj).find('.pic_zoom');
            var left = box.position().left;
            if (!flag) {
                box.animate({
                    left: -30
                }, 200);
                box.addClass('off');
            } else {
                //
                box.animate({
                    left: 0
                }, 200);
            }
        },

        // ������ť��Ч
        hdBtn: function(obj) {
            var box = $(obj).find('.pic_zoom');
            var left = box.position().left;
            box.removeClass('on').removeClass('off');
            var result = 0;
            // on
            if (left === 84) {
                box.animate({
                    left: -30
                }, 200);
                box.addClass('off');
            } else {
                // 
                box.animate({
                    left: 0
                }, 200);
                box.addClass('on');
                result = 1;
            }
            return result;
        },
        /**
         * ���û������Ӵ򿪷�ʽ
         * @value {[string]} [���Ӵ򿪷�ʽֵ]
         * @return {[type]} [description]
         */
        bindTargetLink: function(value) {
            var id = selectedElementInfo.get("id");
            $("#linkTarget .radio-checked").removeClass('active');
            $("#" + id + " .picture-holder a").attr({ 'target': value });
            if (value == '_blank') {
                $("#linkTarget .radio-checked").eq(0).addClass('active');
            } else {
                $("#linkTarget .radio-checked").eq(1).addClass('active');
            }
        },
        /**
         * �������Ӵ򿪷�ʽ
         */
        setTargetLink: function(value, obj) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_targetLink").val(value);
            $("#" + id + " .picture-holder a").attr({ 'target': value });
            $("#linkTarget .radio-checked").removeClass('active');
            $(obj).find('.radio-checked').addClass('active');

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
                    $(obj).find('.center').addClass('active');
                    break;
                case 3:
                    // ˮƽ���Ҷ���
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.right').addClass('active')
                    break;
                default:
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
                case 4:
                    $("#tpl-sidebar-2016-04-06-pictrueVerticalAlign").find('.vertical-bg').removeClass('active');
                    break;
                default:
                    // statements_def
                    break;
            }
        },
        /**
         * ����Ĭ������color
         * @param  {[type]}   obj   [description]
         * @param  {[type]}   color [description]
         * @param  {Function} cb    [description]
         * @return {[type]}         [description]
         */
        initClorDefault: function(obj, color, cb) {
            $(obj).spectrum({
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
                    cb(color);
                    $.common.regain();
                },
                change: function(color) {
                    cb(color);
                    $.common.regain();
                },
                palette: per
            });
        },
        /**
         * ������ϸ��������ɫ
         * @param color
         */
        setxxHoverColor: function(color) {
            var id = selectedElementInfo.get("id");
            //$.tplComponentPictureSetting.setStyleCss(id, ':hvoer span.moren', 'color', color);
            $.tplComponentPictureSetting.setStyleCss(id, ':hover span.moren a', 'color', 'red');
            $("#" + id + "_xxHoverColor").val(color);
        },
        /**
         * ����ժҪ����ɫ
         * @param color
         */
        setxxColor: function(color) {
            var id = selectedElementInfo.get("id");
            //$.tplComponentPictureSetting.setStyleCss(id, ' span.moren', 'color', color);
            $.tplComponentPictureSetting.setStyleCss(id, ' a.xx', 'color', color);
            $("#" + id + "_xxColor").val(color);
        },
        /**
         * ����Ĭ����ɫ
         * @param obj
         * @param color
         * @param cb
         */
        initColor: function(obj, color, cb) {
            $(obj).spectrum({
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
                    cb(color);
                    $.common.regain();
                },
                change: function(color) {
                    cb(color);
                    $.common.regain();
                },
                palette: per
            });
        },
        setBottomAndInitColor: function(obj, style, color) { //����bottom����ɫ
            var id = selectedElementInfo.get("id");
            $(obj).spectrum({
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
                    $.tplComponentPictureSetting.setBottomColor(style, color, obj);
                    $.common.regain();
                },
                change: function(color) {
                    $.tplComponentPictureSetting.setBottomColor(style, color, obj);
                    $.common.regain();
                },
                palette: per
            });
        },
        /**
         * ��������ͼƬ�ľ���
         * @param  {[type]} value [description]
         * @return {[type]}       [description]
         */
        resetImgAlign: function() {
            var id = selectedElementInfo.get("id");
            var parentWidth = $("#" + id).parent().width();
            var width = $("#" + id + "_picWidth").val() !== "�Զ�" ? $("#" + id + "_picWidth").val().replace('px', "") * 1 : $("#" + id).width();
            var value = $("#" + id + "_shuiping").val();
            switch (value) {
                case '1':
                    this.setStyleCss(id, '', 'margin-left', '0px');
                    this.setStyleCss(id, '', 'margin-right', 'auto');
                    $("#tplRadioMarginLeft").val(0 + ' px');
                    $("#" + id + "_picMarginLeft").val(0 + ' px');
                    break;
                case '2':
                    this.setStyleCss(id, '', 'margin-left', 'auto');
                    this.setStyleCss(id, '', 'margin-right', 'auto');
                    $("#tplRadioMarginLeft").val(((parentWidth - width) / 2) + ' px');
                    $("#" + id + "_picMarginLeft").val(((parentWidth - width) / 2) + ' px');
                    break;
                case '3':
                    this.setStyleCss(id, '', 'margin-left', 'auto');
                    this.setStyleCss(id, '', 'margin-right', '0px');
                    $("#tplRadioMarginLeft").val((parentWidth / 2) + ' px');
                    $("#" + id + "_picMarginLeft").val((parentWidth - width) + ' px');
                    break;
                case '4':
                    $("#tpl-sidebar-2016-01-13-pictrueAlign").find('.align-img').removeClass('active');
                    break;
                default:
                    // statements_def
                    break;
            }
        },
        /**
         * ����ͼƬ�ľ���
         * @param {[type]} value [description]
         */
        setImgAlign: function(value) {
            try {
                var id = selectedElementInfo.get("id");
                var parentWidth = $("#" + id).parent().width();
                var width = $("#" + id).width();
                switch (value) {
                    case 'left':
                        this.setStyleCss(id, '', 'margin-left', '0px');
                        this.setStyleCss(id, '', 'margin-right', 'auto');
                        $("#tplRadioMarginLeft").val(0 + ' px');
                        $("#" + id + "_picMarginLeft").val(0 + ' px');
                        $("#" + id + "_shuiping").val(1);
                        break;
                    case 'none':
                        $("#" + id + "_shuiping").val(2);
                        this.setStyleCss(id, '', 'margin-left', 'auto');
                        this.setStyleCss(id, '', 'margin-right', 'auto');
                        $("#tplRadioMarginLeft").val(((parentWidth - width) / 2) + ' px');
                        $("#" + id + "_picMarginLeft").val(((parentWidth - width) / 2) + ' px');
                        break;
                    case 'right':
                        $("#" + id + "_shuiping").val(3);
                        this.setStyleCss(id, '', 'margin-left', 'auto');
                        this.setStyleCss(id, '', 'margin-right', '0');
                        $("#tplRadioMarginLeft").val((parentWidth / 2) + ' px');
                        $("#" + id + "_picMarginLeft").val((parentWidth - width) + ' px');
                        break;
                    default:
                        // statements_def
                        break;
                }


            } catch (e) {
            }
        },
        setMiddle: function(selectedElementInfo) {
            var id = selectedElementInfo.get("id");
            var parentHeight = $("#" + id).parent().height();
            var childHeight = $("#" + id).find("div").eq(0).height();
            var marginTop = (parentHeight - childHeight) / 2;
            var oldMarginTop = $("#" + id).find("div").eq(0).css('margin-top');
            if (oldMarginTop != '0px') {
                $("#" + id).find("div").eq(0).css('margin-top', 0);
                return;
            }
            $("#" + id).find("div").eq(0).css('margin-top', marginTop);
            $("#" + id + "_picUP").val(marginTop + ' px');

        },

        /**
         * ����ͼƬ������ΪĬ�ϣ�
         */
        setFontDefualt: function() {
            var id = selectedElementInfo.get("id");
            $("#" + id + " .bottom_font").css({ 'position': 'absolute' });
            $("#" + id + "_FontPos").val(0);

            // this.bindHoverEvent();
        },
        /**
         * ����ͼƬ�����������棻
         */
        setTop: function() {
            var id = selectedElementInfo.get("id");
            $("#" + id + " .bottom_font").css({ 'position': 'relative' });
            $("#" + id + " #static .bottom_font").prependTo($("#" + id + " #static .bottom_font").parent());
            $("#" + id + " #cmsCode .bottom_font").prependTo($("#" + id + " #cmsCode .bottom_font").parent());
            $("#" + id + "_FontPos").val(1);
            // this.bindHoverEvent();
        },
        /**
         * ����ͼƬ�����������棻
         */
        setBottom: function() {
            var id = selectedElementInfo.get("id");
            $("#" + id + " .bottom_font").css({ 'position': 'relative' });
            $("#" + id + " #static .bottom_font").appendTo($("#" + id + " #static .bottom_font").parent());
            $("#" + id + " #cmsCode .bottom_font").appendTo($("#" + id + " #cmsCode .bottom_font").parent());
            $("#" + id + "_FontPos").val(2);
            this.bindHoverEvent();

        },
        /**
         * ����ͼƬ��ϸ���ֵ���߾�
         * @param value ����λpx�ģ����߲�����λ���ַ���
         */
        setFontMarginBottom: function(value) {
            var id = selectedElementInfo.get("id");
            value = value.replace('px', '') * 1;
            $("#" + id + " .bottom_font").css({ 'paddingBottom': value });
            $("#" + id + "_fontMarginBottom").val(value + ' px');

        },
        /**
         * ����ͼƬ��ϸ���ֵ���߾�
         * @param value ����λpx�ģ����߲�����λ���ַ���
         */
        setFontMarginTop: function(value) {
            var id = selectedElementInfo.get("id");
            value = value.replace('px', '') * 1;
            $("#" + id + " .bottom_font").css({ 'paddingTop': value });
            $("#" + id + "_fontMarginTop").val(value + ' px');

        },
        setImgATarget: function(ele) { /*����ͼƬ����*/
            try {

                var id = selectedElementInfo.get("id");
                // ����a����
                var url = $(ele).val();
                if (!url) {
                    var img = $("#" + id + " img")[0];
                    $("#" + id + " a").remove();
                    $("#" + id + " .picture-holder").append(img);
                    return;
                }
                var a = $("<a>").attr('href', url).css({
                    'height': '100%',
                    'display': "inline-block"
                }).attr('target', '_blank');
                // ��a���Ӱ���ͼƬ
                if ($("#" + id + ' .picture-holder').find("a").length) {
                    $("#" + id).find('a').attr('href', url);
                    this.storeUrl(url)
                    return;
                }
                $("#" + id + ' .picture-holder img').wrap(a);
                this.storeUrl(url)

            } catch (e) {
            }
        },
        storeUrl: function(url) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_url").val(url);
        },
        /**
         * ����ѡ���������
         * @param  {dom} obj dom����
         * @return {[type]}     [description]
         */
        hightligntSelectBlock: function(obj) {
            var id = selectedElementInfo.get("id");
            $(obj).addClass('height-select');
        }

    }
})(jQuery);


$(function() {
    try {

        if ($('head').find('script[name=systemJs]').length > 0) {
            var id = selectedElementInfo.get("id");
            if ($('#' + id).attr('id') == 'workspace-body') {
                return;
            }
            $.tplComponentPictureSetting.readHiddenInfo();
            // ������ÿ�ʼ
            var serverPath = $.common.getComponetIMagesUrl(id);
            var jsonData = [{
                name: '����ʾ����',
                childElement: "",
                childIndexElement: " .tpl-component-2016-01-07-picture-change",
                classStyle: 'tpl-component-2016-01-07-picture-style',
                url: serverPath + '/images/default_pic4.png',
                className: 'tpl-component-2016-01-07-picture-style1',
                fileName: 'index_1',
                id: id
            }, {
                name: '��ʾ����',
                childElement: "",
                url: serverPath + '/images/default_pic2.png',
                childIndexElement: " .tpl-component-2016-01-07-picture-change",
                classStyle: 'tpl-component-2016-01-07-picture-style',
                className: 'tpl-component-2016-01-07-picture-style2',
                fileName: 'index_2',
                id: id
            }, {
                name: 'ֻ��ʾ����',
                childElement: "",
                childIndexElement: " .tpl-component-2016-01-07-picture-change",
                classStyle: 'tpl-component-2016-01-07-picture-style',
                url: serverPath + '/images/default_pic1.png',
                className: 'tpl-component-2016-01-07-picture-style5',
                fileName: 'index_5',
                id: id
            }, {
                name: 'ֻ��ʾժҪ',
                childElement: "",
                url: serverPath + '/images/default_pic3.png',
                childIndexElement: " .tpl-component-2016-01-07-picture-change",
                classStyle: 'tpl-component-2016-01-07-picture-style',
                className: 'tpl-component-2016-01-07-picture-style6',
                fileName: 'index_6',
                id: id
            }];
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
            var hiddenCb = $.tplComponentPictureSetting.readHiddenInfo;
            // ���ݱ���ķ������
            var saveCoustomFg = "";
            var saveSystemFg = "";
            saveCoustomFg = $("#" + id + "_savecoustomFg").val() === "" ? "" : $("#" + id + "_savecoustomFg").val() * 1;
            saveSystemFg = $("#" + id + "_saveSystemFg").val() === "" ? "" : saveSystemFg = $("#" + id + "_saveSystemFg").val() * 1;
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
            counstomStyle.init(jsonData, 1, callback, hiddenCb, targetFg, 'ͼƬ');

            // ������е��û�����������Դ
            var sqluserArr = counstomStyle.getUserStyleData('tpl-component-2016-01-07-picture');
            counstomStyle.formatUserarr(sqluserArr.innerStyleByClassName, function(userarr) {
                // ��ʼ���û����
                counstomStyle.init(userarr, 0, callback, hiddenCb, targetFg, 'ͼƬ');
            });
            // ������ý���

            // ��ֱ�����¼�
            // ���ô�ֱ����
            $("#tpl-sidebar-2016-04-06-pictrueVerticalAlign div").on('click', function() {
                // ����activeЧ��
                $("#tpl-sidebar-2016-04-06-pictrueVerticalAlign div").removeClass('active');
                $(this).addClass('active')
                var value = $(this).attr('value');
                var id = selectedElementInfo.get("id");
                var parentHeight = $("#" + id).parent().height();
                var selfHeight = $("#" + id).height();
                $("#" + id).find(".ui-sortable").removeClass('column');
                switch (value) {
                    case 'top':
                        $.common.removeGeneratedCss(id, childPathOfSelectedElement, "overflow-y");

                        var styleText = "#" + id + '{margin-top: 0!important;}';
                        $("#" + id + "_chuizhi").val(1);
                        $("#" + id + "_picUP").val('0 px');
                        $("#tplRadioUP").val('0 px');
                        break;
                    case 'middle':
                        var styleText = "#" + id + '{margin-top:' + ((parentHeight - selfHeight) / 2) + 'px!important;}';
                        $("#" + id + "_chuizhi").val(2);
                        $("#" + id + "_picUP").val(((parentHeight - selfHeight) / 2) + ' px');
                        $("#tplRadioUP").val(((parentHeight - selfHeight) / 2) + ' px');
                        break;
                    case 'bottom':
                        var styleText = "#" + id + '{margin-top:' + (parentHeight - selfHeight) + 'px!important;}';
                        $("#" + id + "_chuizhi").val(3);
                        $("#" + id + "_picUP").val(parentHeight - selfHeight + ' px');
                        $("#tplRadioUP").val(parentHeight - selfHeight + ' px');
                        break;
                    default:
                        break;
                }
                var styleCss = $("#generatedCss").text();
                styleCss += "\r\n" + styleText;
                $("#generatedCss").text(styleCss);
            })


            $(".tpl-sidebar-2016-01-07-picture .isShowDirecBtnHover").off('click').on('click', function() {
                var id = selectedElementInfo.get("id");
                // ����Ч��
                var result = $.tplComponentPictureSetting.hdBtn('.tpl-sidebar-2016-01-07-picture .isShowDirecBtnHover');
                var morenDisplay = $(".isShowDirecBtn .pic_zoom").hasClass('on');
                if (!result) {
                    //    ����Ƿ���ʾ״̬��
                    if (morenDisplay) {
                        //    ���Ĭ������ʾ�ģ���ô��꾭��
                    }
                } else {
                    $("#" + id).removeClass('bhover');
                }
            });

            $(".tpl-sidebar-2016-01-07-picture .isShowDirecBtn").off('click').on('click', function() {
                var id = selectedElementInfo.get("id");
                // ����Ч��
                $.tplComponentPictureSetting.hdBtn('.tpl-sidebar-2016-01-07-picture .isShowDirecBtn');
                if ($('.isShowDirecBtn .pic_zoom').hasClass('on')) {
                    $("#" + id + "_isShowHoverBtn").val(2);
                    //$.tplComponentPictureSetting.bindBottomDisplay(2);
                    // $.tplComponentPictureSetting.hdBtn('.tpl-sidebar-2016-01-07-picture .isShowDirecBtnHover');
                } else {
                    $("#" + id).removeClass('bdisplay');
                }
                // // �����Զ�����
                // $.tplComponentPictureSetting.setIsShowLongFont(playValue)
            });

            // ����Ĭ��ͼƬ

            // ��ѡ��input��ʱ�����input�Զ�ѡ������
            $("input.select-content").focus(function() {
                $(this)[0].select()
            })

            function callAddpic() {
                // ȡ��json�ַ���
                var jsonData = $("#" + id + '_JSONdata').val();

                $.dialogUpPic.initDialog(jsonData, 1, function(data) {
                    var path, link, name;
                    if (data.all[0] && data.all[0].path) {
                        path = data.all[0].path;
                        link = data.all[0].link;
                        name = data.all[0].name;
                        $.tplComponentPictureSetting.addPic(path, name, link);
                    } else {
                        $.tplComponentPictureSetting.addPic('', '', '');
                    }
                    jsonData = JSON.stringify(data);

                    $("#" + id + '_JSONdata').val(jsonData);
                    $.tplComponentPictureSetting.deleteCmsLm(true);
                    //$.tplComponentPictureSetting.bindsetPicwh();
                    $.tplComponentPictureSetting.readHiddenInfo();
                    //$.tplComponentPictureSetting.setDefaultImgSize(path);

                    $.common.regain();
                });
            }
            // ����¼�
            $("#selectPic").off('click');
            $("#selectPic").on('click', function() {
                callAddpic();
            });

            $("#" + id + " .picture-icon").off('click');
            $("#" + id + " .picture-icon").on('click', function() {
                callAddpic();
            });

            $("#" + id + ' .font-edit').off('click').on('click', function() {
                $.tplComponentPictureSetting.hightligntSelectBlock(this);
            });

            $("input").on("focus", function(e) {
                // ����FF��IE��Opera
                var code = e.keyCode || e.which || e.charCode;
                $(this)[0].select();
            });
            $('.tpl-sidebar-2016-01-07-picture input[type="text"]').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-sidebar-2016-01-07-picture .select-content').off('blur', $.common.regain).on('blur', $.common.regain);
            $('.tpl-sidebar-2016-01-07-picture .vertical-bg').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-sidebar-2016-01-07-picture .align-img').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-sidebar-2016-01-07-picture .pic_zoom').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-sidebar-2016-01-07-picture .select-options li').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-sidebar-2016-01-07-picture .radio-checked').off('click', $.common.regain).on('click', $.common.regain);
            $('.tpl-sidebar-2016-01-07-picture .t-icon').off('click', $.common.regain).on('click', $.common.regain);
        }
    } catch (e) {
    }
})