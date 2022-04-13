import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types';



export class News extends Component {

  static defaultProps = {
    country : 'in',
    pageSize : 8,
    category : 'general'
  }
  static propTypes = {
    country : PropTypes.string,
    pageSize : PropTypes.number ,
    category : PropTypes.string
  }

  constructor() {
    super();
    console.log("Hello I am a constructor from News component");
    this.state = {
      articles: [],
      loading: false,
      content:false,
      page:1
    };
  }

  async componentDidMount(){
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea606af6db3a4409b202bda0a1ec9231&page=1&pageSize=${this.props.pageSize}`
      {this.setState({loading:true})}
      let data = await fetch(url);
      let parseData = await data.json()
      console.log(parseData)
      this.setState({articles:parseData.articles,totalResults:parseData.totalResults,loading:false})
  }


  handleNextClick = async () => {
      if (this.state.page+1 <= ( Math.ceil(this.state.totalResults/this.props.pageSize))){

          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea606af6db3a4409b202bda0a1ec9231&page=${this.state.page+1}&pageSize=${this.props.pageSize}`
          {this.setState({loading:true})}
          let data = await fetch(url);
          let parseData = await data.json()
          console.log(parseData)
          
      
              this.setState({
                  page:this.state.page + 1,
                  articles:parseData.articles,
                  loading : false,
              })
      } 
  }

  handlePreviousClick = async () => {
      if (this.state.page-1>=1){

          let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=ea606af6db3a4409b202bda0a1ec9231&page=${this.state.page-1}&pageSize=${this.props.pageSize}`

          {this.setState({loading:true})}
          let data = await fetch(url);
          let parseData = await data.json()
          console.log(parseData)
              this.setState({
                  page:this.state.page - 1,
                  articles:parseData.articles,
                  loading:false
              })
      }
  }

  render() {
    return (
      <div className="container my-5">
        <h1 className="text-center">Daily News - Top Headlines</h1>
        
        {!(this.state.loading) && <div className="row">
          {this.state.articles?this.state.articles.map((element) => {
            return (
              <div
                className="col-xxl-4 col-lg-4 col-md-6 col-sm-6 col-xs-12"
                key={element.url}
              >
                <NewsItem
                  title={element.title?element.title.slice(0,40):""}
                  descripiton={element.description?element.description.slice(0,55):""}
                  imageUrl={element.urlToImage}
                  newsurl={element.url}
                />
              </div>
            );
          }): document.body.replaceWith(`Your Todays API Limit Got Exhausted, Now Come Tomorrow!!!`)}
        </div>}
        {this.state.loading && <Spinner/>}
        <div className="container d-flex justify-content-between mx-2 my-5" id="pager">
        <button disabled = {this.state.page<=1} type="button" class="btn btn-lg btn-secondary w-25" onClick={this.handlePreviousClick}> &larr; Previous</button>
        <button disabled = {this.state.page >= ( Math.ceil(this.state.totalResults/this.props.pageSize))} type="button" class="btn btn-lg btn-secondary w-25" onClick={this.handleNextClick}>Next &rarr;</button>
        </div>
      </div>
    );
  }
}

export default News;
