<template>
	<div class="chat-list">
		<div class="chat-scope">
        	<div v-for="room in rooms" class="chat-item">
        		<div class="ext">
	                <p class="ext-time">{{room.time}}</p>
	            </div>
	            <div class="info">
	                <h3 class="nickname">
	                    <span>{{room.name}}</span>
	                </h3>
	                <p class="last-msg">
	                    <span>{{room.lastmsg}}</span>
	                </p>
	            </div>
	        </div>
	    </div>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				rooms: [
					{
						name: 'SaySomeThing',
						lastmsg: 'Tony:凑个单',
						time: '17:04'
					},
					{
						name: '相亲相爱',
						lastmsg: 'Liuk:什么时候回去',
						time: '17:20'
					}
				]
			}
		}
	}
</script>

<style lang="less">
	@import '../style/common.less';
	.chat-list{
		border-top: 1px solid #292c33;
		.chat-item{
			overflow: hidden;
		    padding: 12px 18px 11px;
		    border-bottom: 1px solid #292c33;
		    cursor: pointer;
		    position: relative;
		}
		.ext{
			float: right;
		    color: #6b6f7c;
		    font-size: 13px;
		    text-align: right;
		}
		.ext-time{
			height: 19px;
    		line-height: 1.5;
		}
		.avatar{
			float: left;
		    margin-right: 10px;
		    position: relative;
		    img{
		    	display: block;
			    width: 40px;
			    height: 40px;
			    border-radius: 2px;
		    }
		}
		.info{
			overflow: hidden;
		}
		.nickname{
			font-weight: 400;
		    font-size: 13px;
		    color: #fff;
		    line-height: 20px;
		    span{
		    	width: 100%;
			    overflow: hidden;
			    text-overflow: ellipsis;
			    white-space: nowrap;
			    word-wrap: normal;
			    display: inline-block;
    			vertical-align: top;
		    }
		}
		.last-msg{
			color: #989898;
		    font-size: 13px;
		    width: 100%;
		    overflow: hidden;
		    text-overflow: ellipsis;
		    white-space: nowrap;
		    word-wrap: normal;
		    height: 1.5em;
		}
	}
</style>