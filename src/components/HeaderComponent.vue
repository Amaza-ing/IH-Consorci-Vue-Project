<script setup></script>

<template>
  <header id="header">
    <h1 class="title">Bienvenidos!</h1>
    <nav>
      <ul class="nav-list">
        <li>
          <a class="link" href="#">Home</a>
        </li>
        <li>
          <a class="link" href="#">Blog</a>
        </li>
        <li>
          <a class="link" href="#">Contact</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style>
  #header {
    background-color: darkblue;
    color: white;
    padding: 15px;

    .title {
      margin: 0;
      margin-bottom: 30px;
      text-align: center;
    }

    .nav-list {
      list-style-type: none;
      margin: 0;
      padding: 0;
      display: flex;
      justify-content: space-around;

      .link {
        color: white;
        text-decoration: none;
      }
    }
  }
</style>
