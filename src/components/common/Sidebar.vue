<template>
  <div class="sidebar" style="width:280px">
    <ul class="list-unstyled ps-0">
      <li class="mb-1">
        <a class="link-dark rounded" href="">首页</a>
      </li>

      <li class="mb-1">
        <button
            class="btn btn-toggle align-items-center rounded collapsed"
            data-bs-toggle="collapse"
            data-bs-target="#manager-collapse"
            aria-expanded="false"
        >
          管理
        </button>
        <div class="collapse" id="manager-collapse" style="">
          <ul class="btn-toggle-nav list-unstyled fw-normal pb-1 small">
            <li><a href="#" class="link-dark rounded">内容管理</a></li>
            <li><a href="#" class="link-dark rounded">评论管理</a></li>
            <li><a href="#" class="link-dark rounded">消息管理</a></li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>


<style>
.sidebar{
  padding: 15px;
}

.btn-toggle {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.5rem;
  font-weight: 600;
  color: rgba(0, 0, 0, 0.65);
  background-color: transparent;
  border: 0;
}

.btn-toggle:hover,
.btn-toggle:focus {
  color: rgba(0, 0, 0, 0.85);
  background-color: #d2f4ea;
}

.btn-toggle::before {
  width: 1.25em;
  line-height: 0;
  content: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' width='16' height='16' viewBox='0 0 16 16'%3e%3cpath fill='none' stroke='rgba%280,0,0,.5%29' stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M5 14l6-6-6-6'/%3e%3c/svg%3e");
  transition: transform 0.35s ease;
  transform-origin: 0.5em 50%;
}

.btn-toggle[aria-expanded="true"] {
  color: rgba(0, 0, 0, 0.85);
}

.btn-toggle[aria-expanded="true"]::before {
  transform: rotate(90deg);
}

.btn-toggle-nav a {
  display: inline-flex;
  padding: 0.1875rem 0.5rem;
  margin-top: 0.125rem;
  margin-left: 1.25rem;
  text-decoration: none;
}

.btn-toggle-nav a:hover,
.btn-toggle-nav a:focus {
  background-color: #d2f4ea;
}

</style>