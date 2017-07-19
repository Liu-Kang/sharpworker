<template>
	<div class="right-box">
		<div class="in-empty" v-if="!currentRoom.type || currentRoom.type === 'empty'">
			<div class="empty-icon"></div>
		</div>
		<div class="in-chat" v-else>
			<div class="room-title">
				<div class="title-wrap">
					<span class="room-name">{{currentRoom.detail.roomname}}</span>
	        <span class="room-size" v-if="currentRoom.type === 'public'">({{currentRoom.detail.members.length}})</span>
	        <i class="el-icon-arrow-down"></i>
				</div>
	    </div>
	    <div class="room-content" v-bar="scrollbar">
	    	<div class="room-overview">
		    	<div class="room-content-wrap">
		    		<ul class="room-content-list">
		          <li class="chat-item clearfix">
		          	<div class="chat-item-left">
			        		<div class="chat-user">
			        			<img src="../assets/girl.jpg" alt="">
			        		</div>
			        		<div class="chat-bubble">
			        			<div class="chat-info clearfix">
			        				<span class="fl mr10">LiuK</span>
			        				<span class="fr">07-12 19:00</span>
			        			</div>
			        			<div class="chat-text">231312312</div>
			        		</div>
		        		</div>
		          </li>
		          <li class="chat-item clearfix">
		          	<div class="chat-item-right">
			        		<div class="chat-user">
			        			<img src="../assets/boy.jpg" alt="">
			        		</div>
			        		<div class="chat-bubble">
			        			<div class="chat-info clearfix">
			        				<span class="fl mr10">07-12 19:00</span>
			        				<span class="fr">LiuK</span>
			        			</div>
			        			<div class="chat-text">231312312</div>
			        		</div>
		        		</div>
		          </li>
		        </ul>
		    	</div>
	    	</div>
	    </div>
			<div class="room-foot">
				<div class="chat-area">
					<pre class="chat-input" contenteditable placeholder=""></pre>
				</div>
				<div class="chat-action">
					<span>按下Ctrl+Enter换行</span>
					<el-button class="send-btn">发 送</el-button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	import { mapGetters, mapActions } from 'vuex'

	export default {
		data() {
			return {
				scrollbar: {
			    preventParentScroll: true,
			    scrollThrottle: 30
			  }
			}
		},
		computed: {
			...mapGetters([
				'currentRoom'
			]),
			roomid() {
				return this.currentRoom.detail._id
			}
		},
		watch: {
			roomid() {
				this.$nextTick(() => {
					const viewport = document.querySelector('.room-content')
					const overview = document.querySelector('.room-overview')
					overview.style.height = `${viewport.clientHeight}px`
				})
			}
		}
	}
</script>

<style lang="less">
	@import '../style/common.less';
	.right-box{
		position: relative;
    width: 720px;
    height: 100%;
    background-color: #eee;
    overflow: hidden;
    color: #333;
    .in-empty{
			width: 100%;
    	height: 100%;
    	overflow: hidden;
    	.empty-icon{
    		width: 120px;
    		height: 98px;
    		.icon(-150px,0);
    		margin: 200px auto;
    	}
    }
    .in-chat{
    	width: 100%;
    	height: 100%;
    	overflow: hidden;
    	.columnflex();
    }
    .room-content{
    	.flex1();
    }
    .room-title{
    	position: relative;
	    padding: 10px 0;
	    margin: 0 19px;
	    border-bottom: 1px solid #d6d6d6;
	    background-color: #eee;
	    text-align: center;
    }
    .title-wrap{
    	font-weight: 400;
	    height: 25px;
	    line-height: 25px;
	    display: inline-block;
	    font-size: 14px;
	    cursor: pointer;
    }
    .el-icon-arrow-down{
    	vertical-align: middle;
    	.ml5();
    }
    .room-content-wrap{
    	width: 100%;
    	padding: 10px 20px;
    	box-sizing: border-box;
    	position: relative;
    }
    .room-content-list{
    }
    .chat-item{
    	padding: 10px 0;
    	.chat-bubble{
		    padding: 9px 13px;
		    background-color: #fff;
		    max-width: 500px;
		    display: inline-block;
		    vertical-align: top;
		    position: relative;
		    text-align: left;
		    font-size: 14px;
		    border-radius: 3px;
		    margin: 0 10px;
		    float: left;
		    .chat-info{
		    	.c999();
		    	font-size: 12px;
		    	line-height: 18px;
		    }
		    .chat-text{
		    	line-height: 24px;
		    	word-wrap: break-word;
		    	word-break: break-all;
		    }
		    &:after{
		    	position: absolute;
			    top: 14px;
			    border: 6px solid transparent;
			    content: '';
		    }
    	}
    	.chat-user{
    		float: left;
    		img{
    			width: 40px;
			    height: 40px;
			    border-radius: 2px;
			    -moz-border-radius: 2px;
			    -webkit-border-radius: 2px;
			    cursor: pointer;
    		}
    	}
    	.chat-item-left{
    		.chat-bubble{
    			&:after{
    				border-right-color: #f5f5f5;
		  			border-right-width: 4px;
			    	left: -10px;
    			}
    		}
    	}
    	.chat-item-right{
    		.chat-bubble{
    			background-color: #b2e281;
    			float: right;
    			&:after{
    				border-left-color: #b2e281;
		  			border-left-width: 4px;
			    	left: 100%;
    			}
    		}
    		.chat-user{
    			float: right;
    		}
    	}
    }
    .room-foot{
    	height: 180px;
    	border-top: 1px solid #d6d6d6;
    	.chat-area{
    		width: 100%;
    		height: 130px;
    	}
    	.chat-input{
    		display: block;
    		box-sizing: border-box;
    		padding: 10px 20px;
    		min-height: 100%;
    		white-space: pre-wrap;
    		word-break: normal;
    		cursor: text;
    		font-family: 'Microsoft YaHei';
    		outline: 0;
    		&:empty::before {  
          content: attr(placeholder);  
          .c999();
        }
    	}
    	.chat-action{
    		padding: 0 20px;
    		height: 30px;
    		line-height: 30px;
    		text-align: right;
    	}
    	.send-btn{
    		.ml10();
    		height: 30px;
    		line-height: 30px;
    		padding: 0 15px;
    	}
    }
	}
</style>