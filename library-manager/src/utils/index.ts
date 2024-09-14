export function generateRandomId() {
  return Math.floor(Math.random() * (1 - 100) + 100);
}

export function getRandomImage() {
  const bookCovers = [
    "https://pictures.abebooks.com/isbn/9781518711374-us.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2Mus_C40tRCDOuNSkrV-Hp8zzAY6OwVtfog&s",
    "https://cdn4.libris.ro/img/pozeprod/28514/28513275-1.jpg",
    "https://cdn.dc5.ro/img-prod/3088607547-0.png",
    "https://cdn.kobo.com/book-images/a4f3a84b-fa78-43c2-819e-3c5da2205917/1200/1200/False/faust-illustrated-5.jpg",
    "https://apebook.de/wp-content/uploads/2017/08/2000_Demons_Cover.jpg",
    "https://humanitas.ro/assets/images/products/Tratat-de-istorie-a-religiilor-2022.jpg",
  ];

  return bookCovers[Math.floor(Math.random() * bookCovers.length)];
}
