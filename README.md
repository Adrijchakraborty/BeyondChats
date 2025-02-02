# BeyondChats - Chatbot Integration Platform

## Overview
BeyondChats is a chatbot integration platform that allows users to set up and integrate a chatbot on their website. The platform provides a seamless UI/UX for configuring company details, monitoring website scraping progress, testing the chatbot, and integrating it into the client's website. The project is built using **ReactJS** and focuses on **responsiveness and user-friendly design**.

## Features
### **Company Setup**
- Users can enter company details (name, website URL, and description).
- Auto-fetch meta description from the provided website URL (bonus feature).

### **Website Scraping Progress**
- Displays a list of webpages with their scraping status (**Detected, Scraped, Pending**).
- Users can click on a webpage to view the scraped data chunks.

### **Chatbot Testing**
- A dummy chatbot UI is provided for testing.
- Users can share feedback if the chatbot is not working as intended.

### **Chatbot Integration**
Two integration options:
1. **Copy-paste a code snippet** into the website's `<head>`.
2. **Mail integration instructions** to the client's developer.
- Test integration to verify successful setup.

### **Integration Success/Failure UI**
- **Success UI**: Displays confetti animation, success message, and options to explore the admin panel, start talking to the chatbot, and share on social media.
- **Failure UI**: Displays an error message and a "Try Again" button.

## Technologies Used
- **Frontend**: ReactJS
- **Styling**: Tailwind CSS
- **Icons**: React Icons (`react-icons`)
- **Confetti Animation**: `react-confetti`
- **Dummy Data**: Used for website scraping progress and scraped data chunks.

## Live Demo
You can access the live demo of the project here:
[Live Site Link](#) *(Replace this with your live site link once deployed)*

## Installation
To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/Adrijchakraborty/BeyondChats
   cd beyondchats
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Run the development server:**
   ```bash
   npm run dev
   ```

4. **Open the app:**
   Visit [http://localhost:5173](http://localhost:5173) in your browser.


## Key Highlights
- **Responsive Design**: The UI is fully responsive and works seamlessly on all screen sizes.
- **User-Friendly Interface**: Intuitive design with clear instructions for each step.
- **Confetti Animation**: Adds a celebratory touch to the integration success UI.

## Future Improvements
- Integrate with a backend API for real-time website scraping and chatbot training.
- Add authentication and user accounts for saving progress.
- Implement actual chatbot functionality for testing.
- Provide more detailed analytics for scraped data.

## Contact
For any questions or feedback, feel free to reach out:

- **Email**: adrijchakraborty8@gmail.com
- **GitHub**: Adrij(https://github.com/Adrijchakraborty)

Thank you for checking out BeyondChats! 🚀

