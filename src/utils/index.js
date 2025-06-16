import toast from "react-hot-toast";

const getStoredBooks = (key) => {
  let books = [];
  const storedItem = localStorage.getItem(key);
  if (storedItem) {
    books = JSON.parse(storedItem);
  }
  return books;
};

const saveBooksToStorage = (key, booksArray) => {
  localStorage.setItem(key, JSON.stringify(booksArray));
};

export const saveToReadList = (book) => {
  let readBooks = getStoredBooks("readBooks");
  let wishlistBooks = getStoredBooks("wishlistBooks");

  const isAlreadyRead = readBooks.find((b) => b.bookId === book.bookId);
  if (isAlreadyRead) {
    toast.error("This book is already marked as read!");
    return false;
  }

  const isAlsoInWishlist = wishlistBooks.find((b) => b.bookId === book.bookId);
  if (isAlsoInWishlist) {
    wishlistBooks = wishlistBooks.filter((b) => b.bookId !== book.bookId);
    saveBooksToStorage("wishlistBooks", wishlistBooks);
    toast("Moved from Wishlist to Read!", { icon: "📖" });
  }

  readBooks.push(book);
  saveBooksToStorage("readBooks", readBooks);
  toast.success("Book added to Read list!");
  return true;
};

export const saveToWishlist = (book) => {
  let wishlistBooks = getStoredBooks("wishlistBooks");
  let readBooks = getStoredBooks("readBooks");

  const isAlreadyWishlisted = wishlistBooks.find(
    (b) => b.bookId === book.bookId
  );
  if (isAlreadyWishlisted) {
    toast.error("This book is already in your Wishlist!");
    return false;
  }

  const isAlreadyRead = readBooks.find((b) => b.bookId === book.bookId);
  if (isAlreadyRead) {
    toast.error(
      "This book is already marked as read and cannot be added to Wishlist."
    );
    return false;
  }

  wishlistBooks.push(book);
  saveBooksToStorage("wishlistBooks", wishlistBooks);
  toast.success("Book added to Wishlist!");
  return true;
};

export const getReadBooks = () => {
  return getStoredBooks("readBooks");
};

export const getWishlistBooks = () => {
  return getStoredBooks("wishlistBooks");
};
