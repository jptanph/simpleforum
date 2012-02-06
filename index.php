<?php
$_DOCUMENT_ROOT = $_SERVER['DOCUMENT_ROOT'];
require_once($_DOCUMENT_ROOT . '/lib/environment.php');
define('APP_URL' ,APP_PATH . '/simpleforum/');
class Index_forum
{
	private $_oSmarty;
	private $_sTplFolder;
	public function __construct()
	{
		$this->_oSmarty = new Smarty();
		$this->_sTplFolder = 'templates/';
		$this->_init();
	}
	
	public function _init()
	{	
		$this->_assign('sTitle','JSONP Simple Forum | Pacificindio');
		$this->_assign('SJQUERY_LIB',JQUERY_LIB);
		$this->_assign('SJQUERY_UI_JS',JQUERY_UI_JS);
		$this->_assign('SJQUERY_UI_CSS',JQUERY_UI_CSS);
		$this->_assign('SSIMPLEFORUM_JS',APP_URL . 'js/simpleforum.js');
		$this->_assign('APP_URL',APP_URL);
		$this->_viewTemplate('index-header.tpl');
		$this->_viewTemplate('index-body.tpl');
		$this->_viewTemplate('index-footer.tpl');
	}
	
	private function _assign($sKey,$sVal)
	{
		$this->_oSmarty->assign($sKey,$sVal);
	}
	
	private function _viewTemplate($sTpl)
	{
		$this->_oSmarty->display($this->_sTplFolder . $sTpl);
	}
	
	private function _fetchTemplate($sTpl)
	{
		$this->_oSmarty->fetch($this->_sTplFolder . $sTpl);
	}
}

$oIndexForum = new Index_forum();