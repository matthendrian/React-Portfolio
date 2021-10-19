import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {

    return (
        <div className="resume-section-content">
        <h2 className="mb-5">My Work</h2>

        <div className="container">
        
            <img src="MovieBlog.png" className="Portfolio" alt="MovieBlog"/>
            <div className="text-block"> 
             <h4>Movie Blog</h4>
              <p>A blog for your movie review needs.</p>
                <a href="https://github.com/eamahma/movie_blog.git">View</a>
            </div>
        </div>

        <a href="https://github.com/eamahma/movie_blog.git">Movie Blog Repo   </a>
        <a href="https://github.com/eamahma/movie_blog"> Movie Blog Webpage  </a>
        <br>
       
        </br>

        <br>
        
        </br>

        <div className="container">
           
            <img src="CoinCompare.png" alt="Example 1" class="Portfolio"/>
            <div className="text-block"> 
             <h4> Coin-Compare </h4>
             <p>A visual cryptocurrency comparison tool.</p>
               <a href="https://github.com/mlkrauz/Coin-Compare.git">View</a>
            </div>

        
        </div>
        <a href="https://github.com/mlkrauz/Coin-Compare.git">Click Here For CoinCompare</a>
       
        <br>
    
        </br>

        <div className="container">
            
            <img src="WeatherDash.png" alt="Example 2" className="Portfolio"/>
            <div className="text-block"> 
              <h4>Weather Dashboard</h4>
              <p>Find out what the weather is like near you!</p>
                <a href="https://github.com/matthendrian/HW6_WeatherDashboard.git">View</a>
            </div>
        </div>
        <a href="https://github.com/matthendrian/HW6_WeatherDashboard.git">Click Here for WeatherDash</a>
       
        <br>
        
        </br>
        

    </div>
        );
  }
}