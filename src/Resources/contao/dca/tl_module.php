<?php
// dca/tl_module.php


$GLOBALS['TL_DCA']['tl_module']['fields']['bundle'] = array
(
    'label'                 => &$GLOBALS['TL_LANG']['tl_module']['bundle'],
    'exclude'               => true,
    'inputType'             => 'select',
    //'options'               => $GLOBALS['TL_LANG'][$table]['myselect']['options'],
    'foreignKey'            => 'tl_lb_productBundle.bundleName',
    //'options_callback'      => ['CLASS', 'METHOD'],
    'eval'                  => ['includeBlankOption'=>true, 'tl_class'=>'w50'],
    'sql'                   => "varchar(255) NOT NULL default ''"
);


$GLOBALS['TL_DCA']['tl_module']['fields']['buttonLabel'] = array
(
    'label' => array('Button Text', 'Bitte Beschriftung des Buttons eingeben.'),
    'inputType' => 'text',
    'eval' => array('tl_class' => 'w50'),
    'sql'                   => "varchar(255) NOT NULL default ''"
);

$GLOBALS['TL_DCA']['tl_module']['fields']['buttonColor'] = array
(
    'label' => array('Buttonfarbe', 'Bitte Buttonstil wählen.'), 
    'inputType' => 'radio',
    'options' => array(
        'button1' => 'farbig',
        'button2' => 'hell',
        'button3' => 'dunkel',
    ),
    'eval' => array('tl_class' => 'w50'),
    'sql'                   => "varchar(255) NOT NULL default 'button1'"
);

// dca/tl_module.php

$GLOBALS['TL_DCA']['tl_module']['palettes']['bundleButton'] = '{type_legend},name,type;';
$GLOBALS['TL_DCA']['tl_module']['palettes']['bundleButton'].= '{template_legend:hide},customTpl;';
$GLOBALS['TL_DCA']['tl_module']['palettes']['bundleButton'].= '{protected_legend:hide},protected;{expert_legend:hide},guests,cssID;{invisible_legend:hide},invisible,start,stop';
