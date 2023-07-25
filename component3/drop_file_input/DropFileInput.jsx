import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';
import "./DropFileInput.css";
import {motion} from 'framer-motion'
import { ImageConfig } from '../../config/ImageConfig';
import dropImage from "../../assets/drag_drop/cloud-upload-regular-240.png"

const DropFileInput = props => {
    const wrapperRef=useRef(null);
    const [filelist,setFileList]= useState([])

    const onDragEnter=()=> wrapperRef.current.classList.add('dragover');
    const onDragLeave=()=> wrapperRef.current.classList.remove('dragover');
    const onDrop=()=> wrapperRef.current.classList.remove('dragover');

    const onFileDrop=(e)=>{
        const newFile=e.target.files[0];
        if(newFile){
            const updatedList=[...filelist,newFile];
            setFileList(updatedList);
            props.onFileChange(updatedList);
        }
    }

    const fileRemove =(file)=>{
        const updatedList=[...filelist];
        updatedList.splice(filelist.indexOf(file),1);
            setFileList(updatedList);
            props.onFileChange(updatedList);
    }

    const sum = filelist.reduce((acc, num) => acc + (num.size/ (1024)), 0);


  return (
    // <>
    //         <div ref={wrapperRef}
    //     className='drop-file-input'
    //     onDragEnter={onDragEnter}
    //     onDragLeave={onDragLeave}
    //     onDrop={onDrop}
    //     >
    //         <div className="drop-file-input__label">
    //             <img src={dropImage} alt=""/>
    //             <p > Drag & Drop your files here</p>
    //         </div>
    //         <input type="file" value="" onChange={onFileDrop} multiple/>
    //     </div>
    //     {
    //             filelist.length > 0 ? (
    //                 <div className="drop-file-preview">
    //                     <p className="drop-file-preview__title">
    //                         Ready to upload
    //                     </p>
    //                     {
    //                         filelist.map((item, index) => (
    //                             <div key={index} className="drop-file-preview__item">
    //                                 <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
    //                                 <div className="drop-file-preview__item__info gap-3">
    //                                     <p>{item.name}</p>
    //                                     <p>{ (item.size / (1024)).toFixed(2)}KB</p>
    //                                 </div>
    //                                 <span className="drop-file-preview__item__del" onClick={()=>fileRemove(item)}>x</span>
    //                             </div>
    //                         ))
    //                     }
    //             </div>
                
    //         ) : null
    //     }
    // </>


    <>
            
            <div className="container ">
               <div className="row">
                <div className="col-md-6 d-flex align-items-center justify-content-center ">
                <motion.div  initial={{x:"100vw"}} animate={{x:0}} transition={{type:'spring', delay:0.5}} ref={wrapperRef}
                        className='drop-file-input text-white me-5'
                        onDragEnter={onDragEnter}
                        onDragLeave={onDragLeave}
                        onDrop={onDrop}
                        >
                            <div className="drop-file-input__label">
                                <img src={dropImage} alt=""/>
                                <p > Drag & Drop your files here</p>
                            </div>
                            <input type="file" value="" onChange={onFileDrop} multiple/>
                        </motion.div>
                    
                </div>
                <div className="col-md-6">
                {
                filelist.length > 0 ? (
                    <div className="drop-file-preview">
                        <div className="d-flex gap-5">
                        <p className="drop-file-preview__title">
                            Ready to upload
                        </p>
                        <p >Total size:{" "}{sum.toFixed(2)}KB</p>
                        </div>
                        
                        {
                            filelist.map((item, index) => (
                                <div key={index} className="drop-file-preview__item">
                                    <img src={ImageConfig[item.type.split('/')[1]] || ImageConfig['default']} alt="" />
                                    <div className="drop-file-preview__item__info gap-3">
                                        <p>{item.name}</p>
                                        <p>{ (item.size / (1024)).toFixed(2)}KB</p>
                                        
                                    </div>
                                    <span className="drop-file-preview__item__del" onClick={()=>fileRemove(item)}>x</span>
                                </div>
                            ))
                        }
                </div>
                
            ) : null
        }
                </div>
                </div> 
            </div>


    </>
  )
}

DropFileInput.propTypes = {
    onFileChange:PropTypes.func
}

export default DropFileInput