<template>
  <div class="row">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link p-1 active" href="#">我的文章</a>
      </li>
      <li class="nav-item">
        <a class="nav-link p-1" href="#">收藏文章</a>
      </li>
    </ul>
    <div class="container" style="padding: 15px">
      <!-- todo 状态筛选  -->

      <!--  todo 搜索栏   -->
      <div class="list-group">
        <div class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between pb-2">
            <h5 class="mb-1">
              <a href="#">标题</a>
            </h5>
            <small>时间</small>
          </div>
          <p class="mb-2">
            <span>标签1</span>
            <span>标签2</span>
            <span>标签3</span>
            <span>标签4</span>
          </p>
          <div class="d-flex w-100 justify-content-between">
            <small>展现量 2 阅读 4 评论 0 收藏 0</small>
            <div>
              <a href="">编辑</a> <a href="">浏览</a>
            </div>
          </div>
        </div>
        <div class="list-group-item list-group-item-action">
          <div class="d-flex w-100 justify-content-between pb-2">
            <h5 class="mb-1">
              <a href="#">标题</a>
            </h5>
            <small>时间</small>
          </div>
          <p class="mb-2">
            <span>标签1</span>
            <span>标签2</span>
            <span>标签3</span>
            <span>标签4</span>
          </p>
          <div class="d-flex w-100 justify-content-between">
            <small>展现量 2 阅读 4 评论 0 收藏 0</small>
            <div>
              <a href="">编辑</a> <a href="">浏览</a>
            </div>
          </div>
        </div>
      </div>
      <!--  分页    -->
    </div>
  </div>
</template>

<script>

</script>

<style scoped>
.nav-item {
  padding-left: 15px;
  padding-right: 15px;
}

small {
  color: #999aaa;
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

.nav-link {
  color: #555666;
}

.nav-link.active {
  font-weight: 600;
  border-bottom: 2px solid black;
}
</style>