# Day 2 - Week 9

## **Understanding the Internet**

The internet is a fascinating and complex system that connects billions of devices across the globe. This guide provides a simplified yet creative breakdown of how the internet works, starting from your device and ending with successful communication.

---

## **What is the Internet?**
The internet is a global network that allows devices to communicate with each other using standardized protocols. Think of it as an information highway that connects the world, enabling seamless sharing of data.

---

## **How Does It Work?**
Let’s walk through the process step by step:

### 1. **Your Device Sends Data**
- Your mobile or computer emits **radio waves** when you browse, stream, or send data.
- These waves carry **data packets**, the smallest units of information.

### 2. **Radio Waves Travel to a Tower**
- The data packets in the form of radio waves travel to the **nearest cell tower** in your area.
- **Fun Fact:** Cell towers act as intermediaries, relaying your data to the broader internet network.

### 3. **Signal Damping**
- As radio waves travel through the air, they may **weaken (damp)** due to:
  - Distance from the tower.
  - Physical obstacles like walls or buildings.
  - Environmental conditions like rain.
- **Impact:** If your radio waves are heavily damped, you experience **poor network connectivity.**

### 4. **Signal Strength**
- **Signal strength** is determined by the number of **data packets** successfully sent and received. For example:
  - **100% Sent | 80% Received**: The signal strength is not full.

### 5. **From Tower to ISP**
- Once the tower receives your data, it converts the radio waves into **electric signals** and forwards them to your **Internet Service Provider (ISP).**
- **ISP’s Role:** The ISP routes your data to its intended destination (e.g., a website server).

### 6. **Data Validation**
- At the ISP level, your request undergoes a validation process:
  - If **valid**, the data is forwarded to the receiver.
  - If **invalid**, the request is **terminated.**

### 7. **Response Back to You**
- The server processes your request and sends the response back through the same path, completing the cycle.

---

## **The Data Transmission Path**
### Visualizing the Journey:
1. **Your Device**
2. **Radio Waves**
3. **Cell Tower**
4. **Electric Signals**
5. **Internet Service Provider (ISP)**
6. **Validation Checks**
7. **Receiver** (or termination if invalid)

---

## **Protocols at Work**
- **DHCP (Dynamic Host Configuration Protocol):** Assigns your device an IP address to identify it on the network.
- **Packets:** Small chunks of data used for efficient and reliable transmission.

---

## **Creative Analogy**
Think of the internet like a postal service:
- **Your Device:** The sender.
- **Data Packets:** Letters with your message.
- **Radio Waves and Towers:** Postmen delivering letters to the central hub.
- **ISP:** The central post office that routes your letters to the destination.
- **Validation:** Checking for a valid address before delivery.
- **Receiver:** The final recipient of your letter.

---

## **Did You Know?**
- **Signal Bars on Your Phone:** These represent the strength of your connection to the nearest tower.
- **Data Packets:** Even large files are broken into tiny packets for faster and more efficient transfer.
- **ISP's Role:** Your ISP acts as the gatekeeper, ensuring your data reaches the right destination.

---

## **Conclusion**
The internet is an incredible system powered by layers of technology, all working together to make global communication possible. Understanding its basics helps us appreciate the complexity behind a seemingly simple click!

Feel free to share this guide with friends or revisit it to strengthen your understanding!

---

## **Session 2 Questions**

### **Question 1: Checking Ascending Numbers in a String**
**Leetcode Problem 2042**
```javascript
function Question1() {
    let string = "hello world 5 x 5";
    let splitted = string.split(' ');
    console.log(splitted);
    let arr = [];
    for (let i = 0; i < splitted.length; i++) {
        if (Number(splitted[i])) {
            arr.push(Number(splitted[i]));
        }
    }
    console.log(arr);
    let isAssending = true;
    for (let i = 0; i < arr.length - 1; i++) {
        console.log(arr[i], arr[i + 1]);
        if (arr[i] >= arr[i + 1]) isAssending = false;
    }
    console.log(isAssending);
}
```

### **Question 2: Reversing Prefix of a String**
**Leetcode Problem 2000**
```javascript
function Question2() {
    let word = "abcdefd";
    let ch = "d";
    let index = 0;
    let chElem = ch.charCodeAt();
    let arr = [];
    for (let i = 0; i < word.length; i++) {
        arr.push(word[i]);
        if (word.charCodeAt(i) == chElem) {
            index = i;
            break;
        }
    }
    console.log(arr);
    let p1 = 0, p2 = arr.length - 1;
    while (p1 < p2) {
        let temp = arr[p1];
        arr[p1] = arr[p2];
        arr[p2] = temp;
        p1++;
        p2--;
    }
    console.log(arr);
}
```

### **Question 3: Reversing a String Upto a Character**
```javascript
function Question3() {
    let word = "abcdefd";
    let ch = "d";
    let index = 0;
    for (let i = 0; i < word.length; i++) {
        if (word.charAt(i) == ch) {
            index = i;
            break;
        }
    }
    let reverseSub = '';
    for (let i = index; i >= 0; i--) {
        reverseSub += word.charAt(i);
    }
    reverseSub = reverseSub + word.substring(index + 1);
    console.log(reverseSub);
}
```

### **Question 4: Verifying Ascending Numbers in a Complex String**
```javascript
function Question4() {
    let string = '1 box has 3 blue 4 red 14 green and 12 yellow marbles';
    let arr = string.split(" ");
    let temp = 0;
    let isAssending = true;
    for (let i = 0; i < arr.length; i++) {
        let word = arr[i];
        if (Number(word)) {
            if (Number(word) > temp) temp = Number(word);
            else {
                isAssending = false;
                break;
            }
        }
    }
    console.log(isAssending);
}
```

---

## **Reflection**
Today's session combined theoretical and practical learning. From understanding how the internet works to solving challenging coding questions, it was a productive day! Looking forward to continuing this momentum tomorrow.

---

