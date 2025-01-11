function Question1() {
  // LeetCode 2078
  // Distance between 2 unique houses
  let colors = [1, 1, 1, 6, 1, 1, 1];
  let max1 = 0,
    max2 = 0;

  // Calculate max1
  for (let i = 0; i < colors.length; i++) {
    if (colors[0] != colors[i]) {
      max1 = Math.abs(0 - i);
    }
  }

  // Calculate max2
  for (let i = colors.length - 2; i >= 0; i--) {
    if (colors[i] != colors[colors.length - 1]) {
      // Fix: Compare with the last house
      max2 = Math.abs(colors.length - 1 - i);
    }
  }

  console.log(Math.max(max1, max2));
}

Question1();

function Question2(){
  // LeetCode 2037
  let seats = [3,1,5], students = [2,7,4];
  let moves = 0;
  seats.sort((a,b) => a-b);
  students.sort((a,b) => a-b);
  for(let i =0; i <seats.length; i++){
    moves += Math.abs(seats[i]-students[i])
  }
  return moves;
}