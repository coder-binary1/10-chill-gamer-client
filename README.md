<p align="left"> <img src="https://komarev.com/ghpvc/?username=coder-binary1&label=Profile%20views&color=0e75b6&style=flat" alt="coder-binary1" /> </p>

# Chill Gamer: A Game Review Application

**Chill Gamer** is a user-friendly web application for exploring and sharing game reviews. It allows users to add, edit, and manage their own reviews, as well as explore the trending games, manage their watchlist, and interact with other users. The platform features authentication, review management, and a responsive UI to ensure a smooth and "chill" experience.

---

## Features

- **User Authentication**: Secure login and registration with email/password or social login (Google/GitHub).
- **Add & Manage Reviews**: Logged-in users can add new reviews, edit existing ones, and delete reviews.
- **Game Watchlist**: Users can add games to their personal watchlist for future reference.
- **Explore Reviews**: View all reviews, with the ability to sort and filter based on rating, year, and genre.
- **Responsive Design**: Clean and responsive layout optimized for both desktop and mobile devices.
- **Dark/Light Theme Toggle**: Switch between dark and light themes to enhance user experience.

---

### Layout Structure

- **Navbar**:

  - Logo and website name.
  - Home, All Reviews, Add Review, My Reviews, Game Watchlist.
  - Login/Register (conditionally displayed depending on user authentication).
  - If logged in, show user avatar and log out button.

- **Home Page**:

  - Home page with a banner/slider
  - Trending Games Section
  - Review Section for recent and top-rated user reviews.
  - Trusted Partners section showcasing game industry partners.
  - Blog & News Section for the latest game news and blog posts.

- **Footer**:

  - Simple footer with copy write information & social icons.

### Pages

- **Home Page**:

  - A banner slider with at least 3 slides containing meaningful information.
  - Trusted Partners Section with a list of 6 games, including a button to explore each game's details.
  - Review Section displaying curated game reviews submitted by users, with buttons to explore detailed reviews.
  - Trusted Partners section displaying logos of trusted partners in the gaming industry.
  - Blog & News Section displaying the latest news and blog posts about games and the gaming community.

**Login & Register**:

- **Login**: Users can log in using either their email and password or through Google login for a seamless and flexible authentication experience.
- **Register**: Users can sign up by providing their name, email, password, and a photo URL.

- **Profile**: The profile page allows users to view their personal information, including:

  - **Profile Image**: Displayed for personalization, offering a visual representation of the user.
  - **Joining Date**: Shows the date the user joined the platform, highlighting their membership duration.
  - **Last Login**: Displays the time since the user's last login, giving a sense of their recent activity.

- **Add Review**:

  - Submit a review with fields for game cover image, title, description, rating, publishing year, and genres. Available exclusively to logged-in users.

- **Review Details**:

  - Show review details, including the game cover image, title, description, rating, genre, and the reviewer's name & email, along with an option to add the game to the Watchlist.

- **All Reviews**:

  - Display all user-submitted reviews in an organized card layout, featuring options to sort reviews by rating and year, and filter them by genre for a more tailored browsing experience.

- **My Reviews**:

  - Display a user's personal reviews in a table format, with options to update or delete them.
  - **Update**: Automatically pre-fills the form with the current review data.
  - **Delete**: Requests confirmation before proceeding with deletion..

- **Game Watchlist**:

  - Users can easily view and manage the games in their personalized watchlist.

- **404 Page**:
  - A dedicated 404 page for invalid routes.

---

## Misc

- Lottie React for animations
- React-tooltip for tooltips
- Dark/Light Theme toggle functionality

## Technologies Used

- **Frontend**:

<div align="left">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" alt="javascript logo"  />
  <img src="https://cdn.simpleicons.org/react/61DAFB" height="40" alt="react logo"  />
  <img src="https://reactrouter.com/_brand/React%20Router%20Brand%20Assets/React%20Router%20Logo/Light.svg" height="40" alt="react-router logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" height="40" alt="html5 logo"  />
  <img src="https://cdn.simpleicons.org/tailwindcss/06B6D4" height="40" alt="tailwindcss logo"  />
</div>

- **Backend**:
  <div align="left">
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" height="44" alt="nodejs"  />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" height="44" alt="express"  />
    <img src="https://www.vectorlogo.zone/logos/firebase/firebase-icon.svg" height="40" alt="firebase"  />
    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" height="44" alt="mongoDB"  />
  </div>

---

**Live Link**

## Setup & Installation

1. **Clone the repository**:

   ```bash
   https://github.com/coder-binary1/10-chill-gamer-client.git
   cd 10-chill-gamer-client
   npm install
   ```
