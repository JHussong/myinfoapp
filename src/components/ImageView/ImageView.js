import React from 'react';
import './ImageView.css';
import { Link } from 'react-router-dom';

const ImageView = (props) => {
    //console.log(props)

    const { largeImageURL: image, tags, user: owner, pageURL } = props.location.state.image

    return (
        <div>
             <div className="container">
                <div className="image-container">
                    <img src={image} alt={tags} className="img" />
                    <div className="imageView__copyright">
                    <p>&copy;pixabay</p>
                    </div>
                    <div className="imageView__text">
                        <h4>Credit: <span>{owner}</span></h4>
                        <h4>Download: <span><a target="_blank" rel='noopener noreferrer' href={pageURL }>{ pageURL.substring(0, 10) }...[VIEW FULL LINK]</a></span></h4>
                        <button className="button">
                        <Link to="/">Home</Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default ImageView;