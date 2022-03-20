<template>
  <el-row>
    <el-col :span="23">
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="我的文章" name="first">
          <div class="status-filter">
            <el-row>
              <el-col :span="1">
                <el-link :underline="false" type="info"> 状态</el-link>
              </el-col>
              <el-col :span="1">
                <el-link :underline="false"> 全部 (0)</el-link>
              </el-col>
              <el-col :span="1">
                <el-link :underline="false">公开 (0)</el-link>
              </el-col>
              <el-col :span="1">
                <el-link :underline="false">私密 (0)</el-link>
              </el-col>
              <el-col :span="1">
                <el-link :underline="false">审核 (0)</el-link>
              </el-col>
              <el-col :span="1">
                <el-link :underline="false">草稿 (0)</el-link>
              </el-col>
              <el-col :span="1">
                <el-link :underline="false">回收站 (0)</el-link>
              </el-col>
            </el-row>
          </div>
          <!--  todo 搜索栏   -->
          <el-row style="margin: 20px 0">
            <el-col :span="2">
              <el-select
                style="margin-right: 15px"
                size="small"
                v-model="search.year"
              >
                <el-option
                  v-for="item in [{ year: 2021 }]"
                  :key="item.year"
                  :label="item.year + '年'"
                ></el-option>
              </el-select>
            </el-col>
            <el-col :span="2">
              <el-select size="small" v-model="search.month">
                <el-option
                  v-for="item in [{ month: 1 }]"
                  :key="item.month"
                  :label="item.month + '月'"
                ></el-option>
              </el-select>
            </el-col>
          </el-row>

          <div class="posts">
            <ul class="items">
              <li v-for="post in posts" v-bind:key="post.id" class="item">
                <div class="post">                  
                  <div class="list-item-title">
                    <p class="post-title"><a href="#">{{ post.title }}</a></p>
                    <p class="time">2021-08-15 11:54:40</p>
                  </div>
                  <div class="post-tags">
                    <span class="post-tag">草稿</span>
                  </div>

                  <div class="post-info">
                    <div class="item-info-left">
                      <p class="article-list-item-readComment">展现量 0</p>
                      <span class="circle-step"></span>
                      <p class="article-list-item-readComment">阅读 0</p>
                      <span class="circle-step"></span>
                      <p class="article-list-item-readComment">评论 0</p>
                      <span class="circle-step"></span>
                      <p class="article-list-item-readComment">收藏 0</p>
                      <!---->
                    </div>
                    <div class="item-info-oper">
                      <router-link :to="{path:'/post/edit/'+post.id}"><span class="item-info-oper-text">编辑</span></router-link>
                      <a href="#" target="_blank">
                        <span class="item-info-oper-text">浏览</span>
                      </a>
                      <el-dropdown placement="bottom-end">
                        <span class="el-dropdown-link">
                          <el-icon><more-filled /></el-icon>
                        </span>
                        <template #dropdown>
                          <el-dropdown-menu>
                            <el-dropdown-item>删除</el-dropdown-item>
                          </el-dropdown-menu>
                        </template>
                      </el-dropdown>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </el-tab-pane>
        <el-tab-pane label="收藏文章" name="second">Config</el-tab-pane>
      </el-tabs>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import { MoreFilled } from "@element-plus/icons";
import { queryPosts } from "@/api/post";
export default {
  components: { MoreFilled },
  data() {
    return {
      search: { year: "" },
      activeName: "first",
      posts: [],
    };
  },
  mounted() {
    this.renderList();
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    renderList() {
      queryPosts({}).then(resp => {
        this.posts = resp.data.rows
      });
    },
  },
};
</script>

<style scoped>
.el-tabs__nav-wrap::after {
  content: none;
}
.el-tag + .el-tag,
.status-filter .item {
  margin-left: 10px;
}
ul.items {
  padding: 0;
  margin: 0;
}
li.item {
  display: flex;
  border-bottom: 1px dotted #ddd;
  padding: 1rem 0 1rem 0;
}
li.item .post {
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
  color: #999;
  font-size: 14px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
}

li.item .post .list-item-title {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-pack: start;
  -ms-flex-pack: start;
  justify-content: flex-start;
}
li.item .post .list-item-title .post-title {
  font-size: 16px;
  color: #555666;
  margin-bottom: 16px;
  -webkit-box-flex: 1;
  -ms-flex-positive: 1;
  flex-grow: 1;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
}
li.item .post .list-item-title .post-title a {
  font-size: 16px;
  font-weight: 500;
  color: #555666;
  -ms-flex-negative: 1;
  flex-shrink: 1;
  word-wrap: break-word;
  word-break: break-word;
}
li.item .post .list-item-title .time {
  min-width: 142px;
  text-align: right;
}

.post-tags {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  font-size: 12px;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}

.post-tag {
  font-size: 12px;
  height: 18px;
  margin-right: 8px;
  padding: 0 4px;
  background: #f5f5f5;
  color: #999aaa;
  border-radius: 2px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
}
.post-info {
  margin-top: 16px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
}
.post-info .item-info-left {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.article-list-item-readComment:first-child {
  margin-left: 0;
}
.article-list-item-readComment {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  margin: 0 8px;
  position: relative;
}
.article-list-item-readComment svg {
  fill: #999;
  width: 14px;
  height: 14px;
  margin-left: 4px;
}
.circle-step {
  display: inline-block;
  width: 3px;
  height: 3px;
  background: #555666;
  vertical-align: middle;
  border-radius: 50%;
  color: #999aaa;
}
.item-info-oper-text {
  color: #222226;
  padding: 0 12px;
  cursor: pointer;
}
.el-dropdown {
  width: 27px;
  background-position: -145px -45px;
  margin-left: 12px;
  cursor: pointer;
  display: inline-block;
  position: relative;
  color: #606266;
  font-size: 14px;
}
</style>