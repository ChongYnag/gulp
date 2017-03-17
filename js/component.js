/**
 * �ֲ�����ʵ��
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($) {
    //�ֲ�����
    $.tplComponentPictureCarousel = {
        //�ֲ�����
        pcDatas: { all: [] },
        
        //�Զ��ֲ�����
        startPlay: function(distance, id,_index) {
            if(!_index){
                _index = 1;
            }

            var start = setInterval(function() {
                var $ph = null;
                if ($.common.pictureCarousels.get(id) && $.common.pictureCarousels.get(id).$ph) {
                    $ph = $.common.pictureCarousels.get(id).$ph;
                    var left = $ph.css('left');
                    if (left === 'auto') {
                        left = 0;
                    } else {
                        left = Number(left.replace('px', ''));
                    }
                    var size = $ph.children('li').length;
                    
                    //ͼƬ�����һ��
                    if (left === -distance * (size-1)) {
                        //�ָ�����λ��
                        $ph.css('left', '0px');
                        var i = 0;
                        while(i<(size-1)){
                            //ɾ����һ��ͼƬ�ŵ�����ĩβ
                           $ph.children('li').first().appendTo($ph);
                            i++;
                        }
                        //���������ƶ�һ��ͼƬ�ľ���
                        $ph.animate({ left: '-' + distance + 'px' }, 500, function() {
                            //�ָ�����λ��
                            $(this).css('left', '0px');
                            //ɾ����һ��ͼƬ�ŵ�����ĩβ
                            $(this).children('li').first().appendTo(this);
                            //���ÿ��ٵ���λ��
                            $(this).siblings('.fast-access-holder').children('i').eq(0).addClass('active').siblings('i').removeClass('active');
                            _index = 1;
                            
                        });
                    }else{
                        //���������ƶ�һ��ͼƬ�ľ���
                        $ph.animate({ left: '-' + distance*_index + 'px' }, 500, function() {
                            //�ָ�����λ��
                            $(this).css('left', '0px');
                            var i = 0;
                            while(i<_index){
                                //ɾ����һ��ͼƬ�ŵ�����ĩβ
                                $(this).children('li').first().appendTo(this);
                                i++;
                            }
                            //��ȡ��һ��ͼƬ��ԭʼλ��
                            var index = Number($(this).children('li').first().attr('class').replace('pic', ''));
                            //���ÿ��ٵ���λ��
                            $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                            _index = 1;
                            
                        });
                        
                    }

                }

            }, 2000);
            //��ʱ��
            $.common.pictureCarousels.get(id).start = start;
            //��λ��ʶ
            $.common.pictureCarousels.get(id).reset = false;
        },
        //���ٵ����ֲ�����
        fastAccessPlay: function(event) {

            //ֹͣ��ʱ��
            var id = event.data.id;
            if ($.common.pictureCarousels.get(id) && $.common.pictureCarousels.get(id).start) {
                clearInterval($.common.pictureCarousels.get(id).start);
            }
            var $ph = null;
            if ($.common.pictureCarousels.get(id) && $.common.pictureCarousels.get(id).$ph) {
                $ph = $.common.pictureCarousels.get(id).$ph;
                //ֹͣ�����ƶ�
                $ph.stop();
                //��ȡ��һ��ͼƬ��ԭʼλ��
                var size = Number($ph.children('li').first().attr('class').replace('pic', ''));
                //��ȡͼƬ����
                var len = $ph.children('li').length;
                //���ͼƬû�и�λ�����и�λ����
                var left = Number($ph.css('left').replace('px', ''));
                if (!$.common.pictureCarousels.get(id).reset) {
                    if (left === -event.data.distance * (len - 1)) {
                        $ph.css('left', '0px');
                    } else {
                        //����ͼƬ��λӰ�죬�ƶ���ǰλ��
                        $ph.css('left', -event.data.distance * size + left + 'px');
                    }
                    var k = 0;
                    //��ǰͼƬλ�ø�λ���ָ�����ʼ״̬
                    while (k < size) {
                        $ph.children('li').first().before($ph.children('li').last());
                        k++;
                    }
                    //����Ѹ�λ
                    $.common.pictureCarousels.get(id).reset = true;
                }
                
               
                //���ÿ�ʼ�ƶ�
                $ph.animate({ left:  '-'+event.data.distance * (event.data.i) + 'px' }, 500, function() {
                    $(event.data.obj).addClass('active').siblings('i').removeClass('active');
                });
                if($('.icon-yul').hasClass('active')){
                    $.tplComponentPictureCarousel.continuePlay(id,event.data.i+1);
                }
                $('#'+id+' .fast-access-holder').trigger('click');
                event.stopPropagation();

            }
        },
        //��ť�ֲ�����
        leftAccessPlay: function(event) {
            try {
                var id = event.data.id;
                //ֹͣ��ʱ��
                if ($.common.pictureCarousels.get(id) && $.common.pictureCarousels.get(id).start) {
                    clearInterval($.common.pictureCarousels.get(id).start);
                }
                var $ph = null;
                if ($.common.pictureCarousels.get(id) && $.common.pictureCarousels.get(id).$ph) {
                    $ph = $.common.pictureCarousels.get(id).$ph;

                    var left = $ph.css('left');
                    if (left === 'auto') {
                        left = 0;
                    } else {
                        left = Number(left.replace('px', ''));
                    }

                    //ͼƬ��ֹ
                    if (left % event.data.distance === 0) {
                        //ͼƬ���ڵ�һ��
                        if (left === 0) {
                            //�����һ��ͼ�ƶ�����һ��֮ǰ
                            $ph.children('li').first().before($ph.children('li').last());
                            //ͼƬ�����ƶ�һ��ͼƬ�ľ���
                            $ph.css('left', '-' + event.data.distance + 'px');
                            //��ʼ�˶�
                            $ph.animate({ left: '0px' }, 500, function() {
                                //���õ�һ��������ťΪѡ��״̬
                                var index = Number($(this).children('li').first().attr('class').replace('pic', ''));
                                $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                                //����δ��λ
                                $.common.pictureCarousels.get(id).reset = false;
                                
                            });
                        } else {
                            //��ʼ�˶�
                            $ph.animate({ left: left + Number(event.data.distance) + 'px' }, 500, function() {
                                //���õ�ǰλ�õ�����ťΪѡ��״̬
                                var left = Number($(this).css('left').replace('px', ''));
                                var _index = Math.abs(left / event.data.distance);
                                var index = Number($(this).children('li').eq(_index).attr('class').replace('pic', ''));
                                $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                                
                            });
                        }
                    } 
                    if($('.icon-yul').hasClass('active')){
                        $.tplComponentPictureCarousel.continuePlay(id,event.data.i+1);
                    }
                    event.stopPropagation();
                }

            } catch (e) {
                
            }

        },
        //�Ұ�ť�ֲ�����
        rightAccessPlay: function(event) {
            try {
                var id = event.data.id;
                //ֹͣ��ʱ��
                if ($.common.pictureCarousels.get(id) && $.common.pictureCarousels.get(id).start) {
                    clearInterval($.common.pictureCarousels.get(id).start);
                }
                var $ph = null;
                if ($.common.pictureCarousels.get(id) && $.common.pictureCarousels.get(id).$ph) {
                    $ph = $.common.pictureCarousels.get(id).$ph;
                    var size = $ph.children('li').length;
                    var left = $ph.css('left');
                    if (left === 'auto') {
                        left = 0;
                    } else {
                        left = Number(left.replace('px', ''));
                    }
                    //ͼƬ��ֹ
                    if (left % event.data.distance === 0) {
                        //ͼƬ���ڵ�һ��
                        if (left === 0) {
                            //��ʼ�˶�
                            $ph.animate({ left: '-' + event.data.distance + 'px' }, 500, function() {
                                //�ƶ��������
                                $(this).css('left', '0px');
                                //����һ���ƶ���β��
                                $(this).children('li').first().appendTo(this);
                                //���õ�һ��������ťΪѡ��״̬
                                var index = Number($(this).children('li').first().attr('class').replace('pic', ''));
                                $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                                //��ʶδ��λ
                                $.common.pictureCarousels.get(id).reset = false;
                                
                            });
                        } else {
                            //ͼƬ�����һ��
                            if (left === -event.data.distance * (size - 1)) {
                                //����һ���ƶ���β��
                                $ph.children('li').first().appendTo($ph);
                                //�����ƶ�һ��ͼƬ����
                                $ph.css('left', left + Number(event.data.distance) + 'px');
                                //��ʼ�˶�
                                $ph.animate({ left: left + 'px' }, 500, function() {
                                    //�������һ��������ťΪѡ��״̬
                                    var left = Number($(this).css('left').replace('px', ''));
                                    var index = Number($(this).children('li').last().attr('class').replace('pic', ''));
                                    $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                                    //��ʶδ��λ
                                    $.common.pictureCarousels.get(id).reset = false;
                                     
                                });
                            } else { //ͼƬ��λ����β
                                //��ʼ�˶�
                                $ph.animate({ left: left - Number(event.data.distance) + 'px' }, 500, function() {
                                    //���õ�ǰλ�õ�����ťΪѡ��״̬
                                    var left = Number($(this).css('left').replace('px', ''));
                                    var _index = Math.abs(left / event.data.distance);
                                    var index = Number($(this).children('li').eq(_index).attr('class').replace('pic', ''));
                                    $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                                    
                                });
                            }
                        }
                    }
                    if($('.icon-yul').hasClass('active')){
                        $.tplComponentPictureCarousel.continuePlay(id,event.data.i+1);
                    }
                    event.stopPropagation();
                }

            } catch (e) {
               
            }

        },
        //�����˶�
        continuePlay:function(id,index){
            setTimeout(function(){
                //ֹͣ�ֲ�
                if ($.common.pictureCarousels.get(id) && $.common.pictureCarousels.get(id).start) {
                    clearInterval($.common.pictureCarousels.get(id).start);
                }
                var distance = $('#'+id).find('.picturegroup.static .picturegroup-holder').width();
                $.tplComponentPictureCarousel.startPlay(distance,id,index);
            },5000);
        },
        //��ʼ���˶�
        initPlay:function(id){
            //ֹͣ�ֲ�
            if ($.common.pictureCarousels.get(id) && $.common.pictureCarousels.get(id).start) {
                clearInterval($.common.pictureCarousels.get(id).start);
            }
            $.common.pictureCarousels.remove(id);

            $ph = $('#' + id + ' .picturegroup.static .picture-holder');
            
            var distance = $('#' + id +' .picturegroup.static .picturegroup-holder').width();
            
            $.common.pictureCarousels.put(id, { start: null, $ph: $ph, reset: false });
            
            $ph.siblings('.fast-access-holder').children('i').eq(0).addClass('active').siblings('i').removeClass('active');
            

            //ͼƬ��λ
            if ($ph.children('li').length > 1) {
                
                var size = Number($ph.children('li').first().attr('class').replace('pic', ''));
                
                var left = Number($ph.css('left').replace('px', ''));
                //����ͼƬ��λӰ�죬�ƶ���ǰλ��
                $ph.css('left', '0px');
                var k = 0;
                //��ǰͼƬλ�ø�λ���ָ�����ʼ״̬
                while (k < size) {
                    $ph.children('li').first().before($ph.children('li').last());
                    k++;
                }
                $.common.pictureCarousels.get(id).reset = true;

                $ph.siblings('.fast-access-holder').children('i').eq(0).addClass('active').siblings('i').removeClass('active');
            
                //�����ֲ�
                if($('.icon-yul').hasClass('active')){
                    $.tplComponentPictureCarousel.startPlay(distance, id);
                }

                //���ٵ�����ť
                var fast_access_buttons = $('#' + id).find('.picturegroup.static').find('.fast-access-holder').children('i').get();
                if (fast_access_buttons && fast_access_buttons.length > 0) {
                    $.each(fast_access_buttons, function(index, btn) {
                        $(btn).off('click');
                        $(btn).on('click', { id: id, obj: btn, i: index, distance: distance }, $.tplComponentPictureCarousel.fastAccessPlay);
                    });
                }
                //��ť
               
                $('#' + id).find('.picturegroup.static').children('.left-access').off('click').on('click', { id: id, distance: distance }, $.tplComponentPictureCarousel.leftAccessPlay);
                
                //�Ұ�ť
               
                $('#' + id).find('.picturegroup.static').children('.right-access').off('click').on('click', { id: id, distance: distance }, $.tplComponentPictureCarousel.rightAccessPlay);
                
            }
        }
        
    };
})(jQuery);


(function($) {
    //�ֲ���������
    $.tplComponentPictureCarouselSetting = {
        //�ֲ��������ݼ���
        mainDatas: null,
        //�������ݼ���
        baseList:null,
        //�������ݼ���
        titleList:null,
        //ժҪ���ݼ���
        memoList:null,
        //cms����
        cmsDatas:null,
        //-----------------------------------------------------------���÷���------------------------------------------
        //���ؽ�ȡ���ֳ���
        backtextIndex:function(str){
            var textCount = 0;
            for (var i = 0; i < str.length; i++)
            {
              var c = str.charAt(i);
              if (/^[\u0000-\u00ff]$/.test(c)) //ƥ��˫�ֽ�
              {
                textCount += 0.5;
              }
              else
              {
                textCount += 1;
              }
              if(textCount>=Number($.tplComponentPictureCarouselSetting.cmsDatas.contentNum)){
                return i+1;
              }
            }
            return str.length;
        },
       
        //��֤ˮƽ����
        checkAlign:function(){
            //ͬ����ֱ���밴ť
            $('#align .align-img').removeClass('active');
            $.tplComponentPictureCarouselSetting.baseList.align = '';
            
        },
        //��֤��ֱ����
        checkVerticalAlign:function(){
            //ͬ����ֱ���밴ť
            $('#verticalAlign .vertical-bg').removeClass('active');
            $.tplComponentPictureCarouselSetting.baseList['vertical-align'] = '';
            
        },
        //��ʾ�༭��
        showCkEditor: function(obj) {
            var windowWidth = $(window).width();
            var left = $(".sidebar-panel-body").position().left;

            if (windowWidth === left) {
                return;
            } else {
                CKEDITORHandler.tplEditSelectedContent('', selectedElementInfo, '', true, obj);
            }
        },
         /**
         * [setCss ������ʽ]
         * @param {[type]} value     [ֵ]
         * @param {[type]} name      [������]
         * @param {[type]} nameRex   [����������ʽ]
         * @param {[type]} middleStr [���㼶�ַ���]
         * @param {[type]} middleRex [���㼶������ʽ]
         */
        setCss:function(value,name,nameRex,middleStr,middleRex){
            var id = selectedElementInfo.get('id');
            //δ��ֵ����
            if(!nameRex){
                nameRex = name;
            }
            if(!middleStr){
                middleStr = '';
            }
            if(!middleRex){
                middleRex = middleStr;
            }
            var css = '#'+id+middleStr+'{'+name+':'+value+'}\n\r';
            $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#'+id+middleRex+'\{'+nameRex+':.*?\}[\n\r]*','g'),''));
            $.common.removeGeneratedCss(id,middleRex,nameRex);
            $('#generatedCss').append(css);
        },
        /**
         * [clearCss �����ʽ]
         * @param {[type]} name      [������]
         * @param {[type]} nameRex   [����������ʽ]
         * @param {[type]} middleStr [���㼶�ַ���]
         * @param {[type]} middleRex [���㼶������ʽ]
         */
        clearCss:function(name,nameRex,middleStr,middleRex){
            var id = selectedElementInfo.get('id');
            //δ��ֵ����
            if(!nameRex){
                nameRex = name;
            }
            if(!middleStr){
                middleStr = '';
            }
            if(!middleRex){
                middleRex = middleStr;
            }
            $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#'+id+middleRex+'\{'+nameRex+':.*?\}[\n\r]*','g'),''));
            $.common.removeGeneratedCss(id,middleRex,nameRex);
        },
        /**
         * ��ʼ����Ŀ��
         * @return {[type]} [description]
         */
        showCmsTree: function() {
            $.cmsTree.init(this.callBackCode);
        },
        /**
         * ɾ����ǰѡ�е���Ŀ
         * @return {[type]} [description]
         */
        deleteCmsLm: function(add) {
            var id = selectedElementInfo.get("id");
            var serverPath = $.common.getComponetIMagesUrl(id);
            $.tplComponentPictureCarouselSetting.cmsDatas.siteCode = '';
            $.tplComponentPictureCarouselSetting.cmsDatas.channelCode = '';
            $.tplComponentPictureCarouselSetting.cmsDatas.channelName = '';
            $.tplComponentPictureCarouselSetting.cmsDatas.docNum = 4;
            $.tplComponentPictureCarouselSetting.cmsDatas.docType = '0|1|2|3|4|5|8|9';
            $.tplComponentPictureCarouselSetting.cmsDatas.docPos = 0;
            $.tplComponentPictureCarouselSetting.cmsDatas.batchRule =false;
            $.tplComponentPictureCarouselSetting.cmsDatas.docTitle = 'title';
            $.tplComponentPictureCarouselSetting.cmsDatas.docContent = 'memo';
            $.tplComponentPictureCarouselSetting.cmsDatas.contentNum ='';
            $.tplComponentPictureCarouselSetting.initDynamicDatas();
            //�洢��̬����
            $('.' + id + "_cmsdatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.cmsDatas));
            $("#cmsColumnsFont").hide();
            // ȡ��ѡ����Ŀ
            $.cmsTree.cancelSelectCmsLm();
            $('#'+id).addClass('staticComponent').removeClass('dynamicComponent');
            if(!add){
                $.tplComponentPictureCarousel.pcDatas = {
                            "yun": [],
                            "local": [{

                                "path": serverPath + "/images/1.jpg",
                                "name": "�����ձ�ӣ�����֦���ƣ����۵�ӣ���뱡ɴ���������������˼������",
                                "link": "",
                                "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                            }, {

                                "path": serverPath + "/images/2.jpg",
                                "name": "���ô�������������Ŀ���֮ҹ������ѡ�ֵ�ȼ���ǵ�������ԾԾ����",
                                "link": "",
                                "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                            }, {
                                "path": serverPath + "/images/3.jpg",
                                "name": "�����������Ҳ������ĵ�ˮ�����Ӷ����ش��������ǣ������Ӷ����ϵı��߸�����Ī���������",
                                "link": "",
                                "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                            }, {
                                "path": serverPath + "/images/4.jpg",
                                "name": "��ˮ�����ţ��������������Ȼ���ʺ�",
                                "link": "",
                                "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                            }],
                            "all": [{
                                "path": serverPath + "/images/1.jpg",
                                "name": "�����ձ�ӣ�����֦���ƣ����۵�ӣ���뱡ɴ���������������˼������",
                                "link": "",
                                "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                            }, {
                                "path": serverPath + "/images/2.jpg",
                                "name": "���ô�������������Ŀ���֮ҹ������ѡ�ֵ�ȼ���ǵ�������ԾԾ����",
                                "link": "",
                                "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                            }, {
                                "path": serverPath + "/images/3.jpg",
                                "name": "�����������Ҳ������ĵ�ˮ�����Ӷ����ش��������ǣ������Ӷ����ϵı��߸�����Ī���������",
                                "link": "",
                                "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                            }, {
                                "path": serverPath + "/images/4.jpg",
                                "name": "��ˮ�����ţ��������������Ȼ���ʺ�",
                                "link": "",
                                "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                            }]
                        };
                        $.tplComponentPictureCarouselSetting.setImages();
            }
            $.common.regain();
        },
        //������ص�
        callBackCode:function(obj){
            var id = selectedElementInfo.get("id");
            if(obj.state==='0'){
                $.tplComponentPictureCarousel.pcDatas = {'yun':[],'local':[],'all':[]};
                var arr = obj.staticArr;
                $.each(arr,function(index,o){
                    var _o = {
                        path:o.path,
                        name:o.title,
                        link:o.url,
                        content:o.memo
                    };
                    $.tplComponentPictureCarousel.pcDatas.all[index] = _o;
                    $.tplComponentPictureCarousel.pcDatas.local[index] = _o;
                    $.tplComponentPictureCarouselSetting.setImages();
                    $('#'+id).addClass('staticComponent').removeClass('dynamicComponent');
                });

            }else if(obj.state==='1'){
                $("#cmsColumnsFont .selectlmLi").eq(0).find('.selectLmText').html(obj.name);
                $.tplComponentPictureCarouselSetting.cmsDatas.channelName = obj.name;
                $.tplComponentPictureCarouselSetting.cmsDatas.siteCode = obj.siteCode;
                $.tplComponentPictureCarouselSetting.cmsDatas.channelCode = obj.channelCode;
                $("#cmsColumnsFont").show();
                $('.' + id + "_cmsdatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.cmsDatas));
                $('#'+id).addClass('dynamicComponent').removeClass('staticComponent');
                $.tplComponentPictureCarouselSetting.setCMSTag();
            }
        },
        //��ȡ��̨����
        ajaxData:function(_url,params){
            var _data = "";
            $.ajax( {
                type : "post",
                url : _url,
                data : params,
                dataType: 'json',
                async : false,
                success : function(data) {
                    _data = data;
                }
            });
            return _data;
        },
        //������ɫ
        per : [
                    [ "rgb(0, 0, 0)", "rgb(67, 67, 67)", "rgb(102, 102, 102)",
                            "rgb(153, 153, 153)", "rgb(183, 183, 183)",
                            "rgb(204, 204, 204)", "rgb(217, 217, 217)",
                            "rgb(239, 239, 239)", "rgb(243, 243, 243)",
                            "rgb(255, 255, 255)" ],
                    [ "rgb(152, 0, 0)", "rgb(255, 0, 0)", "rgb(255, 153, 0)",
                            "rgb(255, 255, 0)", "rgb(0, 255, 0)", "rgb(0, 255, 255)",
                            "rgb(74, 134, 232)", "rgb(0, 0, 255)", "rgb(153, 0, 255)",
                            "rgb(255, 0, 255)" ],
                    [ "rgb(230, 184, 175)", "rgb(244, 204, 204)", "rgb(252, 229, 205)",
                            "rgb(255, 242, 204)", "rgb(217, 234, 211)",
                            "rgb(208, 224, 227)", "rgb(201, 218, 248)",
                            "rgb(207, 226, 243)", "rgb(217, 210, 233)",
                            "rgb(234, 209, 220)", "rgb(221, 126, 107)",
                            "rgb(234, 153, 153)", "rgb(249, 203, 156)",
                            "rgb(255, 229, 153)", "rgb(182, 215, 168)",
                            "rgb(162, 196, 201)", "rgb(164, 194, 244)",
                            "rgb(159, 197, 232)", "rgb(180, 167, 214)",
                            "rgb(213, 166, 189)", "rgb(204, 65, 37)", "rgb(224, 102, 102)",
                            "rgb(246, 178, 107)", "rgb(255, 217, 102)",
                            "rgb(147, 196, 125)", "rgb(118, 165, 175)",
                            "rgb(109, 158, 235)", "rgb(111, 168, 220)",
                            "rgb(142, 124, 195)", "rgb(194, 123, 160)", "rgb(166, 28, 0)",
                            "rgb(204, 0, 0)", "rgb(230, 145, 56)", "rgb(241, 194, 50)",
                            "rgb(106, 168, 79)", "rgb(69, 129, 142)", "rgb(60, 120, 216)",
                            "rgb(61, 133, 198)", "rgb(103, 78, 167)", "rgb(166, 77, 121)",
                            "rgb(133, 32, 12)", "rgb(153, 0, 0)", "rgb(180, 95, 6)",
                            "rgb(191, 144, 0)", "rgb(56, 118, 29)", "rgb(19, 79, 92)",
                            "rgb(17, 85, 204)", "rgb(11, 83, 148)", "rgb(53, 28, 117)",
                            "rgb(116, 27, 71)", "rgb(91, 15, 0)", "rgb(102, 0, 0)",
                            "rgb(120, 63, 4)", "rgb(127, 96, 0)", "rgb(39, 78, 19)",
                            "rgb(12, 52, 61)", "rgb(28, 69, 135)", "rgb(7, 55, 99)",
                            "rgb(32, 18, 77)", "rgb(76, 17, 48)" ] ],
        //��ʼ����ɫ�ؼ�
        initColor:function(id,callback){
                $("#"+id).spectrum("destroy");
                $("#"+id).spectrum({
                    allowEmpty: true,
                    color: "",
                    showInput: true,
                    containerClassName: "full-spectrum",
                    showInitial: true,
                    showPalette: true,
                    showSelectionPalette: true,
                    showAlpha: true,
                    maxPaletteSize: 10,
                    preferredFormat: "hex",
                    localStorageKey: "spectrum.demo",
                    move: function(color) {
                        if (color) {
                            var _color = color.toHslString();
                            color = _color.split(',').length===4?_color:color.toHexString();
                        } else {
                            color = 'transparent';
                        }
                        callback(color);
                        
                    },
                    change: function(color) {
                        if (color) {
                            var _color = color.toHslString();
                            color = _color.split(',').length===4?_color:color.toHexString();
                        } else {
                            color = 'transparent';
                        }
                         callback(color);
                    },
                    palette: $.tplComponentPictureCarouselSetting.per
                });
        },
        //ж��ͼƬ����
        offManagePic: function(event) {
            var obj = event.data.obj;
            var pics = $('.tpl-component-2016-01-09-picturecarousel').get();
            $.each(pics, function(index, pic) {
                var id = $(pic).attr('id');
                if ($(obj).hasClass('active')) {
                    $("#" + id + " .picturecarousel-icon-bg .picturecarousel-icon").off('click', $.tplComponentPictureCarouselSetting.manageImage);
                } else {
                    $("#" + id + " .picturecarousel-icon-bg .picturecarousel-icon").on('click', $.tplComponentPictureCarouselSetting.manageImage);
                }
                $.tplComponentPictureCarousel.initPlay(id);
                 
            });
        },
        //---------------------------------------------------------���÷�������------------------------------------------
        //---------------------------------------------------------�ֲ����÷���------------------------------------------



        //����ͼƬ
        manageImage: function(event) {
            try {
                var id = selectedElementInfo.get("id");
                var serverPath = $.common.getComponetIMagesUrl(id);
                $.each($.tplComponentPictureCarousel.pcDatas.all, function(index, obj) {
                    var title = '';
                    try{
                        title = $(obj.name).text()?$(obj.name).text():obj.name;
                    }catch(e){
                        title = obj.name;
                    }
                    obj.name = title;
                    $.tplComponentPictureCarousel.pcDatas.local[index].name = title; 
                });
                var jsonData = $.tplComponentPictureCarousel.pcDatas.all.length > 0 ? $.tplComponentPictureCarousel.pcDatas : '';
                
                    if(jsonData && $('#'+id).hasClass('dynamicComponent')){
                        
                            jsonData = {
                                "yun": [],
                                "local": [{

                                    "path": serverPath + "/images/1.jpg",
                                    "name": "�����ձ�ӣ�����֦���ƣ����۵�ӣ���뱡ɴ���������������˼������",
                                    "link": "",
                                    "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                                }, {

                                    "path": serverPath + "/images/2.jpg",
                                    "name": "���ô�������������Ŀ���֮ҹ������ѡ�ֵ�ȼ���ǵ�������ԾԾ����",
                                    "link": "",
                                    "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                                }, {
                                    "path": serverPath + "/images/3.jpg",
                                    "name": "�����������Ҳ������ĵ�ˮ�����Ӷ����ش��������ǣ������Ӷ����ϵı��߸�����Ī���������",
                                    "link": "",
                                    "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                                }, {
                                    "path": serverPath + "/images/4.jpg",
                                    "name": "��ˮ�����ţ��������������Ȼ���ʺ�",
                                    "link": "",
                                    "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                                }],
                                "all": [{
                                    "path": serverPath + "/images/1.jpg",
                                    "name": "�����ձ�ӣ�����֦���ƣ����۵�ӣ���뱡ɴ���������������˼������",
                                    "link": "",
                                    "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                                }, {
                                    "path": serverPath + "/images/2.jpg",
                                    "name": "���ô�������������Ŀ���֮ҹ������ѡ�ֵ�ȼ���ǵ�������ԾԾ����",
                                    "link": "",
                                    "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                                }, {
                                    "path": serverPath + "/images/3.jpg",
                                    "name": "�����������Ҳ������ĵ�ˮ�����Ӷ����ش��������ǣ������Ӷ����ϵı��߸�����Ī���������",
                                    "link": "",
                                    "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                                }, {
                                    "path": serverPath + "/images/4.jpg",
                                    "name": "��ˮ�����ţ��������������Ȼ���ʺ�",
                                    "link": "",
                                    "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                                }]
                            };
                        
                        
                    }
                
                $.dialogUpPic.initDialog(jsonData, '', function(data) {
                    $.tplComponentPictureCarousel.pcDatas = data;
                    $('#'+id).addClass('staticComponent').removeClass('dynamicComponent');
                    $.tplComponentPictureCarouselSetting.deleteCmsLm(true);
                    $.tplComponentPictureCarouselSetting.setImages();
                    $.common.regain();
                },function(){
                    $.tplComponentPictureCarousel.pcDatas = $.parseJSON($.trim($('.' + id + '_pcdatas').text()));
                });
                $.common.regain();
            } catch (e) {
                
            }
        },

        //����ͼƬ
        setImages: function(flag) {
            try {
                var id = selectedElementInfo.get("id");
               
                if(id==='workspace-body' || id==='workspace-body'){
                    return ;
                }


                //��̬��ǩ����
                var num = Number($.tplComponentPictureCarouselSetting.cmsDatas.docNum);
                var i=0;
                var dHtml = '';
                var dPHtml = '';
                var title = '';
                var memo = '';
                if($.tplComponentPictureCarouselSetting.cmsDatas.docTitle){
                    title = '<CMSPRO_DOCUMENT FIELD="'+$.tplComponentPictureCarouselSetting.cmsDatas.docTitle+'"></CMSPRO_DOCUMENT>\r\n';
                }
                
                if($.tplComponentPictureCarouselSetting.cmsDatas.docContent){
                    memo = '<CMSPRO_DOCUMENT FIELD="'+$.tplComponentPictureCarouselSetting.cmsDatas.docContent+'" NUM="'+$.tplComponentPictureCarouselSetting.cmsDatas.contentNum+'"></CMSPRO_DOCUMENT>\r\n';
                }
                var tHtml = '<h1 class="title-area" ><a href="<CMSPRO_DOCUMENT FIELD=\'url\' ></CMSPRO_DOCUMENT>" class="title" target="' + $.tplComponentPictureCarouselSetting.mainDatas.linkTarget + '" >'+title+'</a></h1><p class="content-area" _url="<CMSPRO_DOCUMENT FIELD=\'url\' ></CMSPRO_DOCUMENT>" >'+memo+'</p>';
                while (i<num) {
                    dHtml += '<li class="pic' + i + '">\r\n<CMSPRO_DOCUMENTS SITECODE="'+$.tplComponentPictureCarouselSetting.cmsDatas.siteCode+'" CHANNELCODE="'+$.tplComponentPictureCarouselSetting.cmsDatas.channelCode+'" DOCUMENTTYPE="'+$.tplComponentPictureCarouselSetting.cmsDatas.docType+'" NUM="1" STARTPOS="' +(Number($.tplComponentPictureCarouselSetting.cmsDatas.docPos) + i) + '" BATCHRULE="'+$.tplComponentPictureCarouselSetting.cmsDatas.batchRule+'" >\r\n<a href="<CMSPRO_DOCUMENT FIELD=\'url\'></CMSPRO_DOCUMENT>" target="' + $.tplComponentPictureCarouselSetting.mainDatas.linkTarget + '">\r\n<CMSPRO_APPENDIXS MODE="IMG" STARTPOS="0" NUM="1">\r\n<img src=\'<CMSPRO_APPENDIX FIELD="path"></CMSPRO_APPENDIX>\' >\r\n</CMSPRO_APPENDIXS>\r\n</a>\r\n<i>\r\n'+tHtml + '</i>\r\n</CMSPRO_DOCUMENTS>\r\n</li>\r\n';
                    dPHtml += '<i></i>';
                    i++;
                }
                if(!flag){
                    $('#' + id + ' .picturegroup.dynamic .picture-holder').html(dHtml);
                    $("#" + id + " .picturegroup.dynamic .fast-access-holder").html(dPHtml);
                }
                var datas = $.tplComponentPictureCarousel.pcDatas.all;

                var titleClickTab = ' targetAttr="title" onmouseenter="$.common.heightLight(this,event,\'h1.title-area\')" onclick="$.common.goToSidebar(this,event,\'h1.title-area\')" onblur="$.tplComponentPictureCarouselSetting.setTitleContent(this);" tabindex=1';
                var memoClickTab = ' targetAttr="memo" onmouseenter="$.common.heightLight(this,event,\'p.content-area\')" onclick="$.common.goToSidebar(this,event,\'p.content-area\')" onblur="$.tplComponentPictureCarouselSetting.setMemoContent(this);" tabindex=1';
                // ���ص����е�tab
                var backtoAllTab = ' onclick="$.common.goToallsidebar()"';

                //��Ӵ����
                if (datas.length > 0) {
                    var html = '';
                    var pHtml = '';
                    $.each(datas, function(index, data) {
                        var tHtml = '';
                        if (data.link) {
                            tHtml = '<h1 class="title-area" '+titleClickTab+' ><a href="'+data.link+'" target="' + $.tplComponentPictureCarouselSetting.mainDatas.linkTarget + '" class="title" >'+(data.name?data.name:'����')+'</a></h1><p class="content-area" _url="'+data.link+'" '+memoClickTab+' >'+(data.content?data.content:'ժҪ')+'</p>';
                            html += '<li class="pic' + index + '"><a href="' + data.link + '" target="' + $.tplComponentPictureCarouselSetting.mainDatas.linkTarget + '"><img src="' + data.path + '" '+backtoAllTab+'/></a><i>' + tHtml + '</i></li>';
                        } else {
                            tHtml = '<h1 class="title-area" '+titleClickTab+' ><a href="javascript:;" onclick="javascript:return false;" class="title" target="' + $.tplComponentPictureCarouselSetting.mainDatas.linkTarget + '" >'+(data.name?data.name:'����')+'</a></h1><p class="content-area" _url="javascript:;" '+memoClickTab+' >'+(data.content?data.content:'ժҪ')+'</p>';
                            html += '<li class="pic' + index + '"><a href="javascript:;" onclick="javascript:return false;" target="' + $.tplComponentPictureCarouselSetting.mainDatas.linkTarget + '"><img src="' + data.path + '" '+backtoAllTab+' /></a><i>' + tHtml + '</i></li>';
                        }
                        pHtml += '<i></i>';
                        
                    });
                    if(!flag){
                        $('#' + id + ' .picturegroup.static .picture-holder').html(html);
                        $("#" + id + " .picturegroup.static .fast-access-holder").html(pHtml);
                    }
                    var _width = $.tplComponentPictureCarouselSetting.baseList.width;
                    
                    var distance = 0;
                    if (_width.search(/px/) >= 0) {
                        distance = Number($.tplComponentPictureCarouselSetting.baseList.width.replace(' px', ''));
                    } else {
                        distance = $('#' + id).width();
                    }
                    

                    var pgHeight = Number($.tplComponentPictureCarouselSetting.baseList.height.replace(' px', ''));
                    //��������ȹ̶�
                    $("#" + id + " .picturegroup-holder").width(distance);
                    //�ֲ��������
                    $("#" + id + " .picturegroup .picture-holder").width(distance * (datas.length + 1));
                    //����ͼƬ������ȡ��߶�
                    $("#" + id + " .picturegroup .picture-holder li").width(distance);

                    $("#" + id + " .picturegroup .picture-holder li").height(pgHeight);
                    //����ͼƬ��ȡ��߶ȡ����λ��
                    $.each(datas, function(index, data) {
                        $("<img/>").attr("src", data.path).load(function() {
                            var _width = this.width;
                            var _height = this.height;
                            var height = distance * _height / _width;
                            $('#' + id + ' .picturegroup .picture-holder li').eq(index).children('a').children('img').width(distance).height(height);
                            $('#' + id + ' .picturegroup .picture-holder li').eq(index).children('a').children('img').css('top', -(height - pgHeight) / 2 + 'px');
                        });
                    });
                    //���� ��ʾ����
                    if($.tplComponentPictureCarouselSetting.titleList.titleSwitch==='off'){
                        $('#'+id+' .picturegroup .picture-holder li i .title-area').hide();
                    }
                    //ժҪ ��ʾ����
                    if($.tplComponentPictureCarouselSetting.memoList.memoSwitch==='off'){
                        $('#'+id+' .picturegroup .picture-holder li i .content-area').hide();
                    }

                    if($.tplComponentPictureCarouselSetting.memoList.tab==='on'){
                        $('#'+id+' .picturegroup .picture-holder li i .content-area').addClass('indent');
                    }
                    //���ý����л���ʽ
                    $.tplComponentPictureCarouselSetting.setBottomButtonStyle($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonStyle,true);

                    //�����л�����
                    $.tplComponentPictureCarouselSetting.setBottomButtonAlign({ data: { obj: $('#bottomButtonAlign .align-img.active').get(0),flag:true } });
                    //���ñ���λ��
                    
                    setTimeout(function(){
                        $.tplComponentPictureCarouselSetting.setTitleAreaPosition({ data: { obj:  $('#titleAreaPositionButton .component-radio[data="' + $.tplComponentPictureCarouselSetting.mainDatas.titleAreaPosition + '"]').get(0),flag:true} });
                    },50);
                    
                    //�ֲ���ʼ
                    
                    $.tplComponentPictureCarousel.initPlay(id);
                    

                    //���Ұ�ť ��ʾ/����
                    $.tplComponentPictureCarouselSetting.setSideButtonSwitch({ data: { obj: $('#sideButtonSwitch .component-radio[value="'+$.tplComponentPictureCarouselSetting.mainDatas.sideButtonSwitch+'"]').get(0),flag:true } });
                    if($.tplComponentPictureCarouselSetting.memoList.more==='on'){
                        var contents = $('#'+id+' .picturegroup .picture-holder li i .content-area').get();
                        $.each(contents,function(index,content){
                            if($.trim($(content).text()).length>0){
                                var url = $(content).attr('_url');
                                var stopStr = '';
                                if(url.search(/javascript/)>=0){
                                    stopStr = 'onclick="javascript:return false;"';
                                }
                                $(content).append('<a '+stopStr+' href="'+url+'" target="'+$.tplComponentPictureCarouselSetting.mainDatas.linkTarget+'" class="more" >[��ϸ]</a>');
                            }
                        });
                    }

                    $('#' + id + ' .picturegroup.static').show();
                    $('#' + id + ' .picturecarousel-icon-bg').hide();
                    //�洢����
                    $('.' + id + "_pcdatas").text(JSON.stringify($.tplComponentPictureCarousel.pcDatas));
                    $('#height').val($.tplComponentPictureCarouselSetting.baseList.height);
                    $('.tpl-sidebar-link').css('opacity', 1);
                } else {
                    $('#' + id + ' .picturegroup.static .picturegroup-holder .picture-holder').html('<li style="height:'+$.tplComponentPictureCarouselSetting.baseList.height.replace(' ', '')+'"></li>');
                    $('#' + id + ' .picturegroup.static .picturegroup-holder .fast-access-holder').html('');
                    
                    //�洢����
                    $('.' + id + "_pcdatas").text(JSON.stringify($.tplComponentPictureCarousel.pcDatas));
                    $('.tpl-sidebar-link').css('opacity', 0);
                }

            } catch (e) {
               
            }
        },
        //����ͼƬ͸����
        setImageOpacity: function(event) {
            try {
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var opacity = $.trim($(obj).val());
                if (opacity && opacity.match(/\d+(\.\d+)?/)) {
                    opacity = opacity.match(/\d+(\.\d+)?/)[0];
                    $(obj).val(opacity);
                    //��������
                    if (opacity > 100) {
                        opacity = 100;
                        $(obj).val(100);
                    }
                    $.tplComponentPictureCarouselSetting.setCss(opacity/100,'opacity','',' .picturegroup .picture-holder li img',' \.picturegroup \.picture\-holder li img');
                    $.tplComponentPictureCarouselSetting.setCss('alpha(opacity:'+opacity+')','filter','',' .picturegroup .picture-holder li img',' \.picturegroup \.picture\-holder li img');
                    
                    //�洢����
                    $.tplComponentPictureCarouselSetting.mainDatas.opacity = opacity;
                    $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                } else {
                    $(obj).val('');
                }
                $.common.regain();

            } catch (e) {
                
            }
        },
        //���õ�����ʽ
        setLinkTarget: function(target) {
            try {
                var id = selectedElementInfo.get('id');
                $('#'+id).find('a').attr('target',target);
                $.tplComponentPictureCarouselSetting.mainDatas.linkTarget = target;
                $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                $.common.regain();
            } catch (e) {
               
            }
        },

        //���ñ�����λ��
        setTitleAreaPosition:function(event){
            var obj = event.data.obj;
            var id = selectedElementInfo.get('id');
            
            var fHeight = $('#'+id+' .picturegroup .fast-access-holder').eq(0).height();
            var status = $(obj).attr('data');
            $('#'+id+' .picturegroup .picture-holder li i').css('height','auto'); 
            var maxTop = 0;
            if(status==='inner'){
                $('#'+id+' .picturegroup .picture-holder li i').css({'position':'absolute'});
                if($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonPosition==='inner'){
                    $.each($('#'+id+' .picturegroup.static .picture-holder li img'), function(index, img) {
                        
                        var top = Number($(img).css('top').replace('px',''));
                       
                        if(!top || top<0){
                            top = 0;
                        }
                        
                        if(maxTop<top){
                            maxTop = top;
                        }
                        $(img).parent('a').next('i').css({'bottom':top+'px'});
                        $('#'+id+' .picturegroup.dynamic .picture-holder li i').eq(index).css({'bottom':top+'px'});
                    });

                    $("#" + id + " .picturegroup .fast-access-holder").css('bottom', (12+maxTop)+'px');
                    $('#'+id+' .picturegroup .picture-holder li').css({'padding-bottom':0});
                    $('#'+id).css('padding-bottom',0);
                   
                }else if($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonPosition==='outer'){
                     
                     $.each($('#'+id+' .picturegroup.static .picture-holder li img'), function(index, img) {
                        var top = Number($(img).css('top').replace('px',''));
                        if(!top || top<0){
                            top = 0;
                        }
                        if(maxTop<top){
                            maxTop = top;
                        }
                        $(img).parent('a').next('i').css({'bottom':(top+fHeight+12)+'px'});
                        $('#'+id+' .picturegroup.dynamic .picture-holder li i').eq(index).css({'bottom':(top+fHeight+12)+'px'});
                    });
                    $("#" + id + " .picturegroup .fast-access-holder").css('bottom', maxTop+'px');
                    $('#'+id+' .picturegroup .picture-holder li').css({'padding-bottom':(fHeight+12)+'px'});
                    var _value = 0;
                    if(maxTop>0){
                        _value = fHeight+12-maxTop;
                    }
                    $('#'+id).css('padding-bottom',_value+'px');
                    
                }else{
                    return ;
                }
            }else if(status==='outer'){
                var height = 0;
                $.each($('#'+id+' .picturegroup.static .picture-holder li img'), function(index, img) {
                    var top = Number($(img).css('top').replace('px',''));
                    if(!top || top<0){
                        top = 0;
                    }
                    
                    if(maxTop<top){
                        maxTop = top;
                    }
                    if(height<$(img).parent('a').next('i').height()){
                        height = $(img).parent('a').next('i').height();
                    }

                    $(img).parent('a').next('i').css({'bottom':top+'px'});
                    $('#'+id+' .picturegroup.dynamic .picture-holder li i').eq(index).css({'bottom':(top)+'px'});

                });
                if($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonPosition==='inner'){
                    if(maxTop<height){
                        $("#" + id + " .picturegroup .fast-access-holder").css('bottom', (height+12)+'px');
                    }else{
                        $("#" + id + " .picturegroup .fast-access-holder").css('bottom', (maxTop+12)+'px');
                    }
                }else if($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonPosition==='outer'){
                    if(maxTop<height){
                        $("#" + id + " .picturegroup .fast-access-holder").css('bottom', '12px');
                    }else{
                        $("#" + id + " .picturegroup .fast-access-holder").css('bottom', (maxTop-height+12)+'px');
                    }
                }else{
                    return ;
                }
                
                $('#'+id+' .picturegroup .picture-holder li i').height(height); 
                $('#'+id+' .picturegroup .picture-holder li i').css({'position':'relative'});

                var value = 0;
                var _val = 0;
                if(maxTop>0 && maxTop<height){
                    value = height-maxTop;
                    _val = value;
                }else{
                    _val = height;
                }
                $('#'+id+' .picturegroup .picture-holder li').css({'padding-bottom':_val+'px'});
                $('#'+id).css({'padding-bottom':value+'px'});
            }else{
                return ;
            }
            var pgHeight = $('#'+id+' .picturegroup').height();
            var _height = $('#'+id).height();
            if(_height<pgHeight){
                var paddingBottom = $('#'+id).css('padding-bottom',(pgHeight-_height)+'px');
            }
            $.tplComponentPictureCarouselSetting.mainDatas.titleAreaPosition = status;
            $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
            if(!event.data.flag){
                $.common.regain();
            }
        },
        //���ñ�����������ɫ
        setTitleAreaBgColor:function(color){
            try{
                var id = selectedElementInfo.get("id");
                $.tplComponentPictureCarouselSetting.setCss(color,'background-color','background\-color',' .picturegroup .picture-holder li i ',' \.picturegroup \.picture\-holder li i ');
                //�洢����
                $.tplComponentPictureCarouselSetting.mainDatas['background-color'] = color;
                $('.'+id+'_maindatas').text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                $.common.regain();
            }catch(e){
                
            }
        },
        
        
        //--------------------------------------------�ֲ����÷�������------------------------------------------------------------------------------
        //--------------------------------------------�������÷���---------------------------------------------------------------------------------
        
        //���ÿ��
        setWidth: function() {
            try {
                var id = selectedElementInfo.get("id");
                var width = $.trim($('#width').val());
                if (width) {
                    $.tplComponentPictureCarouselSetting.setCss(width.replace(' ',''),'width');
                    //�洢����
                    $.tplComponentPictureCarouselSetting.baseList.width = width;
                    //$.tplComponentPictureCarouselSetting.checkAlign();
                    $('.' + id + "_baseinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.baseList));
                    //��ʼ���ֲ�
                    $.tplComponentPictureCarouselSetting.setImages(true);
                    if($('#'+id).children('.resize-cover').length===0)
                        $.common.regain();
                }

            } catch (e) {

            }
        },
        //���ÿ�ȵ�λ
        setWidthUnit: function(event) {
            try {
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                //��ȡ��λ
                var unit = $(obj).text();
                //��ȡ�����ֵ
                var width = Number($.trim($('#width').val()).split(' ')[0]);
                if (width) {
                    $.tplComponentPictureCarouselSetting.setCss(width+unit,'width'); 
                    //�洢����
                    $.tplComponentPictureCarouselSetting.baseList.width = width + ' ' + unit;
                    $('.' + id + "_baseinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.baseList));
                    $.tplComponentPictureCarouselSetting.setImages(true);
                    $.common.regain();
                }
            } catch (e) {
                
            }
        },
        //���ø߶�
        setHeight: function() {
            try {
                var id = selectedElementInfo.get("id");
                var height = $.trim($('#height').val());
                if (height) {
                    if ($('#' + id + ' .picturegroup:visible').length > 0) {
                        $.tplComponentPictureCarouselSetting.setCss(height.replace(' ',''),'height');
                        //�洢����
                        $.tplComponentPictureCarouselSetting.baseList.height = height;
                    } else {
                        var value = height.split(' ')[0];
                        var unit = height.split(' ')[1];
                        $('#' + id + ' .picturecarousel-icon-bg').css('height', height.replace(' ', ''));
                        $('#' + id + ' .picturecarousel-icon-bg').attr('_value', value);
                        $('#' + id + ' .picturecarousel-icon-bg').attr('unit', unit);
                    }
                    $('.' + id + "_baseinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.baseList));
                    $('#'+id).attr('_height',height);
                    //��ʼ���ֲ�
                    $.tplComponentPictureCarouselSetting.setImages(true);
                    if($('#'+id).children('.resize-cover').length===0)
                        $.common.regain();
                }

            } catch (e) {
               
            }
        },
        //���ö��뷽ʽ
        setAlign: function(event) {

            try {
                var id = selectedElementInfo.get('id'); 
                var obj = event.data.obj;
                var align = $(obj).attr('value');
                var _left = '';
                var _right =  '';
                //�����״̬��ֵ
                if(align==='left'){
                    _left = 0;
                    _right = 'auto';
                }else if(align==='center'){
                    _left = 'auto';
                    _right = 'auto';
                }else{
                    _left = 'auto';
                    _right = 0;
                }
                var parentWidth = $('#'+id).parent().outerWidth();
                var width = $('#'+id).outerWidth();
                var value = 0;
                //�����״̬�ϱ߾�
                if(align==='center'){
                    value = (parentWidth-width)/2;
                }else if(align==='right'){
                    value = parentWidth-width;
                }
                $.tplComponentPictureCarouselSetting.setCss(_left,'margin-left','margin\-left');
                $.tplComponentPictureCarouselSetting.setCss(_right,'margin-right','margin\-right');
                $('#marginLeft').val(value+' px');
                $('#marginRight').val('0 px');
                //�洢����
                $.tplComponentPictureCarouselSetting.baseList['margin-left'] = value + ' px';
                $.tplComponentPictureCarouselSetting.baseList['margin-right'] = '0 px';
                $.tplComponentPictureCarouselSetting.baseList.align = align;
                $('.' + id + "_baseinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.baseList));
                $.common.regain();
            } catch (e) {
                
            }
        },
        //�����ֲ���ֱ����
        setVerticalAlign: function(event) {
            try {
                var obj = event.data.obj;
                if($(obj).hasClass('active')){
                    return ;
                }
                var align = $(obj).attr('value');
                var id = selectedElementInfo.get('id');
                if($('#'+id).parent().children('.tpl-monitored-class').length===1){
                    var parentHeight = $('#'+id).parent().outerHeight();
                    var height = $('#'+id).outerHeight();
                    var value = 0;
                    //�����״̬�ϱ߾�
                    if(align==='middle'){
                        value = (parentHeight-height)/2;
                    }else if(align==='bottom'){
                        value = parentHeight-height;
                    }

                    $.tplComponentPictureCarouselSetting.setCss(value+'px','margin-top','margin\-top');
                    $.tplComponentPictureCarouselSetting.clearCss('margin-bottom','margin\-bottom');
                    //�洢����
                    $.tplComponentPictureCarouselSetting.baseList['vertical-align'] = align;
                    $('#marginTop').val(value + ' px');
                    $('#marginBottom').val('0 px');
                    $.tplComponentPictureCarouselSetting.baseList['margin-top'] = value + ' px';
                    $.tplComponentPictureCarouselSetting.baseList['margin-bottom'] = '0 px';
                    $('.' + id + "_baseinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.baseList));
                   $.common.regain();
                }
            } catch (e) {
                
            }
        },
        //���ñ߾�
        setDistance: function(event,flag) {
            try {
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var name = $(obj).attr('distance');
                var value = $.trim($(obj).val());
                if (value) {
                    $.tplComponentPictureCarouselSetting.setCss(value.replace(' ',''),name,name.split('-')[0]+'\-'+name.split('-')[1]);
                    //�洢����
                    $.tplComponentPictureCarouselSetting.baseList[name] = value;
                    $.tplComponentPictureCarouselSetting.checkVerticalAlign();
                    $.tplComponentPictureCarouselSetting.checkAlign();
                    $('.' + id + "_baseinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.baseList));
                    if(!flag)
                        $.common.regain();
                }
            } catch (e) {
                
            }
        },
        
        
        //���ñ߿���ʽ ok
        setBorderStyle: function(event) {
            try {
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var value = $(obj).attr('value');
                $.tplComponentPictureCarouselSetting.setCss(value,'border-style','border\-style');
                $.tplComponentPictureCarouselSetting.setCss(value,'border-style','border\-style','.active','\.active');
                //�洢����
                $.tplComponentPictureCarouselSetting.baseList['border-style'] = value;
                $('.' + id + "_baseinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.baseList));
                $.common.regain();
            } catch (e) {
                
            }
        },
        /**
         * ���ñ߿�Ŀ�ȣ���ϸ��ok
         */
        setBorderWidth: function() {
            try {
                var id = selectedElementInfo.get("id");
                var borderWidth = $.trim($('#borderWidth').val());
                if (borderWidth) {
                    var value = Number(borderWidth.split(' ')[0]);
                    if (value > 100) {
                        $('#borderWidth').val('1 px');
                        return;
                    }
                    $.tplComponentPictureCarouselSetting.setCss(borderWidth.replace(' ', ''),'border-width','border\-width');
                    $.tplComponentPictureCarouselSetting.setCss(borderWidth.replace(' ', ''),'border-width','border\-width','.active','\.active');
                    
                    //�洢����
                    $.tplComponentPictureCarouselSetting.baseList['border-width'] = borderWidth;
                    $('.' + id + "_baseinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.baseList));
                    //��ʼ���ֲ�
                    $.tplComponentPictureCarouselSetting.setImages(true);
                    $.common.regain();
                }
            } catch (e) {
                
            }
        },

        /**
         * ���ñ߿����ɫ
         * ok
         */
        setBorderColor: function(color) {
            try {
                var id = selectedElementInfo.get("id");
                $.tplComponentPictureCarouselSetting.setCss(color,'border-color','border\-color');
                $.tplComponentPictureCarouselSetting.setCss(color,'border-color','border\-color','.active','\.active');
                //�洢����
                $.tplComponentPictureCarouselSetting.baseList['border-color'] = color;
                $('.' + id + "_baseinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.baseList));
                $.common.regain();
            } catch (e) {
                
            }
        },
        //--------------------------------------------------------�������ý���---------------------------------------------------------------------
        
        //-----------------------------------------------------------------���Ҽ�ͷ����---------------------------------------------------------------
        //�������Ұ�ť��ʾ������
        setSideButtonSwitch: function(event) {
            try {
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var value = $(obj).attr('value');
                if (value === 'on') {
                    
                    $.tplComponentPictureCarouselSetting.setCss('inline-block','display','',' .picturegroup .left-access',' \.picturegroup \.left\-access');
                    $.tplComponentPictureCarouselSetting.setCss('inline-block','display','',' .picturegroup .right-access',' \.picturegroup \.right\-access');
                    $('#sideHoverButton').next('label').addClass('no-edit');
                    $('#sideHoverButton').removeClass('active');
                    //���Ҽ�ͷ������ʾ
                    $('#sideHoverButton').off('click');
                    $('#sideButtonHoverOpacity').removeAttr('disabled');
                    $('#sideButtonHoverOpacity').prev('label').removeClass('no-edit');
                    $('#sideButtonHoverOpacity').val($.tplComponentPictureCarouselSetting.mainDatas.sideButtonHoverOpacity);
                    $('#sideHoverOpacityButton').addClass('active');

                } else {
                    
                    $.tplComponentPictureCarouselSetting.setCss('none','display','',' .picturegroup .left-access',' \.picturegroup \.left\-access');
                    $.tplComponentPictureCarouselSetting.setCss('none','display','',' .picturegroup .right-access',' \.picturegroup \.right\-access');
                    $('#sideHoverButton').next('label').removeClass('no-edit');
                    //���Ҽ�ͷ������ʾ
                    $('#sideHoverButton').off('click').on('click',function(){
                        $.tplSidebar.setActiveThree({data:{obj:this}});
                        $.tplComponentPictureCarouselSetting.setSideButtonHover({data:{obj:this}});
                    });
                    if($.tplComponentPictureCarouselSetting.mainDatas.sideHoverSwitch==='on'){
                        $('#sideHoverButton').addClass('active');
                    }else{
                        $('#sideHoverButton').removeClass('active');
                    }
                    $.tplComponentPictureCarouselSetting.setSideButtonHover({data:{obj:$('#sideHoverButton').get(0)}});
                    $('#sideButtonHoverOpacity').attr('disabled','disabled');
                    $('#sideButtonHoverOpacity').prev('label').addClass('no-edit');
                    $('#sideButtonHoverOpacity').val('');
                    $('#sideHoverOpacityButton').removeClass('active');
                }
                //�洢����
                $.tplComponentPictureCarouselSetting.mainDatas.sideButtonSwitch = value;
                $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                if(!event.data.flag){
                    $.common.regain();
                }
            } catch (e) {
                
            }
        },
        //�������Ҽ�ͷλ��
        setSideButtonPosition:function(flag){
            var id = selectedElementInfo.get("id");
            var value = $.trim($('#sideButtonPosition').val());
            if(value){
                $('#' + id + " .picturegroup .left-access").css('left', value.replace(' ',''));
                $('#' + id + " .picturegroup .right-access").css('right', value.replace(' ',''));
                $.tplComponentPictureCarouselSetting.mainDatas.sideButtonPosition = value;
                $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                if(!flag)
                    $.common.regain();
            }
        },

        //�������Ҽ�ͷ͸����
        setSideButtonOpacity:function(event){
            try {
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var opacity = $.trim($(obj).val());
                if (opacity && opacity.match(/\d+(\.\d+)?/)) {
                    opacity = opacity.match(/\d+(\.\d+)?/)[0];
                    $(obj).val(opacity);
                    //��������
                    if (opacity > 100) {
                        opacity = 100;
                        $(obj).val(100);
                    }
                    $.tplComponentPictureCarouselSetting.setCss(opacity/100,'opacity','',' .picturegroup .left-access',' \.picturegroup \.left\-access');
                    $.tplComponentPictureCarouselSetting.setCss(opacity/100,'opacity','',' .picturegroup .right-access',' \.picturegroup \.right\-access');
                    $.tplComponentPictureCarouselSetting.setCss('alpha(opacity:'+opacity+')','filter','',' .picturegroup .left-access',' \.picturegroup \.left\-access');
                    $.tplComponentPictureCarouselSetting.setCss('alpha(opacity:'+opacity+')','filter','',' .picturegroup .right-access',' \.picturegroup \.right\-access');
                    
                    //�洢����
                    $.tplComponentPictureCarouselSetting.mainDatas.sideButtonOpacity = opacity;
                    $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                    $.tplComponentPictureCarouselSetting.setSideButtonHoverOpacity({data:{obj:$('#sideButtonHoverOpacity').get(0)}});

                } else {
                    $(obj).val('');
                }
                $.common.regain();

            } catch (e) {
                
            }
        },
        //�������Ұ�ť ����͸����
        setSideButtonHoverOpacity:function(event){
            try {
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var opacity = $.trim($(obj).val());
                if (opacity && opacity.match(/\d+(\.\d+)?/)) {
                    opacity = opacity.match(/\d+(\.\d+)?/)[0];
                    $(obj).val(opacity);
                    //��������
                    if (opacity > 100) {
                        opacity = 100;
                        $(obj).val(100);
                    }
                    $.tplComponentPictureCarouselSetting.setCss(opacity/100,'opacity','',' .picturegroup:hover .left-access',' \.picturegroup:hover \.left\-access');
                    $.tplComponentPictureCarouselSetting.setCss(opacity/100,'opacity','',' .picturegroup:hover .right-access',' \.picturegroup:hover \.right\-access');
                    $.tplComponentPictureCarouselSetting.setCss('alpha(opacity:'+opacity+')','filter','',' .picturegroup:hover .left-access',' \.picturegroup:hover \.left\-access');
                    $.tplComponentPictureCarouselSetting.setCss('alpha(opacity:'+opacity+')','filter','',' .picturegroup:hover .right-access',' \.picturegroup:hover \.right\-access');
                    
                    //�洢����
                    $.tplComponentPictureCarouselSetting.mainDatas.sideButtonHoverOpacity = opacity;
                    $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                } else {
                    $(obj).val('');
                }
                $.common.regain();

            } catch (e) {
               
            }
        },
        //�������Ұ�ť ������ʾ
        setSideButtonHover: function(event) {
            try {
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                //���û�����ʾ����
                if ($(obj).hasClass('active')) {
                    
                    $.tplComponentPictureCarouselSetting.setCss('inline-block','display','',' .picturegroup:hover .left-access',' \.picturegroup:hover \.left\-access');
                    $.tplComponentPictureCarouselSetting.setCss('inline-block','display','',' .picturegroup:hover .right-access',' \.picturegroup:hover \.right\-access');
                    $.tplComponentPictureCarouselSetting.mainDatas.sideHoverSwitch = 'on';
                } else {
                    $.tplComponentPictureCarouselSetting.clearCss('display','',' .picturegroup:hover .left-access',' \.picturegroup:hover \.left\-access');
                    $.tplComponentPictureCarouselSetting.clearCss('display','',' .picturegroup:hover .right-access',' \.picturegroup:hover \.right\-access');
                    $.tplComponentPictureCarouselSetting.mainDatas.sideHoverSwitch = 'off';
                }
                //�洢����
                $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                if(!event.data.flag){
                    $.common.regain();
                }
            } catch (e) {
                
            }
        },
        
        //������ťͼƬ
        setLeftButtonImage: function(path) {
            var id = selectedElementInfo.get('id');
            $("<img/>").attr("src", path).load(function() {
                var css = '#' + id + ' .picturegroup .left-access{background:url(' + path + ') 0 0 no-repeat;}\n';
                var _width = this.width;
                var _height = this.height;
                css += '#' + id + ' .picturegroup .left-access{margin-top:-' + _height / 2 + 'px;}\n';
                css += '#' + id + ' .picturegroup .left-access{width:' + _width + 'px;}\n';
                css += '#' + id + ' .picturegroup .left-access{height:' + _height + 'px;}\n';
                $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#' + id + ' \.picturegroup \.left-access\{background:.*?\}\n', 'g'), ''));
                $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#' + id + ' \.picturegroup \.left-access\{margin\-top:.*?\}\n', 'g'), ''));
                $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#' + id + ' \.picturegroup \.left-access\{width:.*?\}\n', 'g'), ''));
                $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#' + id + ' \.picturegroup \.left-access\{height:.*?\}\n', 'g'), ''));
                $.common.removeGeneratedCss(id, '.picturegroup .left-access', 'background');
                $.common.removeGeneratedCss(id, '.picturegroup .left-access', 'margin-top');
                $.common.removeGeneratedCss(id, '.picturegroup .left-access', 'width');
                $.common.removeGeneratedCss(id, '.picturegroup .left-access', 'height');
                $('#generatedCss').append(css);
                $('#' + id + ' .picturegroup .left-access').removeClass('init');
                $.common.regain();
            });
        },
        //�����Ұ�ťͼƬ
        setRightButtonImage: function(path) {
            var id = selectedElementInfo.get('id');
            $("<img/>").attr("src", path).load(function() {
                var css = '#' + id + ' .picturegroup .right-access{background:url(' + path + ') 0 0 no-repeat;}\n';
                var _width = this.width;
                var _height = this.height;
                css += '#' + id + ' .picturegroup .right-access{margin-top:-' + _height / 2 + 'px;}\n';
                css += '#' + id + ' .picturegroup .right-access{width:' + _width + 'px;}\n';
                css += '#' + id + ' .picturegroup .right-access{height:' + _height + 'px;}\n';
                $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#' + id + ' \.picturegroup \.right-access\{background:.*?\}\n', 'g'), ''));
                $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#' + id + ' \.picturegroup \.right-access\{margin\-top:.*?\}\n', 'g'), ''));
                $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#' + id + ' \.picturegroup \.right-access\{width:.*?\}\n', 'g'), ''));
                $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#' + id + ' \.picturegroup \.right-access\{height:.*?\}\n', 'g'), ''));
                $.common.removeGeneratedCss(id, '.picturegroup .right-access', 'background');
                $.common.removeGeneratedCss(id, '.picturegroup .right-access', 'margin-top');
                $.common.removeGeneratedCss(id, '.picturegroup .right-access', 'width');
                $.common.removeGeneratedCss(id, '.picturegroup .right-access', 'height');
                $('#generatedCss').append(css);
                $('#' + id + ' .picturegroup .right-access').removeClass('init');
                $.common.regain();
            });
        },
        //ѡ�����Ҽ�ͷ
        selectPreNextBtn: function() {
            var id = selectedElementInfo.get("id");
            $(".selectBoxId .img-hold").off('click').on('click', function() {
                var jsonData = JSON.parse($("." + id + '_preNextBtnData').html());
                var imgUrl;
                if ($($(this).parentsUntil('.pre-next-btn-box')[5]).parent().hasClass('pre') || $(this).hasClass('pre-no')) {
                    // ��pre��ͷ
                    imgUrl = $(this).find('img').attr('src');
                    if (!imgUrl) {
                        // ��ͼƬ
                        $(".pre-next-btn-box.pre .pre #previewImg").hide();
                        $(".pre-next-btn-box.pre .pre .no-img").show();
                        jsonData.preActivePic = "";
                    } else {
                        // ��ͼƬ
                        $(".pre-next-btn-box.pre .pre #previewImg").show();
                        $(".pre-next-btn-box.pre .pre .no-img").hide();
                        if ($(this).parent().hasClass('default')) {
                            jsonData.preActivePic = imgUrl.split('/images/')[1];
                            jsonData.preIsDefault = true;
                        } else {
                            jsonData.preActivePic = $(this).find('img').attr('src');
                            jsonData.preIsDefault = false;
                        }
                    }
                    $("." + id + '_preNextBtnData').html(JSON.stringify(jsonData));
                    $(".pre-next-btn-box.pre #previewImg").attr('src', imgUrl);
                    $.tplComponentPictureCarouselSetting.setLeftButtonImage(imgUrl);
                } else {
                    // ���Ҽ�ͷ
                    imgUrl = $(this).find('img').attr('src');
                    if (!imgUrl) {
                        // ��ͼƬ
                        $(".pre-next-btn-box.next .next #previewImg").hide();
                        $(".pre-next-btn-box.next .next .no-img").show();
                        jsonData.preActivePic = "";
                    } else {
                        // ��ͼƬ
                        $(".pre-next-btn-box.next .next #previewImg").show();
                        $(".pre-next-btn-box.next .next .no-img").hide();
                        if ($(this).parent().hasClass('default')) {
                            jsonData.nextActivePic = imgUrl.split('/images/')[1];
                            jsonData.nextIsDefault = true;
                        } else {
                            jsonData.nextActivePic = $(this).find('img').attr('src');
                            jsonData.nextIsDefault = false;
                        }
                    }
                    $("." + id + '_preNextBtnData').html(JSON.stringify(jsonData));
                    $(".pre-next-btn-box.next #previewImg").attr('src', imgUrl);
                    $.tplComponentPictureCarouselSetting.setRightButtonImage(imgUrl);
                }
            });
        },
        /**
         * �л���ʾ����
         * @return {[type]} [description]
         */
        bindToggleSelect: function() {
            var id = selectedElementInfo.get("id");
            $(".pre-next-btn-box.pre .up-select-pics").off('click').on('click', function() {
                $('.pre-next-btn-box.next').find(".selectBoxId").hide();
                $('.pre-next-btn-box.pre').find(".selectBoxId").toggle();
            });
            $(".pre-next-btn-box.next .up-select-pics").off('click').on('click', function() {
                $('.pre-next-btn-box.pre').find(".selectBoxId").hide();
                $('.pre-next-btn-box.next').find(".selectBoxId").toggle();
            });
        },
       
        /**
         * ���Ĭ��ͼƬ
         * @return {[type]} [description]
         */
        clearDeafaultPics: function() {
            var id = selectedElementInfo.get("id");
            $(".clear-selectpics").off('click').on('click', function() {
                if ($(this).hasClass('pre-clear')) {
                    $(".pre-next-btn-box.pre .selectBoxId #content li").not('.default').html("");
                    var jsonData = JSON.parse($("." + id + '_preNextBtnData').html());
                    jsonData.preUploadData = "";
                    jsonData.preActivePic = "";
                    $("." + id + '_preNextBtnData').html(JSON.stringify(jsonData));
                    // ��ͼƬ
                    $(".pre-next-btn-box.pre .pre #previewImg").hide();
                    $(".pre-next-btn-box.pre .pre .no-img").show();
                } else {
                    $(".pre-next-btn-box.next .selectBoxId #content li").not('.default').html("");
                    var jsonData = JSON.parse($("." + id + '_preNextBtnData').html());
                    jsonData.nextUploadData = "";
                    jsonData.nextActivePic = "";
                    $("." + id + '_preNextBtnData').html(JSON.stringify(jsonData));
                    // ��ͼƬ
                    $(".pre-next-btn-box.next .next #previewImg").hide();
                    $(".pre-next-btn-box.next .next .no-img").show();
                }
            });
        },
        /**
         * �ϴ����Ҽ�ͷͼƬ
         * @return {[type]} [description]
         */
        uploadPrePics: function() {
            $(".pre-next-btn-box.pre .up-btn").off('click').on('click', function() {
                var id = selectedElementInfo.get("id");
                var jsonData = JSON.parse($("." + id + '_preNextBtnData').html());
                var preUploadData = jsonData.preUploadData;
                var onlyPre = jsonData.onlyPre;

                $.dialogUpPic.initDialog(onlyPre, 1, function(data) {

                    if (jsonData.preUploadData.all) {
                        jsonData.preUploadData.all.push(data.all[0]);
                        jsonData.preUploadData.local.push(data.local[0]);
                        jsonData.preUploadData.yun.push(data.yun[0]);
                    } else {
                        jsonData.preUploadData = data;
                    }
                    jsonData.onlyPre = data;
                    jsonData.preActivePic = data.all[0].path;
                    jsonData.preIsDefault = false;
                    $("." + id + '_preNextBtnData').html(JSON.stringify(jsonData));

                    $.tplComponentPictureCarouselSetting.setLeftButtonImage(jsonData.preActivePic);
                    $(".up-select-pics .pre .no-img").hide();
                    $.tplComponentPictureCarouselSetting.readDeafultPreNextData(true);
                });
            });
            $(".pre-next-btn-box.next .up-btn").off('click').on('click', function() {
                var id = selectedElementInfo.get("id");
                var jsonData = JSON.parse($("." + id + '_preNextBtnData').html());
                var nextUploadData = jsonData.nextUploadData;
                var onlyNext = jsonData.onlyNext;

                $.dialogUpPic.initDialog(onlyNext, 1, function(data) {
                    if (jsonData.nextUploadData.all) {
                        jsonData.nextUploadData.all.push(data.all[0]);
                        jsonData.nextUploadData.local.push(data.local[0]);
                        jsonData.nextUploadData.yun.push(data.yun[0]);
                    } else {
                        jsonData.nextUploadData = data;
                    }
                    jsonData.onlyNext = data;
                    jsonData.nextActivePic = data.all[0].path;
                    jsonData.nextIsDefault = false;
                    $("." + id + '_preNextBtnData').html(JSON.stringify(jsonData));

                    $.tplComponentPictureCarouselSetting.setRightButtonImage(jsonData.nextActivePic);
                    $(".up-select-pics .next .no-img").hide();
                    $.tplComponentPictureCarouselSetting.readDeafultPreNextData();
                });

            });
        },
        /**
         * ɾ���ϴ������ͷ���Ҽ�ͷ��
         * @return {[type]} [description]
         */
        deleteupbtnPics: function() {
            $(".pre-next-btn-box.pre .close").off('click').on('click', function() {
                var id = selectedElementInfo.get("id");
                var jsonData = JSON.parse($("." + id + '_preNextBtnData').html());
                var index = $(this).index() - 1;
                if ($(this).parent().hasClass('default')) {
                    jsonData.prePicsArr.splice(index, 1);
                } else {
                    // ���ϴ����ͼ��
                    jsonData.preUploadData.all.splice(index, 1);
                    jsonData.preUploadData.local.splice(index, 1);
                }
                $("." + id + '_preNextBtnData').html(JSON.stringify(jsonData));
                $.tplComponentPictureCarouselSetting.readDeafultPreNextData(true);
            });
            $(".pre-next-btn-box.next .close").off('click').on('click', function() {
                var id = selectedElementInfo.get("id");
                var jsonData = JSON.parse($("." + id + '_preNextBtnData').html());
                var index = $(this).index() - 1;
                if ($(this).parent().hasClass('default')) {
                    jsonData.nextPicsArr.splice(index, 1);
                } else {
                    // ���ϴ����ͼ��
                    jsonData.nextUploadData.all.splice(index, 1);
                    jsonData.nextUploadData.local.splice(index, 1);
                }
                $("." + id + '_preNextBtnData').html(JSON.stringify(jsonData));
                $.tplComponentPictureCarouselSetting.readDeafultPreNextData();
            });
        },
        /**
         * ��ȡĬ�ϵ�����
         * @return {[type]} [description]
         * @param {[boolean]} isAdd [�Ƿ����Ĭ��ͼƬ]
         * @param {[boolean]} isPre [�Ƿ���prebtn]
         */
        readDeafultPreNextData: function(isPre) {
            var id = selectedElementInfo.get("id");
            var jsonData = JSON.parse($("." + id + '_preNextBtnData').html());
            var prePicsArr = jsonData.prePicsArr;
            var nextPicsArr = jsonData.nextPicsArr;
            var preUploadData = jsonData.preUploadData;
            var nextUploadData = jsonData.nextUploadData;
            var preIsDefault = jsonData.preIsDefault;
            var nextIsDefault = jsonData.nextIsDefault;
            var html = "";
            var serverPath = $.common.getComponetIMagesUrl(id);
            // '/images/1.jpg'

            if (isPre) {
                // ���ͷ
                for (var i = 0; i < prePicsArr.length; i++) {
                    html += '<li class="default"><span class="img-hold"><img src="' + serverPath + '/images/' + prePicsArr[i] + '" alt="" /></span><span class="d-close"></span></li>';
                }
                if (preUploadData && preUploadData.all) {
                    for (var i = 0; i < preUploadData.all.length; i++) {
                        html += '<li><span class="img-hold"><img src="' + preUploadData.all[i].path + '" alt="" /></span><span class="close"></span></li>';
                    }
                }
                $(".pre-next-btn-box.pre .selectBoxId #content").html(html);
                // ���ѡ�е�ͼƬ
                var preActivePic = jsonData.preActivePic;
                if (!preActivePic) {
                    // ��ͼƬ
                    $(".pre-next-btn-box.pre .pre #previewImg").hide();
                    $(".pre-next-btn-box.pre .pre .no-img").show();
                } else {
                    if (preIsDefault) {
                        // ��Ĭ��ͼƬ
                        $(".pre-next-btn-box.pre .pre #previewImg").show().attr('src', serverPath + '/images/' + preActivePic);
                        $(".pre-next-btn-box.pre .pre .no-img").hide();
                    } else {
                        // ��Ĭ��ͼƬ
                        $(".pre-next-btn-box.pre .pre #previewImg").show().attr('src', preActivePic);
                    }
                }
            } else {
                // �Ҽ�ͷ
                for (var i = 0; i < nextPicsArr.length; i++) {
                    html += '<li class="default"><span class="img-hold"><img src="' + serverPath + '/images/' + nextPicsArr[i] + '" alt="" /></span><span class="d-close"></span></li>';
                }
                if (nextUploadData && nextUploadData.all) {
                    for (var i = 0; i < nextUploadData.all.length; i++) {
                        html += '<li><span class="img-hold"><img src="' + nextUploadData.all[i].path + '" alt="" /></span><span class="close"></span></li>';
                    }
                }
                $(".pre-next-btn-box.next .selectBoxId #content").html(html);
                // ���ѡ�е�ͼƬ
                var nextActivePic = jsonData.nextActivePic;
                if (!nextActivePic) {
                    // ��ͼƬ
                    $(".pre-next-btn-box.next .next #previewImg").hide();
                    $(".pre-next-btn-box.next .next .no-img").show();
                } else {
                    if (nextIsDefault) {
                        // ��Ĭ��ͼƬ
                        $(".pre-next-btn-box.next .next #previewImg").show().attr('src', serverPath + '/images/' + nextActivePic);
                        $(".pre-next-btn-box.next .next .no-img").hide();
                    } else {
                        // ��Ĭ��ͼƬ
                        $(".pre-next-btn-box.next .next #previewImg").show().attr('src', nextActivePic);
                    }
                }
            }


            this.selectPreNextBtn();
            this.clearDeafaultPics();
            this.uploadPrePics();
            this.deleteupbtnPics();
            this.bindToggleSelect();
        },
        //-------------------------------------------------------------���Ҽ�ͷ���ý���------------------------------------------------------------------
        //-------------------------------------------------------------�����л�����-----------------------------------------------------------------------
        //���ý����л���ʽ
        setBottomButtonStyle:function(data,flag){
            var id = selectedElementInfo.get("id");
            $('#'+id+' .picturegroup .fast-access-holder').removeAttr('class').addClass('fast-access-holder').addClass(data);
            var bgColor = 'transparent';
            var bgActiveColor = 'transparent';
            var color = '#fff';
            var activeColor = '#fff';
            var borderColor = 'transparent';
            if(data==='square' || data==='rectangle'){
                bgColor = '#fff';
                bgActiveColor = '#c30c0c';
                $('.num-show').hide();
            }else if(data==='e-square'){
                borderColor = '#fff';
                bgActiveColor = '#fff';
                $('.num-show').hide();
            }else if(data==='e-rectangle'){
                borderColor = '#fff';
                bgActiveColor = '#c30c0c';
                $('.num-show').hide();
            }else if(data==='circle'){
                bgColor = '#8d8d8d';
                bgActiveColor = '#c30c0c';
                $('.num-show').hide();
            }else if(data==='e-circle'){
                bgColor = '#ccc';
                borderColor = '#d94a46';
                $('.num-show').hide();

            }else if(data==='n-square'){
                bgColor = '#000';
                bgActiveColor = '#e60b11';
                $('.num-show').show();
            }else if(data==='n-circle'){
                bgColor = '#969895';
                bgActiveColor = '#e60b11';
                $('.num-show').show();
            }else if(data==='n-e-circle'){
                borderColor = '#969895';
                bgActiveColor = '#e60b11';
                $('.num-show').show();
            }

            if(data==='e-circle'){
                $('.e-circle-hide').hide();
            }else{
                $('.e-circle-hide').show();
            }

            $.each($('#'+id+' .picturegroup.static .fast-access-holder i'), function(index, i) {
                 if(data.search(/n-/)>=0){
                    $(i).text(index+1);
                 }else{
                    $(i).text('');
                 }
            });

            $.each($('#'+id+' .picturegroup.dynamic .fast-access-holder i'), function(index, i) {
                 if(data.search(/n-/)>=0){
                    $(i).text(index+1);
                 }else{
                    $(i).text('');
                 }
            });
            if(!flag){
                //���ý����л���ɫ
                $.tplComponentPictureCarouselSetting.setBottomButtonBgColor(bgColor);
                $.tplComponentPictureCarouselSetting.setBottomButtonActiveBgColor(bgActiveColor);
                $.tplComponentPictureCarouselSetting.setBottomButtonBorderColor(borderColor);
                $.tplComponentPictureCarouselSetting.setBottomButtonColor(color);
                $.tplComponentPictureCarouselSetting.setBottomButtonActiveColor(activeColor);
                //������ɫ
                $("#bottomButtonBgColor").spectrum("set", $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonBgColor);
                $("#bottomButtonActiveBgColor").spectrum("set", $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonActiveBgColor);
                $("#bottomButtonColor").spectrum("set", $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonColor);
                $("#bottomButtonActiveColor").spectrum("set", $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonActiveColor);
                $("#bottomButtonBorderColor").spectrum("set", $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonBorderColor);
            }
            //�洢����
            $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonStyle=data;
            $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
            if(!flag){
                $.common.regain();
            }
        },

        //�����л�ˮƽ����
        setBottomButtonAlign: function(event) {
            try {
                var obj = event.data.obj;
                var align = $(obj).attr('value');
                var id = selectedElementInfo.get("id");
                var _alignleft = '';
                var _alignright = '';
                var _left = '';
                var _right = '';
                //���ø�״̬��ֵ
                if (align === 'left') {
                    _alignleft = '20px';
                    _alignright = 0;
                    _left = 0;
                    _right = 'auto';
                } else if (align === 'center') {
                    _alignleft = -$('#'+id+' .picturegroup .fast-access-holder').outerWidth() / 2 + 'px';
                    _alignright = 0;
                    _left = '50%';
                    _right = 'auto';
                } else {
                    _alignleft = 0;
                    _alignright = '20px';
                    _left = 'auto';
                    _right = '0';
                }

                $("#" + id + " .picturegroup .fast-access-holder").css({ 'left': _left, 'margin-left': _alignleft, 'right': _right, 'margin-right': _alignright });
                //�洢����
                $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonAlign = align;
                $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                if(!event.data.flag){
                    $.common.regain();
                }
            } catch (e) {
                
            }
        },
        //�����л� λ��
        setBottomButtonPosition: function(event) {
            try {
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var value = $(obj).attr('data');
                $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonPosition = value;
                $.tplComponentPictureCarouselSetting.setTitleAreaPosition({ data: { obj:  $('#titleAreaPositionButton .component-radio[data="' + $.tplComponentPictureCarouselSetting.mainDatas.titleAreaPosition + '"]').get(0)} });
                $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                $.common.regain();
            } catch (e) {
                
            }
        },
        
        //�����л�����ɫ
        setBottomButtonBgColor: function(color) {
            try {
                var id = selectedElementInfo.get("id");
                $.tplComponentPictureCarouselSetting.setCss(color,'background-color','background\-color',' .picturegroup .fast-access-holder i',' \.picturegroup \.fast\-access\-holder i');
                $.tplComponentPictureCarouselSetting.setCss($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonActiveBgColor,'background-color','background\-color',' .picturegroup .fast-access-holder i.active',' \.picturegroup \.fast\-access\-holder i\.active');
                //�洢����
                $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonBgColor = color;
                $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                $.common.regain();
            } catch (e) {
                
            }
        },
        //�����л�ѡ�б���ɫ
        setBottomButtonActiveBgColor: function(color) {
            try {
                var id = selectedElementInfo.get("id");
                $.tplComponentPictureCarouselSetting.setCss($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonBgColor,'background-color','background\-color',' .picturegroup .fast-access-holder i',' \.picturegroup \.fast\-access\-holder i');
                $.tplComponentPictureCarouselSetting.setCss(color,'background-color','background\-color',' .picturegroup .fast-access-holder i.active',' \.picturegroup \.fast\-access\-holder i\.active');
                //�洢����
                $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonActiveBgColor = color;
                $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                $.common.regain();
            } catch (e) {
                
            }
        },
        //�����л���ɫ
        setBottomButtonColor: function(color) {
            try {
                var id = selectedElementInfo.get("id");
                $.tplComponentPictureCarouselSetting.setCss(color,'color','',' .picturegroup .fast-access-holder i',' \.picturegroup \.fast\-access\-holder i');
                $.tplComponentPictureCarouselSetting.setCss($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonActiveColor,'color','',' .picturegroup .fast-access-holder i.active',' \.picturegroup \.fast\-access\-holder i\.active');
                //�洢����
                $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonColor = color;
                $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                $.common.regain();
            } catch (e) {
               
            }
        },
        //�����л�ѡ����ɫ
        setBottomButtonActiveColor: function(color) {
            try {
                var id = selectedElementInfo.get("id");
                $.tplComponentPictureCarouselSetting.setCss($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonColor,'color','',' .picturegroup .fast-access-holder i',' \.picturegroup \.fast\-access\-holder i');
                $.tplComponentPictureCarouselSetting.setCss(color,'color','',' .picturegroup .fast-access-holder i.active',' \.picturegroup \.fast\-access\-holder i\.active');
                //�洢����
                $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonActiveColor = color;
                $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                $.common.regain();
            } catch (e) {
               
            }
        },
        //�����л��߿���ɫ
        setBottomButtonBorderColor: function(color) {
            try {
                var id = selectedElementInfo.get("id");
                 $.tplComponentPictureCarouselSetting.setCss(color,'border-color','border\-color',' .picturegroup .fast-access-holder i',' \.picturegroup \.fast\-access\-holder i');
                //�洢����
                $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonBorderColor = color;
                $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                $.common.regain();
            } catch (e) {
                
            }
        },
        
        //----------------------------------------------�����л�����---------------------------------------------------------------------------------------
        
       
        
        //--------------------------------��̬��������--------------------------------------------------------------------------------------------
        //����CMS����
        setCMSTag:function(){
            //���δѡ����Ŀֱ�ӷ���
            if(!$.tplComponentPictureCarouselSetting.cmsDatas.siteCode || !$.tplComponentPictureCarouselSetting.cmsDatas.channelCode){
                alert('����ѡ����Ŀ��');
                $.tplComponentPictureCarouselSetting.initDynamicDatas();
                return ;
            }

            var id = selectedElementInfo.get('id');
            //�������
            var docNum = Number($.trim($('#cmsDocNum').val()));
            if(!docNum){
                docNum = '';
            }

            $.tplComponentPictureCarouselSetting.cmsDatas.docNum = docNum;
            //�������
            var types = $('#cmsDocType .type-check.active').get();
            var docType = '';
            $.each(types, function(index, type) {
                docType += $(type).attr('value') + '|';
            });
            docType = docType.substring(0,docType.length-1);
            $.tplComponentPictureCarouselSetting.cmsDatas.docType = docType;

            //�����ʾλ��
            var docPos = Number($.trim($('#cmsDocPos').val()));
            if(docPos){
                if(docPos<=1){
                    docPos = 1;
                    $('#cmsDocPos').val(docPos);
                }
                docPos -= 1;
            }else{
                $('#cmsDocPos').val(1);
                docPos = 0;
            }
            $.tplComponentPictureCarouselSetting.cmsDatas.docPos = docPos;
            //��������
            var batchRule = $('#cmsBatchRule .batch-radio.active').attr('batch');
            $.tplComponentPictureCarouselSetting.cmsDatas.batchRule = batchRule;
            
            //ͼƬ����
    
            var title = $('#cmsTitle .title-checkbox .title-check.active').parent('.title-checkbox').next('.title-button').find('.title-radio.active').attr('doc');
            if(!title){
                title = '';
                $.tplComponentPictureCarouselSetting.titleList.titleSwitch = 'off';
                $('#titleSwitch').css('left', '-30px');
            }else{
                $.tplComponentPictureCarouselSetting.titleList.titleSwitch = 'on';
                $('#titleSwitch').css('left', '0px');
            }
           
            $.tplComponentPictureCarouselSetting.cmsDatas.docTitle = title;
            //ͼƬ���� 
            var content = $('#cmsTitle .content-checkbox .content-check.active').attr('doc');
            if(!content){
                content = '';
                $.tplComponentPictureCarouselSetting.memoList.memoSwitch = 'off';
                $('#memoSwitch').css('left', '-30px');
            }else{
                $.tplComponentPictureCarouselSetting.memoList.memoSwitch = 'on';
                $('#memoSwitch').css('left', '0px');
            }
            $.tplComponentPictureCarouselSetting.cmsDatas.docContent = content;
            //��������
            var contentNum = $.trim($('#cmsContentNum').val());
            $.tplComponentPictureCarouselSetting.cmsDatas.contentNum = contentNum;
            //�洢��̬����
            $('.' + id + "_titleinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList));
            $('.' + id + "_memoinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
            $('.' + id + "_cmsdatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.cmsDatas));

            //ajax ��ȡͼƬ����
            var url = '/app-tpl-webapp/common/gainManuscriptsAndAppendixs.action';
            var params = {
                m_websiteCodeName:$.tplComponentPictureCarouselSetting.cmsDatas.siteCode,
                m_channelCodeName:$.tplComponentPictureCarouselSetting.cmsDatas.channelCode,
                m_documentType:$.tplComponentPictureCarouselSetting.cmsDatas.docType,
                m_startPos:$.tplComponentPictureCarouselSetting.cmsDatas.docPos,
                m_num:$.tplComponentPictureCarouselSetting.cmsDatas.docNum,
                m_batchRule:$.tplComponentPictureCarouselSetting.cmsDatas.batchRule
            };
            //ͼƬ��������
            var datas = {
                        "yun": [],
                        "local": [],
                        "all": []
                    };
            //��ȡcms�ӿ�����
            var _datas = $.tplComponentPictureCarouselSetting.ajaxData(url,params)[0];
            if(!_datas || _datas.length===0){
                $.tplComponentPictureCarousel.pcDatas = datas;
                $.tplComponentPictureCarouselSetting.setImages();
                return ;
            }
            
            //��ȡ��������
            var _pdatas = _datas.appendixsList;
            //��ȡ�������
            var _mdatas = _datas.manuscriptsInfo;
            if(!_pdatas || !_mdatas){
                $.tplComponentPictureCarousel.pcDatas = datas;
                $.tplComponentPictureCarouselSetting.setImages();
                return ;
            }

            //���ͼƬ������⡢����
            $.each(_mdatas,function(index,_data){
                if(_data){
                    var _path = _pdatas[index].length>0?_pdatas[index][0].path:'';
                    var title = $.trim(_data[$.tplComponentPictureCarouselSetting.cmsDatas.docTitle]);
                    var content = $.trim(_data[$.tplComponentPictureCarouselSetting.cmsDatas.docContent]);
                    if($.tplComponentPictureCarouselSetting.cmsDatas.contentNum){
                        if($.tplComponentPictureCarouselSetting.backtextIndex(content)<content.length){
                            content = content.substring(0,$.tplComponentPictureCarouselSetting.backtextIndex(content))+'��';
                        }
                    }
                    var url = _data.url.search(/http/)>=0?_data.url:previewPortal+'/'+_data.url;
                    datas.local.push({path:_path,link:url,name:($.tplComponentPictureCarouselSetting.cmsDatas.docTitle?title:''),content:($.tplComponentPictureCarouselSetting.cmsDatas.docContent?content:'')});
                    datas.all.push({path:_path,link:url,name:($.tplComponentPictureCarouselSetting.cmsDatas.docTitle?title:''),content:($.tplComponentPictureCarouselSetting.cmsDatas.docContent?content:'')});
                    
                }
            });
           $.tplComponentPictureCarousel.pcDatas = datas;
           $.tplComponentPictureCarouselSetting.setImages();
           $.common.regain();
        },
        

        //-------------------------------------------------��̬���ý���-----------------------------------------------------------------------------------
        
        //------------------------------��������------------------------------------------------------------------------------------------------------
        //���ñ���߾�
        setTitleDistance:function(event){
            try{
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var name = $(obj).attr('distance');
                var value = $.trim($(obj).val());
                if(value){
                    $.tplComponentPictureCarouselSetting.setCss(value.replace(' ',''),name,name.split('-')[0]+'\-'+name.split('-')[1],' .picturegroup .picture-holder li i .title-area ',' \.picturegroup \.picture\-holder li i \.title\-area ');
                    
                    //�洢����
                    $.tplComponentPictureCarouselSetting.titleList[name] = value;
                    $('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList));
                    $.common.regain();
                }
            }catch(e){
                
            }
        },
        //���ñ�������
        setTitleFontFamily:function(event){
            try{
                var obj = event.data.obj;
                var fontFamily = $(obj).text();
                if(fontFamily==='��ѡ��'){
                    return ;
                }
                var id = selectedElementInfo.get('id');
                $.tplComponentPictureCarouselSetting.setCss(fontFamily,'font-family','font\-family',' .picturegroup .picture-holder li i .title-area ',' \.picturegroup \.picture\-holder li i \.title\-area ');
                //�洢����
                $.tplComponentPictureCarouselSetting.titleList['font-family'] = fontFamily;
                $('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList));
                $.common.regain();
            }catch(e){
               
            }
        },
        //���ñ��������С
        setTitleFontSize:function(){
            try{
                var id = selectedElementInfo.get('id');
                var fontSize = $.trim($('#titleFontSize').val());
                if(fontSize){
                    $.tplComponentPictureCarouselSetting.setCss(fontSize.replace(' ',''),'font-size','font\-size',' .picturegroup .picture-holder li i .title-area ',' \.picturegroup \.picture\-holder li i \.title\-area ');
                    //�洢����
                    $.tplComponentPictureCarouselSetting.titleList['font-size'] = fontSize;
                    $('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList));
                    $.common.regain();
                }
            }catch(e){
                
            }
        },
        
        //���ñ����и�
        setTitleLineHeight:function(){
            try{
                
                var id = selectedElementInfo.get('id');
                
                var lineHeight = $.trim($('#titleLineHeight').val());
                if(lineHeight){
                    $.tplComponentPictureCarouselSetting.setCss(lineHeight.replace(' ',''),'line-height','line\-height',' .picturegroup .picture-holder li i .title-area ',' \.picturegroup \.picture\-holder li i \.title\-area ');
                    //�洢����
                    $.tplComponentPictureCarouselSetting.titleList['line-height'] = lineHeight;
                    $('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList));
                    $.common.regain();
                }
            }catch(e){
                
            }
        },
        
        //���ñ���ˮƽ����
        setTitleAlign:function(event){
            try{
                var obj = event.data.obj;
                var textAlign = $(obj).attr('value');
                var id = selectedElementInfo.get('id');
                $.tplComponentPictureCarouselSetting.setCss(textAlign,'text-align','text\-align',' .picturegroup .picture-holder li i .title-area ',' \.picturegroup \.picture\-holder li i \.title\-area ');
                //�洢����
                $.tplComponentPictureCarouselSetting.titleList['text-align'] = textAlign;
                $('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList));
                $.common.regain();
            }catch(e){
                
            }
        },

        //���ñ�����ɫ
        setTitleColor:function(color){
            try{
                var id = selectedElementInfo.get("id");
                $.tplComponentPictureCarouselSetting.setCss(color,'color','',' .picturegroup .picture-holder li i .title-area a ',' \.picturegroup \.picture\-holder li i \.title\-area a ');
                $.tplComponentPictureCarouselSetting.setCss(color,'color','',' .picturegroup .picture-holder li i .title-area a:linked ',' \.picturegroup \.picture\-holder li i \.title\-area a:linked ');
                $.tplComponentPictureCarouselSetting.setCss($.tplComponentPictureCarouselSetting.titleList.hoverColor,'color','',' .picturegroup .picture-holder li i .title-area a:hover ',' \.picturegroup \.picture\-holder li i \.title\-area a:hover ');
                //�洢����
                $.tplComponentPictureCarouselSetting.titleList.color = color;
                $('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList));
                $.common.regain();
            }catch(e){
                
            }
        },

        //���ñ�����ͣ��ɫ
        setTitleHoverColor:function(color){
            try{
                var id = selectedElementInfo.get("id");
                $.tplComponentPictureCarouselSetting.setCss(color,'color','',' .picturegroup .picture-holder li i .title-area a:hover ',' \.picturegroup \.picture\-holder li i \.title\-area a:hover ');
                //�洢����
                $.tplComponentPictureCarouselSetting.titleList.hoverColor = color;
                $('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList));
                $.common.regain();
            }catch(e){
                
            }
        },
        //���ñ�����ʽ
        setTitleFont:function(event){
            try{
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var name = $(obj).attr('name');
                var value = $(obj).attr('value');
                if($(obj).hasClass('active')){
                    $.tplComponentPictureCarouselSetting.setCss(value,name,name.split('-')[0]+'\-'+name.split('-')[1],' .picturegroup .picture-holder li i .title-area ',' \.picturegroup \.picture\-holder li i \.title\-area ');
                    //�洢����
                    $.tplComponentPictureCarouselSetting.titleList[name] = value;
                }else{
                    $.tplComponentPictureCarouselSetting.setCss('normal',name,name.split('-')[0]+'\-'+name.split('-')[1],' .picturegroup .picture-holder li i .title-area ',' \.picturegroup \.picture\-holder li i \.title\-area ');
                    $.tplComponentPictureCarouselSetting.titleList[name] = '';
                    $(obj).removeClass('active');
                }
                $('.'+id+"_titleinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList)); 
                $.common.regain();
            }catch(e){
                
            }
        },

        //���ñ�����ʽ
        setTitleHoverUnderline:function(event){
            try{
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var name = $(obj).attr('name');
                var value = $(obj).attr('value');
                if($(obj).hasClass('active')){
                    $.tplComponentPictureCarouselSetting.setCss(value,name,name.split('-')[0]+'\-'+name.split('-')[1],' .picturegroup .picture-holder li i .title-area a:hover',' \.picturegroup \.picture\-holder li i \.title\-area a:hover');
                    //�洢����
                    $.tplComponentPictureCarouselSetting.titleList[name] = value;
                }else{
                    $.tplComponentPictureCarouselSetting.setCss('none',name,name.split('-')[0]+'\-'+name.split('-')[1],' .picturegroup .picture-holder li i .title-area a:hover',' \.picturegroup \.picture\-holder li i \.title\-area a:hover');
                    $.tplComponentPictureCarouselSetting.titleList[name] = '';
                    $(obj).removeClass('active');
                    
                }
                $('.'+id+"_titleinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList)); 
                $.common.regain();
            }catch(e){
                
            }
        },
        
        //----------------------------------------------------�������ý���---------------------------------------------------------
        //----------------------------------------------------ժҪ����------------------------------------------------------------
        //����ժҪ�߾�
        setMemoDistance:function(event){
            try{
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var name = $(obj).attr('distance');
                var value = $.trim($(obj).val());
                if(value){
                    $.tplComponentPictureCarouselSetting.setCss(value.replace(' ',''),name,name.split('-')[0]+'\-'+name.split('-')[1],' .picturegroup .picture-holder li i .content-area ',' \.picturegroup \.picture\-holder li i \.content\-area ');
                    
                    //�洢����
                    $.tplComponentPictureCarouselSetting.memoList[name] = value;
                    $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                    $.common.regain();
                }
            }catch(e){
               
            }
        },
        //����ժҪ����
        setMemoFontFamily:function(event){
            try{
                var obj = event.data.obj;
                var fontFamily = $(obj).text();
                if(fontFamily==='��ѡ��'){
                    return ;
                }
                var id = selectedElementInfo.get('id');
                $.tplComponentPictureCarouselSetting.setCss(fontFamily,'font-family','font\-family',' .picturegroup .picture-holder li i .content-area ',' \.picturegroup \.picture\-holder li i \.content\-area ');
                //�洢����
                $.tplComponentPictureCarouselSetting.memoList['font-family'] = fontFamily;
                $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                $.common.regain();
            }catch(e){
               
            }
        },
        //����ժҪ�����С
        setMemoFontSize:function(){
            try{
                var id = selectedElementInfo.get('id');
                var fontSize = $.trim($('#memoFontSize').val());
                if(fontSize){
                    $.tplComponentPictureCarouselSetting.setCss(fontSize.replace(' ',''),'font-size','font\-size',' .picturegroup .picture-holder li i .content-area ',' \.picturegroup \.picture\-holder li i \.content\-area ');
                    //�洢����
                    $.tplComponentPictureCarouselSetting.memoList['font-size'] = fontSize;
                    $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                    $.common.regain();
                }
            }catch(e){
               
            }
        },
        
        //����ժҪ�и�
        setMemoLineHeight:function(){
            try{
                
                var id = selectedElementInfo.get('id');
                
                var lineHeight = $.trim($('#memoLineHeight').val());
                if(lineHeight){
                    $.tplComponentPictureCarouselSetting.setCss(lineHeight.replace(' ',''),'line-height','line\-height',' .picturegroup .picture-holder li i .content-area ',' \.picturegroup \.picture\-holder li i \.content\-area ');
                    //�洢����
                    $.tplComponentPictureCarouselSetting.memoList['line-height'] = lineHeight;
                    $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                    $.common.regain();
                }
            }catch(e){
                
            }
        },
        
        //����ժҪˮƽ����
        setMemoAlign:function(event){
            try{
                var obj = event.data.obj;
                var textAlign = $(obj).attr('value');
                var id = selectedElementInfo.get('id');
                $.tplComponentPictureCarouselSetting.setCss(textAlign,'text-align','text\-align',' .picturegroup .picture-holder li i .content-area ',' \.picturegroup \.picture\-holder li i \.content\-area ');
                //�洢����
                $.tplComponentPictureCarouselSetting.memoList['text-align'] = textAlign;
                $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                $.common.regain();
            }catch(e){
                
            }
        },

        //����ժҪ��ɫ
        setMemoColor:function(color){
            try{
                var id = selectedElementInfo.get("id");
                $.tplComponentPictureCarouselSetting.setCss(color,'color','',' .picturegroup .picture-holder li i .content-area ',' \.picturegroup \.picture\-holder li i \.content\-area ');
                //�洢����
                $.tplComponentPictureCarouselSetting.memoList.color = color;
                $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                $.common.regain();
            }catch(e){
                
            }
        },

        //������ϸ��ɫ
        setMoreColor:function(color){
            try{
                var id = selectedElementInfo.get("id");
                $.tplComponentPictureCarouselSetting.setCss(color,'color','',' .picturegroup .picture-holder li i .content-area a ',' \.picturegroup \.picture\-holder li i \.content\-area a ');
                $.tplComponentPictureCarouselSetting.setCss(color,'color','',' .picturegroup .picture-holder li i .content-area a:linked ',' \.picturegroup \.picture\-holder li i \.content\-area a:linked ');
                $.tplComponentPictureCarouselSetting.setCss($.tplComponentPictureCarouselSetting.memoList.moreHoverColor,'color','',' .picturegroup .picture-holder li i .content-area a:hover ',' \.picturegroup \.picture\-holder li i \.content\-area a:hover ');
                //�洢����
                $.tplComponentPictureCarouselSetting.memoList.moreColor = color;
                $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                $.common.regain();
            }catch(e){
               
            }
        },

        //������ϸ��ͣ��ɫ
        setMoreHoverColor:function(color){
            try{
                var id = selectedElementInfo.get("id");
                $.tplComponentPictureCarouselSetting.setCss(color,'color','',' .picturegroup .picture-holder li i .content-area a:hover ',' \.picturegroup \.picture\-holder li i \.content\-area a:hover ');
                //�洢����
                $.tplComponentPictureCarouselSetting.memoList.moreHoverColor = color;
                $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                $.common.regain();
            }catch(e){
                
            }
        },
        //������ϸ��ʽ
        setMoreFont:function(event){
            try{
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var name = $(obj).attr('name');
                var value = $(obj).attr('value');
                if($(obj).hasClass('active')){
                    $.tplComponentPictureCarouselSetting.setCss(value,name,name.split('-')[0]+'\-'+name.split('-')[1],' .picturegroup .picture-holder li i .content-area a.more ',' \.picturegroup \.picture\-holder li i \.content\-area a\.more ');
                    //�洢����
                    $.tplComponentPictureCarouselSetting.memoList[name] = value;
                }else{
                    $.tplComponentPictureCarouselSetting.setCss('normal',name,name.split('-')[0]+'\-'+name.split('-')[1],' .picturegroup .picture-holder li i .content-area a.more ',' \.picturegroup \.picture\-holder li i \.content\-area a\.more ');
                    $.tplComponentPictureCarouselSetting.memoList[name] = '';
                    $(obj).removeClass('active');
                    
                }
                $('.'+id+"_memoinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList)); 
                $.common.regain();  
            }catch(e){
                
            }
        },
        //���������»���
        setMoreUnderline:function(event){
            try{
                var id = selectedElementInfo.get("id");
                var obj = event.data.obj;
                var name = $(obj).attr('name');
                var value = $(obj).attr('value');
                if($(obj).hasClass('active')){
                    $.tplComponentPictureCarouselSetting.setCss(value,name,name.split('-')[0]+'\-'+name.split('-')[1],' .picturegroup .picture-holder li i .content-area a:hover ',' \.picturegroup \.picture\-holder li i \.content\-area a:hover ');
                    //�洢����
                    $.tplComponentPictureCarouselSetting.memoList[name] = value;
                }else{
                    $.tplComponentPictureCarouselSetting.setCss('none',name,name.split('-')[0]+'\-'+name.split('-')[1],' .picturegroup .picture-holder li i .content-area a:hover ',' \.picturegroup \.picture\-holder li i \.content\-area a:hover ');
                    $.tplComponentPictureCarouselSetting.memoList[name] = '';
                    $(obj).removeClass('active');
                    
                }
                $('.'+id+"_memoinfo").text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                $.common.regain();   
            }catch(e){
                
            }
        },
        //----------------------------------------------------ժҪ���ý���---------------------------------------------------------
        //--------------------------------------------------------��ʼ������-----------------------------------------------------------------------
        //��ʼ���Ҳ�˵�
        setPage: function() {
            try {
                var id = selectedElementInfo.get("id");

                //��ֹ������ת
                //$.tplComponentPictureCarouselSetting.offLink({data:{obj:$('<div></div>').get(0)}});

                //----------------------------------------------�ֲ�����------------------------------------------------------------
                //͸����
                $('#opacity').val($.tplComponentPictureCarouselSetting.mainDatas.opacity);
                //���ӵ�����ʽ
                $('#linkTarget .component-radio .radio-checked').removeClass('active');
                $('#linkTarget .component-radio[_target="' + $.tplComponentPictureCarouselSetting.mainDatas.linkTarget + '"] .radio-checked').addClass('active');
                //��������λ��
                $('#titleAreaPositionButton .component-radio .radio-checked').removeClass('active');
                $('#titleAreaPositionButton .component-radio[data="' + $.tplComponentPictureCarouselSetting.mainDatas.titleAreaPosition + '"] .radio-checked').addClass('active');
                
                setTimeout(function(){
                    $.tplComponentPictureCarouselSetting.setTitleAreaPosition({ data: { obj:  $('#titleAreaPositionButton .component-radio[data="' + $.tplComponentPictureCarouselSetting.mainDatas.titleAreaPosition + '"]').get(0),flag:true} });
                },30);
                
                //�������򱳾���ɫ
                if($.tplComponentPictureCarouselSetting.mainDatas['background-color']){
                    $('#titleAreaBgColor').spectrum("set", $.tplComponentPictureCarouselSetting.mainDatas['background-color']);
                }else{
                    $('#titleAreaBgColor').spectrum("set", 'transparent');
                }
                
                //---------------------------------------------��������--------------------------------------------------------------

                //��ʼ�����
                $('#width').val($.tplComponentPictureCarouselSetting.baseList.width);
                
                //��ʼ���߶�
                if ($('#' + id + ' .picturegroup:visible').length > 0) {
                    $('#height').val($.tplComponentPictureCarouselSetting.baseList.height);
                } else {
                    $('#height').val($('#' + id + ' .picturecarousel-icon-bg').attr('_value') + ' ' + $('#' + id + ' .picturecarousel-icon-bg').attr('unit'));
                }

                //��ʼ��ˮƽ���밴ť
                $('#align .align-img[value="' + $.tplComponentPictureCarouselSetting.baseList.align + '"]').addClass('active').siblings('.align-img').removeClass('active');

                //��ֱ����
                $('#verticalAlign .vertical-bg[value="' + $.tplComponentPictureCarouselSetting.baseList['vertical-align'] + '"]').addClass("active").siblings('.vertical-bg').removeClass('active');

                //�߿���ʽ
                $("#borderStyle li[value='" + $.tplComponentPictureCarouselSetting.baseList['border-style'] + "']").addClass('active').siblings('li').removeClass('active');
                //���ֱ߿���
                $("#borderWidth").val($.tplComponentPictureCarouselSetting.baseList['border-width']);
                //�߿���ɫ
                if ($.tplComponentPictureCarouselSetting.baseList['border-color']) {
                    $("#borderColor").spectrum("set", $.tplComponentPictureCarouselSetting.baseList['border-color']);
                } else {
                    $("#borderColor").spectrum("set", 'transparent');
                }
                //------------------------------���Ҽ�ͷ����----------------------------------------------------------------------------------------------------------------------
                //���Ұ�ť ��ʾ/����
                $('#sideButtonSwitch .component-radio .radio-checked').removeClass('active');
                $('#sideButtonSwitch .component-radio[value="' + $.tplComponentPictureCarouselSetting.mainDatas.sideButtonSwitch + '"] .radio-checked').addClass('active');
                $.tplComponentPictureCarouselSetting.setSideButtonSwitch({ data: { obj:  $('#sideButtonSwitch .component-radio[value="' + $.tplComponentPictureCarouselSetting.mainDatas.sideButtonSwitch + '"]').get(0),flag:true} });
                
                //���Ҽ�ͷλ��
                $('#sideButtonPosition').val($.tplComponentPictureCarouselSetting.mainDatas.sideButtonPosition);
                 $.tplComponentPictureCarouselSetting.setSideButtonPosition(true);

                //���Ҽ�ͷ͸����
                $('#sideButtonOpacity').val($.tplComponentPictureCarouselSetting.mainDatas.sideButtonOpacity);


               
                if($.tplComponentPictureCarouselSetting.mainDatas.sideButtonSwitch==='off'){
                     //���Ұ�ť ������ʾ
                    if($.tplComponentPictureCarouselSetting.mainDatas.sideHoverSwitch==='on'){
                        $('#sideHoverButton').addClass('active');
                    }else{
                        $('#sideHoverButton').removeClass('active');
                    }

                    $.tplComponentPictureCarouselSetting.setSideButtonHover({data:{obj:$('#sideHoverButton').get(0),flag:true}});
                }else{
                    //���Ҽ�ͷ����͸����
                    if($.tplComponentPictureCarouselSetting.mainDatas.sideHoverOpacity==='on'){
                        $('#sideHoverOpacityButton').addClass('active');
                        $('#sideButtonHoverOpacity').removeAttr('disabled');
                        $('#sideButtonHoverOpacity').prev('label').removeClass('no-edit');
                        $('#sideButtonHoverOpacity').val($.tplComponentPictureCarouselSetting.mainDatas.sideButtonHoverOpacity);
                    }else{
                        $('#sideHoverOpacityButton').removeClass('active');
                        $('#sideButtonHoverOpacity').attr('disabled','disabled');
                        $('#sideButtonHoverOpacity').prev('label').addClass('no-edit');
                        $('#sideButtonHoverOpacity').val('');
                    }
                }
                //���ͷ
                this.readDeafultPreNextData(true);
                // �Ҽ�ͷ
                this.readDeafultPreNextData();

                //------------------------------�����л�---------------------------------------------------------------------------------------------------------------------------
                //������ʾ
                if ($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonSwitch === 'off') {
                    $('#bottomButtonSwitch').css('left', '-30px');
                    $('#'+id+' .picturegroup .fast-access-holder').hide();
                } else {
                    $('#bottomButtonSwitch').css('left', '0px');
                    $('#'+id+' .picturegroup .fast-access-holder').show();
                }

                //�����л���ʽ
                $('#bottomButtonIcon').removeAttr('class').addClass('select-img').addClass($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonStyle);
                $.tplComponentPictureCarouselSetting.setBottomButtonStyle($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonStyle,true);
                
                //�����л� ˮƽ����
                $('#bottomButtonAlign .align-img[value="' + $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonAlign + '"]').addClass('active').siblings('.align-img').removeClass('active');
                $.tplComponentPictureCarouselSetting.setBottomButtonAlign({ data: { obj: $('#bottomButtonAlign .align-img.active').get(0),flag:true } });
                //�����л� λ��
                $('#bottomButtonPosition .component-radio .radio-checked').removeClass('active');
                $('#bottomButtonPosition .component-radio[data="' + $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonPosition + '"] .radio-checked').addClass('active');
                
                //�����л� ��ʼ����ɫ
                if ($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonBgColor) {
                    $("#bottomButtonBgColor").spectrum("set", $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonBgColor);
                } else {
                    $("#bottomButtonBgColor").spectrum("set", '#ccc');
                }
                //�����л� ѡ�б���ɫ
                if ($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonActiveBgColor) {
                    $("#bottomButtonActiveBgColor").spectrum("set", $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonActiveBgColor);
                } else {
                    $("#bottomButtonActiveBgColor").spectrum("set", '#555');
                }
                //�����л� ������ɫ
                if ($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonColor) {
                    $("#bottomButtonColor").spectrum("set", $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonColor);
                } else {
                    $("#bottomButtonColor").spectrum("set", '#fff');
                }
                //�����л� ѡ��������ɫ
                if ($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonActiveColor) {
                    $("#bottomButtonActiveColor").spectrum("set", $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonActiveColor);
                } else {
                    $("#bottomButtonActiveColor").spectrum("set", '#fff');
                }
                //�����л� �߿���ɫ
                if ($.tplComponentPictureCarouselSetting.mainDatas.bottomButtonBorderColor) {
                    $("#bottomButtonBorderColor").spectrum("set", $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonBorderColor);
                } else {
                    $("#bottomButtonBorderColor").spectrum("set", 'transparent');
                }

                //-----------------��������------------------------------------------------------------------------------------------------------
                //������ʾ
                if ($.tplComponentPictureCarouselSetting.titleList.titleSwitch === 'off') {
                    $('#titleSwitch').css('left', '-30px');
                    $('#cmsTitle .title-button .title-radio').removeClass('active');
                    $('#cmsTitle .title-button label').addClass('no-edit');
                    $('#cmsTitle .title-checkbox .title-check').removeClass('active');
                } else {
                    $('#titleSwitch').css('left', '0px');
                    $('#cmsTitle .title-checkbox .title-check').addClass('active');
                    $('#cmsTitle .title-button label').removeClass('no-edit');
                    if($.tplComponentPictureCarouselSetting.cmsDatas.docTitle)
                    $('#cmsTitle .title-button .title-radio[doc="'+$.tplComponentPictureCarouselSetting.cmsDatas.docTitle+'"]').addClass('active').parent('.list').siblings('.list').children('.title-radio').removeClass('active');
                }

                //����
                $('#titleFontFamily').text($.tplComponentPictureCarouselSetting.titleList['font-family']);
                //�����С
                $('#titleFontSize').val($.tplComponentPictureCarouselSetting.titleList['font-size']);
                //�и�
                $('#titleLineHeight').val($.tplComponentPictureCarouselSetting.titleList['line-height']);
                //ˮƽ���밴ť
                $('#titleAlignButtons .align-img[value="'+$.tplComponentPictureCarouselSetting.titleList['text-align']+'"]').addClass('active').siblings('.align-img').removeClass('active');

                //������ɫ
                if($.tplComponentPictureCarouselSetting.titleList.color){
                    $('#titleFontColor').spectrum("set", $.tplComponentPictureCarouselSetting.titleList.color);
                }else{
                    $('#titleFontColor').spectrum("set", 'transparent');
                }

                //������ͣ��ɫ
                if($.tplComponentPictureCarouselSetting.titleList.hoverColor){
                    $('#titleHoverColor').spectrum("set", $.tplComponentPictureCarouselSetting.titleList.hoverColor);
                }else{
                    $('#titleHoverColor').spectrum("set", 'transparent');
                }
                
                //�����ϸ
                if($.tplComponentPictureCarouselSetting.titleList['font-weight']){
                    $('#titleWeight[value="'+$.tplComponentPictureCarouselSetting.titleList['font-weight']+'"]').addClass('active');
                }else{
                    $('#titleWeight').removeClass('active');
                }
                //������ʽ
                if($.tplComponentPictureCarouselSetting.titleList['text-decoration']){
                    $('#titleDecoration[value="'+$.tplComponentPictureCarouselSetting.titleList['text-decoration']+'"]').addClass('active');
                }else{
                    $('#titleDecoration').removeClass('active');
                }
                
                //-------------------------------ժҪ����---------------------------------------------------------------------------------
                //ժҪ��ʾ
                if ($.tplComponentPictureCarouselSetting.memoList.memoSwitch === 'off') {
                    $('#memoSwitch').css('left', '-30px');
                    $('#cmsTitle .content-checkbox .content-check').removeClass('active');
                    $.tplComponentPictureCarouselSetting.cmsDatas.docContent = '';
                    $('.' + id + "_cmsdatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.cmsDatas));
                } else {
                    $('#memoSwitch').css('left', '0px');
                    $('#cmsTitle .content-checkbox .content-check[doc="memo"]').addClass('active');
                    $.tplComponentPictureCarouselSetting.cmsDatas.docContent = 'memo';
                    $('.' + id + "_cmsdatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.cmsDatas));
                }

                //��ϸ��ť
                if ($.tplComponentPictureCarouselSetting.memoList.more === 'off') {
                    $('#moreButton').css('left', '-30px');
                    $('#'+id+' .picturegroup .picture-holder li i .content-area a').remove('.more');
                } else {
                    $('#moreButton').css('left', '0px');
                    $('#'+id+' .picturegroup .picture-holder li i .content-area a').remove('.more');
                    var contents = $('#'+id+' .picturegroup .picture-holder li i .content-area').get();
                    $.each(contents,function(index,content){
                        if($.trim($(content).text()).length>0){
                            $(content).append('<a href="'+$(content).attr('_url')+'" target="_blank" class="more">[��ϸ]</a>');
                        }
                    });
                }
                $('#'+id).attr('_more',$.tplComponentPictureCarouselSetting.memoList.more);
               
                //��������
                if ($.tplComponentPictureCarouselSetting.memoList.tab === 'off') {
                    $('#tabButton').css('left', '-30px');
                    $('#'+id+' .picturegroup .picture-holder li i .content-area').removeClass('indent');
                } else {
                    $('#tabButton').css('left', '0px');
                    $('#'+id+' .picturegroup .picture-holder li i .content-area').addClass('indent');
                }
                //����
                $('#memoFontFamily').text($.tplComponentPictureCarouselSetting.memoList['font-family']);
                //�����С
                $('#memoFontSize').val($.tplComponentPictureCarouselSetting.memoList['font-size']);
                //�и�
                $('#memoLineHeight').val($.tplComponentPictureCarouselSetting.memoList['line-height']);
                //ˮƽ���밴ť
                $('#memoAlignButtons .align-img[value="'+$.tplComponentPictureCarouselSetting.memoList['text-align']+'"]').addClass('active').siblings('.align-img').removeClass('active');

                //ժҪ��ɫ
                if($.tplComponentPictureCarouselSetting.memoList.color){
                    $('#memoFontColor').spectrum("set", $.tplComponentPictureCarouselSetting.memoList.color);
                }else{
                    $('#memoFontColor').spectrum("set", 'transparent');
                }

                //��ϸ��ɫ
                if($.tplComponentPictureCarouselSetting.memoList.moreColor){
                    $('#moreColor').spectrum("set", $.tplComponentPictureCarouselSetting.memoList.moreColor);
                }else{
                    $('#moreColor').spectrum("set", 'transparent');
                }

                //��ϸ��ͣ��ɫ
                if($.tplComponentPictureCarouselSetting.memoList.moreHoverColor){
                    $('#moreHoverColor').spectrum("set", $.tplComponentPictureCarouselSetting.memoList.moreHoverColor);
                }else{
                    $('#moreHoverColor').spectrum("set", 'transparent');
                }

                
                //�����ϸ
                if($.tplComponentPictureCarouselSetting.memoList['font-weight']){
                    $('#moreWeight[value="'+$.tplComponentPictureCarouselSetting.memoList['font-weight']+'"]').addClass('active');
                }else{
                    $('#moreWeight').removeClass('active');
                }
                //������ʽ
                if($.tplComponentPictureCarouselSetting.memoList['text-decoration']){
                    $('#moreDecoration[value="'+$.tplComponentPictureCarouselSetting.memoList['text-decoration']+'"]').addClass('active');
                }else{
                    $('#moreDecoration').removeClass('active');
                }

            } catch (e) {
                
            }
        },
        //��ʼ���Ҳද̬����
        initDynamicDatas:function(){
            if($.tplComponentPictureCarouselSetting.cmsDatas.channelName){
                $("#cmsColumnsFont .selectlmLi").eq(0).find('.selectLmText').html($.tplComponentPictureCarouselSetting.cmsDatas.channelName);
                $("#cmsColumnsFont").show();
            }else{
                $("#cmsColumnsFont").hide();
            }
            //���ø������
            $('#cmsDocNum').val($.tplComponentPictureCarouselSetting.cmsDatas.docNum);
            //���ø������
            $('#cmsDocType .type-check').removeClass('active');
            if($.tplComponentPictureCarouselSetting.cmsDatas.docType.search(/0/)>=0){
                $('#cmsDocType .type-check[value="0|1|2|3|4|5"]').addClass('active');
            }
            if($.tplComponentPictureCarouselSetting.cmsDatas.docType.search(/8/)>=0){
                $('#cmsDocType .type-check[value="8"]').addClass('active');
            }
            if($.tplComponentPictureCarouselSetting.cmsDatas.docType.search(/9/)>=0){
                $('#cmsDocType .type-check[value="9"]').addClass('active');
            }
            //���ø����ʾλ��
            $('#cmsDocPos').val(Number($.tplComponentPictureCarouselSetting.cmsDatas.docPos)+1);
            //���÷�������
            $('#cmsBatchRule .batch-radio[batch="'+$.tplComponentPictureCarouselSetting.cmsDatas.batchRule+'"]').addClass('active').siblings('.batch-radio').removeClass('active');
            //����ͼƬ����
            if($.tplComponentPictureCarouselSetting.cmsDatas.docTitle){
                $('#cmsTitle .title-checkbox .title-check').addClass('active');
                $('#cmsTitle .title-button label').removeClass('no-edit');
                $('#cmsTitle .title-button .title-radio[doc="'+$.tplComponentPictureCarouselSetting.cmsDatas.docTitle+'"]').addClass('active').parent('.list').siblings('.list').children('.title-radio').removeClass('active');
            }else{
                $('#cmsTitle .title-button .title-radio').removeClass('active');
                $('#cmsTitle .title-button label').addClass('no-edit');
                $('#cmsTitle .title-checkbox .title-check').removeClass('active');
            }
            //����ͼƬ����
            if($.tplComponentPictureCarouselSetting.cmsDatas.docContent){
                $('#cmsTitle .content-checkbox .content-check').addClass('active');
                $('#cmsContentNum').parent('label').removeClass('no-edit');
                //�������ĳ���
                $('#cmsContentNum').val($.tplComponentPictureCarouselSetting.cmsDatas.contentNum);
            }else{
                $('#cmsTitle .content-checkbox .content-check').removeClass('active');
                $('#cmsContentNum').parent('label').addClass('no-edit');
                $('#cmsContentNum').val('');
            }
           
        },
        //��ʼ���Ҳ�˵� ���ص�
        initSetting:function(){
            var id = selectedElementInfo.get('id');
            //��ȡ�������ݼ���
            $.tplComponentPictureCarouselSetting.baseList = $.parseJSON($('.'+id+'_baseinfo').text());
            //��ȡ�������ݼ���
            $.tplComponentPictureCarouselSetting.titleList = $.parseJSON($('.'+id+'_titleinfo').text());
            //��ȡժҪ���ݼ���
            $.tplComponentPictureCarouselSetting.memoList = $.parseJSON($('.'+id+'_memoinfo').text());
            //��ȡ�ֲ����ݼ���
            $.tplComponentPictureCarouselSetting.mainDatas = $.parseJSON($('.' + id + '_maindatas').text());
            //��ȡ��̬����
            $.tplComponentPictureCarouselSetting.cmsDatas = $.parseJSON($.trim($('.' + id + '_cmsdatas').text()));
            //��ʼ���Ҳ�˵�
            $.tplComponentPictureCarouselSetting.setPage();
            //��ʼ���Ҳද̬����
            $.tplComponentPictureCarouselSetting.initDynamicDatas();

            $.tplComponentPictureCarouselSetting.setImages(true);
        },
        //ͬ���༭��ı���
        setTitleContent:function(obj){
            var id = selectedElementInfo.get('id');
            var html = $(obj).text();
            var index = $('#'+id+' .picturegroup.static li').index($(obj).parents('li'));
            $.tplComponentPictureCarousel.pcDatas.all[index].name = html;
            $.tplComponentPictureCarousel.pcDatas.local[index].name = html;
            $('.'+id+"_pcdatas").text(JSON.stringify($.tplComponentPictureCarousel.pcDatas));
        },
        //ͬ���༭���ժҪ
        setMemoContent:function(obj){
            var id = selectedElementInfo.get('id');
            var html = $(obj).children('a').text('').parent().text();
            var index = $('#'+id+' .picturegroup.static li').index($(obj).parents('li'));
            $.tplComponentPictureCarousel.pcDatas.all[index].content = html;
            $.tplComponentPictureCarousel.pcDatas.local[index].content = html;
            $('.'+id+"_pcdatas").text(JSON.stringify($.tplComponentPictureCarousel.pcDatas));
        }
        //-----------------------------------------------------------------��ʼ����������-------------------------------------------------------------
    };
})(jQuery);


$(function() {
    try {

        if ($('head').find('script[name=systemJs]').length > 0) {
            var id = selectedElementInfo.get('id');
            var pics = $('.tpl-component-2016-01-09-picturecarousel').get();
                var isInit = true;
                $.each(pics,function(index,pic){
                    var _id = $(pic).attr('id');
                    if(_id===id){
                        isInit = false;
                        return false;
                    }
                });
            if(isInit){
                $.each(pics,function(index,pic){
                    id = $(pic).attr('id');
                    //���������ʾ
                    $(pic).off('mouseenter',$.common.mEShowBorder).on('mouseenter',{obj:pic},$.common.mEShowBorder);
                    //����Ƴ�����
                    $(pic).off('mouseleave',$.common.mLHideBorder).on('mouseleave',{obj:pic},$.common.mLHideBorder);
                    //��ʼ�ֲ�
                    
                    $.tplComponentPictureCarousel.initPlay(id);
                    
                    //���Ԥ����ť�����¼�
                    $('.icon-yul').off('click', $.tplComponentPictureCarouselSetting.offManagePic).on('click', { obj: $('.icon-yul').get(0) }, $.tplComponentPictureCarouselSetting.offManagePic);
                                
                });
            }else{
                
                if (id === "workspace" || id === "workspace-body") {
                    return;
                }

                $(".pre-scroll").mCustomScrollbar("destroy");
                $(".next-scroll").mCustomScrollbar("destroy");
                $('.pre-scroll').mCustomScrollbar({
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
                $('.next-scroll').mCustomScrollbar({
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

                var serverPath = $.common.getComponetIMagesUrl(id); 

                var jsonData = [{
                        name: 'Ĭ��',
                        childElement: "",
                        childIndexElement: " .tpl-component-2016-01-09-picturecarousel-change",
                        classStyle: 'tpl-component-2016-01-09-picturecarousel-style',
                        className: '',
                        url: serverPath + '/images/default_pic0.png',
                        fileName: 'index',
                        id: id
                    }, {
                        name: '���⡢ժҪ��ͼ��',
                        childElement: "",
                        childIndexElement: " .tpl-component-2016-01-09-picturecarousel-change",
                        classStyle: 'tpl-component-2016-01-09-picturecarousel-style',
                        className: 'tpl-component-2016-01-09-picturecarousel-style1',
                        url: serverPath + '/images/default_pic1.png',
                        fileName: 'titleAreaOut',
                        id: id

                    }, {
                        name: '�����л������',
                        childElement: "",
                        childIndexElement: " .tpl-component-2016-01-09-picturecarousel-change",
                        classStyle: 'tpl-component-2016-01-09-picturecarousel-style',
                        className: 'tpl-component-2016-01-09-picturecarousel-style2',
                        url: serverPath + '/images/default_pic2.png',
                        fileName: 'bottomButtonOut',
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
            var hiddenCb = $.tplComponentPictureCarouselSetting.initSetting;
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
            counstomStyle.init(jsonData, 1, callback, hiddenCb, targetFg, '�ֲ�');
            var className = $('#'+id).attr('class').split(' ')[0];
            // ������е��û�����������Դ
            var sqluserArr = counstomStyle.getUserStyleData(className);
            counstomStyle.formatUserarr(sqluserArr.innerStyleByClassName, function(userarr) {
                // ��ʼ���û����
                counstomStyle.init(userarr, 0, callback, hiddenCb, targetFg, '�ֲ�');
            });
            // ������ý���
                
                
                //�ֲ����
                var pic = $("#" + id).get(0);

                //���������ʾ
                $(pic).off('mouseenter', $.common.mEShowBorder).on('mouseenter', { obj: pic }, $.common.mEShowBorder);
                //����Ƴ�����
                $(pic).off('mouseleave', $.common.mLHideBorder).on('mouseleave', { obj: pic }, $.common.mLHideBorder);
                //�������ʾ
                $(pic).off('click', $.common.cShowBorder).on('click', { obj: pic }, $.common.cShowBorder);
               
                

                //---------------------------------------���ݳ�ʼ��-----------------------------------------------------------------------------------------------
                    
                    //��ȡ�������ݼ���
                    $.tplComponentPictureCarouselSetting.baseList = $.parseJSON($('.'+id+'_baseinfo').text());
                    //��ȡ�������ݼ���
                    $.tplComponentPictureCarouselSetting.titleList = $.parseJSON($('.'+id+'_titleinfo').text());
                    //��ȡժҪ���ݼ���
                    $.tplComponentPictureCarouselSetting.memoList = $.parseJSON($('.'+id+'_memoinfo').text());
                    //��ȡ�ֲ����ݼ���
                     $.tplComponentPictureCarouselSetting.mainDatas = $.parseJSON($('.' + id + '_maindatas').text());
                    //��ʼ������������ɫ
                    $.tplComponentPictureCarouselSetting.initColor('titleAreaBgColor',$.tplComponentPictureCarouselSetting.setTitleAreaBgColor);
                    //�߿���ɫ
                    $.tplComponentPictureCarouselSetting.initColor('borderColor',$.tplComponentPictureCarouselSetting.setBorderColor);


                    //�����л� ��ʼ����ɫ
                    $.tplComponentPictureCarouselSetting.initColor('bottomButtonBgColor',$.tplComponentPictureCarouselSetting.setBottomButtonBgColor);
                    //�����л� ѡ�б���ɫ
                    $.tplComponentPictureCarouselSetting.initColor('bottomButtonActiveBgColor',$.tplComponentPictureCarouselSetting.setBottomButtonActiveBgColor);
                    //�����л� ������ɫ
                    $.tplComponentPictureCarouselSetting.initColor('bottomButtonColor',$.tplComponentPictureCarouselSetting.setBottomButtonColor);
                    //�����л� ѡ��������ɫ
                    $.tplComponentPictureCarouselSetting.initColor('bottomButtonActiveColor',$.tplComponentPictureCarouselSetting.setBottomButtonActiveColor);
                    //�����л� �߿���ɫ
                    $.tplComponentPictureCarouselSetting.initColor('bottomButtonBorderColor',$.tplComponentPictureCarouselSetting.setBottomButtonBorderColor);
                    //�����л� �߿�ѡ����ɫ
                    //$.tplComponentPictureCarouselSetting.initColor('bottomButtonActiveBorderColor',$.tplComponentPictureCarouselSetting.setBottomButtonActiveBorderColor);

                    //��ʼ��������ɫ
                    $.tplComponentPictureCarouselSetting.initColor('titleFontColor',$.tplComponentPictureCarouselSetting.setTitleColor);
                    //��ʼ��������ͣ��ɫ
                    $.tplComponentPictureCarouselSetting.initColor('titleHoverColor',$.tplComponentPictureCarouselSetting.setTitleHoverColor);
                   

                    //��ʼ��ժҪ��ɫ
                    $.tplComponentPictureCarouselSetting.initColor('memoFontColor',$.tplComponentPictureCarouselSetting.setMemoColor);
                    //��ʼ����ϸ��ɫ
                    $.tplComponentPictureCarouselSetting.initColor('moreColor',$.tplComponentPictureCarouselSetting.setMoreColor);
                    //��ʼ����ϸ��ͣ��ɫ
                    $.tplComponentPictureCarouselSetting.initColor('moreHoverColor',$.tplComponentPictureCarouselSetting.setMoreHoverColor);

                //---------------------------�ֲ�����----------------------------------------------------------------------------------------
                //�ϴ���ť
                $("#upImg").off('click', $.tplComponentPictureCarouselSetting.manageImage).on('click', $.tplComponentPictureCarouselSetting.manageImage);
                //��ͼƬʱ��ʾ�ı���
                $("#" + id + " .picturecarousel-icon-bg .picturecarousel-icon").off('click', $.tplComponentPictureCarouselSetting.manageImage).on('click', $.tplComponentPictureCarouselSetting.manageImage);
                //���Ԥ����ť�����¼�
                $('.icon-yul').off('click', $.tplComponentPictureCarouselSetting.offManagePic).on('click', { obj: $('.icon-yul').get(0) }, $.tplComponentPictureCarouselSetting.offManagePic);
                //��������λ��
                $('#titleAreaPositionButton .component-radio').off('click').on('click', function(event) {
                    if (!$(this).children('.radio-checked').hasClass('active')) {
                        $(this).children('.radio-checked').addClass('active');
                        $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
                        $.tplComponentPictureCarouselSetting.setTitleAreaPosition({data:{obj:this}});
                    }
                });
              
                $('#titleAreaPositionButton .radio-text').off('click').on('click', function(event) {
                    if (!$(this).prev('.component-radio').children('.radio-checked').attr('class') || $(this).prev('.component-radio').children('.radio-checked').attr('class').search(/active/) < 0) {
                        $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
                        $(this).prev('.component-radio').children('.radio-checked').addClass('active');
                        $.tplComponentPictureCarouselSetting.setTitleAreaPosition({data:{obj:$(this).prev('.component-radio').get(0)}});
                    }
                });
                //ͼƬ͸����
                $('#opacity').off('blur', $.tplComponentPictureCarouselSetting.setImageOpacity).on('blur', { obj: $('#opacity').get(0) }, $.tplComponentPictureCarouselSetting.setImageOpacity);
                //��ת��ʽ
                $('#linkTarget .component-radio').off('click').on('click', function(event) {
                    if (!$(this).children('.radio-checked').hasClass('active')) {
                        $(this).children('.radio-checked').addClass('active');
                        $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
                        $.tplComponentPictureCarouselSetting.setLinkTarget($(this).attr('_target'));
                    }
                });
              
                $('#linkTarget .radio-text').off('click').on('click', function(event) {
                    if (!$(this).prev('.component-radio').children('.radio-checked').attr('class') || $(this).prev('.component-radio').children('.radio-checked').attr('class').search(/active/) < 0) {
                        $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
                        $(this).prev('.component-radio').children('.radio-checked').addClass('active');
                        $.tplComponentPictureCarouselSetting.setLinkTarget($(this).prev('.component-radio').attr('_target'));
                    }
                });

                //---------------------------�ֲ����ý���------------------------------------------------------------------------------------

                //---------------------------------------��������-------------------------------------------------------------------------------------------------
                //������
                $("#width").off('blur', $.tplComponentPictureCarouselSetting.setWidth).on('blur', $.tplComponentPictureCarouselSetting.setWidth);
                var widthUnits = $('#widthUnits li').get();
                if (widthUnits && widthUnits.length > 0) {
                    $.each(widthUnits, function(index, unit) {
                        $(unit).off('click', $.tplComponentPictureCarouselSetting.setWidthUnit).on('click', { obj: unit }, $.tplComponentPictureCarouselSetting.setWidthUnit);
                    });
                }
                //����߶�
                $("#height").off('blur', $.tplComponentPictureCarouselSetting.setHeight).on('blur', $.tplComponentPictureCarouselSetting.setHeight);
                
                
                //�߾��
                var distances = $('#distance input.select-content').get();
                if (distances && distances.length > 0) {
                    $.each(distances, function(index, distance) {
                        $(distance).val($.tplComponentPictureCarouselSetting.baseList[$(distance).attr('distance')]);
                        $(distance).off('blur', $.tplComponentPictureCarouselSetting.setDistance).on('blur', { obj: distance }, $.tplComponentPictureCarouselSetting.setDistance);
                    });
                }

                //����ˮƽ����
                var alignButtons = $("#align .align-img").get();
                if(alignButtons && alignButtons.length>0){
                    $.each(alignButtons,function(index, btn) {
                        $(btn).off('click',$.tplComponentPictureCarouselSetting.setAlign).on('click', {obj:btn},$.tplComponentPictureCarouselSetting.setAlign);
                    });
                }
                
                //�ֲ���ֱ���밴ť
                var verticalAligns = $('#verticalAlign .vertical-bg').get();
                if (verticalAligns && verticalAligns.length > 0) {
                    $.each(verticalAligns, function(index, btn) {
                        $(btn).off('click', $.tplComponentPictureCarouselSetting.setVerticalAlign).on('click', { obj: btn }, $.tplComponentPictureCarouselSetting.setVerticalAlign);
                        $(btn).off('click', $.tplSidebar.setActiveTwo).on('click', { obj: btn }, $.tplSidebar.setActiveTwo);
                    });
                }

                //�߿���ʽ
                var borderStyles = $("#borderStyle li").get();
                if (borderStyles && borderStyles.length > 0) {
                    $.each(borderStyles, function(index, btn) {
                        $(btn).off('click', $.tplComponentPictureCarouselSetting.setBorderStyle).on('click', { obj: btn }, $.tplComponentPictureCarouselSetting.setBorderStyle);
                    });
                }

                //�߿�������
                $('#borderWidth').off('blur', $.tplComponentPictureCarouselSetting.setBorderWidth).on('blur', $.tplComponentPictureCarouselSetting.setBorderWidth);

                //---------------------------------------���Ҽ�ͷ����---------------------------------------------------------------------------------------------

                //���Ұ�ť ��ʾ/����
                $('#sideButtonSwitch .component-radio').off('click').on('click', function(event) {
                    if (!$(this).children('.radio-checked').attr('class') || $(this).children('.radio-checked').attr('class').search(/active/) < 0) {
                        $(this).children('.radio-checked').addClass('active');
                        $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
                        $.tplComponentPictureCarouselSetting.setSideButtonSwitch({data:{obj:this}});
                    }
                });
              
                $('#sideButtonSwitch .radio-text').off('click').on('click', function(event) {
                    if (!$(this).prev('.component-radio').children('.radio-checked').attr('class') || $(this).prev('.component-radio').children('.radio-checked').attr('class').search(/active/) < 0) {
                        $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
                        $(this).prev('.component-radio').children('.radio-checked').addClass('active');
                        $.tplComponentPictureCarouselSetting.setSideButtonSwitch({data:{obj:$(this).prev('.component-radio').get(0)}});
                    }
                });

                //���Ҽ�ͷλ������
                $('#sideButtonPosition').off('blur',$.tplComponentPictureCarouselSetting.setSideButtonPosition).on('blur',$.tplComponentPictureCarouselSetting.setSideButtonPosition);

                //���Ҽ�ͷ͸��������
                $('#sideButtonOpacity').off('blur', $.tplComponentPictureCarouselSetting.setSideButtonOpacity).on('blur', { obj: $('#sideButtonOpacity').get(0) }, $.tplComponentPictureCarouselSetting.setSideButtonOpacity);
                //���Ҽ�ͷ����͸���ȿ���
                $('#sideHoverOpacityButton').off('click').on('click',function(){
                    $.tplSidebar.setActiveThree({data:{obj:this}});
                    if($(this).hasClass('active')){
                        $('#sideButtonHoverOpacity').removeAttr('disabled');
                        $('#sideButtonHoverOpacity').prev('label').removeClass('no-edit');
                        $('#sideButtonHoverOpacity').val($.tplComponentPictureCarouselSetting.mainDatas.sideButtonHoverOpacity);
                        $.tplComponentPictureCarouselSetting.mainDatas.sideButtonOpacity = 'on';
                        $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                        $.tplComponentPictureCarouselSetting.setSideButtonHoverOpacity({data:{obj:$('#sideButtonHoverOpacity').get(0)}});

                    }else{
                        $('#sideButtonHoverOpacity').attr('disabled','disabled');
                        $('#sideButtonHoverOpacity').prev('label').addClass('no-edit');
                        $('#sideButtonHoverOpacity').val('');
                        $.tplComponentPictureCarouselSetting.mainDatas.sideButtonOpacity = 'off';
                        $('.' + id + "_maindatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                        $.tplComponentPictureCarouselSetting.clearCss('opacity','',' .picturegroup:hover .left-access',' \.picturegroup:hover \.left\-access');
                        $.tplComponentPictureCarouselSetting.clearCss('opacity','',' .picturegroup:hover .right-access',' \.picturegroup:hover \.right\-access');
                        $.tplComponentPictureCarouselSetting.clearCss('filter','',' .picturegroup:hover .left-access',' \.picturegroup:hover \.left\-access');
                        $.tplComponentPictureCarouselSetting.clearCss('filter','',' .picturegroup:hover .right-access',' \.picturegroup:hover \.right\-access');
                    }
                });
                //���Ҽ�ͷ����͸��������
                $('#sideButtonHoverOpacity').off('blur', $.tplComponentPictureCarouselSetting.setSideButtonHoverOpacity).on('blur', { obj: $('#sideButtonHoverOpacity').get(0) }, $.tplComponentPictureCarouselSetting.setSideButtonHoverOpacity);

                //���Ҽ�ͷ������ʾ
                if($.tplComponentPictureCarouselSetting.mainDatas.sideButtonSwitch==='off'){
                    $('#sideHoverButton').off('click').on('click',function(){
                            $.tplSidebar.setActiveThree({data:{obj:this}});
                            $.tplComponentPictureCarouselSetting.setSideButtonHover({data:{obj:this}});
                    });
                }

                //---------------------------------------�����л�����---------------------------------------------------------------------------------------------
                //������ʾ �رհ�ť
                    
                $('#bottomButtonSwitch .close').off('click').on('click', function() {
                    $(this).parent('.slide-button').animate({ left: '-30px' }, 500, function() {
                        try {
                            $('#'+id+' .picturegroup .fast-access-holder').hide();
                            //�洢����
                            $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonSwitch = 'off';
                            $('.'+id+'_maindatas').text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                            $.common.regain();
                        } catch (e) {
                           
                        }
                    });
                });
                            
                //������ʾ ������ť
                            
                $('#bottomButtonSwitch .open').off('click').on('click', function() {
                    $(this).parent('.slide-button').animate({ left: '0px' }, 500, function() {
                        try {
                            $('#'+id+' .picturegroup .fast-access-holder').show();
                            //�洢����
                            $.tplComponentPictureCarouselSetting.mainDatas.bottomButtonSwitch = 'on';
                            $('.'+id+'_maindatas').text(JSON.stringify($.tplComponentPictureCarouselSetting.mainDatas));
                            $.common.regain();
                        } catch (e) {
                           
                        }
                    });
                });

                //������ʽ����¼�
                $('#bottomButtonIcon').off('click').on('click',function(){
                    if($(this).next('.select-img-options-holder').children('.select-img-options').hasClass('open')){
                        $(this).next('.select-img-options-holder').children('.select-img-options').removeClass('open');
                        $(this).css('border-color','#545454');
                    }else{
                        $(this).next('.select-img-options-holder').children('.select-img-options').addClass('open');
                        $(this).css('border-color','#12b4b1');
                    }
                });

               $('#bottomButtonIcon').next('.select-img-options-holder').find('.select-img-option').off('click').on('click',function(){
                    $('#bottomButtonIcon').removeAttr('class').addClass('select-img').addClass($(this).attr('data'));
                    $('#bottomButtonIcon').css('border-color','#545454');
                    $(this).parent('.select-img-options').removeClass('open');
                    $.tplComponentPictureCarouselSetting.setBottomButtonStyle($(this).attr('data'));
               });


                //�����л� ˮƽ����
                var bottomAlignButtons = $('#bottomButtonAlign .align-img').get();
                if (bottomAlignButtons && bottomAlignButtons.length > 0) {
                    $.each(bottomAlignButtons, function(index, btn) {
                        $(btn).off('click', $.tplComponentPictureCarouselSetting.setBottomButtonAlign).on('click', { obj: btn }, $.tplComponentPictureCarouselSetting.setBottomButtonAlign);
                    });
                }

                //�����л� ����λ��
                $('#bottomButtonPosition .component-radio').off('click').on('click', function(event) {
                    if (!$(this).children('.radio-checked').hasClass('active')) {
                        $(this).children('.radio-checked').addClass('active');
                        $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
                        $.tplComponentPictureCarouselSetting.setBottomButtonPosition({data:{obj:this}});
                    }
                });
              
                $('#bottomButtonPosition .radio-text').off('click').on('click', function(event) {
                    if (!$(this).prev('.component-radio').children('.radio-checked').attr('class') || $(this).prev('.component-radio').children('.radio-checked').attr('class').search(/active/) < 0) {
                        $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
                        $(this).prev('.component-radio').children('.radio-checked').addClass('active');
                        $.tplComponentPictureCarouselSetting.setBottomButtonPosition({data:{obj:$(this).prev('.component-radio').get(0)}});
                    }
                });

                //-----------------------------------------------------------��������-----------------------------------------------------------------------------------------------
                //���� �رհ�ť
                    
                $('#titleSwitch .close').off('click').on('click', function() {
                    $(this).parent('.slide-button').animate({ left: '-30px' }, 500, function() {
                        try {
                            //�洢����
                            $.tplComponentPictureCarouselSetting.titleList.titleSwitch = 'off';
                            $.tplComponentPictureCarouselSetting.setImages();
                            $('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList));
                            $('#cmsTitle .title-button .title-radio').removeClass('active');
                            $('#cmsTitle .title-button label').addClass('no-edit');
                            $('#cmsTitle .title-checkbox .title-check').removeClass('active');
                            $.common.regain();
                        } catch (e) {
                            
                        }
                    });
                });
                            
                //���� ������ť
                            
                $('#titleSwitch .open').off('click').on('click', function() {
                    $(this).parent('.slide-button').animate({ left: '0px' }, 500, function() {
                        try {
                            //�洢����
                            $.tplComponentPictureCarouselSetting.titleList.titleSwitch = 'on';
                            $.tplComponentPictureCarouselSetting.setImages();
                            $('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.titleList));
                            $('#cmsTitle .title-checkbox .title-check').addClass('active');
                            $('#cmsTitle .title-button label').removeClass('no-edit');
                            if($.tplComponentPictureCarouselSetting.cmsDatas.docTitle)
                            $('#cmsTitle .title-button .title-radio[doc="'+$.tplComponentPictureCarouselSetting.cmsDatas.docTitle+'"]').addClass('active').parent('.list').siblings('.list').children('.title-radio').removeClass('active');
                            $.common.regain();
                        } catch (e) {
                            
                        }
                    });
                });


                //���ñ���߾�
                var titleDistances = $('#titleDistance input.select-content').get();
                if(titleDistances && titleDistances.length>0){
                    $.each(titleDistances,function(index, distance) {
                        $(distance).val($.tplComponentPictureCarouselSetting.titleList[$(distance).attr('distance')]);
                        $(distance).off('blur',$.tplComponentPictureCarouselSetting.setTitleDistance).on('blur',{obj:distance}, $.tplComponentPictureCarouselSetting.setTitleDistance);
                    });
                }

                //��������ѡ��
                var titleFontFamilyOptions = $("#titleFontFamilyOptions li").get();
                if(titleFontFamilyOptions && titleFontFamilyOptions.length>0){
                    $.each(titleFontFamilyOptions,function(index, opt) {
                        $(opt).off('click',$.tplComponentPictureCarouselSetting.setTitleFontFamily).on('click',{obj:opt}, $.tplComponentPictureCarouselSetting.setTitleFontFamily);
                    });
                }
                //���������С
                $('#titleFontSize').off('blur',$.tplComponentPictureCarouselSetting.setTitleFontSize).on('blur', $.tplComponentPictureCarouselSetting.setTitleFontSize);
                
                //���������и�
                $('#titleLineHeight').off('blur',$.tplComponentPictureCarouselSetting.setTitleLineHeight).on('blur', $.tplComponentPictureCarouselSetting.setTitleLineHeight);
                
                //������밴ť
                var titleAlignButtons = $("#titleAlignButtons .align-img").get();
                if(titleAlignButtons && titleAlignButtons.length>0){
                    $.each(titleAlignButtons,function(index, btn) {
                        $(btn).off('click',$.tplComponentPictureCarouselSetting.setTitleAlign).on('click', {obj:btn},$.tplComponentPictureCarouselSetting.setTitleAlign);
                    });
                }

                //����������ʽ
                $("#titleWeight").off('click').on('click',function(){
                    $.tplSidebar.setActiveThree({data:{obj:$("#titleWeight").get(0)}});
                    $.tplComponentPictureCarouselSetting.setTitleFont({data:{obj:$("#titleWeight").get(0)}});
                });
                $("#titleDecoration").off('click').on('click',function(){
                    $.tplSidebar.setActiveThree({data:{obj:$("#titleDecoration").get(0)}});
                    $.tplComponentPictureCarouselSetting.setTitleHoverUnderline({data:{obj:$("#titleDecoration").get(0)}});
                });

                //-----------------------------------ժҪ����------------------------------------------------------------------------------------------------------------------------------
                //ժҪ �رհ�ť
                    
                $('#memoSwitch .close').off('click').on('click', function() {
                    $(this).parent('.slide-button').animate({ left: '-30px' }, 500, function() {
                        try {
                            //�洢����
                            $.tplComponentPictureCarouselSetting.memoList.memoSwitch = 'off';
                            $.tplComponentPictureCarouselSetting.setImages();
                            $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                            $('#cmsTitle .content-checkbox .content-check').removeClass('active');
                            $.tplComponentPictureCarouselSetting.cmsDatas.docContent = '';
                            $('.' + id + "_cmsdatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.cmsDatas));
                            $.common.regain();
                        } catch (e) {
                            
                        }
                    });
                });
                            
                //ժҪ ������ť
                            
                $('#memoSwitch .open').off('click').on('click', function() {
                    $(this).parent('.slide-button').animate({ left: '0px' }, 500, function() {
                        try {
                            //�洢����
                            $.tplComponentPictureCarouselSetting.memoList.memoSwitch = 'on';
                            $.tplComponentPictureCarouselSetting.setImages();
                            $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                            $('#cmsTitle .content-checkbox .content-check[doc="memo"]').addClass('active');
                            $.tplComponentPictureCarouselSetting.cmsDatas.docContent = 'memo';
                            $('.' + id + "_cmsdatas").text(JSON.stringify($.tplComponentPictureCarouselSetting.cmsDatas));
                            $.common.regain();
                        } catch (e) {
                            
                        }
                    });
                });

                //��ϸ �رհ�ť
                    
                $('#moreButton .close').off('click').on('click', function() {
                    $(this).parent('.slide-button').animate({ left: '-30px' }, 500, function() {
                        try {
                            $('#'+id+' .picturegroup .picture-holder li i .content-area a').remove('.more');
                            //�洢����
                            $.tplComponentPictureCarouselSetting.memoList.more = 'off';
                            $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                            $('#'+id).attr('_more','off');
                            $.common.regain();
                        } catch (e) {
                           
                        }
                    });
                });
                            
                //��ϸ ������ť
                            
                $('#moreButton .open').off('click').on('click', function() {
                    $(this).parent('.slide-button').animate({ left: '0px' }, 500, function() {
                        try {
                            var contents = $('#'+id+' .picturegroup .picture-holder li i .content-area').get();
                            $.each(contents,function(index,content){
                                if($.trim($(content).text()).length>0){
                                    var url = $(content).attr('_url');
                                    var stopStr = '';
                                    if(url.search(/javascript/)>=0){
                                        stopStr = 'onclick="javascript:return false;"';
                                    }
                                    $(content).append('<a '+stopStr+' href="'+url+'" target="'+$.tplComponentPictureCarouselSetting.mainDatas.linkTarget+'" class="more" >[��ϸ]</a>');
                                }
                            });
                            //�洢����
                            $.tplComponentPictureCarouselSetting.memoList.more = 'on';
                            $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                            $('#'+id).attr('_more','on');
                            $.common.regain();
                        } catch (e) {
                            
                        }
                    });
                });

                //���� �رհ�ť
                            
                $('#tabButton .close').off('click').on('click', function() {
                    $(this).parent('.slide-button').animate({ left: '-30px' }, 500, function() {
                        try {
                            $('#'+id+' .picturegroup .picture-holder li i .content-area').removeClass('indent');
                            //�洢����
                            $.tplComponentPictureCarouselSetting.memoList.tab = 'off';
                            $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                            $.common.regain();
                        } catch (e) {
                           
                        }
                    });
                });
                            
                //���� ������ť
                            
                $('#tabButton .open').off('click').on('click', function() {
                    $(this).parent('.slide-button').animate({ left: '0px' }, 500, function() {
                        try {
                            $('#'+id+' .picturegroup .picture-holder li i .content-area').addClass('indent');
                            //�洢����
                            $.tplComponentPictureCarouselSetting.memoList.tab = 'on';
                            $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentPictureCarouselSetting.memoList));
                            $.common.regain();
                        } catch (e) {
                            
                        }
                    });
                });

                //���ñ߾�
                var memoDistances = $('#memoDistance input.select-content').get();
                if(memoDistances && memoDistances.length>0){
                    $.each(memoDistances,function(index, distance) {
                        $(distance).val($.tplComponentPictureCarouselSetting.memoList[$(distance).attr('distance')]);
                        $(distance).off('blur',$.tplComponentPictureCarouselSetting.setMemoDistance).on('blur',{obj:distance}, $.tplComponentPictureCarouselSetting.setMemoDistance);
                    });
                }

                //ժҪ����ѡ��
                var memoFontFamilyOptions = $("#memoFontFamilyOptions li").get();
                if(memoFontFamilyOptions && memoFontFamilyOptions.length>0){
                    $.each(memoFontFamilyOptions,function(index, opt) {
                        $(opt).off('click',$.tplComponentPictureCarouselSetting.setMemoFontFamily).on('click',{obj:opt}, $.tplComponentPictureCarouselSetting.setMemoFontFamily);
                    });
                }
                //ժҪ�����С
                $('#memoFontSize').off('blur',$.tplComponentPictureCarouselSetting.setMemoFontSize).on('blur', $.tplComponentPictureCarouselSetting.setMemoFontSize);
                
                //ժҪ�����и�
                $('#memoLineHeight').off('blur',$.tplComponentPictureCarouselSetting.setMemoLineHeight).on('blur', $.tplComponentPictureCarouselSetting.setMemoLineHeight);
                
                //ժҪ���밴ť
                var memoAlignButtons = $("#memoAlignButtons .align-img").get();
                if(memoAlignButtons && memoAlignButtons.length>0){
                    $.each(memoAlignButtons,function(index, btn) {
                        $(btn).off('click',$.tplComponentPictureCarouselSetting.setMemoAlign).on('click', {obj:btn},$.tplComponentPictureCarouselSetting.setMemoAlign);
                    });
                }

                //��ϸ������ʽ
                $("#moreWeight").off('click').on('click',function(){
                    $.tplSidebar.setActiveThree({data:{obj:$("#moreWeight").get(0)}});
                    $.tplComponentPictureCarouselSetting.setMoreFont({data:{obj:$("#moreWeight").get(0)}});
                });
                $("#moreDecoration").off('click').on('click',function(){
                    $.tplSidebar.setActiveThree({data:{obj:$("#moreDecoration").get(0)}});
                    $.tplComponentPictureCarouselSetting.setMoreUnderline({data:{obj:$("#moreDecoration").get(0)}});
                });
                //---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
                

                
                //---------------------------------��̬�����¼���-----------------------------------------------------------------
                $.tplComponentPictureCarouselSetting.cmsDatas = $.parseJSON($.trim($('.' + id + '_cmsdatas').text()));
                //��ʼ���Ҳ�˵�
                $.tplComponentPictureCarouselSetting.setPage();
                //��ʼ���Ҳද̬����
                $.tplComponentPictureCarouselSetting.initDynamicDatas();

                //����������¼�
                $('#cmsDocNum').off('blur').on('blur',$.tplComponentPictureCarouselSetting.setCMSTag);
                //������Ͱ��¼�
                
                $('#cmsDocType .type-checkbox').off('click').on('click',function(){
                    var $check = $(this).children('.type-check');
                    if($check.hasClass('active')){
                        $check.removeClass('active');
                    }else{
                        $check.addClass('active');
                    }
                    $.tplComponentPictureCarouselSetting.setCMSTag();   
                });
                
                //�����ʾλ�ð��¼�
                $('#cmsDocPos').off('blur').on('blur',$.tplComponentPictureCarouselSetting.setCMSTag);
                //�������ΰ��¼�
                
                $('#cmsBatchRule .batch-radio').off('click').on('click',function(){
                    $(this).addClass('active').siblings('.batch-radio').removeClass('active');
                    $.tplComponentPictureCarouselSetting.setCMSTag();
                });
                $('#cmsBatchRule label').off('click').on('click',function(){
                    $(this).prev('.batch-radio').addClass('active').siblings('.batch-radio').removeClass('active');
                    $.tplComponentPictureCarouselSetting.setCMSTag();
                });
                
                //ͼƬ������¼�
                $('#cmsTitle .title-checkbox').off('click').on('click',function(){
                    var $check = $(this).children('.title-check');
                    if($check.hasClass('active')){
                        $check.removeClass('active');
                        $(this).next('.title-button').find('.title-radio').removeClass('active');
                        $(this).next('.title-button').find('label').addClass('no-edit');

                    }else{
                        $check.addClass('active');
                        $(this).next('.title-button').find('.title-radio[doc="title"]').addClass('active');
                        $(this).next('.title-button').find('label').removeClass('no-edit');
                    }
                    $.tplComponentPictureCarouselSetting.setCMSTag();
                });
               
                $('#cmsTitle .title-button .list').off('click').on('click',function(){
                    if(!$(this).parent('.title-button').prev('.title-checkbox').find('.title-check').hasClass('active')){
                        return ;
                    }
                    var $check = $(this).children('.title-radio');
                    $check.addClass('active').parent('.list').siblings('.list').children('.title-radio').removeClass('active');
                    if($check.parent('.list').parent('.title-button').prev('.title-checkbox').children('.title-check').hasClass('active')){
                        $.tplComponentPictureCarouselSetting.setCMSTag();
                    }
                });
                
                //ͼƬ�������¼�
                $('#cmsTitle .content-checkbox').off('click').on('click',function(){
                    var $check = $(this).children('.content-check');
                    if($check.hasClass('active')){
                        $check.removeClass('active');
                        $('#cmsContentNum').attr('disabled','disabled');
                        $('#cmsContentNum').parent('label').addClass('no-edit');
                    }else{
                        $check.addClass('active');
                        $('#cmsContentNum').removeAttr('disabled');
                        $('#cmsContentNum').parent('label').removeClass('no-edit');
                    }
                    $.tplComponentPictureCarouselSetting.setCMSTag();
                });
               
                //ͼƬ�����������¼�
                $('#cmsContentNum').off('blur').on('blur',$.tplComponentPictureCarouselSetting.setCMSTag);
                //----------------------------------��̬�����¼��󶨽���---------------------------------------------------------------
                //----------------------------------�˶���������----------------------------------------------------------------------
                
                $.tplComponentPictureCarousel.initPlay(id);
                
                //-------------------��ʼ����̬ͼƬ----------------------------------------------------------
                if (!$('#' + id).hasClass('first-add')) {
                    $.tplComponentPictureCarousel.pcDatas = {
                        "yun": [],
                        "local": [{

                            "path": serverPath + "/images/1.jpg",
                            "name": "�����ձ�ӣ�����֦���ƣ����۵�ӣ���뱡ɴ���������������˼������",
                            "link": "",
                            "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                        }, {

                            "path": serverPath + "/images/2.jpg",
                            "name": "���ô�������������Ŀ���֮ҹ������ѡ�ֵ�ȼ���ǵ�������ԾԾ����",
                            "link": "",
                            "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                        }, {
                            "path": serverPath + "/images/3.jpg",
                            "name": "�����������Ҳ������ĵ�ˮ�����Ӷ����ش��������ǣ������Ӷ����ϵı��߸�����Ī���������",
                            "link": "",
                            "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                        }, {
                            "path": serverPath + "/images/4.jpg",
                            "name": "��ˮ�����ţ��������������Ȼ���ʺ�",
                            "link": "",
                            "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                        }],
                        "all": [{
                            "path": serverPath + "/images/1.jpg",
                            "name": "�����ձ�ӣ�����֦���ƣ����۵�ӣ���뱡ɴ���������������˼������",
                            "link": "",
                            "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                        }, {
                            "path": serverPath + "/images/2.jpg",
                            "name": "���ô�������������Ŀ���֮ҹ������ѡ�ֵ�ȼ���ǵ�������ԾԾ����",
                            "link": "",
                            "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                        }, {
                            "path": serverPath + "/images/3.jpg",
                            "name": "�����������Ҳ������ĵ�ˮ�����Ӷ����ش��������ǣ������Ӷ����ϵı��߸�����Ī���������",
                            "link": "",
                            "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                        }, {
                            "path": serverPath + "/images/4.jpg",
                            "name": "��ˮ�����ţ��������������Ȼ���ʺ�",
                            "link": "",
                            "content": "������̲���峿�ĵ�һ�����������羵���͸���Ĵ���飬�������⡣�����ɫɳ̲����Ҫ�ɷ��������ң�һ���ڻ�ɽ����������ҵ�����ʯ��"
                        }]
                    };
                    $('#' + id).addClass('first-add');
                    $('.tpl-sidebar-link').css('opacity', 1);
                       
                    $('.' + id + "_pcdatas").text(JSON.stringify($.tplComponentPictureCarousel.pcDatas));
                    $.tplComponentPictureCarouselSetting.setImages();
                } else {
                    //�ֲ�����
                    if ($.trim($('.' + id + '_pcdatas').text())) {
                        $.tplComponentPictureCarousel.pcDatas = $.parseJSON($.trim($('.' + id + '_pcdatas').text()));
                        $('.tpl-sidebar-link').css('opacity', 1);
                    }
                    $.tplComponentPictureCarouselSetting.setImages(true);
                }
                
                //����϶��ı��С
                $.tplComponentResize.initResizeComponent(id,function(width){
                    $('#width').val(width);
                    $('#width').trigger('blur');
                },function(left){
                    $('#marginLeft').val(left);
                    $('#marginLeft').trigger('blur',[true]);
                },function(height){
                    $('#height').val(height);
                    $('#height').trigger('blur');
                },function(top){
                    $('#marginTop').val(top);
                    $('#marginTop').trigger('blur',[true]);
                });
                //���̿������λ��
                $.tplComponentMove.initMoveComponent(id,function(left){
                    $('#marginLeft').val(left);
                    $('#marginLeft').trigger('blur');
                },function(top){
                    $('#marginTop').val(top);
                    $('#marginTop').trigger('blur');
                });

                //�����϶�
                $.dragResizeInitInfo.getCallBack(function(left,top){
                    $('#marginLeft').val(left);
                    $('#marginLeft').trigger('blur',[true]);
                    $('#marginTop').val(top);
                    $('#marginTop').trigger('blur');
                });

            }

            //�Ҳ�˵�
            $.customMenu.init(id);

        } else {
            //��������ô��� ��ϸע�Ͳ����Ϸ�
            var _pics = $('.tpl-component-2016-01-09-picturecarousel').get();
            if (_pics && _pics.length > 0) {
                $.each(_pics, function(index, pic) {
                    var id = $(pic).attr('id');
                    if ($('#'+id).attr('_more') === 'off') {
                        $('#'+id+' .picturegroup:eq(0) .picture-holder li i .content-area a').remove('.more');
                    } else {
                        $('#'+id+' .picturegroup:eq(0) .picture-holder li i .content-area a').remove('.more');
                        var contents = $('#'+id+' .picturegroup:eq(0) .picture-holder li i .content-area').get();
                        $.each(contents,function(index,content){
                            if($.trim($(content).text()).length>0){
                                $(content).append('<a href="'+$(content).attr('_url')+'" target="_blank" class="more">[��ϸ]</a>');
                            }
                        });
                    }

                    //ֹͣ��ʱ��
                    if (pic.start) {
                        clearInterval(pic.start);
                    }
                    var $ph = $(pic).find('.picturegroup').eq(0).find('.picture-holder');
                    


                    
                    if ($ph.children('li').length > 1) {
                        //ͼƬ�ƶ�����
                        var distance = $(pic).find('.picturegroup').eq(0).find('.picturegroup-holder').width();
                        var pgHeight = Number($(pic).attr('_height').replace(' px', ''));
                        //����ͼƬ��С
                        $.each($ph.find('img'), function(index, img) {
                            var _img  = new Image();
                            _img.onload = function(){
                                var _width = this.width;
                                var _height = this.height;
                                var height = distance * _height / _width;
                                $(img).width(distance).height(height);
                                $(img).css('top', -(height - pgHeight) / 2 + 'px');
                            };
                            _img.src = $(img).attr('src');
                            $(img).parent('a').next('i').css('margin-top','-2.5px');
                            
                        });

                        //ͼƬ��λ
                        var size = Number($ph.children('li').first().attr('class').replace('pic',''));
                        var left = Number($ph.css('left').replace('px',''));
                        //����ͼƬ��λӰ�죬�ƶ���ǰλ��
                        $ph.css('left','0px');
                        var k = 0;
                        //��ǰͼƬλ�ø�λ���ָ�����ʼ״̬
                        while(k<size){
                            $ph.children('li').first().before($ph.children('li').last());
                            k++;
                        }
                        pic.reset = true;
                            
                        $ph.siblings('.fast-access-holder').children('i').eq(0).addClass('active').siblings('i').removeClass('active');
                        var startPlay = function(_index){
                            if(!_index){
                                _index = 1;
                            }
                            pic.start = setInterval(function() {
                                    var left = $ph.css('left');
                                    if (left === 'auto') {
                                        left = 0;
                                    } else {
                                        left = Number(left.replace('px', ''));
                                    }
                                    var size = $ph.children('li').length;
                                    
                                    //ͼƬ�����һ��
                                    if (left === -distance * (size-1)) {
                                        //�ָ�����λ��
                                        $ph.css('left', '0px');
                                        var i = 0;
                                        while(i<(size-1)){
                                            //ɾ����һ��ͼƬ�ŵ�����ĩβ
                                           $ph.children('li').first().appendTo($ph);
                                            i++;
                                        }
                                        //���������ƶ�һ��ͼƬ�ľ���
                                        $ph.animate({ left: '-' + distance + 'px' }, 500, function() {
                                            //�ָ�����λ��
                                            $(this).css('left', '0px');
                                            //ɾ����һ��ͼƬ�ŵ�����ĩβ
                                            $(this).children('li').first().appendTo(this);
                                            //���ÿ��ٵ���λ��
                                            $(this).siblings('.fast-access-holder').children('i').eq(0).addClass('active').siblings('i').removeClass('active');
                                            _index = 1;
                                            
                                        });
                                    }else{
                                        //���������ƶ�һ��ͼƬ�ľ���
                                        $ph.animate({ left: '-' + distance*_index + 'px' }, 500, function() {
                                            //�ָ�����λ��
                                            $(this).css('left', '0px');
                                            var i = 0;
                                            while(i<_index){
                                                //ɾ����һ��ͼƬ�ŵ�����ĩβ
                                                $(this).children('li').first().appendTo(this);
                                                i++;
                                            }
                                            //��ȡ��һ��ͼƬ��ԭʼλ��
                                            var index = Number($(this).children('li').first().attr('class').replace('pic', ''));
                                            //���ÿ��ٵ���λ��
                                            $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                                            _index = 1;
                                            
                                        });
                                        
                                    }
                            }, 2000);
                            //��λ��ʶ
                            pic.reset = false;
                        };
                        startPlay();
                        //���ٵ�����ť
                        var fast_access_buttons = $(pic).find('.picturegroup').eq(0).find('.fast-access-holder').children('i').get();
                        if (fast_access_buttons && fast_access_buttons.length > 0) {
                            $.each(fast_access_buttons, function(index, btn) {
                                $(btn).off('click').on('click', { pic: pic, $ph: $ph, obj: btn, i: index, distance: distance }, function(event) {
                                    var pic = event.data.pic;
                                    var $ph = event.data.$ph;
                                    if (pic.start) {
                                        clearInterval(pic.start);
                                    }
                                    //ֹͣ�����ƶ�
                                    $ph.stop();
                                    //��ȡ��һ��ͼƬ��ԭʼλ��
                                    var size = Number($ph.children('li').first().attr('class').replace('pic', ''));
                                    //��ȡͼƬ����
                                    var len = $ph.children('li').length;
                                    //���ͼƬû�и�λ�����и�λ����
                                    if (!pic.reset) {
                                        var left = Number($ph.css('left').replace('px', ''));
                                        if (left === -event.data.distance * (len - 1)) {
                                            $ph.css('left', '0px');
                                        } else {
                                            //����ͼƬ��λӰ�죬�ƶ���ǰλ��
                                            $ph.css('left', -event.data.distance * size + left + 'px');
                                        }
                                        var k = 0;
                                        //��ǰͼƬλ�ø�λ���ָ�����ʼ״̬
                                        while (k < size) {
                                            $ph.children('li').first().before($ph.children('li').last());
                                            k++;
                                        }
                                        //����Ѹ�λ
                                        pic.reset = true;
                                    }
                                    $ph.animate({ left: '-' + event.data.distance * (event.data.i) + 'px' }, 500, function() {
                                        $(event.data.obj).addClass('active').siblings('i').removeClass('active');
                                    });

                                    setTimeout(function(){
                                        clearInterval(pic.start);
                                        startPlay(event.data.i+1);   
                                    },5000);
                                    event.stopPropagation();
                                    

                                });
                            });
                        }

                        //��ť
                        
                            $(pic).find('.picturegroup').eq(0).children('.left-access').off('click').on('click', { pic: pic, $ph: $ph, distance: distance }, function(event) {
                                var pic = event.data.pic;
                                var $ph = event.data.$ph;
                                //ֹͣ��ʱ��
                                if (pic.start) {
                                    clearInterval(pic.start);
                                }
                                var left = $ph.css('left');
                                if (left === 'auto') {
                                    left = 0;
                                } else {
                                    left = Number(left.replace('px', ''));
                                }
                                if (left % event.data.distance === 0) {
                                    //ͼƬ���ڵ�һ��
                                    if (left === 0) {
                                        $ph.children('li').first().before($ph.children('li').last());
                                        $ph.css('left', '-' + event.data.distance + 'px');
                                        $ph.animate({ left: '0px' }, 500, function() {
                                            var index = Number($(this).children('li').first().attr('class').replace('pic', ''));
                                            $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                                            $(this).parent().parent().get(0).reset = false;
                                        });
                                    } else {
                                        $ph.animate({ left: left + Number(event.data.distance) + 'px' }, 500, function() {
                                            var left = Number($(this).css('left').replace('px', ''));
                                            var _index = Math.abs(left / event.data.distance);
                                            var index = Number($(this).children('li').eq(_index).attr('class').replace('pic', ''));
                                            $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                                        });
                                    }
                                }
                                setTimeout(function(){
                                    clearInterval(pic.start);
                                    startPlay();   
                                },5000); 
                                event.stopPropagation();
                                
                            });
                        
                        //�Ұ�ť
                       
                            
                            $(pic).find('.picturegroup').eq(0).children('.right-access').off('click').on('click', { pic: pic, $ph: $ph, distance: distance }, function(event) {
                                var pic = event.data.pic;
                                var $ph = event.data.$ph;
                                //ֹͣ��ʱ��
                                if (pic.start) {
                                    clearInterval(pic.start);
                                }
                                var size = $ph.children('li').length;
                                var left = $ph.css('left');
                                if (left === 'auto') {
                                    left = 0;
                                } else {
                                    left = Number(left.replace('px', ''));
                                }
                                if (left % event.data.distance === 0) {
                                    if (left === 0) {
                                        $ph.animate({ left: '-' + event.data.distance + 'px' }, 500, function() {
                                            $(this).css('left', '0px');
                                            $(this).children('li').first().appendTo(this);
                                            //�����л���ťѡ��״̬
                                            var index = Number($(this).children('li').first().attr('class').replace('pic', ''));
                                            $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                                            $(this).parent().parent().get(0).reset = false;
                                        });
                                    } else {
                                        //ͼƬ�����һ��
                                        if (left === -event.data.distance * (size - 1)) {
                                            $ph.children('li').first().appendTo($ph);
                                            $ph.css('left', left + Number(event.data.distance) + 'px');
                                            $ph.animate({ left: left + 'px' }, 500, function() {
                                                var left = Number($(this).css('left').replace('px', ''));
                                                var index = Number($(this).children('li').last().attr('class').replace('pic', ''));
                                                $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                                                $(this).parent().parent().get(0).reset = false;
                                            });
                                        } else {
                                            $ph.animate({ left: left - Number(event.data.distance) + 'px' }, 500, function() {
                                                var left = Number($(this).css('left').replace('px', ''));
                                                var _index = Math.abs(left / event.data.distance);
                                                var index = Number($(this).children('li').eq(_index).attr('class').replace('pic', ''));
                                                $(this).siblings('.fast-access-holder').children('i').eq(index).addClass('active').siblings('i').removeClass('active');
                                            });
                                        }
                                    }
                                }
                                setTimeout(function(){
                                    clearInterval(pic.start);
                                    startPlay();   
                                },5000);
                                event.stopPropagation();
                            });
                        
                    }
                });
            }
        }
    } catch (e) {
        
    }
});