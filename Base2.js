// JavaScript编译语言允许用户在Web页面上实现复杂的功能
// 解释型(interpret)代码:代码从上至下运行,实时返回运行结果,JavaScript是一种轻量级解释型语言  , 编译型(compile)代码:先被编译成汇编语言,然后由计算机运行(二进制)
// 使用JavaScript代码的方式: 1.使用<script></script>标签   2.使用<script src=""></script>引入外部JavaScript文件
// 使用DOMContentLoaded,让JS代码在加载完毕后执行
// JS中如果语句(statement)独占一行,则不用;引号分隔,但是非常不建议这么做
document.addEventListener("DOMContentLoaded", async() => {
    //addEvenListener事件监听('事件类型',调用函数名)
    //代码块
    // <button>元素中包含了内联的onclick处理器,所以<button onclick="函数名()">内容</button>可以直接调用JS,但是不要这样使用,会污染HTML代码,增加维护难度



    /*--数组-----------------------------------------------------*/
    //创建数组
    var Obj = new Array(); //创建空数组
    var Obj = new Array(5); //创建指定长度的空数组
    var Obj = new Array("5"); //创建数组,并将传递的参数作为数组的元素
    var Obj = new Array(["二维数组1"], ["二维数组2"]); //二维数组
    var Obj = ["a", "b", 5]; //短数组
    console.log(Obj[1][0]); //获取数组元素
    Obj["x"] = "新元素"; //使用[]符可以指定下标(可以是数字,可以是关联字符)来追加新数组元素
    //JS中数组只能使用索引，对象使用关联
    //数组使用命名索引(关联索引),JS会把数组重定义为标准对象(数组是特殊类型的对象),之后所有数组的方法和属性将产生非正确结果
    for (let index = 0; index < array.length; index++) {}; //可以使用for循环遍历数组
    //constructor 引用数组对象的构造函数    
    //length 返回数组长度,多维数组显示数组中有几个1维数组 
    Obj.length; //获取数组长度
    Obj.length = 5; //设置数组长度,大于元素长度未设置元素为undifined,大于数组长度的元素将被删除  
    delete Obj[i]; //删除数组元素,不会改变数组长度,删除位置值变为undefined
    //prototype 原型,指向对象上一层的对象,可以在原型中添加方法
    Obj.push("value"); //向数组末尾追加元素
    Obj.unshift("value"); //向数组头部追加元素
    Obj.concat(arrayName); //合并数组
    Obj.pop(); //删除数组最后一个元素
    Obj.shift(); //删除数组第一个元素
    Obj.splice(); //splice()根据不同参数实现三种功能
    /*
    1.删除元素splice("删除起始下标","删除个数")  
    2.指定位置插入元素splice(插入起始下标,0(0表示不删除任何项),插入的元素) 
    3.替换元素splice(起始下标,删除元素数量,插入的元素)
    */
    Obj.slice(2, 6); //指定元素起始位置和元素结束位置(不包含结束位置元素),返回(复制)指定数量的元素,负数表示数组长度加上负数值
    Obj.reverse(); //颠倒数组中元素
    Obj.sort(); //排序数组内元素,字符根据元素值第一个字符排序,数字根据最高位数字排列(1000将排在21前)
    Obj.toString(); //将数组转换为字符串,并使用指定符号分隔元素,不指定符号使用默认","逗号
    Obj.toLocaleString(); //转换问本地格式字符串并返回
    Obj.join("|"); //将数组转换为字符串,并用指定符号分隔元素

    Obj.indexOf("value"); //在数组中查找指定值(完全匹配),并返回匹配指定值的第一个元素下标,不存在返回-1
    Obj.lastIndexOf("value"); //在数组中查找指定值(完全匹配),并返回最后一个匹配元素的下标,不存在返回-1
    Obj.every(function() {}); //如果数组中的每一个元素经函数处理后都返回true,则返回true
    Obj.filter(function() {}); //只返回函数处理后值为true的元素
    Obj.forEach(function(value /*元素值*/ , index /*元素索引*/ , array /*对象本身*/ ) {}); //将每一个数组元素通过函数处理,无返回值
    /*
    forEach用于遍历数组 , for...in用于遍历对象属性
    forEach用法:  array.forEach(element=>console.log(element)); 循环输出数组元素
    for...in用法: for(let element in object){console.log(element);console.log(object[element])} 循环输出对象的属性名和属性值
     */
    Obj.map(function() {}); //map()函数创建一个新的数组,新数组的每个元素由上一个数组中每个元素经函数处理后的结果组成
    Obj.some(function() {}); //数组中元素经函数处理,有一项返回true,则返回true

    Obj.reduce();
    //reducr(function(previousValue/*前一次计算结果*/,currentValue/*当前元素值*/){previousValue+currentValue},initialValue/*初始值,不指定将以索引为0的元素作为初始值*/)
    //reducr()方法将每一个数组元素按顺序执行函数,每次执行后的结果传入下一个函数中
    Obj.reduceRight(); //同reduce()只是元素处理方向末尾向前处理

    /*--DOM操作-----------------------------------------------------*/
    //获取节点
    document.getElementById("元素ID"); //通过id属性获取元素
    document.getElementsByName("元素name"); //通过name属性获取元素
    document.getElementsByTagName("元素标签"); //通过元素标签获取元素"p" "a"
    document.getElementsByClassName("class"); //通过类名获取元素
    // querySelector()方法返回文档中指定的选择器或选择器组的第一个对象,找不到返回null
    // selectors语法同CSS选择器,  .代表类  #代表ID querSelector()和querSelectorAll()里可以使用任何CSS选择器
    document.querySelector(" "); //通过指定值选取第一个元素, .类, #ID, 标签
    document.querySelectorAll(" "); //返回一个NodeList对象(类似数组),只能使用forEach()来迭代,NodeList.length返回对象中节点的个数
    /* querySelector和getElementBy的区别 , query是静态获取 get是动态获取,获取的HTML元素改变时,get元素也会更新变量值*/
    //节点指针
    var ele = document.querySelector("#test");
    // element.属性名.方法名("内容")
    ele.src.match("value"); //element元素的src属性中匹配"value",match()方法检索返回一个字符串正则表达式的结果
    //element.style.样式名="样式值"
    ele.style.color = "#FFFFFF"; //改变元素样式
    ele.firstChild; //获取元素的第一个子节点
    ele.lastChild; //获取元素的最后一个子节点
    ele.childNodes; //获取元素子节点列表
    ele.previousSibling; //获取当前节点的前一个兄弟节点
    ele.nextSibling; //获取当前节点的下一个兄弟节点
    ele.parentNode; //获取当前节点的父节点
    //创建节点
    document.createElement("元素标签"); //创建元素节点
    document.createAttribute("元素属性"); //创建元素属性
    attribute.value = "属性值"; //设定属性值
    document.createTextNode("文本内容"); //创建文本节点
    //属性操作
    ele.setAttribute("元素属性名", "元素属性值"); //设置元素属性
    ele.getAttribute("元素属性名"); //获取元素属性
    ele.removeAttribute("元素属性名"); //移除元素属性
    ele.src /*元素已有属性名*/ = "操作元素已有属性";
    ele.style.color = "属性值"; //改变元素css样式

    //插入节点
    ele.appendChild(); //向元素的子节点列表末尾添加指定节点
    ele.insertBefore(); //向元素的子节点列表头部添加指定节点
    ele.insertAdjacentElement("afterend", element); //插入元素(已保存到变量中的页面元素,同一个变量元素在页面中只能存在一个)
    ele.insertAdjacentHTML("beforebegin", element); //插入HTML代码(插入一段HTML代码,将指定文本解析为Element元素)
    ele.insertAdjacentText("afterbegin", element); //插入文档(插入一段纯文本)
    //"beforebegin"插入当前元素前,"afterend"插入到当前元素后,"afterbegin"插入到内部第一个子元素前,"beforeend"插入到内部最后一个子元素后

    //替换节点
    ele.replaceChild("插入新元素", "被替换的元素"); //替换节点

    //复制节点
    ele.cloneNode(true / false); //复制指定节点的副本(true复制当前节点及其所有子节点,false仅复制当前节点)

    //删除节点
    ele.removeChild("要删除的节点"); //删除指定节点
    ele.parentNode.removeChild(this);
    // 删除指定元素,parentNode选择指定元素的父级元素,再删除元素,元素不能删除本身

    //文本操作
    ele.insertData(offset /*要插入的位置,0表示字符串第一个字符*/ , data /*要插入的数据*/ ); //在元素内容指定位置插入数据
    ele.appendChild(data); //在元素文本节点末尾添加数据
    ele.deletData(offset /*文本删除的起始位置*/ , count /*要删除的文本个数*/ ); //
    ele.replaceData(offset /*文本替换起始位置*/ , count /*替换的文本数*/ , string /*替换数据*/ ); //将从offset指定的位置,将count指定数量的字符替换为string中的文本
    ele.splitData(offset); //从offset指定的位置,将文本节点分成两个节点
    ele.substring(offset, count); //返回一个由offset起始,count个字符的文本节点

    //补充
    ele.addEventListener("event", functionName, true /*false使用冒泡传递 true使用捕获传递 */ ); //addEventListener("监听事件",执行事件,选项(选项可设置捕获,只调用一次,默认等等))
    ele.removeEventListener("event", functionName);
    // addEventListener方法添加的事件不会覆盖已存在的事件,添加的函数不需要括号,如果函数名带括号表示立即执行,并且只触发一次,如需执行带参数函数,需要将函数放到匿名函数中
    // addEventListener事件监听,使用addEventListener事件监听,事件不需要on前缀
    event.target.style.backgroundColor = functionName();
    // event.target表示处理当前元素,event是function (event){//函数体} 是形参的名称 ,event.target 和 this 的区别  this是会变化的  event.target永远指向触发事件的DOM元素本身
    event.currentTarget; //event.target永远指向事件触发的DOM元素    event.currentTarget 永远指向触发的事件绑定的DOM元素
    e.preventDefault();
    // .preventDefault();阻止元素默认行为
    e.stopPropagation();
    // .stopPropagation();阻止冒泡
    //冒泡和捕获,冒泡中内部元素会先触发,然后再触发外部元素,捕获中外部元素先触发,再触发内部元素
    /*--事件------------------------------------------------------ */
    //HTML常见事件
    /*
    onchange HTML元素改变
    onclick  点击HTML元素
    onmouseover 在HTML元素上移动鼠标
    onmouseout 从HTML元素上移开鼠标
    onmousedown 鼠标按下时触发
    onmouseup 鼠标按键抬起触发
    onkeydown 用户按下键盘
    onload  浏览器已完成页面加载
    onunload 用户离开页面时
    */
    /*--变量-----------------------------------------------------*/
    /*
    变量命名方法 
    匈牙利命名法: 变量名=变量类型+对象描述(类型 Int|i整形 , Float|fl浮点 , Boolean|b布尔 , String|s字符 , Array|a数组 , Object|o对象 , Function|fn函数 , Regular Expression|re正则)
    驼峰命名法:  1.大驼峰(帕斯卡命名法),所有单词首字母大写
                2.小驼峰,除第一个单词首字母小写,其余单词首字母大写
    下划线命名法: 全部小写,单词与单词间下划线分隔
    全大写: 常量使用全大写字母命名
    注:不推荐使用"-"减号链接单词,因为减号是运算符,会造成一部分语言报错
    */
    //声明变量,推荐先声明再使用,先赋值再运算
    var variabelName = "value"; //变量提升,代码解析时会将var声明的变量提升到代码最顶端解析,所以var变量可以先使用后声明
    //使用var再次声明同名已赋值变量,变量值不会丢失,使用等号赋值,值才会覆盖,只声明未赋值变量名指向undefined
    let variableName = "value"; //变量不提升,变量不在使用前声明就无法使用,let不能多次声明同名变量
    const constName = "常量"; //const声明常量,常量一旦被定义便不能更改
    /* 
    变量类型:Number数字型 let number=1;      String字符串型  let string="这是一个字符串"     
    Boolean布尔型  let boolean=true;  任何不是:false,undefined,null,0,NaN的值,或空字符串,都将返回true
    Array数组型  let array=["name" , 15 , "time"];    Object对象  let object={name:"name" , age:18};   调用object.name      
    声明变量时可以使用new关键字指定变量类型
    JavaScript中应尽量避免使用new关键字      
    */
    variabelName = new String;

    typeof 变量名; //tyoeof判断变量内容的数据类型
    classObj instanceof ClassName; //instanceof用于判断对象类型,判断 classObj 是否是 ClassName对象类型的实例对象

    //值类型变量,var声明 ,变量占用空间固定,保存在栈中,保存和复制的是值本身,使用typeof检测数据类型,基本数据类型是值类型
    //引用类型变量,占用空间不固定,保存在堆中,保存和复制的是对象指针,使用instanceof检测数据类型,使用new()方法构造出的对象是引用型

    /*
    作用域
    全局变量:在函数体外定义的变量和函数体内定义的无var变量,在任何位置都可以调用(注:PHP中是内部变量和外部变量,函数中外部变量不使用 global ,$_GLOBALS[],use()引入,无法使用外部变量)
    局部变量:在函数内部声明的var变量和函数测参数变量,只能在函数内部使用
    优先级:局部变量高于同名全局变量,参数变量(形参)高于同名全局变量,局部变量高于同名参数变量
    特性: 忽略块级作用域
          全局变量是全局对象的属性
          局部变量是调用对象的属性
          作用域链:内层函数可以访问外层函数的局部变量,外层函数不能访问内层函数的局部变量
    生命周期:全局变量:除非被显式删除,否则一直存在
            局部变量:自声明起至函数运行完毕或被显式删除
            回收机制:标记清除,引用计数
    */

    /*--函数-----------------------------------------------------*/
    //函数声明后不会立即执行,在需要时调用,因为函数不是可执行语句,所以不以分号";"结束
    //函数提升(Hoisting),函数会自动提升,所以可以在函数声明前调用函数
    //静态方法
    function fnName(形参1, 形参2) {
        //函数体
        //[return [函数返回值]];
    }
    //匿名方法,匿名函数通过变量名调用
    var fnName = function(形参1, 形参2) {
        //函数体;
        // //[return [函数返回值]];
    }

    /*ES6 箭头函数 */
    var arrowFunction = element => console.log(element);
    var arrowFunction = (element) => { console.log(element) };
    /*箭头函数是ES6新添加的一种匿名函数,形参和代码通过=>箭头链接,单条件单代码的情况下,不需要()括号和{}大括号 */

    //调用函数
    fnName(); //直接调用
    //<a href = "javascript:fnName()" > 描述文字 < /a> // 在链接中调用
    //事件类型 = "fnName()" //在事件中调用
    //自调用函数
    (function() { /*函数体,函数调用自己*/ })();

    function fnName() {
        //函数体
        fnName(); //递归调用:在函数内部调用自身
    }
    // 使用onclick调用函数时, btn.onclick = function; 不用加括号(),因为加了括号函数会直接运行一次,而不是等用户点击再运行
    // 如果想使用传参函数,就需要再包裹一层匿名函数 btn.onclick = function(){ functionName (value1 , value2);}

    //方法
    //apply 将函数作为对象的方法来调用,将参数以数组的形式传递给该方法   例 max=Math.max.apply(null,numbers/number = [5,6,2,7]*/)  求最大值
    //call 将函数作为对象的方法来调用,将指定参数传递给该方法  例 call(方法名,参数1,参数2)
    //toString 将函数的返回值以字符串表示
    //闭包:闭包是可以访问上一层函数作用域里变量的函数,即使上一层函数已关闭

    //arguments对象
    /*
    功能:存放实参的参数列表,包括已指定形参名的和超出形参个数的参数都包括在内,所有传递的参数
    特性:仅能在函数内部使用,带有下标但不是数组,函数声明时自动初始化
    属性,length获取实参的长度  callee返回当前正指向的函数  caler返回调用当前正在执行函数的函数名
    */

    //函数参数
    /*
    参数类型:  形参:定义函数时使用的参数,接收调用该函数时传递的参数
              实参:调用函数时传递给函数的实际参数
    特性:   参数个数没有限制,实参少于形参,多余形参值为undefined(PHP形参对于实参会报错),实参多于形参,多余形参被忽略
            参数的数据类型没有限制,通过arguments对象访问参数数组
            参数始终按值传递:基本类型传值,引用类型传地址
    */

    //指针标识
    /*
    this指向当前操作对象
    callee指向参数集合所属函数,ES5严格模式下禁止使用
    prototype指向函数附带的原型对象
    constructor指向创建改对象的构造函数
    */

    /*--运算符-----------------------------------------------------*/
    /*
    算数运算符
      + :对数字求和,连接字符串(字符串+字符串),将数字转换为字符串(数值+字符串)
      - :取反操作,数字减法,将字符串转换成数值(数值型字符串-0)
      * :乘法运算,同号得正,异号得负
      / :除法运算,同号得正,异号得负
      % :取余(取模)运算,运算符同第一个运算符
      **幂(2 ** 5 2的5次方)
      赋值运算符: +=,-=,*=,/=,%=
    */

    /*
    自增(++)与自减(--)
    运算数必须是一个变量、数组的一个元素或对象属性,运算数如果是非数值型(字符串型数字)则会转换为数值型
    ++variable | --variable:先自增(自减)操作再求值
    variable++ | variable-- :先求值再自增(自减)
    */

    /*
   关系运算符
    大小关系运算符
      A>B :A大于B,返回true,否则返回false
      A>=B :A大于等于B,返回true,否则返回false
      A<B :A小于B,返回true,否则返回false
      A<=B :A小于等于B,返回true,否则返回false
      规则:数值与数值比较他们的代数值,数值与字符型数字比较,将字符型数字转换为数值型进行代数比较,字符串比较他们的Unicode数值
          字符串和非数值比较,将运算数转换为字符串比较,运算数即非数字也非字符串,转换为字符串后比较,运算数无法转换为数字或字符串返回false
          与NaN的比较,返回值为false
   
    等值关系比较   
      相等比较
      操作符
          == :比较两个运算数返回值是否相等
          != :比较两个运算数返回值是否不相等
      类型转换
          布尔值: true 1 , false 0
          对象:调用valueOf()获取数据基本类型
          字符串与数字比较,字符串转换为数值
      比较原则:null与undefined 相等,比较前不做任何转换
              NaN于任何数值都不相等,包括其本身
              对象是否属于同一对象  是==  否!=
      相同比较
      运算符
          === :比较两个运算数返回值和数据类型是否相同
          !== :比较两个运算数返回值和数据类型是否不相同
      比较原则:只有数据类型和数值同时相同时才能够相同,引用类型间比较他们的指针值
   */

    /*
    对象运算符
    in : 判断左侧运算数是否为右侧运算数的成员
    instanceof : 判断对象实例是否属于某个类或构造函数
    new : 根据构造函数创建一个新的对象,并初始化该对象
    delete : 删除指定对象的属性,数组元素或变量
    .及[] : 存取对象和数组元素
    () : 函数调用,改变运算符优先等级 
    */

    /*
    逻辑运算符
    ! :逻辑非, !!连续使用两次可将任意类型转换为布尔值类型
    && :逻辑与
    || : 逻辑或
    */

    /*
    位运算符:略
    */

    /*
    其他运算符
    条件 ? 表达式1 : 表达式2  :三元运算符,简易的if else,注意三元表达式有返回值,if else没有返回值
    typeof : 类型判定运算符
    , : 逗号,在一行语句中执行多个不同的操作
    void : 舍弃运算数的值(计算表达式,但是不返回值),返回undefined作为表达式的值 
    */
    //<a href = "javascript:void(0)"> 点击链接也不会发生任何事 </a>   

    /*--流程语句-----------------------------------------------------*/
    //while
    while (condition /*条件为true时执行循环代码,条件为false时退出循环体*/ ) {
        //循环体代码
        //特性:先检查条件,再执行代码
    }
    //do-while
    do {
        //循环体代码
        //特性:先执行循环体再检查条件,所以循环体至少会运行一次
    } while (condition /*条件为true循环,false退出循环*/ );
    //for
    for (let index = 0 /*初值*/ ; index < array.length /*条件*/ ; index++ /*循环代码执行完毕后执行参数*/ ) {
        //初值如果在外部设置了变量可以省略,条件也可以省略但是要设置退出条件,参数3也可以省略比如循环体中有对应代码,但是顿号";"不能省略
        //循环代码体
        //流程:初值只执行一次,然后执行条件语句,条件为true执行循环体代码,循环体代码执行完毕后执行递增或递减计数器,再从执行条件验证开始继续执行循环,直到条件验证结果为false

    }
    //for-in forin
    for (const key /*声明变量*/ in object /*对象*/ ) {
        //代码段
        //遍历对象属性或数组元素
        //作用:枚举对象属性
        //注意:循环输出的顺序不可预知,对象的值不能是null或undefined
    }
    //for..of forof
    for (const /*const不能重新赋值 let可以修改*/ iterator of object) {
        //代码段
        //遍历对象属性值
    }

    //跳转语句
    //return  终止函数体运行,并返回一个值
    //break 终止整个循环,不再进行判断
    //continue 结束本次循环,执行下一次循环
    //label: 标记语句  任何非保留词加:冒号,都可以声明标记语句配合break或continue使用,用于标记退出的循环语句标识,使用label标签可以break任何代码

    //if
    if (condition /*条件语句*/ ) {
        //代码体
        //如果条件语句为true则运行代码,false则不运行
    }
    //if-else
    if (condition /*条件语句*/ ) {
        //代码体1
        //如果条件语句为true,运行代码体1,否则运行代码体2
    } else {
        //代码体2
    }

    if (condition) {

    } else if (condition) {

    } else {

    }

    //switch
    switch (key /*条件表达式*/ ) {
        //计算条件表达式的值,并和各标签比较,找到指定标签则运行对应代码段,没有匹配值则运行default的代码段
        case value1: //case标签是常量,可以是数字或字符串

            break;
        case value2:
        case value3:

            break;
        default:
            break;
    }

    //异常处理
    /*
    throw:抛出异常
    try:指明需要处理的代码段
    catch:捕获异常
    finally:后期处理
    */
    try {
        //这里运行代码
        throw "抛出异常";
    } catch (error) {
        //这里处理错误
    }
    /*--调试工具---------------------------------------------------- */
    //使用console.log()
    //使用 console.log('%O' , element) 可以输出元素属性
    /*
    console.log格式化输出解析
            占位符              描述
            %s                  字符串
            %d 或 %i            整数
            %f                  浮点数
            %o 或 %O            JavaScript Object对象
            %c                  css样式
            %%                  表示输出%符号
    */
    /*
    console常用方法
    .log        打印日志
    .debug      打印调试
    .error      打印错误
    .info       打印信息
    .warn       打印警告
    .assert     打印断言
    .clear      清空控制台

    console.time('wait') & console.timeEnd('wait')
    .time设定一个时间戳.timeEnd计算当前时间和.time设定的时间戳的差并打印出来
    输出格式为 时间戳名:时间ms
    */
    //使用debugger;  开始F12调试工具页面代码执行到debugger就会停止执行
    /*--数据类型-----------------------------------------------------*/
    //undefined :使用var声明但是未初始化,typeof检测时返回undifined
    //null :逻辑上null表示空对象指针,typeof检测时返回object
    //注: undefined派生于null 所以使用"=="对比undefined和null时返回true

    //boolean: true真 false假

    //string : 由0或多个16位Unicode字符组成,单引号双引号不能交叉使用,使用.length属性访问字符串长度,转义序列(例如 \n)表示一个字符,无法精确返回双字节字符长度,字符串一旦创建,值不能改变,改变需要销毁原有
    /*
    转义序列:
    \n换行  ,  \t制表符   ,   \b空格   ,   \r回车符   ,   \f分页符
    \\反斜杠,  \'单引号   ,   \"双引号 ,   \xnn十六进制数,n代表0~F    ,  \unnnn以十六进制代码表示一个Unicode字符
    */

    //string类型转换
    toString(); //可以将number.boolean,string,object类型转换为string类型
    String();
    eval(); //计算字符串表达式的值并以数值形式返回

    //number
    //进制: 十进制  八进制(0xxxxxxx)  十六进制(0x)
    //浮点数: 小数点后至少一位数字,科学计数法(小数点后带有6个0的浮点数 | 以e为底*10的±N次密),最高精度17位小数,存在误差,无法测试特定浮点数的值
    /*数值范围: Number.MIN_VALUE最小值   Number.MAX_VALUE最大值
                Infinity || Number.POSITIVE_INFINITY  正无穷
                -Infinity || Number.POSITIVE_INFINITY 负无穷
        缺陷:无法参与下一次计算
        检测方法: isFinite()  检测是否是一个有穷数超出范围false  合法范围true
    */
    toExponential(); //将对象的值转换为指数计数法(e*10**5)
    toFixed(); //把数字转换为字符串,结果的小数点后有指定位数的数字
    toPrecision(); //把数字格式化为指定的长度
    /*NaN : 含义 Not a Number(非数值)
            特性:任何涉及NaN的操作都会返回NaN,NaN与任何数值都不相等,包括其自身
            检测: isNaN() 可以转换为数值false  不可以转换为数值true
    */
    /*
    数值转换
    Number() Boolean true=>1  false=0
             null=>0
             undefined=>NaN
             String:只包含数字=>十进制数,包含浮点数=>浮点值,十六进制=>相同大小十进制整数,空字符串=>0,其他格式字符串=>NaN
             Object:valueOf()    toString()
    parseInt("要解析的值", 2~36解析值的基数(进制数)) 特性:直接找到第一个非空格字符,如果不是负号或数字,返回NaN,如果是数字字符则解析到最后或解析到遇到非数字字符,小数点不是有效数字
    parseFloat() 特性:从第一个字符开始解析,遇到无效浮点格式后结束,只有第一个小数点有效,十六进制始终为0,没有小数点或小数点后全部为0转换为整数
    */
    parseInt();
    parseFloat();
    /*
    Object
    定义:一组数据或功能的集合
    声明 var Obj = new Object()
    属性和方法:  Constructor 保存用于创建当前对象的函数
                hasOwnProperty(propertyName)检测给定属性在当前对象实例中是否存在
                isPrototypeOf(object)检测传入的对象是否是另一个对象的原型
                propertyIsEnumerable(propertyName)检测给定属性是否能用for-in语句枚举
                toLocaleString()返回对象的字符串表示,该字符串与执行环境的地区对应
                toString()返回对象的字符串表示
                valueOf()返回对象的字符串,数值或布尔值表示,通常与toString()的值相同
    */

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
    // 构造函数创建对象,(函数名变成对象在于函数体中的this)
    function ObjectName2(first, last, age, hobby) {
        this.name = {
            'first': first,
            'last': last,
        };
        this.age = age;
        this.hobby = [];
    }

    Object.keys(obj); //返回象中所有可枚举的属性名组成的数组,(将所有属性名组成一个数组返回)
    /*
    构造函数的8种方式
    1.Object构造函数模式 var person = new Object(); 先创建空对象,再添加属性/方法,语句太多,适用于不确定对象内部数据时使用
    2.对象字面量 var person = {name:'xx',age:15}; 使用{}创建对象同时指定属性/方法,创建多个对象代码重复,适用于对象内部数据确定时使用
    3.工厂模式 function createPerson(name,age){var = obj{name:name,age:age} return obj}; var person = createPerson('name',10);
        通过工厂函数动态创建对象并返回,适用于创建多个对象,对象都是Object类型
    4.自定义构造函数模式 funtion Person(name,age){this.name =name ; this.age=age}; var person = new Person('name',10);
        通过自定义构造函数new创建实例对象,适合创建多个类型确定的对象,每个对象都有相同数据,浪费内存
    5.构造函数+原型组合 function Person(name,age){this.name=name;this.age=age} 
                       Preson.prototype.setName = function(name){this.name=name//这里的this指向每个实例化后的对象}
        自定义构造函数,属性在函数中初始化,方法添加到原型上,适用于创建多个类型确定的对象
    6.动态原型模式  function Person(name,age){this.name=name;this.age=age; if(typeof this.sayName != 'function'){Person.prototype.sayName=function(){alert(this.name)}}}
        动态原型函数模式把所有信息封装在了构造函数中,在构造函数中初始化原型的同时保持了构造函数+原型组合的优点,使用if判断减少new时多次创建原型方法浪费内存空间
    7.稳妥构造函数模式 function Person(name,age){var o =new Object();job='私有属性';o.sayName = function(){//共有函数 console.log(name)} o.sayJob = function(){console.log(job)} return o}
                      var person = new Person('name',15);
        所谓稳妥对象,指没有公共属性,并且其方法也不引用this的对象,适合在一些安全环境中使用
    8.es6 class方法 class Person{constructor(name,age){this.age =age;this,name=name} setName(name){this.name=name}}
                    var person = new Person('name',15); person.setName('newName');
        与组合构造函数相似,语法更精炼简洁
    */
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

    /*--正则表达式-----------------------------------------------------*/
    /*创建正则
    字面量创建正则 var 变量名 = /表达式/模式修饰符
    构造函数创建正则 var 变量名 = new RegExp("表达式","模式修饰符")
    */
    /*
    表达式
    元字符(有功能的字符): . \ [ ] { } ? * + | ( ) ^ $
    字符类中可使用的元字符: [ ] \ - ^
    使用\反斜杠可以忽略元字符功能
    单个字符与数字:  "."匹配除换行符之外的任意一个字符 使用'\.'将只匹配'.'字符
                    字符类是一组在方括号中的字符,表示匹配其中的任何一个字符[aeiou]
                    在[]方括号中使用'-'减号表示一定的匹配范围
                    [a-z0-9]匹配方括号中的任意字符
                    [^]在字符类中 '^'表示取反 '\^'表示匹配'^'字符 [^\^]表示匹配除'^'以外的所有字符
                    [^a-z0-9]匹配不在方括号中的任意字符
                    \d匹配一个数字 digit:数字 等同于[0-9]
                    \D匹配一个非数字 等同于[^0-9]
                    \w匹配一个字母或数字 等同于[a-zA-Z0-9]
                    \W匹配非字母 等同于[^a-zA-Z0-9]
    空白字符: \0匹配null字符   ,   \b匹配空格字符(单词分割符不是字符,宽度为0 \d要求它分割的一边是[\w]一边是[^\w])   ,   \f匹配进纸符   ,   \n匹配换行符
              \r匹配回车符    ,   \s匹配空白字符,空格,制表符或换行符   ,   \S匹配非空白字符   ,   \t匹配制表符  
    定位符:  ^行首匹配   ,   $行尾匹配   , ^$表示空白行   , ^.*$表示匹配全文  ^.*?$表示匹配单独一行  注意[^]不是合法表达式
            \A只匹配字符串的开始处   ,   \b匹配单词边界,词在[]内无效   ,   \B匹配非单词边界
            \G匹配当前搜索的开始位置 ,   \Z匹配字符串结束处或行尾      ,   \z只匹配字符串结束处
    限定符:  x?匹配0个或1个x  等同于{0,1} ,   x*匹配0个或任意多个x  等同于{0,} ,   x+匹配至少一个x  等同于{1,} ,   
            x{m,n}匹配最少m个,最多n个x,不输入n的情况下表示匹配x字符最少m个,同时优先匹配最长字符串 a{3,5} 会优先匹配aaaaa 而不是 aaa(匹配的是第一个可匹配项)
    分组:   通过'()'括号将匹配内容分组 (red|blue)表示匹配 red或blue  (red|blue)? 等同于 (red|blue|)
            (?:x)匹配x但不记录匹配结果   ,   x(?=y)当x后接y时匹配x   ,   x(?!y)当x后不是y时匹配x
    引用:  \1...\9 $1...$9  返回就隔在模式匹配期间找到的,最近保存的部分 (替换与捕获组)
    或模式:  x|y|z  匹配x或y或z
    */
    /*
    模式修饰符:   g全局模式,应用于所有字符串    ,   i区分大小写模式   ,   m多行匹配模式
    */
    /*
    正则表达式属性
    实例属性:    global检测是否设置g标记
                ignoreCase检测是否设置i标记
                multiline检测是否设置m标记
                lastIndex开始检索下一个匹配项的字符位置
                source返回正则表达式的字符串表示
                lastIndex返回被查找字符串中下一次成功匹配的开始位置
    构造函数属性:    $_  input  返回最近一次匹配的字符串
                    $&  lastMatch 返回最近一次的匹配项
                    $+  lastParen 返回最近一次的匹配捕获组
                    $`  leftContext 返回被查找的字符串中从字符串开始位置到最后匹配之前的位置之间的字符
                    $'  rightContext 返回被搜索的字符串中从最后一个匹配位置开始到字符串结尾之间的字符
                    $*  multiline 检测表达式是否采用多行匹配模式m
    */
    /*
    正则表达式方法
    实例方法: exec 在字符串中执行匹配检索,返回正则匹配的结果
             text 在字符串中测试匹配,返回true或false
    字符串方法:  match  找到一个或多个正则表达式的匹配,使用g全局查询多个结果以逗号分隔字符串返回,未使用g全局查询以数组格式返回数据
                replace  替换与正则表达式匹配的字串
                search  检索正则表达式相匹配的值,返回匹配下标
                split  把字符串分割为字符串数组
    */
    var re = /e/;
    re.test("字符串"); //使用正则表达式使用test()测试参数中是否含有正则表达式中指定的值,包含返回true,否则返回false,也可以直接使用  /e/(正则表达式).test()判断
    re.exec("字符串"); //使用方法同test(),返回值是匹配的结果
    re.compile("使用参数更改正则表达式规则"); //已废弃

    search(/pipei/i); //search()通过正则方法搜索
    search("search可以直接使用字符串"); //search()可以直接通过字符串搜索
    replace("正则式或字符串", "替换后字符"); //replace()可以通过正则表达式或字符串匹配指定的元素并替换
    /*
    replace()中 $符特殊含义
    $1 &2 ... $99 表示regexp正则匹配的第1到99个文本
    $& 表示与regexp匹配的字符串
    $` 表示匹配字符串左侧文本
    $' 表示匹配字符串右侧文本
    $$ 直接量符号 表示 $
     */
    /*--字符串函数-----------------------------------------------------*/
    //查找方法
    /*
    字符方法:   charAt()返回字符串中第n个字符,超出范围返回0
                charCodeAt()返回字符串中第n个字符的Unicode编码,超出范围返回NaN
                fromCharCode()根据字符编码返回字符串
    */
    /*
    位置方法:  indexOf()从前至后搜索字符串,查看是否有指定字串
              lastIndexOf()从后向前搜索字符串,查看是否含有指定字串
        参数: 必选:要查询的字符串     可选:开始查找位置的下标(负值视为0,超出字符串长度返回-1)
        返回值: 查找到返回首次出现的下标,未查找到返回0
    */
    /*
    匹配方法:  match()找到一个或多个正则表达式的匹配
              search()叫做字符串中与正则表达式匹配的字串
              replace()替换一个与正则表达式匹配的字串
              split()根据指定分隔符将字串分隔成多个字串,并返回数组
    */
    let textLength = testString.length; //获取字符串长度.length也能获取数组元素个数
    testString.indexOf("text"); //indexOf查找变量中是否包含条件字符串,包含返回包含条件在数组中的位置(第一个字符),不包含返回-1
    testString.slice(0, 3); //从指定位置截取(复制)当前字符串的指定个数,如果不指定截取个数,将截取指定位置后所有的字符,可以处理数组
    testString.replace("替换源", "替换值"); //将字符串中匹配的第一个数据替换成指定数据
    testString.replace(/word/g, "text"); //将字符串中所有的word替换为text
    testString.split(","); //split根据指定条件,将字符串转换为数组

    //操作方法
    /*
    拼接方法: concat()拼接字符串.返回拼接后的字符串
    截取方法: slice()根据下标截取(复制)字符串
             substring()根据两个下标截取两个下标之间的字符串
             substr()根据长度截取字符串  注:废弃
    空格处理: trim() 清除前置及后缀空格
             trimLeft()清除前置空格
             trimRight()清除后置空格
    比较方法: localeCompare()用特定顺序比较两个字符串
    */
    //编码方法
    /*
    字符串常规编码与解码  escape() 已移除
                        unescape()已移除
    URI字符串编码与解码  encodeURI()
                        decodeURI()
    URI组件编码与解码    encodeURIComponent()
                        decodeURIComponent()
    */
    //转换方法
    /*
    大小写转换   toUpperCase()转换为大写     toLocaleUpperCase()本地
                toLowerCase()转换为小写     toLocaleLowerCase()本地
    代码转换  用js动态格式化html,已舍弃
    */
    testString.toLowerCase(); //将字符串冲的字母全部转换成小写
    testString.toUpperCase(); //将字符串冲的字母全部转换成大写
    /*--window对象-----------------------------------------------------*/
    /*
    navigator导航器对象      appCodeName返回浏览器的代码名
                            appName返回浏览器名称
                            appVersion返回浏览器的平台和版本信息
                            cookieEnabled返回指明浏览器中是否启用cookie的布尔值
                            platfrom返回运行浏览器的系统操作平台
                            userAgent返回由客户机发送服务器的user-agent头部的值
                            注:navigator信息不应用于检测浏览器版本,因为navigator数据可被浏览器更改,一些浏览器会识别错误,无法报告新发布的操作系统

    screen显示器对象         availHeight返回显示屏幕的可用高度  screen.availHeight
                            availWidth返回显示屏幕的可用宽度
                            height返回屏幕的像素高度
                            width返回屏幕的像素宽度
                            colorDepth返回屏幕颜色的位数

    history历史对象          back()返回前一个URL
                            forward()返回下一个URL
                            go()返回某个具体页面

    location位置对象         hash设置或返回从"#"井号开始的URL(锚点)
                            host设置或返回主机名和当前的URL的端口号
                            hostname设置或返回当前URL的主机名
                            href设置或返回完整的URL              http:以后所有的部分
                            pathname设置或返回当前URL的路径部分  .com/以后的部分
                            port设置或返回当前URL的端口号
                            protocol设置或返回当前URL的协议
                            search设置或返回从"?"问号开始的URL
                            assign("url")加载新文档

    document文档对象         集合   anchors[]锚点对象数组
                                   images[]图片对象数组
                                   links[]链接对象数组
                                   forms[]表单对象数组
                            属性   cookie设置或返回与当前文档有关的所有cookie
                                                        可以使用 document.cookie属性来创建,读取,删除cookie
                                                        创建cookie示例 document.cookie="name=value [; expires=过期时间] [; path=/指定cookie路径]"
                                                        读取cookie示例 document.cookie 将以字符串形式返回所有cookie
                                                        修改cookie类似创建cookie
                                                        删除cookie只需要设置过期时间小于当前时间即可(不必指定cookie的值 name=; 即可)
                                                        getCookie("name");//获取指定cookie值
                                                        setCookie("name",value,time);//设置一个cookie
                                   domain返回当前文档的域名
                                   referrer返回载入文档前文档的URL
                                   title返回当前文档的标题
                                   URL返回当前文档的URL
                            方法   open()打开一个新的文档,并擦除旧文档内容
                                   close()关闭文档输出流
                                   write()向当前文档追加写入文本如果在页面加载完后使用她,会覆盖整个文档
                                   writeIn()与write()相同,在<pre>中会追加换行
                                   innerHTML()写入到HTML元素
    */
    querySelector("#ele").innerHTML = "修改指定元素内容"
    this.innerHTML = "修改自身内容";
    /*
    窗口控制                moveBy(水平位移量,垂直位移量)按照指定像素移动指定窗口
                           moveTo(水平,垂直)将窗口移动到指定坐标
                           resizeBy(水平,垂直)将当前窗口放大或缩小指定的大小,x,y值大于0扩大,小于0缩小
                           resizeTo(水平,垂直)将当前窗口变成指定大小
                           scrollBy(水平位移,垂直位移)将窗口中内容按给定的位移量滚动,正数时正向滚动,负数时反向滚动
                           scrollTo(水平位移,垂直位移)将窗口中的内容滚动到指定位置

    焦点控制                focus得到焦点
                            blur移出焦点

    打开关闭窗口            open("URL","窗口名称","窗口风格")打开一个新的窗口,并在窗口中装载指定的URL地址的网页
                                    窗口风格:   height 窗口高度,不能小于100  ,  width 窗口宽度,不能小于100
                                               left 窗口左坐标(不能为负数)   ,  top 窗口上坐标(不能为负数)
                                               location  是否显示地址栏(yes/no)
                                               menubar 是否显示菜单栏(yes/no)
                                               resizable 是否可以改变窗口大小(yes/no)
                                               scrollbars 是否允许出现滚动条(yes/no)
                                               status 是否显示状态栏(yes/no)
                                               toolbar 是否显示工具栏(yes/no)
                           close() 自动关闭浏览器窗口

    定时器                  setTimeout(执行代码,毫秒数) 当指定毫秒数后,自动执行功能代码
                            clearTimeout(定时器名) 取消由setTimeout()设置的定时器
                            setInterval(重复执行的代码,毫秒数) 设定周期重复执行功能的代码
                            clearInterval(时间间隔器) 取消由setInterval()设置的时间间隔器

    对话框                  alert("提示字符串") 弹出一个警告框,并显示设定的字符串
                            confirm("提示字符串")显示一个确认框,并显示设定字符串,用户点击确定返回true,点击取消返回false
                            prompt("提示字符串","缺省文本") 显示一个输入框,在提示框内显示设置字符串,输入框显示缺省文本,用户点击确定返回用户输入,点击取消返回null
                            注:弹窗使用 \n来进行文本换行

    属性                    状态栏         defaultStatus 改变浏览器状态栏的默认显示
                                          status 临时改变浏览器状态栏的显示

                            窗口位置       IE  screenLeft声明窗口左上角X坐标
                                               screenTop声明窗口左上角Y坐标
                                               document.body.scrollLeft  ||  document.documentElement.scrollLeft  声明当前文档向右滚动过的像素数
                                               document.body.scrollTop  ||  document.documentElement.scrollTop  声明当前文档向下滚动过的像素数
                                          !IE  screenX 声明窗口左上角X坐标
                                               screenY 声明窗口左上角Y坐标
                                               pageXOffset声明当前文档向右滚动过的像素数
                                               pageYOffset声明当前文档向下滚动过的像素数
                                          FF   innerHeight 返回窗口的文档显示区高度
                                               innerWidth 返回窗口的文档显示区宽度
                                               outerHeight 返回窗口外部的高度
                                               outerWidth 返回窗口外部的宽度

                            其他属性     opener  可以实现同域名下跨窗体之间的通讯,一个窗体要包含另一个窗体的opener
                                        closed  当前窗口关闭时返回true
                                        name  设置或返回窗口名称
                                        self  返回当前窗口的引用                
    */
    //获取浏览器窗口宽高兼容性写法
    var w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
    var h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
    /*--JSON和异步-----------------------------------------------------*/
    //JSON是一种按照JS对象语法存储的数据格式,JSON是一种纯数据格式,只有属性,没有方法,JSON字符串和属性名只能用双引号,单引号无效,JSON中属性名和值都需要带引号(数字不需要引号)
    JSON.parse(); //将文本形式的json内容转换为对象格式
    JSON.stringify(); //将对象内容转换为json字符串
    /*Promise */
    /*Promise是一个对象,代表异步操作最终完成的成功或失败,由于可以在Promise上绑定回调函数,这样就不用将回调函数作为形参传递给方法了 */
    /*链式调用,连续执行两个或多个异步操作,在上一个操作执行成功后,开始下一步操作,并将上一次步的操作结果作为当前步骤的形参 */

    // 回调函数,就是在函数内部运行一个由实参传入的函数,用于完成当前函数所需的数据处理需求
    //.then(成功回调函数,失败回调函数)
    Promise.then(onFulfilled /*Promise编程接收状态时调用的函数*/ , onRejected /*Promise变成拒绝状态时调用的函数*/ ); //Promise对象用于表示一个异步操作的最终完成(或失败)及其结果值
    Promise.catch(); //用于捕获异步处理中的错误 可以使用throw抛出的错误信息
    //.catch(失败回调函数) 等于 .then(null , 失败回调函数) ,catch(onRejected)是 then(null , onRejected) 的简写
    Promise.resolve(); //resolve()方法返回一个给定解析值后的Promise对象
    Promise.reject(); //reject()方法返回一个带有拒绝原因的Promise对象
    //Promise三种状态  pending待定,请求进行中  fulfilled已兑现,操作成功,调用then()处理函数    rejected已拒绝,操作失败,调用catch()处理函数
    Promise.all([Promise1, Promise2, Promise3]); //all()方法接收多个Promise对象组成的数组,并返回一个单一的Promise,前提必须所有Promise都成功,如果有失败的,则调用catch()方法
    Promise.any([Promise1, Promise2, Promise3]); //any()方法,Promise数组中,任意一个执行完毕,就执行,全部Promise对象都被拒绝,any()也会被拒绝

    /* */

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
    //request.open("请求方式","请求地址",true异步|false同步)
    request.open("GET", url); //GET会被缓存,POST不会被缓存
    request.setRequestHeader("hrader规定头名称", "value规定头值"); //向请求添加HTTP头
    request.responseText = "text"; //XMLHttpRequest默认返回类型text,为了以后接收其他格式,推荐写明响应类型
    request.onload = function() { //onload异步响应后执行
        element.textContent = request.response; //将Ajax响应信息填充页面
    }
    request.send(); //执行请求
    /*
    XMLHttpRequest属性
    onreadystatechange 存储函数(或函数名),每当readyState属性改变就调用该函数
    readyState 存有XMLHttpRequest的状态从0到4,0请求未初始化,1服务器链接已建立,2请求已接收,3请求处理中,4请求已完成,且响应已就绪
    responseText 以纯文本形式返回响应,只有当readyState等于4时,此属性才可用,因为这表明AJAX请求已结束
    responseXML 以XML格式返回响应
    status 将状态返回为数字(例如 "Not Found" 为 404 , "OK" 为200)
    statusText 以字符串格式返回状态(例如 "Not Found" 或 "OK")
    XMLHttpRequest方法
    abort() 取消当前请求
    getAllResponseHeaders() 以字符串形式返回完整Http标头集
    getResponseHearder(headerName) 返回指定Http标头值
    open(method,URL,async,userName,password) 参数1:提交方式post,get 参数2:提交URL 参数3:是否使用异步 true异步 false同步 参数4:指定用户名 参数5:指定密码
    send(content) 发送请求
    setRequestHeader(label , value) 将标签/值添加到Http标头
     */

    //fetch是基于promise设计的
    fetch(url).then(function(response) { //fetch发送请求,将请求结果作为then回调函数参数
        response.text().then(function(text) { //获取响应内容,使用text()方法将响应内容输出为文本格式,将处理后的内容作为then回调函数参数
            //fetch();返回的promise对象文件类型方法有 .text()文本  .json()格式化   .blob()表示一个不可变,原始数据类文件对象(图片)  参考:File API   https://developer.mozilla.org/en-US/docs/Web/API/File_API
            element.textContent = text; //将内容填充至页面
        });
    });

    /*Promise详细使用 */
    let promise = new Promise(function(resolve /*成功调用的方法*/ , reject /*失败调用的方法*/ ) {
        /*
        resolve和reject是两个函数,由JS提供无需自己部署
        resolve作用是将Promise状态从 pending未完成变为Resolved成功
        reject作用是将Promise状态从 pending未完成变为Rejected失败
         */
        /*异步代码*/
        if (ture /*异步代码成功*/ ) {
            resolve(value /*value异步代码结果*/ )
        } else {
            reject(error /*错误*/ )
        }
    })
    promise.then(function(value) {
        //success成功
    }, function(value) {
        //failure失败,失败的函数可以省略,Promise会调用继承连上的第一个reject函数
    })


    /*Fetch 写法*/
    fetch(url) /*fetch通过url获取数据*/ .then(function(response) {
        return response.json(); //将fetch返回值通过response形参传入,并通过json()格式化,json()专门用于解析Promise返回的数据
    }).then(function(data) {
        console.log(data); //输出格式化后的数据
    }).catch(function(e) {
        console.log('发生了错误'); //catch捕获错误
    });
    //ES6箭头函数版
    fetch(url).then(response => response.json()).then(data => console.log(data)).catch(e => console.log('发生了错误'));
    //async/await ES7 写法
    try {
        let response = await fetch(url); //await停止当前代码,直至fetch返回结果
        let data = response.json(); //json格式化promise返回值
        console.log(data); //输出结果
    } catch (e) {
        console.log('发生了错误', e); //捕获错误
    }

    /*Fetch Post请求*/
    fetch('url', { /*请求参数*/ });

    async function postData(url = '', data = {}) { //异步函数
        const response = await fetch(url, {
            /*基本参数(必选)*/
            method: 'POST', //设置请求方法 GET POST PUT DELETE etc...
            headers: { 'Content-Type': 'application/json' }, //可以设置请求头要携带的数据,这里设置以json格式传输数据
            body: JSON.stringify(data), // 请求体,要提交的数据
            /*安全参数 */
            referrer,
            //请求来源,用于内容防盗 ""空,不发送请求来源字段  USVString client 默认,同'非同源地址',直接写client效果同其他字符串  USVString no-referrer 同 "" ,直接写no-referrer效果同其他字符串
            //非同源地址,发送来源字段,内容为当前网页地址(包括请求参数 ?id=$$$)
            //同源地址,发送来源字段,内容为改指定同源地址
            //其他字符串,发送来源字段,内容为当前网页地址+referrer(不含请求参数)
            referrerPolicy: "no-referrer-when-downgrade", //或unsafe-url 请求来源策略,用于控制隐私
            //处于对用户隐私保护,有事要求不发送请求来源,或者带有策略的发送来源
            //no-referrer 不发送来源
            //no-referrer-when-downgrade 默认 协议降级时不发送来源 https->http 其他情况由referrer指定
            //origin 发送host部分
            //origin-when-cross-origin 跨域时(包括http(s)->http(s))发送host部分 ,同源时发送内容由referrer指定
            //same-origin 跨域时不发送,同源时(包括http(s)->http(s))发送内容由referrer指定
            //strict-origin 跨域时不发送 同源时(严格 http->http , https->https)发送内容由referrer指定
            //strict-origin-when-cross-origin 跨域时(严格 http->http , https->https)发送host部分,同源时由referrer指定
            //unsafe-url 总是发送来源,内容由referrer指定
            credentials: omit, //可选 omit 任何情况都不发送cookie  same-origin同源时发送cookier 跨域时不发送 include任何时候都发送cookie
            integrity, //子资源完整性值,用于内容安全(略)
            /*请求模式 */
            mode: 'cors', // mode:'no-cors' 仅允许使用一组有限的HTTP请求头
            //same-origin 发送的是同源请求
            //no-cors 发送的是同源请求或简单的跨域请求
            //cors 放松的是非简单的跨域请求,会先发送预检请求
            /*响应模式 */
            redirect: "follow", //重定向模式
            //follow 默认 遵循(follow)重定向响应
            //error 视重定向响应为错误
            //manual 拦截重定向并手动(manual)处理
            /*缓存模式 */
            cache //可选 
            //default 缓存相同请求
            //no-store 总是发送正常请求,且不缓存任何请求
            //reload：总是发送正常请求（不检查缓存），再用请求结果更新缓存
            //no-cache：有缓存则发送条件请求、无缓存则发送正常请求，再用请求结果更新缓存
            //force-cache：有缓存则强制使用缓存（不发送任何请求）、无缓存则发送正常请求再用请求结果更新缓存
            //only-if-cached：仅在请求模式为 mode="same-origin" 有效；在不与 mode="same-origin" 冲突的情况下，当重定向模式为 redirect="follow" 时，若发生重定向，且该重定向指向的请求有缓存，则该请求同样也遵循该缓存模式
        })
    }

    /*Fetch POST wgke.com 应用代码*/
    commodityEditSubmit.addEventListener("click", () => {
        // console.log(window.location.pathname.match(/item-(\w*)$/)[1]);
        // if (commodityTextArea.value) {
        let formData = new FormData();
        // FotmData会自动将'Content-Type'设置为'multipart/form-data'
        formData.append('id', window.location.pathname.match(/item-(\w*)$/)[1]);
        formData.append('data', commodityTextArea.value);
        //使用Fetch发送JSON.stringify格式化后的数据,在PHP中不能使用$_POST直接读取,需要使用json_decode(file_get_contents('php://input'));读取
        //FormData可以直接使用$_POST读取
        let data = {
            id: window.location.pathname.match(/item-(\w*)$/)[1],
            data: commodityTextArea.value
        };
        submitDetail('http://www.wgke.com/taobao/itemedit', formData)
        submitDetail('http://www.wgke.com/taobao/itemedit', data)
            // }
    });
    commodityEditCancel.addEventListener("click", () => {
        commodityTextArea.value = '';
    });
    submitDetail = (url = '', data) => {
        // console.log(JSON.stringify(data));
        fetch(url, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' }, //如果传递的是FormData数据,可以不指定headers
                // body: data,
                body: JSON.stringify(data)
            })
            .then(response => response.json())
            .then((data) => { console.log(data); })
            // .catch((error) => { console.log(error); })
    }

    /* -------------------------------------------------------------------------------------------------------------------------------------------- */

    //canvas画布  参阅 Canvas API(2D)   WebGL(3D)
    // <canvas id="" width="500" height="500"> <p>canvas标签内容可以显示反馈信息,例如:浏览器不支持canvas</p> </canvas>

    /* -------------------------------------------------------------------------------------------------------------------------------------------- */
    /*--Date(日期)对象-----------------------------------------------------*/
    /*
    getDate()从Date对象返回一个月中的某一天(1-31)
    getDay()从Date对象返回一周中的某一天(0-6)
    getFullYear()从Date对象以4位数返回年份
    getHours()返回小时(0-23)
    getMilliseconds()返回毫秒(0-999)
    getMinutes()返回分钟(0-59)
    getMonth()返回月份(0-11)
    getSeconds()返回秒数(0-59)
    getTime()返回1970年1月1日至今的毫秒数
    setFullYear()设置具体如期
    toUTCString()根据当日日期(根据UTC)转换为字符串
    */
    /*--XMLHttpRequest使用-----------------------------------------------------*/
    /*XMLHttpRequest是页面与服务器交换信息的桥梁,是Ajax和Promise的基础*/
    function testXMLHttpRequest() {
        let xhr = new XMLHttpRequest(); //实例化XMLHttpRequest对象  xhr = new ActiveXObject("Microsoft.XMLHTTP") IE5-6写法
        xhr.onreadystatechange = function() { //onreadystatechange 当readyState属性发生变化时调用
            if (xhr.readyState == 4 && xhr.status == 200) {
                /*
                readyState返回XMLHttpRequest当前处理状态 0->UNSENT创建但尚未调用open()方法
                                                        1->OPEN open()方法已经调用
                                                        2.HEADERS_RECEIVED  send()方法已调用,并且头部和状态已经可以获得
                                                        3.LOADING 下载中 responseText属性已经包含部分数据
                                                        4.DONE 下载操作已经完成
                status 返回一个无符号整形(unsigned short)数字,代表请求的响应状态100-199信息响应
                                                                            200-299成功响应   202"OK"
                                                                            300-399重定向消息 
                                                                            400-499客户端错误   404"找不到页面"
                                                                            500-599服务端错误
                 */
                //执行代码
            }
            xhr.open("GET" /*请求类型*/ , url /*请求地址*/ , true /*true异步,false同步*/ );
            //XMLHttpRequest.open(method请求类型GET或POST , url请求文件在服务器的位置 , async(true异步,false同步));
            //url指向的文件可以是任何类型文件(txt xml html php)
            //通过异步JS不需要等待服务器的响应,但是可以替换为 等待服务器响应时执行其他脚本/响应准备时处理响应
            //不推荐同步模式,异步模式需要编写onreadystatechange函数,同步模式下不需要编写,只需要将代码放置在send()语句之后即可
            xhr.setRequestHeader(header /*属性名例如Token*/ , value /*属性值*/ ); //设置请求头的值,必须在open()之后,send()之前调用
            xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"); //固定写法
            xhr.timeout = 2000; //设置一个请求自动终结的毫秒数,默认为0, IE中只能在open()方法之后,send()方法之前设置
            xhr.onload = function(e) {
                //XMLHttpRequest完成时执行某事
            }
            xhr.ontimeout = function(e) {
                //XMLHttpRequest超时时执行某事
            }
            xhr.send('string'); //发送请求到服务器,string仅用于POST请求,如果是异步请求send会直接返回,同步请求会等到响应到达后才会返回,send(可选参数)
            /*参考:https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/send */
            xhr.responseText; //如果服务器响应的不是XML,使用responseText以字符串形式返回响应数据
            xhr.responseXML; //如果服务器返回的是XML对象,且想要把返回数据解析为XML对象,使用responseXML
            xhr.response; //返回的数据类型取决于 responseType
            xhr.responseType = "";
            /*
            指定以什么格式接收数据 ""空的默认以text类型相同,
                                 "arraybuffer"二进制arraybuffer数据,
                                 "blob"二进制blob对象,
                                 "document"HTML Document或XML XMLDocument根据接收到的数据的MIME类型确定
                                 "json"将接收到的数据内容解析为json
                                 "text"文本
                                 "ms-stream"非标准仅IE支持 
            */
            xhr.responseURL; //返回序列化的URL,如果URL为空返回空字符串,#锚点后的内容会删除,URL多次重定向会以最终URL显示
            xhr.statusText; //同status返回响应状态,不同的是她包含完整的响应状态文本(例如 "200 OK")
            xhr.upload; //用于表示上传进度,可以通过绑定其他事件来追踪她的进度
            xhr.abort(); //如果请求已被发出,则立刻终止请求

        }
    }

    /*--事件-----------------------------------------------------*/
    element.addEventListener("animationcancel", () => {});
    // onanimationcancel  animation动画呗取消时触发的事件 所有animation相关的事件都在2020年第三季度后发布的浏览器开始支持,现阶段不推荐使用,使用查询手册
    element.addEventListener("blur", () => {});
    //onblur 元素失去焦点时触发(不支持冒泡)  focusout 事件支持冒泡
    element.addEventListener("click", () => {});
    //onclick 点击事件 onclick事件会在mousedown和mouseup事件后触发
    element.addEventListener("compositionend", () => {});
    /*
    compositionend 应用于输入法,相比于input事件属性键盘的keydown和keyup都会触发, compositionend事件只会在输入法输入完成后触发
    compositionstart 在输入法开始输入时触发
    compositionupdate 在输入一系列键和其他输入的特殊字符时触发,例如移动设备的语音输入
    */
    element.addEventListener("contextmenu", () => {});
    /*用户尝试打开上下文菜单时触发,例如在元素上右键弹出的菜单或键盘触发的菜单, 通过 preventDefault()方法可以阻止在元素上点击右键菜单*/
    element.addEventListener("copy", () => {});
    /*在蛹树使用 ctrl/win + c 快捷键时或右键菜单复制时触发*/
    element.addEventListener("cut", () => {});
    /*事件在选中内容从文档中删除并添加到剪切板后触发,不可编辑内容 cut事件仍会触发,但是事件对象不包含任何数据*/
    element.addEventListener("dbclick", () => {});
    /*双击时触发*/
    element.addEventListener("error", () => {});
    /*资源加载失败或无法使用时触发,例如脚本执行错误或图片无法找到或图片无效时触发 */
    element.addEventListener("focus", () => {});
    /*元素获得焦点时触发 与 blur对应  区别于 focusin会冒泡  focus不会冒泡 */
    element.addEventListener("focusin", () => {});
    element.addEventListener("focusout", () => {});
    /*可以冒泡的获得焦点和失去焦点 */
    element.onfullscreenchange = fullscreenChangeHandler;
    /* onfullscreenchange 属性是在元素过度到全屏模式时触发的全屏时间处理程序 */
    element.onfullscreenerror = fullscreenErrorHandler;
    /*元素退出全屏或全屏模式发生错误后触发的fullscreenerror处理程勋 */
    element.addEventListener("keydown", () => {});
    element.addEventListener("keyup", () => {});
    element.addEventListener("keypress", () => {});
    /*keypress推荐弃用 改用 input/oninput 代替*/
    /*
    input元素事件  onfocus获取焦点 onblur失去焦点 onchange失去焦点并且value变化 onkeydown在input中有按键按下时 onkeyup在input中有按键松开
    onclick 主要月用于input type="button" 点击时触发  onselect当input中的文本被选中后就会触发,不全选也会触发  oninput在value值改变时触发,无需失去焦点
    */
    element.addEventListener("mousedown", () => {});
    element.addEventListener("mouseenter", () => {});
    element.addEventListener("mouseleave", () => {});
    element.addEventListener("mousemove", () => {});
    element.addEventListener("mouseout", () => {});
    element.addEventListener("mouseover", () => {});
    element.addEventListener("mouseup", () => {});
    /*
    mousedown鼠标按下时触发    mouseenter通常指鼠标第一次移动到事件元素激活区时触发
    mouseleave与mouseout相似都在离开元素后触发,区别是mouseleave不会冒泡,mouseout会冒泡(冒泡,未离开元素但是离开元素的子元素也会触发)
    mousemove鼠标在元素上移动时会触发  mouseover当鼠标移动到元素上时会触发 mouseup对应mousedown鼠标按键松开时触发
    */
    element.addEventListener("paste", () => {});
    /*paste用户粘贴时触发 */
    element.addEventListener("pointercancel", () => {});
    element.addEventListener("pointerdown", () => {});
    element.addEventListener("pointerenter", () => {});
    element.addEventListener("pointerleave", () => {});
    element.addEventListener("pointermove", () => {});
    element.addEventListener("pointerout", () => {});
    element.addEventListener("pointerover", () => {});
    element.addEventListener("pointerup", () => {});
    /*pointer相关的都是触屏事件*/
    element.addEventListener("scroll", () => {});
    /*scroll元素滚动事件,不要和onwheel混淆, onscroll表示元素内容区的滚动事件  onwheel是鼠标滚轮滚动事件*/
    element.addEventListener("securitypolicyviolation", () => {});
    /*securitypolicyviolation表示当元素文档或worker线程违反其内容安全策略时触发 */
    element.addEventListener("touchcancel", () => {});
    element.addEventListener("touchend", () => {});
    element.addEventListener("touchmove", () => {});
    element.addEventListener("touchstart", () => {});
    /*touch事件不再正式标准化,不推荐使用 touch触摸事件同pointer */
    element.addEventListener("transitioncancel", () => {});
    element.addEventListener("transitionend", () => {});
    element.addEventListener("transitionrun", () => {});
    element.addEventListener("transitionstart", () => {});
    /*
    transition过度事件
    transitionrun 捕获delay开始的时间点 也就是从transition触发开始触发
    transitionstart 捕获delay结束时的时间点 也就是transition动画开始播放时触发
    transitionend 捕获动画结束的时候触发
    transitioncancel 在transition动画取消时触发,触发条件有  transition-property值被更改  display值被设定为none   动画运行完毕前就停止了,例如:hover条件下,鼠标移出了元素
    */
    element.addEventListener("wheel", () => {});
    /*wheel在鼠标滚轮或其他类似设备输入时触发 */

    /*--JS动画-----------------------------------------------------*/
    let animationId = window.requestAnimationFrame(animation);
    window.cancelAnimationFrame(animationId);
    /*
    requestAnimationFrame会给执行的函数传递一个DOMHighResTimeStamp时间参数,所以动画函数需要有一个接收此参数的形参 
    DOMHighResTimeStamp是一个十进制数,单位毫秒 她的值同 new() 方法是一样的
    window.requestAnimationFrame()的返回值是一个正整数,这个值没有特别意义,可以将此值传递给window.cancelAnimationFrame(id);用于取消回调函数
    */
    /*
    目前WEB动画可使用方法
    1.CSS: @keyframes + animation 帧动画
    2.CSS: transition   渐变动画
    3.JS: 定时器 setTimeout(执行代码,毫秒数) setInterval(重复执行的代码,毫秒数)
    4.JS: window.requestAnimationFrame();
    5.JS: element.animnate(keyframes , options)
    6.canvas API
    */
})