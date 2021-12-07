# 分而治之

就是将规模庞大的问题分解为若干规模更小的子问题，再通过递归机制分别求解。这种分解持续进行，直到子问题规模缩减至平凡的情况。这就是所谓的分而治之（divide-and-conquer）策略。

## 数组求和

- 普通迭代

  ```c++
  int sum(int A[], int low, int high) {
    int total = 0;
    while (low <= high) total += A[low++];
    return total;
  }
  ```

- 二分递归

  ```c++
  int sum(int A[], int low, int high) {
    if (low == high) return A[low];
    int middle = (low + high) >> 1;
    return sum(A, low, middle) + sum(A, middle + 1, high);
  }
  ```

  递推关系：

  ​	T(n) = 2 * T(n/2) + O(1)

  ​	T(1) = O(1)

  <img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/Xrisf8-q6fpjA.png" style="zoom:50%;" />

## Master Theorem

分治策略对应的递推式，通常（尽量不总是）形如：

​	<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/heHJWM-NI4hWl.png" style="zoom:50%;" />

(原问题被分为a个规模均为n/b的子任务； 任务的划分】解的合并耗时f(n))

分三种情况：

<img src="https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/0FF2X1-C3X5cR.png" style="zoom: 25%;" />

![](https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/BOrN0A-jZ22qc.png)

