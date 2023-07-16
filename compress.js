const sharp = require('sharp');
const { createReadStream, createWriteStream, promises } = require('fs');

const compressImage = async (inputImagePath, outputSizeKB) => {
  const outputImagePath = 'compressed.jpg';
  const targetSizeBytes = outputSizeKB * 1024; // Convert outputSizeKB to bytes
  let quality = 10; // Start with a quality value of 10
  let iterations = 0;

  try {
    const inputBuffer = await promises.readFile(inputImagePath);
    let compressedImageBuffer = inputBuffer;

    const originalFileSizeKB = Math.ceil(inputBuffer.length / 1024); // Calculate original file size in KB

    while (true) {
      const outputBuffer = await sharp(compressedImageBuffer).jpeg({ quality }).toBuffer();
      const fileSizeBytes = outputBuffer.length;

      if (fileSizeBytes <= targetSizeBytes || quality >= 90) {
        compressedImageBuffer = outputBuffer;
        break;
      }

      quality += 10; // Increase quality by 10
      iterations++;

      compressedImageBuffer = outputBuffer;
    }

    await promises.writeFile(outputImagePath, compressedImageBuffer);

    const compressedFileSizeKB = Math.ceil(compressedImageBuffer.length / 1024); // Calculate compressed file size in KB

    console.log(`Original image size: ${originalFileSizeKB} KB`);
    console.log(`Compression iterations: ${iterations}`);
    console.log(`Final image size: ${compressedFileSizeKB} KB`);

    if (compressedImageBuffer.length > targetSizeBytes) {
      throw new Error('Failed to compress image within the target file size.');
    }

    return compressedImageBuffer;
  } catch (error) {
    console.error(error); // Log the detailed error message
    throw new Error('Failed to compress image. Please check the server logs for more details.');
  }
};

module.exports = { compressImage };
