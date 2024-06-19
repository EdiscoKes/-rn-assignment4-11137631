# ID: 11137631
# rn-assignment4-11137631
# Jobizz Mobile Application

This project is a mobile application built using React Native and Expo. The application provides a job listing platform where users can log in, view featured and popular jobs, and get job details. The app is styled to closely match the provided UI design and makes use of custom components throughout the application.

## Features

- **Login Screen:** Accepts user name and email and passes them to the home screen upon login.
- **Home Screen:** Displays the user's name and email.
- **Job Cards:** Functional components for popular and featured job cards, accepting props for card details.
- **Custom Components:** Consistent use of custom components throughout the application.
- **Responsive Design:** Styles closely match the provided UI design.


## Components

### LoginScreen
- **Description**: The `LoginScreen` component allows users to log in to the application by entering their name and email. Upon pressing the login button, the user's name and email are passed to the `HomeScreen`.
- **Usage**:
 1. Login: Start the app and navigate to the LoginScreen. Enter your name and email and press the login button.
 2. Home Screen: After logging in, you will be taken to the HomeScreen where you can see your name, email, search bar, and job listings.
Job Listings: Scroll through the featured and popular job listings. Each job card displays job title, salary, and location.

### Home Screen

The home screen displays the user's name and email passed from the login screen.

### Job Card Component

A reusable component for displaying job details. It accepts props for the job title, company, location, and other relevant details.

### Popular Jobs

A section displaying at least 8 different job cards marked as popular.

### Featured Jobs

A section displaying at least 8 different job cards marked as featured.

## Installation and Setup

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/yourusername/job-application.git
   cd job-application

# SCREEN SHOT OF THE VARIOUS PAGES
### Login Page
![Signin](https://github.com/EdiscoKes/rn-assignment4-11137631/assets/151837632/05b9c448-23cd-4369-9eec-1ec5c02367f5)

### Home Screen
![WhatsApp Image 2024-06-19 at 18 41 04_372ad524](https://github.com/EdiscoKes/rn-assignment4-11137631/assets/151837632/5c457c2f-605e-4e77-81bd-900a31b37b63)
![WhatsApp Image 2024-06-19 at 18 41 04_c21ec25d](https://github.com/EdiscoKes/rn-assignment4-11137631/assets/151837632/16c88b98-3c7d-41cd-a338-5098f65a8e81)
![WhatsApp Image 2024-06-19 at 18 41 04_36642056](https://github.com/EdiscoKes/rn-assignment4-11137631/assets/151837632/23aa9892-d43a-4a85-b6a1-9d822f1d61f5)





