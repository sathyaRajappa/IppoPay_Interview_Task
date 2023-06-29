function partitionArray(nums) {
  const n = nums.length / 2; // Length of each array
  const sum = nums.reduce((acc, num) => acc + num, 0); // Calculate the sum of all elements

  // Create a memoization table to store already computed states
  const memo = new Map();
  function findMinDifference(index, count, sum1) {
    if (count === n) {
      const sum2 = sum - sum1;
      return Math.abs(sum1 - sum2);
    }

    if (index === nums.length) return Infinity;

    const key = `${index}-${count}-${sum1}`;

    if (memo.has(key)) {
      return memo.get(key);
    }

    // Include the current element in the first array
    const includeDiff = findMinDifference(index + 1, count + 1, sum1 + nums[index]);

    // Exclude the current element from the first array
    const excludeDiff = findMinDifference(index + 1, count, sum1);

    const minDiff = Math.min(includeDiff, excludeDiff);

    // Store the minimum difference for the current state in the memoization table
    memo.set(key, minDiff);

    return minDiff;
  }

  return findMinDifference(0, 0, 0);
}

function showNotification(result) {
  const notification = document.getElementById('notification');
  notification.style.display = 'block';
  notification.innerText = `Minimum Possible Absolute Difference is: ${result}`;
}

function runTask1() {
  const nums = [3, 9, 7, 3];
  const result = partitionArray(nums);
  showNotification(result);
}

function runTask2() {
  const nums = [-36, 36];
  const result = partitionArray(nums);
  showNotification(result);
}

function runTask3() {
  const nums = [2, -1, 0, 4, -2, -9];
  const result = partitionArray(nums);
  showNotification(result);
}
