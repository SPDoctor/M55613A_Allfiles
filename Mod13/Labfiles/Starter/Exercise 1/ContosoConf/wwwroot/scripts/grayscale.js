function createCanvas(size) {
    /// <summary>Creates a canvas used for image manipulation.</summary>

    const temporaryCanvas = document.createElement("canvas");
    temporaryCanvas.setAttribute("width", size.width);
    temporaryCanvas.setAttribute("height", size.height);
    return temporaryCanvas;
};

function getImageData(context, image) {
    /// <summary>Draws the image onto the canvas context, then returns the resulting image data.</summary>

    context.drawImage(image, 0, 0);
    return context.getImageData(0, 0, image.width, image.height);
};

export function grayscaleImage(image) {
    // Converts a colour image into gray scale.
    return new Promise(function (resolve, reject) {   
        const canvas = createCanvas(image);
        const context = canvas.getContext("2d");
        const imageData = getImageData(context, image);

        // TODO: Create a Worker that runs /scripts/grayscale-worker.js
        const worker = new Worker("/scripts/grayscale-worker.js");
        
        const handleMessage = function (event) {
            worker.removeEventListener("message", handleMessage);
            worker.terminate(); 
            
            if (event.data.error) {
                reject(new Error(event.data.error));
                return;
            }
            
            const processedImageData = new ImageData(
                event.data.data,
                event.data.width,
                event.data.height
            );
            
            context.clearRect(0, 0, canvas.width, canvas.height);
            context.putImageData(processedImageData, 0, 0);
            resolve(canvas);
        };
        
        worker.addEventListener("message", handleMessage);
        worker.addEventListener("error", reject);
        worker.postMessage(imageData);
    });
};

