
<head>
    <meta charset="UTF-8">
    <title>Josephine Baggen</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">

    </head>



    
    <style>


        @import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');
    
        html {
  scroll-behavior: smooth;
    }
    body {
    margin: 0;
    scroll-behavior:smooth;
    padding: 0;
    background-color: transparent;
    background-image: url('https://drive.google.com/uc?id=1A28yYcYfwJQBGyXmPoX2fvEo5lTc8R-L');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    color: #f5f5f5; /* Creme white text color */
    font-family: 'Montserrat', sans-serif;
    min-height: 100vh; /* Ensure minimum height is 100% of the viewport height */
}
.all {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.all p{
    font-size: 2vw;

}

.section {
    height: 100vh; /* Set the height of each section to cover the full viewport height */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 13vw 13vw;
}



.navbar {
    display: flex;
    justify-content: center;
    font-family: 'Montserrat', sans-serif;
    padding: 1vh;
    font-size: 1.7vw;
    position: fixed;
    width: 100%;
    background-color: rgba(0, 0, 0, 0); /* Semi-transparent background for navbar */
}

.navbar a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    font-weight: bold;
}

.navbar a:hover {
    color: #66D9EF;
}




.contact-icons {
    display: flex;
    justify-content: center;
}

.contact-icons a {
    display: inline-block;
    font-size: 40px;
    margin: 0 20px;
    color: white;
    transition: color 0.5s ease;
}

.contact-icons a:hover {
    color: #66D9EF; /* Change color on hover (you can adjust the color) */
}






.leiden-container img {
  margin-top: 15px;
}

.yale-container img {
  margin-top: 10px;
}

.leiden-container img, .yale-container img {
    background-color: rgba(0,0,0,0.2);
    width: 25vw;
    height: auto;
   
}



.profile-container {
    display: flex;
    align-items: flex-start;

}

.profile-container img {
    padding-top: 5vh;
    width: 25vw;
    height: auto;
}


















.iframe {
    height: 100%;
    padding-top: 4vh;
    padding-bottom: 10vh;
}





.pdfs {
    margin: 10px;
    width: 90%;
    height: auto; /* Maintain aspect ratio */
}
.pdf {
    margin: 10px;
    width: 80%; /* Set the width to fill the container */
    height: 600px; /* Set the fixed height or adjust as needed */
}







.footer {
    color: white;
    text-align: center;
    padding: 20px 0;
padding-bottom: 20px;
    bottom: 0;
    width: 100%;
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

/* Style the footer text */
.footer p {
    margin: 5px 0;
}

/* Style the current year text */
#currentYear {
    font-weight: bold;
}


#contact.section {
    padding-bottom: 50vh;
}

#about.section {
    padding-top: 50vh;
}

#resume.section {
    padding-bottom: 60vh;
}













@media screen and (min-width: 300px) {
            .all h2{
    font-size: 5vw;
}
    .all p{
    font-size: 3vw;

}

.navbar{
    font-size: 3vw;
}


}



@media screen and (min-width: 600px) {
            .all h2{
    font-size: 3vw;
}
    .all p{
    font-size: 2vw;

}



    .navbar{
    font-size: 1.6vw;
}


#contact.section {
    padding-top: 150vh;
}

        }


    @media screen and (min-width: 800px) {
            .all h2{
    font-size: 2.5vw;
}
    .all p{
    font-size: 1.5vw;

}
        }

        @media screen and (min-width: 1200px) {
            .all h2{
    font-size: 2vw;
}
.navbar{
    font-size: 1vw;
}
.all p{
    font-size: 1vw;

}
        }







    .moon-container {
    position: relative;
    top: 20px;
    width: 200px; /* Set the width and height of the moon container */
    height: 200px;
}

.moon {
    width: 100%; /* Set the width and height of the moon */
    height: 100%;
    background: url('https://drive.google.com/uc?id=1_D7Xgy4zrn9l230srR4preNKYRV1xAs3') center center/cover no-repeat; /* Replace 'moon-image-url.jpg' with the URL of your moon image */
    position: absolute;
    top: 0;
    left: 0;
    transition: filter 0.3s ease; /* Add a transition effect for the glow */
   z-index: 1;
}

.circle {
    width: 80%; /* Set the width and height of the circle */
    height: 80%;
    border-radius: 50%; /* Make it a circle */
    background-color: transparent;
    border: 3px solid transparent; /* Set the border color and width */
    position: absolute;
  left: 98px;
  top: 102px;
    transform: translate(-50%, -50%);
    transition: width 0.3s ease, height 0.3s ease; /* Add a transition effect for the circle */

}

.moon-container:hover .moon {
    filter: brightness(1.6); /* Add a glow effect to the moon when hovered */
}

.moon-container:hover .circle {
    width: 150px; /* Adjust the circle size when hovered */
    height: 150px;
}

/* Style the circle as a hyperlink */
.circle a {
    display: block;
    width: 100%;
    height: 100%;
    text-decoration: none;
}
    

.pdf-link {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        visibility: hidden;
        text-decoration: none;
        color: #fff;
    }


    .moon-container:hover .circle {
        box-shadow: 0 0 20px 10px rgba(255, 255, 255, 0.7); /* Glow effect when hovering over the moon */
    }

    .moon-container:hover .pdf-link {
        visibility: visible; /* Show the link when hovering over the moon */
    }



</style>
<html lang="en">

<body>
    <div class="navbar">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#resume">Resume</a>
        <a href="#works">Works</a>
        <a href="#contact">Contact</a>
    </div>
<div class="all">
    <div class="section" id="home">
        <h2>Josephine Baggen</h2>
        <p>Welcome to my personal website! I'm Josephine, a dedicated researcher and Ph.D. student at Yale University. My passion for astronomy ignited in Leiden, where I earned both my bachelor's and master's degrees. Explore my journey through the cosmos and my ongoing research below</p>
    </div>

    <div class="section" id="about">
        <h2>About Me</h2>
        <p>I'm Josephine, a 24-year-old researcher from the Netherlands with a deep fascination for astronomy. After completing my bachelor's and master's degrees in Leiden, I took the leap to Yale University, where I'm currently pursuing my Ph.D. My curiosity about the universe and my determination to unravel its mysteries drive my research. Learn more about my academic journey and interests here.</p>
        <div class="profile-container">
            <img src="https://drive.google.com/uc?id=1kX1wPutJ0IXVpl6jwLav0yCFbzkJ2o6A" alt="Profile ">
        </div>
        <div class="leiden-container">
            <img src="https://drive.google.com/uc?id=1TC7QDs1mmwIg0eVVml-2xVVn4Z-DVnuc" alt="Leiden University"> 
        </div>
        
        <div class="yale-container">
            <img src="https://drive.google.com/uc?id=13tsfW6P-bp50b3j_Ua6uqJxp0ZjCbidd" alt="Yale University">
        </div>
        
       
        
        
        
    </div>
    
    <div class="section" id="resume">
        <h2>My Resume</h2>
        <p>With pride, I present my academic background and achievements. From my bachelor's and master's degrees in astronomy to my current Ph.D. studies at Yale University, my odyssey in the realm of astronomy has led me to fascinating discoveries and challenging projects. Take a peek into my CV to delve deeper into my professional experiences.</p>
    
        <div class="moon-container">
            <a href="https://drive.google.com/file/d/16kzLSbKJOt5ZvKuQ40zG6eunJI42y4tY/view?usp=sharing">
            <div class="moon"></div>
        </a>
            <div class="circle"></div>
        
        
        </div>
        
    </div>
    
    <div class="section" id="works">
        <h2>My Works</h2>
        <p>In this section, you can catch a glimpse of my research and academic projects. Each experiment and discovery brings me closer to understanding the universe. Explore my work and my contributions to the world of astronomy. Together, we venture into the boundaries of the cosmos.</p>
        <!-- svelte-ignore a11y-missing-attribute -->
        <iframe src="https://www.linkedin.com/embed/feed/update/urn:li:share:7070169303987179520" frameborder="no"  class="iframe"></iframe>
        


        
        
        <div class="pdfs">
            <div class="pdf1">
                <h3> First Publication</h3>
                <iframe src="https://docs.google.com/viewer?url=https://drive.google.com/uc?id=16kzLSbKJOt5ZvKuQ40zG6eunJI42y4tY&embedded=true" class="pdf"></iframe>
            </div>
            <div class="pdf2">
                <h3> Second Publication</h3>
                <iframe src="https://docs.google.com/viewer?url=https://drive.google.com/uc?id=16-M0tKXeyCNcamHlRQ83aBSQQcx5T5wt&embedded=true" class="pdf"></iframe>
            </div>
        </div>
        

          
       
      





    </div>
    
    <div class="section" id="contact">
        <h2>Contact Me</h2>
        <p>Do you have inquiries about my research, wish to collaborate, or just want to say hello? Feel free to get in touch. I cherish every opportunity to discuss astronomy, science, and the beauty of the universe. Let's explore the stars together!</p>
    
        <div class="contact-icons">
            <a href="mailto:baggen@strw.leidenuniv.nl" target="_blank">
                <i class="fas fa-envelope"></i>
            </a>
            <a href="https://www.facebook.com/josephine.baggen/?locale=nl_NL" target="_blank">
                <i class="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/in/josephine-baggen-713994131" target="_blank">
                <i class="fab fa-linkedin"></i>
            </a>
        </div>
    
    </div>
    
   
    


</div>











<footer class="footer">
    <div class="container">
        <p>&copy; 2023 Josephine Baggen. All rights reserved.</p>
        <p id="currentYear"></p>
    </div>
</footer>


</body>

</html>






