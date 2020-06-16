import React, { Component } from 'react';
import book from '../images/book.svg';
import './Gallery.css';

// TODO: Can this component be functional instead?
class Gallery extends Component {

  render() {
    return (
      <div style={{marginTop:20}}>{
        this.props.items.map( (item, index) => {
          let { title, imageLinks, infoLink,authors } = item.volumeInfo;
          return (
            <a
              key={index}
              className="book"
              href={infoLink}
              target="_blank"
              rel="noopener"
              >
              <img
                src={undefined !== imageLinks ? imageLinks.thumbnail : {book}}
                alt={`Pictured: The cover for the book ${title}.`}
                className="bookCover"
              />
              
              <h5 className="bookTitle">
                {title}, {authors}
              </h5>
              
              <h6>
               Author: {authors}
              </h6>
            </a>
          )
        })
      }</div>
    )
  }
}

export default Gallery;
