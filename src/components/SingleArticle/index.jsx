import React from 'react';

class SingleArticle extends React.Component {
  constructor() {
    super();
    this.state = {
      toggle: true,
      value: ''
    };
    this.onClickLike = this.onClickLike.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  onClickLike() {
    this.setState(prevstate => ({
      toggle:!prevstate.toggle}))
  }
  handleChange() {
    this.setState({value: this.refs.comment.value});
  }
  render() {
    return (
      <div>
        <header className="header header-inverse h-fullscreen pb-80" style={{backgroundImage: `url(${process.env.PUBLIC_URL}/assets/img/bg-cup.jpg)`}} data-overlay={8}>
        <div className="container text-center">
        <div className="row h-full">
          <div className="col-12 col-lg-8 offset-lg-2 align-self-center">
            <p className="opacity-70">News</p>
            <br />
            <h1 className="display-4 hidden-sm-down">We've just passed 1,000 customers!</h1>
            <h1 className="hidden-md-up">We've just passed 1,000 customers!</h1>
            <br />
            <br />
            <p>
              <span className="opacity-70 mr-8">By</span>
              <a className="text-white" href="#">Hossein Shams</a>
            </p>
            <p>
              <img className="rounded-circle w-40" src={`${process.env.PUBLIC_URL}/assets/img/avatar/2.jpg`} alt="..." />
            </p>
          </div>
          <div className="col-12 align-self-end text-center">
            <a className="scroll-down-1 scroll-down-inverse" href="#" data-scrollto="section-content">
              <span />
            </a>
          </div>
        </div>
      </div>
    </header>
        <main className="main-content">
        {/*
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Blog content
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    !*/}
        <div className="section" id="section-content">
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <p className="lead">Dynamically procrastinate professional best practices vis-a-vis next-generation content. Seamlessly extend sustainable
                  networks via plug-and-play niche markets. Progressively communicate customized alignments for client-focused
                  services. Holisticly cultivate professional mindshare with impactful niche markets. Dynamically fabricate market-driven
                  collaboration and idea-sharing with turnkey.</p>
                <hr className="w-100" />
                <p>Proactively whiteboard covalent functionalities through reliable applications. Professionally integrate 24/365
                  manufactured products rather than end-to-end collaboration and idea-sharing. Conveniently disintermediate progressive
                  scenarios via inexpensive ROI. Proactively build seamless markets rather than world-class channels. Objectively
                  disseminate multimedia based methodologies whereas robust.</p>
                <p>Compellingly plagiarize economically sound opportunities and cross-platform e-business. Completely embrace alternative
                  initiatives whereas innovative services. Holisticly e-enable one-to-one internal or "organic" sources via interactive
                  technologies. Energistically leverage other's end-to-end e-tailers with goal-oriented innovation. Objectively
                  evolve focused networks for unique methods.</p>
              </div>
            </div>
            <br />
            <p>
              <img src={`${process.env.PUBLIC_URL}/assets/img/blog-img.jpg`} alt="..." />
            </p>
            <br />
            <div className="row">
              <div className="col-12 col-lg-8 offset-lg-2">
                <p>Assertively empower customized alignments vis-a-vis go forward vortals. Completely monetize inexpensive alignments
                  whereas market positioning services. Uniquely revolutionize multifunctional strategic theme areas with adaptive
                  architectures. Interactively orchestrate next-generation content with proactive applications. Appropriately
                  initiate market-driven results through backend deliverables.</p>
                <ul>
                  <li>Energistically coordinate business relationships</li>
                  <li>Change via resource-leveling innovation</li>
                  <li>Efficiently develop fully researched experiences and integrated</li>
                  <li>Assertively empower customized alignments vis-a-vis go forward vortals</li>
                </ul>
                <p>Quickly innovate high-quality catalysts for change via resource-leveling innovation. Seamlessly expedite just
                  in time infomediaries vis-a-vis viral manufactured products. Rapidiously network synergistic leadership whereas
                  emerging data. Professionally synergize compelling partnerships vis-a-vis leading-edge e-business. Efficiently
                  develop fully researched experiences and integrated. Phosfluorescently simplify ubiquitous bandwidth without
                  client-centered information. Professionally recaptiualize flexible relationships via performance based synergy.
                  Monotonectally mesh interoperable processes through high-quality e-commerce. Dynamically build team building
                  models without 24/7 internal or "organic" sources. Compellingly incentivize e-business methods of empowerment
                  with.
                </p>
                <blockquote className="blockquote">
                  <div className="quote-sign" />
                  <p>Objectively grow out-of-the-box results with go forward methodologies. Progressively exploit dynamic functionalities
                    without ethical portals. Competently facilitate timely total linkage with.</p>
                  <footer>Someone famous in
                    <cite title="Source Title">Source Title</cite>
                  </footer>
                </blockquote>
                <p>Proactively underwhelm proactive leadership skills whereas plug-and-play paradigms. Credibly whiteboard client-centered
                  intellectual capital after B2B total linkage. Progressively innovate technically sound manufactured products
                  whereas diverse meta-services. Continually orchestrate ubiquitous core competencies rather than market positioning
                  "outside the box" thinking. Dramatically redefine out-of-the-box schemas.</p>
                <div className="gap-multiline-items-1 mt-30">
                  <a className="badge badge-pill badge-default" href="#">Record</a>
                  <a className="badge badge-pill badge-default" href="#">Progress</a>
                  <a className="badge badge-pill badge-default" href="#">Customers</a>
                  <a className="badge badge-pill badge-default" href="#">News</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
      | Comments
      |‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒‒
    !*/}
        <div className="section bt-1 bg-grey">
          <div className="container">
            <div className="align-left justify-content:left">
              <div className="align-left p-5">
                <span><h4>Comment it Out!</h4></span>
                <button onClick={this.onClickLike} className="btn btn-primary btn-sm" type="button">
                  <i className="fa fa-thumbs-o-up"></i>
                </button>
                <input className="comment" type="text" placeholder=" Try Typing Something in here.." ref="comment" style={{width: '50%',border: '2px solid #ccc',padding: '0px 0px 100px',margin: '10px 10px 10px 10px', 'border-radius': '6px'}} ></input>
                <button onClick={this.handleChange} className="btn btn-secondary" type="button" style={{'font-size':'11px','font-weight':'500'}}>
                  Comment
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
  </div>
  );
  }
}
export default SingleArticle;
