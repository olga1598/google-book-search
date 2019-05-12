import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import API from "../utils/API";
import BookDetail from "../components/BookDetail/index.js";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import Nav from "../components/Nav";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";


class Books extends Component {
  state = {
    books: [],
    // title: "",
    // authors: "",
    // description: "",
    // image: "",
    // link: "",
    search: ""
  };

  // componentDidMount() {
  //   this.loadBooks();
  // }

  loadBooks = () => {
    API.getBooks()
      .then(res => {
        console.log(res);
        this.setState({ books: res.data, title: "", author: "", description: "" })
      }
        )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleSaveBook = bookData => {
    console.log(bookData);
    API.saveBook(bookData)
      .then(res => alert(`The book ${bookData.title} have been just saved`))
      .catch(err => console.log(err));
  };

  handleFormSubmit = event => {
    // When the form is submitted, prevent its default behavior, get recipes update the recipes state
    event.preventDefault();
    API.searchBook(this.state.search)
        .then(res => {
            console.log(res.data.items);
            this.setState({ books: res.data.items });
        })
        .catch(err => console.log(err));
  };

  render() {
    return (
        <Container>
            {/* <Nav /> */}
            <Row>
                <Col size="md-12">
                    <Jumbotron />
                </Col>
            </Row>
        
            <Row>
            <Col size="md-12">
                <Card heading="Search for the title here:">
                <SearchForm
                    value={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                </Card>
            </Col>
            </Row>
            <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <Card heading="Results">
                {this.state.books.map(book => (
                  <BookDetail
                    key={book.id}
                    src={book.volumeInfo.imageLinks 
                      ? book.volumeInfo.imageLinks.thumbnail
                      : "http://icons.iconarchive.com/icons/itzikgur/my-seven/256/Books-2-icon.png"}
                    title={book.volumeInfo.title}
                    authors={book.volumeInfo.authors
                      ? book.volumeInfo.authors.join(", ")
                      : "N/A"}
                    // date={book.volumeInfo.publishedDate}
                    description={book.volumeInfo.description}
                    link={book.volumeInfo.infoLink}
                    handleSaveBook={() => this.handleSaveBook({ 
                      title: book.volumeInfo.title,
                      image: book.volumeInfo.imageLinks 
                        ? book.volumeInfo.imageLinks.thumbnail 
                        : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",
                      authors: book.volumeInfo.authors,
                    //   date: book.volumeInfo.publishedDate,
                      description: book.volumeInfo.description,
                      link: book.volumeInfo.infoLink})}
                  />
                ))}
              </Card>
            ) : (
              <Card heading="Search Results"></Card>
            )}
          </Col>
        </Row>
      </Container>
      
    );
  }
}

export default Books;
