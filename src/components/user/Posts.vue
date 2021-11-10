<template>
  <el-tabs v-model="activeName" @tab-click="handleClick">
    <el-tab-pane label="我的文章" name="first">
      <div class="status-filter">
        <el-tag>状态筛选</el-tag>
        <el-tag>状态1</el-tag>
        <el-tag>状态2</el-tag>
        <el-tag>状态3</el-tag>
        <el-tag>状态4</el-tag>
        <el-badge class="item">
          <el-button size="small">状态5</el-button>
        </el-badge>
      </div>
      <!--  todo 搜索栏   -->
      <div class="posts">
        <div class="list-group">
          <div class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between pb-2">
              <h5 class="mb-1">
                <a href="#">标题</a>
              </h5>
              <small>2021-08-15 11:54:40</small>
            </div>
            <p class="mb-2">
              <span>标签1</span>
              <span>标签2</span>
              <span>标签3</span>
              <span>标签4</span>
            </p>
            <div class="d-flex w-100 justify-content-between">
              <small>展现量 2 阅读 4 评论 0 收藏 0</small>
              <div><a href="">编辑</a> <a href="">浏览</a></div>
            </div>
          </div>
          <div class="list-group-item list-group-item-action">
            <div class="d-flex w-100 justify-content-between pb-2">
              <h5 class="mb-1">
                <a href="#">标题</a>
              </h5>
              <small>2021-08-15 11:54:40</small>
            </div>
            <p class="mb-2">
              <span>标签1</span>
              <span>标签2</span>
              <span>标签3</span>
              <span>标签4</span>
            </p>
            <div class="d-flex w-100 justify-content-between">
              <small>展现量 2 阅读 4 评论 0 收藏 0</small>
              <div><a href="">编辑</a> <a href="">浏览</a></div>
            </div>
          </div>
        </div>
      </div>
    </el-tab-pane>
    <el-tab-pane label="收藏文章" name="second">Config</el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
export default {
  data() {
    return {
      activeName: "first",
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
  },
};
</script>

<style scoped>
.el-tag + .el-tag,
.status-filter .item {
  margin-left: 10px;
}
.nav-item {
  padding-left: 15px;
  padding-right: 15px;
}

.nav-link {
  color: #555666;
}

.nav-link.active {
  font-weight: 600;
  border-bottom: 2px solid black;
}
.list-group-item {
  border: none;
  border-bottom: 1px dotted #ddd;
}

.list-group-item h5 a {
  font-size: 16px;
  font-weight: 500;
  color: #555666;
}
.list-group-item small {
  color: #999aaa;
}
</style>