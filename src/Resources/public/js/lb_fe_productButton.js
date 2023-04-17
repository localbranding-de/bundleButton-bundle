function productFunction(e){

			var product = jQuery(e).closest('.jsProductButton').attr('product');
			jQuery.ajax({

			    url : window.location.href,
			    type : 'POST',
			    data : {
			    	'type' : 'productToCart',
			        'productNr' :  product.toString()
			    },
			    dataType:'json',
			    success : function(data) {              
			    	jQuery("#miniCart_1").load(location.href + " #miniCart_1");
			    	jQuery('body').append('<div id="cartMessage" class=" bundle-message-success hasBeenPutInCart lsfwk-effectAutohide lsfwk-ap-center lsfwk-bgc-spotcolor1 lsfwk-success"><span class="lsfwk-txs-l lsfwk-txc-inverted">Das Produkt wurde dem Warenkorb hinzugefügt!</span></div>');
			    	setTimeout(function(){ jQuery('#cartMessage').remove(); }, 4000);
			    },
			    error : function(request,error)
			    {
			        alert("Fehler");
			    }
			});
	
	
	
}