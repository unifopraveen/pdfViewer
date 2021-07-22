import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Loader from './Loader.js';
import { pdfjs } from 'react-pdf';
import './PdfViewer.css'
pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.min.js`;

const PdfViewer = (props) => {

    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [isLoading, setIsLoading] = useState(true)
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
        setIsLoading(false)
    }
    let pages =[]
    function pageProduce() {
        for(let i=pageNumber; i<=numPages; i++){
            pages.push(<Page pageNumber={i} width='572' scale={props.zoom}/>)
        }
        return pages
    }

    return (
        <div className='pdf-container'>
        <Loader isLoading={isLoading}  />
            <Document file="documents/unifo.pdf" onLoadSuccess={onDocumentLoadSuccess} >
            
            {pageProduce().map((i)=>{
                return i
            })}
            </Document>
        </div>
    )
}

export default PdfViewer
