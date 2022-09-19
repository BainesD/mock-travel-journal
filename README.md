This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# Travel Journal

The goal of this project is to demonstrate the use of React to create a simple blog type item that allows the input of data, which is then automatically formatted.

## features

The two major technologies used to format this travel journal are React and CSS.

### React

I created post.js to handle the data coming from data.js and render it into html using JSX. I was able to pass in the information by using the spread operator in app.js like so.

```js
const posts = Data.map(post=> (
    <Post 
        key={post.id}
        {...post} /*spread operator*/
    />))
```
Once the information was passed in, I was able to use JSX to simply populate the information into each respective element.
<br/>
This was the ultimate output of the JSX written in the post.js element.

```js
<div className="post">
        <div className="post-frame"><img className="post-img" src={props.imageURL} />
        </div>
        <div className="post-body">
          <div className="post-head">
            <img className="location-icon" src={locationIcon} />
            <div className="post-location">{props.location}</div>
            <a className="maps-link" href={props.googleMaps} target="_blank">
              View on Google Maps
            </a>
          </div>
          <div className="post-info">
            <h1 className="post-title">{props.title}</h1>
            <h3 className="post-dates">
              {props.startDate} - {props.endDate}
            </h3>
            <p className="post-text">{props.description}</p>
          </div>
        </div>
      </div>
```

### CSS

All formatting is done using css. I was able to pull images from Google Maps and make them uniform with the following css.

```css
.post-frame {
    margin: 0 auto;
  height: 198px;
  width: 146px;
  border-radius: 10px;
  overflow: hidden;
}

.post-body {
  margin: 10px;
  width: 70%;
}

.post-img {
  width: 100%;
  height: 100%;
  object-fit: none;
}
```

It is important to recognize that in this scenario each post is a flexbox; therefore, it was necessary to separate each flexbox into two region (picture and text). After which I was able to set the width of the text region to 70% so that each image could properly fill the space provided.
<br/>
Finally I used the following css to allow the images to return to their full size based on the screen size being more or less than 1000px. 

```css
@media only screen and (min-width:1000px){

.post-frame{
  height: auto;
  width: auto;
}
  
}
```

This allowed the page to look cleaner on large screens and had the added benefit of making the page more responsive.
