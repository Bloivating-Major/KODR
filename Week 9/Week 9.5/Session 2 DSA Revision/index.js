function Question1() {
  let arr1 = [1, 2, 3, 4];
  let arr2 = [2, 5, 7];
  let arr3 = new Array(arr1.length + arr2.length);
  let i = 0,
    j = 0,
    k = 0;

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) arr3[k++] = arr1[i++];
    else arr3[k++] = arr2[j++];
  }

  while (i < arr1.length) arr3[k++] = arr1[i++];

  while (j < arr2.length) arr3[k++] = arr2[j++];

  console.log(arr3);
}

Question1(); // [1, 2, 2, 3, 5, 7]

function QuestionLeetCode2(){
  let gain = [-5, 1, 5, 0, -7];
  let heigth = [];
  let total = 0;
  for(let i = 0; i < gain.length; i++){
      heigth.push(total += gain[i]);
  }
  let max = heigth[0];
  for(let i = 1; i < heigth.length; i++){
      if(heigth[i] > max) max = heigth[i];
  }
  console.log("Highest Heigth : " + max);
}

function QuestionLeetCode(){
  let gain = [-4,-3,-2,-1,4,3,2];
  let max = 0;
  let currentSum = 0;
  for(let i = 0; i < gain.length; i++){
      currentSum += gain[i];
      if(currentSum > max) max = currentSum;
  }
  console.log("Maximum Cumulative Gain : " + max);
}