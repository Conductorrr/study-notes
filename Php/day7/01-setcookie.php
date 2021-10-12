<?php

// 设置响应头中的 Set-Cookie 可以下发小票（给客户端发）
// Cookie在客户端存储的是键值结构

//法1
// header('Set-Cookie: foo=bar');

// header 在设置相同的键时 会出现覆盖的情况
// header('Foo: 123');
// header('Foo: 456');

//法2
// setcookie 是专门用于设置 cookie 的函数
// 每个参数看文档！

// 只传递一个参数是删除。原理：设置过期时间为一个过去时间
setcookie('key');

// 传递两个参数是设置cookie
setcookie('key1', 'value1');

// 传递第三个参数是设置cookie的过期时间。不传递就是 会话级别的Cookie（关闭浏览器就自动删除）
setcookie('key2', 'value2', time() + 1 * 24 * 60 * 60);

setcookie('key3', 'value3', time() + 1 * 24 * 60 * 60, '/users');//第四个参数设置cookie有效的服务器路径,默认cookie属于当前页

setcookie('key4', 'value4', time() + 1 * 24 * 60 * 60, '', '', false, true);
 //第五个参数domain：Cookie 的有效域名/子域名
 //第六个参数secure：设置这个 Cookie 是否仅仅通过安全的 HTTPS 连接传给客户端
 //第七个参数httponly：cookie只能在服务端获取，js无法操作
