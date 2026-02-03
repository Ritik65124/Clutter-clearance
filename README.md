# 📁 Clutter Clearance – Node.js Directory Organizer

Clutter Clearance is a Node.js command-line utility that helps you clean and organize cluttered directories by automatically sorting files into folders based on their file extensions.

---

##  Features

- Organizes files by file extension
- Automatically creates folders if they don’t exist
- Skips directories and system files
- Ignores `.js` and `.json` files
- Simple and fast command-line usage
- Beginner-friendly Node.js project

---

## 🛠 Tech Stack

- Node.js
- fs / fs.promises
- path

---

## 📂 Example

### Before
VIDEO 91/
├── name.jpg
├── name.png
├── this.pdf
├── ritik.zip
├── Rohan.zip
├── catch.jpg
├── ritik.pdf


### After
VIDEO 91/
├── jpg/
│ ├── name.jpg
│ └── catch.jpg
├── png/
│ └── name.png
├── pdf/
│ ├── this.pdf
│ └── ritik.pdf
├── zip/
│ ├── ritik.zip
│ └── Rohan.zip



---

## ⚙️ Installation

git clone https://github.com/Ritik65124/clutter-clearance.git

cd clutter-clearance
npm install

---

## ▶ Usage

node index.js "D:\Desktop\sigma web devlopment course\VIDEO 91"

---

## 🧠 How It Works

- Reads files from the given directory
- Extracts file extensions
- Creates folders based on extensions
- Moves files into corresponding folders

---

## 📌 Future Improvements

- Group files by category (Images, Videos, Documents)
- Recursive directory support
- Dry-run mode
- CLI flags

---

## 📄 License

MIT License
