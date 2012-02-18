<?php /* Smarty version Smarty 3.1.4, created on 2012-02-18 05:27:20
         compiled from "templates\index-body.tpl" */ ?>
<?php /*%%SmartyHeaderCode:188584f35129f394af1-44522994%%*/if(!defined('SMARTY_DIR')) exit('no direct access allowed');
$_valid = $_smarty_tpl->decodeProperties(array (
  'file_dependency' => 
  array (
    '4dbf8bff4fdfcb673868d00ef17c2093b7ad0a3a' => 
    array (
      0 => 'templates\\index-body.tpl',
      1 => 1329312201,
      2 => 'file',
    ),
  ),
  'nocache_hash' => '188584f35129f394af1-44522994',
  'function' => 
  array (
  ),
  'version' => 'Smarty 3.1.4',
  'unifunc' => 'content_4f35129f82426',
  'variables' => 
  array (
    'sTitle' => 0,
  ),
  'has_nocache_code' => false,
),false); /*/%%SmartyHeaderCode%%*/?>
<?php if ($_valid && !is_callable('content_4f35129f82426')) {function content_4f35129f82426($_smarty_tpl) {?><div class="devsiteHeader">
  <div class="devsiteContent">
  <div id="login_status">
  </div>
	  <h1><a href="#none" style='text-decoration:none;color:#333333' onclick="Simpleforum.execReset()"><?php echo $_smarty_tpl->tpl_vars['sTitle']->value;?>
</a></h1>
		<div id="navigator" class="clearfix">
			<div class="search">
			   <form>
				   <input type="hidden" name="action" value="search"/>
				   <input class="txt" type="text" name="keywords" id="keyword"/>
				   <input class="inputsubmit" type="button" onclick="Simpleforum.execSearch();" value="Find"/>
			  </form>
			</div>
		</div>
  </div>
</div>
<div class="devsiteBody">
  <div id="punviewforum" class="devsiteContent clearfix pun">
	<div id="list_area">
		<div class="linkst">
			<div class="inbox">
				<p class="pagelink conl" id="list_page1"></p>
				<p class="postlink conr"><a href="#none"  onclick="Simpleforum.execAddPost();">Post new topic</a></p>
				<div class="clearer"></div>
			</div>
		</div>
				<div id="vf" class="blocktable">
					<h2><span>Forum Plug-In</span></h2>
					<div class="box">
						<div class="inbox">
							<table cellspacing="0">
							<thead>
								<tr>
									<th class="tcl" scope="col">Topic</th>
									<th class="tc2" scope="col">Replies</th>
									<th class="tc3" scope="col">Views</th>
									<th class="tcr" scope="col">Last post</th>
								</tr>
							</thead>
							<tbody id="list_post"></tbody>
							</table>
						</div>
					</div>
				</div>
		<div class="linksb">
			<div class="inbox">
				<p class="pagelink conl" id="list_page2"></p>
				<p class="postlink conr"><a href="#none" onclick="Simpleforum.execAddPost();">Post new topic</a></p>
				<p class="subscribelink clearb"></p>
			</div>
		</div>    
	</div>
	
	<div id="view_post" style="display:none;">
		
			<div class="linkst">
				<div class="inbox">
					<p class="pagelink conl" id="list_reply_page1"></p>
					<p class="postlink conr"><a href="#none" onclick="Simpleforum.execBack()" class='topic_title'></a></p>
					<div class="clearer"></div>
				</div>
			</div>
			<div id="reply_list"></div>
			<!--
			<div class="blockpost roweven">
				<h2><span><span class="conr">#1&nbsp;</span><a href="viewtopic.php?pid=298672#p298672">2010-12-15 21:23:12</a></span></h2>
				<div class="box">
					<div class="inbox" id="topic">
						<div class="postleft">
							<dl>
								<dt><strong>xenowjm</strong></dt>
								<dd class="postavatar"></dd>
								<dd>Registered: 2010-12-15</dd>
							</dl>
						</div>
						<div class="postright" id="admin">
							<h3>[ANS] Getting information for my web site..?</h3>
							<div class="postmsg">
								<p>Hello~<br /><br />I added &quot;like&quot; button for my website. <br /><br />And somebody clicked the button.. Then it might be posted to his Facebook.<br /><br />What I want to know is.. the &quot;somebody&quot;. I want to know who clicked the button.<br /><br />Can I get the information of vistors from Facebook?<br /><br />(e.g. name, email like that..)</p>
								<p class="postedit"><em>Last edited by xenowjm (2010-12-15 21:24:46)</em></p>
							</div>
						</div>
						<div class="clearer"></div>
						<div class="postfootright" id="admin"><ul><li class="postdelete"><a href="delete.php?id=298672">Delete</a> | </li><li class="postedit"><a href="edit.php?id=298672">Edit</a></ul></div>
					</div>
				</div>
			</div>
			-->
			<div class="postlinksb">
				<div class="inbox">
					<p class="postlink conr"></p>
					<p class="pagelink conl"  id="list_reply_page2" class='topic_title'></p>
					<p class="subscribelink clearb"></p>
				</div>
			</div>
		

			<div class="blockform">
				<h2><span>Quick post</span></h2>
				<div class="box">
					<form>					
						<div class="inform">
							<div id="reply_user_form"></div>
						</div>
					</form>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="devsiteFooter">
  <div class="devsiteContent">
    <div class="copyright">Forum 2011</div>
  </div>
</div>







<!-- Hidden forms-->
<div id="add_post" style="display:none;">
	<div class="blockform">
		<h3><span>Post new topic</span></h3>
		<div class="box">
			<form id="post" method="post">
				<div class="inform">
					<fieldset>
						<legend>Write your message and submit</legend>
						<div class="infldset txtarea">
						  <label><strong>Name</strong><br /><input class="longinput" id="add_post_name" type="text" name="req_subject" value="" size="80" maxlength="70" tabindex="1" /><br /></label>
						  <label><strong>Password</strong><br /><input class="longinput" id="add_post_password"  type="password" name="req_subject" value="" size="80" maxlength="70" tabindex="1" /><br /></label>
							<label><strong>Subject</strong><br /><input class="longinput" type="text" id="add_post_subject" name="req_subject" value="" size="80" maxlength="70" tabindex="1" /><br /></label>
							<label><strong>Message</strong><br />
							<textarea name="req_message" rows="5" id="add_post_message" style="resize:none;" cols="20" tabindex="2"></textarea><br /></label>
						</div>
					</fieldset>
				</div>
				<div class="inform">
					<fieldset>
						<legend>Options</legend>
						<div class="infldset">
							<div class="rbox">
								<label><input type="checkbox" name="show_smiley" id="show_smiley" tabindex="3" />Never show smilies as icons for this post<br /></label>
							</div>
						</div>
					</fieldset>
				</div>
				<p><input type="button" name="submit" value="Submit" tabindex="5" accesskey="s" onclick="Simpleforum.execSavePost()" /> <input type="button" name="close" value="close" tabindex="5" accesskey="s" /></p>
			</form>
		</div>
	</div>
</div>

<div id="edit_post" style="display:none;">
	<div class="mini_box">
		<label>Password : <input type="password" /> <input type="button" value="Submit" /></label>
	</div>
</div>

<div id="delete_post" style="display:none;">
	<div class="mini_box">
		<label>Password : <input type="password" id="delete_reply_password" /> <input type="button" value="Submit" onclick="Simpleforum.execReplyDeleteConfirm();"/></label>
	</div>
</div>

<div id="login_form" style="display:none;" title="Login ">
	<div class="blockform">
		<div class="box">
			<form id="post" method="post">
				<div class="inform">
					<fieldset>
						<legend>Please enter your username and password</legend>
						<div class="infldset txtarea">
						  <label><strong>Username</strong><br /><input class="longinput" id="login_username" type="text" value="" size="80" maxlength="70" tabindex="1" /><br /></label>
						  <label><strong>Password</strong><br /><input class="longinput" id="login_password"  type="password" value="" size="80" maxlength="70" tabindex="1" /><br /></label>
						</div>
					</fieldset>
				</div>
				<div class="inform">
					<fieldset>
						<legend>Lost ID/Password?</legend>
						<div class="infldset">
							<div class="rbox">
								<label>To search and recover your password, Please click <a href="#none" onclick="Simpleforum.execRecoverForm()">here</a></label>
							</div>
						</div>
					</fieldset>
				</div>
				<p><input type="button" name="submit" value="Submit" tabindex="5" accesskey="s" onclick="Simpleforum.execLogin()" /> <input type="button" name="close" value="close" tabindex="5" accesskey="s" /></p>
			</form>
		</div>
	</div>
</div>

<div id="registration_form" style="display:none;" title="Registration Form">
	<div class="blockform">
		<div class="box">
			<form id="post" method="post">
				<div class="inform">
					<fieldset>
						<legend>Please fill up the following fields.</legend>
						<div class="infldset txtarea">
						  <label><strong>Name</strong><br /><input class="longinput" id="register_name" type="text" name="req_subject" value="" size="80" maxlength="70" tabindex="1" /><br /></label>
						  <label><strong>Username</strong><br /><input class="longinput" id="register_username" type="text" name="req_subject" value="" size="80" maxlength="70" tabindex="1" /><br /></label>
						  <label><strong>Password</strong><br /><input class="longinput" id="register_password"  type="password" name="req_subject" value="" size="80" maxlength="70" tabindex="1" /><br /></label>
						  <label><strong>Confirm Password</strong><br /><input class="longinput" id="register_cpassword"  type="password" name="req_subject" value="" size="80" maxlength="70" tabindex="1" /><br /></label>
						  <label><strong>Email</strong><br /><input class="longinput" id="register_email"  type="text" name="req_subject" value="" size="80" maxlength="70" tabindex="1" /><br /></label>
						
						  <label><strong>Security Question</strong>
							<br />
								<select id="register_questions"></select>
							<br />
						  </label>
						  <label><strong>Your Answer</strong><br />
						  <input class="longinput" id="register_answer"  type="text" name="req_subject" value="" size="80" maxlength="70" tabindex="1" /><br />
						</div>
					</fieldset>
				</div>
				<p><input type="button" name="submit" value="Submit" tabindex="5" accesskey="s" onclick="Simpleforum.execSaveRegistration()" /> <input type="button" name="close" value="close" tabindex="5" accesskey="s" /></p>
			</form>
		</div>
	</div>
</div>

<div id="logout_form" style="display:none;" title="Logout">
	<div class="mini_box">
		<center>
			<label><h4>Are you sure you want to log out?</h4>
				<input type="button" value="Logout" onclick="Simpleforum.execLogout();"/> <input type="button" id="asdasd" value="Cancel" onclick="Simpleforum.execCloseDialog('logout_form')" />
			</label>
		</center>
	</div>
</div>

<div id="recover_form" style="display:none;" title="Login ">
	<div class="blockform">
		<div class="box">
			<form id="post" method="post">
				<div class="inform">
					<fieldset>
						<legend>Select from the criteria</legend>
							<div class="infldset">
								<div class="rbox">
									<label><input type='radio' name='recover_type' onclick="Simpleforum.execCriteria('userid')" value='userid' checked="checked"> Search User Id</label> <label><input type='radio' onclick="Simpleforum.execCriteria('question')"  name='recover_type'> Answer a question</label>
									<div class='select_type_recover'>
										<label>Your User Id : <input type="text" style='width:194px;' id='userid'></label>
										<div id='select_userid'>
											<div id='userid_list'>
												<ul id='result_list'></ul>
											</div>
										</div>
										<div  id='select_question' style='display:none;'>
											<div>
												<br />
												<br />
												Select on the question.<br />
												<select id='secure_question'>
												</select>
												<br />
												<br />
												Your Answer : <br />											
												<input type='text' id='secure_answer'>
											</div>
									</div>
								</div>
							</div>
					</fieldset>
				</div>
				<p style='text-align:center'><input type="button" name="submit" value="Submit" tabindex="5" accesskey="s" onclick="Simpleforum.execGetAccount()" /> <input type="button" name="close" value="close" tabindex="5" accesskey="s" /></p>
			</form>
		</div>
	</div>
</div>


<div id="user_add_post" style="display:none;">
	<div class="blockform">
		<h3><span>Post new topic</span></h3>
		<div class="box">
			<form id="post" method="post">
				<div class="inform">
					<fieldset>
						<legend>Write your message and submit</legend>
						<div class="infldset txtarea">
							<label><strong>Subject</strong><br /><input class="longinput" type="text" id="user_subject" size="80" maxlength="70" tabindex="1" /><br /></label>
							<label><strong>Message</strong><br />
							<textarea name="req_message" rows="5" id="user_comment" style="resize:none;" cols="20" tabindex="2"></textarea><br /></label>
						</div>
					</fieldset>
				</div>
				<div class="inform">
					<fieldset>
						<legend>Options</legend>
						<div class="infldset">
							<div class="rbox">
								<label><input type="checkbox" name="show_smiley" id="show_user_smiley" tabindex="3" />Never show smilies as icons for this post<br /></label>
							</div>
						</div>
					</fieldset>
				</div>
				<p><input type="button" name="submit" value="Submit" tabindex="5" accesskey="s" onclick="Simpleforum.execSaveUserPost()" /> <input type="button" name="close" value="close" tabindex="5" accesskey="s" /></p>
			</form>
		</div>
	</div>
</div>

<div id="user_edit_post" style="display:none;">
	<div class="blockform">
		<div class="box">
			<form id="post" method="post">
				<div class="inform">
					<div class="infldset txtarea">
						<label><strong>Message</strong><br />
						<textarea name="req_message" rows="5" id="user_update_comment" style="resize:none;" cols="20" tabindex="2"></textarea><br /></label>
					</div>
				</div>
				<p><input type="button" name="submit" value="Submit" tabindex="5" accesskey="s" onclick="Simpleforum.execUpdateUserPost()" /> <input type="button" name="close" value="close" tabindex="5" accesskey="s" /></p>
			</form>
		</div>
	</div>
</div>
<!-- Hidden forms-->


<?php }} ?>