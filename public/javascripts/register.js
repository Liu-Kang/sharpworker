$(document).ready(function(){
	registerSubmit();
});

/**
 * 提交注册
 */
function registerSubmit(){
	$('#submit').click(function(){
		var $this = $(this);
		if($this.attr('data-ajax') === '1'){
			return false;
		}

		var params = {
			username: $.trim($('#username').val()),
			password: $.trim($('#password').val()),
			email: $.trim($('#email').val()),
			sex: $('[name="sex"]').val()
		};

		if( params.password !== $.trim($('#re-password').val()) ){
			alert('两次密码输入不一致');
			return false;
		}

		console.log(params);

		$this.attr('data-ajax',1);
		$.ajax({
			url:'/register/submit',
			type:'POST',
			data:params,
			dataType:'json',
			success:function(result){
				if(result.errorCode === 0){
					alert(result.errorMsg);
				}else{
					alert(result.errorMsg);
				}
			},
			error:function(){

			},
			complete:function(){
				$this.attr('data-ajax',0);
			}
		});
	});
}