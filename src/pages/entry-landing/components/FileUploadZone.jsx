import React, { useState, useRef } from 'react';
import Icon from '../../../components/AppIcon';
import Image from '../../../components/AppImage';

const FileUploadZone = ({ onFileSelect, selectedFile }) => {
  const [isDragging, setIsDragging] = useState(false);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
  };

  const handleDrop = (e) => {
    e?.preventDefault();
    e?.stopPropagation();
    setIsDragging(false);

    const files = e?.dataTransfer?.files;
    if (files && files?.length > 0) {
      handleFile(files?.[0]);
    }
  };

  const handleFileInput = (e) => {
    const files = e?.target?.files;
    if (files && files?.length > 0) {
      handleFile(files?.[0]);
    }
  };

  const handleFile = (file) => {
    if (file && file?.type?.startsWith('image/')) {
      onFileSelect(file);
      
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader?.result);
      };
      reader?.readAsDataURL(file);
    }
  };

  const handleClick = () => {
    fileInputRef?.current?.click();
  };

  const handleRemove = (e) => {
    e?.stopPropagation();
    onFileSelect(null);
    setPreview(null);
    if (fileInputRef?.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <div className="w-full">
      <input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleFileInput}
        className="hidden"
        aria-label="Upload food label image"
      />

      <div
        onClick={handleClick}
        onDragEnter={handleDragEnter}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        className={`
          w-full rounded-lg border-2 border-dashed transition-organic cursor-pointer
          ${isDragging 
            ? 'border-primary bg-primary/5' :'border-border hover:border-primary/50 bg-muted/30'
          }
          ${preview ? 'p-4' : 'p-8 md:p-12 lg:p-16'}
        `}
      >
        {preview ? (
          <div className="relative">
            <Image
              src={preview}
              alt="Preview of uploaded food label showing ingredient list and nutritional information"
              className="w-full h-48 md:h-64 lg:h-80 object-contain rounded-lg"
            />
            <button
              onClick={handleRemove}
              className="absolute top-2 right-2 p-2 bg-background rounded-full shadow-organic-md hover:bg-muted transition-organic focus-ring"
              aria-label="Remove uploaded image"
            >
              <Icon name="X" size={20} className="text-foreground" />
            </button>
            <div className="mt-4 text-center">
              <p className="text-sm md:text-base text-foreground font-medium">
                {selectedFile?.name}
              </p>
              <p className="text-caption text-muted-foreground mt-1">
                Click to change or drag a new image
              </p>
            </div>
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center text-center">
            <div className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24 rounded-full bg-primary/10 flex items-center justify-center mb-4 md:mb-6">
              <Icon 
                name="Upload" 
                size={32} 
                className="text-primary md:w-10 md:h-10 lg:w-12 lg:h-12" 
              />
            </div>
            
            <h3 className="text-base md:text-lg lg:text-xl font-heading font-semibold text-foreground mb-2">
              Upload Food Label Image
            </h3>
            
            <p className="text-sm md:text-base text-muted-foreground mb-4 max-w-md">
              Drag and drop your food label image here, or click to browse
            </p>
            
            <div className="flex items-center gap-2 text-caption text-muted-foreground">
              <Icon name="Image" size={16} />
              <span>Supports JPG, PNG, WEBP</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploadZone;