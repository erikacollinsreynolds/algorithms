/*
Approach 3: Using Breadth-First-Search
Algorithm

Another approach is to use Breadth-First-Search. Visualize the string as a tree where each node represents the prefix upto index endend. Two nodes are connected only if the substring between the indices linked with those nodes is also a valid string which is present in the dictionary. In order to form such a tree, we start with the first character of the given string (say ss) which acts as the root of the tree being formed and find every possible substring starting with that character which is a part of the dictionary. Further, the ending index (say ii) of every such substring is pushed at the back of a queue which will be used for Breadth First Search. Now, we pop an element out from the front of the queue and perform the same process considering the string s(i+1,end)s(i+1,end) to be the original string and the popped node as the root of the tree this time. This process is continued, for all the nodes appended in the queue during the course of the process. If we are able to obtain the last element of the given string as a node (leaf) of the tree, this implies that the given string can be partitioned into substrings which are all a part of the given dictionary.
*/

var wordBreak = function(s, wordDict) {
  const slength = s.length;
  let end = 0;
  // create queue(0)
  const queue = [];
  while (end < length) {
  // find letter at array[end]
      const letter = array[end];
  // find all words in dictionary that begin with a[r];
      const words = wordDict.map((word) => {
          if (letter === word[0]) return word;
      });
      if (!words.length) return false;
  // find all matching substrings and push end index into queue
     
  // pop next end off of queue and repeat until ending index is end of string
      
  } 
};