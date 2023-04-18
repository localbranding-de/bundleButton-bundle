<?php




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
