const mongoose = require('mongoose');
const moment = require('moment');
const Books = require('./models/books');
console.log('--Mongoose Test--');

let connectionString = "mongodb://127.0.0.1:27017/dillman_personal_library?retryWrites=truew=majority";

mongoose.set('useUnifiedTopology', true); //sets to true so we can use the new server monitoring rather than the old. 
mongoose.set('useCreateIndex', true); //false by default when set to true the default index creation will use create index instead of insure index
mongoose.set('useFindAndModify', false); //true by default when set to false the find one and remove function will use a native find one and update/remove
mongoose.set('useNewUrlParser', true); //the underlined mongodb driver that has been nulled so the parseing needs to use the new one (forceing the new one to be used)

mongoose.connect(connectionString)
    .then(

        () => {
            console.log('Connection Successful');
            create_book();
            updateOneBook();
            deleteOneBook();
            
        }
        
    )
    .catch(
        (error) => {
            console.log('An error has occurred: ', error );
        }
    )

        let booksQuery = Books.find({});
        booksQuery.sort({title: 1, author: 1})

        let findPromise = Books.find({}).exec();
        console.log('is a promise: ' + (findPromise instanceof Promise));
        findPromise.then((Books) => {
            console.log(Books);
        })
        .catch((err)=>{
            console.log('Error: ', err);
        });
        

        function deleteOneBook(){
            console.log('Deleteing one book');
            let bookId = '5de70677942eb827004096bd';

            Books.findOneAndDelete(
                    { _id: books_id },
                    (err, deletedBooks) => {
                        if (err){
                            return console.log('Error: ', err);
                           
                        }
                        console.log(deletedBooks);
                    }
            )};
            
            

        function updateOneBook(){
            console.log('updating one book');
            let bookId = '5de70677942eb827004096bd';
            Books.findOneAndUpdate(
                { _id: books_id },
                { title: 'UPDATED'},
                { new: true},
                (err, updatedBook) => {
                    if (err){
                        return console.log('Error: ', err);
                    }
                    console.log(updatedBook);
                }

                
            )};

    function create_book() {
        console.log('test');

        const newBook = new Books({
            title: 'Foogazy', //----------FAKE BOOK WITH FAKE TITLE
            author_first: 'Braiden',
            author_last: 'Dillman',
            published: '3030',
            Illustrator: 'None Named'
           
        });


       let savePromise = newBook.save();
       console.log('is a promise: ' + (savePromise instanceof Promise));
       savePromise
        .then((savedBook) => {
            console.log('ID:' + savedBook.id);
            console.log(savedBook);
        })
        .catch((err)=>{
            console.log('Error: ', err);
        })
        
       
    };

