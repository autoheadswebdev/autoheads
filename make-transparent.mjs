import { Jimp } from 'jimp';

async function processLogo() {
  try {
    const inputPath = 'c:/Users/jasil/OneDrive/Desktop/AutoHeads/autoheads logo jpg.jpg.jpeg';
    const outputPath = 'c:/Users/jasil/OneDrive/Desktop/AutoHeads/public/logo.png';

    const image = await Jimp.read(inputPath);

    image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
      const r = this.bitmap.data[idx + 0];
      const g = this.bitmap.data[idx + 1];
      const b = this.bitmap.data[idx + 2];

      // Convert pure white & light gray background pixels to 100% transparent alpha 0
      if (r > 215 && g > 215 && b > 215) {
        this.bitmap.data[idx + 3] = 0; // Alpha 0
      }
    });

    await image.write(outputPath);
    console.log('Successfully created true transparent logo at public/logo.png!');
  } catch (err) {
    console.error('Error processing logo:', err);
  }
}

processLogo();
