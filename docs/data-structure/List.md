# List
## List ADT 接口

| 操作接口                          | 功能                                           | 适用对象 |
| --------------------------------- | ---------------------------------------------- | -------- |
| size()                            | 节点总数                                       | List     |
| first(), last()                   | 返回首、末节点位置                             | List     |
| InsertAsFirst(e), InsertAsLast(e) | 将e当作首、末节点插入                          | List     |
| insertA(p, e), insertB(p, e)      | 将e当作节点p的直接后继、前驱插入               | List     |
| remove(p)                         | 删除位置p处的节点，返回其数值                  | List     |
| isDisordered()                    | 判断所有节点是否已按非降序排列                 | List     |
| sort()                            | 调整各节点的位置，使之按非降序排列             | List     |
| find(e)                           | 查找目标元素e，失败时返回NULL                  | List     |
| search(e)                         | 查找目标元素e，返回不大于e且索引最大的节点     | 有序LIst |
| deduplicate()                     | 剔除重复节点                                   | List     |
| uniquify()                        | 剔除重复节点                                   | 有序LIst |
| traverse()                        | 遍历并统一处理所有节点，处理方法有函数对象指定 | List     |

@[code cpp](./List.h)

## List对象内部组成及逻辑结构

![](https://cdn.jsdelivr.net/gh/CarberryChai/oss@master/image/3NNBHR-uKX6Py.png)

