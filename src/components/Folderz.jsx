import React from 'react';
import uuid from 'react-uuid';
import {useState} from "react";
import { library } from '@fortawesome/fontawesome-svg-core';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faFolder,faFile} from "@fortawesome/free-solid-svg-icons";
import "./Folder.css";

function Folderz({explorer}) {
    
    const [expand, setExpand] = useState(false);

    if(explorer.isFolder){
  return (
    <div>
<div className="onHover"><span onClick={()=>setExpand(!expand)}> <FontAwesomeIcon className="foldergreen" icon={faFolder}></FontAwesomeIcon>
&nbsp;{explorer.name}<br/>
</span></div>

<div style={{display:expand?"block":"none",paddingLeft:"20px"}}>
    {explorer.items.map((exp)=>{
        return <Folderz key={uuid()} explorer={exp}/>
    })}
</div>
    </div>
  )
}
else{
    return(
        <div className="onHover">
        <span>
           <FontAwesomeIcon className="fileblue" icon={faFile}></FontAwesomeIcon>&nbsp;{explorer.name}
            <br/>
        </span>
        </div>
    )
}
}

export default Folderz;