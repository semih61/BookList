                        let bookEntry = document.getElementById("bookName");
                        let addButton = document.getElementById("addButton");
                        let bookList = document.getElementById("bookList");
                        let formForBook = document.getElementById("bookAddForm");
                        
                        addButton.addEventListener("click", function(e){
                            e.preventDefault();
                            let bookName = bookEntry.value.trim();
                        
                            if(bookName.length==0){
                                return;
                            }
                            AddBook(bookName);
                            formForBook.reset();
                        });
                        
                            function AddBook(bookName){
                            let book = document.createElement("li");
                            book.classList.add("list-group-item","d-flex", "justify-content-between", "align-items-center");
                            book.innerText = bookName;
                           
                            //DELETE BUTTON
                            let deleteButton = document.createElement("button");
                            deleteButton.classList.add("btn" , "btn-danger");
                            deleteButton.innerText = ("Delete");
                            deleteButton.addEventListener("click",function(e){
                                e.preventDefault();
                                book.remove();
                            });

                            bookList.append(book);
                            book.append(deleteButton);
                            
                        }
                        