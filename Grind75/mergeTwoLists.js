var mergeTwoLists = function(list1, list2) {
  // declare a new Node
  let head;
  let tail;
  // iterate through LL (while both lists exist)
  while (list1 && list2) {
      // CONDITIONALS
      // Compare list1.val and list2.val
      if (list1.val > list2.val){
         if (!head) {
          head = list2;
          tail = head;
         } else {
          tail.next = list2;
          tail = tail.next;
         }
          list2 = list2.next;
      } else {
          if (!head) {
          head = list1;
          tail = head;
         } else {
          tail.next = list1;
          tail = tail.next;
         }
          list1 = list1.next;
      }
  }
  // once one list has ended, append other list to new node list
  list1 ? tail.next = list1 : tail.next = list2;
  // return head of new node list
  return head;
};