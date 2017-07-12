<template>
	<div class="left-box">
		<div class="header">
	        <div class="avatar">
	            <img src="../assets/boy.jpg">
	        </div>
	        <div class="info">
	            <h3 class="nickname">{{user.username}}</h3>
	        </div>
	    </div>
	    <div class="search-bar">
	        <i class="search-icon"></i>
	        <input class="search-input" placeholder="搜索">
	    </div>
	    <div class="tab">
	        <div class="tab-item">
	            <a class="group" title="聊天室" href="javascript:;">
	            	<i v-if="currentTab === 'group'" class="group-icon selected"></i>
					<i v-else class="group-icon"></i>
	            </a>
	        </div>
	        <div class="tab-item">
	        	<a class="private" title="私聊" href="javascript:;">
	            	<i v-if="currentTab === 'private'" class="private-icon selected"></i>
	            	<i v-else class="private-icon"></i>
	            </a>
	        </div>
	        <div class="tab-item">
	            <a class="link" title="通讯录" href="javascript:;">
	            	<i v-if="currentTab === 'link'" class="link-icon selected"></i>
	            	<i v-else class="link-icon"></i>
	            </a>
	        </div>
	    </div>
	    <roomlist></roomlist>
	</div>
</template>

<script>
	import roomlist from './roomlist.vue'
	import privatelist from './privatelist.vue'
	import { mapGetters } from 'vuex'

	export default {
		data() {
			return {
				currentTab: 'group'
			}
		},
		computed: {
			...mapGetters([
				'user'
			])
		},
		components: {
			roomlist,
			privatelist
		}
	}
</script>

<style lang="less">
	@import '../style/common.less';
	.left-box{
		position: relative;
	    width: 280px;
	    height: 100%;
	    float: left;
	    background-color: #2e3238;
	    .header{
	    	padding: 18px;
    		position: relative;
	    }
	    .avatar{
			display: table-cell;
		    vertical-align: middle;
		    word-wrap: break-word;
		    word-break: break-all;
		    white-space: nowrap;
		    padding-right: 10px;
		    img{
		    	width: 40px;
			    height: 40px;
			    border-radius: 2px;
			    display: block;
			    cursor: pointer;
		    }
	    }
	    .info{
	    	display: table-cell;
		    vertical-align: middle;
		    word-wrap: break-word;
		    word-break: break-all;
		    width: 2000px;
	    }
	    .search-bar{
	    	position: relative;
		    width: 244px;
		    margin: 0 auto 6px;
	    }
	    .search-icon{
	    	display: inline-block;
		    vertical-align: middle;
		    width: 30px;
		    height: 30px;
		    .icon(-60px,-432px);
		    background-size: 487px 462px;
		    position: absolute;
		    z-index: 101;
		    top: 1px;
	    }
	    .search-input{
	    	width: 214px;
		    height: 32px;
		    line-height: 32px;
		    border: 0;
		    border-radius: 2px;
		    background-color: #26292e;
		    color: #fff;
		    padding-left: 30px;
		    font-size: 12px;
	    }
	    .tab{
	    	overflow: hidden;
    		position: relative;
    		padding-bottom: 4px;
    		.flexbox();
	    }
	    .tab-item{
	    	.flex1();
	    	position: relative;
	    	a{
	    		display: block;
    			text-align: center;
    			&:after{
				    content: '';
				    position: absolute;
				    top: 7px;
				    right: 0;
				    width: 0;
				    height: 20px;
				    border-right: 1px solid #24272c;
    			}
	    	}
	    	i{
	    		display: inline-block;
			    vertical-align: middle;
			    width: 35px;
			    height: 35px;
    			background-size: 487px 462px;
    			&.group-icon{
    				.icon(-376px,-322px);
    				&.selected{
    					.icon(-304px,-281px);
    				}
    			}
    			&.private-icon{
    				.icon(-150px,-96px);
    				&.selected{
    					.icon(-185px,-96px);
    				}
    			}
    			&.link-icon{
    				.icon(-220px,-96px);
    				&.selected{
    					.icon(-304px,-246px);
    				}
    			}
	    	}
	    }
	}
</style>