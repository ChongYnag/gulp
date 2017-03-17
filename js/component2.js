/**
 * �߼�����б�����
 * @param  {[type]} $ [description]
 * @return {[type]}   [description]
 */
(function($){
    //�߼�����б�����
	$.tplComponentManuscriptList = {
		//����ͼ����
		imgDatas:'',
		//���ⱳ��ͼ����
		titleImgDatas:'',
        //����б�̬����
        manuscriptImgDatas:''
	};
    //�߼�����б���������
	$.tplComponentManuscriptListSetting = {
		//�������ݼ���
		baseList:null,
		//�������ݼ���
		titleList:null,
		//�ӱ������ݼ���
		subTitleList:null,
		//ժҪ���ݼ���
		memoList:null,
		//��̬���ݼ���
		cmsDatas:null,
		//�б����ݼ���
		mainDatas:null,
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
                    preferredFormat: "hex3",
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
                    palette: $.tplComponentManuscriptListSetting.per
                });
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
            $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#'+id+middleRex+'\{'+nameRex+':.*?\}[\n\r]+','g'),''));
            $.common.removeGeneratedCss(id,middleStr,name);
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
            $('#generatedCss').text($('#generatedCss').text().replace(new RegExp('#'+id+middleRex+'\{'+nameRex+':.*?\}\n\r','g'),''));
            $.common.removeGeneratedCss(id,middleStr,name);
        },
        
        //��֤��ֱ����
        checkVerticalAlign:function(){
            $('#verticalAlign .vertical-bg').removeClass('active');
            $.tplComponentManuscriptListSetting.baseList['vertical-align'] = '';
            
        },
        //��֤ˮƽ����
        checkAlign:function(){
            $('#align .align-img').removeClass('active');
            $.tplComponentManuscriptListSetting.baseList.align = '';
            
        },
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
              if(textCount>=Number($.tplComponentManuscriptListSetting.cmsDatas.contentNum)){
                return i+1;
              }
            }
            return str.length;
        },
        //������ص�
        callBackCode:function(obj){
            var id = selectedElementInfo.get("id");
            if(obj.state==='0'){
                $.tplComponentManuscriptListSetting.resetManuscript(obj.staticArr);
            }else if(obj.state==='1'){
                $("#cmsColumnsFont .selectlmLi").eq(0).find('.selectLmText').html(obj.name);
                $.tplComponentManuscriptListSetting.cmsDatas.channelName = obj.name;
                $.tplComponentManuscriptListSetting.cmsDatas.siteCode = obj.siteCode;
                $.tplComponentManuscriptListSetting.cmsDatas.channelCode = obj.channelCode;
                $("#cmsColumnsFont").show();
                $('.' + id + "_cmsdatas").text(JSON.stringify($.tplComponentManuscriptListSetting.cmsDatas));
                $('#'+id).addClass('dynamicComponent').removeClass('staticComponent');
                $.tplComponentManuscriptListSetting.setCMSTag();
            }
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
        deleteCmsLm: function() {
            var id = selectedElementInfo.get("id");
            $.tplComponentManuscriptListSetting.cmsDatas.siteCode = '';
            $.tplComponentManuscriptListSetting.cmsDatas.channelCode = '';
            $.tplComponentManuscriptListSetting.cmsDatas.channelName = '';
            $.tplComponentManuscriptListSetting.cmsDatas.docNum = 5;
            $.tplComponentManuscriptListSetting.cmsDatas.docType = '0|1|2|3|4|5|8|9';
            $.tplComponentManuscriptListSetting.cmsDatas.docPos = 0;
            $.tplComponentManuscriptListSetting.cmsDatas.batchRule =false;
            $.tplComponentManuscriptListSetting.cmsDatas.docTitle =1;
            $.tplComponentManuscriptListSetting.cmsDatas.contentNum =50;
            $.tplComponentManuscriptListSetting.initDynamicDatas();
            //�洢��̬����
            $('.' + id + "_cmsdatas").text(JSON.stringify($.tplComponentManuscriptListSetting.cmsDatas));
            $('#'+id).addClass('staticComponent').removeClass('dynamicComponent');
            $("#cmsColumnsFont").hide();
            // ȡ��ѡ����Ŀ
            $.cmsTree.cancelSelectCmsLm();
            $.common.regain();
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
        //---------------------------------------����б�����-------------------------------------------------------------
        //����ͼƬ��ʾ����
        setPicture:function(status,flag){
        	var id = selectedElementInfo.get('id');
        	if(status==='on'){
        		var imgs = $('#'+id+' .manuscriptlist .manuscript .img-holder img').get();
        		$.each(imgs,function(index,img){
        			if($(img).attr('src')){
        				$(img).parent('a').parent('.img-holder').show();
		        		var percent = 100 - Number($.tplComponentManuscriptListSetting.mainDatas.imgPercent.split(' ')[0]);
                        $(img).parent('a').parent('.img-holder').css('width',$.tplComponentManuscriptListSetting.mainDatas.imgPercent.replace(' ',''));
		        		$(img).parent('a').parent('.img-holder').next('.content-holder').css({'width':percent+'%'});
                        $.tplComponentManuscriptListSetting.setCss('10px','margin-left','margin\-left',' .manuscriptlist .manuscript .content-holder .content ',' \.manuscriptlist \.manuscript \.content\-holder \.content ');
                        //�洢����
                        $.tplComponentManuscriptListSetting.memoList['margin-left'] = '10 px';
                        $('#memoMarginLeft').val('10 px');
                        $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
        			}
        		});
        		$('.manuscript-img-show').show();
        	}else{
        		$('#'+id+' .manuscriptlist .manuscript .img-holder').hide();
        		$('#'+id+' .manuscriptlist .manuscript .content-holder').css({'width':'100%'});
        		$('.manuscript-img-show').hide();
                $.tplComponentManuscriptListSetting.setCss('0px','margin-left','margin\-left',' .manuscriptlist .manuscript .content-holder .content ',' \.manuscriptlist \.manuscript \.content\-holder \.content ');
                //�洢����
                $.tplComponentManuscriptListSetting.memoList['margin-left'] = '0 px';
                $('#memoMarginLeft').val('0 px');
                $('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
        	}
        	$.tplComponentManuscriptListSetting.mainDatas.img = status;
            $('#'+id).attr('_pic',status);
        	$('.'+id+'_maindatas').text(JSON.stringify($.tplComponentManuscriptListSetting.mainDatas));
            if(!flag){
                $.common.regain();
            }
        },
        //����ͼƬ��ռ����
        setImgPercent:function(){
        	var id = selectedElementInfo.get('id');
        	var percent = $.trim($('#imgPercent').val());
        	var value = Number(percent.split(' ')[0]);
        	var contentPercent = 100-value+'%';
        	if(percent){
	        	var imgs = $('#'+id+' .manuscriptlist .manuscript .img-holder img').get();
	        	$.each(imgs,function(index,img){
	    			if($(img).attr('src')){
	    				$(img).parent('a').parent('.img-holder').css('width',percent.replace(' ',''));
	    				$(img).parent('a').parent('.img-holder').next('.content-holder').css('width',contentPercent);
                        var hWidth = $(img).parent('a').parent('.img-holder').width();
                        var hHeight = $(img).parent('a').parent('.img-holder').height();
                        $.tplComponentManuscriptListSetting.setImageSize(hWidth,hHeight,img);
	    			}
	        	});
	        	$.tplComponentManuscriptListSetting.mainDatas.imgPercent = percent;
	        	$('.'+id+'_maindatas').text(JSON.stringify($.tplComponentManuscriptListSetting.mainDatas));
                $('#'+id).attr('_percent',percent);
	        	$.tplComponentManuscriptListSetting.setCols({data:{obj:$('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').get(0)}});  
                $.common.regain();      		
        	}

        },
        //������������߶�
        setContentAreaHeight:function(){
        	var id = selectedElementInfo.get('id');
        	var value = $.trim($('#contentAreaHeight').val());
        	if(value){
        		$.tplComponentManuscriptListSetting.setCss(value.replace(' ',''),'height','',' .manuscriptlist .manuscript .content-main ',' \.manuscriptlist \.manuscript \.content\-main ');
        		$.tplComponentManuscriptListSetting.mainDatas.contentAreaHeight = value;
	        	$('.'+id+'_maindatas').text(JSON.stringify($.tplComponentManuscriptListSetting.mainDatas));
                $.tplComponentManuscriptListSetting.setCols({data:{obj:$('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').get(0)}});
                $.common.regain();
        	}
        },
        //���ø�����
        setManuscriptADistance:function(){
        	try{
        		var id = selectedElementInfo.get('id');
	        	var value = $.trim($('#manuscriptADistance').val());
	        	if(value){
                    $.tplComponentManuscriptListSetting.mainDatas.manuscriptADistance = value;
		        	$('.'+id+'_maindatas').text(JSON.stringify($.tplComponentManuscriptListSetting.mainDatas));
                    $('#'+id).attr('_val1',value);
	        		$.tplComponentManuscriptListSetting.setCols({data:{obj:$('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').get(0)}});
                    $.common.regain();
	        	}
        	}catch(e){
    //     		
        	}
        },
        //���ø�����
        setManuscriptVADistance:function(){
            try{
                var id = selectedElementInfo.get('id');
                var value = $.trim($('#manuscriptVADistance').val());
                if(value){
                    $.tplComponentManuscriptListSetting.mainDatas.manuscriptVADistance = value;
                    $('.'+id+'_maindatas').text(JSON.stringify($.tplComponentManuscriptListSetting.mainDatas));
                    $('#'+id).attr('_val2',value);
                    $.tplComponentManuscriptListSetting.setCols({data:{obj:$('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').get(0)}});
                    $.common.regain();
                }
            }catch(e){
               
            }
        },
        //���ø�����
        resetManuscriptDistance:function(val1,val2,id,cols){
            if(!id){
                id = selectedElementInfo.get('id');
            }
            if(!cols){
                cols = $.tplComponentManuscriptListSetting.mainDatas.cols;
            }
            var manuscripts = $('#'+id+' .manuscriptlist:eq(0) .manuscript').get();
            $('#'+id+' .manuscriptlist:eq(0) .manuscript').css('margin-right',val1.replace(' ',''));

            var num = Number(cols);
            $.each(manuscripts, function(index, m) {
                if((index+1)%num===0){
                    $(m).css('margin-right',0);
                }
                if(index+1>num){
                    $(m).css('margin-top',val2.replace(' ',''));
                }else{
                    $(m).css('margin-top',0);
                }
            });
        },
        //���÷���
        setCols:function(event){
        	var id = selectedElementInfo.get('id');
        	var obj = event.data.obj;
        	var num = Number($(obj).attr('num'));
        	var distanceValue = Number($.tplComponentManuscriptListSetting.mainDatas.manuscriptADistance.split(' ')[0])*(num-1);
        	var width = $('#'+id).width();
        	var distancePercent = ((distanceValue)*100/width).toFixed(4);
        	var widthPercent = (Math.floor((100 - distancePercent)*100/num)/100).toFixed(2);
            $('#'+id+'  .manuscriptlist .manuscript').css('width',widthPercent+'%');
        	var imgs = $('#'+id+' .manuscriptlist .manuscript .img-holder img').get();
	        $.each(imgs,function(index,img){
    			if($(img).attr('src')){
    				var hWidth = $(img).parent('a').parent('.img-holder').width();
    				var hHeight = $(img).parent('a').parent('.img-holder').height();
    				$.tplComponentManuscriptListSetting.setImageSize(hWidth,hHeight,img);
                }
            });
            $.tplComponentManuscriptListSetting.mainDatas.cols = num;
            $('.'+id+'_maindatas').text(JSON.stringify($.tplComponentManuscriptListSetting.mainDatas));
            $('#'+id).attr('_cols',num);
            $.tplComponentManuscriptListSetting.resetManuscriptDistance($.tplComponentManuscriptListSetting.mainDatas.manuscriptADistance,$.tplComponentManuscriptListSetting.mainDatas.manuscriptVADistance);
            if(!event.data.flag && $('#'+id).children('.resize-cover').length<=0){
                $.common.regain();
            }
        },
        //����ͼƬ��С
        setImageSize:function(hWidth,hHeight,img){
            var _img = new Image();
            _img.onload=function(){
                //ͼƬ����ʵ���
                var _width = this.width;
                var _height = this.height;
                //ͼƬ�����Ŀ��
                var width = hWidth;
                var height = hHeight;
                //ͼƬҳ���еĿ��
                var iwidth = $(img).width();
                var iheight = $(img).height();
                //ͼƬ��ʵ��ȴ���ͼƬ�������
                if(_width>width){
                    //ͼƬ���Ϊ�������
                    iwidth = width;
                    $(img).width(iwidth);
                    //ͼƬ�߶� Ϊ��Ӧ������ֵ
                    iheight = Math.floor(_height*width/_width);
                    $(img).height(iheight);
                }else{
                    //ͼƬ��ʵ��Ƚ�С
                    //ͼƬ���Ϊ��ʵ���
                    iwidth = _width;
                    $(img).width(iwidth);
                    //ͼƬ�߶�Ϊ��ʵ�߶�
                    iheight = _height;
                    $(img).height(iheight);
                }
                
                //ͼƬ�߶ȴ��������߶�
                
                $(img).css('margin-top','0px');
            };
            _img.src = $(img).attr('src');

        },
        //���ñ�������λ��
        setTitleAreaPosition:function(position,flag){
                var id = selectedElementInfo.get('id');
                //��������λ��
                var manuscripts = $('#'+id+' .manuscriptlist .manuscript').get();
                var top = position==='top'?'10 px':'0 px';
                var left = position === 'top'?'0 px':'10 px';
                $.each(manuscripts, function(index, manuscript) {
                    if(position==='top'){
                        $(manuscript).find('.title-main').remove().prependTo(manuscript);
                    }else{
                        $(manuscript).find('.title-main').remove().prependTo($(manuscript).find('.content-holder'));
                    }
                });
                if(!flag){
                    $.tplComponentManuscriptListSetting.setCss(top.replace(' ',''),'margin-top','margin-top',' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
                    $.tplComponentManuscriptListSetting.setCss(left.replace(' ',''),'margin-left','margin-left',' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
                    $.tplComponentManuscriptListSetting.setCss(left.replace(' ',''),'margin-left','margin-left',' .manuscriptlist .manuscript .title-main .subtitle ',' \.manuscriptlist \.manuscript \.title\-main \.subtitle ');
                    $.tplComponentManuscriptListSetting.titleList['margin-top'] = top;
                    $.tplComponentManuscriptListSetting.titleList['margin-left'] = left;
                    $.tplComponentManuscriptListSetting.subTitleList['margin-left'] = left;
                    $('#titleMarginTop').val(top);
                    $('#titleMarginLeft').val(left);
                    $('#subTitleMarginLeft').val(left);
                    $('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
                    $('.'+id+'_subtitleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.subTitleList));
                    
                }
                $.tplComponentManuscriptListSetting.mainDatas.titleAreaPosition = position;
                $('.'+id+'_maindatas').text(JSON.stringify($.tplComponentManuscriptListSetting.mainDatas));
                if(!flag){
                    $.common.regain();
                }

        },
        //���ñ��������±���
        setTitleAreaBorder:function(status,flag){
                var id = selectedElementInfo.get('id');
                //��������λ��
                var manuscripts = $('#'+id+' .manuscriptlist .manuscript').get();
                $.each(manuscripts, function(index, manuscript) {
                    if(status==='on'){
                        $(manuscript).find('.title-main').css('border-bottom-color','#a6a6a6;').css('margin-bottom','5px');
                        
                    }else{
                        $(manuscript).find('.title-main').css('border-bottom-color','transparent').css('margin-bottom','0px');
                    }
                });
                $.tplComponentManuscriptListSetting.mainDatas.titleAreaBorder = status;
                $('.'+id+'_maindatas').text(JSON.stringify($.tplComponentManuscriptListSetting.mainDatas));
                if(!flag){
                    $.common.regain();
                }
        },
        //���ø���±���
        setManuscriptBorder:function(status,flag){
                var id = selectedElementInfo.get('id');
                //��������λ��
                var manuscripts = $('#'+id+' .manuscriptlist .manuscript').get();
                $.each(manuscripts, function(index, manuscript) {
                    if(status==='on'){
                        $(manuscript).css('border-bottom-color','#a6a6a6;').css('padding-bottom','10px');
                    }else{
                        $(manuscript).css('border-bottom-color','transparent').css('padding-bottom','0px');
                    }
                });
                $.tplComponentManuscriptListSetting.mainDatas.manuscriptBorder = status;
                $('.'+id+'_maindatas').text(JSON.stringify($.tplComponentManuscriptListSetting.mainDatas));
                if(!flag){
                    $.common.regain();
                }
        },
        //��ʼ���Ҳ�˵�����
        initSidebar:function(){
            var id = selectedElementInfo.get('id');
            //---------------------------�б�����-------------------------------------------------------
            //ͼƬ��ʾ����
            $('#pictureButton .component-radio[data="'+$.tplComponentManuscriptListSetting.mainDatas.img+'"] .radio-checked').addClass('active').parent().siblings('.component-radio').children('.radio-checked').removeClass('active');
            //��ʾ�������������
            $.tplComponentManuscriptListSetting.mainDatas.img==='on'?($('.manuscript-img-show').show()):($('.manuscript-img-show').hide());
            //����������
            $('#manuscriptADistance').val($.tplComponentManuscriptListSetting.mainDatas.manuscriptADistance);
            $('#'+id).attr('_val1',$.tplComponentManuscriptListSetting.mainDatas.manuscriptADistance);
            $('#manuscriptVADistance').val($.tplComponentManuscriptListSetting.mainDatas.manuscriptVADistance);
            $('#'+id).attr('_val2',$.tplComponentManuscriptListSetting.mainDatas.manuscriptVADistance);
            //ͼƬ��ռ��������
            $('#imgPercent').val($.tplComponentManuscriptListSetting.mainDatas.imgPercent);
            $('#'+id).attr('_percent',$.tplComponentManuscriptListSetting.mainDatas.imgPercent);
            //����ͼƬ����
            $.tplComponentManuscriptListSetting.setPicture($.tplComponentManuscriptListSetting.mainDatas.img,true);
            $('#'+id).attr('_pic',$.tplComponentManuscriptListSetting.mainDatas.img);
            //����
            $('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').addClass('active').siblings('li').removeClass('active');
            $('#'+id).attr('_cols',$.tplComponentManuscriptListSetting.mainDatas.cols);
            
            setTimeout(function(){
                $.tplComponentManuscriptListSetting.setCols({data:{obj:$('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').get(0),flag:true}});
            },30);
            
            //��������߶�����
        	$('#contentAreaHeight').val($.tplComponentManuscriptListSetting.mainDatas.contentAreaHeight);
        	//��������λ��
        	$('#positionButton .component-radio[data="'+$.tplComponentManuscriptListSetting.mainDatas.titleAreaPosition+'"] .radio-checked').addClass('active').parent().siblings('.component-radio').children('.radio-checked').removeClass('active');
        	$.tplComponentManuscriptListSetting.setTitleAreaPosition($.tplComponentManuscriptListSetting.mainDatas.titleAreaPosition,true);
        	//���������±���
        	$('#titleAreaBorderButton .component-radio[data="'+$.tplComponentManuscriptListSetting.mainDatas.titleAreaBorder+'"] .radio-checked').addClass('active').parent().siblings('.component-radio').children('.radio-checked').removeClass('active');
            $.tplComponentManuscriptListSetting.setTitleAreaBorder($.tplComponentManuscriptListSetting.mainDatas.titleAreaBorder,true);
        	//����±���
        	$('#manuscriptBorderButton .component-radio[data="'+$.tplComponentManuscriptListSetting.mainDatas.manuscriptBorder+'"] .radio-checked').addClass('active').parent().siblings('.component-radio').children('.radio-checked').removeClass('active');
            $.tplComponentManuscriptListSetting.setManuscriptBorder($.tplComponentManuscriptListSetting.mainDatas.manuscriptBorder,true);
            if($.tplComponentManuscriptListSetting.mainDatas.subSwitch==='on'){
                $('.only-sub-show').show();
                if($.tplComponentManuscriptListSetting.cmsDatas.docTitle.search(/2/)<0)
                    $.tplComponentManuscriptListSetting.cmsDatas.docTitle+='2';
            }else{
                $('.only-sub-show').hide();
            }
        	//---------------------------��������--------------------------------------------------------
        	//��ʼ�����
        	$('#width').val($.tplComponentManuscriptListSetting.baseList.width);
        	//��ʼ��ˮƽ����
        	$('#align .align-img[value="'+$.tplComponentManuscriptListSetting.baseList.align+'"]').addClass('active').siblings('.align-img').removeClass('active');
        	//��ʼ����ֱ����
        	$('#verticalAlign .vertical-bg[value="'+$.tplComponentManuscriptListSetting.baseList['vertical-align']+'"]').addClass("active").siblings('.vertical-bg').removeClass('active');
        	//������ɫ
			if($.tplComponentManuscriptListSetting.baseList['background-color']){
				$('#bgColor').spectrum("set", $.tplComponentManuscriptListSetting.baseList['background-color']);
			}else{
				$('#bgColor').spectrum("set", 'transparent');
			}
			//����ͼ
			if($.tplComponentManuscriptListSetting.baseList['background-image']){
				$("#bgImageHolder").css({'background-image':'url('+$.tplComponentManuscriptListSetting.baseList['background-image']+')','background-size':'170px 94px'});
				$("#bgImageHolder .bg-img-icon").css('opacity', '0');
			}else{
				$("#bgImageHolder").css({'background':'url('+basePath+'/images/index.png) 0 0 repeat','background-size':'auto'});
				$("#bgImageHolder .bg-img-icon").css('opacity', '1');
			}
			//������λ
			if($.tplComponentManuscriptListSetting.baseList.positionX && $.tplComponentManuscriptListSetting.baseList.positionY){
				$('#bgPosition ul li i[x="'+$.tplComponentManuscriptListSetting.baseList.positionX+'"][y="'+$.tplComponentManuscriptListSetting.baseList.positionY+'"]').addClass('active');
				$('#bgPosition ul li i[x="'+$.tplComponentManuscriptListSetting.baseList.positionX+'"][y="'+$.tplComponentManuscriptListSetting.baseList.positionY+'"]').parent('li').parent('ul').siblings('ul').children('li').children('i').removeClass('active');
				$('#bgPosition ul li i[x="'+$.tplComponentManuscriptListSetting.baseList.positionX+'"][y="'+$.tplComponentManuscriptListSetting.baseList.positionY+'"]').parent('li').siblings('li').children('i').removeClass('active');
			}else{
				$('#bgPosition ul li i').removeClass('active');
			}
			$('#positionX').val($.tplComponentManuscriptListSetting.baseList.positionX);
			$('#positionY').val($.tplComponentManuscriptListSetting.baseList.positionY);
			//����ƽ��
			$('#bgRepeat i[value="'+$.tplComponentManuscriptListSetting.baseList['background-repeat']+'"]').addClass('active').siblings('i').removeClass('active');
        	//-------------------------------��������-----------------------------------------------------------------------------
        	//���Ӱ�ť
            if ($.tplComponentManuscriptListSetting.titleList.link === 'off') {
                $('#linkButton').css('left', '-30px');
                $('#'+id+' .manuscriptlist .manuscript .title-main .title a').attr({'href':'javascript:;','onclick':'javascript:return false;'});
            } else {
                $('#linkButton').css('left', '0px');
                var links = $('#'+id+' .manuscriptlist .manuscript .title-main .title a').get();
            	$.each(links,function(index,link){
            		$(link).attr('href',$(link).attr('_url')).removeAttr('onclick');
            	});
            }
            //������ת��ʽ
            $('#linkTarget .component-radio[_target="'+$.tplComponentManuscriptListSetting.titleList.target+'"] .radio-checked').addClass('active').parent().siblings('.component-radio').children('.radio-checked').removeClass('active');
            $.tplComponentManuscriptListSetting.setTitleLinkTarget($.tplComponentManuscriptListSetting.titleList.target,true);
            //����
			$('#titleFontFamily').text($.tplComponentManuscriptListSetting.titleList['font-family']);
			//�����С
			$('#titleFontSize').val($.tplComponentManuscriptListSetting.titleList['font-size']);
			//�и�
			$('#titleLineHeight').val($.tplComponentManuscriptListSetting.titleList['line-height']);
			//ˮƽ���밴ť
			$('#titleAlignButtons .align-img[value="'+$.tplComponentManuscriptListSetting.titleList['text-align']+'"]').addClass('active').siblings('.align-img').removeClass('active');

			//������ɫ
			if($.tplComponentManuscriptListSetting.titleList.color){
				$('#titleFontColor').spectrum("set", $.tplComponentManuscriptListSetting.titleList.color);
			}else{
				$('#titleFontColor').spectrum("set", 'transparent');
			}

			//������ͣ��ɫ
			if($.tplComponentManuscriptListSetting.titleList.hoverColor){
				$('#titleHoverColor').spectrum("set", $.tplComponentManuscriptListSetting.titleList.hoverColor);
			}else{
				$('#titleHoverColor').spectrum("set", 'transparent');
			}

			
			//�����ϸ
			if($.tplComponentManuscriptListSetting.titleList['font-weight']){
				$('#titleWeight[value="'+$.tplComponentManuscriptListSetting.titleList['font-weight']+'"]').addClass('active');
			}else{
				$('#titleWeight').removeClass('active');
			}
			//������ʽ
			if($.tplComponentManuscriptListSetting.titleList['text-decoration']){
				$('#titleDecoration[value="'+$.tplComponentManuscriptListSetting.titleList['text-decoration']+'"]').addClass('active');
			}else{
				$('#titleDecoration').removeClass('active');
			}



			//������ɫ
			if($.tplComponentManuscriptListSetting.titleList['background-color']){
				$('#titleBgColor').spectrum("set", $.tplComponentManuscriptListSetting.titleList['background-color']);
			}else{
				$('#titleBgColor').spectrum("set", 'transparent');
			}
			//����ͼ
			if($.tplComponentManuscriptListSetting.titleList['background-image']){
				$("#titleBgImageHolder").css({'background-image':'url('+$.tplComponentManuscriptListSetting.titleList['background-image']+')','background-size':'170px 94px'});
				$("#titleBgImageHolder .bg-img-icon").css('opacity', '0');
			}else{
				$("#titleBgImageHolder").css({'background':'url('+basePath+'/images/index.png) 0 0 repeat','background-size':'auto'});
				$("#titleBgImageHolder .bg-img-icon").css('opacity', '1');
			}
			//������λ
			if($.tplComponentManuscriptListSetting.titleList.positionX && $.tplComponentManuscriptListSetting.titleList.positionY){
				$('#titleBgPosition ul li i[x="'+$.tplComponentManuscriptListSetting.titleList.positionX+'"][y="'+$.tplComponentManuscriptListSetting.titleList.positionY+'"]').addClass('active');
				$('#titleBgPosition ul li i[x="'+$.tplComponentManuscriptListSetting.titleList.positionX+'"][y="'+$.tplComponentManuscriptListSetting.titleList.positionY+'"]').parent('li').parent('ul').siblings('ul').children('li').children('i').removeClass('active');
				$('#titleBgPosition ul li i[x="'+$.tplComponentManuscriptListSetting.titleList.positionX+'"][y="'+$.tplComponentManuscriptListSetting.titleList.positionY+'"]').parent('li').siblings('li').children('i').removeClass('active');
			}else{
				$('#titleBgPosition ul li i').removeClass('active');
			}
			$('#titlePositionX').val($.tplComponentManuscriptListSetting.titleList.positionX);
			$('#titlePositionY').val($.tplComponentManuscriptListSetting.titleList.positionY);
			//����ƽ��
			$('#titleBgRepeat i[value="'+$.tplComponentManuscriptListSetting.titleList['background-repeat']+'"]').addClass('active').siblings('i').removeClass('active');
			//------------------------------------����������-------------------------------------------------------------------------
			//����
			$('#subTitleFontFamily').text($.tplComponentManuscriptListSetting.subTitleList['font-family']);
			//�����С
			$('#subTitleFontSize').val($.tplComponentManuscriptListSetting.subTitleList['font-size']);
			//�и�
			$('#subTitleLineHeight').val($.tplComponentManuscriptListSetting.subTitleList['line-height']);
			//ˮƽ���밴ť
			$('#subTitleAlignButtons .align-img[value="'+$.tplComponentManuscriptListSetting.subTitleList['text-align']+'"]').addClass('active').siblings('.align-img').removeClass('active');

			//������ɫ
			if($.tplComponentManuscriptListSetting.subTitleList.color){
				$('#subTitleFontColor').spectrum("set", $.tplComponentManuscriptListSetting.subTitleList.color);
			}else{
				$('#subTitleFontColor').spectrum("set", 'transparent');
			}

			
			//�����ϸ
			if($.tplComponentManuscriptListSetting.subTitleList['font-weight']){
				$('#subTitleWeight[value="'+$.tplComponentManuscriptListSetting.subTitleList['font-weight']+'"]').addClass('active');
			}else{
				$('#subTitleWeight').removeClass('active');
			}
			//----------------------------------ժҪ����---------------------------------------------------------------------------------
			//��ϸ��ť
            if ($.tplComponentManuscriptListSetting.memoList.more === 'off') {
                $('#moreButton').css('left', '-30px');
                $('#'+id+' .manuscriptlist .manuscript .content-holder .content a').remove('.more');
            } else {
                $('#moreButton').css('left', '0px');
                $('#'+id+' .manuscriptlist .manuscript .content-holder .content a').remove('.more');
                var contents = $('#'+id+' .manuscriptlist .manuscript .content-holder .content').get();
                $.each(contents,function(index,content){
            		if($.trim($(content).text()).length>0){
            			$(content).append('<a href="'+$(content).attr('_url')+'" target="'+$.tplComponentManuscriptListSetting.memoList.target+'" class="more">[��ϸ]</a>');
            		}
                });
            }
            $('#'+id).attr('_more',$.tplComponentManuscriptListSetting.memoList.more);

            //��ϸ��ת��ʽ
            $('#moreTarget .component-radio[_target="'+$.tplComponentManuscriptListSetting.memoList.target+'"] .radio-checked').addClass('active').parent().siblings('.component-radio').children('.radio-checked').removeClass('active');
            $.tplComponentManuscriptListSetting.setMemoMoreTarget($.tplComponentManuscriptListSetting.memoList.target,true);
            //��������
            if ($.tplComponentManuscriptListSetting.memoList.tab === 'off') {
                $('#tabButton').css('left', '-30px');
                $('#'+id+' .manuscriptlist .manuscript .content-holder .content').removeClass('indent');
            } else {
                $('#tabButton').css('left', '0px');
                $('#'+id+' .manuscriptlist .manuscript .content-holder .content').addClass('indent');
            }
            //����
			$('#memoFontFamily').text($.tplComponentManuscriptListSetting.memoList['font-family']);
			//�����С
			$('#memoFontSize').val($.tplComponentManuscriptListSetting.memoList['font-size']);
			//�и�
			$('#memoLineHeight').val($.tplComponentManuscriptListSetting.memoList['line-height']);
			//ˮƽ���밴ť
			$('#memoAlignButtons .align-img[value="'+$.tplComponentManuscriptListSetting.memoList['text-align']+'"]').addClass('active').siblings('.align-img').removeClass('active');

			//ժҪ��ɫ
			if($.tplComponentManuscriptListSetting.memoList.color){
				$('#memoFontColor').spectrum("set", $.tplComponentManuscriptListSetting.memoList.color);
			}else{
				$('#memoFontColor').spectrum("set", 'transparent');
			}

			//��ϸ��ɫ
			if($.tplComponentManuscriptListSetting.memoList.moreColor){
				$('#moreColor').spectrum("set", $.tplComponentManuscriptListSetting.memoList.moreColor);
			}else{
				$('#moreColor').spectrum("set", 'transparent');
			}

			//��ϸ��ͣ��ɫ
			if($.tplComponentManuscriptListSetting.memoList.moreHoverColor){
				$('#moreHoverColor').spectrum("set", $.tplComponentManuscriptListSetting.memoList.moreHoverColor);
			}else{
				$('#moreHoverColor').spectrum("set", 'transparent');
			}

			
			//�����ϸ
			if($.tplComponentManuscriptListSetting.memoList['font-weight']){
				$('#moreWeight[value="'+$.tplComponentManuscriptListSetting.memoList['font-weight']+'"]').addClass('active');
			}else{
				$('#moreWeight').removeClass('active');
			}
			//������ʽ
			if($.tplComponentManuscriptListSetting.memoList['text-decoration']){
				$('#moreDecoration[value="'+$.tplComponentManuscriptListSetting.memoList['text-decoration']+'"]').addClass('active');
			}else{
				$('#moreDecoration').removeClass('active');
			}
			

        },
        //��ʼ��̬����
        initDynamicDatas:function(){
            var id = selectedElementInfo.get('id');
            //--------------------------------------------------��̬��������-------------------------------
            if($.tplComponentManuscriptListSetting.cmsDatas.channelName){
                $("#cmsColumnsFont .selectlmLi").eq(0).find('.selectLmText').html($.tplComponentManuscriptListSetting.cmsDatas.channelName);
                $("#cmsColumnsFont").show();
            }else{
                $("#cmsColumnsFont").hide();
            }
            //���ø������
            $('#cmsDocNum').val($.tplComponentManuscriptListSetting.cmsDatas.docNum);
            //���ø������
            $('#cmsDocType .type-check').removeClass('active');
            if(String($.tplComponentManuscriptListSetting.cmsDatas.docType).search(/0/)>=0){
                $('#cmsDocType .type-check[value="0|1|2|3|4|5"]').addClass('active');
            }
            if(String($.tplComponentManuscriptListSetting.cmsDatas.docType).search(/8/)>=0){
                $('#cmsDocType .type-check[value="8"]').addClass('active');
            }
            if(String($.tplComponentManuscriptListSetting.cmsDatas.docType).search(/9/)>=0){
                $('#cmsDocType .type-check[value="9"]').addClass('active');
            }
            //���ø����ʾλ��
            $('#cmsDocPos').val(Number($.tplComponentManuscriptListSetting.cmsDatas.docPos)+1);
            //���÷�������
            $('#cmsBatchRule .batch-radio[batch="'+$.tplComponentManuscriptListSetting.cmsDatas.batchRule+'"]').addClass('active').siblings('.batch-radio').removeClass('active');
            //���ñ���
            $('#cmsTitle .title-button .title-check').removeClass('active');
            if(String($.tplComponentManuscriptListSetting.cmsDatas.docTitle).search(/1/)>=0){
                $('#cmsTitle .title-button .title-check[doc="1"]').addClass('active');
                $('#subTitleMarginTop').attr('disabled','disabled');
                $('#subTMTLable').addClass('no-edit');
                $('#subTitleMarginTop').val('');
            }else{
                $('#subTitleMarginTop').removeAttr('disabled');
                $('#subTMTLable').removeClass('no-edit');
                $('#subTitleMarginTop').val($.tplComponentManuscriptListSetting.subTitleList['margin-top']);
            }
            if($.tplComponentManuscriptListSetting.mainDatas.subSwitch==='on' && String($.tplComponentManuscriptListSetting.cmsDatas.docTitle).search(/2/)>=0){
                $('#cmsTitle .title-button .title-check[doc="2"]').addClass('active');
            }
            //��������ʾ������
            if($('#'+id).hasClass('dynamicComponent')){
                var subTitleStyle = String($.tplComponentManuscriptListSetting.cmsDatas.docTitle).search(/2/)>=0?'block':'none';
                $('#'+id+' .manuscriptlist .manuscript .title-main .subtitle').css('display',subTitleStyle);
            }
            //����ժҪ����
            $('#cmsContentNum').val($.tplComponentManuscriptListSetting.cmsDatas.contentNum);
        },
        //-------------------------��������---------------------------------------------------------------------------------------------------
        //����������
        setWidth:function(){
        	try{
	        	var id = selectedElementInfo.get('id');
	        	var width = $.trim($('#width').val());
	        	if(width){
					$.tplComponentManuscriptListSetting.setCss(width.replace(' ',''),'width');	
					//�洢����
					$.tplComponentManuscriptListSetting.baseList.width = width;
					$('.'+id+'_baseinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.baseList));
					$.tplComponentManuscriptListSetting.setCols({data:{obj:$('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').get(0)}});
                    if($('#'+id).children('.resize-cover').length<=0){
                        $.common.regain();
                    }
				}
        	}catch(e){
         		
        	}
        },
        //���������ȵ�λ
        setWidthUnit:function(event){
        	try{
	        	var id = selectedElementInfo.get('id'); 
	        	var obj = event.data.obj;
	        	var unit = $(obj).text();
	        	var value = $.trim($('#width').val()).split(' ')[0];
                if(value){
                    $.tplComponentManuscriptListSetting.setCss(value+unit,'width');	
    				//�洢����
    				$.tplComponentManuscriptListSetting.baseList.width = value+' '+unit;
    				$('.'+id+'_baseinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.baseList));
    				$.tplComponentManuscriptListSetting.setCols({data:{obj:$('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').get(0)}});
                    
                }
        	}catch(e){
  
        	}
        },
        //����ˮƽ����
        setAlign:function(event){
        	try{
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
				$.tplComponentManuscriptListSetting.setCss(_left,'margin-left','margin\-left');
				$.tplComponentManuscriptListSetting.setCss(_right,'margin-right','margin\-right');
                $('#marginLeft').val(value+' px');
                $('#marginRight').val('0 px');
                //�洢����
                $.tplComponentManuscriptListSetting.baseList['margin-left'] = value + ' px';
                $.tplComponentManuscriptListSetting.baseList['margin-right'] = '0 px';
				$.tplComponentManuscriptListSetting.baseList.align = align;
				$('.'+id+'_baseinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.baseList));
                $.common.regain();
        	}catch(e){
    
        	}
        },
        
        //���ô�ֱ����
        setVerticalAlign:function(event){
        	try{
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

					$.tplComponentManuscriptListSetting.setCss(value+'px','margin-top','margin\-top');
					$.tplComponentManuscriptListSetting.clearCss('margin-bottom','margin\-bottom');
					//�洢����
					$.tplComponentManuscriptListSetting.baseList['vertical-align'] = align;
					$('#marginTop').val(value+' px');
					$('#marginBottom').val('0 px');
					$.tplComponentManuscriptListSetting.baseList['margin-top'] = value+' px';
					$.tplComponentManuscriptListSetting.baseList['margin-bottom'] = '0 px';
					$('.'+id+'_baseinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.baseList));
                    $.common.regain();
				}
        	}catch(e){
    
        	}
        },
        //���ñ߾�
        setDistance:function(event,flag){
        	try{
        		var id = selectedElementInfo.get("id");
				var obj = event.data.obj;
				var name = $(obj).attr('distance');
				var value = $.trim($(obj).val());
				if(value){
					$.tplComponentManuscriptListSetting.setCss(value.replace(' ',''),name,name.split('-')[0]+'\-'+name.split('-')[1]);
					//��֤��ֱ����
					$.tplComponentManuscriptListSetting.checkVerticalAlign();
                    $.tplComponentManuscriptListSetting.checkAlign();
					//�洢����
					$.tplComponentManuscriptListSetting.baseList[name] = value;
					$('.'+id+'_baseinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.baseList));
                    $.tplComponentManuscriptListSetting.setCols({data:{obj:$('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').get(0)}});
                    if(!flag)
                        $.common.regain();
                    
                    
				}
        	}catch(e){
    
        	}
        },
        
        //���ñ�����ɫ
        setBgColor:function(color){
        	try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.setCss(color,'background-color','background\-color');
				//�洢����
				$.tplComponentManuscriptListSetting.baseList['background-color'] = color;
				$('.'+id+'_baseinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.baseList));
                $.common.regain();
				
			}catch(e){
				
			}
        },
        //���ñ���ͼƬ
        setBgImage:function(path){
			try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.setCss('url('+path+')','background-image','background\-image');
				//�洢����
				$.tplComponentManuscriptListSetting.baseList['background-image'] = path;
				$('.'+id+'_baseinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.baseList));
				$("#bgImageHolder").css({'background':'url('+path+') center no-repeat'});
				$("#bgImageHolder .bg-img-icon").css('opacity', '0');
				var img = $("#bgImageHolder");
				$.tplComponentManuscriptListSetting.setBgImageSize(path,img);
                $.common.regain();
			}catch(e){
				
			}
		},
        //���ñ������Դ�С
        setBgImageSize:function(path,img){
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
        },
		//�������ͼ
		clearBgImage:function(event){
			try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.clearCss('background-image','background\-image');
				$("#bgImageHolder").css({'background':'url('+basePath+'/images/index.png) 0 0 repeat','background-size':'auto'});
				$("#bgImageHolder .bg-img-icon").css('opacity', '1');
				//�洢����
				$.tplComponentManuscriptListSetting.baseList['background-image'] = '';
				$('.'+id+'_baseinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.baseList));
				$.tplComponentManuscriptList.imgDatas = '';
				$('.'+id+"_imgdatas").text(JSON.stringify($.tplComponentManuscriptList.imgDatas));
                $.common.regain();
			}catch(e){
				
			}
		},
		//���ñ�����λ 
		setPositionVal:function(event){
			try{
				var obj = event.data.obj;
				var x = $(obj).attr('x');
				var y = $(obj).attr('y');
				$('#positionX').val(x);
				$('#positionY').val(y);
				//���ñ�����λ
				$.tplComponentManuscriptListSetting.setBgPosition(x,y);

			}catch(e){
				
			}
		},
		//������λ
		setBgPosition:function(x,y){
			try{
				var id = selectedElementInfo.get('id');
				$.tplComponentManuscriptListSetting.setCss(x+' '+y,'background-position','background\-position');
				
				//�洢����
				$.tplComponentManuscriptListSetting.baseList.positionX = x;
				$.tplComponentManuscriptListSetting.baseList.positionY = y;
				$('.'+id+'_baseinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.baseList));
				$.common.regain();
			}catch(e){
				
			}
		},
		//���ñ���ƽ��
		setRepeat:function(event){
			try{
				var obj = event.data.obj;
				var repeat = $(obj).attr('value');
				var id = selectedElementInfo.get('id');
				$.tplComponentManuscriptListSetting.setCss(repeat,'background-repeat','background\-repeat');
				
				//�洢����
				$.tplComponentManuscriptListSetting.baseList['background-repeat'] = repeat;
				$('.'+id+'_baseinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.baseList));
				$.common.regain();
			}catch(e){
				
			}
		},
		//--------------------------------------��������-------------------------------------------------------------
		//����������ת��ʽ
		setTitleLinkTarget:function(target,flag){
			try{
				var id = selectedElementInfo.get('id');
				$('#'+id+' .manuscriptlist .manuscript .title-main .title a').attr('target',target);
				$('#'+id+' .manuscriptlist .manuscript .content-main .img-holder a').attr('target',target);

				//�洢����
				$.tplComponentManuscriptListSetting.titleList.target = target;
				$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
                if(!flag){
                    $.common.regain();
                }
			}catch(e){
				
			}
		},
		//���ñ���߾�
		setTitleDistance:function(event){
			try{
        		var id = selectedElementInfo.get("id");
				var obj = event.data.obj;
				var name = $(obj).attr('distance');
				var value = $.trim($(obj).val());
				if(value){
					$.tplComponentManuscriptListSetting.setCss(value.replace(' ',''),name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
					
					//�洢����
					$.tplComponentManuscriptListSetting.titleList[name] = value;
					$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
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
				$.tplComponentManuscriptListSetting.setCss(fontFamily,'font-family','font\-family',' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
				//�洢����
				$.tplComponentManuscriptListSetting.titleList['font-family'] = fontFamily;
				$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
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
					$.tplComponentManuscriptListSetting.setCss(fontSize.replace(' ',''),'font-size','font\-size',' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
					//�洢����
					$.tplComponentManuscriptListSetting.titleList['font-size'] = fontSize;
					$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
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
					$.tplComponentManuscriptListSetting.setCss(lineHeight.replace(' ',''),'line-height','line\-height',' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
					//�洢����
					$.tplComponentManuscriptListSetting.titleList['line-height'] = lineHeight;
					$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
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
				$.tplComponentManuscriptListSetting.setCss(textAlign,'text-align','text\-align',' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
				//�洢����
				$.tplComponentManuscriptListSetting.titleList['text-align'] = textAlign;
				$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
				$.common.regain();
			}catch(e){
				
			}
		},

		//���ñ�����ɫ
		setTitleColor:function(color){
			try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.setCss(color,'color','',' .manuscriptlist .manuscript .title-main .title a ',' \.manuscriptlist \.manuscript \.title\-main \.title a ');
				$.tplComponentManuscriptListSetting.setCss(color,'color','',' .manuscriptlist .manuscript .title-main .title a:linked ',' \.manuscriptlist \.manuscript \.title\-main \.title a:linked ');
                $.tplComponentManuscriptListSetting.setCss($.tplComponentManuscriptListSetting.titleList.hoverColor,'color','',' .manuscriptlist .manuscript .title-main .title a:hover ',' \.manuscriptlist \.manuscript \.title\-main \.title a:hover ');
				//�洢����
				$.tplComponentManuscriptListSetting.titleList.color = color;
				$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
				$.common.regain();
			}catch(e){
				
			}
		},

		//���ñ�����ͣ��ɫ
		setTitleHoverColor:function(color){
			try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.setCss(color,'color','',' .manuscriptlist .manuscript .title-main .title a:hover ',' \.manuscriptlist \.manuscript \.title\-main \.title a:hover ');
				//�洢����
				$.tplComponentManuscriptListSetting.titleList.hoverColor = color;
				$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
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
					$.tplComponentManuscriptListSetting.setCss(value,name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
					//�洢����
					$.tplComponentManuscriptListSetting.titleList[name] = value;
				}else{
					$.tplComponentManuscriptListSetting.setCss('normal',name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
					$.tplComponentManuscriptListSetting.titleList[name] = '';
                    $(obj).removeClass('active');
                    
                }
				$('.'+id+"_titleinfo").text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));	
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
                    $.tplComponentManuscriptListSetting.setCss(value,name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .title-main .title a:hover',' \.manuscriptlist \.manuscript \.title\-main \.title a:hover');
                    //�洢����
                    $.tplComponentManuscriptListSetting.titleList[name] = value;
                }else{
                    $.tplComponentManuscriptListSetting.setCss('none',name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .title-main .title a:hover',' \.manuscriptlist \.manuscript \.title\-main \.title a:hover');
                    $.tplComponentManuscriptListSetting.titleList[name] = '';
                    $(obj).removeClass('active');
                    
                }
                $('.'+id+"_titleinfo").text(JSON.stringify($.tplComponentManuscriptListSetting.titleList)); 
                $.common.regain();
            }catch(e){
                
            }
        },
		//���ñ�����ɫ
        setTitleBgColor:function(color){
        	try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.setCss(color,'background-color','background\-color',' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
				//�洢����
				$.tplComponentManuscriptListSetting.titleList['background-color'] = color;
				$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
				$.common.regain();
			}catch(e){
				
			}
        },
        //���ñ��ⱳ��ͼƬ
        setTitleBgImage:function(path){
			try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.setCss('url('+path+')','background-image','background\-image',' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
				//�洢����
				$.tplComponentManuscriptListSetting.titleList['background-image'] = path;
				$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
				$("#titleBgImageHolder").css({'background':'url('+path+') center no-repeat'});
				$("#titleBgImageHolder .bg-img-icon").css('opacity', '0');
				var img = $("#titleBgImageHolder");
				$.tplComponentManuscriptListSetting.setBgImageSize(path,img);
                $.common.regain();
			}catch(e){
				
			}
		},
		//�������ͼ
		clearTitleBgImage:function(event){
			try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.clearCss('background-image','background\-image',' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
				$("#titleBgImageHolder").css({'background':'url('+basePath+'/images/index.png) 0 0 repeat','background-size':'auto'});
				$("#titleBgImageHolder .bg-img-icon").css('opacity', '1');
				//�洢����
				$.tplComponentManuscriptListSetting.titleList['background-image'] = '';
				$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
				$.tplComponentManuscriptList.titleImgDatas = '';
				$('.'+id+"_titleimgdatas").text(JSON.stringify($.tplComponentManuscriptList.titleImgDatas));
                $.common.regain();
			}catch(e){
				
			}
		},
		//���ñ�����λ 
		setTitlePositionVal:function(event){
			try{
				var obj = event.data.obj;
				var x = $(obj).attr('x');
				var y = $(obj).attr('y');
				$('#titlePositionX').val(x);
				$('#titlePositionY').val(y);
				//���ñ�����λ
				$.tplComponentManuscriptListSetting.setTitleBgPosition(x,y);

			}catch(e){
				
			}
		},
		//������λ
		setTitleBgPosition:function(x,y){
			try{
				var id = selectedElementInfo.get('id');
				$.tplComponentManuscriptListSetting.setCss(x+' '+y,'background-position','background\-position',' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
				
				//�洢����
				$.tplComponentManuscriptListSetting.titleList.positionX = x;
				$.tplComponentManuscriptListSetting.titleList.positionY = y;
				$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
                $.common.regain();
				
			}catch(e){
				
			}
		},
		//���ñ���ƽ��
		setTitleRepeat:function(event){
			try{
				var obj = event.data.obj;
				var repeat = $(obj).attr('value');
				var id = selectedElementInfo.get('id');
				$.tplComponentManuscriptListSetting.setCss(repeat,'background-repeat','background\-repeat',' .manuscriptlist .manuscript .title-main .title ',' \.manuscriptlist \.manuscript \.title\-main \.title ');
				
				//�洢����
				$.tplComponentManuscriptListSetting.titleList['background-repeat'] = repeat;
				$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
				$.common.regain();
			}catch(e){
				
			}
		},
		//----------------------------------------------����������------------------------------------------------------------
		//���ø�����߾�
		setSubTitleDistance:function(event){
			try{
        		var id = selectedElementInfo.get("id");
				var obj = event.data.obj;
				var name = $(obj).attr('distance');
				var value = $.trim($(obj).val());
				if(value){
					$.tplComponentManuscriptListSetting.setCss(value.replace(' ',''),name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .title-main .subtitle ',' \.manuscriptlist \.manuscript \.title\-main \.subtitle ');
					
					//�洢����
					$.tplComponentManuscriptListSetting.subTitleList[name] = value;
					$('.'+id+'_subtitleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.subTitleList));
                    $.common.regain();
				}
        	}catch(e){
   
        	}
		},
		//���ø���������
		setSubTitleFontFamily:function(event){
			try{
				var obj = event.data.obj;
				var fontFamily = $(obj).text();
				if(fontFamily==='��ѡ��'){
					return ;
				}
				var id = selectedElementInfo.get('id');
				$.tplComponentManuscriptListSetting.setCss(fontFamily,'font-family','font\-family',' .manuscriptlist .manuscript .title-main .subtitle ',' \.manuscriptlist \.manuscript \.title\-main \.subtitle ');
				//�洢����
				$.tplComponentManuscriptListSetting.subTitleList['font-family'] = fontFamily;
				$('.'+id+'_subtitleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.subTitleList));
                $.common.regain();
				
			}catch(e){
				
			}
		},
		//���ø����������С
		setSubTitleFontSize:function(){
			try{
				var id = selectedElementInfo.get('id');
				var fontSize = $.trim($('#subTitleFontSize').val());
				if(fontSize){
					$.tplComponentManuscriptListSetting.setCss(fontSize.replace(' ',''),'font-size','font\-size',' .manuscriptlist .manuscript .title-main .subtitle ',' \.manuscriptlist \.manuscript \.title\-main \.subtitle ');
					//�洢����
					$.tplComponentManuscriptListSetting.subTitleList['font-size'] = fontSize;
					$('.'+id+'_subtitleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.subTitleList));
					$.common.regain();
				}
			}catch(e){
				
			}
		},
		
		//���ø������и�
		setSubTitleLineHeight:function(){
			try{
				
				var id = selectedElementInfo.get('id');
				
				var lineHeight = $.trim($('#subTitleLineHeight').val());
				if(lineHeight){
					$.tplComponentManuscriptListSetting.setCss(lineHeight.replace(' ',''),'line-height','line\-height',' .manuscriptlist .manuscript .title-main .subtitle ',' \.manuscriptlist \.manuscript \.title\-main \.subtitle ');
					//�洢����
					$.tplComponentManuscriptListSetting.subTitleList['line-height'] = lineHeight;
					$('.'+id+'_subtitleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.subTitleList));
                    $.common.regain();
				}
			}catch(e){
				
			}
		},
		
		//���ø�����ˮƽ����
		setSubTitleAlign:function(event){
			try{
				var obj = event.data.obj;
				var textAlign = $(obj).attr('value');
				var id = selectedElementInfo.get('id');
				$.tplComponentManuscriptListSetting.setCss(textAlign,'text-align','text\-align',' .manuscriptlist .manuscript .title-main .subtitle ',' \.manuscriptlist \.manuscript \.title\-main \.subtitle ');
				//�洢����
				$.tplComponentManuscriptListSetting.subTitleList['text-align'] = textAlign;
				$('.'+id+'_subtitleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.subTitleList));
				$.common.regain();
			}catch(e){
				
			}
		},

		//���ø�������ɫ
		setSubTitleColor:function(color){
			try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.setCss(color,'color','',' .manuscriptlist .manuscript .title-main .subtitle ',' \.manuscriptlist \.manuscript \.title\-main \.subtitle ');
				//�洢����
				$.tplComponentManuscriptListSetting.subTitleList.color = color;
				$('.'+id+'_subtitleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.subTitleList));
				$.common.regain();
			}catch(e){
				
			}
		},

		//���ñ�����ʽ
		setSubTitleFont:function(event){
			try{
				var id = selectedElementInfo.get("id");
				var obj = event.data.obj;
				var name = $(obj).attr('name');
				var value = $(obj).attr('value');
				if($(obj).hasClass('active')){
					$.tplComponentManuscriptListSetting.setCss(value,name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .title-main .subtitle ',' \.manuscriptlist \.manuscript \.title\-main \.subtitle ');
					//�洢����
					$.tplComponentManuscriptListSetting.subTitleList[name] = value;
				}else{
					$.tplComponentManuscriptListSetting.setCss('normal',name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .title-main .subtitle ',' \.manuscriptlist \.manuscript \.title\-main \.subtitle ');
					$.tplComponentManuscriptListSetting.subTitleList[name] = '';
                    $(obj).removeClass('active');
                    
                }
				$('.'+id+"_subtitleinfo").text(JSON.stringify($.tplComponentManuscriptListSetting.subTitleList));
                 $.common.regain();	
			}catch(e){
				
			}
		},
		//--------------------------------------ժҪ����--------------------------------------------------------------------------------
		//������ϸ��ת��ʽ
		setMemoMoreTarget:function(target,flag){
			try{
				var id = selectedElementInfo.get('id');
				$('#'+id+' .manuscriptlist .manuscript .content-holder .content a.more').attr('target',target);
				//�洢����
				$.tplComponentManuscriptListSetting.memoList.target = target;
				$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
                if(!flag){
                    $.common.regain();
                }
			}catch(e){
				
			}
		},
		//����ժҪ�߾�
		setMemoDistance:function(event){
			try{
        		var id = selectedElementInfo.get("id");
				var obj = event.data.obj;
				var name = $(obj).attr('distance');
				var value = $.trim($(obj).val());
				if(value){
					$.tplComponentManuscriptListSetting.setCss(value.replace(' ',''),name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .content-holder .content ',' \.manuscriptlist \.manuscript \.content\-holder \.content ');
					
					//�洢����
					$.tplComponentManuscriptListSetting.memoList[name] = value;
					$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
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
				$.tplComponentManuscriptListSetting.setCss(fontFamily,'font-family','font\-family',' .manuscriptlist .manuscript .content-holder .content ',' \.manuscriptlist \.manuscript \.content\-holder \.content ');
				//�洢����
				$.tplComponentManuscriptListSetting.memoList['font-family'] = fontFamily;
				$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
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
					$.tplComponentManuscriptListSetting.setCss(fontSize.replace(' ',''),'font-size','font\-size',' .manuscriptlist .manuscript .content-holder .content ',' \.manuscriptlist \.manuscript \.content\-holder \.content ');
					//�洢����
					$.tplComponentManuscriptListSetting.memoList['font-size'] = fontSize;
					$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
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
					$.tplComponentManuscriptListSetting.setCss(lineHeight.replace(' ',''),'line-height','line\-height',' .manuscriptlist .manuscript .content-holder .content ',' \.manuscriptlist \.manuscript \.content\-holder \.content ');
					//�洢����
					$.tplComponentManuscriptListSetting.memoList['line-height'] = lineHeight;
					$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
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
				$.tplComponentManuscriptListSetting.setCss(textAlign,'text-align','text\-align',' .manuscriptlist .manuscript .content-holder .content ',' \.manuscriptlist \.manuscript \.content\-holder \.content ');
				//�洢����
				$.tplComponentManuscriptListSetting.memoList['text-align'] = textAlign;
				$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
				$.common.regain();
			}catch(e){
				
			}
		},

		//����ժҪ��ɫ
		setMemoColor:function(color){
			try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.setCss(color,'color','',' .manuscriptlist .manuscript .content-holder .content ',' \.manuscriptlist \.manuscript \.content\-holder \.content ');
				//�洢����
				$.tplComponentManuscriptListSetting.memoList.color = color;
				$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
				$.common.regain();
			}catch(e){
				
			}
		},

		//������ϸ��ɫ
		setMoreColor:function(color){
			try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.setCss(color,'color','',' .manuscriptlist .manuscript .content-holder .content a ',' \.manuscriptlist \.manuscript \.content\-holder \.content a ');
				$.tplComponentManuscriptListSetting.setCss(color,'color','',' .manuscriptlist .manuscript .content-holder .content a:linked ',' \.manuscriptlist \.manuscript \.content\-holder \.content a:linked ');
				$.tplComponentManuscriptListSetting.setCss($.tplComponentManuscriptListSetting.memoList.moreHoverColor,'color','',' .manuscriptlist .manuscript .content-holder .content a:hover ',' \.manuscriptlist \.manuscript \.content\-holder \.content a:hover ');
                //�洢����
				$.tplComponentManuscriptListSetting.memoList.moreColor = color;
				$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
				$.common.regain();
			}catch(e){
				
			}
		},

		//������ϸ��ͣ��ɫ
		setMoreHoverColor:function(color){
			try{
				var id = selectedElementInfo.get("id");
				$.tplComponentManuscriptListSetting.setCss(color,'color','',' .manuscriptlist .manuscript .content-holder .content a:hover ',' \.manuscriptlist \.manuscript \.content\-holder \.content a:hover ');
				//�洢����
				$.tplComponentManuscriptListSetting.memoList.moreHoverColor = color;
				$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
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
					$.tplComponentManuscriptListSetting.setCss(value,name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .content-holder .content a.more ',' \.manuscriptlist \.manuscript \.content\-holder \.content a\.more ');
					//�洢����
					$.tplComponentManuscriptListSetting.memoList[name] = value;
				}else{
					$.tplComponentManuscriptListSetting.setCss('normal',name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .content-holder .content a.more ',' \.manuscriptlist \.manuscript \.content\-holder \.content a\.more ');
					$.tplComponentManuscriptListSetting.memoList[name] = '';
                    $(obj).removeClass('active');
                    
                }
				$('.'+id+"_memoinfo").text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
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
                    $.tplComponentManuscriptListSetting.setCss(value,name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .content-holder .content a:hover ',' \.manuscriptlist \.manuscript \.content\-holder \.content a:hover ');
                    //�洢����
                    $.tplComponentManuscriptListSetting.memoList[name] = value;
                }else{
                    $.tplComponentManuscriptListSetting.setCss('none',name,name.split('-')[0]+'\-'+name.split('-')[1],' .manuscriptlist .manuscript .content-holder .content a:hover ',' \.manuscriptlist \.manuscript \.content\-holder \.content a:hover ');
                    $.tplComponentManuscriptListSetting.memoList[name] = '';
                    $(obj).removeClass('active');
                    
                }
                $('.'+id+"_memoinfo").text(JSON.stringify($.tplComponentManuscriptListSetting.memoList)); 
                $.common.regain();  
            }catch(e){
               
            }
        },
		//-----------------------------------��̬��������---------------------------
		
        //����CMS����
        setCMSTag:function(){
        	//���δѡ����Ŀֱ�ӷ���
            if(!$.tplComponentManuscriptListSetting.cmsDatas.siteCode || !$.tplComponentManuscriptListSetting.cmsDatas.channelCode){
                alert('����ѡ����Ŀ��');
                $.tplComponentManuscriptListSetting.initDynamicDatas();
                return ;
            }

            var id = selectedElementInfo.get('id');
            //�������
            var docNum = Number($.trim($('#cmsDocNum').val()));
            if(!docNum){
                docNum = '';
            }

            $.tplComponentManuscriptListSetting.cmsDatas.docNum = docNum;
            //�������
            var types = $('#cmsDocType .type-check.active').get();
            var docType = '';
            $.each(types, function(index, type) {
                docType += $(type).attr('value') + '|';
            });
            docType = docType.substring(0,docType.length-1);
            $.tplComponentManuscriptListSetting.cmsDatas.docType = docType;

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
            $.tplComponentManuscriptListSetting.cmsDatas.docPos = docPos;
            //��������
            var batchRule = $('#cmsBatchRule .batch-radio.active').attr('batch');
            $.tplComponentManuscriptListSetting.cmsDatas.batchRule = batchRule;
            
            //ͼƬ����
    		var titles = $('#cmsTitle .title-button .title-check.active').get();
            var titleStr = '';
            $.each(titles,function(index,title){
            	titleStr += $(title).attr('doc') + '|';
            });

            titleStr = titleStr.substring(0,titleStr.length-1);
            $.tplComponentManuscriptListSetting.cmsDatas.docTitle = titleStr;
            
            //ժҪ����
            var contentNum = $.trim($('#cmsContentNum').val());
            $.tplComponentManuscriptListSetting.cmsDatas.contentNum = contentNum;
            //�洢��̬����
            $('.' + id + "_cmsdatas").text(JSON.stringify($.tplComponentManuscriptListSetting.cmsDatas));

            //ajax ��ȡͼƬ����
            var url = '/app-tpl-webapp/common/gainManuscriptsAndAppendixs.action';
            var params = {
                m_websiteCodeName:$.tplComponentManuscriptListSetting.cmsDatas.siteCode,
                m_channelCodeName:$.tplComponentManuscriptListSetting.cmsDatas.channelCode,
                m_documentType:$.tplComponentManuscriptListSetting.cmsDatas.docType,
                m_startPos:$.tplComponentManuscriptListSetting.cmsDatas.docPos,
                m_num:$.tplComponentManuscriptListSetting.cmsDatas.docNum,
                m_batchRule:$.tplComponentManuscriptListSetting.cmsDatas.batchRule
            };
            //��ȡcms�ӿ�����
            var _datas = $.tplComponentManuscriptListSetting.ajaxData(url,params)[0];
            
            //��ȡ��������
            var _pdatas = _datas.appendixsList;
            //��ȡ�������
            var _mdatas = _datas.manuscriptsInfo;
            //��ȡ������ʾ״̬
            var titleStyle = $.tplComponentManuscriptListSetting.cmsDatas.docTitle.search(/1/)>=0?'display:block':'display:none';
            //��ȡ�ӱ�����ʾ״̬
            var subTitleStyle = $.tplComponentManuscriptListSetting.cmsDatas.docTitle.search(/2/)>=0?'display:block':'display:none';
            $('#'+id+' .manuscriptlist.static').html('');
            $('#'+id+' .manuscriptlist.dynamic').html('');
            //���ͼƬ������⡢����
            $.each(_mdatas,function(index,_data){
                if(_data){
		            //��ȡ������������
                    var url = _data.url.search(/http/)>=0?_data.url:previewPortal+'/'+_data.url;
		            var titleLink = $.tplComponentManuscriptListSetting.titleList.link==='on'?url:'javascript:;';
                    var stopStr = titleLink.search(/javascript/)>=0?'onclick="javascript:return false;"':'';
		            var imgStatus = (_pdatas[index].length>0?'display:inline-block':'display:none');
		            var contentStatus = (_pdatas[index].length>0?'width:'+(100-Number($.tplComponentManuscriptListSetting.mainDatas.imgPercent.split(' ')[0]))+'%;':'width:100%;');
                	var path = (_pdatas[index].length>0?_pdatas[index][0].path:'');
                	var title = $.trim(_data.title);//($($.trim(_data.title)).length>0?$($.trim(_data.title)).text():$.trim(_data.title));
                    var _title = '';
                    try{
                        _title = $($.trim(_data.title)).length>0?$($.trim(_data.title)).text():$.trim(_data.title);
                    }catch(e){
                        _title = $.trim(_data.title);
                    }
                	var subTitle = $.trim(_data.subTitle);//($($.trim(_data.subTitle)).length>0?$($.trim(_data.subTitle)).text():$.trim(_data.subTitle));
                    var _subTitle = '';
                    try{
                        _subTitle = $($.trim(_data.subTitle)).length>0?$($.trim(_data.subTitle)).text():$.trim(_data.subTitle);
                    }catch(e){
                        _subTitle = $.trim(_data.subTitle);
                    }
                	var memo = $.trim(_data.memo);//($($.trim(_data.memo)).length>0?$($.trim(_data.memo)).text():$.trim(_data.memo));
                	var _titleLink = $.tplComponentManuscriptListSetting.titleList.link==='on'?'<CMSPRO_DOCUMENT FIELD=\'url\'></CMSPRO_DOCUMENT>':'javascript:;';

                	if($.tplComponentManuscriptListSetting.cmsDatas.contentNum){
                        if($.tplComponentManuscriptListSetting.backtextIndex(memo)<memo.length){
                            memo = memo.substring(0,$.tplComponentManuscriptListSetting.backtextIndex(memo))+'��';
                        }
                	}
                    var titleClickTab = ' targetAttr="title" onmouseenter="$.common.heightLight(this,event,\'li.title\')" onclick="$.common.goToSidebar(this,event,\'li.title\')"';
                    var subTitleClickTab = ' targetAttr="subtitle" onmouseenter="$.common.heightLight(this,event,\'li.subtitle\')" onclick="$.common.goToSidebar(this,event,\'li.subtitle\')"';
                    var memoClickTab = ' targetAttr="memo" onmouseenter="$.common.heightLight(this,event,\'p.content\')" onclick="$.common.goToSidebar(this,event,\'p.content\')"';
                    // ���ص����е�tab
                    var backtoAllTab = ' onclick="$.common.goToallsidebar()"';
                	var tHtml = '<ul class="title-main">'+
									'<li class="title" '+titleClickTab+' title="'+_title+'" style="'+titleStyle+'"><a href="'+titleLink+'" '+stopStr+' _url="'+url+'" target="'+$.tplComponentManuscriptListSetting.titleList.target+'">'+title+'</a></li>'+
									'<li class="subtitle" '+subTitleClickTab+' title="'+_subTitle+'" style="'+subTitleStyle+'">'+subTitle+'</li>'+
								'</ul>';
					var _tHtml = '<ul class="title-main">'+
									'<li class="title" style="'+titleStyle+'" title="'+_title+'"><a href="'+_titleLink+'" '+stopStr+' _url="<CMSPRO_DOCUMENT FIELD=\'url\'></CMSPRO_DOCUMENT>" target="'+$.tplComponentManuscriptListSetting.titleList.target+'"><cmspro_document field="title"></cmspro_document></a></li>'+
									'<li class="subtitle" style="'+subTitleStyle+'" title="'+_subTitle+'" ><cmspro_document field="subTitle"></cmspro_document></li>'+
								'</ul>';
                    var html = '';
                	var dHtml = '';
                    if($.tplComponentManuscriptListSetting.mainDatas.titleAreaPosition==='top'){
	                    html = '<li class="manuscript">'+tHtml+
									'<div class="content-main">'+
										'<div class="img-holder" style="'+imgStatus+'">'+
											'<a href="'+url+'" target="'+$.tplComponentManuscriptListSetting.titleList.target+'"><img src="'+path+'" '+backtoAllTab+'/></a>'+
										'</div>'+
										'<div class="content-holder" style="'+contentStatus+'">'+
											'<p class="content" _url="'+url+'" '+memoClickTab+'>'+memo+'</p>'+
										'</div>'+
									'</div>'+
								'</li>';
						dHtml = '<cmspro_documents sitecode="'+$.tplComponentManuscriptListSetting.cmsDatas.siteCode+'" channelcode="'+$.tplComponentManuscriptListSetting.cmsDatas.channelCode+'" documenttype="'+$.tplComponentManuscriptListSetting.cmsDatas.docType+'" num="1" startpos="'+(Number($.tplComponentManuscriptListSetting.cmsDatas.docPos)+index)+'" batchrule="'+$.tplComponentManuscriptListSetting.cmsDatas.batchRule+'">\r\n'+
									'<li class="manuscript">\r\n'+_tHtml+
										'\r\n<div class="content-main">\r\n'+
											'<div class="img-holder" style="'+imgStatus+'">\r\n'+
												'<a href="<CMSPRO_DOCUMENT FIELD=\'url\'></CMSPRO_DOCUMENT>" target="'+$.tplComponentManuscriptListSetting.titleList.target+'">\r\n<CMSPRO_APPENDIXS MODE="IMG" STARTPOS="0" NUM="1">\r\n<img src=\'<CMSPRO_APPENDIX FIELD="path"></CMSPRO_APPENDIX>\' />\r\n</CMSPRO_APPENDIXS>\r\n</a>\r\n'+
											'</div>\r\n'+
											'<div class="content-holder" style="'+contentStatus+'">\r\n'+
												'<p class="content" _url="<CMSPRO_DOCUMENT FIELD=\'url\'></CMSPRO_DOCUMENT>">\r\n<cmspro_document field="memo" NUM="'+$.tplComponentManuscriptListSetting.cmsDatas.contentNum+'"></cmspro_document>\r\n</p>\r\n'+
											'</div>\r\n'+
										'</div>\r\n'+
									'</li>\r\n'+
								'</cmspro_documents>\r\n';
                    }else{
                    	html = '<li class="manuscript">'+
									'<div class="content-main">'+
										'<div class="img-holder" style="'+imgStatus+'">'+
											'<a href="'+url+'" target="'+$.tplComponentManuscriptListSetting.titleList.target+'"><img src="'+path+'" /></a>'+
										'</div>'+
										'<div class="content-holder" style="'+contentStatus+'">'+tHtml+
											'<p class="content" _url="'+url+'">'+memo+'</p>'+
										'</div>'+
									'</div>'+
								'</li>';
						dHtml = '<cmspro_documents sitecode="'+$.tplComponentManuscriptListSetting.cmsDatas.siteCode+'" channelcode="'+$.tplComponentManuscriptListSetting.cmsDatas.channelCode+'" documenttype="'+$.tplComponentManuscriptListSetting.cmsDatas.docType+'" num="1" startpos="'+(Number($.tplComponentManuscriptListSetting.cmsDatas.docPos)+index)+'" batchrule="'+$.tplComponentManuscriptListSetting.cmsDatas.batchRule+'">\r\n'+
									'<li class="manuscript">\r\n'+
										'<div class="content-main">\r\n'+
											'<div class="img-holder" style="'+imgStatus+'">\r\n'+
												'<a href="<CMSPRO_DOCUMENT FIELD=\'url\'></CMSPRO_DOCUMENT>" target="'+$.tplComponentManuscriptListSetting.titleList.target+'">\r\n<CMSPRO_APPENDIXS MODE="IMG" STARTPOS="0" NUM="1">\r\n<img src=\'<CMSPRO_APPENDIX FIELD="path"></CMSPRO_APPENDIX>\' />\r\n</CMSPRO_APPENDIXS>\r\n</a>\r\n'+
											'</div>\r\n'+
											'<div class="content-holder" style="'+contentStatus+'">\r\n'+_tHtml+
												'\r\n<p class="content" _url="<CMSPRO_DOCUMENT FIELD=\'url\'></CMSPRO_DOCUMENT>">\r\n<cmspro_document field="memo" NUM="'+$.tplComponentManuscriptListSetting.cmsDatas.contentNum+'"></cmspro_document>\r\n</p>\r\n'+
											'</div>\r\n'+
										'</div>\r\n'+
									'</li>\r\n'+
								'</cmspro_documents>\r\n';
                    }
					$('#'+id+' .manuscriptlist.static').append(html);
					$('#'+id+' .manuscriptlist.dynamic').append(dHtml);
                }
                
            });
			
            $('#'+id+' .manuscriptlist').append('<li style="clear:both;"></li>');

            var imgs = $('#'+id+' .manuscriptlist .manuscript .img-holder img').get();
	        $.each(imgs,function(index,img){
    			if($(img).attr('src')){
    				var hWidth = $(img).parent('a').parent('.img-holder').width();
    				var hHeight = $(img).parent('a').parent('.img-holder').height();
    				
    				$.tplComponentManuscriptListSetting.setImageSize(hWidth,hHeight,img);
    				
    			}
	        });
            //�����ϸ
            if($.tplComponentManuscriptListSetting.memoList.more==='on'){
            	var contents = $('#'+id+' .manuscriptlist .manuscript .content-holder .content').get();
                	$.each(contents,function(index,content){
                		if($.trim($(content).text()).length>0){
                			$(content).append('<a href="'+$(content).attr('_url')+'" target="'+$.tplComponentManuscriptListSetting.memoList.target+'" class="more">[��ϸ]</a>');
                		}
                	});
            }
            //��������
            if($.tplComponentManuscriptListSetting.memoList.tab==='on'){
                $('#'+id+' .manuscriptlist .manuscript .content-holder .content').addClass('indent');
            }
            //���ñ��������±���
            $.tplComponentManuscriptListSetting.setTitleAreaBorder($.tplComponentManuscriptListSetting.mainDatas.titleAreaBorder);
            //���ø���±���
            $.tplComponentManuscriptListSetting.setManuscriptBorder($.tplComponentManuscriptListSetting.mainDatas.manuscriptBorder);
            //����ͼƬ��ʾ����
            $.tplComponentManuscriptListSetting.setPicture($.tplComponentManuscriptListSetting.mainDatas.img);
            //���÷�����
            
            setTimeout(function(){
                $.tplComponentManuscriptListSetting.setCols({data:{obj:$('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').get(0)}});
            },30);
            //��վ�̬���
            $('#manuscriptList').html('');
            $('.'+id+'_manuscriptlist').html($('#manuscriptList').html());
            $.common.regain();
        },
        initSetting:function(){
            var id = selectedElementInfo.get('id');
            //��ȡ�������ݼ���
            $.tplComponentManuscriptListSetting.baseList = $.parseJSON($('.'+id+'_baseinfo').text());
            //��ȡ�������ݼ���
            $.tplComponentManuscriptListSetting.titleList = $.parseJSON($('.'+id+'_titleinfo').text());
            //��ȡ�ӱ������ݼ���
            $.tplComponentManuscriptListSetting.subTitleList = $.parseJSON($('.'+id+'_subtitleinfo').text());
            //��ȡժҪ���ݼ���
            $.tplComponentManuscriptListSetting.memoList = $.parseJSON($('.'+id+'_memoinfo').text());
            //��ȡ��̬���ݼ���
            $.tplComponentManuscriptListSetting.cmsDatas = $.parseJSON($('.'+id+'_cmsdatas').text());
            //��ȡ����б�����
            $.tplComponentManuscriptListSetting.mainDatas = $.parseJSON($('.'+id+'_maindatas').text());
            $.tplComponentManuscriptListSetting.initSidebar();
            $.tplComponentManuscriptListSetting.initDynamicDatas();
        },
        //��Ӿ�̬���
        addManuscript:function(){
            var id = selectedElementInfo.get('id');
            if($('#'+id).hasClass('dynamicComponent')){
                $('#'+id+' .manuscriptlist.static .manuscript').remove();
                $('#manuscriptList').html('');
                $('.'+id+'_manuscriptlist').html($('#manuscriptList').html());
            }
            $.dialogUpPic.initDialog('', 1, function(data) {
                $.tplComponentManuscriptList.manuscriptImgDatas[$.tplComponentManuscriptList.manuscriptImgDatas.length] = data;
                $('#'+id).addClass('staticComponent').removeClass('dynamicComponent');
                $.tplComponentManuscriptListSetting.deleteCmsLm(true);
                
                var path = data.all[0] && data.all[0].path?data.all[0].path:'';
                var imgStatus = (path?'display:inline-block':'display:none');
                var contentStatus = (path?'width:'+(100-Number($.tplComponentManuscriptListSetting.mainDatas.imgPercent.split(' ')[0]))+'%;':'width:100%;');
                //��ȡ������ʾ״̬
                var titleStyle = String($.tplComponentManuscriptListSetting.cmsDatas.docTitle).search(/1/)>=0?'display:block':'display:none';
                //��ȡ�ӱ�����ʾ״̬
                var subTitleStyle = String($.tplComponentManuscriptListSetting.cmsDatas.docTitle).search(/2/)>=0?'display:block':'display:none';
                var titleClickTab = ' targetAttr="title" onmouseenter="$.common.heightLight(this,event,\'li.title\')" onclick="$.common.goToSidebar(this,event,\'li.title\')" onblur="$.tplComponentManuscriptListSetting.setTitleContent(this);" tabindex=1';
                var subTitleClickTab = ' targetAttr="subtitle" onmouseenter="$.common.heightLight(this,event,\'li.subtitle\')" onclick="$.common.goToSidebar(this,event,\'li.subtitle\')"';
                var memoClickTab = ' targetAttr="memo" onmouseenter="$.common.heightLight(this,event,\'p.content\')" onclick="$.common.goToSidebar(this,event,\'p.content\')"';
                // ���ص����е�tab
                var backtoAllTab = ' onclick="$.common.goToallsidebar()"';
                var tHtml = '<ul class="title-main">'+
                                        '<li class="title" '+titleClickTab+' title="����" style="'+titleStyle+'"><a href="" onclick="javascript:return false;" _url="" target="'+$.tplComponentManuscriptListSetting.titleList.target+'">����</a></li>'+
                                        '<li class="subtitle" '+subTitleClickTab+' title="��ʾ����" style="'+subTitleStyle+'">��ʾ����</li>'+
                                    '</ul>';
                var html = '<li class="manuscript">'+tHtml+
                                        '<div class="content-main">'+
                                            '<div class="img-holder" style="'+imgStatus+'">'+
                                                '<a href="" target="'+$.tplComponentManuscriptListSetting.titleList.target+'"><img src="'+path+'" '+backtoAllTab+'/></a>'+
                                            '</div>'+
                                            '<div class="content-holder" style="'+contentStatus+'">'+
                                                '<p class="content" _url="" '+memoClickTab+'>ժҪ</p>'+
                                            '</div>'+
                                        '</div>'+
                                    '</li>';
                $(html).insertBefore('#'+id+' .manuscriptlist.static li:last');
                var _html = '<li class="manuscript"><span class="content" title="����" >����</span><span class="o-icon"><i class="operate upload" title="�޸�ͼƬ"></i><i class="operate del" title="ɾ��"></i></span></li>';
                $('#manuscriptList').append(_html);
                $('#manuscriptList li:last').off('mouseenter').on('mouseenter',{index:$('#manuscriptList li:last').index()},function(event) {
                        //��������
                        var _name = $(this).children('.content').text();
                        //ɾ����ť
                        var del = $(this).children('.o-icon').children('.del');
                        //ɾ����ť��ʼ������
                        del.off('click').on('click',{index:event.data.index,name:_name},$.tplComponentManuscriptListSetting.toDelBox);
                        var upload = $(this).children('.o-icon').children('.upload');
                        //���ϴ�ͼƬ����
                        upload.off('click').on('click',{index:event.data.index},$.tplComponentManuscriptListSetting.uploadPicture);
                });                    

                var imgs = $('#'+id+' .manuscriptlist .manuscript .img-holder img').get();
                $.each(imgs,function(index,img){
                    if($(img).attr('src')){
                        var hWidth = $(img).parent('a').parent('.img-holder').width();
                        var hHeight = $(img).parent('a').parent('.img-holder').height();
                        
                        $.tplComponentManuscriptListSetting.setImageSize(hWidth,hHeight,img);
                        
                    }
                });
                //�����ϸ
                if($.tplComponentManuscriptListSetting.memoList.more==='on'){
                    $('#'+id+' .manuscriptlist.static .manuscript:last .content-holder .content').append('<a href="" target="'+$.tplComponentManuscriptListSetting.memoList.target+'" class="more">[��ϸ]</a>');
                }
                //��������
                if($.tplComponentManuscriptListSetting.memoList.tab==='on'){
                    $('#'+id+' .manuscriptlist.static .manuscript:last .content-holder .content').addClass('indent');
                }
                //���ñ��������±���
                $.tplComponentManuscriptListSetting.setTitleAreaBorder($.tplComponentManuscriptListSetting.mainDatas.titleAreaBorder);
                //���ø���±���
                $.tplComponentManuscriptListSetting.setManuscriptBorder($.tplComponentManuscriptListSetting.mainDatas.manuscriptBorder);
                //����ͼƬ��ʾ����
                $.tplComponentManuscriptListSetting.setPicture($.tplComponentManuscriptListSetting.mainDatas.img);
                //���÷�����
                
                setTimeout(function(){
                    $.tplComponentManuscriptListSetting.setCols({data:{obj:$('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').get(0)}});
                },30);
                $('.'+id+'_manuscriptimgdatas').text(JSON.stringify($.tplComponentManuscriptList.manuscriptImgDatas));
                if($('#manuscriptList').height()>140){
                    if(!$('.manuscript-holder').get(0).scrollF){
                        $('.manuscript-holder').mCustomScrollbar({
                            theme:'dark',
                            autoDraggerLength:true,
                            contentTouchScroll: false,
                            documentTouchScroll: false,
                            advanced: {
                                updateOnBrowserResize:true, 
                                updateOnContentResize:true,
                                autoHideScrollbar: true,
                                autoScrollOnFocus: false
                            }
                        });
                        $('.manuscript-holder').get(0).scrollF = true;
                    }
                }
                $('.'+id+'_manuscriptlist').html($('#manuscriptList').html());
                $.common.regain();
            },function(){
                
            });
            
        },
        resetManuscript:function(arr){
            var id = selectedElementInfo.get('id');
            $('#'+id).addClass('staticComponent').removeClass('dynamicComponent');
            $.tplComponentManuscriptListSetting.deleteCmsLm(true);
            //��ȡ������ʾ״̬
            var titleStyle = String($.tplComponentManuscriptListSetting.cmsDatas.docTitle).search(/1/)>=0?'display:block':'display:none';
            //��ȡ�ӱ�����ʾ״̬
            var subTitleStyle = String($.tplComponentManuscriptListSetting.cmsDatas.docTitle).search(/2/)>=0?'display:block':'display:none';
            var titleClickTab = ' targetAttr="title" onmouseenter="$.common.heightLight(this,event,\'li.title\')" onclick="$.common.goToSidebar(this,event,\'li.title\')" onblur="$.tplComponentManuscriptListSetting.setTitleContent(this);" tabindex=1';
            var subTitleClickTab = ' targetAttr="subtitle" onmouseenter="$.common.heightLight(this,event,\'li.subtitle\')" onclick="$.common.goToSidebar(this,event,\'li.subtitle\')"';
            var memoClickTab = ' targetAttr="memo" onmouseenter="$.common.heightLight(this,event,\'p.content\')" onclick="$.common.goToSidebar(this,event,\'p.content\')"';
            // ���ص����е�tab
            var backtoAllTab = ' onclick="$.common.goToallsidebar()"';
            $('#'+id+' .manuscriptlist.static').html('');
            $('#manuscriptList').html('');
            $.each(arr, function(index, obj) {
                var imgStatus = (obj.path?'display:inline-block':'display:none');
                var contentStatus = (obj.path?'width:'+(100-Number($.tplComponentManuscriptListSetting.mainDatas.imgPercent.split(' ')[0]))+'%;':'width:100%;');
                var _title = '';
                try{
                    _title =  $(obj.title).text()?$(obj.title).text():obj.title;
                }catch(e){
                    _title = obj.title;
                }
                var _subtitle = '';
                try{
                    _subtitle = $(obj.subtitle).text()?$(obj.subtitle).text():obj.subtitle;
                }catch(e){
                    _subtitle = obj.subtitle;
                }
                var tHtml = '<ul class="title-main">'+
                                        '<li class="title" '+titleClickTab+' title="'+_title+'" style="'+titleStyle+'"><a href="'+obj.url+'" onclick="javascript:return false;" _url="'+obj.url+'" target="'+$.tplComponentManuscriptListSetting.titleList.target+'">'+obj.title+'</a></li>'+
                                        '<li class="subtitle" '+subTitleClickTab+' title="'+_subtitle+'" style="'+subTitleStyle+'">'+obj.subtitle+'</li>'+
                                    '</ul>';
                var html = '<li class="manuscript">'+tHtml+
                                        '<div class="content-main">'+
                                            '<div class="img-holder" style="'+imgStatus+'">'+
                                                '<a href="'+obj.url+'" target="'+$.tplComponentManuscriptListSetting.titleList.target+'"><img src="'+obj.path+'" '+backtoAllTab+'/></a>'+
                                            '</div>'+
                                            '<div class="content-holder" style="'+contentStatus+'">'+
                                                '<p class="content" _url="'+obj.url+'" '+memoClickTab+'>'+obj.memo+'</p>'+
                                            '</div>'+
                                        '</div>'+
                                    '</li>';

                $('#'+id+' .manuscriptlist.static').append(html);
            });
            $('#'+id+' .manuscriptlist').append('<li style="clear:both;"></li>');
            $.each(arr, function(index, obj) {
                var _title = '';
                try{
                    _title =  $(obj.title).text()?$(obj.title).text():obj.title;
                }catch(e){
                    _title = obj.title;
                }
                var _html = '<li class="manuscript"><span class="content" title="'+_title+'" >'+_title+'</span><span class="o-icon"><i class="operate upload" title="�޸�ͼƬ"></i><i class="operate del" title="ɾ��"></i></span></li>';
                $('#manuscriptList').append(_html);
            });
            $.each($('#manuscriptList li').get(), function(index, li) {
                $(li).off('mouseenter').on('mouseenter',{index:index},function(event) {
                    //��������
                    var _name = $(this).children('.content').text();
                    //ɾ����ť
                    var del = $(this).children('.o-icon').children('.del');
                    //ɾ����ť��ʼ������
                    del.off('click').on('click',{index:event.data.index,name:_name},$.tplComponentManuscriptListSetting.toDelBox);
                    var upload = $(this).children('.o-icon').children('.upload');
                    //���ϴ�ͼƬ����
                    upload.off('click').on('click',{index:event.data.index},$.tplComponentManuscriptListSetting.uploadPicture);
                });                    
                
            });

            var imgs = $('#'+id+' .manuscriptlist .manuscript .img-holder img').get();
            $.each(imgs,function(index,img){
                if($(img).attr('src')){
                    var hWidth = $(img).parent('a').parent('.img-holder').width();
                    var hHeight = $(img).parent('a').parent('.img-holder').height();
                    $.tplComponentManuscriptListSetting.setImageSize(hWidth,hHeight,img);
                }
            });
            //�����ϸ
            if($.tplComponentManuscriptListSetting.memoList.more==='on'){
                $('#'+id+' .manuscriptlist.static .manuscript:last .content-holder .content').append('<a href="" target="'+$.tplComponentManuscriptListSetting.memoList.target+'" class="more">[��ϸ]</a>');
            }
            //��������
            if($.tplComponentManuscriptListSetting.memoList.tab==='on'){
                $('#'+id+' .manuscriptlist.static .manuscript:last .content-holder .content').addClass('indent');
            }
            //���ñ��������±���
            $.tplComponentManuscriptListSetting.setTitleAreaBorder($.tplComponentManuscriptListSetting.mainDatas.titleAreaBorder);
            //���ø���±���
            $.tplComponentManuscriptListSetting.setManuscriptBorder($.tplComponentManuscriptListSetting.mainDatas.manuscriptBorder);
            //����ͼƬ��ʾ����
            $.tplComponentManuscriptListSetting.setPicture($.tplComponentManuscriptListSetting.mainDatas.img);
            //���÷�����
            
            setTimeout(function(){
                $.tplComponentManuscriptListSetting.setCols({data:{obj:$('#cmsCols li[num="'+$.tplComponentManuscriptListSetting.mainDatas.cols+'"]').get(0)}});
            },30);
            $('.'+id+'_manuscriptimgdatas').text(JSON.stringify($.tplComponentManuscriptList.manuscriptImgDatas));
            if($('#manuscriptList').height()>140){
                if(!$('.manuscript-holder').get(0).scrollF){
                    $('.manuscript-holder').mCustomScrollbar({
                        theme:'dark',
                        autoDraggerLength:true,
                        contentTouchScroll: false,
                        documentTouchScroll: false,
                        advanced: {
                            updateOnBrowserResize:true, 
                            updateOnContentResize:true,
                            autoHideScrollbar: true,
                            autoScrollOnFocus: false
                        }
                    });
                    $('.manuscript-holder').get(0).scrollF = true;
                }
            }
            $('.'+id+'_manuscriptlist').html($('#manuscriptList').html());
            $.common.regain();
        },
        //����ɾ������
        toDelBox:function(event){
            //��ʾ������
            $('.tpl-sidebar-manuscriptlist.cover').show();
            $('.tpl-sidebar-manuscriptlist-box.confirm-box').fadeIn('fast');
            //�رհ�ť�¼�
            $('.confirm-close').off('click').on('click',function(){
                $('.tpl-sidebar-manuscriptlist.cover').hide();
                $('.tpl-sidebar-manuscriptlist-box.confirm-box').fadeOut('fast');
            });
            //ȡ����ť�¼�
            $('.confirm-cancel').off('click').on('click',function(){
                $('.tpl-sidebar-manuscriptlist.cover').hide();
                $('.tpl-sidebar-manuscriptlist-box.confirm-box').fadeOut('fast');
            });
            var index = event.data.index;
            var name = event.data.name;
            $('.tpl-sidebar-manuscriptlist-box.confirm-box .confirm-body').text('�Ƿ�ɾ����'+name+'����');
            //ȷ����ť�¼�
            $('.confirm-ok').off('click').on('click',{index:index},$.tplComponentManuscriptListSetting.delManuscript);
        },
        //ɾ����̬���
        delManuscript:function(event){
            var id = selectedElementInfo.get('id');
            var index = event.data.index;
            $('#'+id+' .manuscriptlist.static .manuscript').eq(index).remove();
            $('#manuscriptList li').eq(index).remove();
            $.each($('#manuscriptList li').get(),function(_index, li) {
                $(li).off('mouseenter').on('mouseenter',{index:_index},function(event) {
                    //��������
                    var _name = $(this).children('.content').text();
                    //ɾ����ť
                    var del = $(this).children('.o-icon').children('.del');
                    //ɾ����ť��ʼ������
                    del.off('click').on('click',{index:event.data.index,name:_name},$.tplComponentManuscriptListSetting.toDelBox);
                    var upload = $(this).children('.o-icon').children('.upload');
                    //���ϴ�ͼƬ����
                    upload.off('click').on('click',{index:event.data.index},$.tplComponentManuscriptListSetting.uploadPicture);
                });                    
            });
            $('.'+id+'_manuscriptlist').html($('#manuscriptList').html());
            $('.tpl-sidebar-manuscriptlist.cover').hide();
            $('.tpl-sidebar-manuscriptlist-box.confirm-box').fadeOut('fast');
        },
        //�ϴ���̬ͼƬ
        uploadPicture:function(event){
            var id = selectedElementInfo.get("id");
            var jsonData = $.tplComponentManuscriptList.manuscriptImgDatas[event.data.index];
            $.dialogUpPic.initDialog(jsonData, 1, function(data) {
                $.tplComponentManuscriptList.manuscriptImgDatas[event.data.index] = data;
                $('#'+id).addClass('staticComponent').removeClass('dynamicComponent');
                $.tplComponentManuscriptListSetting.deleteCmsLm(true);
                $('#'+id+' .manuscriptlist.static .manuscript .img-holder img').eq(event.data.index).attr('src',data.all[0] && data.all[0].path?data.all[0].path:'');
                var imgs = $('#'+id+' .manuscriptlist .manuscript .img-holder img').get();
                $.each(imgs,function(index,img){
                    if($(img).attr('src')){
                        var hWidth = $(img).parent('a').parent('.img-holder').width();
                        var hHeight = $(img).parent('a').parent('.img-holder').height();
                        
                        $.tplComponentManuscriptListSetting.setImageSize(hWidth,hHeight,img);
                        
                    }
                });
                $('.'+id+'_manuscriptimgdatas').text(JSON.stringify($.tplComponentManuscriptList.manuscriptImgDatas));
                $.common.regain();
            },function(){
                
            });

        },
        //ͬ���Ҳ���Ϣ
        setTitleContent:function(obj){
            var id = selectedElementInfo.get("id");
            var title = $(obj).text();
            var index = $('#'+id+' .manuscriptlist.static .manuscript').index($(obj).parents('.manuscript'));
            $('#manuscriptList li').eq(index).children('.content').text(title).attr('title',title);
            $('.'+id+'_manuscriptlist').html($('#manuscriptList').html());
        }
        
	};




})(jQuery);



$(function(){
    try{
    	if ($('head').find('script[name=systemJs]').length > 0) {
    		var id = selectedElementInfo.get('id');
    		//��ӱ߿�Ч��
    		var lists = $('.tpl-component-2016-09-28-manuscriptlist').get();
    		if(lists && lists.length>0){
    			$.each(lists, function(index, list) {
    				//���������ʾ
    		        $(list).off('mouseenter', $.common.mEShowBorder).on('mouseenter', { obj: list }, $.common.mEShowBorder);
    		        //����Ƴ�����
    		        $(list).off('mouseleave', $.common.mLHideBorder).on('mouseleave', { obj: list }, $.common.mLHideBorder);
    		        //�������ʾ
    		        $(list).off('click', $.common.cShowBorder).on('click', { obj: list }, $.common.cShowBorder);
    			});
    		}


    		if (id === "workspace" || id === "workspace-body") {
                return;
            }

            //��ȡ�������ݼ���
            $.tplComponentManuscriptListSetting.baseList = $.parseJSON($('.'+id+'_baseinfo').text());
            //��ȡ�������ݼ���
            $.tplComponentManuscriptListSetting.titleList = $.parseJSON($('.'+id+'_titleinfo').text());
            //��ȡ�ӱ������ݼ���
            $.tplComponentManuscriptListSetting.subTitleList = $.parseJSON($('.'+id+'_subtitleinfo').text());
            //��ȡժҪ���ݼ���
            $.tplComponentManuscriptListSetting.memoList = $.parseJSON($('.'+id+'_memoinfo').text());
            //��ȡ��̬���ݼ���
            $.tplComponentManuscriptListSetting.cmsDatas = $.parseJSON($('.'+id+'_cmsdatas').text());
            //��ȡ����б�����
            $.tplComponentManuscriptListSetting.mainDatas = $.parseJSON($('.'+id+'_maindatas').text());

        	var serverPath = $.common.getComponetIMagesUrl(id);
            if (!$('#' + id).hasClass('first-add')) {
                $.tplComponentManuscriptList.manuscriptImgDatas = [
                    {
                        "yun":[],
                        "local":[{
                            "path":serverPath+'/images/01.png',
                            "name":"�۽�Σ������ġ����д塱",
                            "link":"",
                            "title":"",
                            "content":""
                        }],
                        "all":[{
                            "path":serverPath+'/images/01.png',
                            "name":"�۽�Σ������ġ����д塱",
                            "link":"",
                            "title":"",
                            "content":""
                        }]
                    },
                    {
                        "yun":[],
                        "local":[{
                            "path":serverPath+'/images/02.png',
                            "name":"�õ����ʦӦ���߱�������Ʒ˼ά",
                            "link":"",
                            "title":"",
                            "content":""
                        }],
                        "all":[{
                            "path":serverPath+'/images/02.png',
                            "name":"�õ����ʦӦ���߱�������Ʒ˼ά",
                            "link":"",
                            "title":"",
                            "content":""
                        }]
                    },
                    {
                        "yun":[],
                        "local":[{
                            "path":serverPath+'/images/03.png',
                            "name":"������Ӫ��������Ӫ�ľ�ϸ��ʱ������",
                            "link":"",
                            "title":"",
                            "content":""
                        }],
                        "all":[{
                            "path":serverPath+'/images/03.png',
                            "name":"������Ӫ��������Ӫ�ľ�ϸ��ʱ������",
                            "link":"",
                            "title":"",
                            "content":""
                        }]
                    },
                ];
                    
            	$('#'+id+' .manuscriptlist.static .manuscript .img-holder img').eq(0).attr('src',serverPath+'/images/01.png');
            	$('#'+id+' .manuscriptlist.static .manuscript .img-holder img').eq(1).attr('src',serverPath+'/images/02.png');
            	$('#'+id+' .manuscriptlist.static .manuscript .img-holder img').eq(2).attr('src',serverPath+'/images/03.png');
            	$('#' + id).addClass('first-add');	
            }else{
                if($.trim($('.' + id + '_pgdatas').text())){
                    $.tplComponentManuscriptList.manuscriptImgDatas = $.parseJSON($.trim($('.' + id + '_manuscriptimgdatas').text()));
                }
            }

            var manuscriptlist = $('.'+id+'_manuscriptlist').html();
            //�Ҳ�˵��б�
            var _manuscriptlist = $('#manuscriptList').get();
            if($('#' + id).hasClass('staticComponent') && _manuscriptlist && _manuscriptlist.length>0){
                $('#manuscriptList').html(manuscriptlist);
                $.each($(_manuscriptlist).children('.manuscript').get(),function(_index, li) {
                    $(li).off('mouseenter').on('mouseenter',{index:_index},function(event) {
                        //��������
                        var _name = $(this).children('.content').text();
                        //ɾ����ť
                        var del = $(this).children('.o-icon').children('.del');
                        //ɾ����ť��ʼ������
                        del.off('click').on('click',{index:event.data.index,name:_name},$.tplComponentManuscriptListSetting.toDelBox);
                        var upload = $(this).children('.o-icon').children('.upload');
                        //���ϴ�ͼƬ����
                        upload.off('click').on('click',{index:event.data.index},$.tplComponentManuscriptListSetting.uploadPicture);
                    });                    
                });
                
            }

            setTimeout(function(){
                if($('#manuscriptList').find('.content').length>=6){
                        if(!$('.manuscript-holder').get(0).scrollF){
                            $('.manuscript-holder').mCustomScrollbar({
                                theme:'dark',
                                autoDraggerLength:true,
                                contentTouchScroll: false,
                                documentTouchScroll: false,
                                advanced: {
                                    updateOnBrowserResize:true, 
                                    updateOnContentResize:true,
                                    autoHideScrollbar: true,
                                    autoScrollOnFocus: false
                                }
                            });
                            $('.manuscript-holder').get(0).scrollF = true;
                        }
                }

            },50);

            var jsonData =  [{
                            name: 'Ĭ��',
                            childElement: '',
                            childIndexElement: ' .tpl-component-2016-09-28-manuscriptlist-change',
                            classStyle: 'tpl-component-2016-09-28-manuscriptlist-style',
                            className: '',
                            url: serverPath + '/images/default_pic0.png',
                            fileName: 'index',
                            id: id
                        }, {
                            name: '����ͼƬ',
                            childElement: '',
                            childIndexElement: ' .tpl-component-2016-09-28-manuscriptlist-change',
                            classStyle: 'tpl-component-2016-09-28-manuscriptlist-style',
                            className: 'tpl-component-2016-09-28-manuscriptlist-style1',
                            url: serverPath + '/images/default_pic1.png',
                            fileName: 'noImage',
                            id: id

                        }, {
                            name: '����ͼƬ������ʾ����',
                            childElement: '',
                            childIndexElement: ' .tpl-component-2016-09-28-manuscriptlist-change',
                            classStyle: 'tpl-component-2016-09-28-manuscriptlist-style',
                            className: 'tpl-component-2016-09-28-manuscriptlist-style2',
                            url: serverPath + '/images/default_pic2.png',
                            fileName: 'containSubTitle',
                            id: id

                        }, {
                            name: '���и���б�',
                            childElement: '',
                            childIndexElement: ' .tpl-component-2016-09-28-manuscriptlist-change',
                            classStyle: 'tpl-component-2016-09-28-manuscriptlist-style',
                            className: 'tpl-component-2016-09-28-manuscriptlist-style3',
                            url: serverPath + '/images/default_pic3.png',
                            fileName: 'twoCols',
                            id: id

                        }, {
                            name: '���и���б�',
                            childElement: '',
                            childIndexElement: ' .tpl-component-2016-09-28-manuscriptlist-change',
                            classStyle: 'tpl-component-2016-09-28-manuscriptlist-style',
                            className: 'tpl-component-2016-09-28-manuscriptlist-style4',
                            url: serverPath + '/images/default_pic4.png',
                            fileName: 'threeCols',
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
            var hiddenCb = $.tplComponentManuscriptListSetting.initSetting;
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
            counstomStyle.init(jsonData, 1, callback, hiddenCb, targetFg, '�߼�����б�');
            var className = $('#'+id).attr('class').split(' ')[0];
            // ������е��û�����������Դ
            var sqluserArr = counstomStyle.getUserStyleData(className);
            counstomStyle.formatUserarr(sqluserArr.innerStyleByClassName, function(userarr) {
                // ��ʼ���û����
                counstomStyle.init(userarr, 0, callback, hiddenCb, targetFg, '�߼�����б�');
            });
            // ������ý���
            

    		

    		//��ʼ��������ɫ
    		$.tplComponentManuscriptListSetting.initColor('bgColor',$.tplComponentManuscriptListSetting.setBgColor);
    		//��ʼ��������ɫ
    		$.tplComponentManuscriptListSetting.initColor('titleFontColor',$.tplComponentManuscriptListSetting.setTitleColor);
    		//��ʼ��������ͣ��ɫ
    		$.tplComponentManuscriptListSetting.initColor('titleHoverColor',$.tplComponentManuscriptListSetting.setTitleHoverColor);
    		//��ʼ�����ⱳ����ɫ
    		$.tplComponentManuscriptListSetting.initColor('titleBgColor',$.tplComponentManuscriptListSetting.setTitleBgColor);
    		//��ʼ���ӱ�����ɫ
    		$.tplComponentManuscriptListSetting.initColor('subTitleFontColor',$.tplComponentManuscriptListSetting.setSubTitleColor);
    		//��ʼ��ժҪ��ɫ
    		$.tplComponentManuscriptListSetting.initColor('memoFontColor',$.tplComponentManuscriptListSetting.setMemoColor);
    		//��ʼ����ϸ��ɫ
    		$.tplComponentManuscriptListSetting.initColor('moreColor',$.tplComponentManuscriptListSetting.setMoreColor);
    		//��ʼ����ϸ��ͣ��ɫ
    		$.tplComponentManuscriptListSetting.initColor('moreHoverColor',$.tplComponentManuscriptListSetting.setMoreHoverColor);

    		//��ʼ���Ҳ�˵�
    		$.tplComponentManuscriptListSetting.initSidebar();
           

            //��Ӱ�ť
            $("#addManuscript").off('click', $.tplComponentManuscriptListSetting.addManuscript).on('click', $.tplComponentManuscriptListSetting.addManuscript);

    		//ͼƬ��ť
    		$('#pictureButton .component-radio').off('click').on('click', function(event) {
    	        if (!$(this).children('.radio-checked').attr('class') || $(this).children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).children('.radio-checked').addClass('active');
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $.tplComponentManuscriptListSetting.setPicture($(this).attr('data'));
    	        }
    	    });
    	              
    	    $('#pictureButton .radio-text').off('click').on('click', function(event) {
    	        if (!$(this).prev('.component-radio').children('.radio-checked').attr('class') || $(this).prev('.component-radio').children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $(this).prev('.component-radio').children('.radio-checked').addClass('active');
    	            $.tplComponentManuscriptListSetting.setPicture($(this).prev('.component-radio').attr('data'));
    	        }
    	    });

    	    //ͼƬռ��
    	    $('#imgPercent').off('blur',$.tplComponentManuscriptListSetting.setImgPercent).on('blur',$.tplComponentManuscriptListSetting.setImgPercent);
    	    //��������߶�
    	    $('#contentAreaHeight').off('blur',$.tplComponentManuscriptListSetting.setContentAreaHeight).on('blur',$.tplComponentManuscriptListSetting.setContentAreaHeight);


    		//���ø�����
    		$('#manuscriptADistance').off('blur',$.tplComponentManuscriptListSetting.setManuscriptADistance).on('blur',$.tplComponentManuscriptListSetting.setManuscriptADistance);

            $('#manuscriptVADistance').off('blur',$.tplComponentManuscriptListSetting.setManuscriptVADistance).on('blur',$.tplComponentManuscriptListSetting.setManuscriptVADistance);

    		//��������
    		var cols = $('#cmsCols li').get();
            if (cols && cols.length > 0) {
                $.each(cols, function(index, col) {
                	$(col).off('click', $.tplSidebar.setActiveTwo).on('click', { obj: col }, $.tplSidebar.setActiveTwo);
                    $(col).off('click', $.tplComponentManuscriptListSetting.setCols).on('click', { obj: col }, $.tplComponentManuscriptListSetting.setCols);
                });
            }

            //��������λ�ð�ť
    		$('#positionButton .component-radio').off('click').on('click', function(event) {
    	        if (!$(this).children('.radio-checked').attr('class') || $(this).children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).children('.radio-checked').addClass('active');
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $.tplComponentManuscriptListSetting.setTitleAreaPosition($(this).attr('data'));
    	        }
    	    });
    	              
    	    $('#positionButton .radio-text').off('click').on('click', function(event) {
    	        if (!$(this).prev('.component-radio').children('.radio-checked').attr('class') || $(this).prev('.component-radio').children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $(this).prev('.component-radio').children('.radio-checked').addClass('active');
    	            $.tplComponentManuscriptListSetting.setTitleAreaPosition($(this).prev('.component-radio').attr('data'));
    	        }
    	    });

    	    //����������߰�ť
    		$('#titleAreaBorderButton .component-radio').off('click').on('click', function(event) {
    	        if (!$(this).children('.radio-checked').attr('class') || $(this).children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).children('.radio-checked').addClass('active');
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $.tplComponentManuscriptListSetting.setTitleAreaBorder($(this).attr('data'));
    	        }
    	    });
    	              
    	    $('#titleAreaBorderButton .radio-text').off('click').on('click', function(event) {
    	        if (!$(this).prev('.component-radio').children('.radio-checked').attr('class') || $(this).prev('.component-radio').children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $(this).prev('.component-radio').children('.radio-checked').addClass('active');
    	            $.tplComponentManuscriptListSetting.setTitleAreaBorder($(this).prev('.component-radio').attr('data'));
    	        }
    	    });


    	    //������߰�ť
    		$('#manuscriptBorderButton .component-radio').off('click').on('click', function(event) {
    	        if (!$(this).children('.radio-checked').attr('class') || $(this).children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).children('.radio-checked').addClass('active');
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $.tplComponentManuscriptListSetting.setManuscriptBorder($(this).attr('data'));
    	        }
    	    });
    	              
    	    $('#manuscriptBorderButton .radio-text').off('click').on('click', function(event) {
    	        if (!$(this).prev('.component-radio').children('.radio-checked').attr('class') || $(this).prev('.component-radio').children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $(this).prev('.component-radio').children('.radio-checked').addClass('active');
    	            $.tplComponentManuscriptListSetting.setManuscriptBorder($(this).prev('.component-radio').attr('data'));
    	        }
    	    });


    	    //------------------------��������---------------------------------------------------------------------------
    	    //�������
    	    $('#width').off('blur',$.tplComponentManuscriptListSetting.setWidth).on('blur',$.tplComponentManuscriptListSetting.setWidth);
    	    //��ȵ�λ
    	    var widthUnits = $('#widthUnits li').get();
    		if(widthUnits && widthUnits.length>0){
    			$.each(widthUnits,function(index, unit) {
    				$(unit).off('click',$.tplComponentManuscriptListSetting.setWidthUnit).on('click',{obj:unit},$.tplComponentManuscriptListSetting.setWidthUnit);
    			});
    		}
    		//����ˮƽ����
    		var alignButtons = $("#align .align-img").get();
    		if(alignButtons && alignButtons.length>0){
    			$.each(alignButtons,function(index, btn) {
    				$(btn).off('click',$.tplComponentManuscriptListSetting.setAlign).on('click', {obj:btn},$.tplComponentManuscriptListSetting.setAlign);
    			});
    		}

    		//���ô�ֱ����
    		var vAlignButtons = $('#verticalAlign .vertical-bg').get();
    		if(vAlignButtons && vAlignButtons.length > 0){
    			$.each(vAlignButtons, function(index, btn) {
    				$(btn).off('click',$.tplComponentManuscriptListSetting.setVerticalAlign).on('click',{obj:btn},$.tplComponentManuscriptListSetting.setVerticalAlign);
    				$(btn).off('click',$.tplSidebar.setActiveTwo).on('click',{obj:btn},$.tplSidebar.setActiveTwo);
    			});
    		}

    		//���ñ߾�
    		var distances = $('#distance input.select-content').get();
    		if(distances && distances.length>0){
    			$.each(distances,function(index, distance) {
    				$(distance).val($.tplComponentManuscriptListSetting.baseList[$(distance).attr('distance')]);
    				$(distance).off('blur',$.tplComponentManuscriptListSetting.setDistance).on('blur',{obj:distance}, $.tplComponentManuscriptListSetting.setDistance);
    			});
    		}

    		if($.trim($('.'+id+'_imgdatas').text())){
    			$.tplComponentManuscriptList.imgDatas = $.parseJSON($.trim($('.'+id+'_imgdatas').text()));
    		}
    		$("#bgImage").off('click').on('click',function(){
				$.dialogUpPic.initDialog($.tplComponentManuscriptList.imgDatas, 1, function(data){
					$.tplComponentManuscriptListSetting.setBgImage(data.all[0].path);
					$.tplComponentManuscriptList.imgDatas = data;
					$('.'+id+"_imgdatas").text(JSON.stringify($.tplComponentManuscriptList.imgDatas));
				});
    		});
    		$("#bgImageHolder").off('click').on('click',function(){
				$.dialogUpPic.initDialog($.tplComponentManuscriptList.imgDatas, 1, function(data){
					$.tplComponentManuscriptListSetting.setBgImage(data.all[0].path);
					$.tplComponentManuscriptList.imgDatas = data;
					$('.'+id+"_imgdatas").text(JSON.stringify($.tplComponentManuscriptList.imgDatas));
				});
    		});

    					
    		//����������ͼ
    		$('#bgCancel').off('click',$.tplComponentManuscriptListSetting.clearBgImage).on('click', $.tplComponentManuscriptListSetting.clearBgImage);

    		//�������ͼƬ��λ
    		var positions = $('#bgPosition ul li i').get();
    		if(positions && positions.length>0){
    			$.each(positions, function(index, pos) {
    				$(pos).off('click', $.tplComponentManuscriptListSetting.setPositionVal).on('click', {obj:pos},$.tplComponentManuscriptListSetting.setPositionVal);
    			});
    		}

    		$('#positionX').off('blur').on('blur',function(event){
    			var x = 0;
    			if($.trim($(this).val())!=='' && $.trim($(this).val()).match(/\d+/)!==null){
    				x = $.trim($(this).val()).match(/\d+/);
    				if(x>100){
    					x = 100;
    				}
    			}
    			x = x +'%'; 
    			$('#positionX').val(x);
    			var y = $.trim($('#positionY').val());
    			$.tplComponentManuscriptListSetting.setBgPosition(x,y);
    		});

    		$('#positionY').off('blur').on('blur',function(event){
    			var x = $.trim($('#positionX').val());
    			var y = 0;
    			if($.trim($(this).val())!=='' && $.trim($(this).val()).match(/\d+/)!==null){
    				y = $.trim($(this).val()).match(/\d+/);
    				if(y>100){
    					y = 100;
    				}
    			}
    			y = y +'%'; 
    			$('#positionY').val(y);
    			$.tplComponentManuscriptListSetting.setBgPosition(x,y);
    		});

    		//�������ͼƬƽ��
    		var repeats = $('#bgRepeat i').get();
    		if(repeats && repeats.length>0){
    			$.each(repeats, function(index, repeat) {
    				 $(repeat).off('click', $.tplComponentManuscriptListSetting.setRepeat).on('click', {obj:repeat}, $.tplComponentManuscriptListSetting.setRepeat);
    			});
    		}

    		//-------------------------------�������ý���---------------------------------------------------------------------------------------------------

    		//-------------------------------��������-------------------------------------------------------------------------------------------------------
    		//�������� �رհ�ť
                        
            $('#linkButton .close').off('click').on('click', function() {
                $(this).parent('.slide-button').animate({ left: '-30px' }, 500, function() {
                    try {
                        $('#'+id+' .manuscriptlist .manuscript .title-main .title a').attr({'href':'javascript:;','onclick':'javascript:return false;'});
                        //�洢����
    					$.tplComponentManuscriptListSetting.titleList.link = 'off';
    					$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
                        $.common.regain();
                    } catch (e) {
                        
                    }
                });
            });
                        
            //�������� ������ť
                        
            $('#linkButton .open').off('click').on('click', function() {
                $(this).parent('.slide-button').animate({ left: '0px' }, 500, function() {
                    try {
                    	var links = $('#'+id+' .manuscriptlist .manuscript .title-main .title a').get();
                    	$.each(links,function(index,link){
                    		$(link).attr('href',$(link).attr('_url')).removeAttr('onclick');
                    	});
                    	//�洢����
    					$.tplComponentManuscriptListSetting.titleList.link = 'on';
    					$('.'+id+'_titleinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.titleList));
                        $.common.regain();
                    } catch (e) {
                       
                    }
                });
            });

    		//��ת��ʽ
    		$('#linkTarget .component-radio').off('click').on('click', function(event) {
    	        if (!$(this).children('.radio-checked').attr('class') || $(this).children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).children('.radio-checked').addClass('active');
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $.tplComponentManuscriptListSetting.setTitleLinkTarget($(this).attr('_target'));
    	        }
    	    });
    	              
    	    $('#linkTarget .radio-text').off('click').on('click', function(event) {
    	        if (!$(this).prev('.component-radio').children('.radio-checked').attr('class') || $(this).prev('.component-radio').children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $(this).prev('.component-radio').children('.radio-checked').addClass('active');
    	            $.tplComponentManuscriptListSetting.setTitleLinkTarget($(this).prev('.component-radio').attr('_target'));
    	        }
    	    });

    	    //���ñ���߾�
    		var titleDistances = $('#titleDistance input.select-content').get();
    		if(titleDistances && titleDistances.length>0){
    			$.each(titleDistances,function(index, distance) {
    				$(distance).val($.tplComponentManuscriptListSetting.titleList[$(distance).attr('distance')]);
    				$(distance).off('blur',$.tplComponentManuscriptListSetting.setTitleDistance).on('blur',{obj:distance}, $.tplComponentManuscriptListSetting.setTitleDistance);
    			});
    		}

    		//��������ѡ��
    		var titleFontFamilyOptions = $("#titleFontFamilyOptions li").get();
    		if(titleFontFamilyOptions && titleFontFamilyOptions.length>0){
    			$.each(titleFontFamilyOptions,function(index, opt) {
    				$(opt).off('click',$.tplComponentManuscriptListSetting.setTitleFontFamily).on('click',{obj:opt}, $.tplComponentManuscriptListSetting.setTitleFontFamily);
    			});
    		}
    		//���������С
    		$('#titleFontSize').off('blur',$.tplComponentManuscriptListSetting.setTitleFontSize).on('blur', $.tplComponentManuscriptListSetting.setTitleFontSize);
    		
    		//���������и�
    		$('#titleLineHeight').off('blur',$.tplComponentManuscriptListSetting.setTitleLineHeight).on('blur', $.tplComponentManuscriptListSetting.setTitleLineHeight);
    		
    		//������밴ť
    		var titleAlignButtons = $("#titleAlignButtons .align-img").get();
    		if(titleAlignButtons && titleAlignButtons.length>0){
    			$.each(titleAlignButtons,function(index, btn) {
    				$(btn).off('click',$.tplComponentManuscriptListSetting.setTitleAlign).on('click', {obj:btn},$.tplComponentManuscriptListSetting.setTitleAlign);
    			});
    		}
            //���������ϸ
            $("#titleWeight").off('click').on('click',function(){
                $.tplSidebar.setActiveThree({data:{obj:$("#titleWeight").get(0)}});
                $.tplComponentManuscriptListSetting.setTitleFont({data:{obj:$("#titleWeight").get(0)}});
            });
            //�����»���
            $("#titleDecoration").off('click').on('click',function(){
                $.tplSidebar.setActiveThree({data:{obj:$("#titleDecoration").get(0)}});
                $.tplComponentManuscriptListSetting.setTitleHoverUnderline({data:{obj:$("#titleDecoration").get(0)}});
            });


    		if($.trim($('.'+id+'_titleimgdatas').text())){
    			$.tplComponentManuscriptList.titleImgDatas = $.parseJSON($.trim($('.'+id+'_titleimgdatas').text()));
    		}
            //���ⱳ��ͼƬͼ��
    		$("#titleBgImage").off('click').on('click',function(){
    				$.dialogUpPic.initDialog($.tplComponentManuscriptList.titleImgDatas, 1, function(data){
    					$.tplComponentManuscriptListSetting.setTitleBgImage(data.all[0].path);
    					$.tplComponentManuscriptList.titleImgDatas = data;
    					$('.'+id+"_titleimgdatas").text(JSON.stringify($.tplComponentManuscriptList.titleImgDatas));
    				});
    		});
            //���ⱳ��ͼƬ��ͼ
    		$("#titleBgImageHolder").off('click').on('click',function(){
    				$.dialogUpPic.initDialog($.tplComponentManuscriptList.titleImgDatas, 1, function(data){
    					$.tplComponentManuscriptListSetting.setTitleBgImage(data.all[0].path);
    					$.tplComponentManuscriptList.titleImgDatas = data;
    					$('.'+id+"_titleimgdatas").text(JSON.stringify($.tplComponentManuscriptList.titleImgDatas));
    				});
    		});

    					
    		//����������ͼ
    		$('#titleBgCancel').off('click',$.tplComponentManuscriptListSetting.clearTitleBgImage).on('click', $.tplComponentManuscriptListSetting.clearTitleBgImage);

    		//�������ͼƬ��λ
    		var titlePositions = $('#titleBgPosition ul li i').get();
    		if(titlePositions && titlePositions.length>0){
    			$.each(titlePositions, function(index, pos) {
    				$(pos).off('click', $.tplComponentManuscriptListSetting.setTitlePositionVal).on('click', {obj:pos},$.tplComponentManuscriptListSetting.setTitlePositionVal);
    			});
    		}

    		$('#titlePositionX').off('blur').on('blur',function(event){
    			var x = 0;
    			if($.trim($(this).val())!=='' && $.trim($(this).val()).match(/\d+/)!==null){
    				x = $.trim($(this).val()).match(/\d+/);
    				if(x>100){
    					x = 100;
    				}
    			}
    			x = x +'%'; 
    			$('#titlePositionX').val(x);
    			var y = $.trim($('#titlePositionY').val());
    			$.tplComponentManuscriptListSetting.setTitleBgPosition(x,y);
    		});

    		$('#titlePositionY').off('blur').on('blur',function(event){
    			var x = $.trim($('#titlePositionX').val());
    			var y = 0;
    			if($.trim($(this).val())!=='' && $.trim($(this).val()).match(/\d+/)!==null){
    				y = $.trim($(this).val()).match(/\d+/);
    				if(y>100){
    					y = 100;
    				}
    			}
    			y = y +'%'; 
    			$('#titlePositionY').val(y);
    			$.tplComponentManuscriptListSetting.setTitleBgPosition(x,y);
    		});

    		//�������ͼƬƽ��
    		var titleRepeats = $('#titleBgRepeat i').get();
    		if(titleRepeats && titleRepeats.length>0){
    			$.each(titleRepeats, function(index, repeat) {
    				 $(repeat).off('click', $.tplComponentManuscriptListSetting.setTitleRepeat).on('click', {obj:repeat}, $.tplComponentManuscriptListSetting.setTitleRepeat);
    			});
    		}

    		//--------------------------------------�������ý���-------------------------------------------------------------------------------
    		//--------------------------------------����������---------------------------------------------------------------------------------
    		//���ñ߾�
    		var subDistances = $('#subTitleDistance input.select-content').get();
    		if(subDistances && subDistances.length>0){
    			$.each(subDistances,function(index, distance) {
    				$(distance).val($.tplComponentManuscriptListSetting.subTitleList[$(distance).attr('distance')]);
    				$(distance).off('blur',$.tplComponentManuscriptListSetting.setSubTitleDistance).on('blur',{obj:distance}, $.tplComponentManuscriptListSetting.setSubTitleDistance);
    			});
    		}

    		//��������ѡ��
    		var subTitleFontFamilyOptions = $("#subTitleFontFamilyOptions li").get();
    		if(subTitleFontFamilyOptions && subTitleFontFamilyOptions.length>0){
    			$.each(subTitleFontFamilyOptions,function(index, opt) {
    				$(opt).off('click',$.tplComponentManuscriptListSetting.setSubTitleFontFamily).on('click',{obj:opt}, $.tplComponentManuscriptListSetting.setSubTitleFontFamily);
    			});
    		}
    		//���������С
    		$('#subTitleFontSize').off('blur',$.tplComponentManuscriptListSetting.setSubTitleFontSize).on('blur', $.tplComponentManuscriptListSetting.setSubTitleFontSize);
    		
    		//���������и�
    		$('#subTitleLineHeight').off('blur',$.tplComponentManuscriptListSetting.setSubTitleLineHeight).on('blur', $.tplComponentManuscriptListSetting.setSubTitleLineHeight);
    		
    		//������밴ť
    		var subTitleAlignButtons = $("#subTitleAlignButtons .align-img").get();
    		if(subTitleAlignButtons && subTitleAlignButtons.length>0){
    			$.each(subTitleAlignButtons,function(index, btn) {
    				$(btn).off('click',$.tplComponentManuscriptListSetting.setSubTitleAlign).on('click', {obj:btn},$.tplComponentManuscriptListSetting.setSubTitleAlign);
    			});
    		}

    		//����������ʽ
            $("#subTitleWeight").off('click').on('click',function(){
                $.tplSidebar.setActiveThree({data:{obj:$("#subTitleWeight").get(0)}});
                $.tplComponentManuscriptListSetting.setSubTitleFont({data:{obj:$("#subTitleWeight").get(0)}});
            });
    		//--------------------------------------���������ý���-----------------------------------------------------------------------------
    		//--------------------------------------ժҪ����-----------------------------------------------------------------------------------
    		//��ϸ �رհ�ť
                        
            $('#moreButton .close').off('click').on('click', function() {
                $(this).parent('.slide-button').animate({ left: '-30px' }, 500, function() {
                    try {
                        $('#'+id+' .manuscriptlist .manuscript .content-holder .content a').remove('.more');
                        //�洢����
    					$.tplComponentManuscriptListSetting.memoList.more = 'off';
                        $('#'+id).attr('_more','off');
    					$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
                        $.common.regain();
                    } catch (e) {
                        
                    }
                });
            });
                        
            //��ϸ ������ť
                        
            $('#moreButton .open').off('click').on('click', function() {
                $(this).parent('.slide-button').animate({ left: '0px' }, 500, function() {
                    try {
                    	var contents = $('#'+id+' .manuscriptlist .manuscript .content-holder .content').get();
                    	$.each(contents,function(index,content){
                    		if($.trim($(content).text()).length>0){
                                var url = $(content).attr('_url');
                                var stopStr = '';
                                if(url.search(/javascript/)>=0){
                                    stopStr = 'onclick="javascript:return false;"';
                                }
                    			$(content).append('<a href="'+url+'" '+stopStr+' target="'+$.tplComponentManuscriptListSetting.memoList.target+'" class="more">[��ϸ]</a>');
                    		}
                    	});
                    	//�洢����
    					$.tplComponentManuscriptListSetting.memoList.more = 'on';
                        $('#'+id).attr('_more','on');
    					$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
                        $.common.regain();
                    } catch (e) {
                        
                    }
                });
            });

            //��ת��ʽ
    		$('#moreTarget .component-radio').off('click').on('click', function(event) {
    	        if (!$(this).children('.radio-checked').attr('class') || $(this).children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).children('.radio-checked').addClass('active');
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $.tplComponentManuscriptListSetting.setMemoMoreTarget($(this).attr('_target'));
    	        }
    	    });
    	              
    	    $('#moreTarget .radio-text').off('click').on('click', function(event) {
    	        if (!$(this).prev('.component-radio').children('.radio-checked').attr('class') || $(this).prev('.component-radio').children('.radio-checked').attr('class').search(/active/) < 0) {
    	            $(this).siblings('.component-radio').children('.radio-checked').removeClass('active');
    	            $(this).prev('.component-radio').children('.radio-checked').addClass('active');
    	            $.tplComponentManuscriptListSetting.setMemoMoreTarget($(this).prev('.component-radio').attr('_target'));
    	        }
    	    });

    	    //���� �رհ�ť
                        
            $('#tabButton .close').off('click').on('click', function() {
                $(this).parent('.slide-button').animate({ left: '-30px' }, 500, function() {
                    try {
                        $('#'+id+' .manuscriptlist .manuscript .content-holder .content').removeClass('indent');
                        //�洢����
    					$.tplComponentManuscriptListSetting.memoList.tab = 'off';
    					$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
                        $.common.regain();
                    } catch (e) {
                        
                    }
                });
            });
                        
            //���� ������ť
                        
            $('#tabButton .open').off('click').on('click', function() {
                $(this).parent('.slide-button').animate({ left: '0px' }, 500, function() {
                    try {
                    	$('#'+id+' .manuscriptlist .manuscript .content-holder .content').addClass('indent');
                    	//�洢����
    					$.tplComponentManuscriptListSetting.memoList.tab = 'on';
    					$('.'+id+'_memoinfo').text(JSON.stringify($.tplComponentManuscriptListSetting.memoList));
                        $.common.regain();
                    } catch (e) {
                        
                    }
                });
            });

            //���ñ߾�
    		var memoDistances = $('#memoDistance input.select-content').get();
    		if(memoDistances && memoDistances.length>0){
    			$.each(memoDistances,function(index, distance) {
    				$(distance).val($.tplComponentManuscriptListSetting.memoList[$(distance).attr('distance')]);
    				$(distance).off('blur',$.tplComponentManuscriptListSetting.setMemoDistance).on('blur',{obj:distance}, $.tplComponentManuscriptListSetting.setMemoDistance);
    			});
    		}

    		//ժҪ����ѡ��
    		var memoFontFamilyOptions = $("#memoFontFamilyOptions li").get();
    		if(memoFontFamilyOptions && memoFontFamilyOptions.length>0){
    			$.each(memoFontFamilyOptions,function(index, opt) {
    				$(opt).off('click',$.tplComponentManuscriptListSetting.setMemoFontFamily).on('click',{obj:opt}, $.tplComponentManuscriptListSetting.setMemoFontFamily);
    			});
    		}
    		//ժҪ�����С
    		$('#memoFontSize').off('blur',$.tplComponentManuscriptListSetting.setMemoFontSize).on('blur', $.tplComponentManuscriptListSetting.setMemoFontSize);
    		
    		//ժҪ�����и�
    		$('#memoLineHeight').off('blur',$.tplComponentManuscriptListSetting.setMemoLineHeight).on('blur', $.tplComponentManuscriptListSetting.setMemoLineHeight);
    		
    		//ժҪ���밴ť
    		var memoAlignButtons = $("#memoAlignButtons .align-img").get();
    		if(memoAlignButtons && memoAlignButtons.length>0){
    			$.each(memoAlignButtons,function(index, btn) {
    				$(btn).off('click',$.tplComponentManuscriptListSetting.setMemoAlign).on('click', {obj:btn},$.tplComponentManuscriptListSetting.setMemoAlign);
    			});
    		}

    		//��ϸ������ʽ
            $("#moreWeight").off('click').on('click',function(){
                $.tplSidebar.setActiveThree({data:{obj:$("#moreWeight").get(0)}});
                $.tplComponentManuscriptListSetting.setMoreFont({data:{obj:$("#moreWeight").get(0)}});
            });
            $("#moreDecoration").off('click').on('click',function(){
                $.tplSidebar.setActiveThree({data:{obj:$("#moreDecoration").get(0)}});
                $.tplComponentManuscriptListSetting.setMoreUnderline({data:{obj:$("#moreDecoration").get(0)}});
            });
    		//--------------------------------------ժҪ���ý���-------------------------------------------------------------------------------

    		//--------------------------------------cms��̬����--------------------------------------------------------------------------------
    		//����������¼�
            $('#cmsDocNum').off('blur').on('blur',$.tplComponentManuscriptListSetting.setCMSTag);

    		//ͼƬ������¼�
    	    $('#cmsTitle .title-button .list').off('click').on('click',function(){
    	        var $check = $(this).children('.title-check');
    	        if($check.hasClass('active')){
    	            $check.removeClass('active');
                    if(Number($check.attr('doc'))===1){
                        $('#subTitleMarginTop').removeAttr('disabled');
                        $('#subTMTLable').removeClass('no-edit');
                        $('#subTitleMarginTop').val($.tplComponentManuscriptListSetting.subTitleList['margin-top']);
                    }
    	        }else{
    	            $check.addClass('active');
                    if(Number($check.attr('doc'))===1){
                        $('#subTitleMarginTop').attr('disabled','disabled');
                        $('#subTMTLable').addClass('no-edit');
                        $('#subTitleMarginTop').val('');
                    }
    	        }
                $.tplComponentManuscriptListSetting.setCMSTag();
            });

            //ժҪ�������¼�
            $('#cmsContentNum').off('blur').on('blur',$.tplComponentManuscriptListSetting.setCMSTag);



    	    //������Ͱ��¼�
    	                
    	    $('#cmsDocType .type-checkbox').off('click').on('click',function(){
    	        var $check = $(this).children('.type-check');
    	        if($check.hasClass('active')){
    	            $check.removeClass('active');
    	        }else{
    	            $check.addClass('active');
    	        }
    	        $.tplComponentManuscriptListSetting.setCMSTag();   
    	    });

            //�����ʾλ�ð��¼�
            $('#cmsDocPos').off('blur').on('blur',$.tplComponentManuscriptListSetting.setCMSTag);
    		
    		//�������ΰ��¼�
    	    $('#cmsBatchRule .batch-radio').off('click').on('click',function(){
    	        $(this).addClass('active').siblings('.batch-radio').removeClass('active');
    	        $.tplComponentManuscriptListSetting.setCMSTag();
    	    });
    	    $('#cmsBatchRule label').off('click').on('click',function(){
    	        $(this).prev('.batch-radio').addClass('active').siblings('.batch-radio').removeClass('active');
    	        $.tplComponentManuscriptListSetting.setCMSTag();
    	    });
            //��ʼ����̬��Դ����
            $.tplComponentManuscriptListSetting.initDynamicDatas();
    	    //---------------------------------------------------------------------------------------------------------------------------------
            //����϶��ı��С
            $.tplComponentResize.initResizeComponent(id,function(width){
                $('#width').val(width);
                $('#width').trigger('blur');
            },function(left){
                $('#marginLeft').val(left);
                $('#marginLeft').trigger('blur',[true]);
            });
            //����΢�����λ��
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

            //�Ҳ�˵�
            $.customMenu.init(id);
            
    	}else{
                var isIE = !!window.ActiveXObject  ; 
                var mLists = $('.tpl-component-2016-09-28-manuscriptlist').get();
                $.each(mLists, function(index, list) {
                    var id = $(list).attr('id');
                    var showPic = $(list).attr('_pic');
                    var percent = showPic==='on'?Number($(list).attr('_percent').split(' ')[0]):0;
                    var contentPercent = 100 - percent;
                    var imgs = $('#'+id+' .manuscriptlist:eq(0) .manuscript .img-holder img').get();
                    $.each(imgs,function(index,img){
                        var _img = new Image();
                        _img.src = $(img).attr('src');
                        if((!isIE && $(img).attr('src') && $(img).attr('src').search(/./)>0) || (isIE && _img.fileSize > 0 && $(img).attr('src').search(/./)>0) ){
                            $(img).parent('a').parent('.img-holder').css('width',percent+'%');
                            $(img).parent('a').parent('.img-holder').next('.content-holder').css('width',contentPercent+'%');
                            var hWidth = $(img).parent('a').parent('.img-holder').width();
                            var hHeight = $(img).parent('a').parent('.img-holder').height();
                            $.tplComponentManuscriptListSetting.setImageSize(hWidth,hHeight,img);
                        }
                    });
                    //ˮƽ���
                    var val1 = $('#'+id).attr('_val1');
                    //��ֱ���
                    var val2 = $('#'+id).attr('_val2');
                    //����
                    var cols = $('#'+id).attr('_cols');
                    $.tplComponentManuscriptListSetting.resetManuscriptDistance(val1,val2,id,cols);

                    if ($('#'+id).attr('_more') === 'off') {
                        $('#'+id+' .manuscriptlist:eq(0) .manuscript .content-holder .content a').remove('.more');
                    } else {
                        $('#'+id+' .manuscriptlist:eq(0) .manuscript .content-holder .content a').remove('.more');
                        var contents = $('#'+id+' .manuscriptlist:eq(0) .manuscript .content-holder .content').get();
                        $.each(contents,function(index,content){
                            if($.trim($(content).text()).length>0){
                                $(content).append('<a href="'+$(content).attr('_url')+'" target="'+$.tplComponentManuscriptListSetting.memoList.target+'" class="more">[��ϸ]</a>');
                            }
                        });
                    }
                });

        }
    } catch (e) {
       
    }
});