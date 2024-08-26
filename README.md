# YouTube Clone

This project is a clone of the popular video-sharing platform YouTube. It is built using modern front-end technologies, including React, Redux Toolkit, TailwindCSS, and other libraries.

## Features

### YouTube Clone

The project is a replica of the YouTube platform, including its UI design and functionalities.

### YouTube Video List

The app displays a paginated list of YouTube videos fetched from the YouTube API. The list supports lazy loading to enhance performance.

### YouTube Video Preview

Clicking on a video in the list opens a preview window that displays the selected video. The preview window includes basic details of the video, such as its title, description, and view count.

### Search Suggestions

As the user types in the search bar, the app displays a dropdown list of suggested search queries. This feature enhances the user experience and makes it easier to find relevant videos.

### Optimized Search Using Caching and Debouncing

The app uses debouncing to optimize the search functionality. This means that instead of making an API call for every key press in the search bar, the app waits until the user has stopped typing before making the API call. Additionally, the app uses caching to fetch the results of previous searches faster.

### Optimized API Calls Using Debouncing

The app uses debouncing to optimize API calls throughout the app. For example, when a user scrolls through the video list, the app waits until the user has stopped scrolling before fetching more videos. This feature reduces the number of API calls made and improves performance.

### Comments on YouTube

The app includes a comments section that allows users to view and post comments on a video. The comments are fetched from the YouTube API and are displayed in a threaded view to enhance readability.

### Live Chat of YouTube - Get Data Live, Update UI Continuously Developed with API Polling

The app includes a live chat feature that allows users to view and send messages in real-time. The chat is implemented using API polling, which means that the app regularly makes API calls to fetch new messages and updates the UI accordingly.

## Usage

To use this project, follow these steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/aditya-narayan-sahoo/YouTube.git
   ```

2. Install the dependencies using `npm`:
   ```bash
   cd YouTube
   npm install
   ```

3. Create a `.env` file in the root directory and add your YouTube API key as `VITE_YT_API_KEY`:
   ```bash
   echo "VITE_YT_API_KEY=your-api-key" > .env
   ```

4. Start the development server using `npm`:
   ```bash
   npm run dev
   ```

5. Open your web browser and navigate to `http://localhost:5173`

## Credits :
- This was made with the help of  [https://namastedev.com/learn/namaste-react](https://namastedev.com/learn/namaste-react)
