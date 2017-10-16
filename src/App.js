import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

// Stylesheet used: https://bootswatch.com/ -> flatly
class App extends Component {
  render() {
    return (
      <div className="App">
        <header> 
          <h1>Alex <strong>Dumitru</strong> <small> | Web Developer </small></h1> 

          <h3> <small>
          <a href="https://www.linkedin.com/in/alexdmtr/" target="_blank">&bull; LinkedIn</a>
            <a href="https://github.com/alex-dmtr" target="_blank">&bull; GitHub</a>
           

            </small></h3>
          </header>

        
        
        
        
        <h2 id="myguarantee">my guarantee</h2>
        
        <div className="row">
          <div className="col-sm-4 item">
            <img src="gear.png"/>
            <h3>Professional design</h3>
            <small>By using tried and tested technologies and implementing best practices, the applications I develop are guaranteed to be quality and reliable.</small>
          </div>
          <div className="col-sm-4 item">
            <img src="handshake.png"/>
            <h3>Strong communication</h3>
            <small>My experience with team projects and communication with clients makes me able to express ideas clearly and effectively.</small>
          </div>
          <div className="col-sm-4 item">
            <img src="barchart.png"/>
            <h3>Proven results</h3>
            <small>I've worked on the development of multiple web projects which are now being  succesfuly used throught Europe.</small>
          </div>
        </div>

        {/* <h2 id="mywork">my work</h2> */}

        <footer>
        <div>Icons made by <a href="https://www.flaticon.com/authors/gregor-cresnar" title="Gregor Cresnar">Gregor Cresnar</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
<div>Icons made by <a href="https://www.flaticon.com/authors/pixel-perfect" title="Pixel perfect">Pixel perfect</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
<div>Icons made by <a href="http://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>

</footer>
      </div>
    );
  }
}

export default App;
