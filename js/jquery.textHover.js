(function ($) { 
$.fn.textHover = function (options) {//options 经常用这个表示有许多个参数。 
	var defaultVal = { 
	classa: 'classa', 
	classb: 'classb'
	}; 
	//默认值 
	var obj = $.extend(defaultVal, options); 
	return this.each(function () { 
	var selObject = $(this);//获取当前对象 
	selObject.hover(function () {//定义一个hover方法。 
	selObject.addClass(obj.classb);
	selObject.removeClass(obj.classa);
	}, 
		function () { 
		selObject.addClass(obj.classa);
	    selObject.removeClass(obj.classb);
		}); 
	}); 
} 
})(jQuery);
