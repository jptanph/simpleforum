$(document).ready(function(){
	Simpleforum.init(1);
});
var Simpleforum = {
	page_tracker : 1,
	change_idx : 0,
	keyword : '',
	total_rows : 0,
	limit : 0,
	parent_idx : 0,
	retrieve_type : 'userid',
	user_view_id : 0,
	domain_url : 'http://apps-domain.pacificindio.ph/simpleforum',
	init : function(page){		
		this.execLoginStatus();
		var sHtml = '';
		var page = (page=='') ? 1 : page;
		var keyword = (this.keyword=='') ? '' : this.keyword;
		$("#view_post").hide();
		$("#list_area").show();
		
		$.getJSON(
			Simpleforum.domain_url + '?callback=?',
			{
				request : 'post',
				page : page,
				keyword : keyword
			},function(server_response){
				Simpleforum.total_rows= server_response.total_record;
				Simpleforum.limit = server_response.limit;
				var paginate = Simpleforum.pagination(page,'Simpleforum.init');
									
				if(server_response.list){
					$.each(server_response.list,function(index,value){
						sHtml += "				<tr class='isticky'>\n";
						sHtml += "					<td class='tcl'>\n";
						sHtml += "						<div class='intd'>\n";
						sHtml += "							<div class='icon " + value.more +"'><div class='nosize'><!-- --> Sticky</div></div>\n";
						sHtml += "							<div class='tclcon'>\n";
						sHtml += ((value.more=='inew') ? '<strong>' : '');
						sHtml += "								<span class='stickytext'></span><a href='#none' onclick='Simpleforum.execViewPost(" + value.idx + ",1)'>" + value.subject + "</a> <span class='byuser'>by&nbsp;" + value.full_name + "</span>&nbsp; " + value.pagination + " \n";
						sHtml += ((value.more=='inew') ? '</strong>' : '');
						sHtml += "							</div>\n";
						sHtml += "						</div>\n";
						sHtml += "					</td>\n";
						sHtml += "					<td class='tc2'>" + value.total_reply + "</td>\n";
						sHtml += "					<td class='tc3'>" + value.views + "</td>\n";
						sHtml += "					<td class='tcr'><a href='#none' onclick='Simpleforum.execViewPost(" + value.idx + "," + value.last_page	 +")'>" + value.last_reply_date + "</a> <span class='byuser'>by&nbsp;" + value.last_reply_name + "</span></td>\n";
						sHtml += "				</tr>\n";
					});
					
				}else{
					sHtml += "				<tr class='isticky'>\n";
					sHtml += "					<td class='tcl' style='text-align:center' colspan='4'>No record</td>\n";
					sHtml += "				</tr>\n";
				}
				
				$("#list_post").html(sHtml);
				$("#list_page1").html(paginate);
				$("#list_page2").html(paginate);
				$("#login_form").dialog('close');
				$("#logout_form").dialog('close');
			}
		);
		
		$("input[type='button']").button().css({'height':'24px','fontSize' : '12px','padding-top':'3px'});

		this.page_tracker = page;
		
	},execViewPost : function(idx,page){
		$("#list_area").hide();
		
		var sHtml = '';
		var login_idx = Simpleforum.execCheckLogin('idx');
		
		
			$.getJSON(
			Simpleforum.domain_url + '?callback=?',
			{
				request : 'view',
				idx : idx,
				login_idx : login_idx,
				page : page
			},function(server_response){
				$("#view_post").show();
				Simpleforum.total_rows= server_response.total_record;
				Simpleforum.limit = server_response.limit;

				var paginate = Simpleforum.pagination(page,'Simpleforum.reply');
				if(server_response.list){
				$.each(server_response.list,function(index,value){
					$(".topic_title").html('<< ' + server_response.post_subject);
					sHtml += "<div class='blockpost rowodd firstpost'>\n";
					sHtml += "	<h2><span><span class='conr'>#" + + value.row + "</span><a href='#'>" + value.last_reply_date + "</a></span></h2>\n";
					sHtml += "	<div class='box'>\n";
					sHtml += "		<div class='inbox' id='admin'>\n";
					sHtml += "			<div class='postleft'>\n";
					sHtml += "				<dl>\n";
					sHtml += "					<dt><strong>" + value.full_name + "</strong></dt>\n";
					sHtml += "					<dd class='postavatar'></dd>\n";
					sHtml += "					<dd>[ " + value.user_type + " ]</dd>\n";
					sHtml += "				</dl>\n";
					sHtml += "			</div>\n";
					sHtml += "			<div class='postright' id='topic'>\n";
					sHtml += "				<h3> Re: [ANS] Getting information for my web site..?</h3>\n";
					sHtml += "				<div class='postmsg'>\n";
					sHtml += "					<p>" + value.message + "<br /><br /><br /></p>\n";
					sHtml += "				</div>\n";
					sHtml += "			</div>\n";
					sHtml += "			<div class='clearer'></div>\n";
					sHtml += "			<div class='postfootright' id='topic'>\n";
					sHtml += value.has_option;
					sHtml += "		</div>\n";
					sHtml += "		</div>\n";
					sHtml += "	</div>\n";
					sHtml += "</div>\n";

				});
				$("#reply_list").html(sHtml);
				$("#list_reply_page1").html(paginate);
				$("#list_reply_page2").html(paginate);
			}
		});
		
		this.parent_idx = idx;
		
	},execSearch : function(){
		var keywords = $("#keyword");
		this.keyword = keywords.val();
		this.init(1);		
	
	},execAddPost : function(){
		var username =  Simpleforum.execCheckLogin('username');
		var idx =  Simpleforum.execCheckLogin('idx');
		if(username && idx){
			$("#user_add_post").dialog({
				width:500,
				title : 'Add New Post',
				modal : true,
				draggable : false
			});

		}else{
			$("#add_post").dialog({
				width:500,
				title : 'Add New Post',
				modal : true,
				draggable : false
			});		
		}
	},execSavePost : function(){
	
		var name = $("#add_post_name");
		var password = $("#add_post_password");
		var subject = $("#add_post_subject");
		var message = $("#add_post_message");
		var show_smiley = ($("#show_smiley").is(":checked") == true ) ? 'no' : 'yes';
		$.getJSON(
			Simpleforum.domain_url + '?callback=?',
			{
				request : 'savepost',
				name : name.val(),
				password : name.val(),
				subject : subject.val(),
				message : message.val(),
				smiley : show_smiley
			},function(server_response){
				Simpleforum.keyword = '';
				Simpleforum.init(1)
				$("#add_post").dialog('close');	
			
			}
		);
		
	},execSaveReply : function(){
		var name = $("#reply_name");
		var password = $("#reply_password");
		var message = $("#reply_message");
		$.getJSON(
		Simpleforum.domain_url + '?callback=?',
		{
			parent_idx : Simpleforum.parent_idx,
			request : 'savereply',
			name : name.val(),
			password : name.val(),
			message : message.val()
		},function(server_response){
			Simpleforum.execViewPost(Simpleforum.parent_idx,server_response.last_page)
		});	
	},execEditPost : function(){
		$("#edit_post").dialog({
			title : 'Edit Reply',
			width : 355,
			modal : true,
			resizable : false
		});
	},execDeletePost : function(idx){		
		$("#delete_post").dialog({
			title : 'Delete Reply',
			width : 355,			
			modal : true,
			resizable : false
		});
		this.change_idx = idx;
	},execReplyDeleteConfirm : function(){
		
		var delete_password = $("#delete_reply_password");
		$.getJSON(
		Simpleforum.domain_url + '?callback=?',
		{
			request : 'deletereply',
			idx : Simpleforum.change_idx,
			password : delete_password.val()
		},function(server_response){
			
		});
	},reply : function(page){
	
		this.execViewPost(this.parent_idx,page);	
	
	},execBack : function(){
		this.init(this.page_tracker);
	},execLoginForm : function(){
		$("#login_form").dialog({
			width:390,
			draggable : false,
			modal:true
		});
	},execLogin : function(){
	
		var username = $("#login_username");
		var password = $("#login_password");
		$.getJSON(
		Simpleforum.domain_url + '?callback=?',
		{
			request : 'login',
			username : username.val(),
			password : password.val()
		},function(server_response){
			Simpleforum.execSetLogin('username',server_response.username,365);
			Simpleforum.execSetLogin('idx',server_response.idx,365);
			Simpleforum.init(1);
		});	
	
	},execRegistrationForm : function(){
		var sHtml = '';
		
		$.getJSON(
		Simpleforum.domain_url + '?callback=?',
		{
			request : 'registrationform'
		},function(server_response){
			if(server_response)
			{
				sHtml += "<option value='0'>-select-</option>";
				$.each(server_response,function(index,value){
					sHtml += "<option value=" + value.idx + ">" + value.question + "</option>";
				});
				$("#register_questions").html(sHtml);
				
				$("#registration_form").dialog({
					width:390,
					draggable : false,
					modal:true
				});
			}		
		});
	},execSaveRegistration : function(){
	
		var name = $("#register_name");
		var username = $("#register_username");
		var password = $("#register_password");
		var confirm_password = $("#register_cpassword");
		var email = $("#register_email");
		var question = $("#register_questions");
		var answer = $("#register_answer");
		$.getJSON(
		Simpleforum.domain_url + '?callback=?',
		{
			request : 'saveregistration',
			question_idx : question.val(),
			name : name.val(),
			username : username.val(),
			password : password.val(),
			email : email.val(),
			question : question.val(),
			answer : answer.val()
		},function(server_response){
		
		});
		
	},execSetLogin : function(cookie_key,cookie_value,expiredays){
		var exdate = new Date();
		
		exdate.setDate(exdate.getDate()+expiredays);
		document.cookie=cookie_key+ "=" +escape(cookie_value)+
		((expiredays==null) ? "" : ";expires="+exdate.toUTCString());

	},execCheckLogin : function(cookie_name){
		
		if (document.cookie.length>0){
		
		  c_start = document.cookie.indexOf(cookie_name + "=");
		  
		  if (c_start!=-1){
				c_start=c_start + cookie_name.length+1;
				c_end=document.cookie.indexOf(";",c_start);
					if (c_end==-1){
						c_end=document.cookie.length;
					}
				return unescape(document.cookie.substring(c_start,c_end));
			}
		}
		return "";

	},execLoginStatus : function(){
	
		var sHtml = '';
		var sHtmlReplyForm = '';
		var username =  Simpleforum.execCheckLogin('username');
		var idx =  Simpleforum.execCheckLogin('idx');
		
		if(username && idx){			
			sHtml += "<div id='log_in' style='float: right;font-family:arial'><strong>Welcome,  " + username +" </strong>[ <a href='#none' onclick='Simpleforum.execLogoutForm();'>Logout</a> ]</div>";		
			
			sHtmlReplyForm += "<fieldset>\n";
			sHtmlReplyForm += "	<legend>Write your message and submit</legend>\n";
			sHtmlReplyForm += "	<div class='infldset txtarea'>\n";
			sHtmlReplyForm += "		<label><textarea name='req_message' id='reply_message' style='resize:none;' rows='7' cols='75' tabindex='1'></textarea></label>\n";
			sHtmlReplyForm += "	</div>\n";
			sHtmlReplyForm += "</fieldset>\n";
			sHtmlReplyForm += "<p><input type='button' name='submit' tabindex='2' value='Submit' accesskey='s' onclick='Simpleforum.execSaveUserReply()'/> <input onclick='Simpleforum.execBack();'  type='button' name='close' value='close' tabindex='5' accesskey='s' /></p>\n";		
		}else{
			sHtml += "<div id='log_in' style='float: right;font-family:arial'><strong>Welcome,  Guest </strong>[ <a href='#none' onclick='Simpleforum.execLoginForm();' id='login-link'>Login</a> ]</div>";
			sHtml += "<div id='forum_register' style='margin-top: 3px; float: right; clear: both; color: gray;font-family:arial'><strong>Don't have an ID? </strong>[ <a href='#' onclick='Simpleforum.execRegistrationForm();' id='registration-link'>Register</a> ]</div>";

			sHtmlReplyForm += "<fieldset>\n";
			sHtmlReplyForm += "	<legend>Write your message and submit</legend>\n";
			sHtmlReplyForm += "	<div class='infldset txtarea'>\n";
			sHtmlReplyForm += "		<label><strong>Name</strong><br /><input class='longinput' type='text' name='req_subject' id='reply_name' value='' size='80' maxlength='70' tabindex='1' /><br /></label>\n";
			sHtmlReplyForm += "		<label><strong>Password</strong><br /><input class='longinput' type='password' name='req_subject' id='reply_password' value='' size='80' maxlength='70' tabindex='1' /><br /></label>\n";
			sHtmlReplyForm += "		<label><textarea name='req_message' id='reply_message' style='resize:none;' rows='7' cols='75' tabindex='1'></textarea></label>\n";
			sHtmlReplyForm += "	</div>\n";
			sHtmlReplyForm += "</fieldset>\n";
			sHtmlReplyForm += "<p><input type='button' name='submit' tabindex='2' value='Submit' accesskey='s' onclick='Simpleforum.execSaveReply()'/> <input type='button' name='close' value='close' onclick='Simpleforum.execBack();' tabindex='5' accesskey='s' /></p>\n";
		}
		
		
		$("#login_status").html(sHtml);
		$("#reply_user_form").html(sHtmlReplyForm);
		
	},execSaveUserReply : function(){
		var message = $("#reply_message");
		var idx =  Simpleforum.execCheckLogin('idx');

		$.getJSON(
		Simpleforum.domain_url + '?callback=?',
		{
			parent_idx : Simpleforum.parent_idx,
			request : 'saveuserreply',
			idx : idx,
			message : message.val()
		},function(server_response){
			Simpleforum.execViewPost(Simpleforum.parent_idx,server_response.last_page)		
		});
		
	},execLogoutForm : function(){
		$("#logout_form").dialog({
			modal : true,
			draggable : false,
			width : 355
		});

	},execLogout : function(){
		this.execSetLogin('username','',-1);
		this.execSetLogin('idx','',-1);
		this.init(1)		
	},execCloseDialog : function(id){
		
		$("#"+id).dialog('close');
	
	},execRecoverForm : function(){
		this.execCloseDialog('login_form')
		$("#recover_form").dialog({
			width : 400,
			modal : true
		});
	},execCriteria : function(type){
		
		if(type=='userid'){
			
			$("#select_userid").show();
			$("#select_question").hide();
			
		}else{
			$("#select_userid").hide();
			var sHtml = '';
			$.getJSON(
			Simpleforum.domain_url + '?callback=?',
			{
				request : 'registrationform'	
			},function(server_response){
	
			});
		}
		this.retrieve_type = type;
	},execGetAccount : function(){
	
		var userid = $("#userid");
		var sHtml = "";
		var question_idx = $("#secure_question");
		var question_answer = $("#secure_answer");
		
		$.getJSON(
		Simpleforum.domain_url + '?callback=?',
		{
			request : 'recoveraccount',
			type : Simpleforum.retrieve_type,
			userid : userid.val(),
			q_idx : question_idx.val(),
			q_answer : question_answer.val()
		},function(server_response){
			if(server_response.type=='userid'){
				if(server_response.list){
					$.each(server_response.list,function(index,value){
						sHtml += "<li>" + value.username + "</li>"; 
					});
					$("#result_list").html(sHtml);
				}
			}else if(server_response.type=='question'){
				if(server_response.list=='ok'){
					sHtml += "<option value='0'>-select-</option>";
					if(server_response){						
						$.each(server_response.question_list,function(index,value){
							sHtml += "<option value=" + value.idx + ">" + value.question + "</option>";
						});
					}
					$("#secure_question").html(sHtml)
					$("#select_question").show();
					//alert('Your account information has been sent to your email!');
				}
			}
		});
		
	},execUserDeleteReply : function(idx){
		$.getJSON(
		Simpleforum.domain_url + '?callback=?',
		{
			request : 'deleteuserreply',
			idx : idx,
			parent_idx : Simpleforum.parent_idx
		},function(server_response){
			alert(server_response.total_count)
			Simpleforum.execViewPost(Simpleforum.parent_idx,server_response.last_page)
		});
		
	},execSaveUserPost : function(){
	
		var subject = $("#user_subject");
		var message = $("#user_comment");
		var show_smiley = ($("#show_user_smiley").is(":checked") == true ) ? 'no' : 'yes';
		var idx =  Simpleforum.execCheckLogin('idx');
		$.getJSON(
		Simpleforum.domain_url + '?callback=?',
		{
			request : 'saveuserpost',
			idx : idx,
			subject : subject.val(),
			message : message.val(),
			show_smiley : show_smiley
		},function(server_response){
			Simpleforum.init(1);
			$("#user_add_post").dialog('close');
		});
		
		
	},execUserEditPost :function(post_idx){
		this.user_view_idx = post_idx;
		
		$.getJSON(
		Simpleforum.domain_url + '?callback=?',
		{
			request : 'viewuserpost',
			idx : post_idx
		},function(server_response){
			$("#user_edit_post").dialog({
				title : 'Edit Reply',
				width : 500,
				modal : true
			});
			$("#user_update_comment").val(server_response.message)
		});		
		
	},execUpdateUserPost : function(){
		var message = $("#user_update_comment");

		$.getJSON(
		Simpleforum.domain_url + '?callback=?',
		{
			request : 'updateuserpost',
			idx : Simpleforum.user_view_idx,
			message : message.val()
		},function(server_response){
			Simpleforum.execViewPost(Simpleforum.parent_idx,1);
			$("#user_edit_post").dialog('close');
		});			
		
	},pagination : function(page,event){
		
		var paginate = ''	
		current_page = page;
		adjust = 2;
		var total_page = Math.ceil(Simpleforum.total_rows/Simpleforum.limit);

		for( links = 1 ; links <= total_page ; links++){
			
			if(links == current_page){
					paginate += "<b>"+current_page+"</b>";
			}
			
			if((links-current_page)<(adjust+1) && current_page<(adjust+3) && links!=current_page){
					paginate +="<a href='#none' style='text-decoration:none'  onClick="+event+"("+links+")> "+links+" </a>";
			}
			
			if((links-1)<=total_page-(adjust+1) && current_page>(adjust+adjust) && current_page <1+(links+adjust) && current_page>=(links-adjust) && links!=current_page){                    
					paginate +="<a href='#none' style='text-decoration:none'  onClick="+event+"("+links+")> "+links+" </a>";
			}
			
			if(links!=current_page && (current_page-1)>=total_page-(adjust+2) && (links-2)>total_page-(adjust+2) && current_page<=total_page){
					paginate +="<a href='#none' style='text-decoration:none'  onClick="+event+"("+links+")> "+links+" </a>";
			}
			
			if(links == 1 && links!=current_page && current_page>(adjust+2)){
					paginate +="<a href='#none' style='text-decoration:none'  onClick="+event+"("+links+")> "+links+"... </a>";
			}
			
			if(links ==total_page  && current_page!=total_page && current_page<total_page-(adjust+1)){
					paginate +="<a href='#none' style='text-decoration:none'  onClick="+event+"("+links+")> ..."+total_page+" </a>";
			}
		}
		return 'Pages : ' + paginate;
	},execReset : function(){
		this.keyword = '';
		this.page_tracker = 1;
		$("#keyword").val('')
		this.init(1);
	}
}