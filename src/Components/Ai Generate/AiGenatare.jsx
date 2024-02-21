import React, { useState } from 'react';
import { AiOutlineFileText, AiOutlineFileImage } from 'react-icons/ai';
import { FaStar } from "react-icons/fa6";

const AiGenatare = () => {
    const [selectedFiles, setSelectedFiles] = useState([]);

    const handleFileChange = (fileType, event) => {
        const file = event.target.files[0];

        if (file) {
            setSelectedFiles((prevFiles) => [...prevFiles, { fileType, fileName: file.name }]);
        }
    };


    return (
        <div className='flex'>
            <div className=''>
            <div className="  p-4 ">
                <h2 className="text-xl font-bold mb-4">Ai Generate</h2>


                <div className='flex bg-black'>
                    <div className="flex items-center text-cyan-800 hover:underline">
                        <AiOutlineFileText className="mr-2" />
                        <span>Article</span>
                        <input type="file" accept=".doc, .pdf" onChange={(e) => handleFileChange('Article', e)} />
                    </div>
                    <div className="flex items-center text-cyan-800 hover:underline">
                        <AiOutlineFileImage className="mr-2" />
                        <span>Image</span>
                        <input type="file" accept=".jpg, .png" onChange={(e) => handleFileChange('Image', e)} />
                    </div>

                    <div className="flex items-center text-cyan-800 hover:underline">
                        <AiOutlineFileText className="mr-2" />
                        <span>Copy</span>
                        <input type="file" accept=".txt, .docx" onChange={(e) => handleFileChange('Copy', e)} />
                    </div>
                </div>

                {/* <div className="mt-4">
          <h3 className="text-lg font-semibold mb-2">Selected Files:</h3>
          <ul className="list-disc pl-5">
            {selectedFiles.map((file, index) => (
              <li key={index}>{`${file.fileType}: ${file.fileName}`}</li>
            ))}
          </ul>
        </div> */}
            </div>
            </div>





            <div className='bg-black'>
            <div>
                <button>hide section</button>
                <div>
                    <div className=''>
                        <h3>promt</h3>
                        <FaStar />

                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default AiGenatare;