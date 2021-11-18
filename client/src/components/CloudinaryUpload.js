import React, { useEffect } from "react";
import { useHistory } from 'react-router-dom';

function CloudinaryUpload({ preset, handleUpload, buttonText }) {

    let history = useHistory();

    const generateId = () => {
        const ending = buttonText.split(' ').map(w => w.toLowerCase()).join('_')
        return `upload_widget_${ending}`
    }

    useEffect(() => {
        window.myWidget = window.cloudinary.createUploadWidget(
          {
            cloudName: "sillysadsoy",
            uploadPreset: preset,
            prepareUploadParams: (cb, params) => {
              params = [].concat(params);  //params can be a single object or an array of objects
              Promise.all(params.map((body) => {
                return fetch("/api/uploads/prepare", {
                  method: 'POST',
                  headers: {
                    'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(body)
                })
                  .then(res => res.json())
              }))
                .then((results) =>
                  cb(results.length === 1 ? results[0] : results)
                );
            }
          },
          (error, result) => {
            if (!error && result && result.event === "success") {
              console.log("Done! Here is the image info: ", result.info);
              handleUpload && handleUpload(result);
              window.myWidget.close();
            }
          }
        );
        document.getElementById(generateId()).addEventListener(
          "click",
          function () {
            //   before opening widget, need to go to /me/posts/new, then after upload push result into state to display on page, then add label/caption before sending a post request to rails ? 
            history.push('/me/posts/new');
            window.myWidget.open();
          },
          false
        );
      }, [preset, handleUpload]);

      return (
        // <a href="#" id={generateId()}>
        //   {buttonText}
        // </a>

        <button className='cloudbutton' id={generateId()}>{buttonText}</button>
      );
    }

export default CloudinaryUpload;