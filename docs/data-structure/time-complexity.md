# 时间复杂度

**在规模为n的所有输入中选择执行时间最长者作为T(n), 并以T(n)度量该算法的时间复杂度。**

## 大O记号
具体地，若存在正的常数c和函数f(n)，使得对任何 n >> 2 都有
> T(n) <= c * f(n)

则可认为在n足够大之后，f(n)给出了T(n)增长速度的一个渐进上界。此时，记之为：`T(n) = O(f(n))`
由这一定义，可以导出大O记号的一下性质：

1. 对于任一常数 c > 0，有 O(f(n)) = O(c * f(n))
2. 对于任意常数 a > b > 0, 有 O(n^a + n^b) = O(n^a)

在大O记号的意义下，性质1函数各项正的常系数可以忽略并等于1。性质2意味着多项式的低次项可以忽略，只保留最高次项。

## 基本操作

一种自然且可行的解决办法是，**将时间复杂度理解为算法中各条指令的执行时间之和**。

在图灵机（Turing Machine, TM）和随机存储机（Random Access Machine, RAM）等计算模型中，指令语句均可分解为若干次基本操作，比如算术运算、比较、分支、子程序调用与返回等； 而在大多数实际的计算环境中，每一次这类基本操作都可在常数时间内完成。

如此，**不妨将T(n)定义为算法所执行基本操作的总次数。**也就是说，**T(n)决定于组成算法 的所有语句各自的执行次数， 以及其中所含基本操作的数目。**

C++等高级语言的基本指令，均等效于常数条RAM的基本指令；在渐进意义下，二者基本相当。

- 分支转向：goto // 算法的灵魂，出于结构化考虑，被隐藏了
- 循环迭代：for 、while // 本质上就是 “if + goto”
- 调用 + 递归 // 本质上也是goto

## 级数

### 算数级数：与末项平方同阶

> 从某一个数开始，以固定的间隔为单位，不断的线性递增，他们的总和称作算数级数

> T(n) = 1 + 2 + …… + n  =  n(n+1)/2 = O(n^2)

### 幂方级数：比幂次高一阶

> T(n) = 1^2 + 2^2 + 3^2 + .... + n^2 = n(n+1)(2n+1)/6 = O(n^3)
>
> T(n) = 1^3 + 2^3 + 3^3 + .... + n^3 = n^2(n+1)^2/4 = O(n^4)
>
> T(n) = 1^4 + 2^4 + 3^4 + .... + n^4 = n(n+1)(2n+1)(3n^2+3n-1)/30 = O(n^5)

### 几何级数(a > 1)：与末项同阶

>  T(n) = 1 + 2 + 4 + ... + 2^n = 2^(n+1) -1 = O(2^(n+1)) = O(2^n)

### 收敛级数

> 1/1/2 + 1/2/3 + 1/3/4 + ... + 1/(n-1)/n = 1 - 1/n = O(1)
>
> 1 + 1/2^2 + .... + 1/n^2  < 1 + 1/2^2 + .... = π^2/6 = O(1)
>
> 1/3 + 1/7 + 1/8 + 1/15 + 1/24 + 1/26 + 1/31 + 1/35 ... = 1 = O(1)

### 几何分布

> (1- λ) *[1 + 2λ + 3λ^2 + 4λ^3 + ...] = 1/(1 - λ) = O(1), 0<λ<1 // 例如抛硬币

### 调和级数

> 1 + 1/2 + 1/3 + ... + 1/n = O(logn)

### 对数级数

> log1 + log2 + log3 + ... logn = log(n!) = O(nlogn)

## 循环 vs 级数

1、算数级数：T(n) = n + n + ... + n = n *n = O(n^2)

```c++
for (int i = 0; i < n; i++)
  for (int j = 0; j < n; j++)
    O1Operation(i, j);
```

上述双循环的时间复杂度就等于下图矩形的面积

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/LiRDXw-yDwZBl.png" style="zoom:50%;" />

2、算数级数：

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/Hw6tsH-lJPgzS.png" style="zoom:50%;" />

```c++
for (int i = 0; i < n; i++)
  for (int j = 0; j < i; j++)
    O1Operation(i, j);
```

上述双循环的时间复杂度就等于下图三角形的面积

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/TPXKr9-LytEwL.png" style="zoom:50%;" />

3、

```c++
for (int i = 0; i < n; i++)
  for (int j = 0; j < i; j += 2013)
    O1Operation(i, j);
```

上述双循环的时间复杂度就等于下图三角形的面积

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/sRYlwc-gXbdzx.png" style="zoom:50%;" />

4、几何级数：

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/0VqoWw-dTqVqm.png" style="zoom: 33%;" />

```c++
for (int i = 0; i < n; i <<=1)
  for (int j = 0; j < i; j++)
    O1Operation(i, j);
```

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/IeUj2Q-obOqQg.png" style="zoom:25%;" />
