function bundleFunction(e){

			var bundle = jQuery(e).closest('.jsBundleButton').attr('bundle');
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
			    	if(data==0)
			    		{
			    		jQuery('body').append('<div id="cartMessage" class=" bundle-message-fail hasBeenPutInCart lsfwk-effectAutohide lsfwk-ap-center lsfwk-bgc-spotcolor1 lsfwk-success"><span class="lsfwk-txs-l lsfwk-txc-inverted">Dieses Bundle liegt bereits in Deinem Warenkorb. Bundles sind nur je einmal pro Bestellung möglich.</span></div>');
				    	setTimeout(function(){ jQuery('#cartMessage').remove(); }, 4000);
			    		}
			    	else
			    		{
			    		jQuery('body').append('<div id="cartMessage" class=" bundle-message-success hasBeenPutInCart lsfwk-effectAutohide lsfwk-ap-center lsfwk-bgc-spotcolor1 lsfwk-success"><span class="lsfwk-txs-l lsfwk-txc-inverted">Die Produkte des Bundles wurden dem Warenkorb hinzugefügt!</span></div>');
				    	setTimeout(function(){ jQuery('#cartMessage').remove(); }, 4000);
			    		}
			    	
			    },
			    error : function(request,error)
			    {
			        alert("Fehler");
			    }
			});
	
	
	
}