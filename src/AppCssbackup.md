#root {
  margin: 0 ;
  font-family: 'Inter', sans-serif;
}

/* HEader section */
header{
  margin: 0;
  box-sizing: border-box;
  padding: 0.5em 4em;
  background: #0c0c0ce3;
  height: 70px;
  width: 100%;
  color: #919191;
  display: flex;
  justify-content: space-between;

}
.active{
  text-decoration: none;
  color: #EF233C;
  padding: 1rem;
  transition: 0;
  min-width: 200px;
}
.inactive{
  color: #d4d4d4;
  text-decoration: none;
  padding: 1rem;
  transition: 0;
}

nav{
  width: 204.65px;
}
.logo{
  align-self: center;
}
header img{
  height: 40px;
}
.search-bar {
  position: relative;
}

.icon {
  cursor: pointer;
  position: absolute;
  top: 47%;
  left: 0;
  transform: translateY(-50%);
  padding: 12px 15px 13px 11px;
}

.input-text {
  font-size: 0.785rem;
  padding: 8px 6px 8px 35px;
  border-bottom-left-radius: 1em;
  border-top-left-radius: 1em;
  border: 1px solid #464646;
  background-color: transparent;
}
.input-text:focus {
  outline: none;
  border: 1px solid #EF233C;
}

.search-btn{
  padding: 8.5px 6px 8px 6px;
  background: #464646;
  border: 0;
  border-bottom-right-radius: 1em;
  border-top-right-radius: 1em;
}

.search-btn:active{
  color: #EF233C;
}


.left-header{
  display: flex;
  align-items: center;
}
.authentication > *{
  box-sizing: content-box;
  text-decoration: none;
  padding: 0 10px;
  color: #d4d4d4;
  
}
.authentication{
  margin-left: 2rem;
}
.movie-detail-title{
  line-height: 2.5rem;
}
/* Movie */

main {
  max-width: 1280px;
  margin: auto;
  padding-top: 3em;
}
.main{
    max-width: 1280px;
    margin: auto;
    padding-top: 3em;
}
.movie-container{
  padding: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-column-gap: 2em;
  grid-row-gap: 1em;
}
.movie-item-bottom {
  padding-left: 5px;

}

.movie-year {
  font-size: 0.875rem;
  font-weight: 200;
  margin-top: 0.2rem;
}

.movie-title {
  font-size: 1.2rem;
  margin-bottom: 0;
}
.movie-item{
  position: relative;
  width: 300px;
  height:409px;
  border: 3px solid white;
}
.movie-item img {
  display: block;
  height: 100%;
  width: 300px;
  object-fit: cover;
  transition: .5s ease;
  backface-visibility: hidden;
  

}
.movie-item:hover{
  border: 3px solid rgb(239, 35, 60);
  transition: .5s ease;
}

.middle {
  transition: .5s ease;
  opacity: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  text-align: center;
}

.movie-item:hover .image {
  opacity: 0.3;
}

.movie-item:hover .middle {
  opacity: 1;
}

.text {
  text-decoration: none;
  background-color: #EF233C;
  color: white;
  font-size: 16px;
  padding: 16px 32px;
}


/* browse buttons */
.changeCounter{
  display: flex;
  width: 100%;
  justify-content: center;
}
.changeCounter button{
  font-size: 1rem;
  padding: 8px;
  width: 100px;
  margin: 0 0.4em;
  background: transparent;
  border: 0.5px solid #ffffff;
  border-radius: 0.4rem;
}
.changeCounter button:hover{
  background-color: #EF233C;
  transition: .6s ease;
}



/* footer */
footer{
  background: #121212;
  margin-bottom: 0;
  text-align: center;
  padding: 0.5rem 0;
  color: #919191;
  margin-top: 2rem;
}



.developer{
  margin: 0 auto;
  
}
.icons{
  font-size: 1.5rem;
  color: rgb(203, 53, 53);
  padding:0.5rem 1rem 0 1rem;
}
.social-media{
  display: flex;
  justify-content: center;
}


/* movie detail */
.main-container{
  display: flex;

}
.imagecontainer{
  display: flex;
  flex-direction: column;
  
}
.imagecontainer img{
  border: 6px solid white;
  border-radius: 0.3rem;
  
  margin-bottom: 1rem;
}
.imagecontainer button{
  padding: 0.5rem 2rem;
  margin:0.5rem 1rem;
  min-width: 300px;
  font-size: 1.2rem;
  background-color: #EF233C;
  outline: none;
  border: none;
  border-radius: 0.5rem;
}
.imagecontainer div{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.imagecontainer button:hover{
  background-color: #6f0b16;
}
.detail-container{
  margin-left: 4rem;
}
.movie-detail-description p{
  text-align: justify;
  line-height: 1.8rem;
  letter-spacing: 1px;
}
.movie-detail-rating{
  font-size: 1.2rem;
}