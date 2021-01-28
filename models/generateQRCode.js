const QRCode = require('qrcode')

/**
 * 
 * @param {text} string form url with param
 * @returns {image} image png 
 * @usage generateQRCodeService(text)
 */
function generateQRCodeService({text}) {

  try {
    QRCode.toFile('./google-qrcode.png', text);

    return {
      statusCode: 200,
      text
    }
  } catch (err) {
    return {
      statusCode: 400,
      err
    }
  }
}

module.exports = generateQRCodeService;

// QR-Code Canvas
// var canvas = document.getElementById('canvas');
// const generateQR = async text => {
//   try {
//     await QRCode.toCanvas(canvas, text)
//   } catch (err) {
//     console.error(err)
//   }
// }