<?php

header('Content-Type: application/javascript');

$json = json_encode(array(
  'time' => time()
));

// 在 JSON 格式的字符串外面包裹了一个函数的调用，返回的结果就变成了一段 JS 代码
echo "foo({$json})";
// => foo({"time":153142321})

// 不同源地址之间请求必须服务端和客户端配合才能完成
