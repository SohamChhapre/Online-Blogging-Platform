

import React from 'react';
import Banner from '../../Banner'
import Article from '../../Article'

const Articles=({articlearr,handlepagination,next_url,prev_url,editArticle,deleteArticle})=>{
    return ( 
    <div>
        
    <Banner backgroundImage="url(assets/img/home-bg.png)"
    title="Latest Blog Posts"
    subtitle="Read-It and get updated."
    />
  <main className="main-content bg-gray">
  <div className="row">
      <div className="col-12 col-lg-6 offset-lg-3">
    { articlearr && articlearr.map(article=>(<div key={article.id} ><Article  singlearticle={article}/>
        <div className="text-center">
                <button onClick={() => editArticle(article)} className="btn btn-info mr-5">Edit Article</button>
                <button onClick={() => deleteArticle(article.id)} className="btn btn-danger">Delete Article</button>
        </div>
        <hr/>
        </div>))}

     
  </div>
  </div>
  </main>
  </div>)
};
Articles.defaultProps = {
    articles: [],
    nextUrl: null,
    prevUrl: null,
  };
export default Articles;
