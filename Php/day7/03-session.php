<?php

//开启session会有一些性能损耗所以默认是不开启的，要我们自己开启
//给当前用户找一个属于他的箱子（没有箱子开箱子，有箱子找已有的箱子）
session_start();

// 设置session
$_SESSION['key1'] = 'value1';


//虽然没有我们操作COOKIE,但是SESSION自动操作COOKIE了，因为要把 session_id=随机性很强的编码 放在COOKIE里
