<?php /*开始*/
/*内容*/
/* PHP注释方法  1.//  2.#  3./*   */
/*PHP 文件开始  <?php  ?>   或  <?= ?> */

/*字符串操作 */
explode($str分隔符 ,$str字符串 , $limit可选最多生成多少元素);
/*简单输出------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
echo '输出字符'; /*无返回值*/
print("输出字符");/*成功返回1,失败返回0(看不到) */
print_r(['输出','数组']);/*输出数组格式变量 */
var_dump("输出字符");/*输出数据,并且带有数据类型和数据长度 */

/*变量,变量以$开头------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$valueName = "sun";
$valueName2 = "valueName";
echo $$valueName2;/*输出 sun */
echo "{$valueName}";/*{$变量名}  {}在字符串中使用变量,需要将变量用大括号包裹*/
echo "${valueName}";/*同上,表示提取大括号中名字的变量值  理论上 ${valueName}和 $valueName是一样的,但是 {}大括号能更精确的确定变量名 */
$valueName3 = &$valueName;/* &表示获取内存地址,指针 */
unset($valueName);/* 销毁变量名,没有名字的内存视为垃圾会被自动清理,但是上面$valueName3也指向了同一地址,所以只销毁了变量名,没有销毁内存内容 */


/*常量,常量一旦定义将不能重新定义-------------------------------------------------------------------------------------------------------------------------------------------------*/
/*常量在创建时就必须初始化(指定值),并且不允许更改值 */
define('DEFINE_NAME','DefineValue','BoolOptional');/*常量不需要$符 ,布尔可选参数表示常量名是否区分大小写 true表示不区分大小写,默认区分大小写 */
define("%_%",'sun');/*定义常量可以使用特殊字符*/
echo constant('%_%');/*调用特殊字符常量时,需要使用constant()获取常量值 */
/*判断常量是否存在 */
if(!defined('DEFINE_NAME')){//判断常量是否存在
  define("DEFINE_NAME","DefineValue");//不存在则创建常量
};

const DEFINE_NAME2 = "DefineValue";/*使用const关键字创建常量 */
/*预定义常量, 魔术常量(以 __FILE__ 格式声明) */
/*字符串 '强引用(纯字符串)' "弱引用(变量可解析)"  \转义 */
/*define const static */

/*数组------------------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$arrayName =array("element1",'element2',3);/*索引数组,使用0-∞来索引元素 */
$arrayName = array("element",5=>"element2"); /*可使用 索引号=>元素值 指定元素索引位置, 指定位置元素后续元素从当前元素后增长索引号 */
$arrayName = array('name'=>'element','element2','age'=>'element3');/*关联数组,使用字符关联数组元素位置 */
$arrayName = ['element1' ,'element2','element3'];/*短数组 */
$arrayName["element"] = "value";/*短数组关联数组 */
count($arrayName);//获取数组元素数 数组长度
echo $arrayName[0];/*输出数组 */

echo @($aa+$bb);/*未定义的变量计算会提示错误,@符号可以阻止错误语句的执行,只对表达式有效 */

/*三元运算  表达式 ? 值1 : 值2 */
/*合并运算符 */
echo $name??'姓名不详'; /*PHP7.0后实装,如果$name有值输出$name,否则输出??后面的值 */

isset($name);/*判断变量是否存在,并且值不为null */
/*使用 is_*()函数可以判断多种数据的格式*/
empty($name);/*判断变脸是否为空( null , '' , false , 0 , 0.0 , array() ) */

/*判断-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
if(1==1){};
if(1==1){}else{};
if(1==1){}elseif(2==2){};/*php中 elseif中间没有空格符*/

switch ($variable) {
  case 'value':
    # code...
    break;/*break 中断循环,默认只中断当前层  break 5 退出5层循环 */
  case 'value2':
  case 'value3':
  # code...
  break;
  
  default:
    # code...
    break;
};

/*循环-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
for ($i=0; $i < 10; $i++) {/*for循环条件可以是多条件的,但是判断条件只能有一个 for( $i=0 , $k=9 ; $i<$k ; $i++ , $k-- ){}; 多个条件情况下,最后一个条件生效 */ 
  # code...
  continue; /*跳过当前循环,执行下一个循环  continue 5 跳过五次循环 */
};

while ($a <= 10) {
  # code...
};

do {/*do while 循环至少执行一次 */
  # code...
} while ($a <= 10);

foreach ($variable as $key => $value) {/*$variable表示要遍历的数组,$key表示数组索引,$value表示当前索引位置的值 */
  # code...
};

/*替代语法:略*/

/*函数 函数形参可使用&符传递指针,只有已声明的变量才有地址指针----------------------------------------------------------------------------------------------------------------------------*/
function functionName ($name,$age="不详" /*形参,可以指定默认值,有默认值的参数要写在最后*/) {
  /*形参多于实参报错,形参少于实参取形参值个数,使用func_get_args()可以获取所有传递的参数 */
  //code...
};
function functionName2 (string /*参数类型约束*/ $name,int $age,...$hobby/*...$* 将多于的实参内容以数组的格式存储到这个形参中 ...$表示未定义形参数组 */ ):string/*返回值约束 */ {
  /*约束类型 string ,int ,float ,bool ,array ,void空,return不能有返回值php7.1 */
  //code...
  return '返回值';/*return只能终止当前页面的函数执行,如果return在包含文件中,只能中断包含文件中的代码 */
  /*exit() 和 die() 可以完全终止脚本执行*/
  exit();/*如果没有参数传入,直接终止脚本,传入字符串,将在打印字符串后终止脚本 提前终止脚本使用exit */
  die();/*同exit  当程序出错并停止执行时选择die */
};

$functionName/*使用变量指向一个匿名函数*/ = function (){
//code..
};
$functionName();/*调用函数*/

/*变量作用域-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
$valueName = 1; /*在函数外部声明的变量为全局变量*/

function functionName3(){
$valueName4 = 5;/*在函数内部声明的变量为局部变量,只能在函数内部使用 */
$_GET['name'];/*所有以$_开头的变量都是超全局变量,可以在函数内部和外部访问 */
$GLOBALS['valueName'];/*$GLOBALS可以在函数内部访问外部变量 */
global $valueName;/*global关键字可以将外部变量地址引入到函数内部使用, 相当于$valueName = &GLOBALS['valueName'] 在函数内部销毁global引用的变量,只是销毁引用,并没有销毁外部的变量 */
static $staticValue = 1; /*static静态变量,只初始化一次,常量不能更改值,静态变量可以,常量没有作用域,静态变量有,函数运行结束后,静态变量不销毁 */
};

$valueName5 = function()use($valueName) /*匿名函数下,使用use()关键字,可以将外部变量引入到函数中使用*/{
  echo $valueName;
  //code...
};
/*函数递归:函数在函数内部调用自己,需要设置结束条件,不然会死循环 */

/*包含文件-------------------------------------------------------------------------------------------------------------------------------------------------------------------------*/
require './file.php';/*错误级别高,文件丢失,后续代码将不执行 */
include './file.php';/*错误级别低,文件丢失,后续代码也将继续执行 */
require_once './file.php';/*_once多次调用包含文件也只包含一次,_once因为有查重的步骤,会降低性能,并不推荐 */
include_once './file.php';
/*魔术常量被包含到文件中后,魔术常量的值仍指向包含文件本身,并不会指向引入后的文件 */

/*开发模式和上线模式错误输出切换------------------------------------------------------------------------------------------------------------------------------------------------- */
$debug=false;        //true:开发模式  false：运行模式
ini_set('error_reporting',E_ALL);    //所有的错误有报告
if($debug){
    ini_set('display_errors','on');    //错误显示是浏览器上
    ini_set('log_errors','off');    //错误不显示在日志中
}else{
    ini_set('display_errors','off');
    ini_set('log_errors','on');
    ini_set('error_log','./err.log');    //错误日志保存的地址
};/*使用ini_set()设置PHP配置参数,PHP不需要重启 */

/*文件夹操作--------------------------------------------------------------------------------------------------------------------------------------------------------------- */
mkdir('./aa/bb/cc'/*创建文件夹地址*/ , 0777/*权限*/ ,true/*是否递归创建目录*/);
rmdir('./aa/bb/cc');/*rmdir删除文件夹,删除文件夹必须是空的,并且不能递归删除*/
rename('oldName','newName');/*重命名文件夹*/
is_dir('./aa');/*判断是否是文件夹*/
$files = opendir('./aa');/*在php中打开文件夹,opendir返回资源类型*/
while ($f=readdir($files)) {/* readdir读取文件夹*/
  if($f=='.'||$f=='..'){
    continue;/*跳过.和..文件的执行*/
  }
  echo iconv('gbk','utf-8',$f).'<br>';/*iconv()用来做字符编码转换,解决乱码*/
  # code...
}
closedir($files);/*关闭文件夹*/

/*文件操作----------------------------------------------------------------------------------------------------------------------------------------------------------------- */
$str = "文件内容";/*字符内容需要使用""双引号,因为单引号会使换行符 \r\n失效  \r回车(光标回到行首) \n换行(光标下移一行)*/
file_put_contents('./test.txt',$str);/*将内容写入(覆盖)到指定文件夹中 .txt文件的换行符为  \r\n */
file_get_contents('./test.txt');/*获取文件内容,也可以读取二进制文件*/
readfile('./test/txt');/*获取文件内容并输出 等于echo file_get_contents()*/
$f=fopen('./test.txt','r'/*打开文件的模式  r读取  w写入  a追加*/);/*fopen()返回文件指针 文件不存在情况下,w写入和a追加都会创建文档*/
fputs($f/*要写入的文档*/,'文本'."\r\n"/*根据打开方式写入一行内容*/);
fgets($f);/*fgets()读取一行文档内容,使用while遍历读取整篇文档,文档读取完毕while循环就会结束,字符流读取文件根据文件结束符判断文档是否读取完毕*/
fclose($f);/*编辑完成后,关闭文档*/
is_file($f);/*判断文件是否存在*/
file_exists('./aa');/*判断文档或文件夹是否存在*/
unlink($f);/*删除文档,删除文件夹使用rmdir()*/
fread($f,filesize($f)/*文件大小*/);/*二进制读取文件根据文件大小来判断数据是否读取完毕*/

/*表单提交数据--------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*get提交的数据 ?问号开始 &分隔,get提交数据一般不超过255字节,post提交大小在 php.ini中 post_max_size中设置*/
$_GET;/*获取get提交的数据,一个关联数组*/
$_POST;/*获取post提交的数据,如果提交的数据是一个数组(多选框),那么在html中元素的name属性值必须带[]*/
$_REQUEST;/*获取get或post提交的数据, php.ini中设置request_order='GP' 设定先获取get再获取post */
 
/*文件上传--------------------------------------------------------------------------------------------------------------------------------------------------------------*/
/*文件上传需要将 HTML页面的form表单需要设置属性enctype="application/x-www-form-urlencoded"(默认表示传递的是带格式的文本数据)  multipart/form-data(复合表单,字符串和文件,文件上传必须选这个) text/plain(无格式文本数据,主要用于电子邮件) */
$_FILES[0]["name"];/*获取上传文件的各种信息,name,type,size.tmp_name,error...*/
/*表单的隐藏表单可以设置表单文件允许上传的最大值, <input type="hidden" name="MAX_FILE_SIZE" value="允许的字节数">  此行必须在表单的最顶部 */
move_uploaded_file("temp_address" , "target_address");/*将文件移动到指定目录,同名文件会覆盖之前文件 */
/*
  post_max_size 表单允许文件最大值
  upload_max_filesize 表单允许上传文件最大值
  upload_tmp_die 表单上传文件的临时文件地址,不指定由系统指定
  file_uploads 是否允许文件上传
  max_file_uploads 允许同时上传的文件数
 */

 /*优化上传文件名-------------------------------------------------------------------------------------------------------------------------------------------------- */
 $uploadFile="test.jpg";
 echo time()/*秒时间戳*/.rand(100,999)/*指定范围随机数*/.strrchr($uploadFile,'.');/*strrchr从右侧开始截取,截取到指定的字符 */
/*或 */
echo uniqid().strrchr($uploadFile,'.');/*按当前时间微秒级生成唯一ID  uniqid("可指定前缀",true再增加一组数)*/

/*验证文件格式------------------------------------------------------------------------------------------------------------------------------------------------------ */
/*php_fileinfo扩展(可以防止文件伪装) */
/**
*验证错误
*如果有错，就返回错误，如果没错，就返回null
*/
function check($file) {
  //1：验证是否有误
  if($file['error']!=0)
  {
      switch($file['error'])
      {
          case 1:
              return '文件大小超过了php.ini中允许的最大值,最大值是：'.ini_get('upload_max_filesize');
          case 2:
              return '文件大小超过了表单允许的最大值';
          case 3:
              return '只有部分文件上传';
          case 4:
              return '没有文件上传';
          case 6:
              return '找不到临时文件';
          case 7:
              return '文件写入失败';
          default:
              return '未知错误';
      }
  }
  //2、验证格式
  $info=finfo_open(FILEINFO_MIME_TYPE);/*创建finfo资源 */
  $mime=finfo_file($info,$file['tmp_name']);/*finfo资源和上传的临时文件做比较 */
  $allow=array('image/jpeg','image/png','image/gif');    //允许的类别
  if(!in_array($mime,$allow))
  {/*in_array验证文件格式是否存在与允许类型数组中 */
      return '只能上传'.implode(',',$allow).'格式';/*implode()将数组转换为字符串 */
  }
  //3、验证大小
  $size=123456789;
  if($file['size']>$size)
  {
      return '文件大小不能超过'.number_format($size/1024,1).'K';
  }
  //4、验证是否是http上传
  if(!is_uploaded_file($file['tmp_name']))
      return '文件不是HTTP POST上传的<br>';

  return null;  //没有错误
}

//表单提交
if(!empty($_POST)) {
  //上传文件过程中有错误就显示错误
  if($error=check($_FILES['face']))
  {
      echo $error;
  }
  else
  {
      //文件上传，上传的文件保存到当天的文件夹中
      $foldername=date('Y-m-d');        //文件夹名称   /*设置php时区 date.timezone =PRC  或  Asia/Shanghai */
      $folderpath="./uploads/{$foldername}";    //文件夹路径
      if(!is_dir($folderpath))
        {
          mkdir($folderpath);
        };
      $filename=uniqid('',true).strrchr($_FILES['face']['name'],'.');    //文件名
      $filepath="$folderpath/$filename";    //文件路径
      if(move_uploaded_file($_FILES['face']['tmp_name'],$filepath))
          echo "上传成功,路径是：{$foldername}/{$filename}";
      else
          echo '上传失败<br>';
  }

}
/*数据库基本操作-------------------------------------------------------------------------------------------------------------------------------------------- */
/*链接数据库  mysql -h127.0.0.1 -P3306 -uroot -ppassword */
/*退出数据库 exit   quit   \q */
/*查看服务器接收返回的编码 show variables like 'character_set_%';         client客户端数据用格式   database存储数据格式  results返回数据格式 */
/*更改接收客户端指定的编码 set character_Set_client=gbk */
/*更改全部编码设置  set names utf8mb4 */
/*设置字符编码同时也可以设置校对集  语法: collate=校对集  _bin格式的校对集按二进制编码比较,区分大小写  _ci格式的校对集不区分大小写 */
/*create database [if not exists(判断是否不存在)] `databaseName`(反引号可以使用关键字或特殊符号当库名) [option 例:charset=utf8mb4]; */
/*
  显示库 show databases;        删除库 drop database [if exists(判断是否存在)] databaseName;     
  显示创建库的设置  show create database databaseName                修改库 alter database databaseName charset=utf8mb4;
  进入库 use databaseName;
*/
/*creat table [if not exists] `tableName` (`字段` 数据类型 [null||not null] [default] [auto_increment] [primary_key] [comment] , `下一个字段`...) [engine=存储引擎] [charset=字符编码] */
/*
  显示表 show tables;         删除表 drop table [if exists(判断是否存在)] tableName,tableName2,...;     
  显示创建库的设置  show create table tableName [\G(结果纵向排列)]               
  修改表(添加字段) alter table 表名 add [column]字段名 数据类型 [位置,after , first];
  修改表(删除字段) alter table 表名 drop [column]字段名;
  修改表(修改字段同时改名)  alter table 表名 change [column]原字段名  新字段名  数据类型…;
  修改表(修改字段不改名)  alter table 表名 modify  字段名  数据类型…;
  修改表(修改表引擎)   alter table 表名 engine=引擎名;
  修改表(修改表名)   alter table 表名 rename to 新表名;
  修改表(将表移动到其他库)  alter table 表名 rename to 新库.新表名;
  克隆表 creat table newTableName select baseTableName *(*全部字段 指定多个字段名用逗号,分隔)   不能复制旧表的设定的键,只能复制数据
  克隆表 creat table newTableName like baseTableName    只能复制表结构,不能复制表数据
  查看表 desc[ribe] tableName;
*/

/*
插入数据 insert into 表名 (字段名,字段名,...) value (值1,值2,...);    省略字段名,值就必须填写所有字段并且顺序正确   值可以插入 null空值 default默认值  多条数据 值用逗号分隔 (value1),(value2)
更新数据 update 表名 set 字段=值 [where 条件];   如果不填写where条件,所有字段都会被更改!!!!
删除数据 delete from 表名 [where 条件];   遍历删除
删除数据 truncate table 表名;         删除指定表,再创建一个结构相同的新表,效率更高
查询数据 select [all显示所有数据 | distinct去除重复数据] [字段名] [as '别名'(as可以省略,直接在字段名空格后设置别名)] from [表名] [where条件] [group by 分组(按指定字段分组查询显示)] [order by 排序(asc升序 desc降序)] [having 条件(在select结果基础上进行筛选)] [limit 限制];
where条件: 比较运算符: > , < , >= , <= , = , !=  逻辑运算符: and , or , not   其他: in | not in (字段是否在枚举范围内), between...and | not between...and (数字范围), is null | is not null(是否为空)
聚合函数: sum()求和  avg()平均值 max()最大值 min()最小值 count()记录数    例:select max(ch) 语文最高分,min(ch) 语文最低分,sum(ch) 语文总分,avg(ch) 语文平均分,count(*) 总人数 from stu;
通配符:   _下划线表示匹配一个任意字符    %百分号表示匹配0-∞个任意字符
模糊查询: 模糊查询不能使用where 需要使用 like  例:select * from stu where stuname like '张%';
联合查询union:   select 语句  union [选项 all显示所有数据  distinct默认,去重]  select 语句  union [选项]  select 语句           union联合查询的数据字段数必须一致,字段名不同的以第一个查询字段名为准,查询数据类型可以不一致
内连接 inner(inner可省略) join:   select  *  from  表1  inner  join  表2  on  表1.公共字段=表2.公共字段 || select  *  from  表1 , 表2  where  表1.公共字段=表2.公共字段1;
左外连接 left join :以左侧表为基准,右侧表没有对应的记录以null显示         select  *  from  表1  left  join  表2  on  表1.公共字段=表2.公共字段
右外连接 right join :以右侧表为基准,左侧表没有对应的记录以null显示           select  *  from  表1  right  join  表2  on  表1.公共字段=表2.公共字段
交叉连接(返回笛卡尔积) cross join: 交叉连接没有条件返回笛卡尔积,有条件和内连接结果相同    select  *  from  表1  cross join  表2
自然连接 natural join : select * from 表1 natural join 表2;
自然左连接 natural left join : select * from 表1 natural left join 表2;
自然右连接 natural right join : select * from 表1 natural right join 表2;
自然连接通过相同名字字段来连接,如果没有相同字段返回笛卡尔积,同名连接字段只显示一次,并将该字段显示在最前端
using : using用于指定自然连接使用的字段名,因为自然连接有多个同名字段会发生错误     select * from 表1 natural join 表2 using(字段名);
子查询: select * from 表1 where(子查询语句)  子查询语句为父语句提供条件  如:标量子查询(子查询语句返回一个值)  ,列子查询(子查询返回一个字段,父语句where需使用 in或not in)
                                                                        行子查询(子查询返回多个字段结果,使用in或not in)  
                                                                        表子查询(将子查询结果作为符查询使用的表):select * from (select * from stu order by ch desc) t(需要给子查询结果表命名) group by stusex;
exists子查询: 判断子查询结果是否存在,存在则进行父查询(提高查询效率)  select * from 表1 where exists (select * from 表2 where 条件)
*/
/*
视图:视图是一张虚拟的表,视图不存放数据,引用原始表,可以筛选表,防止访问敏感数据,隐藏表结构,降低表复杂程度,视图会根据数据库内容自动更新
视图可以提高重用性,相当于在mysql中设置了一个查询函数,可以对不同用户设定不同视图,限制用户访问
语法: create view 视图名
      as
      select语句;
查询视图:
      select * from 视图名;
修改视图:
      alter view 视图名
      as
      select语句;
删除视图
      drop view [if exists] 视图1,视图2,...;
查看视图信息:
      show tables;    或    select table_name from information_schema.views;    或    show table status\G;(查找所有表和视图详细信息)    或  show table status where comment='view'\G;(查找视图信息)
查询视图结构: desc 视图名;
查询视图创建语法: show create view 视图名\G;
视图算法:merge合并算法 temptable临时表算法  undefind未定义算法(由MySQL自己决定算法,一般选marge)
指定视图算法: 
      create or replace algorithm=temptable view 视图名
      as
      select语句;
*/
/*
事务:(TREANSACTION)是一个整体,要么一起执行.要么都不执行,innodb才支持事务
开始事务: start transaction  或  begin [work];
提交事务:commit;
回滚事务:rollback;
*/
/*MySQL函数
数字类:rand()随机数,round(四舍五入),truncate(要截取数据,保留小数位数),ceil()向上取整,floor()向下取整
字符类:ucase('字符串转换为大写'),lcase('字符串转换为小写'),left('字符串',从左边截取的数量),right('字符串',从右边截取的数量),substring('字符串',截取位置,截取数量)
      concat('将字符串','组合','成一个字符串'),coalesce(str1,str2)类似三元表达式,有数据执行str1,没有数据执行str2
      length(显示字节长度,中文占2个字节),char_length(显示字符长度,所有字符都占1个长度)
时间类:unix_timestamp()时间戳,from_unixtime(unix_timestamp())格式化时间戳,
      now()获取当前格式化时间:select year(now()) 年,month(now()) 月,day(now()) 日,hour(now()) 时,minute(now()) 分,second(now()) 秒;
                            select dayname(now()) 星期,dayofyear(now()) 本年第几天;
                            select datediff(now(),'2021-06-04') 相距天数;
加密函数: md5();    ,   sha();    , hash();
*/
/*预处理:编译代码,多次复用
预处理语句: prepare 预处理名字 from 'SQL语句,语句中变量使用?问号作为占位符';
执行预处理: execute 预处理名字 [using 变量1,变量2,...];    mysql变量以@开头set设置变量值   set @value='变量';  
*/

/*链接数据库 mysqli扩展
mysqli_connect('主机IP','用户名','密码','数据库名','端口');
mysqli_connect_error();获取链接数据库错误信息
mysqli_connect_errno();获取链接数据库错误编码
mysqli_set_charset(链接对象,字符编码);设置用什么字符编码访问数据库
mysqli_query($link,'sql语句'); 成功返回frue,失败返回false
mysqli_insert_id();获取插入记录的自动增长ID
mysqli_affected_rows();获取受影响记录数
mysqli_fetch_assoc();将一条记录匹配关联数组,指针下移到下一条
mysqli_fetch_row();将一条记录匹配成索引数组,指针下移到下一条
mysqli_fetch_array();将一条记录匹配成既有关联又有索引的数组,指针下移到下一条
mysqli_fetch_all();匹配所有记录
mysqli_num_rows();总行数
mysqli_num_fields();总记录数
mysili_free_result();销毁结果集
mysili_close();关闭连接
*/
//连接数据库，连接成功返回连接对象
$link=@mysqli_connect('localhost','root','root','data','3306');
//var_dump($link);            //object(mysqli)
if(mysqli_connect_error()){
    echo '错误号：'.mysqli_connect_errno(),'<br>';    //显示错误编码
    echo '错误信息：'.mysqli_connect_error();        //显示错误信息
    exit;
}
//设置字符编码
mysqli_set_charset($link,'utf8mb4');   
$rs=mysqli_query($link,'select * from 表1 where id<100');
//var_dump($rs);    //object(mysqli_result)
//4、获取对象中的数据
//4.1  将对象中的一行数据匹配成索引数组,指针下移一条
$rows=mysqli_fetch_row($rs);
//4.2  将对象中的一行数据匹配成关联数组,指针下移一条
$rows=mysqli_fetch_assoc($rs);
//4.3  将对象中的一行数据匹配成索引，关联数组,指针下移一条
$rows=mysqli_fetch_array($rs);
//4.4  总列数、总行数
echo '总行数'.mysqli_num_rows($rs),'<br>';
echo '总列数'.mysqli_num_fields($rs),'<br>';
//4.5  获取所有数据
$list=mysqli_fetch_all($rs);        //默认是索引数组
$list=mysqli_fetch_all($rs,MYSQLI_NUM);        //匹配成索引数组
$list=mysqli_fetch_all($rs,MYSQLI_ASSOC);        //匹配成关联数组
$list=mysqli_fetch_all($rs,MYSQLI_BOTH);        //匹配成关联、索引数组
//5、销毁结果集
mysqli_free_result($rs);
//6、关闭连接
mysqli_close($link);

/*数据库备份 mysqldump  略 参考千锋云计算笔记和黑马PHP笔记 */

/*--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
面向对象  OOP(Object Oriented Programming)面向对象编程   OOA(Object Oriented Analysis)面向对象分析   OOD(Object Oriented Design)面向对象设计
对象是由属性(变量)和方法(函数)组成的,类(class)是一系列具有相同属性和行为的对象集合
类是构造函数,对象是实体化的构造函数,属性是对象中的变量,方法是对象中的函数
面向对象三大特性 1.封装 2.继承 3.多态
*/
/*创建类*/
//stdClass类是所有PHP类的父类
class className{
  /*访问修饰符:
    public共有的,在类内部或外部都可以访问
    private私有的,只能在类内部访问,一般来说属性都是私有的,通过公有的方法来赋值和取值
    protected受保护的,在整个继承连上访问 
  */
  //属性
  private $name;/*属性必须指定是 public还是private或protected,一般来说属性都是private私有的 */
  private $gender;
  //方法
  public function exportMessage(){/*方法可以省略public,默认方法是public的 */
    echo '方法输出信息';
  }
  public function setInfo($name,$gender){
    if($gender!='男' && $gender!='女'){
      echo '性别必须是男或女';
      exit;
    }
    $this->name=$name;
    $this->gender=$gender;
  }
  //常量
}
/*实例化对象 对象传递的是指针 Object2=Object1; 两个对象是完全相等的,内存指针相同 new实例化的两个对象,是相等的,但不是全等的 */
$newObject=new className;
$newObject=new className();/*小括号可省略 */
/*调用对象成员  对象名->属性名  || 对象名->方法名  (同C    JS中为    对象名.属性名) */
$newObject->$name='给属性赋值';
echo $newObject->$name;/*获取对象属性 */
$newObject->$age=20;/*给对象添加属性 */
unset($newObject->$age);/*删除对象属性 */

/*
类class和对象object在内存中的分布:
      对象本质是一个复杂的'变量'
      类的本质是一个自定义的'数据类型'
      栈区(stacker)运行快,空间小,保存基本类型数据
      堆区(heap)运行稍慢,空间大,保存复杂类型数据
      实例化(new)就是分配内存空间的过程
      对象保存在堆区,对象指针保存在栈区 
*/
/*封装就是有选择性的提供数据,通过访问修饰符来实现封装(区分可访问和不可访问) */
/*构造函数也称为构造方法,是当实例化(new)对象时,自动执行的方法 */
//构造方法语法:
class ConstructFunction{
  private $name;
  public function __construct($name) //构造方法__construct:当对象实例化时调用的方法
  {
    $this->name=$name;
    echo '这是实例化(new)时自动调用的构造方法';/*PHP不允许构造方法和类名相同,其他语言中,和类名相同的方法就是构造方法,构造函数可用于初始化成员变量 */
  }
  public function __destruct()//析构方法__destruct:当对象销毁时自动调用的方法,析构函数不能带参数
  {
     echo "{this->name}销毁了";
  }
}
$newObject=new ConstructFunction("sun");
/*注意构造函数可以带参数(形参,实参),但是不能有return(因为return返回的结果会覆盖已实例化变量中存储的构造函数) */
/*
先进后出是计算机内存的默认管理方式    123321
没有指定变量名的数据就是垃圾,在执行完成后就会立即销毁  112233
指定同一个变量名的数据,在变更变量内容完成时,上一个数据没有变量名便会销毁  121323 */

/*
继承:继承使代码有层次结构,子继承了父类的属性和方法,实现了代码的可重用性,使用extends关键字实现继承,父类和子类是相对的  语法: class 子类名 extends 父类名{};
 */
class FatherClass{
  protected $num = 10; /*protected 受保护的,在整个继承链上使用 */
  public function show()
  {
    echo '这是父类';
  }
  public function __construct()
  {
    echo '父类构造函数';
  }
}
class SonClass extends FatherClass {  //继承其他空间的类 需要写明命名空间地址和被继承类的类名,同时被继承的文件需要require当前继承文件中
  public function test()
  {
    //子类中调用父类成员
    $father=new FatherClass();
    $father->show();/*通过实例化父类调用父类成员 */
    //或
    $this->show();/*通过$this关键字调用父类成员 */
  }
  public function getNum()
  {
    echo $this->num;
  }
  public function __construct()
  {
    FatherClass::__construct();//通过类名调用父类的构造函数
    parent::__construct();//通过parent降低耦合性调用父类的构造函数
    // parent::__construct($name,$age);//给父类构造函数传递参数
    // ::域运算符,类似C语言中的.  PHP调用类的静态成员或者是类之间调用就要使用::域运算符
  }
}
$sonClass = new SonClass();
$sonClass->show();//结果:这是父类,如果在对象中找不到指定方法,就会在对象的父类中查找指定方法
/*protected*/
$sonClass =new SonClass();
$sonClass->getNum();/*结果为10,因为$num在父对象中,可以访问protected访问修饰符的属性 ,同样属性$num在子对象中,getNum方法在父对象中也可以使用,因为他们都在一条继承链中*/
$fatherClass = new FatherClass();
// $fatherClass->getNum();/*无法访问getNum方法,因为实例化的对象没有getNum方法,他的继承链上也没有getNum方法*/
/*构造函数__construct如果子类有就调用子类自己的,没有就在继承链中调用父级的,子类构造函数调用后就不会再调用父类的构造函数 */
/*使用  类名::__construct()  通过类名来调用父类的构造函数   注意:使用父类的类名具有高耦合性(即父类改名,子类不修改调用名,调用就会失效,使用parent关键字可以降低耦合性)*/
new SonClass();/*测试调用父类构造函数 */
new SonClass($name , $age);/*还可以给父类传递参数*/

/*$this详解: $this表示当前对象的引用,也就是$this中保存的是当前调用方法的对象的内存地址(指针) */
/*多重继承
PHP不允许多重继承,PHP可以使用继承链 C继承B,B继承A,C就可以使用A中的属性和方法
*/

/*多态:多重形态    1.方法重写(子类中的方法名和父类中的方法名,参数个数完全相同,同时子类修饰词不能比父类更严格),实例化子类后,调用父类中重名的方法,将会被子类的方法覆盖
                  2.方法重载 (在同一个类中,多个同名的方法,通过参数的不同来区分调用不同的方法,称为方法重载)  注意:PHP不支持方法重载
私有属性private可以继承但是不能重写,如果子类中有和父类重名的属性,父类中的方法只能调用父类中的同名属性,子类中的方法只能调用子类中的同名属性,
                                如果父类同名方法是pritate,子类是public,那么继承调用父类的方法也只能访问父类的同名属性
                                其余访问修饰符,使用重写(即子类有同名属性,子类在调用父类方法时,使用的是子类的同名属性)

*/
/*方法修饰符:  static静态修饰符 静态属性和静态方法,静态成员加载类时分配空间,程序执行完毕后销毁,静态成员在内存中就一份,实例化多个对象,调用同一个静态成员   调用方法   类名::属性    类名::方法名()
                              静态方法和属性在不实例化的情况下也可以使用,(无论实例化多少个相同对象所调用的静态变量都是同一个)
              final最终修饰符 final修饰的方法不能被重写,final修饰的类不能被继承,如果一个类不允许继承,方法确定不能重写,可以使用final修饰符提高执行效率(程序不会再查找相关的继承)
              abstract抽象修饰符 修饰的方法是抽象方法,修饰的类是抽象类,只有方法的声明没有方法的实现(public abstract function abstractFunction();  只有声明没有函数体)
                                一个类中只要有一个方法是抽象方法,这个类必须是抽象类,抽象类不能被实例化,子类继承了抽象类就必须重新实现父类的所有抽象方法,否则子类不允许实例化
                                类中没有抽象方法也可以声明成抽象类,用于阻止类的实例化
 */
final class FinalClass{
  /*final修饰的类不能被继承 */
}

Class TestClass{
  public static $name='紫阳';/*静态成员也可以被继承 */
  private static $onlineCount=0;
  final public function showFinal()
  {
    /*
    final修饰的方法不能被重写
    final修饰的类不能被继承
    如果一个类确定不能被继承,一个方法确定不允许重写,可以使用final修饰符提高执行效率(程序不会继续查找相关的继承)
    */
  }
  static public function show ()
  {
    echo '这是一个静态方法';
    echo '当前在线人数是: '.self::$onlineCount,"<br\>";
  }
  public function __construct()
  {
    self::$onlineCount++;/*self表示所在类的类名,使用self降低耦合性,self只能调用所在类常量(const)和静态变量(static),不能被继承 */
    echo static::$name;/* static还可以表示当前对象所属的类.子类使用static调用父类方法,就可以使用子类的同名属性了,称为static延时绑定, self表示所在类的类名,不能继承*/
    /*self 和static对比
    self      表示当前self所在类的类名
    static    表示当前调用对象的类名

    */
  }
  public function __destruct()
  {
    self::$onlineCount--;  
  }
}
echo TestClass::$name,"<br/>";
TestClass::show();/*继承的静态成员也可以在不实例化的情况下,通过子类调用,静态延时绑定,(如果父类中有静态成员,也可以通过子类调用) */
$test1=new TestClass();
$test2=new TestClass();
$test1->show();/*当前在线人数是: 2 */
unset($test1);
$test2->show();/*当前在线人数是: 1 */

/*abstract抽象类 */
abstract class Person {
  public abstract function setInfo();    //抽象方法
  public function getInfo() {
      echo '获取信息<br>';
  }
}
//继承
class Student extends Person {
  //重写实现父类的抽象方法
  public function setInfo() {
      echo '重新实现父类的抽象方法<br>';
  }
}
//测试
$stu=new Student;
$stu->setInfo();        //重新实现父类的抽象方法
$stu->getInfo();        //获取信息
/*抽象类的作用:  1.定义命名规范,子类必须重写抽象父类的方法才能实例化,保证了命名的标准化
                2.阻止实例化,如果一个类中所有方法都是static静态方法,就没有必要实例化,可以通过abstract来阻止实例化                
*/

/*类常量 const */
class ConstClass{
  public const ADD='地址不详';/*PHP7.1以后const才支持访问修饰符 */
  /*
  define常量和const常量的区别:const常量可以做类成员,define常量不可以做类成员,const不能在条件语法中定义,define可以在条件语法中定义,例如if else中,等
  常量const和静态属性static:  相同:都在加载类的时候分配空间    不同:常量值不能修改,静态属性值可以修改 
  */
}
echo ConstClass::ADD;

/*接口 interface */
/*
如果一个类中所有方法都是抽象方法,这个抽象类就可以声明成接口,接口中只能有抽象方法和常量,接口中的抽象方法必须是public的,不声明访问修饰符,默认为public,因为只能有抽象方法,所以无需abstract关键字修饰
通过 implements关键字来实现(继承)接口,不能使用 abstract和final修饰接口中的抽象方法
*/
//声明接口
interface InterfaceName{
  const ADD='中国';
  public function functionName1();
  function functionName2();
}
interface InterfaceName2{
  function functionName3();
}
//接口实现,类不允许多重继承,但是接口允许多重实现,接口多重实现中,如果有同名方法只需要实现一次即可
class TestInterface implements InterfaceName,InterfaceName2{
  public function functionName1(){

  }
  public function functionName2(){

  }
  public function functionName3()
  {
    
  }
}
//访问接口常量
echo InterfaceName::ADD;
//类可以继承的同时实现接口
class TestClass2 extends FatherClass implements InterfaceName,InterfaceName2{
  public function functionName1()
  {

  }
  public function functionName2()
  {

  }
  public function functionName3()
  {
    
  }
}

/*匿名类,如果类只被实例化一次,可以使用匿名类,好处是执行过程中,类不占用空间 PHP7.0以后支持  通过new class来实例化一个匿名类,用来替代一些'用后既焚'的类 */
//使用匿名类调用接口
//1.声明接口Logger
interface Logger {
  public function log (string $smg);
}
//2.声明Application类
class Application{
  private $logger;//存放接口的私有属性 ,$logger中存储着Logger实例化对象,对象调用的是地址,地址是唯一的(单例模式)
  //获取接口方法
  public function getLogger():Logger
  {
    return $this->logger;
  }
  //设置接口方法
  public function setLogger (Logger $logger)
  {
    $this->logger = $logger;
  }
}
//3.实例化类
$app = new Application;
//4.使用new class在对象中创建匿名类
$app->setLogger(new class implements Logger{public function log(string $msg){print($msg);}});
$app->getLogger()->log("我的第一条日志");//输出结果 我的第一条日志(这里调用的是实例化后的Application对象中,$logger中保存的Logger对象的log方法)

/*方法绑定 */
/*
类中方法过多,每次加载类都会将其中的方法全部加载,占用资源,使用方法绑定
闭包(PHP中的闭包为匿名函数)->call(对象名),将闭包添加到实例化的对象中去,并调用
闭包的定义:闭包就是能够读取其他函数内部变量的函数,JS中函数内部的变量只有函数的子函数才能读取,所以闭包可以理解为"定义在函数内部的函数",
闭包是将函数内部和外部链接起来的桥梁
 */
$lang='en';
//类
class Student1{
}
//匿名函数
if($lang=='ch'){
    $fun=function(){
        echo '我是一名学生';
    };
}else{
    $fun=function(){
        echo 'i am a studnet';
    };
}
//绑定
$stu=new Student1;
$fun->call($stu);    //i am a student   相当于把匿名函数$fun添加到实例化对象$stu中

/*异常处理 */
/*
关键字:  try:检测代码块
        catch:捕获异常
        throw:抛出异常
        finally:无论有无异常都会执行,可以省略
        Exception:异常类
*/
/*语法结构:*/
        try{
          //检测代码
          if(false)
          {
            throw new Exception('这是一个错误' ,1001);//抛出异常
          }
        }catch(Exception $ex){
          //捕获异常
          echo '错误信息: '.$ex->getMessage();
          echo '错误码: '.$ex->getCode();
          echo '文件地址: '.$ex->getFile();
          echo '错误行号: '.$ex->getLine();
        }
        finally{
          //无论是有有异常,都要执行可省略
        };
  
/*自定义异常  所有异常的父类是Exception ,Exception中的方法不允许重写*/
//自定义空异常类
class MyNullException extends Exception {
}
//自定义类型异常
class MyTypeException extends Exception {
}
//自定义范围异常
class MyRangeException extends Exception {
}
//逻辑代码
if(isset($_POST['button'])) {
    try{
        $name=$_POST['name'];
        $age=$_POST['age'];
        if($name=='')
            throw new MyNullException('姓名不能为空');
        if($age=='')
            throw new MyNullException('年龄不能为空');
        if(!is_numeric($age))
            throw new MyTypeException('年龄不是数字');
        if($age<10 || $age>30)
            throw new MyRangeException('年龄必须在10-30之间');
        echo '姓名：'.$name,'<br>';
        echo '年龄：'.$age;
    }catch(MyNullException $ex){
        echo $ex->getMessage(),'<br>';
        echo '错误记录在日志中';
    }catch(MyTypeException $ex){
        echo $ex->getMessage(),'<br>';
        echo '发送电子邮件';
    }catch(MyRangeException $ex){
        echo $ex->getMessage(),'<br>';
        echo '给管理员打电话';
    }

}

/*
自动加载类 
项目开发中一个文件只能写一个类,执行过程中加载类非常麻烦,所以需要一个机制实现PHP需要类的自动加载
类文件规则:1.一个文件中只能放一个类(必须)
          2.文件名和类名同名(必须)
          3.类文件以.class.php结尾(可选)

缺少类时会自动调用 __autoload()函数(PHP7.2后不支持了),并将缺少的类名作为参数传递给 __autoload(), 当对象实例化new 时,就会通过 __autoload()函数开始查找文件,并根据找到的文件生成对象  
注册加载类:通过spl_autoload_register()注册 __autoload()函数  PHP5.1以后开始支持 spl_autoload_register()函数
*/
//方法一：
//加载类函数
function loadClass($class_name) {//spl_autoload_register()可以注册多个自动加载函数
    require "./{$class_name}.class.php";
}
//注册加载类函数
spl_autoload_register('loadClass');

//方法二：
spl_autoload_register(function($class_name){
  require "./{$class_name}.class.php";
});

/*clone和 __clone()    实例化对象有两种方法  new 和 clone    当使用 clone 克隆对象时,会自动调用对象中的 __clone()方法 */

/*设计模式*/
/*
单列模式:一个类只能有一个对象.   场景:多次请求数据库只需要一个链接对象.     实现方法:三私(private)一公(public)
1.私有的静态属性用来保存对象的单列(保证只存在一个对象,静态对象在内存中只存在一个)
2.私有的构造方法用来阻止在类的外部实例化(禁止通过new创建对象)
3.私有的__clone阻止在类外部clone对象(禁止通过clone复制对象) 
4.公有的静态方法用来获取对象的单列(通过  类名::静态方法名 创建单列模式对象)
*/
class DB {
  //静态的属性用来保存对象的单例
  private static $instance;
  //私有的构造方法阻止在类的外部实例化
  private function __construct() {

  }
  //私有的__clone()阻止在类的外部clone对象
  private function __clone() {

  }
  public static function getInstance() {
      //保存的值不属于DB类的类型就实例化
      if(!self::$instance instanceof self/*判断$instance中存储的实例(instance实例)是否是自身的类型*/)
          self::$instance=new self();
      return self::$instance;
  }
}
//测试
$db1=DB::getInstance();
$db2=DB::getInstance();
var_dump($db1,$db2);    //object(DB)#1 (0) { } object(DB)#1 (0) { } 

/*
工厂模式:传递不同参数获取不同对象
*/
class ProductsA {
}
class ProductsB {    
}
//工厂模式
class ProductsFactory {
    public function create($num) {
        switch($num) {
            case 1:
                return new ProductsA;
            case 2:
                return new ProductsB;
            default:
                return null;
        }
    }
}
//测试
$factory=new ProductsFactory();
$obj1=$factory->create(1);
$obj2=$factory->create(2);
var_dump($obj1,$obj2); //object(ProductsA)#2 (0) { } object(ProductsB)#3 (0) { } 

/*
策略模式:传递不同参数,调用不同的策略(方法)    方法绑定
*/
class Walk {
  public function way() {
      echo '走着去<br>';
  }
}
class Bus {
  public function way() {
      echo '坐车去<br>';
  }
}
//策略模式
class Student2 {
  public function play($obj) {
      $obj->way();
  }
}
//测试
$stu=new Student2;
$stu->play(new Walk());    //走着去
$stu->play(new Bus());    //坐车去

/*序列化与反序列化*/
/*
PHP中数组和对象无法保存,想保存数组和对象数据就需要将其转换成一个序列
序列化(serialize):将数组或对象转换成一个序列
反序列化(unserialize):将序列化的字符串转换成数组或对象
*/
//数组的序列化
$stu=['tom','berry','ketty'];
$str=serialize($stu);        //序列化
file_put_contents('./stu.txt',$str);
//数组的反序列化
$str=file_get_contents('./stu.txt');
$stu=unserialize($str);        //反序列化
print_r($stu);    //Array ( [0] => tom [1] => berry [2] => ketty ) 

//对象的序列化和反序列化:对象的序列化和反序列化需要有类的参与,如果没有类在反序列化时参与,就无法确定类.反序列化后的数据会提示类未知
class Student3 {
  public $name;
  protected $sex;
  private $add;
  public function __construct($name,$sex,$add) {
      $this->name=$name;
      $this->sex=$sex;
      $this->add=$add;
  }
}
//测试
$stu=new Student3('tom','男','北京');
//序列化
$str=serialize($stu);
file_put_contents('./stu.txt',$str);
//反序列化，类的反序列化必须要有类的参与(反编译的时候,反编译对象的类必须包含在当前执行文件中,不然反编译的对象就不知道自己属于哪个类)
$str=file_get_contents('./stu.txt');
$stu=unserialize($str);
echo '<pre>';
var_dump($stu);

/*魔术方法:黑马PHP笔记*/
/*
__construct()实例化new时执行的方法
__destruct()销毁对象时执行的方法
__clone()克隆对象时执行的方法
__tostring()将对象当成字符串使用时自动调用的方法,简单理解输出属性中字符串时调用
__invoke()将对象当成函数使用的时候自动调用的方法,简单理解,运行方法时调用
__set($k,$v)给无法访问的属性赋值时自动调用的方法(给类中的私有private属性赋值时就会执行) 这里$k代表属性 $v代表形参
__get($k)获取无法访问的属性值时自动调用的方法(调用类中私有private属性时就会执行)
__isset($k)判断无法访问的属性是否存在时自动调用  isset($stu->name);
__unset($k)销毁无法访问的属性时自动调用    unset($stu);
__call()调用无法访问的方法时自动执行
__callstatic()调用无法访问的静态方法时自动执行
__sleep()当序列化的时候自动调用
__wakeup()当反序列化时自动调用
*/
class Student4 {
  //把对象当成字符串使用的时候自动执行
  public function __tostring() {
      return '这是一个对象，不是字符串<br>';
  }
  //把对象当成函数使用的时候自动执行
  public function __invoke() {
      echo '这是一个对象，不是函数<br>';
  }
}
$stu=new Student4;
echo $stu;    //当成字符串使用
$stu();        //当成函数使用

/*遍历对象 foreach 外部的foreach只能访问属性和属性值 */
class Student5 {
  public $name='tom';
  protected $sex='男';
  private $age=22;

  public function show() {/*对象中的foreach可以访问所有属性 输出:name-tom  sex-男 age-22 */
      foreach($this as $k=>$v) {
          echo "{$k}-{$v}<br>";
      }
  }
}
//测试
$stu=new Student5;
foreach($stu as $k=>$v) {/*对象外部的foreach只能访问public的属性  输出:name-tom*/
  echo "{$k}-{$v}<br>";
}
echo '<hr>';
$stu->show();

/*命名空间*/
/*
在大型项目中,会出现同名的类,函数,常量等,为了区分这些元素,将这些元素存放到不同命名空间中
1.命名空间就是包,用于存放项目中的类,函数,常量等
2.通过namespace关键字声明命名空间, namespace \空间名       \第一个反斜杠表示公共命名空间(可省略)
*/
/*
声明命名空间
  namespace 空间名;
  namespace 一级\二级\空间名;    多级命名空间
调用
  \空间名\函数名();
  \一级\二级\空间名\函数名(); 
  \一级\二级\空间名\new 类名(); 

  公共空间   +   命名空间   +   空间元素
      \          空间名       函数或对象
*/
/*
使用use的前提,文件必须require引入,use没有读取文件功能,use主要功能是为了区分不同空间下的同名类,方法或常量
引入命名空间  use 空间路径;
引入命名空间拼接规则   公共空间+引入空间+(去除公共部分,公共部分只能有一级)\空间元素 
引入类:use 空间地址;
引入函数:use function 空间地址  //php7.0以后支持
引入常量:use const 空间地址 //php7.0以后支持 
如果引入的类和函数与当前空间同名,使用as为引入的元素起别名
use 空间地址 as 别名;
如果一个页面没有命名空间,name这个页面元素在公共空间\下
*/
/*
命名空间只能存放类,函数,const常量,第一个namespace前除了<?php 不允许再有任何字符,包含文件不影响当前的命名空间 
*/

/*
trait 原型 : 为了减少单继承语言限制,可以在不同层次结构内独立的类中复用类的方法集,声明为trait原型的方法可以通过 use 原型名 在不同的类中调用原型方法
*/
trait A{
  public function getInfo2()
  {
    echo '原型方法1';
  }
}
trait B{
  public function getInfo2()
  {
    echo '原型方法2';
  }
}
class C{
  public function getInfo2()
  {
    echo '原型方法3';
  }
}
class TraitTest{
  use A,B; //使用use关键字引入原型,可以引入多个原型
}
class TraitTest2 extends C
{
 use B; //虽然继承了C中的方法,但是在引入A,B原型时,原型中的同名方法将继承的同名方法覆盖了
}
class TraitTest3
{
  use A,B{
  /*解决同名冲突*/
  //方法替换 insteadof   改名 as
   A::getInfo2 insteadof B;//用原型A的同名元素覆盖原型B的同名元素
   B::getInfo2 as show;//给元素B的同名元素起别名
   //引入时还可以更改引入元素的修饰符
   getInfo2 as public getInfo3;//更改元素的访问修饰符并改名(不改名可省略)
   }
}
/*使用原型方法*/
$stu = new TraitTest3;
$stu->getInfo2();
/*多个trait可以组成一个trait,trait可以定义abstract抽象成员,可以定义static静态成员,可以定义属性 */

/*
迭代器:手动遍历数组
1.复位数组指针rest()  2.检查指针合法性,获取当前指针,如果不全等!==null就是合法的  3.获取当前值current()  4.获取当前键key()   5指针下移next()
*/
$stu=['tom','berry','ketty','rose'];
reset($stu);    //复位指针
while(key($stu)!==null){//键合法
    echo key($stu),'-',current($stu),'<br>';//获取键、值
    next($stu);        //指针下移
}
/*
0-tom
1-berry
2-ketty
3-rose
*/

/*
迭代器是PHP内置的接口(接口指全由抽象方法组成的类,通过implements实现接口)
*/
//定义类实现迭代器接口
//兼容性,rewind,valid,next需要指定方法返回值类型
class MyClass implements Iterator{
  //$list属性用来保存学生数组
  private $list=array();
  //添加学生
  public function addStu($name) {
      $this->list[]=$name;
  }
  //实现接口中的复位方法
  public function rewind():void/*:void返回值为无类型 */ {
      reset($this->list);
  }
  //验证当前指针是否合法
  public function valid():bool {
      return key($this->list)!==null;
  }
  //获取值
  public function current() {
      return current($this->list);
  }
  //获取键
  public function key() {
      return key($this->list);
  }
  //指针下移
  public function next():void {
      next($this->list);
  }
}

//创建班级
$class=new MyClass();
//添加学生
$class->addStu('tom');
$class->addStu('berry');
$class->addStu('ketty');
//遍历班级
foreach($class as $k=>$v){
  echo "{$k}-{$v}<br>";
}
/*
0-tom
1-berry
2-ketty
*/

/*
PDO(PHP Data Object)扩展为PHP提供了一个轻量级,一致性接口,无论访问什么数据库,都可以操作 需开启 php_pdo_数据库类型.dll
PDOStratement类表示数据库查询语句(select,show)后的相关结果集或预处理对象(预处理:编译一次,多次执行)
PDOException类表示PDO的异常
*/
/*
实例化PDO对象
语法: __construct($dsn,用户名,密码)
DSN:data source name,数据源名称,包含链接数据库的信息,格式为 $dsn='数据库类型:host=主机地址;port=端口号;dbname=数据库名称;charset=字符集';
数据库类型 MySQL数据库=>mysql;    Oracle数据库=>oci;    SQL Sever数据库=>sqlsrv; 等...
除了数据库类型以外(驱动器类型必须有冒号:),其他都可以省略
*/
//实例化PDO
$dsn='mysql:host=localhost;port=3306;dbname=data;charset=utf8';
$pdo=new PDO($dsn,'root','root');
var_dump($pdo); //object(PDO)#1 (0) { } 
//2执行数据操作语句
//方法:$pdo->exec($sql),执行数据增,删,改,语句,执行成功返回受影响的记录数,如果SQL语句错误返回false
//2.1 执行增加
if($pdo->exec("insert into news values (null,'bb','bbbbbb',unix_timestamp())"))
    echo '自动增长的编号是：'.$pdo->lastInsertId (),'<br>';
//2.2 执行修改
echo $pdo->exec("update news set title='静夜思' where id in (3,4)");
//2.3 执行删除
echo $pdo->exec('delete from news where id=5');
//2.4 完善
$sql="update news set title='静夜思1' where ids in (3,4)";
$rs=$pdo->exec($sql);
if($rs){
    echo 'SQL语句执行成功<br>';
    if(substr($sql, 0,6)=='insert')
        echo '自动增长的编号是：'.$pdo->lastInsertId (),'<br>';
    else
        echo '受到影响的记录数是：'.$rs,'<br>';
}elseif($rs===0){
    echo '数据没有变化<br>';
}elseif($rs===false){
    echo 'SQL语句执行失败<br>';
    echo '错误编号：'.$pdo->errorCode(),'<br>';
    //var_dump($pdo->errorInfo());
    echo '错误信息：'.$pdo->errorInfo()[2];
}
//1、执行数据查询语句
//方法:$pdo->query($sql),返回的是PDOStatement对象
$stmt=$pdo->query('select * from products');
var_dump($stmt);        //object(PDOStatement)
//2、获取数据
//2.1  获取二维数组
$rs=$stmt->fetchAll();  //默认返回关联和索引数组
//$rs=$stmt->fetchAll(PDO::FETCH_BOTH);     //返回关联和索引数组
//$rs=$stmt->fetchAll(PDO::FETCH_NUM);      //返回索引数组
//$rs=$stmt->fetchAll(PDO::FETCH_ASSOC);    //返回关联数组
//$rs=$stmt->fetchAll(PDO::FETCH_OBJ);        //返回对象数组
//2.2  获取一维数组,匹配完成后指针下移一条
//$rs=$stmt->fetch();     //关联和索引数组
//$rs=$stmt->fetch(PDO::FETCH_NUM);   //索引数组
//例题：通过while循环获取所有数据
/*while($row=$stmt->fetch(PDO::FETCH_ASSOC)){
    $rs[]=$row;
}
echo '<pre>';
var_dump($rs);
*/
//3.3  匹配列：匹配当前行的第n列，列的编号从0开始，匹配完毕后指针下移一条
//echo $stmt->fetchColumn();  //获取当前行的第0列
//echo $stmt->fetchColumn(1);  //获取当前行的第1列
//3.4  总行数，总列数
//echo '总行数：'.$stmt->rowCount(),'<br>';
//echo '总列数：'.$stmt->columnCount();
//3.5 遍历PDOStatement对象（PDOStatement对象是有迭代器的）
foreach($stmt as $row){
    echo $row['proname'],'-',$row['proprice'],'<br>';
}

/*
PDO操作事务
事务,要么一起执行,要么一起回滚
语法: start transaction 或 begin  开启事务
      commit 提交事务
      roolback 回滚事务
*/
if(!empty($_POST)){
  $dsn='mysql:dbname=data;charset=utf8';
  $pdo=new PDO($dsn,'root','root');
  $out=$_POST['card_out'];    //转出卡号
  $in=$_POST['card_in'];      //注入卡号
  $money=$_POST['money'];     //金额
  $pdo->beginTransaction();   //开启事务
  //转账
  $flag1=$pdo->exec("update bank set balance=balance-$money where cardid='$out'");
  $flag2=$pdo->exec("update bank set balance=balance+$money where cardid='$in'");
  //查看转出的账号是否大于0，大于0返回true，否则返回false
  $stmt=$pdo->query("select balance from bank where cardid='$out'"); 
  $flag3=$stmt->fetchColumn()>=0?1:0;

  if($flag1 && $flag2 && $flag3){
      $pdo->commit ();    //提交事务
      echo '转账成功';
  }
  else{
      $pdo->rollBack ();  //回滚事务
      echo '转账失败';
  }
}

/*
PDO预处理:编译一次多次执行,提高执行效率和安全性
预处理语法: prepare 预处理名字 from 'sql语句'
执行预处理: executr 预处理名字 [using 变量]
*/
//PDO预处理位置占位符(?)
$dsn='mysql:dbname=data;charset=utf8';
$pdo=new PDO($dsn,'root','root');
//创建预处理对象,问号?是位置占位符
$stmt=$pdo->prepare("insert into bank values (?,?)");   //?是占位符
//执行预处理
$cards=[
    ['1003',500],
    ['1004',100]
];
foreach($cards as $card){
    //绑定参数，并执行预处理,
    //方法一：bindParam将参数绑定到指定变量名,bindParam只能绑定变量
    /*
    $stmt->bindParam(1, $card[0]);  //占位符的位置从1开始
    $stmt->bindParam(2, $card[1]);
    $stmt->execute();               //执行预处理
     */
    //方法二：bindValue将值绑定到一个参数,binValue既可以绑定变量,也可以绑定值
    /*
    $stmt->bindValue(1, $card[0]);
    $stmt->bindValue(2, $card[1]);
    $stmt->execute();
     */
    //方法三：如果占位符的顺序和数组的顺序一致，可以直接传递数组
    $stmt->execute($card);  
}
//PDO预处理参数占位符(:参数名)
$dsn='mysql:dbname=data;charset=utf8';
$pdo=new PDO($dsn,'root','root');
//创建预处理对象
$stmt=$pdo->prepare("insert into bank values (:p1,:p2)");   //:p1,:p2是参数占位符
//执行预处理
$cards=[
    ['p1'=>'1003','p2'=>500],
    ['p1'=>'1004','p2'=>1000]
];
foreach($cards as $card){
    //方法一：参数占位符以冒号:开头
    /*
    $stmt->bindParam(':p1', $card['p1']);
    $stmt->bindParam(':p2', $card['p2']);
    $stmt->execute();
     */
    //方法二：但数组的下标和参数名一致的时候就可以直接传递关联数组
    $stmt->execute($card);
}

/*
PDO异常处理
PDOException是PDO的异常类
实例化PDO会自动抛出异常,其他操作不会抛出异常,需要设置PDO异常模式
PDO异常模式 PDO::ERRMODE_EXCEPTION抛出异常     PDO::ERRMODE_SILENT中断    PDO::ERRMODE_WARNING警告  更多参考PHP手册PDO::setAttribute 
*/
try{
  $dsn='mysql:dbname=data;charset=utf8';
  $pdo=new PDO($dsn,'root','root');
  //这是PDO错误模式属性，PDO自动抛出异常
  $pdo->setAttribute(PDO::ATTR_ERRMODE/*错误报告*/, PDO::ERRMODE_EXCEPTION/*抛出exception异常*/);
  $pdo->query('select * from newsssssss');  //自动抛出异常
} catch (PDOException $ex) {
  echo '错误信息：'.$ex->getMessage(),'<br>';
  echo '错误文件：'.$ex->getFile(),'<br>';
  echo '错误行号：'.$ex->getLine();
}

/*
MVC
Model(处理数据),View(输出内容),Controller(处理逻辑,链接模型和视图)
DIRECTORY_SEPARATOP 根据操作系统返回分目录隔符
getcwd()返回当前文件的绝对路径
*/
/*MVC部分参考黑马PHP 核心+MVC项目最终实例+黑马PHP笔记 */

/*
Cookie
header('key:value'); 用于发送原生请求头,并不能保存在客户机中
setcookie('key','value');将 key=value放到响应头中发送并存储在客户机中,客户机每次请求都会在请求头中将此cookie发送给服务器
获取cookie:  $_COOKIE['key'];
cookie会在浏览器关闭后销毁,cookie信息不能跨浏览器共享
永久性cookie:  $time=time()+3600;  setcookie('key','value',$time);  设置cookie有效时间为3600秒,为cookie设置过期时间就形成了永久性cookie
cookie默认在当前目录及子目录有效,一般要设置整站有效   setcookie('key','value',$time,'cookie应用范围');     setcookie('key','value',$time,'/'); /表示根目录
cookie支持子域名,例如二级域名 www.baidu.com && www.image.baidu.com && ...   setcookie('key','value',$time,'/','baidu.com');  cookie在baidu.com域名下有效
cookie安全传输  setcookie('key','value',0,'/','域名范围',true(true表示只能是https访问),true(默认为false,PHP和JS都能访问cookie,true表示JS不能访问cookie))
注意:cookie中只能保存数字和字符串
删除cookie三种方法  1. setcookie('key',false);   2.setcookie('key');   3.setcookie('key','value',time()-1);
cookie缺点,在浏览器中可以看到cookie的值,安全性低.只能存储数字和字符,可控性差.数据放在请求头中,增加请求时数据负载.存储在浏览器中,存储大小有限制,一般为4KB
*/

/*
session会话
session是基于cookie的服务端技术,会话可以保存除了资源以外的所有类型,重复开启会话会报错,可用@符屏蔽报错
session默认不自动开启
开启session会话:  session_start();   //session_start()没有会话就创建会话空间,存在会话空间就打开空间
获取会话编号 :    session_id();
操作会话:         $_SESSION['key']='value';
销毁会话:         session_destory();
会话配置:
session.save_path="F:\wamp\tmp\"        session保存的地址
session.auto_start = 1                session自动开启，默认不自动开启
session.save_handler = files            会话以文件的形式保存
session.gc_maxlifetime = 1440            会话的生命周期是1440秒
了解
session.name = PHPSESSID
session.cookie_lifetime = 0                会话编号的过期时间
session.cookie_path = /                    会话编号整站有效
session.cookie_domain =                    会话编号在当前域名下有效
垃圾回收:会话文件超过生命周期就是垃圾文件,PHP自动垃圾回收,默认垃圾回收概率为1/1000
session.gc_probability = 1
session.gc_divisor = 1000

session是基于cookie的,如果cookie禁用,session也将无法使用
解决方法:设置session编号不仅仅依赖于cookie传输,设置完成后php自动添加get和post传递session_id
session.use_only_cookie = 0   //session不仅仅依赖cookie
session.use_trans_sid = 1  //允许通过其他方式传输session_id
*/
/*session入库(将session存储在数据库中)*/

/*防SQL注入*/
echo addslashes("aa'bb'");     //aa\'bb\'     addslashes()给符号添加转义符\
echo str_replace("'",'',"aa'bb'");   //aabb   str_replace("要替换的字符","替换后的字符","替换源数据")
$ip = gethostbyname("www.baidu.com");  //获取IPV4 地址
ip2long($ip); //将IP转换为整型数字
long2ip($ip); //将整形数字转换为IP

/*
防止翻墙:防止通过输入URL进入后台页面
通过给用户一个session令牌,验证用户访问
*/

/*GD扩展用于处理图片,php_gd2.dll,开启后就可以使用image开头的PHP函数了*/
//创建画布imagecreate(x轴,y轴);
$canvasName=imagecreate(200,100);
//为图片分配第一个颜色(默认是背景色) imagecolorallocate($画布名,r,g,b);
imagecolorallocate($canvasName,255,0,0);
//直接显示图片,需要设置浏览器图片显示格式
header('content-type:image/jpeg');
//显示图片
imagejpeg($canvasName);

//保存图片,不需要设置header头
imagejpeg($canvasName,'./tu.jpg');
imagepng($canvasName,'./tu.png');
imagegif($canvasName,'./tu.gif');

/*填充颜色*/
$color = imagecolorallocate($canvasName,200,200,200);//指定默认背景色
//更改背景色
switch(rand(1,100)%3)
{
  case 0:
    {
      $color = imagecolorallocate($canvasName,255,0,0);
      break;
    }
  case 1:
    {
      $color = imagecolorallocate($canvasName,0,255,0);
      break;
    }
    default:
    {
      $color = imagecolorallocate($canvasName,0,0,255);
    }
}
//填充颜色imagefill($画布名,x轴坐标,y轴坐标,填充颜色);
imagefill($canvasName,0,0,$color);  
// 显示图片
header('content-type:image/png');
imagepng($canvasName);

/*
验证码
实现步骤:
1.生成随机字符
2.创建画布
3.将字符串写到画布上
imagestring(图片资源,内置字体,x轴起始点,y轴起始点,字符串,颜色编号)
文字居中: $x=(画布宽度-字符宽度*字符个数)/2        $y=(画布高度-字符高度)/2
*/
//代码实现第一步：创建随机字符串
//1.1  创建字符数组
$all_array=array_merge(range('a','z'),range('A','Z'),range(0,9));    //创建所有字符数组 range()根据指定范围创建返回一个数组
$div_array=['1','l','0','o','O','I'];    //去除容易混淆的字符
$array=array_diff($all_array,$div_array);    //剩余的字符数组  array_diff()计算数组的差集,返回差集结果
unset($all_array,$div_array);        //销毁不需要使用的数组
//1.2    随机获取4个字符
$index=array_rand($array,4);    //随机取4个元素的键，按先后顺序排列  array_rand()从数组中随机取出一个或多个随机键
shuffle($index);    //打乱字符顺序
//1.3    通过下标拼接字符串
$code='';
foreach($index as $i){
    $code.=$array[$i];
}
//第二步：创建画布
$img=imagecreate(150,30);
imagecolorallocate($img,255,0,0);            //第一次默认分配背景色
$color=imagecolorallocate($img,255,255,255);    //分配前景色
//第三步：将字符串写到画布上
$font=5;        //内置5号字体
$x=(imagesx($img)-imagefontwidth($font)*strlen($code))/2;//imagesx()获取图像x轴长度
$y=(imagesy($img)-imagefontheight($font))/2;
imagestring($img,$font,$x,$y,$code,$color);
//显示验证码
header('content-type:image/gif');
imagegif($img);

/*
打开图片创建验证码
1.生成随机字符串
2.打开图片
3.将字符串写在图片上
*/
//第一步：生成随机字符串
$codeSet='2345678abcdefhijkmnpqrstuvwxyzABCDEFGHJKLMNPQRTUVWXY';//已去除易混淆字符的字符串
$code='';
$max=strlen($codeSet);
for($i=1;$i<=4;$i++){
    $index=rand(0,$max-1);
    $code.=$codeSet[$index];
}
//第二步：打开图片
$path='./captcha/captcha_bg'.rand(1,5).'.jpg';//随机图片路径
$img=imagecreatefromjpeg($path);//通过图片创建画布
//第三步：将字符串写到图片上
$font=5;        //内置5号字体
$x=(imagesx($img)-imagefontwidth($font)*strlen($code))/2;
$y=(imagesy($img)-imagefontheight($font))/2;
//随机前景色
$color=imagecolorallocate($img,255,255,255);    //设置背景色
if(rand(1,100)%2)
    $color=imagecolorallocate($img,255,0,0);    //设置前景色    

imagestring($img,$font,$x,$y,$code,$color);
//显示验证码
header('content-type:image/gif');
imagegif($img);

/*CAPTCHA全自动区分计算机和人类的图灵测试 */

/*
中文验证码 参考黑马PHP笔记
1.中文验证码需要引入字体文件,PHP内置字体不支持中文
2.使用imagettftext(图片资源,字体大小,角度,x轴起始坐标,y轴起始坐标,颜色,字体文件地址,字符串);  来写入中文
3.windows字体保存在c:\windows\Fonts目录下
4.imagettfbbox()测定中文字符串的宽高,此函数返回8个值,4个角坐标, 由左下角0,1 右下角2,3 右上角 4,5 左上角 6,7 组成  字符串宽度= 4-6或2-0  字符串高度=1-7或3-5

中文需要使用多字节处理,需开启php_mbstring.dll
使用imagettfbbox测定中文字符串范围
使用imagettftext将中文写到画布上
*/
//第一步：生成随机字符串
$codeSet='们以我到他会作时要动国产的一是工就年阶义发成部民可出能方进在了不和有大这主中人上为来';
$max=mb_strlen($codeSet)-1;    //中文字符的最大索引号
$code='';
for($i=0; $i<4; $i++) {
    $start=rand(0,$max);
    $code.=mb_substr($codeSet,$start,1);
}
//第二步：创建画布
$img=imagecreate(150,40);//画布大小
imagecolorallocate($img,255,0,0);//画布背景色
//第三步：将字符串写到画布上
//3.1  指定字符串的参数
$color=imagecolorallocate($img,255,255,255);
$size=15;    //字号
$angle=0;    //角度
$fontfile='./ttf/simhei.ttf';    //字体路径
//3.2 测定字符串的范围
$info=imagettfbbox($size,$angle,$fontfile,$code);
$code_w=$info[4]-$info[6];    //字符串的宽度
$code_h=$info[1]-$info[7];    //字符串的高度

$x=(imagesx($img)-$code_w)/2;    //起始点的$x
$y=(imagesy($img)+$code_h)/2;    //起始点的$y
//3.3  将中文字符串写到画布上
imagettftext($img,$size,$angle,$x,$y,$color,$fontfile,$code);    //将文字写到画布上
//显示验证码
header('content-type:image/jpeg');
imagejpeg($img);

/*
水印
文字水印
1.图片上添加文字或图片
2.文字水印同中文验证码: a:打开图片 b:文字写到图片上 c:输出图片(另存)
3.图片水印: a:打开水印图片 b:打开目标图片(加水印的图片)  c:复制水印图片到目标图片上
*/
//图片水印
//第一步：打开源图
$src_img=imagecreatefromjpeg('./water.jpg');
//第二步：打开目标图
$dst_img=imagecreatefromjpeg('./face.jpg');
//第三步：将源图复制到目标图上
$dst_x=imagesx($dst_img)-imagesx($src_img);   //开始粘贴的x
$dst_y=imagesy($dst_img)-imagesy($src_img);      //开始粘贴的y
$src_w=imagesx($src_img);
$src_h=imagesy($src_img);
//imagecopy(目标图.水印图,水印粘贴位置x轴起点,水印粘贴位置y轴起点,水印图片x轴起点,水印图片y轴起点,水印图片x轴宽度,水印图片y轴高度)
imagecopy($dst_img,$src_img,$dst_x,$dst_y,0,0,$src_w,$src_h);
//显示水印图
header('content-type:image/jpeg');
imagejpeg($dst_img);

/*
缩略图
原理:将源图复制拷贝到目标画布上,并且缩放
1.创建画布(缩略图画布)
2.打开源图
3.拷贝源图到画布上
*/
//第一步：创建目标图
$dst_img=imagecreatetruecolor(200,200);
//第二步：打开源图
$src_img=imagecreatefromjpeg('./face.jpg');
//第三步：复制源图拷贝到目标图上，并缩放大小
$src_w=imagesx($src_img);
$src_h=imagesy($src_img);
//imagecopyresampled(画布,源图,画布x轴起点,画布y轴起点,源图x轴起点,源图y轴起点,目标宽度,目标高度,源图像宽度,源图像高度)
imagecopyresampled($dst_img,$src_img,0,0,0,0,200,200,$src_w,$src_h);
//第四步：保存缩略图
//header('content-type:image/jpeg');
imagejpeg($dst_img,'./face1.jpg');

/*
注意:imagecreate()和imagecreatetruecolor()的区别
imagecreate()：创建支持256种颜色的画布
imagecreatetruecolor()：创建真彩色画布，支持256*256*256种颜色
*/

/*验证码代码错误查找: 黑马PHP笔记:验证码改错  */

/*文件上传 黑马PHP笔记*/

/*登录模块 黑马PHP笔记*/

/*Smart插件就将指定限定符转换为PHP代码(<?php  ?>)的插件 */



/*结束*/
?>