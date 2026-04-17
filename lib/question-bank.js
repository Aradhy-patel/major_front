export const questionBank = {
  arrays: {
    easy: [
      {
        title: "Two Sum",
        description: "Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice.",
        examples: [
          { input: "nums = [2,7,11,15], target = 9", output: "[0,1]", explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]." },
          { input: "nums = [3,2,4], target = 6", output: "[1,2]", explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]." }
        ],
        constraints: ["2 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9", "Only one valid answer exists."],
        testCases: [
          { input: "[2,7,11,15], 9", expected: "[0,1]" },
          { input: "[3,2,4], 6", expected: "[1,2]" },
          { input: "[3,3], 6", expected: "[0,1]" }
        ],
        starterCode: "function twoSum(nums, target) {\n  // Write your solution here\n  \n}"
      },
      {
        title: "Find Maximum Element",
        description: "Given an array of integers, find and return the maximum element in the array.",
        examples: [
          { input: "nums = [1, 5, 3, 9, 2]", output: "9", explanation: "9 is the largest element in the array." },
          { input: "nums = [-1, -5, -3]", output: "-1", explanation: "-1 is the largest among negative numbers." }
        ],
        constraints: ["1 <= nums.length <= 10^4", "-10^9 <= nums[i] <= 10^9"],
        testCases: [
          { input: "[1, 5, 3, 9, 2]", expected: "9" },
          { input: "[-1, -5, -3]", expected: "-1" },
          { input: "[42]", expected: "42" }
        ],
        starterCode: "function findMax(nums) {\n  // Write your solution here\n  \n}"
      },
      {
        title: "Reverse Array",
        description: "Given an array, reverse the elements in-place and return the reversed array.",
        examples: [
          { input: "nums = [1, 2, 3, 4, 5]", output: "[5, 4, 3, 2, 1]", explanation: "The array is reversed." }
        ],
        constraints: ["1 <= nums.length <= 10^4"],
        testCases: [
          { input: "[1, 2, 3, 4, 5]", expected: "[5,4,3,2,1]" },
          { input: "[1, 2]", expected: "[2,1]" },
          { input: "[1]", expected: "[1]" }
        ],
        starterCode: "function reverseArray(nums) {\n  // Write your solution here\n  \n}"
      }
    ],
    medium: [
      {
        title: "Container With Most Water",
        description: "You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).\n\nFind two lines that together with the x-axis form a container, such that the container contains the most water.\n\nReturn the maximum amount of water a container can store.",
        examples: [
          { input: "height = [1,8,6,2,5,4,8,3,7]", output: "49", explanation: "The max area is between index 1 and 8 with heights 8 and 7." }
        ],
        constraints: ["n == height.length", "2 <= n <= 10^5", "0 <= height[i] <= 10^4"],
        testCases: [
          { input: "[1,8,6,2,5,4,8,3,7]", expected: "49" },
          { input: "[1,1]", expected: "1" },
          { input: "[4,3,2,1,4]", expected: "16" }
        ],
        starterCode: "function maxArea(height) {\n  // Write your solution here\n  \n}"
      },
      {
        title: "Product of Array Except Self",
        description: "Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].\n\nYou must solve it without using division and in O(n) time complexity.",
        examples: [
          { input: "nums = [1,2,3,4]", output: "[24,12,8,6]", explanation: "For index 0: 2*3*4=24, index 1: 1*3*4=12, etc." }
        ],
        constraints: ["2 <= nums.length <= 10^5", "-30 <= nums[i] <= 30"],
        testCases: [
          { input: "[1,2,3,4]", expected: "[24,12,8,6]" },
          { input: "[-1,1,0,-3,3]", expected: "[0,0,9,0,0]" }
        ],
        starterCode: "function productExceptSelf(nums) {\n  // Write your solution here\n  \n}"
      }
    ],
    hard: [
      {
        title: "Median of Two Sorted Arrays",
        description: "Given two sorted arrays nums1 and nums2 of size m and n respectively, return the median of the two sorted arrays.\n\nThe overall run time complexity should be O(log (m+n)).",
        examples: [
          { input: "nums1 = [1,3], nums2 = [2]", output: "2.0", explanation: "merged array = [1,2,3] and median is 2." },
          { input: "nums1 = [1,2], nums2 = [3,4]", output: "2.5", explanation: "merged array = [1,2,3,4] and median is (2 + 3) / 2 = 2.5." }
        ],
        constraints: ["nums1.length == m", "nums2.length == n", "0 <= m <= 1000", "0 <= n <= 1000"],
        testCases: [
          { input: "[1,3], [2]", expected: "2" },
          { input: "[1,2], [3,4]", expected: "2.5" }
        ],
        starterCode: "function findMedianSortedArrays(nums1, nums2) {\n  // Write your solution here\n  \n}"
      }
    ]
  },
  strings: {
    easy: [
      {
        title: "Valid Palindrome",
        description: "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward.\n\nGiven a string s, return true if it is a palindrome, or false otherwise.",
        examples: [
          { input: 's = "A man, a plan, a canal: Panama"', output: "true", explanation: '"amanaplanacanalpanama" is a palindrome.' },
          { input: 's = "race a car"', output: "false", explanation: '"raceacar" is not a palindrome.' }
        ],
        constraints: ["1 <= s.length <= 2 * 10^5", "s consists only of printable ASCII characters."],
        testCases: [
          { input: '"A man, a plan, a canal: Panama"', expected: "true" },
          { input: '"race a car"', expected: "false" },
          { input: '" "', expected: "true" }
        ],
        starterCode: "function isPalindrome(s) {\n  // Write your solution here\n  \n}"
      },
      {
        title: "Reverse String",
        description: "Write a function that reverses a string. The input string is given as an array of characters s.\n\nYou must do this by modifying the input array in-place with O(1) extra memory.",
        examples: [
          { input: 's = ["h","e","l","l","o"]', output: '["o","l","l","e","h"]', explanation: "The string is reversed in place." }
        ],
        constraints: ["1 <= s.length <= 10^5", "s[i] is a printable ascii character."],
        testCases: [
          { input: '["h","e","l","l","o"]', expected: '["o","l","l","e","h"]' },
          { input: '["H","a","n","n","a","h"]', expected: '["h","a","n","n","a","H"]' }
        ],
        starterCode: "function reverseString(s) {\n  // Write your solution here\n  \n}"
      }
    ],
    medium: [
      {
        title: "Longest Substring Without Repeating Characters",
        description: "Given a string s, find the length of the longest substring without repeating characters.",
        examples: [
          { input: 's = "abcabcbb"', output: "3", explanation: 'The answer is "abc", with the length of 3.' },
          { input: 's = "bbbbb"', output: "1", explanation: 'The answer is "b", with the length of 1.' }
        ],
        constraints: ["0 <= s.length <= 5 * 10^4", "s consists of English letters, digits, symbols and spaces."],
        testCases: [
          { input: '"abcabcbb"', expected: "3" },
          { input: '"bbbbb"', expected: "1" },
          { input: '"pwwkew"', expected: "3" }
        ],
        starterCode: "function lengthOfLongestSubstring(s) {\n  // Write your solution here\n  \n}"
      }
    ],
    hard: [
      {
        title: "Minimum Window Substring",
        description: "Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window.\n\nIf there is no such substring, return the empty string.",
        examples: [
          { input: 's = "ADOBECODEBANC", t = "ABC"', output: '"BANC"', explanation: "The minimum window substring is BANC." }
        ],
        constraints: ["1 <= s.length, t.length <= 10^5"],
        testCases: [
          { input: '"ADOBECODEBANC", "ABC"', expected: '"BANC"' },
          { input: '"a", "a"', expected: '"a"' },
          { input: '"a", "aa"', expected: '""' }
        ],
        starterCode: "function minWindow(s, t) {\n  // Write your solution here\n  \n}"
      }
    ]
  },
  linkedlists: {
    easy: [
      {
        title: "Reverse Linked List",
        description: "Given the head of a singly linked list, reverse the list, and return the reversed list.\n\nNote: For this problem, represent the linked list as an array for simplicity.",
        examples: [
          { input: "head = [1,2,3,4,5]", output: "[5,4,3,2,1]", explanation: "The linked list is reversed." }
        ],
        constraints: ["The number of nodes in the list is in the range [0, 5000]."],
        testCases: [
          { input: "[1,2,3,4,5]", expected: "[5,4,3,2,1]" },
          { input: "[1,2]", expected: "[2,1]" },
          { input: "[]", expected: "[]" }
        ],
        starterCode: "function reverseList(head) {\n  // For simplicity, head is an array\n  // Write your solution here\n  \n}"
      }
    ],
    medium: [
      {
        title: "Add Two Numbers",
        description: "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit.\n\nAdd the two numbers and return the sum as a linked list (array representation).",
        examples: [
          { input: "l1 = [2,4,3], l2 = [5,6,4]", output: "[7,0,8]", explanation: "342 + 465 = 807, reversed: [7,0,8]" }
        ],
        constraints: ["Each linked list has 1 to 100 nodes.", "0 <= Node.val <= 9"],
        testCases: [
          { input: "[2,4,3], [5,6,4]", expected: "[7,0,8]" },
          { input: "[0], [0]", expected: "[0]" },
          { input: "[9,9,9], [1]", expected: "[0,0,0,1]" }
        ],
        starterCode: "function addTwoNumbers(l1, l2) {\n  // l1 and l2 are arrays representing linked lists\n  // Write your solution here\n  \n}"
      }
    ],
    hard: [
      {
        title: "Merge k Sorted Lists",
        description: "You are given an array of k linked-lists lists, each linked-list is sorted in ascending order.\n\nMerge all the linked-lists into one sorted linked-list and return it.",
        examples: [
          { input: "lists = [[1,4,5],[1,3,4],[2,6]]", output: "[1,1,2,3,4,4,5,6]", explanation: "All lists merged and sorted." }
        ],
        constraints: ["k == lists.length", "0 <= k <= 10^4"],
        testCases: [
          { input: "[[1,4,5],[1,3,4],[2,6]]", expected: "[1,1,2,3,4,4,5,6]" },
          { input: "[]", expected: "[]" },
          { input: "[[]]", expected: "[]" }
        ],
        starterCode: "function mergeKLists(lists) {\n  // lists is an array of arrays\n  // Write your solution here\n  \n}"
      }
    ]
  },
  trees: {
    easy: [
      {
        title: "Maximum Depth of Binary Tree",
        description: "Given the root of a binary tree, return its maximum depth.\n\nA binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.\n\nNote: The tree is represented as an array in level-order (null for missing nodes).",
        examples: [
          { input: "root = [3,9,20,null,null,15,7]", output: "3", explanation: "The tree has depth 3." }
        ],
        constraints: ["The number of nodes is in the range [0, 10^4]."],
        testCases: [
          { input: "[3,9,20,null,null,15,7]", expected: "3" },
          { input: "[1,null,2]", expected: "2" },
          { input: "[]", expected: "0" }
        ],
        starterCode: "function maxDepth(root) {\n  // root is array in level-order\n  // Write your solution here\n  \n}"
      }
    ],
    medium: [
      {
        title: "Binary Tree Level Order Traversal",
        description: "Given the root of a binary tree, return the level order traversal of its nodes' values (i.e., from left to right, level by level).\n\nThe tree is represented as an array in level-order.",
        examples: [
          { input: "root = [3,9,20,null,null,15,7]", output: "[[3],[9,20],[15,7]]", explanation: "Level by level traversal." }
        ],
        constraints: ["The number of nodes is in the range [0, 2000]."],
        testCases: [
          { input: "[3,9,20,null,null,15,7]", expected: "[[3],[9,20],[15,7]]" },
          { input: "[1]", expected: "[[1]]" },
          { input: "[]", expected: "[]" }
        ],
        starterCode: "function levelOrder(root) {\n  // root is array in level-order\n  // Write your solution here\n  \n}"
      }
    ],
    hard: [
      {
        title: "Binary Tree Maximum Path Sum",
        description: "A path in a binary tree is a sequence of nodes where each pair of adjacent nodes has an edge. A node can only appear once in the path.\n\nGiven the root of a binary tree, return the maximum path sum of any non-empty path.",
        examples: [
          { input: "root = [-10,9,20,null,null,15,7]", output: "42", explanation: "The optimal path is 15 -> 20 -> 7 with sum 42." }
        ],
        constraints: ["The number of nodes is [1, 3 * 10^4].", "-1000 <= Node.val <= 1000"],
        testCases: [
          { input: "[-10,9,20,null,null,15,7]", expected: "42" },
          { input: "[1,2,3]", expected: "6" },
          { input: "[-3]", expected: "-3" }
        ],
        starterCode: "function maxPathSum(root) {\n  // root is array in level-order\n  // Write your solution here\n  \n}"
      }
    ]
  },
  dp: {
    easy: [
      {
        title: "Climbing Stairs",
        description: "You are climbing a staircase. It takes n steps to reach the top.\n\nEach time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?",
        examples: [
          { input: "n = 2", output: "2", explanation: "Two ways: 1+1 or 2." },
          { input: "n = 3", output: "3", explanation: "Three ways: 1+1+1, 1+2, 2+1." }
        ],
        constraints: ["1 <= n <= 45"],
        testCases: [
          { input: "2", expected: "2" },
          { input: "3", expected: "3" },
          { input: "5", expected: "8" }
        ],
        starterCode: "function climbStairs(n) {\n  // Write your solution here\n  \n}"
      },
      {
        title: "Fibonacci Number",
        description: "The Fibonacci numbers form a sequence where each number is the sum of the two preceding ones.\n\nGiven n, calculate F(n) where F(0) = 0, F(1) = 1.",
        examples: [
          { input: "n = 4", output: "3", explanation: "F(4) = F(3) + F(2) = 2 + 1 = 3." }
        ],
        constraints: ["0 <= n <= 30"],
        testCases: [
          { input: "4", expected: "3" },
          { input: "0", expected: "0" },
          { input: "1", expected: "1" }
        ],
        starterCode: "function fib(n) {\n  // Write your solution here\n  \n}"
      }
    ],
    medium: [
      {
        title: "Coin Change",
        description: "You are given an integer array coins representing coins of different denominations and an integer amount representing a total amount of money.\n\nReturn the fewest number of coins needed to make up that amount. If not possible, return -1.",
        examples: [
          { input: "coins = [1,2,5], amount = 11", output: "3", explanation: "11 = 5 + 5 + 1" }
        ],
        constraints: ["1 <= coins.length <= 12", "1 <= coins[i] <= 2^31 - 1", "0 <= amount <= 10^4"],
        testCases: [
          { input: "[1,2,5], 11", expected: "3" },
          { input: "[2], 3", expected: "-1" },
          { input: "[1], 0", expected: "0" }
        ],
        starterCode: "function coinChange(coins, amount) {\n  // Write your solution here\n  \n}"
      },
      {
        title: "Longest Increasing Subsequence",
        description: "Given an integer array nums, return the length of the longest strictly increasing subsequence.",
        examples: [
          { input: "nums = [10,9,2,5,3,7,101,18]", output: "4", explanation: "The LIS is [2,3,7,101]." }
        ],
        constraints: ["1 <= nums.length <= 2500", "-10^4 <= nums[i] <= 10^4"],
        testCases: [
          { input: "[10,9,2,5,3,7,101,18]", expected: "4" },
          { input: "[0,1,0,3,2,3]", expected: "4" },
          { input: "[7,7,7,7,7,7,7]", expected: "1" }
        ],
        starterCode: "function lengthOfLIS(nums) {\n  // Write your solution here\n  \n}"
      }
    ],
    hard: [
      {
        title: "Edit Distance",
        description: "Given two strings word1 and word2, return the minimum number of operations required to convert word1 to word2.\n\nYou have three operations: Insert, Delete, or Replace a character.",
        examples: [
          { input: 'word1 = "horse", word2 = "ros"', output: "3", explanation: "horse -> rorse -> rose -> ros" }
        ],
        constraints: ["0 <= word1.length, word2.length <= 500"],
        testCases: [
          { input: '"horse", "ros"', expected: "3" },
          { input: '"intention", "execution"', expected: "5" }
        ],
        starterCode: "function minDistance(word1, word2) {\n  // Write your solution here\n  \n}"
      }
    ]
  },
  graphs: {
    easy: [
      {
        title: "Find if Path Exists in Graph",
        description: "There is a bi-directional graph with n vertices, where each vertex is labeled from 0 to n - 1.\n\nGiven the edges and two vertices source and destination, determine if there is a valid path from source to destination.",
        examples: [
          { input: "n = 3, edges = [[0,1],[1,2],[2,0]], source = 0, destination = 2", output: "true", explanation: "Path exists: 0 -> 1 -> 2 or 0 -> 2" }
        ],
        constraints: ["1 <= n <= 2 * 10^5", "0 <= edges.length <= 2 * 10^5"],
        testCases: [
          { input: "3, [[0,1],[1,2],[2,0]], 0, 2", expected: "true" },
          { input: "6, [[0,1],[0,2],[3,5],[5,4],[4,3]], 0, 5", expected: "false" }
        ],
        starterCode: "function validPath(n, edges, source, destination) {\n  // Write your solution here\n  \n}"
      }
    ],
    medium: [
      {
        title: "Number of Islands",
        description: "Given an m x n 2D binary grid which represents a map of '1's (land) and '0's (water), return the number of islands.\n\nAn island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.",
        examples: [
          { input: 'grid = [["1","1","0"],["1","1","0"],["0","0","1"]]', output: "2", explanation: "Two islands found." }
        ],
        constraints: ["m == grid.length", "n == grid[i].length", "1 <= m, n <= 300"],
        testCases: [
          { input: '[["1","1","0"],["1","1","0"],["0","0","1"]]', expected: "2" },
          { input: '[["1","0","1"],["0","0","0"],["1","0","1"]]', expected: "4" }
        ],
        starterCode: "function numIslands(grid) {\n  // Write your solution here\n  \n}"
      }
    ],
    hard: [
      {
        title: "Word Ladder",
        description: "Given two words, beginWord and endWord, and a dictionary wordList, return the length of the shortest transformation sequence from beginWord to endWord.\n\nEach transformation can only change one letter at a time, and each transformed word must exist in the word list.",
        examples: [
          { input: 'beginWord = "hit", endWord = "cog", wordList = ["hot","dot","dog","lot","log","cog"]', output: "5", explanation: "hit -> hot -> dot -> dog -> cog" }
        ],
        constraints: ["1 <= beginWord.length <= 10", "1 <= wordList.length <= 5000"],
        testCases: [
          { input: '"hit", "cog", ["hot","dot","dog","lot","log","cog"]', expected: "5" },
          { input: '"hit", "cog", ["hot","dot","dog","lot","log"]', expected: "0" }
        ],
        starterCode: "function ladderLength(beginWord, endWord, wordList) {\n  // Write your solution here\n  \n}"
      }
    ]
  },
  sorting: {
    easy: [
      {
        title: "Sort an Array",
        description: "Given an array of integers nums, sort the array in ascending order and return it.\n\nYou must solve the problem without using any built-in functions.",
        examples: [
          { input: "nums = [5,2,3,1]", output: "[1,2,3,5]", explanation: "Array sorted in ascending order." }
        ],
        constraints: ["1 <= nums.length <= 5 * 10^4", "-5 * 10^4 <= nums[i] <= 5 * 10^4"],
        testCases: [
          { input: "[5,2,3,1]", expected: "[1,2,3,5]" },
          { input: "[5,1,1,2,0,0]", expected: "[0,0,1,1,2,5]" }
        ],
        starterCode: "function sortArray(nums) {\n  // Implement sorting without built-in sort\n  // Write your solution here\n  \n}"
      }
    ],
    medium: [
      {
        title: "Merge Intervals",
        description: "Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.",
        examples: [
          { input: "intervals = [[1,3],[2,6],[8,10],[15,18]]", output: "[[1,6],[8,10],[15,18]]", explanation: "[1,3] and [2,6] overlap, so they are merged into [1,6]." }
        ],
        constraints: ["1 <= intervals.length <= 10^4", "intervals[i].length == 2"],
        testCases: [
          { input: "[[1,3],[2,6],[8,10],[15,18]]", expected: "[[1,6],[8,10],[15,18]]" },
          { input: "[[1,4],[4,5]]", expected: "[[1,5]]" }
        ],
        starterCode: "function merge(intervals) {\n  // Write your solution here\n  \n}"
      }
    ],
    hard: [
      {
        title: "Count of Smaller Numbers After Self",
        description: "Given an integer array nums, return an integer array counts where counts[i] is the number of smaller elements to the right of nums[i].",
        examples: [
          { input: "nums = [5,2,6,1]", output: "[2,1,1,0]", explanation: "For 5, there are 2 smaller elements (2 and 1). For 2, there is 1. For 6, there is 1. For 1, there are 0." }
        ],
        constraints: ["1 <= nums.length <= 10^5", "-10^4 <= nums[i] <= 10^4"],
        testCases: [
          { input: "[5,2,6,1]", expected: "[2,1,1,0]" },
          { input: "[-1]", expected: "[0]" },
          { input: "[-1,-1]", expected: "[0,0]" }
        ],
        starterCode: "function countSmaller(nums) {\n  // Write your solution here\n  \n}"
      }
    ]
  }
}

export function getQuestions(topic, difficulty, count) {
  const topicQuestions = questionBank[topic]
  if (!topicQuestions) return []
  
  const difficultyQuestions = topicQuestions[difficulty]
  if (!difficultyQuestions) return []
  
  const shuffled = [...difficultyQuestions].sort(() => Math.random() - 0.5)
  return shuffled.slice(0, Math.min(count, shuffled.length))
}
