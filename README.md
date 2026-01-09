# movie-searching-app

## 🎬 Project Description

A full-featured movie search application built with React and Redux Toolkit. This app utilizes the **OMDB API** to allow users to search for movies, filter results by type, view detailed information, and maintain a persistent list of favorites using local storage.

## ✨ Features

* **Search Functionality:** Real-time search for movies and TV series/episodes.
* **API Service Layer:** Dedicated functions (`omdbApi.js`) for fetching search results and detailed movie data.
* **Debouncing:** Implements a custom `useDebounce` hook to optimize API calls, only firing the search after the user pauses typing.
* **Redux Toolkit:** Used for robust state management:
    * `searchSlice.js`: Manages query, page, results, loading status, and error state.
    * `favoritesSlice.js`: Manages favorites list with persistence via `localStorage`.
* **Pagination:** Handles large result sets using the OMDB `&page=` parameter.
* **Filtering:** Filters search results by media type (Movie, Series, Episode)
* **Routing:** Uses `react-router-dom` to navigate between the search results and the detailed movie view (`/movie/:imdbID`).
* **Error Handling:** Catches API errors, network issues, and handles "Movie not found!" responses, displaying user-friendly messages.

## 🛠️ Technology Stack

* **Frontend:** React
* **State Management:** Redux Toolkit (@reduxjs/toolkit)
* **Routing:** React Router DOM (v6)
* **API:** OMDB API (Open Movie Database)

## 🚀 Getting Started

### Prerequisites

* Node.js (LTS recommended)



The application will now be running on `http://localhost:3000`.

---
