/**
 * Description of MultiColumn
 *
 * #@author yasirmehmood
 */
 /**
 * USAGE 
 *
 **/ 
 /**  $('.registrant_cont-0').multiColumn({minfields: 10,columns: 2}); **/
 
(function(jQuery) {
    jQuery.fn.multiColumn = function(options) {
        var defaults = {			
            minfields: 4,
            columns: 3
        };		
        this.each(function(){
            var settings = jQuery.extend(defaults, options);
            var totalListElements = jQuery(this).children('fieldset').size();
            var numofcolumns = settings.columns;
            if(totalListElements > settings.minfields){
                var maxfieldlength = (settings.columns * settings.minfields);
                if(totalListElements > maxfieldlength){
                    numofcolumns =settings.columns;
                }else{
                    numofcolumns = Math.ceil(totalListElements/settings.minfields);
                }
                var x = totalListElements;
                var y = numofcolumns;
                var a = Math.ceil(x / y);
                var b = x % y;
                var c = y - b;
                var d = x - (b * a);
                var e = d / c;
                var nthp = 0;
                var ct = 0;
                var ind = 0;
                for(var i=0; i < b; i++) {
                    nthp = ct;
                    ct = nthp + a;
                    jQuery('fieldset:nth("'+nthp+'")', this).before('<div class="multi-columns col-'+ind+'"></div>');
                    var element = jQuery('fieldset', this).slice(nthp, ct).detach();
                    jQuery(this).find('div.col-'+ind).append(element);
                    ind++;
                }
                for(var i=0; i < c; i++) {
                    nthp = ct;
                    ct = nthp + e;
                    jQuery('fieldset:nth("'+nthp+'")', this).before('<div class="multi-columns col-'+ind+'"></div>');
                    var element = jQuery('fieldset', this).slice(nthp,ct).detach();
                    jQuery(this).find('div.col-'+ind).append(element);
                    ind++;
                }
            }            	
        });
    };
})(jQuery);