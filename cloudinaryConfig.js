const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'pmsharma', 
    api_key: '137211845741169', 
    api_secret: '3EBqd1t2fgNEOayJpXrR88U5BrY' 
  });

  // uploading the image to cloudinary

  exports.uploads = (file) =>{
    return new Promise(resolve => {
      console.log("Hi");
        cloudinary.uploader.upload(file, (result) =>{
            resolve({url: result.url, id: result.public_id})
        }, {resource_type: "auto"})
    })
  }