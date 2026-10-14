/* ------------------------------------------------------------------
   Site settings and the list of artworks. This is the one file to edit
   when adding work.

   For each piece: drop the image into /images, then add a line below.
   width / height are the image's pixel size (they stop the page jumping
   while images load). year, medium, size and status are optional: leave
   them as "" and they simply don't appear. status can be "Available",
   "Sold" or "".
------------------------------------------------------------------- */
window.SITE = {
  name: "Ben Chatira",
  email: "ben@example.com"   // replace with the real email address
};

window.WORKS = [
  { file: "cat-and-mutton.jpg",   width: 826,  height: 1016, title: "Cat & Mutton",    year: "", medium: "", size: "", status: "" },
  { file: "street-in-orange.jpg", width: 1130, height: 846,  title: "Street in orange", year: "", medium: "", size: "", status: "" },
  { file: "field-and-lake.jpg",   width: 1094, height: 1090, title: "Field and lake",   year: "", medium: "", size: "", status: "" }
];
