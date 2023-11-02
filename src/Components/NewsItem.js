import React, { Component } from 'react'

export class NewsItem extends Component {
  render() {
    let {title,description,imageurl,newsurl} = this.props;
    return (
      <div className='my-3'>
        <div className="card">
            <img src={!imageurl?"https://www.hindustantimes.com/ht-img/img/2023/10/28/1600x900/PALESTINIAN-ISRAEL-CONFLICT-3_1698476248724_1698476277803.jpg": imageurl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">{title}.....</h5>
                <p className="card-text">{description}.......</p>
                <a rel="noreferrer" href={newsurl} target="_blank" className="btn btn-sn btn-dark">Read More</a>
            </div>
        </div>
      </div>
    )
  }
}

export default NewsItem
