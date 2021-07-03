
import "./styles.css";
export default function Articles({feeds}){
  console.log(feeds)
  if(feeds.length){
 return(
    <div>
        <ol>
        {feeds.map((feed, i) => (
          <li key="i">
            {" "}
            {feed.title || feed.story_title}
            <a href={feed.url|| feed.story_url} target="_blank">
              {feed.url || feed.story_url}
            </a>
          </li>
        ))}
      </ol>
    </div>
 )
}
    else return ( <p>No Results!</p>)
 


}