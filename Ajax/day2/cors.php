<?php

// $conn = mysqli_connect('localhost', 'root', '123456', 'demo');

// $query = mysqli_query($conn, 'select * from users');

// while ($row = mysqli_fetch_assoc($query)) {
//   $data[] = $row;
// }

$data = array('name' => 'xiaohong', 'age' => 1);

// 客户端不用做任何修改，只需服务端添加一个Access-Control-Allow-Origin响应头，设置允许访问的域名就行
header('Access-Control-Allow-Origin: *');

header('Content-Type: application/json');

echo json_encode($data);
