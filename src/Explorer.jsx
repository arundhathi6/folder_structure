const Explorer = {
    name:"react_files",
    isFolder:true,
    items:[
        {
    name:"node_modules",
    isFolder:true,
    items:[
        {
            name:"node_modules_files01",
            isFolder:false
        
        },{
        name:"node_modules_files02",
        isFolder:false
        
        }
    ]

        },
        {
            name:"src",
            isFolder:true,
            items:[
                {
            name:"components",
            isFolder:true,
            items:[
                {
                    name:"Folder",
                    isFolder:false
          }
        ]},
    {
        name:"App.jsx",
        isFolder:false
       
    },{
        name:"main.jsx",
        isFolder:false
        
    }]
        },
        {
          name:"index.html",
          isFolder:false
           
        },
        {
            name:"package-lock.json",
            isFolder:false
            
        },
        {
            name:"package.json",
            isFolder:false
           
        }
    ]
}

export default Explorer;