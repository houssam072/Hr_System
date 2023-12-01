import React, { useContext, useState } from 'react';
import axios from 'axios';
import { User } from '../../../Context';
import { useParams } from 'react-router-dom';
export default function DownloadCvButton() {
    const { id } = useParams();

    const context = useContext(User);
    // @ts-ignore
    const token = context.auth;


        const handleDownload = async () => {
            try {
              const response = await axios.get(`http://127.0.0.1:8001/job/api/download-cv/${id}/`, {
                headers: {
                  Accept: 'application/json',
                  Authorization: "Bearer " + token,
                },
                responseType: 'blob',
              });
              const blob = new Blob([response.data], { type: response.headers['content-type']});
              const url = window.URL.createObjectURL(blob);
              const link = document.createElement('a');
              link.href = url;
              link.setAttribute('download', response.headers['content-disposition']);
              document.body.appendChild(link);
              link.click();
              document.body.removeChild(link);
              window.URL.revokeObjectURL(url);


            } catch (error) {
                console.error('Error downloading CV:', error);
            }
          };

  return (
    
    <button id='download_cv' onClick={handleDownload}>Download Cv</button>
  )
}
