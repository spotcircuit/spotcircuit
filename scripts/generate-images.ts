import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const outDir = path.join(process.cwd(), 'public', 'images');

function ensureDir(dir: string) {
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
}

type ImgSpec = { name: string; width: number; height: number; bg: string };

const dashboardBG = '#0b1220';
const testimonialBG = '#131313';

const specs: ImgSpec[] = [
  // Dashboards (hero/images ~1200x675)
  { name: 'electrical-dashboard.jpg', width: 1200, height: 675, bg: dashboardBG },
  { name: 'plumbing-dashboard.jpg', width: 1200, height: 675, bg: dashboardBG },
  { name: 'contracting-dashboard.jpg', width: 1200, height: 675, bg: dashboardBG },
  // Testimonial thumbnails (square ~256x256)
  { name: 'electrician-testimonial.jpg', width: 256, height: 256, bg: testimonialBG },
  { name: 'plumber-testimonial.jpg', width: 256, height: 256, bg: testimonialBG },
  { name: 'testimonial-marketing.jpg', width: 256, height: 256, bg: testimonialBG },
  { name: 'testimonial-lawyer.jpg', width: 256, height: 256, bg: testimonialBG },
  { name: 'testimonial.jpg', width: 256, height: 256, bg: testimonialBG },
  { name: 'roofing-testimonial.jpg', width: 256, height: 256, bg: testimonialBG },
  { name: 'contractor-testimonial.jpg', width: 256, height: 256, bg: testimonialBG },
  { name: 'testimonial-doctor.jpg', width: 256, height: 256, bg: testimonialBG },
  { name: 'testimonial-spa.jpg', width: 256, height: 256, bg: testimonialBG },
  { name: 'testimonial-analytics.jpg', width: 256, height: 256, bg: testimonialBG },
  { name: 'testimonial-client.jpg', width: 256, height: 256, bg: testimonialBG },
  { name: 'testimonial-support.jpg', width: 256, height: 256, bg: testimonialBG },
];

async function createSolidImage(outPath: string, width: number, height: number, background: string) {
  const image = sharp({ create: { width, height, channels: 3, background } });
  // Save as JPEG with reasonable defaults
  const buf = await image.jpeg({ quality: 75 }).toBuffer();
  await fs.promises.writeFile(outPath, buf);
}

async function run() {
  ensureDir(outDir);
  for (const s of specs) {
    const outPath = path.join(outDir, s.name);
    await createSolidImage(outPath, s.width, s.height, s.bg);
    // eslint-disable-next-line no-console
    console.log('Created image:', path.relative(process.cwd(), outPath));
  }
}

run().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err);
  process.exit(1);
});
