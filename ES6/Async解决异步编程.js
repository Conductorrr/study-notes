
        //实现肚包鸡的制作过程

        //准备
        function prepare() {
            return new Promise((resolve) => {
                setTimeout(function () {
                    console.log("prepare chicken");
                    resolve();
                }, 500)
            });
        }

        //炒鸡
        function fired() {
            return new Promise((resolve) => {
                setTimeout(function () {
                    console.log("fired chicken");
                    resolve();
                }, 500)
            });
        }
        //炖鸡
        function stewed() {
            return new Promise((resolve) => {
                setTimeout(function () {
                    console.log("stewed chicken");
                    resolve();
                }, 500)
            });
        }
        //上料
        function sdd() {
            return new Promise((resolve) => {
                setTimeout(function () {
                    console.log("sdd chicken");
                    resolve();
                }, 500)
            });
        }
        //上菜
        function serve() {
            return new Promise((resolve) => {
                setTimeout(function () {
                    console.log("serve chicken");
                    resolve(1);
                }, 500)
            });
        }
        async function task() {
            console.log("start task");
            await prepare();
            await fired();
            await stewed();
            await sdd();
            await serve();
            console.log("end task");
        }
        task()

        /*
        1.首先每个制作异步过程封装成Promise对象
        2.利用await阻塞原理，实现每个制作的顺序执行
        相比较Generator实现，无需自己实现自动执行器，完美的实现了异步流程
        */