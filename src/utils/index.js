import toast from "react-hot-toast";

const getBook = () => {
    let books = [];
    const storedItem = localStorage.getItem("books");
    if (storedItem) {
      books = JSON.parse(storedItem);
    }
    return books;
};

const saveBook = (book) =>{
    let books = getBook();
    const isExist = books.find( b => b.id === book.id);
    if(isExist){
        toast.error("already exist")
        return false;
    }
    books.push(book)
    localStorage.setItem("book", JSON.stringify(books))
    toast.success("book added successfully")
}

const deleteBook = id =>{
    const books = getBook();
    const remaining = books.filter(b => b.id !== id);
    localStorage.setItem("book", JSON.stringify(remaining));
    toast.success("book removed")
}