<template>
  <div class="sidebar" style="width: 280px">
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <a class="link-dark rounded" href="">
          <i class="fa fa-home"></i>
          首页
        </a>
      </li>

      <li class="mb-1">
        <a
          class="btn-toggle link-dark rounded collapsed"
          data-bs-toggle="collapse"
          data-bs-target="#manager-collapse"
          aria-expanded="false"
        >
          <i class="fa fa-line-chart"></i>
          管理
        </a>
        <div class="collapse show" id="manager-collapse">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li>
              <router-link class="link-dark rounded" to="/user/posts"
                >内容管理</router-link
              >
            </li>
            <li><a href="#" class="link-dark rounded">评论管理</a></li>
            <li><a href="#" class="link-dark rounded">消息管理</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>


<style scoped>
.sidebar {
  padding: 25px;
}

.sidebar > ul > li {
  text-align: left;
  height: 40px;
  line-height: 40px;
  margin-top: 16px;
}

i.fa {
  padding-right: 10px;
}

a {
  font-size: 16px;
  cursor: pointer;
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
}

.btn-toggle-nav a {
  padding: 0.1875rem 0.5rem;
  margin-top: 0.125rem;
  padding-left: 2.75rem;
  text-decoration: none;
}

a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}
</style>