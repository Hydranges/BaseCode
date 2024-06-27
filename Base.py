# 井号使用规则
'''
# 单独使用井号为注释
# -*-coding: utf-8 -*-      #指定python文件字符格式
#!/python解析器路径地址       #指定解文件使用的解析器(linux通用)
'''
# python 标识符(变量名)可以以字母或下划线开头,python3区分大小写
import math  # 数学模块
import random  # 随机模块
# import pickle pprint  # 文件读取,序列化,反序列化模块
import multiprocessing  # 多进程模块
import threading        # 多线程模块
import time
import os
import socket

print(random.randint(1, 5))

'''
python3标准库
  1.os模块  操作系统交互
  2.sys模块 提供了与python解析器和系统相关的功能
    sys.argv # 获取终端启动时发送的参数
  3.time模块  提供了时间处理的函数,获取当前时间,计时,等待等
  4.datetime模块  提供了时间获取,时间差计算,日期差计算等
  5.random模块  提供了随机数获取的函数
  6.math模块  提供了数学函数
  7.re模块  提供了正则表达式处理函数
  8.json模块  提供了JSON的编码和接码函数
  9.urllib模块  提供了访问网页和处理URl的功能
  10.shutil模块 针对日常文件和目录管理
  11.glob模块 文件通配符,搜索文件
  12.zlib,gzip,bz2,zipfile,tarfile模块  用于压缩文件
  13.multiprocessing  多进程
'''


'''
python模块
  python中将自定义的代码保存到文件中,为一些脚本本交互式的解释器实例使用,这个文件称之为模块
python中使用import 或 from 模块名 import 方法名 来导入指定的模块或方法
  模块导入import 会从导入模块的文件目录下开始搜索指定的模块文件名
  1.import 模块名,模块名2,...    # 导入整个模块,无论模块被导入多少次,只会导入一次
  2.from 模块名 import 方法名1,方法名2,方法名3  # 导入一个或多个模块中的方法
  3.from 模块名 import *  # 导入模块中的全部方法 使用此方法必须指定 __init__.py 中 __all__=['允许导入的模块名称']
  python包
  python包就是将有联系的模块组织在一起,放到同一个文件夹下,并创建一个__init__.py文件,那么这个文件夹就称之为包
  导入包: import 包名.模块名
  调用包方法: 包名.模块名.方法名() 这样调用比较麻烦
  导入包2: from 包名.模块名 import 包/属性/类/方法
  调用包方法2: 类名.方法名()
  导入包3: from 包名.模块名.最后一项只能是模块或包 import 类名/方法/属性
  调用包方法3: 方法名()
  限制包: __init__.py 文件中 指定 __all__=['允许导入的模块名']

  最推荐的导入形式 from 包名 import 模块名

  模块方法
  1.path # 模块名.path 会返回一个列表存储文件地址
  2.__name__  # 模块名.__name__ 如果文件在文件本身被调用会返回__main__关键字,模块被加载到其他文件调用会返回模块的文件名
  3.__path__  # 可以用来修改存放每一个为当前包服务的__init__.py文件的地址
  模块函数
  1.dir(模块名) # 此方法会以列表形式返回模块内定义的所有名称,如果不指定模块,会返回当前模块中所有定义的属性列表
  模块使用
  1.变量名 = 模块名.方法名  # 如果一个模块的方法会经常使用可以给他一个变量名,简化调用
'''

'''
VSCode中 Python代码文本注意点
1.# 注释后必须跟一个空格
2.代码最后一行不允许是注释
3.代码最后一行必须是空行,且不能有空格符,且只能有一行空格
4.代码与代码之间的空行不允许有空格符
5.类和类,类和函数,函数和函数之间需要留两个空行
6.类中的方法之间,只用留一个空行
'''

"""
python代码的注释方式:
1. # 使用井号开头的单行注释
2. ''' 使用三组单引号或双引号的多行注释 '''
"""
'''
python代码使用缩进表示代码块,无需使用大括号{}
缩进的空格数是可变的,但是同一个代码块的的语句必须包含相同的缩进空格数
'''

'''
字符型变量赋值
  str = 'value'
  str = "value"
  str = """value""" # 使用三个引号赋值时,不再是注释,而且赋值内容可以换行
拆包: # 以下方式在python中是合法的
  c1,c2 = c2,c1
  c1,c2 = (c2,c1)
'''

'''
Python代码通常是一条语句,如果代码过长可以使用 '\' 反斜杠实现语句换行,例如:
  total = item_one + item_two + \
          item_three
如果代码被()括号包裹,换行就就不需要 '\' 反斜杠,添加反斜杠会报一般错误,代码换行最后一个字符不可以是空格符
  print(1 + 2 + 3 +
        4 + 5 + 6)
'''

'''
python的数字有四种类型
int(整形)
bool(布尔,Python中的布尔值首字母必须大写True和False)
float(浮点数)
complex(复数)
'''

'''
python中输出为 print()
python2就支持的格式化输出
print('%.2f 输出 %06d' % (对应第一个% , 对应第二个%))
  1.  %s(字符串占位符)
  2.  %d(整数占位符,%06d表示至少显示6位,不足位数以0补位,0可以换成其他字符)
  3.  %f(浮点数占位符,%.2f 表示浮点数只保存2位小数,其余的小数将被直接舍弃)
  4.  %c(字符 或 ASCII码)
  5.  %u(无符号十进制整数)
  6.  %o(八进制整数)
  7.  %x(十六进制整数 , 以小写0x开头)
  8.  %X(十六进制整数 , 以大写0X开头)
  9.  %e(科学记数法显示 , 使用小写e 1.e+3 == 1000 == 1 * 10^3)
  9.  %E(科学记数法显示 , 使用大写E 1.E+3 == 1000)
  10. %g(包括%f和%e)
  11. %G(包括%f和%E)
python3新支持的格式化输出(str.format())
  print('{}输出指定变量{}'.format(对应第一组{},对应第二组{}))
  print('{1(对应format括号中第二个变量):数据格式}输出指定变量{0(对应format括号中第一个变量):数据格式}'.format(对应第一组{},对应第二组{}))
  print('{name}通过关键字输出指定变量{age}'.format(name='name',age=18))
  print('{!a(使用ASCII)}通过关键字输出指定变量{!s(使用str()转换数据)}{!r(使用repr()转换数据)}'.format(name='name',age=18))
  print('{dict['ele1']}输出字典元素{dict['ele2']}'.format(dict))
  print('{ele1}输出字典元素2{ele2}'.format(**dict))
python3.6新支持的格式化输出(f-string)使用次方法不用再判断变量类型
  print(f'{变量1}输出指定变量{变量2}')
python3.8后可以使用'='等号来拼接运算表达式和结果
  x = 1
  print(f'{x+1=}') # 输出结果为x+1=2
python字符串输出
  print() # 默认会输出一个换行符
  print(变量 , end=" ") # end=" "表示将默认输出的\n换行符替换为" "空格符
  字符串截取(切片)语法: 变量名[开始下标,结束下标(不包括),步长]
            正索引  0     1     2     3     4     5     6     7     8
            负索引  -9    -8    -7    -6    -5    -4    -3    -2    -1
            值      壹    贰    叁    肆    伍    陆    柒    捌    玖
  1.print(str)        # 输出字符串
  2.print(str[0:-1])  # 输出第一个到倒数第二个字符串
  3.print(str[0])     # 输出字符串第一个字符
  4.print(str[2:5])   # 输出字符串第三到第五个字符
  5.print(str[2:])    # 输出字符串第三个到最后一个字符
  6.print(str[1:5:2]) # 输出第二个到第四个字符,并且每隔一个字符输出一个
  7.print(str * 2)    # 输出两遍字符串
  8.print(str + '拼接字符串') # 拼接字符串输出
  9.print('\n')       # 输出空行
  10.print(r'\n')     # 输出\n  这里r指raw ,即raw string , 会自动将反斜杠转义 使用大写R 也是相同效果
  python转义字符
  1. \\  # 单反斜杠在代码行尾时表示续行符
  2. \\ # 反斜杠
  3. \' # 单引号
  4. \" # 双引号
  5. \a # 提示音
  6. \b # 退格(Backspace)
  7. \000 # 空字符
  8. \n # 换行符
  9. \v # 纵向制表符(后续字符在当前位置的下一行)
  10. \t  # 横向制表符(一般插入4个空格)
  11. \r  # 回车符(\r表示将光标移至当前行首)
  12. \f  # 换页符
  13. \012  # 八进制数
  14. \x00  # 十六进制数
  python字符串内建函数
  1.capitalize()  # 将字符串第一个字符转换为大写,其他字符会转换为小写
  2.center(width,fillchar)  # 返回一个指定宽度然后居中的字符串,宽度不足的部分使用fillchar的字符填充
  3.count(str,begin=0,end=len(string))  # 返回str在string中出现的次数,如果beging或end指定规则,则返回在指定范围内sre出现的次数
  4.bytes.decode(encoding='utf-8',errors='strict')  # Python3中没有decode方法,可以使用bytes对象的decode()方法解码对象.这个对象由str.encode()来编码返回
  5.encode(encoding='UTF-8',errors='strict')  # 以encoding指定的编码格式编码字符串
  6.endswith(suffix,befin=0,end=len(string))  # 检查字符串是否以suffix结束,begin或end设置范围,则查看范围内是否以suffix结束,返回True或False
  7.expandtabs(tabsize=8) # 把字符串中的tab符号转换为空格符,tab默认空格数是8
  8.find(str,begin=0,end=len(string)) # 检查str是否包含在字符串中,begin和end设定范围,存在返回索引值,不存在返回-1
  9.index(str,begin=0,end=len(string))  # 同find() 不存在时返回错误
  10.isalnum()  # 如果字符串至少有一个字符并且所有字符都是字母或数字则返回True否则返回False
  11.isalpha()  # 如果字符串至少有一个字符并且所有字符都是字母和中文则返回True否则返回False
  12.isdigit()  # 如归字符串只包含数字则返回True否则False
  13.islower()  # 如果字符串都是小写字母返回True
  14.isnumeric()  # 只包含数字返回True
  15.isspace()  # 只包含空格符返回True
  16.istitle()  # 如果字符串是标题化的返回True 使用 str.title()格式化字符串后,所有非字母后的第一个字母都会被大写
  17.isupper()  # 如果区分大小写的字符都是大写返回True
  18.join(seq)  # 将seq中的所有元素以指定的字符链接成一个新的字符串   '-'.join(array)   python中链接字符在前
  19.len(string)  # 返回字符串长度
  20.ljust(width[,fillchar])  # 返回一个原字符串左对齐,并使用fillchar填充至width指定长度
  21.lower()  # 将所有区分大小写字符转换为小写
  22.lstrip() # 截取字符串左侧空格或指定字符
  23.maketrans(x[,y,z])  # 创建字符映射转换表,将x指定的字符转换为y,z设定要删除的字符 python3.4已经取消此功能,替代的内建函数为 bytearray.maketrans(),bytes.maketrans(),str.maketrans()
  24.max(str) # 返回str中最大的字母
  25.min(str) # 返回str中最小的字母
  26.replace(old , new [,max])  # 将old字符替换为new字符,max设定最大替换次数
  27.rfind(str,begin=0,end=len(str))  # 同find() 但是从右向左搜索
  28.rindex(str,begin=0,end=len(str)) # 同index()
  29.rjust(width[,fillchar])  # 同ljust,但右对齐
  30.rstrip() # 删除字符串右侧空格或指定字符
  31.split(str,num=string.count(str)) # 使用指定的str分割字符串,返回数组,num默认-1,即分割所有
  32.splitlines([keepends]) # 按照行('\r','\r\n','\n')分割,返回包含各行的数组,keepends为False就不保留换行符,True则保留换行符
  33.startswith(str,begin=0,end=len(string)) # 检查字符串是否以指定str开头是返回True begin,end设置范围
  34.strip([chars]) # 在字符串上执行lstrip()和rstrip() 同js中trim()
  35.swapcase() # 字符串中大写字母转换为小写,小写字母转换为大写
  36.title()  # 标题化字符串,所有符号后第一个字母大写,其余字母均小写
  37.translate(table.deletechars='')  # 根据table给出的表,转换string字符,要过滤的文本放在deletechars参数中
  38.upper()  # 转换所有字母为大写
  39.zfill(width) # 返回长度为width的字符串,原字符串右对齐,左侧填充0
  40.isdecimal()  # 检查字符串是否只包含十进制字符,是返回True否则False

'''
str = 'myPython'
print(str[0:-1:2])

for x in range(1, 11):
    print('{1:3d} {0:3d} {2:4d}'.format(x, x*x, x*x*x))

'''
python中输入为 input('输入提示词')
'''

'''
python可以在一行编写多条代码,代码间使用 ';' 分号分隔,Flake8会报一般错误
print(1+1); print(2+1)
'''

'''
python中变量不需要声明,但是使用前必须先赋值
  可以多变量赋值      :a=b=c=1
  同时对多个变量赋值  :a,b,c=1,2,'varable'

python中数据类型:
  不可变(内存地址一旦创建则不会改变):Number(数字),String(字符串),Tuple(元祖)
  python字符串虽然可以通过str[1]来调用单个字符,但是因为是不可变数据类型 str[1]=x 的赋值方式会报错
  可变(内存地址中的数据可更改):list(列表,数组),dictionary(字典),set(集合)
'''

'''
判断数据类型:
  type(var) 不会认为子类和父类是同一种类型
  isinstance(son,father)会认为子类和父类是同一种类型

注:python3中,布尔bool类型是int类型的子类,True和False可以直接进行数字运算,True==1,False==0
'''

'''
变量在赋值时被创建
使用 del 变量名,变量名,变量名   删除一个或多个已创建的变量
'''

'''
python中数学运算
除法使用 / 单除号返回浮点数
除法使用 // 双除号返回整数
'''
print('数学计算8/3使用"/"单除号返回浮点数:{}'.format(8/3))
print('数学计算8/3使用"//"双除号返回整数:{}'.format(8//3))

'''
python中的列表(数组)list
  1.使用[]方括号存储数元素
  2.列表截取  变量名[头下标:结束下标(不包含):步长(步长如果为负,表示倒序截取)]
  3.列表拼接可以使用 '+' 加号  list1 + list2
  列表常用方法
  1.append()  # 在数组尾部添加指定元素
  2.del # 删除指定列表元素 del list[1]
  3.+ # 使用+加号可以拼接两个列表
  4.* # 使用*乘号可以重复列表
  5.in  # 可以判断字符是否在列表中
  6.for x in [1,2,3]:print(x) # 迭代器,遍历列表元素
  嵌套列表===多维数组
  比较列表 import operator
          operator.eq(a,b)  # 如果列表内容相同返回True否则False
  列表函数(函数的结构为 函数名() )&方法(方法的结构为 数据.方法名(方法参数))
  1.len(list) # 返回列表中元素个数
  2.max(list) # 返回元素最大值
  3.min(list) # 返回元素最小值
  4.list(seq) # 将元祖转换为列表
  列表方法
  1.append()  # 列表尾部添加元素
  2.count(list) # 返回列表元素个数
  3.extend(seq) # 在列表尾部追加序列中的多个值,字符串会被拆分成单个元素追加
  4.index(obj)  # 在列表中查找第一个匹配的对象的索引位置
  5.insert(index,obj) # 在列表指定位置插入元素
  6.pop([index=-1]) # 移除列表中的元素,默认移除最后一个元素
  7.remove(obj) # 移除列表中第一个匹配元素
  8.reverse() # 反向排列列表中的元素,遍历中使用可以反向遍历列表
  9.sort(key=None,reverse=False)  # 对源列表进行排序
  10.clear()  # 清空列表
  11.copy() # 复制列表
  12.enumerate()  # 使用enumerate方法遍历列表可以同时获得元素下标和元素值
  13.zip(list1,list2) # 使用zip()可以同时遍历多个列表  for x,y in zip(listx,listy)
  14.map(function, list)  数组中的每一个数据经过function处理后,返回一个新的数组
  列表推导式
    格式1:  [表达式 for 变量 in 列表]
    格式2:  [表达式 for 变量 in 列表 if 条件]
    代码运行逻辑 列表中的元素 -> for循环赋值给变量 -> 变量进行if判断 -> True结果赋值给表达式进行处理 -> 存入表达式 -> 表达式处理完毕后,将数据作为元素存入接收变量
    格式3: [x*y for x in arrx for y in arry]  # 这里的两个for不是并列关系,而是嵌套关系,所以返回的列表为 [x[0]*y[0] , x[0]*y[1] , x[1]*y[0] , x[1]*y[1]]
'''

'''
python中的元祖tuple
  1.使用()括号存储元素,元祖实际是由多个逗号分隔的值组成 tuple = 'str' , 114514 , 'name' 格式也是可以声明元祖的(不推荐)
  2.使用方式同列表
  3.但是元祖中已经声明的数据不可变 tuple[1] = 'x' 报错
  4.元祖中只有一个元素,元素后必须有','逗号,不然会视为字符或数字  tuple = (20,)
  元祖不可以修改,使用del可以删除元祖,元祖可以通过运算符生成新的元祖
  元祖内置函数
  1.len() # 返回元祖元素个数
  2.max(tuple)  # 返回元祖中元素最大值
  3.min(tuple)  # 返回元祖中元素最小值
  4.tuple(list) # 将可迭代数据(列表等)转换为元祖
  元祖表达式
    格式1:  (表达式 for 变量 in 序列)
    格式2:  (表达式 for 变量 in 序列 if 判断条件)
    元祖表达式运行方式同列表表达式,元祖表达式使用()括号包裹
  元祖解包:
    name1,name2 = 函数名()  # 函数以元祖形式返回数据,可以直接使用元祖元素的个数直接接收赋值变量
'''

'''
python中的集合set
  1.集合使用{}大括号存储元素
  2.创建空集合必须使用 set = set()方法,使用 dic={ }创建的是一个空字典
  3.集合会自动去重,重复的元素会被隐藏
  4.集合可以进行 '-'差集(a-b指a中有但b没有的,)  '|'并集  '&'交集  '^'不同时存在的元素
  集合方法
  1.add() # 为集合添加元素,元素已存在,则不做任何操作
  2.clear() # 清除集合所有元素
  3.copy()  # 复制集合
  4.difference()  # 返回多个集合的差集  set.difference(set2) 同 '-'
  5.difference_update() # 移除原始集合中存在的元素
  6.discard(element) # 删除集合中指定的元素
  7.intersection()  # 返回交集,返回新列表
  8.intersection_update() # 返回交集,在原始集合中删除不重叠元素
  9.isdisjoint()  # 判断两个集合是否有相同元素,没有返回Ture,有返回False
  10.issubset() # 判断指定集合是否为该方法传入参数的子集
  11.issuperset() # 判断该方法的参数是否为指定集合的子集
  12.pop()  # 随机移除元素(因为set集合是无序列表)
  13.remove() # 删除指定元素
  14.symmetric_difference() # 返回两个集合中不重复的元素集合 同'^'
  15.symmetric_difference_ipdate()  # 在当前集合中移除重叠的元素,并将不重叠的元素添加到当前集合中
  16.union()  # 返回两个合集的并集 同'|'
  17.update() # 给集合添加元素
  集合推导式
    格式1:  {表达式 for 变量 in 序列}
    格式2:  {表达式 for 变量 in 序列 if 判断条件}
    集合表达式运行方式同列表表达式,表达式外框使用{}花括号
'''
set1 = {1, 2, 3, 4, 5}
set2 = {4, 5, 6, 7, 8}

if 5 in set1:
    print('数字5在集合set1中')
else:
    print('数字5不在集合set1中')

print(f'打印set1和set2的差集:  {set1 - set2}')
print(f'打印set1和set2的并集:  {set1 | set2}')
print(f'打印set1和set2的交集:  {set1 & set2}')
print(f'打印set1和set2的不同时存在的元素:  {set1 ^ set2}')

'''
python中的字典dictionary
  1.字典使用{}大括号存储 键(key):值(value) 键值对格式的信息
  2.键必须使用不可变类型数据,键值是唯一的
  3.dic['key']  # 输出键对应的值
  4.dic.keys()  # 输出所有键
  5.dic.values()  $ 输出所有值
  6.dict()字典构造函数,可以直接将键值对类型的列表转换为字典 dict([('num',1),('str','字符'),(3,1)]) 转换为 {'num':1 , 'str':'字符' , 3:1}
                                                        dict(x: x**2 for x in (2,4,6)) 转换为 {2:4 , 4:16 , 6:36}  #dict推导式
                                                        dict(num=1 , str='字符') 转换为 {'num':1 , 'str':'字符'}
  7.dict['name']  # 存在键则修改不存在键则新增
  字典函数
  1.len(dict) # 返回字典元素个数,即键的总数
  2.str(dict) # 输出字典,将字典以字符串形式表示
  3.type(dict)  # 输出字典类型
  字典方法
  1.clear() # 删除字典内所有元素
  2.copy()  # 返回字典的浅复制(dict2=dict1,赋值的是内存地址,修改dict1时,dict2的值也会更改,使用copy()在内存中创建新区域)
  3.fromkeys(seq[,value]) # 创建一个新字典,以seq中的值为键,value中的值为值
  4.get(key,default=None) # 返回指定键的值,不存在返回default设定的值
  5.key in dict $ 判断值是否在字典中,存在返回True
  6.items() # 以列表形式返回视图对象, 将字典以 [(key,value),(key,value)] 形式返回
  7.keys()  # 将字典中的key以列表形式返回视图对象
  8.setdefault(key,default=None)  # 和get()类似,如果键不存在字典中,则添加键并赋值default
  9.update(dict2) # 把字典dict2的键值对更新(存在)添加(不存在)到dict中
  10.values() # 类似keys() 将字典中的值以列表形式返回视图对象
  11.pop(key[,default]) # 删除字典key所对应的值,返回被删除的值default为键不存在时返回的值
  12.popitem()  # 删除字典中最后一对键值并返回
  字典推导式
    格式1:  {键:值 for 变量 in 列表}
    格式2:  {键:值 for 变量 in 列表 if 判断条件}
    代码运行逻辑: 列表元素for循环赋值给变量 -> 变量根据判断条件True将变量值赋值给键 -> 键值根据变量数据处理后成为键值对形式存入接收的字典作为元素
  字典解包:
    字典解包获取的是key,而不是value
'''

'''
python数据类型转换
  1.int(x[,base]) # 将x(字符,数字)转换为一个整数 base便是进制数,默认为10即十进制
  2.float(x)      # 将x(字符,数字)转换为一个浮点数
  3.complex(real[,imag])  # 创建一个复数
  4.str(x)        # 将x转换为字符串
  5.repr(x)       # 将x转换为表达式字符串就是将数据外层套一对"双引号封装为字符串,repr()可以转换字符串中的特殊字符
  6.eval(str)     # 将兑取字符串中有效的python表达式,并返回一个对象
  7.tuple(x)      # 将x序列转换为一个元祖
  8.list(x)       # 将x序列转换为一个列表
  9.set(x)        # 将x转换为一个集合
  10.dict(d)      # 创建一个字典
  11.frozenset(x) # 将x转换为不可变集合
  12.chr(x)       # 将一个0~256内整数转换为字符
  13.ord(x)       # 将一个字符转换为对应的ASCII码数值
  14.hex(x)       # 将一个整数转换为一个十六进制字符串
  15.oct(x)       # 将一个整数转换为一个八进制字符串
  16.bin(x)       # 将整数转换为二进制字符串
'''
print(int('100', 16))

'''
python数据类型转换
  隐式类型转换:自动完成
  显式类型转换:使用类型函数来转换
'''

'''
解析器
  一般linux/Unix系统默认的Python解析器为 python2.x解析器,可以将python3.x安装在/usr/local/python3.x中
  通过  sudo PATH=$PATH:/usr/local/python3/bin/python3  # 设置环境变量
        python3 --version
  window环境设置
        set path=%path%;c:\\python34(python路径)
'''

'''
python运算符
  算数运算符
  1. + 相加(字符串拼接,列表合并)
  2. - 相减
  3. * 相乘(字符串重复次数)
  4. / 相除
  5. // 整除
  6. % 余数(取模)
  7. ** 幂
  比较运算符
  1. == 等于
  2. != 不等
  3. > 大于
  4. < 小于
  5. >= 大于等于
  6. <= 小于等于
  赋值运算符
  1. = 赋值
  2. += 假发赋值
  3. -= 减法赋值
  4. *= 乘法赋值
  5. /= 除法赋值
  5. //= 整除赋值
  6. %= 取模赋值
  7. %= 取模赋值
  8. **= 幂赋值
  9. := 海象运算符(python3.8以后)
  位运算符
  1. &  按位与两个变量对应二进制位都为1结果为1否则为0  a= 0011 1100 b= 0000 1101 a&b=0000 1100
  2. |  按位或:两个变量对应二进制位有一个为1结果为1否则为0
  3. ^  按位异:两个变量对应二进制位不同时结果为1否则为0
  4. ~  按位取反:将二进制代码0和1互换
  5. << 左移动运算符  a= 0011 1100  a<<2  a== 1111 0000
  6.>>  右移动运算符  同上
  逻辑运算符
  1.and 与
  2.or  或
  3.not 非
  成员运算符
  1. in 变量在序列中返回True
  2. not in 变量不在序列中返回True
  身份运算符
  1. is 判断两个变量是否引用同一个对象  x is y  类似 id(x) == id(y) 正确返回True  id()返回对象的内存地址
  2. is not 同上
'''

'''
python数学
需要导入math模块
  数学函数
  1.abs(x)    # 返回x的绝对值(绝对值等于她本身的数是非负数)
  2.ceil(x)   # 返回数字的上入整数
  3.cmp(x, y) # 如果x<y返回-1 x==y返回0,x>y返回1  python3中已废弃 使用(x>y)-(x<y)替换
  4.exp(X)    # 返回e的x次密
  5.fabs(x)   # 以浮点数格式返回数字绝对值
  6.floor(x)  # 返回数字的下舍整数
  7.log(x)    # 返回x的自然对数 x>0
  8.log10(x)  # 返回以10为基数的x对数 x>0
  9.max(x1,x2,...)  # 返回给定参数最大值,参数可使用序列
  10.min(x1,x2,...)  # 返回给定参数最小值,参数可使用序列
  11.modf(x)  # 返回x的整数部分与小数部分,两部分数值符号同x,整数部分以浮点形式表示
  12.pow(x, y)  # x**y运算后的值
  13.round(x[,n]) # 返回x的四舍五入浮点数,n表示小数点后保留几位数字
  14.sqrt(x)  # 返回数字x的平方根
  随机数函数
  1.choice(seq) # 从序列中随机挑选一个元素, random.choice(range(10)),从0~9中随机挑选一个整数
  2.randrange([start,]stop[,step])  # 在指定基数的集合中获取一个随机数,基数默认为1
  3.random()  # 随机生成一个实数,范围在0~1之间
  4.seed([x]) # 改变随机数生成器的种子seed
  5.shuffle(lst)  # 将序列中的所有元素随机排序
  6.uniform(x, y) # 随机生成一个在x~y范围内的实数
  三角函数
  1.acos(X) # 返回x的反余弦弧度值
  2.asin(x) # 返回x的反正弦弧度值
  3.atan(x) # 返回x的反正切弧度值
  4.atan2(x, y)   # 返回给定的x及y坐标值的反正切值
  5.cos(x)  # 返回x的弧度的余弦值
  6.hypot(x, y) # 返回欧几里得范数 sqrt(x*x+y*y)
  7.sin(x)  # 返回x弧度的正弦值
  8.tan(x)  # 返回x弧度的正切值
  9.deggress(x) # 将弧度转换为角度, degrees(math.pi/2) 返回90.0
  10.radians(x) # 将角度转换为弧度
  数字常量
  1.math.pi #返回π的值
  2.math.e  #返回数学常量e,e即自然常数
'''
print(math.e)

'''
python 条件控制 if elif else
  if 条件:
    pass
  elif 条件:
    pass
  else
    pass
python3.10中添加可类似switch...case的语句为 match...case , match...case 代码不需要 break对代码进行隔离
  match subject:
    case pattern_1:
      pass
    case pattern_2:
      pass
    case _: # _ 类似 switch 中的 default条件,所有条件不匹配时执行
      pass
'''

'''
python循环语句 while循环
  while condition:    #condition 为 True 时,死循环
    代码块...
python 中的 while else 循环
  while condition:
    pass
  else:
    pass  # condition值为False时会执行else中的代码,while中通过break结束循环则不运行else中代码continue不影响else
while 循环代码只有一条语句可以简写
  while (flag): print('字符串')

python循环语句 for循环
  for x in array:   # for循环会将array中的元素依次赋值给x,然后运行一次for循环中的代码,运行代码次数根据列表元素个数决定
    pass
  for x in range(1,6):  # gange([start=0,]stop(不包含)[,step])  range在python3根据条件返回一个可遍历的对象,python2中返回列表
    pass
for...else循环
  for i in array:
    pass
  else:
    pass    # else条件同while...else for循环正常结束时执行else中的代码,如果使用break结束for循环,else中的代码不执行
'''

'''
python 迭代器和生成器
  迭代器可以记住遍历位置的对象,从集合第一个元素开始访问,直至所有元素被访问后结束,只能向前不能后退
  迭代器有两个基本方法 iter() 和 next()
    示例: list = [1, 2, 3, 4]
          it = iter(list)
          for x in it:
            print(x , end=' ')    # 输出 1 2 3 4
    next()参考:https://www.runoob.com/python3/python3-iterator-generator.html
    创建迭代器 __iter__(self)  和 __next__(self) 参考:https://www.runoob.com/python3/python3-iterator-generator.html
  生成器 使用了 yield 的函数被称为生成器(generator) 生成器就是将数据生成类似列表的数据返回给变量 通过next(变量名) 依次获取元素值
    参考:https://www.runoob.com/python3/python3-iterator-generator.html
'''

'''
python函数
  语法: def 函数名(形参,形参2 = '默认参数'):
          pass    # 不带return的函数相当于返回None
  调用函数: 函数名(参数)
  调用函数时,如果函数需要传参调用时不传参会报错,传参为变量时,传参顺序需要和函数形参顺序一致,关键字传参无需使用形参指定顺序 函数名(ele2 = 'value2' , ele1 = 'value1')
  不定长参数: def 函数名 (*args , **kwargs): 不定长参数名可以随意指定,*代表以元祖形式传递不定长参数,**代表以字典形式传递不定长参数
  python3.8强制位置参数 def 函数名 (a,b,/,c,d,*,e,f)  # '/'斜线前的参数必须使用指定位置,斜杠后参数可以使用指定位置或关键字传参,'*'星号后参数只能只用关键字传参
'''

'''
python匿名函数 lambda
  语法: lambda [参数[,参数2,参数3...]]: 代码块  # 匿名函数只包含一条代码,可以在同一行声明 匿名函数必须指定一个变量名才能调用
  调用匿名函数: 匿名函数变量名(参数)
'''

'''
python高阶函数: # 高阶函数就是将函数作为形参传递给另一个函数
  def 函数名(ele1,ele2,function):
    return function(ele1)+function(ele2)
'''

'''
python三元运算
  True运行 if 条件 else False运行
'''

'''
python数据结构
  python中列表是可变的,是可以修改的,字符串和元祖不能(字符串和元祖是在内存中划分新区域再将变量指向新的指针地址)
  列表的方法:
  1.list.append(x)  # 将元素添加到列表尾部
  2.list.extend(list) # 将指定列表内所有元素添加到当前列表
  3.list.insert(i,x)  # 在指定位置插入一个元素
  4.list.remove(x)  # 删除列表中值为x的第一个元素,如果元素不存在会报错
  5.list.pop([i]) # 删除并返回列表中指定位置的元素,不指定位置删除并返回最后一个元素
  6.list.clear()  # 清除列表中所有元素
  7.list.index(x) # 返回列表中值等于x的第一个元素下标,没有匹配返回错误
  8.list.count(x) # 返回列表中值等于x的总数
  9.list.sort() # 对列表中的元素进行排序
  10.list.reverse()  # 将列表中当前元素的位置倒序排列
  11.list.copy()  # 浅复制列表
'''

'''
python中读写文件
  open()方法将会返回一个file对象
  语法: open(filename, mode)  # filename 文件的路径+文件名    mode 文件打开方式,覆盖,只读,追加
  打开模式mode:
    r   只读,文件指针在开头
    rb  二进制只读,文件指针在开头
    r+  读写,文件指针在开头
    rb+ 二进制读写,文件指针在开头
    w   覆盖写入,不存在文件则创建
    wb  二进制覆盖写入
    w+  同w
    wb+ 同wb
    a   追加,文件指针在结尾,文件不存在则创建
    ab  二进制追加,文件指针在结尾,文件不存在则创建
    a+  读写,文件指针在结尾,文件不存在则创建
    ab+ 二进制读写,文件指针在结尾,文件不存在则创建
  write()方法将数据按指定的模式写入到file对象中,返回值为写入的字符数,如果写入的不是字符串,需要通过str()或repr()转换数据
  read(size)方法读取文件的内容,size指定读取的字节数,size默认为负表示读取全部
  readline()方法表示读取文件中单独的一行,读取到换行符\n,readline()返回值为空字符串,表示读取到最后一行
  readlines()方法以列表形式返回文件中所有行,size表示返回数据总大小为size字节的行
  也可以使用迭代器读取文本
    f = open(文本.txt)
    for line in f:
      print(line, end='')
    f.close()
  tell()方法返回文件对象当前所处位置,返回她从文件头开始算起的字节数
  seek(offset, from_what)更改文件指针的位置,offset表示文件位置移动字符数,from_what(0表示从文件头,1表示当前位置,2表示文件结尾)
  file对象方法:
    1.close() # 关闭文件对象,关闭后不能再读写
    2.flush() # 刷新文件内部缓冲,将缓冲数据直接写入文件(如果有),文件关闭close()后会自动调用
    3.fileno()  # 返回一个整形文件描述符
    4.isatty()  # 如果文件链接到一个终端设备返回True,否则False
    5.next()  # 返回文件下一行,Python3中不再支持
    6.read([size])  # 读取文件指定字节数
    7.readline([size])  # 读取整行
    8.readlines([size]) # 将所有行以列表形式返回,size设定返回总大小为size字节数的行
    9.seek(offset[,whence]) # 移动光标字符数  whence表示移动位置参考 0文件开头 1当前位置 2文件结尾
    10.tell()  # 返回文件当前位置
    11.truncate([size]) # 从文件首行首字母开始截断,截断文件为size个字符,无size表示从当前位置截断,截断之后后面的字符将被从file对象中删除,windows下换行符为2个字符
    12.write(str) # 将字符串写入文件,返回写入字符长度
    13.writelines(sequence) # 向文件中写入一个列表,如果需要换行,需要自己加入每行的换行符\n
'''

'''
python OS模块 文件/目录方法
  1.os.access(path, mode) # 检验权限模式path文件路径 mode os.F_OK文件是否存在 os.R_Ok文件是否可读 os.W_OK文件是否可写 os.X_OK文件是否可执行
  2.os.chdir(path)  # 更改当前目录
  3.os.chflages(path, flags)  # 设置路径的标记位数字标记(只在Unix下可用)
  4.os.chmod(path, mode)  # 更改权限(只在Unix下可用)
  5.os.chown(path, uid, gid)  # 更改文件所有者(只在Unix下可用)
  6.os.chroot(path) # 改变当前进程根目录(只在Unix下可用)
  7.os.close(fd)  # 关闭文件描述符fd,关闭os.open()打开的文件
  8.os.getcwd() # 返回当前工作目录
  9.os.sytem('mkdir filename')  # 执行系统命令
  后续略... 66项,参考:https://www.runoob.com/python3/python3-os-file-methods.html
'''

'''
python错误和异常
try:  # 判断异常
  pass
  raise Exception('异常提示') # 同PHP和JS throw丢出异常
except Exception(所有异常): #捕获异常 同PHP和JS catch
# 一个语句可以有多个except用于捕获处理不同的错误信息,一个except可以通过元祖方式捕获多种异常
  pass
else: # 无异常执行代码
  pass
finally:  # 无论是否有异常都要执行的代码
  pass

自定义异常
class MyError(Exception): # 自定义异常必须继承Exception
  def __init__(self, value)
    self.value = value
  def __str__(self):
    return repr(self.value)

try:
  raise MyError('自定义异常')
except MyError as e:
  print(f'{e}')
'''

'''
python with关键字
  with关键字会自动调用file.close()方法,with的作用等效于 try/finally

  with open('文件名' , 'r') as file:
    pass
'''

'''
python面向对象
  类class: 具有相同的属性和方法的对象的集合
  方法: 类中的函数
  属性: 类中的变量
  方法重写:子类继承了父类的方法,但是子类中有同名方法并覆盖了父类的方法,使用super()函数可以调用父类的方法
  局部变量:方法中的变量
  实例变量:类中的属性,调用是使用self修饰的变量
  继承:子类继承父类的属性和方法
  实例化:创建一个类的实例对象
  对象:通过类定义的数据结构实例,包含类的属性和方法
  python中实例化类不需要new关键字
  obj=Class()
  调用类属性和方法
  obj.function()
  类的方法必须包含一个形参,这个形参永远指向实例化的对象,一般使用self
  继承:python中类使用 class 类名(模块名.父类名,父类名,...) 形式继承 可以继承当前文件中的类,也可以继承其他模块中的类,python支持多继承,PHP不允许多继承
  super(type[,object-or-type])函数: type指要调用的子类名,object-or-type指实例对象,一般为self  super(class,self).父方法()  python3中可以直接使用 super().父方法()
  私有属性: python中私有属性私用"__"两个下划线表示,调用时使用 self.__私有属性/方法() PHP中使用 private关键字 私有属性和方法只能在类内部调用
  类专有方法:
  1.__init__(self)  # 构造函数在类实例化时触发,类似PHP__construct(),self代表实例化的对象,self不是python关键字,替换为其他名称也是可以的
  2.__del__(self) # 析构函数,在实例化对象被删除时触发的方法 del 对象名 即可触发
  3.__repr__  # 打印或转换对象时触发的方法
    __str__(self) # 使用print(class)输出类时就会调用
  4.__setitem__ # 按照索引赋值
  5.__getitem__ # 按照索引获取值
  6.__len__ # 获取长度
  7.__cmp__ # 比较运算
  8.__call__  # 函数调用
  9.__add__ # 加运算
  10.__sub__  # 减运算
  11.__mul__  # 乘运算
  12.__truediv__  # 除运算
  13.__mod__  # 取余运算
  14.__pow__  # 乘方
  15.__mro__ 或 类名.mro() # 获取类的层次结构
  判断数据类型
    isinstance(属性, str||int)  # 判断参数是否是指定类型数据
  python类方法,类方法是针对类对象定义的方法,在类方法中可以直接访问类属性或调用其他类方法,通过类方法修改调用类属性,更方便,安全
    语法: class 父类():
              count = 0
              def __init__(self):
                  pass
              @classmethod
              def 类名(cls):  # 类方法要用'@classmethod'修饰,第一个参数必须是'cls'
                  pass
                  print(cls.count)  # 调用类属性
                  cls.类方法         # 调用类方法
  python静态方法
    语法 :  class 类名():
                @staticmethod
                def 静态方法名():
                    pass
    静态方法可以直接调用,无需实例化 类名.静态方法名()
'''

'''
python单例设计
  语法 return super().__new__(cls)
  代码示例:
      class ClassName():
        # 定义类属性
        instance = None
        # 重写__new__()方法
        def __new__(cls):
            if cls.instance is None:
                cls.instance = super().__new__(cls)
              return cls.instance
        def__init__(self):
            pass

'''

'''
python中的命名空间是指  局部变量 全局变量 内置变量,当调用方法时,也会按照这个顺序查找
方法内的变量是局部变量,即使和全局变量同名,修改局部变量全局变量不会有任何变化
global关键字,使用global关键字修饰的局部变量,会指向同名全局变量的地址,再函数内部修改局部变量,全局变量也会更改
如果是函数嵌套,修改上一层函数的局部变量需要使用 nonlocal关键字
  示例: def one():
          num = 10
          print(num, end=" ")
          def two():
            nonlocal num
            num = 100
            print(num, end=" ")
          two()
          print(num, end=" ")
        one()
    结果为 10 100 100
'''


def one():
    num = 10
    print(num, end=" ")

    def two():
        nonlocal num
        num = 100
        print(num, end=" ")
    two()
    print(num, end=" ")


one()

'''
多任务执行方式
多任务:一段时间内,同时执行多个任务
并发:单核CPU,交替运行程序
并行:多核CPU,真正意义上的多任务,多个内核一起执行软件,任务数大于内核数,还是并发,小于内核数就是并行
'''

'''
进程:一个正在运行的程序或软件,他是操作系统进行资源分配的基本单位,一个程序运行至少有一个进程,一个进程默认有一个线程
进程间不共享全局变量,创建子进程实际是对主进程资源的拷贝,子进程是主进程的一个副本,所以子进程所做的修改不会影响其他进程
线程:线程也是实现多任务的一种方式,线程是进程中执行代码的一个分支,每个线程想要工作执行代码需要cpu进行调度,线程是cpu执行调度的基本单位,每个进程至少有一个线程,这个线程就是主线程
线程间可以共享全局变量,因为多线程使用同一个进程,无需拷贝代码
携程
'''

'''
1.进程和线程执行时是无序的
2.主线程/主进程会等待所有子线程/子进程执行结束后再结束
3.线程之间共享全局变量,进程之间不共享
4.线程之间共享全局变量数据可能会出现错误问题
  线程同步:为了防止线程间可能出现的错误,同一时刻只能有一个线程去操作全局变量,就是协同步调,按预定先后次序运行
    线程同步方式:
      a.线程等待(join)  使用join()方法一个线程运行完毕后在运行另一个线程
      b互斥锁 互斥锁就是对共享数据进行锁定,保证同一时刻只能有一个线程去操作,互斥锁等于多个线程一起抢,抢到锁的线程先执行,其他线程等锁使用完释放后,其他等待的线程再去抢

互斥锁的使用:threading模块中定义了Lock变量,这个变量本质是一个函数,通过这个函数可以获取一把互斥锁
  互斥锁使用:  lock = threading.Lock()  #创建锁,锁是全局变量在代码外部声明

              def 需要上锁的函数():
                  lock.acquire()   # 上锁

                  ...代码块(同一时间只能有一个线程操作的代码)...

                  lock.release()   # 释放锁
死锁:一直等待对方释放锁的情景(抢到锁的线程没有释放锁)
'''

'''
进程和线程对比
  关系对比
    1.线程依附在进程中,没有进程就没有线程
    2.一个进程默认提供一条线程,进程可以创建多个线程
  区别对比:
    1.进程之间不共享全局变量
    2.线程之间共享全局变量,但是线程间有资源竞争的问题,需要使用互斥锁(threading.Lock())或线程同步(join())解决
    3.创建进程的资源开销比创建线程的开销大,因为子进程要复制主进程的代码,并且需要请求运行资源
    4.进程时操作系统资源分配的基本单位,线程是CPU调度的基本单位
    5.线程不能独立执行.必须依存在进程中
    6.多进程开发比单进程多线程开发稳定性要更强
  优缺点对比
    进程: 优点:可以使用多核 计算密集型操作推荐多进程
          缺点:资源开销大
    线程: 优点:资源开销小 文件写入,文件现在,I/O操作推荐多线程
          缺点:不能使用多核
  小结:
    进程和线程都是完成多任务的一种方式
    多进程比多线程消耗资源多,但是多进程开发比多线程开发稳定性高,单个进程挂掉不影响其他进程
    多进程可以使用CPU多核运行,多线程可以共享全局变量
    线程不能单独执行必须依附在进程中
'''

'''
python多进程需要导入包
import multiprocessing

Process进程类
  process([group,target,name,args,kwargs])
    1.group # 指定进程组,目前只能使用None
    2.target  # 执行的目标任务名
    3.name  # 进程名
    4.args  # 以元祖方式给执行的任务传参
    5.kwargs  # 以字典的方式给任务传参

  process常用方法
    1.start() # 启动子进程实例(创建子进程)
    2.join()  # 等待子进程执行结束
    3.terminate() # 不管任务是否完成,立即终止子进程

  process常用属性
    1.name  # 当前进程的别名,默认为Process-N , N为从1开始递增的整数
    2.daemon  # 守护进程, 子进程名.daemon = True 时 , 主进程结束,子进程也会被关闭,默认主进程需要等待子进程运行结束后才能结束
'''


# 跳舞任务
def dance():
    # print('主进程', os.getppid())  # getppid()获取主进程编号
    # print(os.getpid())  # getpid()获取进程
    # print('dance进程ID: ', os.getpid(), multiprocessing.current_process())
    print('dance线程ID: ', threading.current_thread())
    for i in range(3):
        print('跳舞中...')
        time.sleep(0.5)


# 唱歌任务
def sing():
    # print('sing进程ID: ', os.getpid(), multiprocessing.current_process())
    print('sing线程ID: ', threading.current_thread())
    for i in range(3):
        print('唱歌中...')
        time.sleep(0.5)


# 带参数任务
def jump(i, k):
    print(i, k)


print('主进程ID: ', os.getppid())
# 代码在windows有问题


# 创建子进程
# group 表示进程组,目前只能使用None 所以不用设置
# target 进程执行的目标任务
# name 进程名,如果不设置,默认是Process-N(从1开始的自增整数)


if __name__ == '__main__':  # mac和linux下 子进程不会拷贝主进程代码,windows下会拷贝,造成子进程拷贝主进程代码运行时,又会创建一个新的子进程,导致子进程死循环,所以windows下子进程代码要在if __name__ == '__main__'判断下运行,防止死循环
    dance_process = multiprocessing.Process(target=dance)
    sing_process = multiprocessing.Process(target=sing)
    '''
    jump_process = multiprocessing.Process(target=jump, args=('我', '爱你')) # 元祖方式传参
    jump_process = multiprocessing.Process(target=jump, kwargs={'k': '我', 'i': '爱你'})  # 字典方式传参
    '''
    jump_process = multiprocessing.Process(target=jump, args=('爱你',), kwargs={'k': '我'})  # 元祖加字典方式传参
    # dance_process.daemon = True  # 守护进程
    # dance_process.start()
    # sing_process.start()
    # jump_process.start()
# dance_process.start()

# 主进程执行唱歌
# sing()

'''
python多线程需要导入包threading
import threading

threading线程类
  Thread([group, target, name, args, kwargs])
    1.group # 线程组,目前只能使用None 所以不需要设置
    2.target  # 执行的目标任务名
    3.name  # 线程名,一般不用设置
    4.args  # 以元祖方式给线程任务传参
    5.kwargs  # 以字典方式给线程任务传参
  thread常用方法
    1.start() # 启动子进程实例(创建子进程)
    2.setDaemon(True) # 设置线程守护进程,True主线程结束时,子线程立即结束,进程process设置的是daemon属性,线程thread设置的是setDaemon()方法
    3.join()  # 等待子线程执行结束
'''

if __name__ == '__main__':
    print('主线程ID: ', threading.current_thread)
    # 创建子线程
    sing_thread = threading.Thread(target=sing)
    dance_thread = threading.Thread(target=dance)
    jump_thread = threading.Thread(target=jump, args=('爱你',), kwargs={'k': '我'})
    # 运行子线程
    # sing_thread.setDaemon(True)   # 守护进程
    sing_thread.start()
    dance_thread.start()
    dance_thread.join()

'''
socket类介绍
  导入socket模块
    import socket
  创建客户端socket对象
    socket.socket(AddressFamily,Type) # AddressFamily表示IP地址类型,IPV4和IPV6  Type表示传输协议类型
  socket方法:
    1.connect((host,port))  # 表示和服务端套接字建立链接,host是服务器ip地址,port是程序端口号,host和port存储在元祖中
    2.send(data)  # 发送数据data是二进制数据
    3.recv(buffersize)  # 表示接收数据,buffersize是每次接收数据的长度(字节)
    4.bind((host,port)) # 表示绑定端口号,host是ip地址,port是端口号,ip地址一般不指定,表示本机的任何IP地址都可以,因为服务端网卡可能有多个ip
    5.listen(backlog) # 表示设置监听,bcaklog参数表示最大等待建立链接的个数
    6.accept(data)  # 表示发送数据,data是二进制数据
'''

'''
开发TCP服务端程序步骤
  1.创建服务端套接字对象
  2.绑定端口号
  3.设置监听
  4.等待接收客户端的链接请求
  5.接收数据
  6.发送数据
  7.关闭套接字
'''


def handle_client_request(ip_port, new_client):
    # 处理客户端请求任务
    print('客户端的ip和端口号为: ', ip_port)
    # tcp_server只负责等待接收客户请求,不负责收发消息
    while True:
        # 循环接收客户端数据
        # 收发消息都使用accept()返回的新套接字
        recv_data = new_client.recv(1024)
        if recv_data:
            print('接收的客户端数据为', recv_data.decode('utf-8'))
            # 发送数据
            send_data = '正在处理数据'  # 要发送的数据
            send_data = send_data.encode('utf-8')  # 将数据转换为二进制数据
            new_client.send(send_data)
        else:
            print('客户端下线了: ', ip_port)
            break
    # 关闭服务于客户端的套接字,结束于客户端的链接
    new_client.close()


if __name__ == "__main__":
    # 创建服务端套接字对象
    tcp_server = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # AF_INET表示IPV4地址类型,SOCK_STREAM表示TCP传输协议
    # 套接字关闭,端口号不是马上释放的(1-2分钟后才会释放),为了马上能使用未释放的端口,需要手动释放端口
    # tcp_server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, True) # socket.SOL_SOCKET表示当前套接字 socket.SO_REUSEADDR设置端口号复用选项 True设置端口号复用选项的值
    tcp_server.setsockopt(socket.SOL_SOCKET, socket.SO_REUSEADDR, True)
    # 绑定端口号
    tcp_server.bind(("", 44144))
    # 设置监听
    tcp_server.listen(128)  # listen(最大等待建立链接个数,最多能有多少客户排队)
    # 等待接收客户端的链接请求
    while True:  # 循环等待接收客户端接收请求
        new_client, ip_port = tcp_server.accept()  # 以元祖返回数据,第一个元素是一个新的套接字,第二个元素是客户端对应的IP地址和端口号,使用new_client 和 ip_port接收新套接字信息
        # 当客户端和服务端链接成功了,建立子线程收发消息,多任务处理不阻塞
        sub_thread = threading.Thread(target=handle_client_request, args=(ip_port, new_client))
        # 启动子线程执行任务
        sub_thread.start()
    # 关闭套接字,关闭服务店表示不再等待接收客户端的请求
    # tcp_server.close() # 因为服务端要一直运行,所以不用谢关闭套接字


'''
开发TCP客户端程序步骤
  1.创建客户端套接字对象
  2.和服务端套接字建立链接
  3.发送数据
  4.接收数据
  5.关闭客户端套接字
'''

if __name__ == "__main__":
    # 创建客户端套接字对象
    tcp_client = socket.socket(socket.AF_INET, socket.SOCK_STREAM)  # AF_INET表示IPV4地址类型,SOCK_STREAM表示TCP传输协议
    # 和服务端套接字建立链接
    tcp_client.connect(('127.0.0.1', 44144))
    # 发送数据
    send_data = 'hello'  # 要发送的数据
    send_data = send_data.encode('utf-8')  # 将数据转换为二进制数据
    tcp_client.send(send_data)
    # 接收数据
    result_data = tcp_client.recv(1024)  # 表示每次接收最大不能超过1024字节
    print("打印接收数据", result_data.decode('utf-8'))
    # 关闭客户端套接字
    tcp_client.close()

'''
TCP网络应用程序注意点
  1.TCP客户端和TCP服务端想要进程通信必须先建立链接
  2.TCP客户端程序一般不需要绑定端口号,因为客户端是主动链接的
  3.TCP服务端必须绑定端口号,否则客户端找不到TCP服务端程序
  4.listen()后套接字是被动套接字,只负责接收新的客户端的请求,不能收发消息
  5.当TCP客户端程序和TCP服务端程序链接成功后,TCP服务端程序会产生一个新的套接字,收发客户端消息使用该套接字
  6.关闭accept()返回套接字表示这个和这个客户端的通信已经完毕
  7.关闭listen()后的套接字意味着服务端的套接字关闭了,会导致新的客户端不能连接服务器,但之前已经连接成功的客户端还能正常通信
  8.当客户端的套接字调用close()以后,服务端的recv会解阻塞,返回数据长度为0,服务端通过返回数据长度判断客户端是否已经下线,反之服务端关闭套接字,客户端的recv也会解阻塞,返回的数据长度也为0
'''

'''
PyMySQL包
  安装:sudo pip3 install pymysql
  卸载:sudo pip3 uninstall pymsql
  导入包: import pumysql
  使用pymysql.connect()函数创建连接对象
  conn = pymysql.connect(参数列表)
    1.host:mysql主机.本地localhost
    2.port:端口号
    3.user:用户名
    4.pasword:密码
    5.databases:数据库名
    6.charset:字符编码
  pymsql方法
    1.close() # 关闭连接
    2.commit()  # 提交数据
    3.rollback()  # 撤销数据
  获取游标对象(用于执行sql语句)
    cur = connect.cursor()
      1.cursor.fetchone() # 获取一条数据
      2.cursor.fetchall() # 获取全部数据

代码示例:
# 1. 导入包
import pymysql
# 创建连接对象
conn = pymysql.connect(host='licalhost', port=3306, user='root', password='password', databases='databases', charset='utf8')
# 获取游标
cursor = conn.cursor()
# SQL语句
sql = "select * from databases.table;"
sql = "select * from databases where id = %s;"  # 使用%s 表示参数
# 执行语句
cursor.execute(sql,('参数'))  # execute(sql语句,(参数1,参数2)
# 获取结果(元祖格式)
row = cursor.fetchone()
print(row)
all = cursor.fetchall()
for row in all:
  print(row)
# 增删改功能需要使用commit()执行
sql = "insert into table value('数据','数据') on duplicate key update name='数据';"
row_count =  cursor.execute(sql)
conn.commit()
# 关闭游标
cursor.close()
# 关闭连接
conn.close()
'''

'''
mysql事务
  开启事务:begin; 或 start transaction;
  set autocommit = 0 # 临时取消自动提交, 所有mysql语句输入后不提交,需要使用 commit;才会提交
'''

'''
mysql索引
查看索引:
  show index fron 表名; # 主键和外键会自动创建索引
创建索引:
  alter table 表名 add index 索引名(字段,字段,...); # 索引名可选,不指定索引名,默认使用字段名
删除索引:
  alter table 表名 drop index 索引名;
'''

'''
闭包: 函数嵌套,内部函数使用了外部函数的变量或参数,并且外部函数返回了内部函数,我们将这个使用外部函数变量的内部函数称为闭包
闭包构成条件:
  1.嵌套函数
  2.内部函数使用了外部函数的变量(包括外部函数的参数)
  3.外部函数返回了内部函数
简单闭包示例
  # 函数嵌套
  def func_out(num1):
    def func_inner(num2):
      # 内部函数调用了外部函数的变量
      result = num1 + num2
      print('结果为: ', result)
    # 返回内部 函数
    return func_inner # 返回函数,不带括号
  # 获取闭包对象
  f = func_out(1)
  #执行闭包
  f(2)
闭包的作用:闭包可以保存外部函数内的变量,不会随着外部函数调用完而销毁,由于闭包引用了外部函数变量,则外部函数变量没有及时销毁,会消耗内存
'''

'''
python装饰器:装饰器是对已有函数进行功能扩展的,给已有函数增加额外功能,本质上是一个闭包函数
  特点:
    1.不修改已有函数源代码
    2.不修改已有函数调用方式
    3.给已有函数增加额外的功能
  示例:
    # 定义装饰器
    def decorator(func):  # 如果闭包函数的参数有且只有一个并且是函数类型,那么这个闭包函数称为装饰器
      def inner():
        # 在内部函数里对已有函数进行装饰
          print("添加验证")
          func()
          return inner

    @decorator  # 装饰器语法糖,影响后面的函数
    def commnent():
      print("输出")

    #调用装饰器对已有函数进行装饰
    # comment = decorator(commnent)
    comment()

  装饰器语法糖: @装饰器名称
    @decorator
'''

'''
通用装饰器:通用装饰器可以装饰任意类型的函数
  使用 *args **keargs传参
'''

'''
多个装饰器
  @装饰器1
  @装饰器2
  def 函数():
    pass
  运行顺序:
    1.装饰器1后面没有函数,所以运行装饰器2
    2.装饰器2装饰函数,然后装饰器2返回inner()函数
    3.装饰器2返回函数后,装饰器1能捕获函数了,装饰器1开始装饰装饰器2返回的函数
    4.装饰器全部执行完毕,返回最终函数
'''

'''
带参数装饰器:装饰器不能接受参数,可以在装饰器外嵌套一层函数接收参数
  def out(flag):
    def decorator(func):
      def inner(*args,**kwargs):
        func()
      return inner
    return decorator

  @out('参数')
  def 函数名():
    pass
# @out == @decorator
'''

'''
类装饰器:使用类装饰已有函数
class Decorator(object):
  def __init__(self,func):
    self.__fn = func

  def __call__(self,*args,**kwargs):  # __call__方法.表示将类转换为可调用对象,对象名()方法即触发这个方法
    self.__fn()

@Decorator
def func():
  pass

func()
'''

'''
logging 日志模块
导入模块:
  import logging
'''

'''
property属性:property属性就是负责吧一个方法当做属性进行使用,这样做可以简化代码使用,就是使用装饰器嵌套,调用方法时不用加括号
  1.装饰器方式
    class Person(object):
      def __init__(self):
        self.__age = 0
      # 装饰器方式property,将age方法当属性使用,表示获取属性时会执行下面方法
      @property #设置属性
      def age(self):
        return self.__age
      # 把age方法当属性使用,表示设置属性时会执行下面修饰的方法
      @age.setter # 设置属性,.setter装饰的方法名必须和property装饰的方法名一致
      def age(self,new_age):
        if new_age >= 150:
          print('岁数大')
        else:
          self._age = new_age
      # 调用方法
      cls = Preson()
      print(cls.age)  # 这里调用方法因为property属性不用再加括号
      cls.age= 10 # 整理设置属性,因为setter装饰的原因,调用age方法
  2.类属性方式
    class Person(object):
      def __init__(self):
        self.__age = 0
      def get_age(self):  # 获取age属性
        return self.__age
      def set_age(self,new_age):
        if new_age >= 150:
          print('岁数大')
        else:
          self._age = new_age
      # 类属性方式property属性
      age = property(get_age.set_age) # 方法名(以属性方式调用) = property(调用属性时使用的方法,设置属性时调用的方法)
'''

'''
python上下文管理器
  with关键字的实现方法就是依靠上下文管理器
  一个类只要实现了 __enter__()和__exit__()两个方法,通过该类创建的对象,称之为上下文管理器
  示例:
    class File(object):
      #初始化
      def __init__(self,file_name,file_model):
        self.file_name=filename
        self.file_model=file_model
      #上下文方法
      def __enter__(self):
        self.file = open(self.file_name, self.file_model)
        return self.file
      def __exit__(self): # with语句执行完毕后自动调用__exit__()方法
        self.file.close()
    # with语句接合上下文管理器对象使用
    with File('文件名','r') as file:
      file_data=file.read()
      print(file_data)
'''

'''
使用@contextmanager装饰器可以将一个函数装饰为上下文管理器,通过yield关键字将函数分割为两部分,yield上面的语句在__enter__()中执行,yield下面的部分在__exit__()中执行,yield后面的参数是函数返回值
  # 导入装饰器
  from contextlib import contextmanager
  # 装饰函数
  @contextmanager
  def my_open(path,model):
    try:
      file = open('文件名', '模式')
      yield file # yield分割代码,返回对象
    except Exception as e:
      print(e)
    finally:
      print('over')
      file.close()
  # 使用with语句
  with my_open('文件名','模式') as f:
    f.write("写入数据")
'''

'''
python生成器:根据规则生成数据,条件不成立时结束生成,数据不是一次性生成全部,而是使用一个生成一个,可以节约大量内存
创建生成器的方式
  1.生成器推导式
  2.yield关键字 : 只要在函数中有yield关键字,那么就是一个生成器
代码:
  # 创建生成器,生成器使用小括号
  my_generator = (i*2 for i in range(5))
  print(my_generator)9-=

  # 遍历生成器
  for value in my_generator:
    print(value)
'''

'''
深拷贝,浅拷贝
需要导入模块 copy
import copy
  方法:
    1.浅拷贝 copy.copy()  # 不可变类型拷贝地址,可变类型数据在拷贝数据并在内存中开辟新区域,但浅拷贝只拷贝最外层,也就是所一个二维数组,只有一维的数据被拷贝了,二维数组中的元素地址还是相同的
    2.深拷贝 copy.deepcopy()  # 深拷贝只要对象中有可变类型数据,就会复制数据及子数据(多维数组),在内存中开辟新区域存储
'''

'''
python正则表达式
导入模块re
import re
  方法:
    1. match(正则表达式, 字符串)  # result = re.match('字符', '源字符') 未匹配到数据返回None
    2. group() # 获取匹配结果 # re_result = result.group()  group(元素下标,默认0)
'''

'''
Python爬虫
'''
