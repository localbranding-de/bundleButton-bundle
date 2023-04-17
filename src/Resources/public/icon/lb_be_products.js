jQuery.noConflict();

jQuery( document ).ready(addCalcListeners());

setTimeout(function(){ addCalcListeners(); }, 500);
function mutationListener()
{
var onceList = document.getElementById("ctrl_lb_costTypeOnceList");
var recurrList = document.getElementById("ctrl_lb_costTypeRecurrList");
var onceListContact = document.getElementById("ctrl_lb_costTypeOnceListContact");
var recurrListContact = document.getElementById("ctrl_lb_costTypeRecurrListContact");

var MutationObserver = window.MutationObserver ||
    window.WebKitMutationObserver || 
    window.MozMutationObserver;

var observer1 = new MutationObserver(function(mutations) {  
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
           console.log("mutation!");
           addCalcListeners();
        }
    });
});
var observer2 = new MutationObserver(function(mutations) {  
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList') {
           console.log("mutation!");
           addCalcListeners();
        }
    });
});
observer1.observe(onceList, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
});
observer2.observe(recurrList, {
    attributes: true,
    childList: true,
    characterData: true,
    subtree: true
});
}
function addCalcListeners() {

	jQuery('#ctrl_lb_costTypeOnceList tr').each(function(){
		
		var oncePrice = jQuery(this).find(' .price input').val();
		var onceQunatity = jQuery(this).find(' .quantity input').val();
		var onceEndPrice = jQuery(this).find('.endPrice input');
		onceEndPrice.val((oncePrice*onceQunatity).toFixed(2));
		
	});

	jQuery('#ctrl_lb_costTypeRecurrList tr').each(function(){
		
		var oncePrice = jQuery(this).find(' .price input').val();
		var onceQunatity = jQuery(this).find(' .quantity input').val();
		var onceEndPrice = jQuery(this).find('.endPrice input');
		onceEndPrice.val((oncePrice*onceQunatity).toFixed(2));
		
	});
	jQuery('#ctrl_lb_costTypeOnceListContact tr').each(function(){
		
		var oncePrice = jQuery(this).find(' .price input').val();
		var onceQunatity = jQuery(this).find(' .quantity input').val();
		var onceEndPrice = jQuery(this).find('.endPrice input');
		onceEndPrice.val((oncePrice*onceQunatity).toFixed(2));
		
	});

	jQuery('#ctrl_lb_costTypeRecurrListContact tr').each(function(){
		
		var oncePrice = jQuery(this).find(' .price input').val();
		var onceQunatity = jQuery(this).find(' .quantity input').val();
		var onceEndPrice = jQuery(this).find('.endPrice input');
		onceEndPrice.val((oncePrice*onceQunatity).toFixed(2));
		
	});

	endPrices();
	jQuery('#ctrl_lb_costTypeOnceList input').change(updateEndPrice);
	jQuery('#ctrl_lb_costTypeRecurrList input').change(updateEndPrice);
	jQuery('#ctrl_lb_costTypeOnceListContact input').change(updateEndPrice);
	jQuery('#ctrl_lb_costTypeRecurrListContact input').change(updateEndPrice);

	function updateEndPrice()
	 {
		endPrices();
		var price = jQuery(this).closest('tr').find('.price input').val().replace(",",".");
		var quantity = jQuery(this).closest('tr').find('.quantity input').val();
		var end = jQuery(this).closest('tr').find('.endPrice input');
		end.val((price*quantity).toFixed(2));
	 }
	function endPrices(){
		
		var sumOnce=0;
		var sumRecurr =0;
		var sumOnceC=0;
		var sumRecurrC =0;
		jQuery('#ctrl_lb_costTypeOnceList tr .endPrice input').each(function(){
			sumOnce +=Number(jQuery(this).val());	
		});
		jQuery('#ctrl_lb_costTypeRecurrList tr .endPrice input').each(function(){
			sumRecurr +=Number(jQuery(this).val());
		});

		jQuery('#ctrl_lb_costTypeOnceListContact tr .endPrice input').each(function(){
			sumOnceC +=Number(jQuery(this).val());	
		});
		jQuery('#ctrl_lb_costTypeRecurrListContact tr .endPrice input').each(function(){
			sumRecurrC +=Number(jQuery(this).val());
		});
		jQuery('#ctrl_lb_sumPurchasePriceOnce').val(sumOnce);
		jQuery('#ctrl_lb_sumPurchasePriceRecurr').val(sumRecurr);
		jQuery('#ctrl_lb_sumPurchasePriceOnceContact').val(sumOnceC);
		jQuery('#ctrl_lb_sumPurchasePriceRecurrContact').val(sumRecurrC);
	}
	setTimeout(function(){ mutationListener(); }, 700);
	

}