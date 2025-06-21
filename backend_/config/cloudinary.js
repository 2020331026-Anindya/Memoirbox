const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: 'dnbozz7om',
  api_key: '615399697942796',
  api_secret: 'Tgy54rj7qdSuPahgT9cQnasdfco',
  folder: 'MemoirBoxNode'
});

module.exports = cloudinary; 