#ifndef _A_LITTLE_THING_LIST_
#include <cstddef>

template <typename T>
struct ListNode {
  T data;
  ListNode<T>* pred;  // 前驱
  ListNode<T>* succ;  // 后驱
  ListNode() {}
  ListNode(T e, ListNode<T>* p = nullptr, ListNode<T>* s = nullptr)
      : data(e), pred(p), succ(s) {}
  ListNode<T>* insertAsPred(const T& e);
  ListNode<T>* insertAsSucc(const T& e);
};

template <typename T>
class List {
 private:
  int _size;
  ListNode<T>* header;   // 头哨兵
  ListNode<T>* trailer;  // 尾哨兵
 protected:
  void init();
  int clear();

 public:
  List() { init(); }
  List(const List<T>& L);
  List(const List<T>& L, int idx, int n);  // 复制列表L中自第idx项起的n项
  ~List();
  int size() const { return _size; }
  bool empty() const { return _size <= 0; }
  T& operator[](size_t i) const;
  List<T>* first() const { return header->succ; }
  ListNode<T>* last() const { return trailer->pred; }
  int isDisordered() const;
  ListNode<T>* find(const T& e) const;    // 无序列表查找
  ListNode<T>* search(const T& e) const;  // 有序列表查找

  ListNode<T>* insertAsFirst(const T& e);  // 讲e当作首节点插入
  ListNode<T>* insertAsLast(const T& e);
  ListNode<T>* insertA(ListNode<T>* p, const T& e);  // 讲e当作p的后继插入
  ListNode<T>* insertB(ListNode<T>* p, const T& e);  // 讲e当作p的前驱插入

  T remove(ListNode<T>* p);
  void sort(ListNode<T>* p, int n);  // 列表区间排序
  void sort() { sort(first(), _size); }
  int deduplicate();
  int uniquify();  // 有序去重
  void reverse();  // 前后倒置
};

template <typename T>
void List<T>::init() {
  header = new ListNode<T>();
  trailer = new ListNode<T>();
  header->succ = trailer;
  header->pred = nullptr;
  trailer->pred = header;
  trailer->succ = nullptr;
  _size = 0;
}
template <typename T>
T& List<T>::operator[](size_t i) const {
  ListNode<T>* p = first();
  while (0 < i--) {
    p = p->succ;
  }
  return p->data;
}
#endif