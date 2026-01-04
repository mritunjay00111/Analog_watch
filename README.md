🕒 Analog Clock (HTML, CSS & JavaScript)

A simple analog clock built using HTML, CSS, and vanilla JavaScript.
The clock displays the current system time and updates every second with smooth hand rotations.

📌 Features

Real-time analog clock

Hour, minute, and second hands

Responsive and centered layout

Pure HTML, CSS, and JavaScript (no libraries)

Uses CSS transforms for smooth rotation

🛠️ Technologies Used

HTML5 – Structure of the clock

CSS3 – Styling and positioning

JavaScript (ES6) – Time logic and hand movement

📂 Project Structure
clock-project/
│
├── index.html      # Main HTML file
├── style.css       # Clock styling
└── script.js       # JavaScript logic for time updates

🚀 How It Works

JavaScript gets the current time using the Date object.

Each hand is rotated using degrees:

Second hand → seconds × 6

Minute hand → minutes × 6 + seconds × 0.1

Hour hand → (hours % 12) × 30 + minutes × 0.5

CSS transform: rotate() is applied every second using setInterval().

▶️ How to Run the Project

Download or clone the repository

Open index.html in your browser

The clock will start automatically ⏱️

No server or setup required.

🎨 Customization Ideas

Change the clock background color

Add numbers or tick marks

Add smooth transition animations

Display digital time alongside analog

Add dark/light mode

📸 Preview

The clock appears centered on the screen with a circular face and three moving hands representing hours, minutes, and seconds.

📄 License

This project is open-source and free to use for learning and personal projects.
