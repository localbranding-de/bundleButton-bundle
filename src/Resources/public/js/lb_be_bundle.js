jQuery.noConflict();


setTimeout(function(){ addBundleListeners();

jQuery('#ctrl_packageItems_row0_product option').each(function(){


	localStorage.setItem(jQuery(this).val(),parseFloat(jQuery(this).attr('price')));
	localStorage.setItem(jQuery(this).val()+"Unit",parseFloat(jQuery(this).attr('sellingUnit')));


	});
}, 500);


setTimeout(function(){ jQuery('#ctrl_packageItems .widgetImage').click(function(){setTimeout(function(){
	
	addBundleListeners(); }, 500);});}, 500);	

jQuery( document ).ready(function(){
	jQuery('.tl_submit').click(function(){

		jQuery('.sUnit input, .price input, .ssumprice input, .summAll input').prop( "disabled", false );
		});
	
});

setTimeout(function(){ addCalcListeners(); }, 500);
setTimeout(function(){
	jQuery(document).bind('DOMNodeInserted', function(e) {
	    var element = e.target;
	    if(jQuery(element).is("#ctrl_packageItems tr")) {
	    	addBundleListeners();
	    	addCalcListeners();
	    }           
	});
	}, 700);
function addBundleListeners() {
	
	jQuery('#ctrl_packageItems select').change(function()
			{
		
		jQuery('#ctrl_packageItems option:selected').each(function(){
			if(!isNaN(localStorage.getItem(jQuery(this).val()))){
			jQuery(this).closest('td').siblings('.price').find('input').val(localStorage.getItem(jQuery(this).val()));
			jQuery(this).closest('td').siblings('.sUnit').find('input').val(localStorage.getItem(jQuery(this).val()+"Unit"));
			}
			else
				{
				
				jQuery(this).closest('td').siblings('.price').find('input').val(0);
				jQuery(this).closest('td').siblings('.sUnit').find('input').val(1);
				}
			updateEndPrice(this);
		});
		
			});

	jQuery('#ctrl_packageItems option').each(function(){
		var str = jQuery(this).html();
		if(jQuery(this).val()==27)
		{

		}
		var price = str.substring(
			    str.indexOf("$") + 1, 
			    str.lastIndexOf("$")
			);
		var sellingUnit = str.substring(
			    str.indexOf("§") + 1, 
			    str.lastIndexOf("§")
			);
		
		if(!isNaN(sellingUnit))
		{
	jQuery(this).attr('sellingUnit',sellingUnit);
		}
	else
		{
		jQuery(this).attr('sellingUnit',1);
		}
		
		if(!isNaN(price))
			{
		jQuery(this).attr('price',price);
			}
		else
			{
			jQuery(this).attr('price',0);
			}
		jQuery(this).html(str.replace(/(\§)(.*?)(\§)/,"").replace(/(\$)(.*?)(\$)/,""));

		str = jQuery(this).html();
		if(str.includes("/_/"))
			{
			jQuery(this).html(str.replace("/_/",""));
				jQuery(this).prop("disabled",true);
				jQuery(this).html(jQuery(this).html().replace(/(\$)(.*?)(\$)/,""));
				jQuery(this).html(jQuery(this).html().replace(/(\§)(.*?)(\§)/,""));
			}
		if(jQuery(this).val().includes("-"))
			{
				jQuery(this).css("font-style","italic");
				jQuery(this).css("color","#107BD8");
			}

		
	});

	jQuery('#ctrl_packageItems option:selected').each(function(){
		if(!isNaN(localStorage.getItem(jQuery(this).val())))
			{
			jQuery(this).closest('td').siblings('.price').find('input').val(localStorage.getItem(jQuery(this).val()));
			jQuery(this).closest('td').siblings('.sUnit').find('input').val(localStorage.getItem(jQuery(this).val()+"Unit"));
	}
		else
			{
			jQuery(this).closest('td').siblings('.price').find('input').val(0);
			jQuery(this).closest('td').siblings('.sUnit').find('input').val(1);
			}
		
	});


}
class MutationListener {
	
	
	constructor() {
		 this.observe()

	}
	
	
	observe()
{
	
	this.onceList = document.getElementById("ctrl_packageItems");


	this.MutationObserver = window.MutationObserver ||
	    window.WebKitMutationObserver || 
	    window.MozMutationObserver;

	this.observer1 = new MutationObserver(function(mutations) {  
	    mutations.forEach(function(mutation) {
	        if (mutation.type === 'childList' && mutation.target.nodeName== "TBODY") {
	          
	           addCalcListeners();
	        }
	    });
	});

	this.observer1.observe(this.onceList, {
	    attributes: true,
	    childList: true,
	    characterData: true,
	    subtree: true
	});


}
disconnect()
{
	
	this.observer1.disconnect();
}


}
function addCalcListeners() {
	jQuery('.sUnit input, .price input, .ssumprice input, .summAll input').prop( "disabled", true );
	 
	jQuery('#ctrl_packageItems tr').each(function(){
		
		var oncePrice = jQuery(this).find('.price input').val();
		var onceQuantity = jQuery(this).find('.quantity input').val();
		var oncesUnit = jQuery(this).find('.sUnit input').val();
		var onceEndPrice = jQuery(this).find('.ssumprice input');
		if(!isNaN(oncePrice) && !isNaN(onceQuantity) && !isNaN(oncesUnit)  )
		{
		onceEndPrice.val(((oncePrice*oncesUnit)*onceQuantity).toFixed(2));
		}
	});


	endPrices();
	jQuery('#ctrl_packageItems input').change(function(){updateEndPrice(this);});

	
	


}

function updateEndPrice(e = this)
 {
	
	var price = jQuery(e).closest('tr').find('.price input').val();
	var quantity = jQuery(e).closest('tr').find('.quantity input').val();
	var sUnit = jQuery(e).closest('tr').find('.sUnit input').val();
	var end = jQuery(e).closest('tr').find('.ssumprice input');
	if(!isNaN(price) && !isNaN(quantity) && !isNaN(sUnit)  )
		{
	end.val(((price*quantity)*sUnit).toFixed(2));
		
	endPrices();
		}

 }
function endPrices(){
	
	var sumOnce=0;

	jQuery('#ctrl_packageItems tr .ssumprice input').each(function(){
		if(!isNaN(jQuery(this).val()))
			{
		sumOnce +=Number(jQuery(this).val());
			}
	});

	jQuery('#ctrl_sumPriceAll').val(sumOnce);
	

}
