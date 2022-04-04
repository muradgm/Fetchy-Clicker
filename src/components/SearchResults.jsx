import { useState, useEffect } from "react";

export default function SearchResults(props) {
  // console.log(props);
  const [display, setDisplay] = useState(false)
  const [btnClass , setBtnClass] = useState('repo-btn')

  const toggleClass = () => {
    setBtnClass(!btnClass)
  }

  const displayClick = ()=>{
    setDisplay(!display)
  }

  
  
  let repo = props.repo
  const topics = props.topics
  // console.log(topics.map(topic => topic))
  // console.log(props.repo);


  // console.log(repo);

  return (
    <div className="repo">
      <button className={ display ? 'active' : 'repo-btn'} onClick={ () => {displayClick(); toggleClass()} }>
        {repo.full_name}
      </button>

      


      {display ? (
<div className="info-wrapper">
<ul className="repo-info">
  
          {/* <li>{repo.full_name}</li> */}
            <li>{repo.description}</li>
            {/* <li>topics: {repo.topics.map(topic => <span>{topic}</span>)}</li> */}
          <li><a href={repo.homepage}>{repo.homepage}</a></li>
</ul>
          <img src={repo.owner.avatar_url}></img>
    </div>    
      ) : null}

    </div>
  )

}