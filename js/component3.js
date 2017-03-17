(function($) {
    $.tplComponentPicture = {
        
    };
})(jQuery);
$(function() {
    if ($('head').find('script[name=systemJs]').length > 0) {
        var pictures = $(".tpl-component-2016-01-07-picture").get();
        if (pictures && pictures.length > 0) {
            $.each(pictures, function(index, pic) {
                //鼠标移入显示
                $(pic).off('mouseenter', $.common.mEShowBorder);
                //鼠标移出隐藏
                $(pic).off('mouseleave', $.common.mLHideBorder);
                //鼠标点击显示
                $(pic).off('click', $.common.cShowBorder);
            
                //鼠标移入显示
                $(pic).on('mouseenter', {
                    obj: pic
                }, $.common.mEShowBorder);
                //鼠标移出隐藏
                $(pic).on('mouseleave', {
                    obj: pic
                }, $.common.mLHideBorder);
                //鼠标点击显示
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
            //边距
            var _up = $("#" + id + "_picUP").val();
            var _down = $("#" + id + "_picDOWN").val();
            var _width = $("#" + id + "_picWidth").val();
            var _height = $("#" + id + "_picHeight").val();
            var _url = $("#" + id + "_url").val();
            var _marginLeft = $("#" + id + "_picMarginLeft").val();
            var _picMarginRight = $("#" + id + "_picMarginRight").val();
            var _picBottomFontHtml = $("#" + id + "_picBottomFontHtml").val();

            // 获取高度值
            var _bottomBoxHeight = $("#" + id + "_bottomBoxHeight").val();
            // 设置高度值
            $("#bottomBoxHeight").val(_bottomBoxHeight);
            /*内边距*/
            var _bottomPaddingTop = $("#" + id + "_bottomPaddingTop").val();
            $("#bottomPaddingTop").val(_bottomPaddingTop);
            var _bottomPaddingLeft = $("#" + id + "_bottomPaddingLeft").val();
            $("#bottomPaddingLeft").val(_bottomPaddingLeft);
            var _bottomPaddingRight = $("#" + id + "_bottomPaddingRight").val();
            $("#bottomPaddingRight").val(_bottomPaddingRight);
            var _bottomPaddingBottom = $("#" + id + "_bottomPaddingBottom").val();
            $("#bottomPaddingBottom").val(_bottomPaddingBottom);
                /*内边距*/

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

            //设置底部box的颜色
            var _bottomBoxColor = $("#" + id + "_bottomBoxColor").val();
            $.tplComponentPictureSetting.initClorDefault("#bottomBoxColor", _bottomBoxColor, $.tplComponentPictureSetting.setBottomBoxColor);
            $.tplComponentPictureSetting.setBottomBoxColor(_bottomBoxColor);



            // 设置鼠标hover title效果

            // 设置标题经过的颜色
            var _titleHoverColor = $("#" + id + "_titleHoverColor").val();
            $.tplComponentPictureSetting.initClorDefault("#titleHoverColor", _titleHoverColor, $.tplComponentPictureSetting.setBottomtitleHoverColor);
            $.tplComponentPictureSetting.setBottomtitleHoverColor(_titleHoverColor);

            var _titleColor = $("#" + id + "_titleColor").val();
            $.tplComponentPictureSetting.initClorDefault("#titleColor", _titleColor, $.tplComponentPictureSetting.setBottomtitleColor);
            $.tplComponentPictureSetting.setBottomtitleColor(_titleColor);

            // 水平对齐垂直对齐回显
            $.tplComponentPictureSetting.reSetshuiping("#tpl-sidebar-2016-01-13-pictrueAlign", '_shuiping');
            $.tplComponentPictureSetting.reSetChuizhi("#tpl-sidebar-2016-04-06-pictrueVerticalAlign", '_chuizhi');

            //设置底部框的显示隐藏效果；
            var _isShowHoverBtn = $("#" + id + "_isShowHoverBtn").val() * 1;
            $.tplComponentPictureSetting.setBottomDisplay(_isShowHoverBtn);
            $("#setBottomDisplay .radio-checked").removeClass('active').eq(_isShowHoverBtn).addClass('active');

            $.tplComponentPictureSetting.reshowBottomFontAlign();

            // 透明度
            var opacityVal = $("#" + id + "_opacity").val();
            $("#setOpacity").val(opacityVal);
            //图片的详细位置回显
            var _FontPos = $("#" + id + "_FontPos").val() * 1;
            $("#pictrueFontPos").find('.align-img').removeClass('active');
            $("#pictrueFontPos").find('.align-img').eq(_FontPos).addClass('active');
            //回显上下边距
            var _fontMarginTop = $("#" + id + "_fontMarginTop").val();
            $("#fontMarginTop").val(_fontMarginTop);
            var _fontMarginBottom = $("#" + id + "_fontMarginBottom").val();
            $("#fontMarginBottom").val(_fontMarginBottom);

            var _scrollHeight = $("#" + id + '_scrollHeight').val();
            $("#setScrollHeight").val(_scrollHeight);

            // 设置默认的图片
            $.tplComponentPictureSetting.initAddPic();
            // 设置稿件类型
            var _cmsDocumentTypeArr = String($("#" + id + "_cmsDocumentTypeArr").val()).split(',');
            $.tplComponentPictureSetting.bindcheckBox(_cmsDocumentTypeArr, "#gjlx .myCheckBox_liu");
            // 显示字数
            var _cmsDocumentSetfontNum = $("#" + id + "_cmsDocumentSetfontNum").val();
            $.tplComponentPictureSetting.bindfontLength(_cmsDocumentSetfontNum);
            // 设置cms图片的描述类型回显
            var _cmspro_documentSetMs = $("#" + id + "_cmspro_documentSetMs").val();
            $.tplComponentPictureSetting.bindCmsDocumentSetMs(_cmspro_documentSetMs);
            // 设置cms图片的标题类型回显
            var _cmspro_documentSetTitle = $("#" + id + "_cmspro_documentSetTitle").val();
            $.tplComponentPictureSetting.bindCmsDocumentSetTitle(_cmspro_documentSetTitle);
            // 设置cms图片描述标题
            var _cmspro_documentTitle = $("#" + id + "_cmspro_documentTitle").val();
            $.tplComponentPictureSetting.bindCmsDocumentTitle(_cmspro_documentTitle);
            // 设置cms图片的描述回显
            var _cmspro_documentMs = $("#" + id + "_cmspro_documentMs").val();
            $.tplComponentPictureSetting.bindCmsDocumentMs(_cmspro_documentMs);
            //设置发布批次
            var _batchrule = $("#" + id + "_batchrule").val();
            $.tplComponentPictureSetting.bindpicBtn(_batchrule);


            // 从第几篇稿件开始获取
            var _cmsDocumentStartPos = $("#" + id + "_cmsDocumentStartPos").val() * 1;
            _cmsDocumentStartPos = _cmsDocumentStartPos <= 1 ? 1 : _cmsDocumentStartPos + 1;

            $("#cmsDocumentStartPos").val(_cmsDocumentStartPos);

            // 选择站点栏目的名字
            var _cmsColumnsName = $("#" + id + "_cmsColumnsName").val();
            if (_cmsColumnsName) {
                $("#cmsColumnsFont .selectlmLi").eq(0).find('.selectLmText').html(_cmsColumnsName);
                $("#cmsColumnsFont").show();
            } else {
                $("#cmsColumnsFont").hide();
            }
            /**
             * 重新设置图片的居中
             */
            $.tplComponentPictureSetting.resetImgAlign();
            $.tplComponentPictureSetting.resetFontPos();
            $.tplComponentPictureSetting.setDisplayFont();
            $.tplComponentPictureSetting.setDisplayTitleFont();
            $.tplComponentPictureSetting.setDefultBg();
            var width = $("#" + id).width();
            $("#" + id).css('width', width);
            // 设置链接回显状态
            var targetVal = $("#" + id + "_targetLink").val();
            $.tplComponentPictureSetting.bindTargetLink(targetVal);

            // 设置title字体
            var _titleFamily = $("#" + id + "_titleFamily").val();
            $("#titleFamily").html(_titleFamily);
            $.tplComponentPictureSetting.setTitleFamily();

            // 回显字体设置大小
            var _titleFontSize = $("#" + id + "_titleFontSize").val();
            $("#titleFontSize").val(_titleFontSize);
            var _xxFontSize = $("#" + id + "_xxFontSize").val();
            $("#xxFontSize").val(_xxFontSize);

            // 回显标题设置margin
            var _titleMargin = JSON.parse($("#" + id + "_titleMargin").html());
            $("#titleMarginTop").val(_titleMargin.top);
            $("#titleMarginBottom").val(_titleMargin.bottom);
            $("#titleMarginLeft").val(_titleMargin.left);
            $("#titleMarginRight").val(_titleMargin.right);
            $.tplComponentPictureSetting.setTitleMargin();

            // 回显详细设置margin
            var _xxMargin = JSON.parse($("#" + id + "_xxMargin").html());
            $("#xxMarginTop").val(_xxMargin.top);
            $("#xxMarginBottom").val(_xxMargin.bottom);
            $("#xxMarginLeft").val(_xxMargin.left);
            $("#xxMarginRight").val(_xxMargin.right);
            $.tplComponentPictureSetting.setxxMargin();

            // 设置 【详细】 的颜色
            var _xxColor = $("#" + id + "_xxColor").val();
            $.tplComponentPictureSetting.initColor("#xxColor", _xxColor, $.tplComponentPictureSetting.setxxColor);
            $.tplComponentPictureSetting.setxxColor(_xxColor);

            //设置底部摘要的颜色
            var _bottomBoxfontColor = $("#" + id + "_bottomBoxfontColor").val();
            $.tplComponentPictureSetting.initClorDefault("#xxColor", _bottomBoxfontColor, $.tplComponentPictureSetting.setBottomBoxfontColor);
            $.tplComponentPictureSetting.setBottomBoxfontColor(_bottomBoxfontColor);

            // 设置摘要经过的颜色
            //var _xxHoverColor = $("#" + id + "_xxHoverColor").val();
            //$.tplComponentPictureSetting.initColor("#titleHoverColor", _xxHoverColor, $.tplComponentPictureSetting.setxxHoverColor);
            //$.tplComponentPictureSetting.setxxHoverColor(_xxHoverColor);

            // 设置【详细】 的颜色
            var _xxFontColor = $("#" + id + "_xxFontColor").val();
            $.tplComponentPictureSetting.initColor("#xxFontColor", _xxFontColor, $.tplComponentPictureSetting.setMorenXxFontColor);
            $.tplComponentPictureSetting.setMorenXxFontColor(_xxFontColor);

            // 设置【详细】经过 的颜色
            var _xxFontHoverColor = $("#" + id + "_xxFontHoverColor").val();
            $.tplComponentPictureSetting.initColor("#xxFontHoverColor", _xxFontHoverColor, $.tplComponentPictureSetting.setXxHoverFontColor);
            $.tplComponentPictureSetting.setXxHoverFontColor(_xxFontHoverColor);


            // 是否添加【详细】
            var _isAddxxFont = $("#" + id + "_isAddxxFont").val();
            $.tplComponentPictureSetting.setStartBtn('.visibleMs', _isAddxxFont);

            // 是否有首行缩进
            var _isIndent = $("#" + id + "_isIndent").val();
            $.tplComponentPictureSetting.setStartBtn('.xxIndent', _isIndent);

            // 设置详细行高
            var _xxLineHeight = $("#" + id + "_xxLineHeight").val();
            $("#xxLIneHeight").val(_xxLineHeight);

            // 设置详细对齐
            var _xxAlign = $("#" + id + "_xxAlign").val() * 1;
            $.tplComponentPictureSetting.bindxxAlign(_xxAlign);

            // 回显标题加粗效果
            $.tplComponentPictureSetting.bindTitleWeight();
            // 回显标题下滑线
            $.tplComponentPictureSetting.bindTiltleDecoration();
            $.tplComponentPictureSetting.bindMemoWeight();
            $.tplComponentPictureSetting.bindMemoDecoration();

            // 标题对齐回显
            $.tplComponentPictureSetting.bindtitleAlign();
            // 标题行高回显
            var _titleLineheight = $("#" + id + "_titleLineheight").val();
            $("#titleLineHeight").val(_titleLineheight);
            $.tplComponentPictureSetting.setxxFamily();
            $.tplComponentPictureSetting.setTitleFamily();
            $.tplComponentPictureSetting.setxxMargin();
            $.tplComponentPictureSetting.bindSetxxPos($("#" + id + "_FontPos").val());
            //绑定设置图片的宽高
            //$.tplComponentPictureSetting.bindsetPicwh();
            //var _bottomBoxfontColor = $("#" + id + "_bottomBoxfontColor").val();
            //$.tplComponentPictureSetting.setBottomAndInitColor("#bottomBoxfontColor", 'color', _bottomBoxfontColor);
            //绑定宽高设置的keypress事件
            //$.cssGenerator.bindKeypressEvent($.tplComponentPictureSetting.setwidthbykeyEvent,$.tplComponentPictureSetting.setHeightbykeyEvent)

            // 调用拖拽控制大小方法
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
             * 拖拽位置设置左边距
             */
            $.dragResizeInitInfo.getCallBack(setML, setMT);
            // 添加热区锚点右键菜单
            $.customMenu.init(id);
        },
        /**
         * 通过keypress事件设置组件宽度；
         * @param pos 方向；左右， 0 左，1 右
         */
        setwidthbykeyEvent: function(pos) {
            var id = selectedElementInfo.get("id");
            var w;
            //设置组件宽度变大
            if (pos === 1) {
                w = $("#" + id + "_picWidth").val().replace('px', '') * 1 + 1;
            } else {
                //设置组件宽度变小
                w = $("#" + id + "_picWidth").val().replace('px', '') * 1 - 1;
            }
            $("#" + id + "_picWidth").val(w + ' px');
            $("#tplRadioWidth").val(w + ' px');
            $.tplComponentPictureSetting.setStyleCss(id, '', 'margin-left', w + 'px');
            //$.tplComponentPictureSetting.setStyleCss(id, ' .picture-holder', 'margin-left', w+'px');
        },
        /**
         * 通过keypress事件设置组件宽度；
         * @param pos 方向；左右， 0 左，1 右
         */
        setHeightbykeyEvent: function(pos) {
            var id = selectedElementInfo.get("id");
            var h;
            if (pos) {
                //设置组件高度变大
                h = $("#" + id + "_picHeight").val().replace('px', '') * 1 + 1;
            } else {
                //设置组件高度变小
                h = $("#" + id + "_picHeight").val().replace('px', '') * 1 - 1;
            }
            $.tplComponentPictureSetting.setStyleCss(id, '', 'margin-top', h + 'px');
        },
        /**
         * 绑定设置图片的宽高
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
         * 0: 都不显示； 1:默认不显示，鼠标经过显示； 2: 默认显示，鼠标经过显示
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
         * 设置底部title标题的颜色；
         * @param color
         */
        setBottomtitleColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' h2.moren', 'color', color);
            $.tplComponentPictureSetting.setStyleCss(id, ' h2.moren a', 'color', color);
            $("#" + id + "_titleColor").val(color);
        },
        /**
         * 设置tiltle的hover效果
         * @param {[type]} color [description]
         */
        setBottomtitleHoverColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' h2.moren:hover', 'color', color);
            $.tplComponentPictureSetting.setStyleCss(id, ' h2.moren a:hover', 'color', color);
            $("#" + id + "_titleHoverColor").val(color);
        },
        /**
         * 设置底部文字的颜色
         * @param color
         */
        setBottomBoxfontColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' .bottom_font span.moren', 'color', color);
            $("#" + id + "_bottomBoxfontColor").val(color);
        },
        /**
         * 设置底部背景的颜色
         * @param color
         */
        setBottomBoxColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' .bottom_font', 'background-color', color);
            $("#" + id + "_bottomBoxColor").val(color);

        },
        /**display
         * 回显bottom的
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
         * 回显位置
         * @param  {String} pos 0 图内 1 图上 2 图下
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
         *设置文字 详细的 位置
         * @param  {String} pos 0 图内 1 图上 2 图下
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
            //设置底部box的颜色
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
            // 轮播初始状态
            var pics = [{
                path: serverPath + '/images/localPictrue.jpg',
                name: '海水咆哮着，滚滚灌入这大自然的咽喉',
                title: '人居环境科学是一门以人类聚居为研究对象,着重探讨人与环境之间的相互关系的科学。'
            }];
            // 存储初始化的路径；
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
         * 设置默认图片的大小
         * @param {str} src 地址
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
            // 轮播初始状态
            var pics = [{
                path: serverPath + '/images/localPictrue.jpg',
                name: '海水咆哮着，滚滚灌入这大自然的咽喉',
                title2: '海水咆哮着，滚滚灌入这大自然的咽喉'
            }];
            // 存储初始化的路径；
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
            // 设置图片底部的文字内容为fileName
            if (fileName.indexOf('.') != -1) {
                fileName = fileName.split('.')[0]
            }
            $("#" + id).find(" #static .bottom_font span").html('摘要');
            $("#" + id).find(" #static .bottom_font h2.moren").html(fileName);

            $("#" + id + " .picture-icon-bg").hide();
            if (link) {
                $("#" + id + " .picture-holder").find('img').wrap('<a href="' + link + '"></a>');
                // this.setBottomWidth(imgPath);
                $("#" + id).find(" #static .bottom_font span").html('摘要');
                $("#" + id).find(" #static .bottom_font h2.moren").html('<a href="' + link + '">' + fileName + '</a>');
            } else {
                var img = $("#" + id + " #static.picture-holder").find('img');
                $("#" + id + " #static.picture-holder").find('a').remove();
                $("#" + id + " #static.picture-holder").append(img);
            }
        },
        /**
         * 控制ckeditor弹出的时机
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
            img[0].onload = function() { //图片加载完成的时候
                    imgWidth = img.width();
                    $("#" + targetId).find(".picture-holder .bottom_font").css('width', imgWidth)
                    $("#" + targetId).find(".picture-holder .bottom_font").css({
                        'left': '50%',
                        'margin-left': -imgWidth / 2
                    })
                }
                // 获得图片的text-algin;
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
                //其中gm中的g表示"执行全局匹配(查找所有匹配而非在找到第一个匹配后停止)"
                //其中gm中的m表示执行多行匹配
                newStr = str1.replace(new RegExp(str2, "gm"), str3);
            }
            return newStr;
        },
        /**
         * 长图滚动设置
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
                //获取选中元素的id
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
         * 添加到style中样式
         * @param {[type]} id    [description]
         * @param {string} child 后代选择器
         * @param {String} style [样式属性]
         * @param {[String]} val   样式值
         */
        setStyleCss: function(id, child, style, val) {
            $.common.removeGeneratedCss(id, child, style, val);
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            var styleText = "#" + id + child + "{" + style + ":" + val + ";}";
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            $("#generatedCss").text(styleCss);
            return styleText;
        },
        // 底部文字水平位置回显
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
         * 设置透明度
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
         * 设置组件的左边距
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
                // 设置水平居中为不活跃状态
                $("#tpl-sidebar-2016-01-13-pictrueAlign .vertical-bg").removeClass('active');
                $("#tplRadioMarginLeft").val(value + ' px');
            } catch (e) {
            }
        },
        /**
         * 设置组件的右边距
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
        // 设置图片的宽高
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
        setBottomPadding: function(style, value) { //设置bottom下面的box的padding
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
         * 设置摘要行高
         * @param  {[string]} val [行高值]
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
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);

        },

        /**
         * title对齐回显
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
         * [回显摘要下滑线]
         * @return {[type]} [description]
         */
        bindMemoDecoration: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var decoration = JSONobj.decoration;
            if (!decoration) {
                // 设置成normal
                $('#memoDecoration').removeClass('t-icon-decoration').addClass("t-icon-decoration-default");
            } else {
                $('#memoDecoration').removeClass('t-icon-decoration-default').addClass("t-icon-decoration");
            }
        },
        /**
         * 回显摘要的加粗效果
         * @return {[type]} [description]
         */
        bindMemoWeight: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var fontWeight = JSONobj.fontWeight;
            if (!fontWeight) {
                // 设置成weight
                $('#memoWeight').removeClass('t-icon-weight').addClass("t-icon-weight-default");
            } else {
                $('#memoWeight').removeClass('t-icon-weight-default').addClass("t-icon-weight");
            }
        },
        /**
         * [回显摘要下滑线]
         * @return {[type]} [description]
         */
        bindTiltleDecoration: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_weightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_weightDecoration").html());
            var decoration = JSONobj.decoration;
            if (!decoration) {
                // 设置成normal
                $('#titleDecoration').removeClass('t-icon-decoration').addClass("t-icon-decoration-default");
            } else {
                $('#titleDecoration').removeClass('t-icon-decoration-default').addClass("t-icon-decoration");
            }
        },
        /**
         * 回显title的加粗效果
         * @return {[type]} [description]
         */
        bindTitleWeight: function() {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_weightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_weightDecoration").html());
            var fontWeight = JSONobj.fontWeight;
            if (!fontWeight) {
                // 设置成weight
                $('#titleWeight').removeClass('t-icon-weight').addClass("t-icon-weight-default");
            } else {
                $('#titleWeight').removeClass('t-icon-weight-default').addClass("t-icon-weight");
            }
        },
        /**
         * 设置详细对齐回显
         * @param  {number} align 对齐设置 0 1 2
         * @return {[type]}       [description]
         */
        bindxxAlign: function(align) {
            $("#xxAlign .align-img").removeClass('active');
            $("#xxAlign .align-img").eq(align).addClass('active');
        },
        /**
         * 按钮状态回显
         * @param {string} obj       dom选择器
         * @param {boolean} playValue 是否是打开状态
         */
        setStartBtn: function(obj, playValue) { //按钮状态回显
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
         * 设置摘要memo 的加粗效果
         */
        setBottomMemoWeightEvent: function(eventDom) {
            var id = selectedElementInfo.get("id");
            var JSONobj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var fontWeight = JSONobj.fontWeight;
            if (!fontWeight) {
                // 设置成weight
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
         * 设置memo的hover下划线效果 事件
         */
        setBottomMemoDecorationEvent: function(eventDom) {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_memoWeightDecoration").html());
            var decoration = JSONobj.decoration;
            if (!decoration) {
                // 设置成weight
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
         * 设置memo的hover下划线效果
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
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
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
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);
        },
        /**
         * 设置【详细】hover 的颜色
         * @param color
         */
        setXxHoverFontColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' span.moren a.xx:hover', 'color', color);
            $("#" + id + "_xxFontHoverColor").val(color);
        },
        /**
         * 设置【详细】默认的颜色
         */
        setMorenXxFontColor: function(color) {
            var id = selectedElementInfo.get("id");
            $.tplComponentPictureSetting.setStyleCss(id, ' span.moren a.xx', 'color', color);
            $("#" + id + "_xxFontColor").val(color);
        },

        /**
         * 设置【详细】的颜色
         * @param {[function]} [callback]
         * @param {[string]} id [dom选择器]
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
         * 设置底部title标题的颜色
         * @param {[string]} id    input 的id
         * @param {[string]} color 颜色值
         * @param {[number]} ishover 是否是鼠标经过
         * @param {[number]} isxx 是否是详细设置
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
                        // 是标题设置颜色
                        that.bindsetTitleColor(color, 0);
                    } else if (ishover && !isxx) {
                        // 是标题经过设置颜色
                        that.bindsetTitleHoverColor(color, 0);
                    } else if (ishover && isxx) {
                        // 详细经过设置颜色
                        that.bindsetTitleHoverColor(color, 1);
                    } else if (!ishover && isxx) {
                        // 详细设置颜色
                        that.bindsetTitleColor(color, 1);
                    }
                    $.common.regain();
                },
                change: function(color) {
                    if (!ishover && !isxx) {
                        // 是标题设置颜色
                        that.bindsetTitleColor(color, 0);
                    } else if (ishover && !isxx) {
                        // 是标题经过设置颜色
                        that.bindsetTitleHoverColor(color, 0);
                    } else if (ishover && isxx) {
                        // 详细经过设置颜色
                        that.bindsetTitleHoverColor(color, 1);
                    } else if (!ishover && isxx) {
                        // 详细设置颜色
                        that.bindsetTitleColor(color, 1);
                    }
                    $.common.regain();
                },
                palette: per
            });
        },
        /**
         * 设置title加粗效果
         * @param {[type]} eventDom [description]
         */
        setBottomTitleWeightEvent: function(eventDom) {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_weightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_weightDecoration").html());
            var fontWeight = JSONobj.fontWeight;
            if (!fontWeight) {
                // 设置成weight
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
         * 设置memo摘要下滑线效果
         * @param {[type]} eventDom [description]
         */
        setBottomTiltleDecorationEvent: function(eventDom) {
            var id = selectedElementInfo.get("id");
            var obj = JSON.parse($("#" + id + "_weightDecoration").html());
            var JSONobj = JSON.parse($("#" + id + "_weightDecoration").html());
            var decoration = JSONobj.decoration;
            if (!decoration) {
                // 设置成weight
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
         * 设置摘要的下滑线
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
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);

        },
        /**
         * [设置底部文字的加粗/不加粗效果]
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
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);

        },
        /**
         * 设置标题经过颜色
         * @param  {string} color 颜色值
         * @param  {number} isxx 是否是设置详细的颜色
         */
        bindsetTitleHoverColor: function(color, isxx) {
            var id = selectedElementInfo.get("id");
            var targetDom = isxx ? ':hover span.moren' : ':hover h2.moren a';
            $.common.removeGeneratedCss(id, targetDom, 'color');
            var styleText = "#" + id + targetDom + "{color:" + color + "!important;}";
            styleText += "\r\n";
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);
            if (isxx) {
                $("#" + id + "_xxHoverColor").val(color);
            } else {
                $("#" + id + "_titleHoverColor").val(color);
            }

        },
        /**
         * 设置标题颜色
         * @param  {string} color 颜色值
         * @param  {number} isxx 是否是设置详细的颜色
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
         * 设置详细的margin
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
         * 设置详细对齐
         * @param  {[number]} val [对齐标志 0 1 2]
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
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);
            var align = $("#" + id + "_titleAlign").val() * 1;
            this.setTitleAlign(align);

        },

        /**
         * 绑定是否添加【详细】的点击事件
         * @return {[type]} [description]
         */
        bindSetisAddXxEvent: function() {
            var id = selectedElementInfo.get("id");

            // 如果没有选择稿件栏目就return
            if (!$("#" + id + "_cmsData").val()) {
                alert('请先选择稿件栏目');
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
         * 设置title的margin
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

            // 设置外边距
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
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);

        },
        /**
         * 设置title的字体
         */
        setTitleFamily: function() {
            var id = selectedElementInfo.get("id");
            $("#selectTitleFamily li").on('click', function() {
                var famiyHtml = $(this).html();
                $("#titleFamily").html(famiyHtml);
                $("#" + id + "_titleFamily").val(famiyHtml);
                $.common.removeGeneratedCss(id, " h2.moren", 'font-family');
                var styleText = "#" + id + " h2.moren{font-family:" + famiyHtml + "!important;}";
                var styleCss = $("#generatedCss").text(); //获取所有的样式
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);

            });
        },
        /**
         * 设置详细的字体
         */
        setxxFamily: function() {
            var id = selectedElementInfo.get("id");
            $("#selectxxFamily li").on('click', function() {
                var famiyHtml = $(this).html();
                $("#titleFamily").html(famiyHtml);
                $("#" + id + "_titleFamily").val(famiyHtml);
                $.common.removeGeneratedCss(id, " span.moren", 'font-family');
                var styleText = "#" + id + " span.moren{font-family:" + famiyHtml + "!important;}";
                var styleCss = $("#generatedCss").text(); //获取所有的样式
                //替换或者在最后拼接
                styleCss += "\r\n" + styleText;
                //给样式文件赋值
                $("#generatedCss").text(styleCss);

            });
        },
        /**
         *设置title的对齐方式
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
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);

        },
        /**
         * 设置title行高
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
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);

        },
        /**
         * 设置标题字体的大小
         * @param {string} value  字体大小值
         * @param {string} target 字体设置对象定位
         * @param {string} saveId 字体存储对象定位
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
            var styleCss = $("#generatedCss").text(); //获取所有的样式
            //替换或者在最后拼接
            styleCss += "\r\n" + styleText;
            //给样式文件赋值
            $("#generatedCss").text(styleCss);
            $("#" + id + saveId).val(value + ' px')

        },
        /**
         * 设置默认的底部的背景颜色
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
         * 设置是否显示底部文字
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
         * 设置是否显示底部文字
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
         * 连上hover事件
         */
        bindHoverEvent: function() {
            // var id = selectedElementInfo.get("id");
            // $("#" + id).find(' #static .picture-holder').off('mouseenter').off('mouseleave');
            // $("#" + id).find('.bottom_font').show();
        },
        /**
         * 重新设置文字的位置
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
         * 删除当前选中的栏目
         * isAdd 是否添加图片
         * @return {[type]} [description]
         */
        deleteCmsLm: function(isAdd) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_cmsColumnsName").val('');
            $("#" + id + "_cmsData").val("");
            $("#cmsColumnsFont").hide();
            // 取消选择栏目
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
         * 删除了栏目设置之后的操作
         * @return {[type]} [description]
         */
        deletecall: function(id) {
            $("#" + id + "_cmsData").val('');
            // 设置稿件类型
            $("#" + id + "_cmsDocumentTypeArr").val('0|1|2|3|4|5,8,9');
            // 显示字数
            $("#" + id + "_cmsDocumentSetfontNum").val('');
            // 设置cms图片的描述类型回显
            $("#" + id + "_cmspro_documentSetMs").val(1);
            // 设置cms图片的标题类型回显
            $("#" + id + "_cmspro_documentSetTitle").val('1');
            // 设置cms图片描述标题
            //$("#" + id + "_cmspro_documentTitle").val(1);
            // 设置cms图片的描述回显
            //$("#" + id + "_cmspro_documentMs").val(1);
            //设置发布批次
            $("#" + id + "_batchrule").val(0);
            // 从第几篇稿件开始获取
            $("#" + id + "_cmsDocumentStartPos").val(0);
            // 设置cms图片的描述类型回显
            $("#" + id + "_cmspro_documentSetMs").val(1);
            this.readHiddenInfo();
        },
        /**
         * 返回code对象
         * @param  {[json]} obj [{siteCode: "test222", channelCode: "333", name: "3333"}]
         * @return {[type]}     [description]
         */
        callBackCode: function(obj) {
            //静态逻辑，obj中有  staticArr 保存了选择的稿件列表
            if (obj.state === '0') {
                var path = obj.staticArr[0].path;
                var name = obj.staticArr[0].title;
                var link = obj.staticArr[0].channelUrl;
                $.tplComponentPictureSetting.addPic(path, name, link);
                return;
            } else if (obj.state === '1') {
                // 动态逻辑；
                if (obj.name === undefined) {
                    return;
                }
                var id = selectedElementInfo.get("id");
                $("#cmsColumnsFont .selectlmLi").eq(0).find('.selectLmText').html(obj.name);
                $("#" + id + "_cmsColumnsName").val(obj.name);
                $("#cmsColumnsFont").show();
                //   设置选择栏目的 siteCode   CHANNELCODE
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
         * 存储的数据
         * @param  {arr} inputArr 数组
         * @param  {$dom} checkBox checkbox Jquery对象
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
         * 设置模板，以及存储稿件类型
         * @param  {number} index 0,1,2（位置）
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
            // 设置模板
            $("#" + id + " #cmsCode cmspro_documents").attr('documenttype', _cmsDocumentTypeArr.join('|'));
            this.setCmsData();
        },
        /**
         * 回显设置显示的字数
         * @param  {[String]} len [显示字数的长度回显]
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
         * 计算cms中的设置标签的长度
         * @param str
         * @returns {*}
         */
        backtextIndex: function(str, val) {
            var textCount = 0;
            for (var i = 0; i < str.length; i++) {
                var c = str.charAt(i);
                if (/^[\u0000-\u00ff]$/.test(c)) //匹配双字节
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
         * 设置cms数据；设置后不截取字的长度
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
            //    判断是否有http https前缀
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
                //    稿件标题
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

            ms = '<span>' + ms + '</span>' + '<a class="xx" href="' + picHref + '" target="' + targetVal + '" style="text-decoration:none;">【详细】</a>'
            $("#" + id + " #static .bottom_font span.moren").html(ms).addClass('');
            var fontLength = $("#" + id + "_cmsDocumentSetfontNum").val().length;
            //this.setDefaultImgSize(picSrc);
            $.common.regain();
        },
        /**
         * 设置cms中标题显示的字数
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
         * 重新设置字的长度
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
         * 回显图片标题状态
         * @param  {str} val 0：不显示标题 1： 显示标题
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
         * 设置cms图片描述种类状态回显
         * @param  {[String]} val [存储的标题类型的值]
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
         * 回显图片描述状态
         * @param  {[str]} val 0：不显示描述 1： 显示描述
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
         * 处理参数
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
                alert('请先选择稿件栏目');
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
         * 获得cms数据
         * */
        getCmsInfo: function() {
            var url = '/app-tpl-webapp/common/gainManuscriptsAndAppendixs.action';
            var params = this.getCmsParams();
            return this.ajaxData(url, params)[0];
        },
        //获取后台数据
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
         * 稿件标题的种类设置
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
                // 应该设置成title
                $("#" + id + " #cmsCode .title_liu cmspro_document").attr('FIELD', 'subTitle');
                var title = info.manuscriptsInfo[0].title;
            } else {
                var subtitle = info.manuscriptsInfo[0].subTitle;
                // 应该设置成subTitle
                $("#" + id + " #cmsCode .title_liu cmspro_document").attr('FIELD', 'title');
            }
            $("#" + id + '_cmspro_documentSetTitle').val(currvalue);
            this.setCmsData();
        },

        /**
         * 设置标题显示隐藏
         * @param {dom} domObj   checkbox对象
         * @param {[type]} inputStr [description]
         */
        setCmsDocumentsTitleEvent: function(domObj, inputStr) {
            var id = selectedElementInfo.get("id");
            $(domObj).find('.checkIcon').toggleClass('active');
            var state = $(domObj).find('.checkIcon').hasClass('active') ? 1 : 0;
            $("#" + id + "_cmspro_documentTitle").val(state);
            if (state === 0) {
                // 不显示title
                //$("#" + id + " #cmsCode .bottom_font h2").hide();
                //$("#" + id + " #static .bottom_font h2").hide();
                this.setStyleCss(id, ' #cmsCode .bottom_font h2', 'display', 'none');
                this.setStyleCss(id, ' #static .bottom_font h2', 'display', 'none');
                $("#radioTitleSelect .radioIcon").removeClass('active').addClass('disable');
            } else {
                // 显示title
                //$("#" + id + " #cmsCode .bottom_font h2").show();
                //$("#" + id + " #static .bottom_font h2").show();
                this.setStyleCss(id, ' #cmsCode .bottom_font h2', 'display', 'block');
                this.setStyleCss(id, ' #static .bottom_font h2', 'display', 'block');
                $("#radioTitleSelect .radioIcon").removeClass('disable');
                // 设置cms图片的标题类型回显
                var _cmspro_documentSetTitle = $("#" + id + "_cmspro_documentSetTitle").val();
                this.bindCmsDocumentSetTitle(_cmspro_documentSetTitle);
            }
        },
        /**
         * 设置描述显示隐藏
         * @param {dom} domObj   checkbox对象
         * @param {[type]} inputStr [description]
         */
        setCmsDocumentsMs: function(domObj, inputStr) {
            var id = selectedElementInfo.get("id");
            $(domObj).find('.checkIcon').toggleClass('active');
            var state = $(domObj).find('.checkIcon').hasClass('active') ? 1 : 0;
            $("#" + id + "_cmspro_documentMs").val(state);
            if (state === 0) {
                // 不显示ms
                //$("#" + id + " #cmsCode .bottom_font span.moren").hide();
                //$("#" + id + " #static .bottom_font span.moren").hide();
                //$("#" + id + " #static .bottom_font span.moren a.xx").hide();
                this.setStyleCss(id, ' #cmsCode .bottom_font span.moren', 'display', 'none');
                this.setStyleCss(id, ' #static .bottom_font span.moren', 'display', 'none');
                this.setStyleCss(id, ' #static .bottom_font span.moren a.xx', 'display', 'none');
                // 将单选按钮设置为不可选中状态
                $("#radioMsSelect .radioIcon").removeClass('active').addClass('disable');
                // 将显示字数设置为禁用状态
                $("#cmsDocumentSetfontNum").attr({ 'disabled': 'disabled' }).addClass('form-control');
            } else {
                // 显示ms
                //$("#" + id + " #cmsCode .bottom_font span.moren").show();
                //$("#" + id + " #static .bottom_font span.moren").show();
                //$("#" + id + " #static .bottom_font span.moren a.xx").show();
                this.setStyleCss(id, ' #cmsCode .bottom_font span.moren', 'display', 'inline-block');
                this.setStyleCss(id, ' #static .bottom_font span.moren', 'display', 'inline-block');
                this.setStyleCss(id, ' #static .bottom_font span.moren a.xx', 'display', 'inline-block');
                // 将显示字数设置为可用状态
                $("#cmsDocumentSetfontNum").removeAttr('disabled').removeClass('form-control');
                // 将单选按钮设置为可选中状态
                $("#radioMsSelect .radioIcon").removeClass('disable');
                // 重新设置按钮状态
                var _cmspro_documentSetMs = $("#" + id + "_cmspro_documentSetMs").val();
                this.bindCmsDocumentSetMs(_cmspro_documentSetMs);
            }
        },
        /**
         * 稿件zi标题的种类设置
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
                // 应该设置成content
                $("#" + id + " #cmsCode .ms_liu cmspro_document").attr('FIELD', 'content');
            } else {
                $("#" + id + " #cmsCode .ms_liu cmspro_document").attr('FIELD', 'memo');
            }
            $("#" + id + '_cmspro_documentSetMs').val(currvalue);
            this.setCmsData();
        },
        /**
         * 设置发布批次属性
         * @param  {dom} obj   按钮
         * @param  {number} index 定位按钮
         * @return {[type]}       [description]
         */
        toggolePici: function(obj, flag) {
            var id = selectedElementInfo.get("id");
            $("#piciRadiaBtn .radioIcon").removeClass('active');
            $(obj).find('.radioIcon').addClass('active');
            // 不设置发布批次
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
         * 设置cms数据；
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
            //    判断是否有http https前缀
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
                //    稿件标题
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

            ms = '<span>' + ms + '</span>' + '<a class="xx" href="' + picHref + '" target="' + targetVal + '" style="text-decoration:none;">【详细】</a>'
            $("#" + id + " #static .bottom_font span.moren").html(ms).addClass('');
            var fontLength = $("#" + id + "_cmsDocumentSetfontNum").val().length;
            //this.setDefaultImgSize(picSrc);
            $.common.regain();
            this.setFontLength2();
        },
        /**
         * 回显发布批次按钮状态
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
         * 这是从第几篇稿件附件中获取图片
         * @param  {number} num 设置值
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
         * 设置cms图片标题种类状态回显
         * @param  {[String]} val [存储的标题类型的值]
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
         * 设置摘要是否有首行缩进
         */
        bindxxTextIndentEvent: function() {
            var id = selectedElementInfo.get("id");
            // 是否有首行缩进
            var isIndent = $("#" + id + "_isIndent").val() * 1;
            isIndent = isIndent === 0 ? 1 : 0;
            $("#" + id + "_isIndent").val(isIndent);
            this.setStartBtn('.xxIndent', isIndent);
            // 获得所有的详细span
            var xxs = $("#" + id + " .bottom_font span.moren");
            if ($(xxs).hasClass('indent')) {
                $(xxs).removeClass('indent');
            } else {
                $(xxs).addClass('indent');
            }
        },
        /**
         * 动态设置按钮的开关
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

        // 滑动按钮特效
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
         * 设置回显链接打开方式
         * @value {[string]} [链接打开方式值]
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
         * 设置链接打开方式
         */
        setTargetLink: function(value, obj) {
            var id = selectedElementInfo.get("id");
            $("#" + id + "_targetLink").val(value);
            $("#" + id + " .picture-holder a").attr({ 'target': value });
            $("#linkTarget .radio-checked").removeClass('active');
            $(obj).find('.radio-checked').addClass('active');

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
                    $(obj).find('.center').addClass('active');
                    break;
                case 3:
                    // 水平居右对齐
                    $(obj).find('div').removeClass('active');
                    $(obj).find('.right').addClass('active')
                    break;
                default:
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
                case 4:
                    $("#tpl-sidebar-2016-04-06-pictrueVerticalAlign").find('.vertical-bg').removeClass('active');
                    break;
                default:
                    // statements_def
                    break;
            }
        },
        /**
         * 设置默认配置color
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
         * 设置详细经过的颜色
         * @param color
         */
        setxxHoverColor: function(color) {
            var id = selectedElementInfo.get("id");
            //$.tplComponentPictureSetting.setStyleCss(id, ':hvoer span.moren', 'color', color);
            $.tplComponentPictureSetting.setStyleCss(id, ':hover span.moren a', 'color', 'red');
            $("#" + id + "_xxHoverColor").val(color);
        },
        /**
         * 设置摘要的颜色
         * @param color
         */
        setxxColor: function(color) {
            var id = selectedElementInfo.get("id");
            //$.tplComponentPictureSetting.setStyleCss(id, ' span.moren', 'color', color);
            $.tplComponentPictureSetting.setStyleCss(id, ' a.xx', 'color', color);
            $("#" + id + "_xxColor").val(color);
        },
        /**
         * 设置默认颜色
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
        setBottomAndInitColor: function(obj, style, color) { //设置bottom的颜色
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
         * 重新设置图片的居中
         * @param  {[type]} value [description]
         * @return {[type]}       [description]
         */
        resetImgAlign: function() {
            var id = selectedElementInfo.get("id");
            var parentWidth = $("#" + id).parent().width();
            var width = $("#" + id + "_picWidth").val() !== "自动" ? $("#" + id + "_picWidth").val().replace('px', "") * 1 : $("#" + id).width();
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
         * 设置图片的居中
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
         * 设置图片的描述为默认；
         */
        setFontDefualt: function() {
            var id = selectedElementInfo.get("id");
            $("#" + id + " .bottom_font").css({ 'position': 'absolute' });
            $("#" + id + "_FontPos").val(0);

            // this.bindHoverEvent();
        },
        /**
         * 设置图片的描述在上面；
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
         * 设置图片的描述在下面；
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
         * 设置图片详细文字的外边距
         * @param value 带单位px的，或者不带单位的字符串
         */
        setFontMarginBottom: function(value) {
            var id = selectedElementInfo.get("id");
            value = value.replace('px', '') * 1;
            $("#" + id + " .bottom_font").css({ 'paddingBottom': value });
            $("#" + id + "_fontMarginBottom").val(value + ' px');

        },
        /**
         * 设置图片详细文字的外边距
         * @param value 带单位px的，或者不带单位的字符串
         */
        setFontMarginTop: function(value) {
            var id = selectedElementInfo.get("id");
            value = value.replace('px', '') * 1;
            $("#" + id + " .bottom_font").css({ 'paddingTop': value });
            $("#" + id + "_fontMarginTop").val(value + ' px');

        },
        setImgATarget: function(ele) { /*设置图片链接*/
            try {

                var id = selectedElementInfo.get("id");
                // 创建a链接
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
                // 用a链接包裹图片
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
         * 设置选中区域高亮
         * @param  {dom} obj dom对象
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
            // 风格设置开始
            var serverPath = $.common.getComponetIMagesUrl(id);
            var jsonData = [{
                name: '不显示文字',
                childElement: "",
                childIndexElement: " .tpl-component-2016-01-07-picture-change",
                classStyle: 'tpl-component-2016-01-07-picture-style',
                url: serverPath + '/images/default_pic4.png',
                className: 'tpl-component-2016-01-07-picture-style1',
                fileName: 'index_1',
                id: id
            }, {
                name: '显示文字',
                childElement: "",
                url: serverPath + '/images/default_pic2.png',
                childIndexElement: " .tpl-component-2016-01-07-picture-change",
                classStyle: 'tpl-component-2016-01-07-picture-style',
                className: 'tpl-component-2016-01-07-picture-style2',
                fileName: 'index_2',
                id: id
            }, {
                name: '只显示标题',
                childElement: "",
                childIndexElement: " .tpl-component-2016-01-07-picture-change",
                classStyle: 'tpl-component-2016-01-07-picture-style',
                url: serverPath + '/images/default_pic1.png',
                className: 'tpl-component-2016-01-07-picture-style5',
                fileName: 'index_5',
                id: id
            }, {
                name: '只显示摘要',
                childElement: "",
                url: serverPath + '/images/default_pic3.png',
                childIndexElement: " .tpl-component-2016-01-07-picture-change",
                classStyle: 'tpl-component-2016-01-07-picture-style',
                className: 'tpl-component-2016-01-07-picture-style6',
                fileName: 'index_6',
                id: id
            }];
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
            var hiddenCb = $.tplComponentPictureSetting.readHiddenInfo;
            // 传递保存的风格索引
            var saveCoustomFg = "";
            var saveSystemFg = "";
            saveCoustomFg = $("#" + id + "_savecoustomFg").val() === "" ? "" : $("#" + id + "_savecoustomFg").val() * 1;
            saveSystemFg = $("#" + id + "_saveSystemFg").val() === "" ? "" : saveSystemFg = $("#" + id + "_saveSystemFg").val() * 1;
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
            counstomStyle.init(jsonData, 1, callback, hiddenCb, targetFg, '图片');

            // 获得所有的用户风格的数据资源
            var sqluserArr = counstomStyle.getUserStyleData('tpl-component-2016-01-07-picture');
            counstomStyle.formatUserarr(sqluserArr.innerStyleByClassName, function(userarr) {
                // 初始化用户风格
                counstomStyle.init(userarr, 0, callback, hiddenCb, targetFg, '图片');
            });
            // 风格设置结束

            // 垂直对齐事件
            // 设置垂直对齐
            $("#tpl-sidebar-2016-04-06-pictrueVerticalAlign div").on('click', function() {
                // 设置active效果
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
                // 滑动效果
                var result = $.tplComponentPictureSetting.hdBtn('.tpl-sidebar-2016-01-07-picture .isShowDirecBtnHover');
                var morenDisplay = $(".isShowDirecBtn .pic_zoom").hasClass('on');
                if (!result) {
                    //    获得是否显示状态；
                    if (morenDisplay) {
                        //    如果默认是显示的；那么鼠标经过
                    }
                } else {
                    $("#" + id).removeClass('bhover');
                }
            });

            $(".tpl-sidebar-2016-01-07-picture .isShowDirecBtn").off('click').on('click', function() {
                var id = selectedElementInfo.get("id");
                // 滑动效果
                $.tplComponentPictureSetting.hdBtn('.tpl-sidebar-2016-01-07-picture .isShowDirecBtn');
                if ($('.isShowDirecBtn .pic_zoom').hasClass('on')) {
                    $("#" + id + "_isShowHoverBtn").val(2);
                    //$.tplComponentPictureSetting.bindBottomDisplay(2);
                    // $.tplComponentPictureSetting.hdBtn('.tpl-sidebar-2016-01-07-picture .isShowDirecBtnHover');
                } else {
                    $("#" + id).removeClass('bdisplay');
                }
                // // 设置自动播放
                // $.tplComponentPictureSetting.setIsShowLongFont(playValue)
            });

            // 设置默认图片

            // 当选中input的时候就让input自动选中文字
            $("input.select-content").focus(function() {
                $(this)[0].select()
            })

            function callAddpic() {
                // 取出json字符串
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
            // 点击事件
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
                // 兼容FF和IE和Opera
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