import './PhotoUploader.css'
import React, { useState } from 'react';
import Dropzone from 'react-dropzone';
import ImageGallery from 'react-image-gallery';

import 'react-image-gallery/styles/css/image-gallery.css';

export default function PhotoUploader({images, setImages}) {

    const handleDrop = (acceptedFiles) => {
        const uploadedImages = acceptedFiles.map((file) => ({
            original: URL.createObjectURL(file),
            thumbnail: URL.createObjectURL(file),
        }));

        setImages((prevImages) => [...prevImages, ...uploadedImages]);
    };

    return (
        <div>
            <Dropzone onDrop={handleDrop}>
                {({ getRootProps, getInputProps }) => (
                    <div {...getRootProps()} className="dropzone">
                        <input {...getInputProps()} />
                        <p>Arrastra i deixa anar imatges aquí, o fes click per sel·lecionar-les</p>
                    </div>
                )}
            </Dropzone>

            <ImageGallery items={images}
                showPlayButton={false}
                showFullscreenButton={false} />
        </div>
    );
};

