import $ from 'jquery'


$.fn.extend({
    textareaAutoHeight: function (options) {
        console.log('get int')
        this._options = {
            minHeight: 0,
            maxHeight: 1000
        }
 
        this.init = function () {
            for (var p in options) {
                this._options[p] = options[p];
            }
            if (this._options.minHeight == 0) {
                this._options.minHeight=parseFloat($(this).height());
            }
            for (var p in this._options) {
                if ($(this).attr(p) == null) {
                    $(this).attr(p, this._options[p]);//设置它的属性  
                }
            }
            $(this).keyup(this.resetHeight).change(this.resetHeight)
            .focus(this.resetHeight);
            $(this).on('input', this.resetHeight);
        }
        this.resetHeight = function () {
            var _minHeight = parseFloat($(this).attr("minHeight"));//读取它的属性
            console.log(_minHeight);
            var _maxHeight = parseFloat($(this).attr("maxHeight"));
            
 
            if (!$.support.msie) {
                $(this).height(0);
            }
            var h = parseFloat(this.scrollHeight);
            h = h < _minHeight ? _minHeight :
                        h > _maxHeight ? _maxHeight : h;
            $(this).height(h).scrollTop(h);
            if (h >= _maxHeight) {
                $(this).css("overflow-y", "scroll");
            }
            else {
                $(this).css("overflow-y", "hidden");
            }
        }
        this.init();
    }
})