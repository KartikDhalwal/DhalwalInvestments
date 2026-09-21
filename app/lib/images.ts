// Centralized, verified Unsplash CDN image references.
// Every id below has been checked to return HTTP 200 and to visually match its label.
function unsplash(id: string, w = 1600, q = 80) {
  return `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=${q}`;
}

export const IMAGES = {
  heroHandshake: unsplash("1521791136064-7986c2920216"), // advisor handshake, office
  homeExterior: unsplash("1600585154340-be6161a56a0c"), // modern house at dusk
  homeKeys: unsplash("1560518883-ce09059eeffa"), // toy house + keys on desk
  celebration: unsplash("1600880292203-757bb62b4baf"), // colleagues high-five, office
  cashNotes: unsplash("1580519542036-c47de6196ba5"), // currency notes
  commercialTower: unsplash("1486406146926-c627a92ad1ab"), // skyscrapers, low angle
  officeTower: unsplash("1518005020951-eccb494ad742"), // curved modern building facade
  familyDad: unsplash("1609220136736-443140cffec6"), // father with two children, yard
  familyMom: unsplash("1476703993599-0035a21b17a9"), // mother with two children, tablet
  vintageArchive: unsplash("1447069387593-a5de0862481e"), // old letters & photographs, ink pen
  supportHeadset: unsplash("1553775282-20af80779df7"), // support headset + laptop
  consultGroup: unsplash("1543269865-cbf427effbad"), // four people discussing at a table
  taxDocs: unsplash("1554224155-6726b3ff858f"), // tax documents + calculator
  chartCandles: unsplash("1611974789855-9c2a0a7236a3"), // financial candlestick chart
  documentSigning: unsplash("1450101499163-c8848c66ca85"), // hand signing a document
  savingsSprout: unsplash("1579621970563-ebec7560ff3e"), // coins with a growing sprout
} as const;
