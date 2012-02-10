<?php /* Smarty version Smarty 3.1.4, created on 2012-02-10 12:50:38
         compiled from "templates\index-header.tpl" */ ?>
<?php /*%%SmartyHeaderCode:175574f35129eee8ea5-98563122%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    'f03f3a629709bb0eb827f3a6a5c4896556d864de' => 
    array (
      0 => 'templates\\index-header.tpl',
      1 => 1328440554,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '175574f35129eee8ea5-98563122',
  'function' => 
  array (
  ),
  'variables' => 
  array (
    'sTitle' => 0,
    'APP_URL' => 0,
    'SJQUERY_UI_CSS' => 0,
    'SJQUERY_LIB' => 0,
    'SJQUERY_UI_JS' => 0,
    'SSIMPLEFORUM_JS' => 0,
  ),
  'has_nocache_code' => false,
  'version' => 'Smarty 3.1.4',
  'unifunc' => 'content_4f35129f3243e',
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_4f35129f3243e')) {function content_4f35129f3243e($_smarty_tpl) {?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">

<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=iso-8859-1" />
<title><?php echo $_smarty_tpl->tpl_vars['sTitle']->value;?>
</title>
      <link href="<?php echo $_smarty_tpl->tpl_vars['APP_URL']->value;?>
css/Facebook.css" rel="stylesheet" type="text/css" />
      <link href="<?php echo $_smarty_tpl->tpl_vars['APP_URL']->value;?>
css/devsite.css" rel="stylesheet" type="text/css" />
	 <link href="<?php echo $_smarty_tpl->tpl_vars['APP_URL']->value;?>
css/forum.css" rel="stylesheet" type="text/css" />
	  
      <link href="<?php echo $_smarty_tpl->tpl_vars['SJQUERY_UI_CSS']->value;?>
" rel="stylesheet" type="text/css" />
	  <script type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['SJQUERY_LIB']->value;?>
"></script>
	  <script type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['SJQUERY_UI_JS']->value;?>
"></script>
	  <script type="text/javascript" src="<?php echo $_smarty_tpl->tpl_vars['SSIMPLEFORUM_JS']->value;?>
"></script>
	  
       <style type="text/css">
          form { display: block }
         div.postright, div.postfootright { background-color:#FFFFFF; }
         #topic { background-color:#FFFFFF; }
         div.inbox#admin { background-color:#DEE4F2; }
         div.postright#admin, div.postfootright#admin { background-color:#DEE4F2; }

         #dev_site_navigator div.center_box {
               margin: 0 auto;
               width: 980px
         }
         body {
          text-align: left;
         }

         form { display: block }

         body { background: #fff; font-size: 12px; text-align: left; }
               .tcl, .tcr, td.tc2, td.tc3, div.box  { background-color: #fff; }
       </style>
</head>
<body><?php }} ?>