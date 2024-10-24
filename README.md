# Google Drive Image Embedder

Many developers and content creators face issues when trying to embed Google Drive images into their websites. The default Google Drive links are not directly embeddable, requiring additional steps to convert them into a usable format for websites. 

This **Google Drive Image Embedder** project provides an easy and quick solution to generate embeddable links for Google Drive images. With just a few inputs, such as the Google Drive link, image dimensions (height and width), and a single click, you can create a link that’s ready to be embedded into your website.

## Features

- 🔗 **Quick Embeddable Links**: Paste your Google Drive image link and get an embeddable link for use in websites instantly.
- 📏 **Customizable Size**: Adjust the image size by specifying the height and width to fit your website’s needs.
- ⚡ **Error Handling**: Automatic validation to ensure the Google Drive link is valid and that the size inputs are correct.
- 🖱️ **Copy to Clipboard**: Once the link is generated, copy it with one click and paste it directly into your HTML or CMS.
- 💡 **Real-Time Feedback**: Error alerts and successful operations are shown to guide the user through the process.

## How It Works

The app extracts the file ID from the Google Drive image URL and generates a custom thumbnail URL that can be embedded in any website. It also provides fields to adjust the size of the image (in pixels) to ensure it fits your design requirements.

### Use Case

Imagine you have multiple images stored on Google Drive, and you want to embed them on your website. Normally, you'd need to go through a cumbersome process of converting those links manually. With this tool, you can paste the Google Drive link, specify the dimensions, and instantly get an embeddable link, ready to be inserted into your site.

## Tech Stack

- **React**: A powerful library used for building the dynamic UI components of this app.
- **Vite**: A fast and efficient development tool that serves as the build tool for this project, ensuring quick hot module reloading during development and optimized production builds.
- **TypeScript**: Provides static typing, making the code more robust and easier to maintain.
- **Tailwind CSS (optional)**: A utility-first CSS framework for quickly building custom designs without leaving your HTML.
- **Lucide Icons**: Used for icons (such as the copy and alert icons) to enhance the user interface.

## How to Use

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/google-drive-image-embedder.git
2. **Navigate to the project directory**
   ```bash
   cd google-drive-image-embedder
3. **Install dependencies**
   ```bash
   npm install
4. **Start the development server**
   ```bash
   npm run dev
5. **Enter a Google Drive image link**, set your desired width and height, and click on "Generate Embeddable Link."
6. **Copy the generated link** and paste it into your website’s HTML or CMS to embed the image.
