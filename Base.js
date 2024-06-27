// JavaScript编译语言允许用户在Web页面上实现复杂的功能
// 解释型(interpret)代码:代码从上至下运行,实时返回运行结果,JavaScript是一种轻量级解释型语言  , 编译型(compile)代码:先被编译成汇编语言,然后由计算机运行(二进制)
// 使用JavaScript代码的方式: 1.使用<script></script>标签   2.使用<script src=""></script>引入外部JavaScript文件
// 使用DOMContentLoaded,让JS代码在加载完毕后执行
// JS中如果语句(statement)独占一行,则不用;引号分隔,不建议这么做
document.addEventListener("DOMContentLoaded", function() {
    //addEvenListener事件监听('事件类型',调用函数名)
    //代码块
    // <button>元素中包含了内联的onclick处理器,所以<button onclick="函数名()">内容</button>可以直接调用JS,但是不要这样使用,会污染HTML代码,增加维护难度

    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    // 变量声明,变量使用名词命名,不要以数字下划线开头,小驼峰命名,变量名区分大小写
    var 变量名; //变量提升,使用变量的代码可以出现在声明变量之前,解析时,变量会提升,var可以多次声明相同名称变量
    let 变量名; //不会变量提升,变量不事先声明就无法使用,let不能多次声明相同名称变量
    /* 变量类型:Number数字型 let number=1;      String字符串型  let string="这是一个字符串"     
                Boolean布尔型  let boolean=true;  任何不是:false,undefined,null,0,NaN的值,或空字符串,都将返回false
                Array数组型  let array=["name" , 15 , "time"];    Object对象  let object={name:"name" , age:18};   调用object.name                
    */
    typeof 变量名; //tyoeof判断变量内容的数据类型

    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    // 运算符 +加,-减,*乘,/除,%取余,**幂(2 ** 5 2的5次方)
    //自增++,自减--
    // 运算赋值+=,-=,*=,/=等等...
    // 比较运算符:===严格等于,!==严格不等于,<小于,>大于,<=小于等于,>=大于等于
    // 逻辑运算符&&与,||或,!非
    // 三元运算符   条件 ? 函数1 : 函数2     根据条件判断,条件为真运行函数1,否则运行函数2

    /* -------------------------------------------------------------------------------------------------------------------------------------------- */
    window.prompt(); //弹出输入框,返回输入值
    window.alert(); //弹出提示框
    Number(); //将字符串转换为数字类型
    testNumber.toString(); //每个数字类型中都有一个toString方法,将变量转换为字符串类型
    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    String(); //将数据转换成字符串类型
    let textLength = testString.length; //获取字符串长度.length也能获取数组元素个数
    testString.indexOf("text"); //indexOf查找变量中是否包含条件字符串,包含返回包含条件在数组中的位置(第一个字符),不包含返回-1
    testString.slice(0, 3); //从指定位置截取(复制)当前字符串的指定个数,如果不指定截取个数,将截取指定位置后所有的字符,可以处理数组
    testString.toLowerCase(); //将字符串冲的字母全部转换成小写
    testString.toUpperCase(); //将字符串冲的字母全部转换成大写
    testString.replace("替换源", "替换值"); //将字符串中匹配的第一个数据替换成指定数据
    testString.replace(/word/g, "text"); //将字符串中所有的word替换为text


    /* -------------------------------------------------------------------------------------------------------------------------------------------- */
    testString.split(","); //split根据指定条件,将字符串转换为数组
    testArray.join(','); //将数组用转换为字符串,并用指定条件分隔元素,不指定分隔符默认使用逗号,
    testArray.toString(); //将数组转换为字符串,并用逗号分隔元素
    testArray.push("newelement"); //将数据添加到数组的末尾,并返回新数组的长度
    testArray.pop(); //删除数组最后一个元素,并返回删除的元素
    testArray.unshift(); //将数据添加到数组头部,并返回新数组长度
    testArray.shift(); //删除数组第一个,并返回删除的元素
    testArray3 = testArray.concat(testArray2); //concat合并数组.将testArray和testArray2合并
    testArray.splice(); //splice根据参数数量实现三种功能 
    /*
    1.删除元素splice("删除起始下标","删除个数")  
    2.指定位置插入元素splice(插入起始下标,0(0表示不删除任何项),插入的元素) 
    3.替换元素splice(起始下标,删除元素数量,插入的元素)
    */
    testArray.reverse(); //颠倒数组元素顺序
    testArray.sort(); //对数组元素进行排序,字符按首字母顺序排列,数字按首位数字排列(并不是按大小排列, 1000会排在2之前)
    testArray.indexOf("value"); //返回数组中指定元素的第一个索引,不存在返回-1
    testArray.lastIndexOf("value"); //返回数组中指定元素的最后一个索引,不存在返回-1
    testArray.every(); //数组中每一个元素经every中的函数处理后都返回true,则返回true,有一个元素返回false,则返回false
    testArray.filter(); //返回数组中的值在经过filter()中的函数处理完后结果为true的元素
    testArray.forEach(); //遍历数组,无返回值
    testArray.map(); //map()方法创建一个新的数组,新数组的元素由数据源数组的每一个元素经map()中的函数处理后组成
    testArray.some(); //如果数组中的元素经some()中函数处理后有任意元素返回true,则返回true
    testArray.reduce(); //从数组起始位置遍历数组
    testArray.reduceRight(); //从数组末尾开始遍历


    /* -------------------------------------------------------------------------------------------------------------------------------------------- */
    // element.属性名.方法名("内容")
    element.src.match("value"); //element元素的src属性中匹配"value",match()方法检索返回一个字符串正则表达式的结果
    //element.style.样式名="样式值"
    element.style.color = "#FFFFFF"; //改变元素样式

    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    document.querySelector("selectors");
    document.querySelectorAll("p"); //返回一个NodeList对象(类似于数组)但是只能使用forEach()来迭代,NodeList.length返回对象中节点的个数
    document.getElementById("id");
    document.getElementsByClassName("class");
    // querySelector()方法返回文档中指定的选择器或选择器组的第一个对象,找不到返回null
    // selectors语法同CSS选择器,  .代表类  #代表ID querSelector()和querSelectorAll()里可以使用任何CSS选择器
    element.addEventListener("event", functionName);
    element.removeEventListener("event", functionName);
    // addEventListener事件监听
    event.target.style.backgroundColor = functionName();
    // event.target表示处理当前元素,event是function (event){//函数体} 是形参的名称 ,event.target 和 this 的区别  this是会变化的  event.target永远指向触发事件的DOM元素本身
    event.currentTarget; //event.target永远指向事件触发的DOM元素    event.currentTarget 永远指向触发的事件绑定的DOM元素
    e.preventDefault();
    // .preventDefault();阻止元素默认行为
    e.stopPropagation();
    // .stopPropagation();阻止冒泡
    this.createElement("div");
    //创建元素
    this.appendChild();
    //在指定节点下添加指定元素的末尾,如果插入元素已存在当前文档中,则移动元素到指定节点末尾
    this.cloneNode();
    //复制(非关联)元素到指定节点下
    this.removeChild();
    this.parentNode.removeChild(this);
    // 删除指定元素,parentNode选择指定元素的父级元素,再删除元素,元素不能删除本身
    this.setAttribute("属性", "属性值");
    //给指定元素添加指定属性和值,属性已存在更新值,不存在创建
    this.removeAttribute("属性");
    // 移除指定元素属性值
    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    // 函数Function
    function 函数名() {
        // 函数体
    };

    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    // 条件语句
    function Conditional() {
        //if语句
        if (ture) { var i = 1 };
        if (false) { var i = 0 } else { var i = 1 };
        if (false) { var i = 0 } else if (ture) { var i = 1 } else { var i = 2 };

        //switch语句
        switch (key) {
            case value:

                break;
            case value2:
            case value3:
                //value2 和value3 区同样结果
                break
            default: //default可以不放在最后,在找不到条件是会跳回default条件
                break;
        };
    };

    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    //循环loop
    function for_Loop() {
        //for循环
        for (let index = 0; index < array.length; index++) {
            //  for循环代码
            //break立即结束循环
            //continue跳过当次循环
        };
        // while循环
        while (condition) {

        };
        // do...while训话
        do {

        } while (condition);
    }

    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    //函数function
    function name(params) {
        //函数体
    }

    let noNameFunction = function(params) {
            //匿名函数
        }
        // 使用onclick调用函数时, btn.onclick = function; 不用加括号(),因为加了括号函数会直接运行一次,而不是等用户点击再运行
        // 如果想使用传参函数,就需要再包裹一层匿名函数 btn.onclick = function(){ functionName (value1 , value2);}


    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    // 对象是一个包含相关属性(变量)和方法(函数)的集合
    let objectName = {
        name: "alice",
        age: 12,
        hobby: ["sing", "sleep"],
        act: function() {
            this.name; //this指向了当前代码运行时的对象
        },
        childObject: { name: "jack", age: 16 }
    };
    // 使用对象内元素,使用括号表示法[]不仅可以动态调用对象成员的值,还可以动态设置对象成员名字,使用.点只接受字面量成员的名字,不接受变量值做名字
    objectName.name;
    objectName['name'];
    objectName.hobby[0];
    objectName.act();
    objectName.childObject.name;
    objectName.childObject["name"];
    // 设置对象成员,可更新以存在的,也可以追加不存在的
    objectName.date = 20220620;
    objectName["date"] = 20220620;
    // 构造函数创建对象
    function ObjectName2(first, last, age, hobby) {
        this.name = {
            'first': first,
            'last': last,
        };
        this.age = age;
        this.hobby = [];
    };
    // new关键字实例化对象
    var newObject = new ObjectName2("ss", "sun", 15, ["music", "dance"]);
    var newObject = new ObjectName2(); //创建空对象
    var newObject = new Object({ name: "sun", age: 30 }); //将文本传递给Object命令生成的对象作为参数
    var newObject = Object.create(Object1); //使用现有对象创建一个新对象,并在prototype中继承现有对象

    // prototype 对象原型,在js对象中,每个对象都有一个特殊属性叫原型,原型指向对象上一层的原型对象
    // constructor属性,每个实例对象都从原型中继承了constructor属性,她指向了用于构造当前实例对象的构造函数
    var newObject = new oldObject.constructor('value1', 'value2', 'value3');
    // 使用constructor()也可以创建新的对象实例
    // 常用用在对象实例中定义属性,方法定义在对象原型prototype中
    function newObject(first, second, third, fourth) {
        oldObject.call(this, first, second, third, foutth)
            // call()使用这个方法可以更改函数运行的this指向,简单来说就是将被调用对象的this指向当前实例
    };

    //JSON是一种按照JS对象语法存储的数据格式,JSON是一种纯数据格式,只有属性,没有方法,JSON字符串和属性名只能用双引号,单引号无效,JSON中属性名和值都需要带引号(数字不需要引号)
    JSON.parse(); //将文本形式的json内容转换为对象格式
    JSON.stringify(); //将对象内容转换为json字符串

    // 回调函数,就是在函数内部运行一个由实参传入的函数,用于完成当前函数所需的数据处理需求
    Promise.than(); //Promise对象用于表示一个异步操作的最终完成(或失败)及其结果值
    Promise.catch(); //用于捕获异步处理中的错误 可以使用throw抛出的错误信息
    Promise.resolve(); //resolve()方法返回一个给定解析值后的Promise对象
    Promise.reject(); //reject()方法返回一个带有拒绝原因的Promise对象
    //Promise三种状态  pending待定,请求进行中  fulfilled已兑现,操作成功,调用then()处理函数    rejected已拒绝,操作失败,调用catch()处理函数
    Promise.all([Promise1, Promise2, Promise3]); //all()方法接收多个Promise对象组成的数组,并返回一个单一的Promise,前提必须所有Promise都成功,如果有失败的,则调用catch()方法
    Promise.any([Promise1, Promise2, Promise3]); //any()方法,Promise数组中,任意一个执行完毕,就执行,全部Promise对象都被拒绝,any()也会被拒绝

    async function asyncFunction() {
        const response = await fetch("web_adress"); //await关键字使得异步函数必须在await声明的Promise执行完毕后才会继续执行
    }; //在函数开头添加async关键字,可以使函数变为异步函数

    setTimeout(() => {
        //定时器,timeout计时结束后执行代码块
    }, timeout);
    /* -------------------------------------------------------------------------------------------------------------------------------------------- */
    // workers 多线程,由于无法知道线程何时被挂起,主线程和子线程同时访问同一变量导致线程发生意外变化,所以worker的代码永远不能直接访问彼此的变量
    // worker的代码和主代码在完全分离的环境中,通过互相发送消息交互,特别是,worker不能访问DOM(窗口,文档,页面元素)
    const worker = new Worker('./javaScriptFile.js'); //使用worker构造函数创建变量,指定一个worker脚本的URL地址 
    //https://developer.mozilla.org/zh-CN/docs/Learn/JavaScript/Asynchronous/Introducing_workers
    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    //Ajax方法实现现在又两种方式 1.XMLHttpRequest()旧   2.fetch()新
    let request = new XMLHttpRequest();
    request.open("GET", url);
    request.responseText = "text"; //XMLHttpRequest默认返回类型text,为了以后接收其他格式,推荐写明响应类型
    request.onload = function() { //onload异步响应后执行
        element.textContent = request.response; //将Ajax响应信息填充页面
    }
    request.send(); //执行请求

    fetch(url).then(function(response) { //fetch发送请求,将请求结果作为then回调函数参数
        response.text().then(function(text) { //获取响应内容,使用text()方法将响应内容输出为文本格式,将处理后的内容作为then回调函数参数
            //fetch();返回的promise对象文件类型方法有 .text()文本  .json()格式化   .blob()表示一个不可变,原始数据类文件对象(图片)  参考:File API   https://developer.mozilla.org/en-US/docs/Web/API/File_API
            element.textContent = text; //将内容填充至页面
        });
    });

    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    //canvas画布  参阅 Canvas API(2D)   WebGL(3D)
    // <canvas id="" width="500" height="500"> <p>canvas标签内容可以显示反馈信息,例如:浏览器不支持canvas</p> </canvas>

    /* -------------------------------------------------------------------------------------------------------------------------------------------- */
});