import React from 'react';
import {Link} from 'react-router-dom';

const Article=({singlearticle})=>{
    return (      <article className="mt-90">
    <header className="text-center mb-40">
      <h3>
        
        <Link className="blog-single.html" to={`/article/${singlearticle.id}`}>{singlearticle.title}</Link>
      </h3>
      <div className="link-color-default fs-12">
        <a href="#">{singlearticle.Category}</a>
        <time>{singlearticle.last_updated}</time>
      </div>
    </header>
    <a href="/">
      <img className="rounded" src={singlearticle.image_url} alt="..." />
    </a>
    <div className="card-block">
      <p className="text-justify">
        {singlearticle.Content}
        {/* Together. Great. So good was saying, that can't first let called air divide stars male isn't i. Herb third let
        may fourth divide. Greater gathering land you'll i their beast have. She'd form sea it wherein fowl, spirit
        creeping living. Likeness creepeth you hath heaven. Likeness, moveth fruitful behold. Open evening a air us
        behold. Saying above moving second a subdue likeness after also second. */}
        </p>
      <p className="text-center mt-40">
        <Link className="btn btn-primary btn-round" to={`article/${singlearticle.id}`}>Read more</Link>
      </p>
    </div>
  </article>);
};

export default Article;
