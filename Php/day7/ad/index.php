<?php

if (isset($_GET['action']) && $_GET['action'] === 'close-ad') {
  // 不想看到广告
  setcookie('hide_ad', '1');
  $_COOKIE['hide_ad'] === '1';
}

?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
  <style>
    .ad {
      height: 200px;
      background-color: #ff0;
    }

    .ad a {
      float: right;
    }
  </style>
</head>
<body>
  <?php if (empty($_COOKIE['hide_ad']) || $_COOKIE['hide_ad'] !== '1'): ?>
  <div class="ad">
    <!-- <a href="close.php">不再显示</a> -->
    <a href="index.php?action=close-ad">不再显示</a>
  </div>
  <?php endif ?>
</body>
</html>

<!-- 点第一下时浏览器并没有带着cookie来请求，请求头里没有Cookie，$_COOKIE拿不到数据，就还是显示的，但服务器会给浏览器设置cookie
     所以浏览器下次请求时，就是带着cookie来请求的，请求头里有Cookie，$_COOKIE拿到了数据，就不让它显示了。
     这个例子也不太好不符合常理，应该点一下就不显示了然后下次再来也不显示 -->
