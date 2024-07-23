# SlidingWindow

## 概念

SlidingWindow 是一種用於解決`子數組`或`子序列`等`Sub`相關問題的技巧。它利用一對指針(left, right)來動態調整窗口大小，以滿足特定的條件。

## 1. MaxAndMinSum

- **描述** : 給定一組 array 與一個參數 num，尋找長度為 num 的 subArray 的最大的總和
- **解法** : 使用 SlidingWindow。每次向右滑動一格，刪除左邊的數字，加入右邊的新數字，更新當前窗口內的總和，並比較以獲得最大總和。

## 2. MinSubarrayLength

- **描述** : 給定一組 array 與一個參數 num，尋找最短長度的 subArray 總和大於 num
- **解法** : 使用 left 與 right, right 往右移動，如果 currentSum 大於 num，即為一組，找到一組後 left 向右移，縮小窗口，嘗試是否大於 num，如果大於等於 left 繼續向右，如果小於 right 向右移動。直到遍歷完整個陣列。

## 3. UniqueLettersString

- **描述** : 給定一個字串，尋找其中字符全部相異的 subString 最大長度
- **解法** : 使用 counter + slidingWindow，當 counter 中存在該字符 left 向右移，縮小窗口，並將 counter 設為 0; 否則 right 向右移 並且 counter 設為 1，擴大窗口。

## 4. largestProduct

- **描述** : 給定的一組數字陣列與一個參數 n，尋找在陣列中連續 n 個數的最大乘積
- **解法** : 使用 SlidingWindow。定義窗口大小為 n 使用 left 與 right，來控制 subArray 的窗口範圍，計算當前窗口內數字的乘積，並更新最大乘積。右移窗口直到遍歷完整個陣列。
