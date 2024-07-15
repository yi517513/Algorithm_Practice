# Search

## 概念

Search 技巧用於在數組或結構中尋找元素。目前學到的方法有線性搜尋與二元搜尋。

## 1. Linear Search

- **描述** : 線性搜尋遍歷數組的每個元素，直到找到目標或達到數組末尾 - Time complexity is O(n)
- **解法** : 從數組的第一個元素開始，依次比較每個元素與目標值，若找到則返回其 index，否則返回 -1

## 2. Binary Search

- **描述** : 二分搜索適用於"已排序"數組，通過每次將搜索範圍減半來尋找目標元素 - Time complexity is O(logn)
- **解法** : 在已排序數組中，將搜索範圍設置為整個數組。每次比較中間元素與目標值，若相等則返回其索引；若目標值小於中間值，則在左半部分繼續搜索；若目標值大於中間值，則在右半部分繼續搜索。如此循環，直到找到目標元素或搜索範圍為空。