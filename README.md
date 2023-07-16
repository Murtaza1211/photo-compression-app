# Photo Compression App

The Photo Compression App is a web application built with Node.js, Express, and Sharp that allows users to upload photos and compress them to reduce file size while maintaining acceptable image quality. This helps optimize images for web usage, resulting in faster loading times and reduced bandwidth consumption.

## Features

- Upload photos and compress them using an iterative algorithm.
- Display compressed and original image thumbnails.
- View enlarged versions of the compressed and original images.
- Limit photo uploads to a maximum file size of 5MB.

## Prerequisites

Before running the application, make sure you have the following installed:

- Node.js: [https://nodejs.org](https://nodejs.org)

## Getting Started

To run the Photo Compression App locally, follow these steps:

1. Clone the repository:
   ```shell
   git clone <repository-url>

2. Install the dependencies:
   cd photo-compression-app
   npm install


3. Start the server:
   npm start

4. Open a web browser and navigate to `http://localhost:3000` to access the application.

## Usage

1. On the homepage, click on the "Choose File" button to select a photo for compression. The selected photo should be in image format (e.g., JPG, PNG).
2. Click the "Upload" button to start the compression process.
3. The compressed image thumbnail will be displayed along with its description.
4. Click on the compressed image thumbnail to view an enlarged version of the compressed image.
5. Click on the original image thumbnail to view an enlarged version of the original image.
6. To compress another photo, refresh the page and repeat the steps.

## Contributing

Contributions are welcome! If you find any issues or would like to add new features, please submit an issue or a pull request.

