<template>
	<div class="left-box">
		<div class="header">
      <div class="avatar">
          <img :src="myAvatar">
      </div>
      <div class="info">
          <h3 class="nickname">{{user.username}}</h3>
      </div>
      <a class="opt" id="opt" href="javascript:;" @click.stop="toggleOperateMenu">
      	<i class="operation-more"></i>
      </a>
      <div class="menu-box" v-show="showMenu">
				<ul class="menu-list">
			    <li>
						<a href="javascript:;" title="创建房间" @click="createRoom">
							<i class="menu-create-room"></i>创建房间
						</a>
			    </li>
			    <li>
						<a href="javascript:;" title="退出" @click="logout">
							<i class="menu-logout"></i>退出
						</a>
					</li>
				</ul>
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
    <div class="scroll-box" v-bar="scrollbar">
    	<roomlist></roomlist>
    </div>
	</div>
</template>

<script>
	import roomlist from './roomlist.vue'
	import privatelist from './privatelist.vue'
	import { mapGetters, mapActions } from 'vuex'
	import UserModel from '../model/user'

	export default {
		data() {
			return {
				currentTab: 'group',
				showMenu: false,
				scrollbar: {
			    preventParentScroll: true,
			    scrollThrottle: 30
			  }
			}
		},
		computed: {
			...mapGetters([
				'user'
			]),
			myAvatar() {
				return this.user.sex ? '../assets/boy.jpg' : '../assets/girl.jpg'
			}
		},
		components: {
			roomlist,
			privatelist
		},
		mounted() {
			const self = this
			const menuBox = document.querySelector('.menu-box')
			const opt = document.querySelector('#opt')
			const scrollBox = document.querySelector('.scroll-box')

			menuBox.style.left = `${opt.offsetLeft - 180 + opt.clientWidth}px`
			menuBox.style.top = `${opt.offsetTop + opt.clientHeight}px`
			scrollBox.style.height = `${scrollBox.clientHeight}px`

			document.body.onclick = function() {
				self.showMenu = false
			}
		},
		methods: {
			...mapActions([
        'showRoomApply'
      ]),
			/**
			 * 隐藏、显示功能列表
			 * @return {[type]} [description]
			 */
			toggleOperateMenu() {
				this.showMenu = !this.showMenu
			},
			/**
			 * 退出登录
			 * @return {[type]} [description]
			 */
			logout() {
				this.$confirm('退出登录后将不保留聊天信息，是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
        	return UserModel.doLogout()
        }).then(data => {
					if (data.code === 0) {
						this.$router.go(0)
					} else {
						this.$message.error(data.msg)
					}
				})
			},
			/**
			 * 创建房间
			 * @return {[type]} [description]
			 */
			createRoom() {
				this.showRoomApply(true)
			}
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
    .columnflex();
    .scroll-box{
    	.flex1();
    }
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
      color: #fff;
    }
    .opt{
    	display: table-cell;
  		vertical-align: middle;
    }
    .operation-more{
    	.icon(-434px, -398px);
	    -webkit-background-size: 487px 462px;
	    background-size: 487px 462px;
	    display: inline-block;
	    vertical-align: middle;
	    width: 30px;
	    height: 30px;
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
      &::-webkit-input-placeholder {
        color: #888 !important; 
      } 
      &:-moz-placeholder {
        color: #888 !important; 
      } 
      &::-moz-placeholder {
        color: #888 !important; 
      } 
      &:-ms-input-placeholder {
        color: #888 !important; 
      }
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
    .menu-box{
    	width: 180px;
    	position: absolute;
	    background-color: #fff;
	    border-radius: 3px;
	    overflow: hidden;
	    z-index: 99;
	    outline: none;
	    li{
	    	a{
					display: block;
					text-decoration: none;
					color: #000;
			    font-size: 14px;
			    padding: 8px;
			    border-bottom: 1px solid #f1f1f1;
					text-align: left;
	    	}
	    	i{
	    		display: inline-block;
			    vertical-align: middle;
			    width: 34px;
			    height: 34px;
	    		margin-right: 8px;
	    	}
	    	.menu-create-room{
	    		.icon(-238px, -398px);
			    background-size: 487px 462px;
			    display: inline-block;
			    vertical-align: middle;
			    width: 34px;
			    height: 34px;
	    	}
	    	.menu-logout{
	    		.icon(-102px, -398px);
			    background-position: -102px -398px;
			    background-size: 487px 462px;
	    	}
	    }
    }
	}
</style>