const generateQRCodeService = require('../models/generateQRCode');

const generateQRCodeController = async (req, res) => {
  if (req.body.text) {
    const result = await generateQRCodeService({text:req.body.text});
    
    if (result.statusCode == 200) {
      res.status(200).json(result);
    } else {
      res.status(400).json(result);
    }
  } else {
    res.status(400).json({
      message: 'Input text not found value.',
    });
  }
}

module.exports = generateQRCodeController;