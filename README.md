# News Explorer

[Live Demo](https://newsexplore.netlify.app/)  
[Repository](https://github.com/prneiderball/se_project_final)

---

## Project Overview

News Explorer is a single-page React application that allows users to search for recent news articles, browse results, and save articles for later reading. The application integrates with a news API to fetch current articles and provides a user-friendly interface for exploring and organizing news content.

The project demonstrates modern React development practices including component-based architecture, client-side routing, asynchronous API communication, and dynamic UI rendering.

Key objectives:

- Demonstrate modular React component architecture
- Implement asynchronous API requests and loading states
- Build a responsive and accessible user interface
- Implement article saving and state-based UI updates

---

## Features

- **Keyword News Search**: Users can search for articles based on keywords using a news API.
- **Dynamic Results Rendering**: Articles are displayed dynamically as search results are returned.
- **Saved Articles**: Users can save articles and access them on a dedicated Saved News page.
- **Progressive Article Loading**: Initially displays a limited number of results with the option to load more.
- **Authentication UI**: Includes login, registration, and success modals.
- **Error Handling**: Displays user-friendly messages for failed API requests or invalid input.
- **Responsive Layout**: Designed to function across desktop and mobile viewports.

---

## Architecture and Technologies

- **React**: Functional components with Hooks (`useState`) for state management.
- **React Router**: Client-side routing between the search page and saved articles page.
- **Vite**: Fast development environment and build tool.
- **JavaScript (ES6+)**: Modern syntax with modular imports and Promise-based API handling.
- **CSS**: Component-based styling for layout and UI design.
- **External News API**: Fetches real-time news articles based on search queries.
- **Custom API Utilities**: Handles article saving and deletion operations.


---

## Installation

To run the application locally, ensure you have **Node.js (v16+)** and **npm** installed.

```bash
# Clone the repository
git clone https://github.com/prneiderball/se_project_final.git

# Change into the project directory
cd se_project_final

# Install dependencies
npm install

# Start the development server
npm run dev

