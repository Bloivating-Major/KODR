function Question1() {
  // Divide Array Into Equal Pairs
  let nums = [3, 2, 3, 2, 2, 2];
  nums.sort((a, b) => a - b);
  let pair = 0;

  for (let i = 0; i < nums.length; i += 2) {
    if (nums[i] == nums[i + 1]) pair++;
  }

  return pair == nums.length / 2;
}

function Question2() {
  let nums = [1, 3, 2, 1, 3, 2, 2];
  let pairs = 0;
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; ) {
    if (nums[i] == nums[i + 1]) {
      pairs++;
      i += 2;
    } else i++;
  }
  let arr = new Array(2);
  arr[0] = pairs;
  arr[1] = nums.length - 2 * pairs;
  return arr;
}

function Question3() {
    let nums = [3,1,2,2,2,1,3], k= 2;
    let pair = 0;
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] == nums[j] && ((i * j) % k) == 0) {
                pair++;
            }
        }
    }
    return pair;
}

function Question4() {
  let nums = [2, 4, 1, 1, 6, 5];
  let count = 0;

  for (let i = 1; i < nums.length - 1; i++) {
    if (nums[i] == nums[i - 1]) continue;
    let next = i + 1;
    let prev = i - 1;
    while (nums[i] == nums[next]) next++;
    while (nums[i] == nums[prev]) prev--;
    if (next >= nums.length || prev < 0) continue;
    if (nums[i] > nums[prev] && nums[i] > nums[next]) count++;
    if (nums[i] < nums[prev] && nums[i] < nums[next]) count++;
  }
  // return count;
  console.log("Valleys and Hills are  ", count);
}

