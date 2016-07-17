$(function(J) {
    "use strict";
    var fileUpoader = $('#upmp3');

    fileUpoader.on('change', function(e) {
        var file = this.files[0],
            reader = new FileReader();

        reader.onloadend = function(e) {
            var result = this.result;
            
            if(result.slice(0,3) === 'ID3') {
                // 获取Image数据
                var imgdata = getApic(result);
                typeof imgdata === 'string' && insertImage(btoa(imgdata));
            } else {
                alert('找不到ID3信息');
            }
        };

        reader.readAsBinaryString(file);
    });
    
    
    // 计算Tag 的大小
    function getTagSize (str) {
        if(typeof str === 'string' && str.length === 4) {
            var total = (str.charCodeAt(0)&0x7f)*0x200000 
                      + (str.charCodeAt(1)&0x7f)*0x400
                      + (str.charCodeAt(2)&0x7f)*0x80
                      + (str.charCodeAt(3)&0x7f);
                return total;
        } else {
            throw Error('参数错误!');
        }
    }
    
    // 计算帧大小
    function getFrameSize (str) {
        if(typeof str === 'string' && str.length === 4) {
            var total = str.charCodeAt(0)*0x100000000
            + str.charCodeAt(1)*0x10000
            + str.charCodeAt(2)*0x100
            + str.charCodeAt(3);
            return total;
        
        } else {
            throw Error('参数错误！');
        }
    }
    
    // 帧 列表
    var Frames = {
        'TPE1' :'作者',
        'TIT2' :'标题',
        'TYER' :'年代',
        'APIC' :'专辑图片',
        'TALB' :'专辑'
    };
    
    function insertImage(a) {
        var img = new Image();
            img.src = 'data:image/jpeg;base64,' + a;
            img.className = 'imd';
        $('.wp').append(img);
    }
    
    // 获取专辑图片
    function getApic(result) {
        // 专辑信息位置
        var index = result.indexOf('APIC');
        
        if(index < 0) {
            alert('找不到专辑图片');
            return false;
        }
        // 图片信息大小
        var picsize = getFrameSize(result.substr(index+4, 4)),
        // 图片信息块1
            pic1 = result.substr(index+10 , picsize),
        // 图片信息块2
            pic2 = pic1.slice(pic1.indexOf('\xff\xd8'));
            
        return pic2;
    }
    
    // 遍历一个字符串
    function eachStr(a) {
        J.each(a.split(''), function(i, e){
            console.log('第%d个字符%s, 编码为%d', i, e, e.charCodeAt(0));
        });
    }
    
    
});