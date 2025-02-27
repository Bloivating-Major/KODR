# 🔗 **Week 16 Day 4 - Session 1 (DSA: Linked List Advanced Operations)** 🚀  

## 📌 **Topics Covered:**  
✅ **Linked List Fundamentals** 🧩  
✅ **Inserting at the Beginning & End** 🔼🔽  
✅ **Deleting from the Beginning & End** ❌  
✅ **Inserting at a Specific Position** 📌  
✅ **Deleting from a Specific Position** 🚫  
✅ **Printing the Linked List** 📜  

---

## 📝 **What is a Linked List?**  
A **linked list** is a **dynamic** data structure where elements (nodes) are stored in **non-contiguous** memory locations. Each **node** consists of:  
1️⃣ A **value** (data).  
2️⃣ A **reference (next)** to the next node in the sequence.  

Unlike arrays, **linked lists** allow efficient **insertions** and **deletions** at any position.

---

## 📜 **Node Class Implementation**  
Each **Node** stores data and a reference to the next node.

```javascript
class Node {
    constructor(val) {
        this.val = val;
        this.next = null;  // Points to the next node
    }
}
```

---

## 🏗 **Linked List Implementation**  
A **Linked List** contains:  
✅ `head` (starting node).  
✅ `size` (tracks number of nodes).  
✅ **Insertion & Deletion Methods** at various positions.  

```javascript
class LinkedList {
    constructor() {
        this.head = null; // Initially, list is empty
        this.size = 0; // Number of items in the list
    }
```

---

## 🔼 **Insertion Operations**
### 1️⃣ **Insert at the Beginning**  
**Logic:**  
- Create a new node.  
- Point its `next` to the current `head`.  
- Update `head` to the new node.

```javascript
    insertAtFirst(val) {
        this.size++;
        let newNode = new Node(val);
        if (this.head === null) {
            this.head = newNode;
            return;
        }
        newNode.next = this.head;
        this.head = newNode;
    }
```

### 2️⃣ **Insert at the End**  
**Logic:**  
- If the list is empty, make `head` the new node.  
- Otherwise, traverse to the last node and update `next` to point to new node.

```javascript
    insertAtLast(val){
        this.size++;
        let newNode = new Node(val);
        if(this.head === null){
            this.head = newNode;
            return;
        }
        let current = this.head;
        while(current.next!== null){
            current = current.next;
        }
        current.next = newNode;
    }
```

### 3️⃣ **Insert at a Specific Position**  
**Logic:**  
- Validate position.  
- If position is **1**, call `insertAtFirst()`.  
- If position is **last**, call `insertAtLast()`.  
- Otherwise, traverse to the correct position and adjust `next` pointers.

```javascript
    insertAtPosition(value, position){
        if(position < 1 || this.size+1 < position){
            console.log("Invalid position");
            return;
        }
        if(position===1) {
            this.insertAtFirst(value);
            return;
        }
        if(position === this.size+1){
            this.insertAtLast(value);
            return;
        }
        this.size++;
        let newNode = new Node(value);
        let current = this.head;
        let i =1;
        while(i < position-1){
            current = current.next;
            i++;
        }
        newNode.next = current.next;
        current.next = newNode;
    }
```

---

## ❌ **Deletion Operations**
### 1️⃣ **Delete from the Beginning**
**Logic:**  
- If list is empty, print **"List is empty"**.  
- If only **one node**, set `head` to **null**.  
- Otherwise, update `head` to point to `head.next`.  

```javascript
    deleteAtFirst(){
        this.size--;
        if(this.head === null){
            console.log("List is empty");
            return;
        }
        if(this.head.next === null){
            this.head = null;
            return;
        }
        this.head = this.head.next;
    }
```

### 2️⃣ **Delete from the End**  
**Logic:**  
- If list is **empty** or has **only one node**, set `head = null`.  
- Otherwise, traverse to the **second last node** and update its `next` to `null`.

```javascript
    deleteAtLast(){
        this.size--;
        if(this.head == null || this.head.next === null){
            this.head = null;
            return;
        }
        let current = this.head;
        while(current.next.next!== null){
            current = current.next;
        }
        current.next = null;
    }
```

### 3️⃣ **Delete from a Specific Position**  
**Logic:**  
- If position is **1**, call `deleteAtFirst()`.  
- If position is **last**, call `deleteAtLast()`.  
- Otherwise, traverse to the **previous node** and update its `next` pointer.

```javascript
    deleteAtPosition(position){
        if(position < 1 || this.size < position){
            console.log("Invalid position");
            return;
        }
        if(position === 1) {
            this.deleteAtFirst();
            return;
        }
        if(position === this.size){
            this.deleteAtLast();
            return;
        }
        this.size--;
        let current = this.head;
        let i = 1;
        while(i < position-1){
            current = current.next;
            i++;
        }
        current.next = current.next.next;
    }
```

---

## 📜 **Print Linked List**
```javascript
    print() {
        let temp = this.head;
        let output = "";
        while (temp !== null) {
            output += temp.val + " → ";
            temp = temp.next;
        }
        console.log(output + "NULL");
    }
```

---

## 🏃‍♂️ **Testing Our Linked List**
```javascript
let obj = new LinkedList();

obj.insertAtFirst(10);
obj.insertAtFirst(20);
obj.insertAtFirst(30);

obj.insertAtLast(40);
obj.insertAtLast(50);

obj.print();  // Output: 30 → 20 → 10 → 40 → 50 → NULL

obj.deleteAtFirst();
obj.print();  // Output: 20 → 10 → 40 → 50 → NULL

obj.deleteAtLast();
obj.print();  // Output: 20 → 10 → 40 → NULL

obj.insertAtPosition(60, 3);
obj.print();  // Output: 20 → 10 → 60 → 40 → NULL

obj.deleteAtPosition(2);
obj.print();  // Output: 20 → 60 → 40 → NULL
```

---

## 🎯 **Key Takeaways**  
✅ **Insertion & Deletion** at the beginning, end, and specific positions.  
✅ **Time Complexity**:  
- **Insertion at Head**: `O(1)`, at Tail: `O(n)`, at Position: `O(n)`.  
- **Deletion at Head**: `O(1)`, at Tail: `O(n)`, at Position: `O(n)`.  
✅ **Maintains Order** while allowing **dynamic** insertions.  

📌 **Next Steps:**  
🔹 Implement **Doubly Linked Lists**.  
🔹 Implement **Circular Linked Lists**.  
🔹 Solve **Linked List interview problems**.  

---

🔥 **With this, you have mastered Linked List operations!** 🚀 Keep practicing! 💡

# 🚀 **Week 16 Day 4 - Session 2 (Backend: Image Upload with Multer & ImageKit Integration)** 🖼️  

## 📌 **Topics Covered:**  
✅ **Using Multer for Image Handling** 🛠️  
✅ **Memory Storage Configuration** 🔄  
✅ **Integrating ImageKit for Online Storage** ☁️  
✅ **Uploading and Storing Images Efficiently** 🚀  

---

## 🖼️ **Why Use a Third-Party Image Storage Service?**  
When working with image uploads, storing images **locally** isn't always efficient due to:  
❌ **Storage Limitations**: Large media files can **increase server load**.  
❌ **Scaling Issues**: Hosting images locally makes it **harder to scale** your application.  
✅ **Solution?** Using a service like **ImageKit** provides:  
✔ **Faster Image Delivery** via CDN.  
✔ **Optimized Image Compression**.  
✔ **Cloud Storage** that **reduces backend load**.  

---

## 🔹 **Step 1: Install Required Packages**  
Run the following command to install dependencies:  
```bash
npm install multer imagekit dotenv express
```

---

## 🔹 **Step 2: Setup `.env` File**  
Store your **ImageKit credentials** securely:  
```
IMAGEKIT_PUBLIC_KEY=your_public_key
IMAGEKIT_PRIVATE_KEY=your_private_key
IMAGEKIT_URL=https://ik.imagekit.io/your_imagekit_id
```

---

## 🔹 **Step 3: Configure Multer with Memory Storage**  
Instead of saving files **locally**, we **store them in memory** before uploading to **ImageKit**.

### 📜 **`multerConfig.js`**
```javascript
const multer = require("multer");

const storage = multer.memoryStorage(); // Store in memory buffer
const upload = multer({ storage });

module.exports = upload;
```

---

## 🔹 **Step 4: Configure ImageKit**  
### 📜 **`imagekitConfig.js`**
```javascript
const ImageKit = require("imagekit");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL,
});

module.exports = imagekit;
```

---

## 🔹 **Step 5: Create an Image Upload API**  
### 📜 **`imageUpload.controller.js`**
```javascript
const imagekit = require("../config/imagekitConfig");

module.exports.uploadImageController = async (req, res) => {
    try {
        if (!req.file) {
            return res.status(400).json({ message: "No image provided" });
        }

        const fileBuffer = req.file.buffer.toString("base64");

        const uploadedImage = await imagekit.upload({
            file: fileBuffer,
            fileName: `upload_${Date.now()}`,
        });

        res.status(201).json({
            imageUrl: uploadedImage.url,
            message: "Image uploaded successfully!",
        });

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
```

---

## 🔹 **Step 6: Setup an Image Upload Route**  
### 📜 **`imageUpload.routes.js`**
```javascript
const express = require("express");
const upload = require("../config/multerConfig");
const { uploadImageController } = require("../controllers/imageUpload.controller");

const router = express.Router();

router.post("/upload", upload.single("image"), uploadImageController);

module.exports = router;
```

---

## 🔹 **Step 7: Integrate in `app.js`**  
### 📜 **`app.js`**
```javascript
const express = require("express");
const dotenv = require("dotenv");
const imageRoutes = require("./routes/imageUpload.routes");

dotenv.config();
const app = express();

app.use(express.json());
app.use("/image", imageRoutes);

module.exports = app;
```

---

## 🔹 **Step 8: Start the Server**  
### 📜 **`server.js`**
```javascript
const app = require("./app");

app.listen(3000, () => {
    console.log("Server running on port 3000");
});
```

---

## 🎯 **Testing the API using Postman**  
1️⃣ Open **Postman** or any API testing tool.  
2️⃣ Select **POST** request.  
3️⃣ Use URL: `http://localhost:3000/image/upload`.  
4️⃣ Go to **Body** → Select `form-data`.  
5️⃣ Add a field:  
   - **Key**: `image`  
   - **Value**: Select an **image file** from your system.  
6️⃣ Click **Send**.  

✅ **Response:**
```json
{
    "imageUrl": "https://ik.imagekit.io/your_imagekit_id/upload_1712345678.jpg",
    "message": "Image uploaded successfully!"
}
```

---

## 🔥 **Benefits of Using ImageKit with Multer**  
✅ **Secure** image storage.  
✅ **Faster** image delivery via **CDN**.  
✅ **Optimized** image compression.  
✅ **No Local Storage Issues** – Reduces **server load**.  

---

## 🚀 **Final Thoughts**  
Congratulations! 🎉 You've successfully integrated **Multer + ImageKit** for **image uploads** in your backend. Now your **users can upload images seamlessly** while keeping the backend lightweight. 💡

📌 **Next Steps:**  
- 🛠️ Implement **Cloudinary / AWS S3** for alternative image hosting.  
- 🔄 Add **image compression** for optimized uploads.  
- 🔗 Connect with **React Frontend** for real-time uploads.  

🔹 **Keep coding, keep learning!** 💻🔥

# 🚀 **Week 16 Day 4 - Session 3 (DSA Revision: Selection Sort & Insertion Sort)** 🔢  

## 📌 **Topics Covered:**  
✅ **Selection Sort Algorithm** 🎯  
✅ **Insertion Sort Algorithm** 🏗️  
✅ **Sorting Step-by-Step Explanation** 🛠️  
✅ **Optimized Approach for Sorting** ⚡  

---

## 🔢 **Selection Sort: Finding the Minimum**  
📌 **Concept:**  
Selection Sort works by **finding the smallest element** and placing it at the **correct position** step by step.

📜 **Algorithm Steps:**  
1️⃣ Start from the first element.  
2️⃣ Find the **smallest element** in the remaining **unsorted** portion.  
3️⃣ Swap it with the **first unsorted element**.  
4️⃣ Repeat the process for the **next position** until the array is sorted.  

---

## 📜 **Selection Sort Code:**
```javascript
function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++) {
        let min = i; // Assume current index is minimum
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[j] < arr[min]) min = j; // Find minimum in remaining array
        }
        if (i !== min) { // Swap if needed
            let temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}

let arr = [7, 10, 12, 6, 1];
console.log("Before Sorting:", arr);
console.log("After Selection Sort:", selectionSort(arr));
```

✅ **Time Complexity:**  
- **Best Case:** `O(n²)`  
- **Worst Case:** `O(n²)`  
- **Space Complexity:** `O(1) (In-place sort)`

---

## 🔄 **Insertion Sort: Building a Sorted Array**  
📌 **Concept:**  
Insertion Sort works like sorting playing cards in your hand. It **shifts elements** to make space for the **current element** and places it at the correct position.

📜 **Algorithm Steps:**  
1️⃣ Start from the **second element**.  
2️⃣ Compare it with **previous elements**.  
3️⃣ Shift elements if needed to make space.  
4️⃣ Insert the **current element** at its correct position.  
5️⃣ Repeat for all elements.

---

## 📜 **Insertion Sort Code:**
```javascript
function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        let current = arr[i]; // Pick the current element
        let previous = i - 1; // Start comparing from the previous element
        while (previous >= 0 && arr[previous] > current) {
            arr[previous + 1] = arr[previous]; // Shift elements
            previous--;
        }
        arr[previous + 1] = current; // Place current element in correct position
    }
    return arr;
}

let arr2 = [7, 10, 12, 6, 1];
console.log("Before Sorting:", arr2);
console.log("After Insertion Sort:", insertionSort(arr2));
```

✅ **Time Complexity:**  
- **Best Case:** `O(n)` (Already Sorted)  
- **Worst Case:** `O(n²)`  
- **Space Complexity:** `O(1) (In-place sort)`

---

## 🎯 **Key Takeaways:**  
🔹 **Selection Sort**: Always swaps the **smallest element** into position.  
🔹 **Insertion Sort**: **Shifts elements** to insert elements in the correct position.  
🔹 **Insertion Sort is faster for small arrays or nearly sorted data.**  

---

## 🚀 **Final Thoughts**  
🎉 Congratulations! You've revised **Selection Sort & Insertion Sort** with **step-by-step implementation**.  
🔹 **Next Steps:**  
✅ Implement **Bubble Sort** for further comparison.  
✅ Optimize sorting by using **Merge Sort or Quick Sort**.  
✅ Solve **LeetCode sorting problems** for practice!  

💡 **Keep Learning, Keep Growing!** 💻🔥