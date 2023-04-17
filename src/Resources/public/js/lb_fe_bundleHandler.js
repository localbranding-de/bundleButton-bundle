function myfunction(e){

			var bundle = jQuery(e).closest('.bundlebtn').attr('bundle');
			jQuery.ajax({

			    url : window.location.href,
			    type : 'POST',
			    data : {
			    	'type' : 'bundleToCart',
			        'bundleNr' :  bundle.toString()
			    },
			    dataType:'json',
			    success : function(data) {              
			    	jQuery("#miniCart_1").load(location.href + " #miniCart_1");
			    },
			    error : function(request,error)
			    {
			        
			    }
			});
	
	
	
}
setTimeout(function(){ 	jQuery('.lb-new-quantity-confirm, .lsfwk-fi-delete').css('display','none');


jQuery('<button type="button" class="lsfwk-fi lsfwk-fi-ok lsfwk-pointer lsfwk-mgl-s lb-quantity"></button>').insertAfter('.lb-new-quantity-confirm');
jQuery('.lb-quantity').click(function(){

	var input = jQuery(this).closest('form').find('.quantity-item input').val();
	var item = jQuery(this).closest('.shopProduct').attr('code');
	var prod = jQuery(this).closest('.shopProduct');
	var here = jQuery(this);
	jQuery.ajax({

	    url : window.location.href,
	    type : 'POST',
	    data : {
	    	'type' : 'changeQuantity',
	        'item' :  item,
	        'quantity' : input
	    },
	    dataType:'json',
	    success : function(data) {              
	    	if(data == 0)
	    		{
	    		
	    		Swal.fire({
	    			  title: 'Rabatt entfernen?',
	    			  text: "Diese Änderung führt dazu, dass der Rabatt-Gutschein entfernt wird.",
	    			  icon: 'warning',
	    			  showCancelButton: true,
	    			  confirmButtonText: 'Löschen & Rabatt entfernen',
	    			  cancelButtonText: 'Rabatt sichern',
	    			  customClass: {
	    				    cancelButton: 'button0 button1',
	    				    confirmButton: 'button0 button2'
	    				},
	    			  reverseButtons: true
	    			}).then((result) => {
	    			  if (result.value) {
	    				 
	    			    Swal.fire({
	    			    	title: 'Erledigt',
	    			    	text: 'Die Änderung wurde durchgeführt, Rabatt-Gutschein wurde entfernt.',
	    			    	type: 'success',
	    			    	showCancelButton: false,
	    			    	confirmButtonText: 'OK',
	    			    	customClass: {confirmButton: "button0 button1"}
	    			    }).then(function(){
	    			    	jQuery.ajax({

	    			    	    url : window.location.href,
	    			    	    type : 'POST',
	    			    	    data : {
	    			    	    	'type' : 'removeBundle',
	    			    	        'item' :  item,
	    			    	        'quantity' : input
	    			    	    }

	    			    	});
	    			    	jQuery(prod).find('.lsfwk-fi-ok').prev().trigger("click");
	    			    });
	    			  }
	    			})
	    		}
	    	else if(data == 1)
	    		{
	    		jQuery(prod).find('.lsfwk-fi-ok').prev().trigger("click");
	    		}
	    	else if(data == 2)
    		{
	    		
	    		Swal.fire({
	    				title: 'Produkt mit Mindestmenge',
	    				text:'Die eingestellte Menge unterschreitet die Mindestmenge. Die Bestellmenge wird auf Mindestmenge zurückgesetzt.',
	    				icon: 'info',
	    				showCancelButton: false,
    			    	confirmButtonText: 'OK',
    			    	customClass: {confirmButton: "button0 button1"}	    				
	    		}).then((result) => {
	    			var text=jQuery(prod).find('.quantity .field-content.lsfwk-floatRight-small').text().trim().match(/\d+/)[0];
		    		jQuery(here).closest('form').find('.quantity-item input').val(text);
		    			})
		    			

    		}
	    	else if(data == 3)
    		{
    		jQuery(prod).find('.lsfwk-fi-ok').prev().trigger("click");
    		}
	    },
	    error : function(request,error)
	    {
	        alert("Fehler");
	    }
	});
});

jQuery('<button type="button" class="lsfwk-fi lsfwk-fi-delete lsfwk-pointer lsfwk-mgl-s lb-delete"></button>').insertAfter('.lsfwk-fi-delete');
jQuery('.lb-delete').click(function(){

	var item = jQuery(this).closest('.shopProduct').attr('code');
	var prod = jQuery(this).closest('.shopProduct');
	jQuery.ajax({

	    url : window.location.href,
	    type : 'POST',
	    data : {
	    	'type' : 'removeItem',
	        'item' :  item

	    },
	    dataType:'json',
	    success : function(data) {              
	    	if(data == 0)
	    		{
	    		
	    		Swal.fire({
	    			  title: 'Rabatt entfernen?',
	    			  text: "Diese Änderung führt dazu, dass der Rabatt-Gutschein entfernt wird.",
	    			  icon: 'warning',
	    			  showCancelButton: true,
	    			  confirmButtonText: 'Löschen & Rabatt entfernen',
	    			  cancelButtonText: 'Rabatt sichern',
	    			  customClass: {
	    				    cancelButton: 'button0 button1',
	    				    confirmButton: 'button0 button2'
	    				},
	    			  reverseButtons: true
	    			}).then((result) => {
	    			  if (result.value) {
	    				 
	    			    Swal.fire({
	    			    	title: 'Erledigt',
	    			    	text: 'Die Änderung wurde durchgeführt, Rabatt-Gutschein wurde entfernt.',
	    			    	type: 'success',
	    			    	showCancelButton: false,
	    			    	confirmButtonText: 'OK',
	    			    	customClass: {confirmButton: "button0 button1"}
	    			    }).then(function(){
	    			    	jQuery.ajax({

	    			    	    url : window.location.href,
	    			    	    type : 'POST',
	    			    	    data : {
	    			    	    	'type' : 'removeBundle',
	    			    	        'item' :  item
	    			    	    }

	    			    	});
	    			    	jQuery(prod).find('.lsfwk-fi-delete').prev().trigger("click");
	    			    });
	    			  }
	    			})
	    		}
	    	else
	    		{
	    		jQuery(prod).find('.lsfwk-fi-delete').prev().trigger("click");
	    		}
	    },
	    error : function(request,error)
	    {
	        alert("Fehler");
	    }
	});
});
}, 500);	

