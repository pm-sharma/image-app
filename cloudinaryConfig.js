const cloudinary = require('cloudinary');

cloudinary.config({ 
    cloud_name: 'ghost-1980-pm', 
    api_key: '131886776331453', 
    api_secret: 'tGRLm1lRTDR3v2CZyJNBVb_7zhE' 
  });

  // uploading the image to cloudinary

  exports.uploads = (file) =>{
    return new Promise(resolve => {
        cloudinary.uploader.upload(file, (result) =>{
            resolve({url: result.url, id: result.public_id})
        }, {resource_type: "auto"})
    })
  }
