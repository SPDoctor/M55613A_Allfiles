function grayscalePixel(pixels, index) {
  const brightness = 0.34 * pixels[index] + 0.5 * pixels[index + 1] + 0.16 * pixels[index + 2];
  pixels[index] = brightness;       // red
  pixels[index + 1] = brightness;   // green
  pixels[index + 2] = brightness;   // blue
  // pixels[index + 3] is alpha, leave unchanged
}

addEventListener("message", function (event) {
  const imageData = event.data;

  // Validate input
  if (!imageData || !imageData.data) {
    console.error("Worker received invalid imageData:", imageData);
    postMessage({ error: "Invalid image data received" });
    close();
    return;
  }

  // Simulate 2-second processing delay to demonstrate background processing
  setTimeout(function () {
      const pixels = imageData.data;

      // Process each pixel
      for (let i = 0; i < pixels.length; i += 4) {
        grayscalePixel(pixels, i);
      }

      // Send back the processed data with dimensions
      postMessage({
        data: pixels,
        width: imageData.width,
        height: imageData.height
      });

      close(); // Terminate worker after processing
    }, 2000);  // 2 second delay
});