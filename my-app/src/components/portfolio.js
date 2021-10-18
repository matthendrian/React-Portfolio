import React, { Component } from 'react';
export default class Porfolio extends Component {
  render() {

    return (
        <div class="resume-section-content">
        <h2 class="mb-5">My Work</h2>

        <div class="container">
            <img src="MovieBlog.png" class="Portfolio" alt="MovieBlog"></img>
            <div class="text-block"> 
             <h4>Movie Blog</h4>
              <p>A blog for your movie review needs.</p>
                <a href="https://github.com/eamahma/movie_blog.git">View</a>
            </div>
        </div>

        <a href="https://github.com/eamahma/movie_blog.git">Movie Blog Repo   </a>
        <br>
        <a href="https://github.com/eamahma/movie_blog"> Movie Blog Webpage  </a>
        </br>

        <br>
        </br>

        <div class="container">
            <img src="CoinCompare.png" alt="Example 1" class="Portfolio"> </img>
            <div class="text-block"> 
             <h4> Coin-Compare </h4>
             <p>A visual cryptocurrency comparison tool.</p>
               <a href="https://github.com/mlkrauz/Coin-Compare.git">View</a>
            </div>

        
        </div>
        <a href="https://github.com/mlkrauz/Coin-Compare.git">Click Here For CoinCompare</a>
       
        <br>
    
        </br>

        <div class="container">
            <img src="WeatherDash.png" alt="Example 2" class="Portfolio"></img>
            <div class="text-block"> 
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