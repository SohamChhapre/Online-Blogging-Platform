import React from 'react';
import Banner from '../../Banner'
import Article from '../../Article'

const Articles=({articlearr,handlepagination,next_url,prev_url})=>{
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
     <hr/></div>))}

     <nav className="flexbox mt-50 mb-50">
         <a className={`btn btn-white ${prev_url ? '' : 'disabled'}` }href="#" onClick={()=>handlepagination(prev_url)}>
          <i className="ti-arrow-left fs-9 mr-4" /> Next</a>
        
        <a className={`btn btn-white ${next_url ? '' : 'disabled'}  `}  href="#" onClick={()=>handlepagination(next_url)}>
        Previous <i className="ti-arrow-right fs-9 ml-4" />
          
        </a>
      </nav>
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
