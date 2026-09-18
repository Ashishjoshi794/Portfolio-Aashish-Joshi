import fs from 'fs';
import path from 'path';

const sourcePhoto = 'C:\\Users\\asus\\.gemini\\antigravity-ide\\brain\\45d666fd-2337-4472-a5e7-e47dff730a66\\.user_uploaded\\media_1788624844558.jpg';
const sourcePdf = 'C:\\Users\\asus\\.gemini\\antigravity-ide\\brain\\45d666fd-2337-4472-a5e7-e47dff730a66\\.user_uploaded\\media_1788625036557.pdf';

const targetAssetsDir = path.resolve('public/assets');
const targetCertDir = path.resolve('public/assets/certificates');
const targetResumeDir = path.resolve('public/resume');

fs.mkdirSync(targetAssetsDir, { recursive: true });
fs.mkdirSync(targetCertDir, { recursive: true });
fs.mkdirSync(targetResumeDir, { recursive: true });

try {
  if (fs.existsSync(sourcePhoto)) {
    fs.copyFileSync(sourcePhoto, path.join(targetAssetsDir, 'ashish-profile.jpg'));
    console.log('Profile photo copied successfully to public/assets/ashish-profile.jpg');
  } else {
    console.warn('Source photo not found at', sourcePhoto);
  }
} catch (e) {
  console.error('Error copying profile photo:', e);
}

try {
  if (fs.existsSync(sourcePdf)) {
    fs.copyFileSync(sourcePdf, path.join(targetCertDir, 'simplilearn-ml-python.pdf'));
    console.log('Certificate PDF copied successfully to public/assets/certificates/simplilearn-ml-python.pdf');
  } else {
    console.warn('Source PDF not found at', sourcePdf);
  }
} catch (e) {
  console.error('Error copying certificate PDF:', e);
}
