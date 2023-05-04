//This program lets user to calculate area of circle by giving radius as parameter from command prompt

let r = process.argv[2]
let a = r * r * 3.14159
console.log(`Yarıçapı ${r} olan dairenin alanı: ${a} birim karedir!`)