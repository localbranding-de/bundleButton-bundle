<?php


if(\Input::get('do') == 'lb_bundles')
{
    
    
    $GLOBALS['TL_JAVASCRIPT'][] = '/assets/jquery/js/jquery.min.js';
    $GLOBALS['TL_JAVASCRIPT'][] = '/bundles/extendedproductdetail/js/lb_be_bundle.js';
   // $GLOBALS['TL_CSS'][] = '/bundles/extendedproductdetail/css/lb_be_font.css';
    //$GLOBALS['TL_CSS'][] = '/files/theme_lb_demoshop/css/lb-default.css';
    
}

// Frontend modules
$GLOBALS['FE_MOD']['LocalBranding Module']['productButton'] = 'LocalbrandingDe\ExtendedProductDetailBundle\Module\ProductButtonModule'; 
$GLOBALS['FE_MOD']['LocalBranding Module']['bundleButton'] = 'LocalbrandingDe\ExtendedProductDetailBundle\Module\BundleButtonModule';


$GLOBALS['FE_MOD']['LocalBranding Module']['bundleHandler'] = 'LocalbrandingDe\ExtendedProductDetailBundle\Module\BundleHandlerModule';


array_insert($GLOBALS['BE_MOD'], 1,
    array(
        
        'lb_calculation' => array
        (
            'lb_bundles' => array
            (
                'tables'        => array('tl_lb_productBundle')
            ),
        )
    )
    )
    ;
