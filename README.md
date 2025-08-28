# RentHome - A Home Rental Website Frontend

This is a feature-rich, frontend-only prototype for a modern home rental website called "RentHome". It was built using React and Vite.

## 🚀 Features

*   **Modern UI/UX:** A clean, professional design with a custom color palette.
*   **Component-Based Architecture:** Built with reusable React components.
*   **Dynamic Routing:** Uses `react-router-dom` for seamless navigation between pages.
*   **Browse Properties:** View all rental listings on a dedicated page.
*   **Detailed Views:** Click on any property to see a full details page with an image gallery, description, amenities, and more.
*   **Homepage Carousel:** A beautiful carousel on the homepage to showcase featured properties.
*   **Static Pages:** Includes "About Us" and "Contact Us" pages with forms.
*   **Simulated Authentication:**
    *   UI for Login and Registration pages.
    *   A simulated login flow using React Context.
    *   "Book Now" button is protected and prompts non-logged-in users to sign in.
    *   Navbar dynamically changes based on login state.

## 🛠️ Technology Stack

*   **Framework:** React 19
*   **Build Tool:** Vite
*   **Routing:** React Router DOM v7
*   **Styling:** Plain CSS with CSS Variables

## ⚙️ Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

You need to have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

### Installation & Setup

1.  **Clone the repository:**
    ```sh
    git clone <repository-url>
    ```
2.  **Navigate to the project directory:**
    ```sh
    cd <project-directory>
    ```
3.  **Install NPM packages:**
    ```sh
    npm install
    ```

### Running the Application

Once the dependencies are installed, you can run the development server:

```sh
npm run dev
```

This will start the Vite development server, typically on `http://localhost:5173`. Open this URL in your web browser to see the application.

## 📝 Notes

*   This is a frontend-only application. The data is fetched from a static `public/data.json` file.
*   The authentication and form submissions are simulations and do not connect to a real backend.
*   Property images are hot-linked from Unsplash for demonstration purposes.
