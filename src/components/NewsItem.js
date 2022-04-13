import React, { Component } from 'react';

export class NewsItem extends Component {

    

    render() {
        let {title,descripiton,imageUrl,newsurl} = this.props;
        return (
            <div className='container my-5'>
                <div className="card my-5" style={{height:'360px'}}>
                    <div style={{height:'175px'}}>
                    <img src={(imageUrl==='null')?"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-6.png":imageUrl} style={{maxWidth:'100%',maxHeight:"100%"}} className="card-img-top" alt="..." />
                    </div>
                    
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{descripiton}...</p>
                        <a href={newsurl} target = "_blank" className="btn btn-sm btn-secondary w-100" >Read More</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default NewsItem;
