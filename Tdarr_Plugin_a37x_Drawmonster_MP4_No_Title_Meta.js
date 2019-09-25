


function details() {

  return {
    id: "Tdarr_Plugin_a37x_Drawmonster_MP4_No_Title_Meta",
    Name: "Drawmonster MP4 AAC No title meta data ",
    Type: "Video",
    Description: `This plugin removes metadata (if a title exists). The output container is mp4. \n\n
`,
    Version: "1.00",
    Link: "https://github.com/HaveAGitGat/Tdarr_Plugin_a37x_Drawmonster_MP4_No_Title_Meta"
  }

}

function plugin(file) {


  //Must return this object

  var response = {

     processFile : false,
     preset : '',
     container : '.mp4',
     handBrakeMode : false,
     FFmpegMode : false,
     reQueueAfter : false,
     infoLog : '',

  }


  response.FFmpegMode = true




  if (file.fileMedium !== "video") {


    console.log("File is not video")

    response.infoLog += " File is not video"
    response.processFile = false;

    return response

  } else { 

     var jsonString = JSON.stringify(file)


   


     ///


 ///
     if(file.meta.Title != undefined ){

      response.infoLog += " File has title metadata"
      response.preset = ',-map_metadata -1 -c:v copy -c:a copy'
      response.reQueueAfter = true;
      response.processFile = true;
      return response
     }else{
      response.infoLog += " File has no title metadata"
     }

    
     response.infoLog += " File meets conditions!"
     return response

  }
}

module.exports.details = details;

module.exports.plugin = plugin;