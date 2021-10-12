<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
  // 接收文件 使用一个 叫做 $_FILES 超全局成员
  var_dump($_FILES);
}

?>

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <!--如果一个表单中有文件域（文件上传）
      1. 必须将表单的提交方式method设置为post(url中的?参数无法传文件，请求体可以传二进制的数据比如文件),
      2. 表单的编码类型enctype必须设置为multipart/form-data，只能通过这种方式将二进制的数据表示出来 -->
  <!--表单的编码类型enctype默认是application/x-www-form-urlencoded格式，即，会将数据按照格式key1=value1&key2=value2
      发送给服务端，但文件内容不能用文本去描述必须用二进制的方式去描述，只能⬆️ -->
  <!--看网页的检查，enctype好像会影响请求头中的Content-Type:multipart/form-data,请求体的内容类型--> 
  <form action="<?php echo $_SERVER['PHP_SELF']; ?>" method="post" enctype="multipart/form-data">

    <!-- <input type="text" name="foo">
    <input type="text" name="bar"> -->
    <input type="file" name="img">

    <button>提交</button>

  </form>
</body>
</html>
