"use client";

import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  UploadCloud, ImagePlus, FileText, Camera, 
  CheckCircle, AlertCircle, Trash2 
} from "lucide-react";
import Image from "next/image";

type UploadCategory = "exterior" | "interior" | "documents" | "optional";

interface UploadedFile {
  id: string;
  file: File;
  previewUrl: string;
  category: UploadCategory;
  progress: number;
  status: "uploading" | "success" | "error";
  errorMsg?: string;
}

const CATEGORY_LABELS: Record<UploadCategory, string> = {
  exterior: "Exterior Photos",
  interior: "Interior Photos",
  documents: "Documents (RC/Insurance)",
  optional: "Optional (Video/Records)"
};

const MAX_IMAGES = 25;
const MAX_IMAGE_SIZE = 10 * 1024 * 1024; // 10MB
const MAX_DOC_SIZE = 20 * 1024 * 1024; // 20MB
const MAX_VIDEO_SIZE = 100 * 1024 * 1024; // 100MB

export default function PremiumUploader() {
  const [files, setFiles] = useState<UploadedFile[]>([]);
  const [isDragging, setIsDragging] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<UploadCategory>("exterior");
  const [showMobileSheet, setShowMobileSheet] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return '0 Bytes';
    const k = 1024;
    const sizes = ['Bytes', 'KB', 'MB', 'GB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const validateFile = (file: File, category: UploadCategory): string | null => {
    if (files.length >= MAX_IMAGES) return "Maximum of 25 files allowed.";
    
    const isVideo = file.type.startsWith('video/');
    const isImage = file.type.startsWith('image/');
    const isPdf = file.type === 'application/pdf';

    if (!isImage && !isVideo && !isPdf) return "Unsupported file format.";

    if (isVideo && file.size > MAX_VIDEO_SIZE) return "Video exceeds 100MB limit.";
    if (isPdf && file.size > MAX_DOC_SIZE) return "Document exceeds 20MB limit.";
    if (isImage && file.size > MAX_IMAGE_SIZE) return "Image exceeds 10MB limit.";

    if (files.some(f => f.file.name === file.name && f.file.size === file.size)) {
      return "Duplicate file detected.";
    }

    return null;
  };

  const simulateUpload = (fileId: string) => {
    let progress = 0;
    const interval = setInterval(() => {
      progress += Math.floor(Math.random() * 15) + 5;
      
      setFiles(prev => prev.map(f => {
        if (f.id === fileId) {
          if (progress >= 100) {
            clearInterval(interval);
            return { ...f, progress: 100, status: "success" };
          }
          return { ...f, progress };
        }
        return f;
      }));
    }, 300);
  };

  const handleFiles = (newFiles: FileList | null) => {
    if (!newFiles) return;

    const filesArray = Array.from(newFiles);
    
    filesArray.forEach(file => {
      const errorMsg = validateFile(file, selectedCategory);
      
      const newFileObj: UploadedFile = {
        id: Math.random().toString(36).substring(7),
        file,
        previewUrl: file.type.startsWith('image/') ? URL.createObjectURL(file) : '',
        category: selectedCategory,
        progress: 0,
        status: errorMsg ? "error" : "uploading",
        errorMsg: errorMsg || undefined
      };

      setFiles(prev => [...prev, newFileObj]);

      if (!errorMsg) {
        simulateUpload(newFileObj.id);
      }
    });

    // Reset input
    if (fileInputRef.current) fileInputRef.current.value = '';
    setShowMobileSheet(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (id: string) => {
    setFiles(prev => {
      const fileToRemove = prev.find(f => f.id === id);
      if (fileToRemove?.previewUrl) {
        URL.revokeObjectURL(fileToRemove.previewUrl);
      }
      return prev.filter(f => f.id !== id);
    });
  };

  return (
    <div className="w-full">
      {/* Category Selection Tabs */}
      <div className="flex overflow-x-auto hide-scrollbar gap-2 mb-6 pb-2">
        {(Object.keys(CATEGORY_LABELS) as UploadCategory[]).map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => setSelectedCategory(cat)}
            className={`px-4 py-2 rounded-full text-xs font-medium whitespace-nowrap transition-all border ${
              selectedCategory === cat 
                ? "bg-[#D4AF37]/20 border-[#D4AF37] text-[#D4AF37]" 
                : "bg-transparent border-white/10 text-brand-silver hover:border-white/30 hover:text-white"
            }`}
          >
            {CATEGORY_LABELS[cat]}
          </button>
        ))}
      </div>

      {/* Main Drag & Drop Zone */}
      <div 
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        onClick={() => {
          if (window.innerWidth < 768) {
            setShowMobileSheet(true);
          } else {
            fileInputRef.current?.click();
          }
        }}
        className={`relative w-full h-48 border-2 border-dashed rounded-2xl flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden transition-all duration-300 ${
          isDragging 
            ? "border-[#D4AF37] bg-[#D4AF37]/10 scale-[1.02]" 
            : "border-white/20 bg-[#0a0a0a] hover:border-[#D4AF37]/50 hover:bg-[#050505]"
        }`}
      >
        <input 
          type="file" 
          ref={fileInputRef}
          onChange={(e) => handleFiles(e.target.files)}
          multiple 
          accept="image/*,video/mp4,video/quicktime,application/pdf"
          className="hidden" 
        />
        
        {/* Glow Effect */}
        {isDragging && <div className="absolute inset-0 bg-[#D4AF37]/20 blur-2xl rounded-full" />}
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-14 h-14 rounded-full bg-white/5 flex items-center justify-center mb-4 text-brand-silver transition-colors">
            <UploadCloud size={28} className={isDragging ? "text-[#D4AF37] animate-bounce" : ""} />
          </div>
          <h4 className="text-white font-medium mb-1">Click to browse or drag files here</h4>
          <p className="text-xs text-brand-silver font-light">Supports JPG, PNG, PDF, MP4 (Max {MAX_IMAGES} files)</p>
          <p className="text-[10px] text-[#D4AF37] mt-2 font-mono uppercase tracking-widest">
            Uploading to: {CATEGORY_LABELS[selectedCategory]}
          </p>
        </div>
      </div>

      {/* Upload Progress & Gallery */}
      {files.length > 0 && (
        <div className="mt-8">
          <div className="flex items-center justify-between mb-4">
            <h4 className="text-sm font-medium text-white">Uploads ({files.length}/{MAX_IMAGES})</h4>
            <span className="text-xs text-brand-silver">
              {files.filter(f => f.status === 'success').length} Complete
            </span>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <AnimatePresence>
              {files.map((file) => (
                <motion.div
                  key={file.id}
                  initial={{ opacity: 0, scale: 0.95, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -10 }}
                  className="relative flex items-center gap-4 bg-[#0a0a0a] border border-white/10 p-3 rounded-xl overflow-hidden group hover:border-white/20 transition-colors"
                >
                  {/* Thumbnail */}
                  <div className="w-16 h-16 shrink-0 rounded-lg bg-[#050505] overflow-hidden relative flex items-center justify-center border border-white/5">
                    {file.previewUrl ? (
                      <Image src={file.previewUrl} alt="Preview" fill className="object-cover" />
                    ) : (
                      <FileText size={24} className="text-brand-silver" />
                    )}
                    
                    {/* Dark overlay for actions */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <button type="button" onClick={() => removeFile(file.id)} className="p-1 bg-red-500/80 rounded-full text-white hover:bg-red-500 transition-colors">
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 pr-2">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-sm font-medium text-white truncate">{file.file.name}</p>
                      {file.status === 'success' && <CheckCircle size={14} className="text-green-500 shrink-0" />}
                      {file.status === 'error' && <AlertCircle size={14} className="text-red-500 shrink-0" />}
                    </div>
                    <div className="flex items-center justify-between text-xs text-brand-silver font-light">
                      <span>{formatFileSize(file.file.size)}</span>
                      <span className="uppercase text-[9px] border border-white/10 px-1.5 rounded text-white/60">
                        {file.category}
                      </span>
                    </div>

                    {/* Progress Bar / Error Msg */}
                    <div className="mt-2">
                      {file.status === 'uploading' && (
                        <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                          <motion.div 
                            className="h-full bg-gradient-to-r from-[#D4AF37] to-[#C59B27]" 
                            initial={{ width: 0 }}
                            animate={{ width: `${file.progress}%` }}
                          />
                        </div>
                      )}
                      {file.status === 'error' && (
                        <p className="text-xs text-red-400 mt-1">{file.errorMsg}</p>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      )}

      {/* Mobile Action Sheet Modal */}
      <AnimatePresence>
        {showMobileSheet && (
          <>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 z-40 md:hidden"
              onClick={() => setShowMobileSheet(false)}
            />
            <motion.div 
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ y: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed bottom-0 left-0 right-0 bg-[#0a0a0a] border-t border-white/10 rounded-t-3xl z-50 p-6 md:hidden pb-12"
            >
              <div className="w-12 h-1 bg-white/20 rounded-full mx-auto mb-6" />
              <h3 className="text-lg font-heading text-white mb-4">Upload {CATEGORY_LABELS[selectedCategory]}</h3>
              
              <div className="space-y-2">
                <button 
                  type="button"
                  onClick={() => {
                    fileInputRef.current?.setAttribute('capture', 'environment');
                    fileInputRef.current?.click();
                  }}
                  className="w-full flex items-center gap-4 bg-[#050505] border border-white/10 p-4 rounded-xl text-white hover:border-[#D4AF37]/50 active:bg-[#111]"
                >
                  <Camera size={20} className="text-[#D4AF37]" />
                  <span>Take Photo</span>
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    fileInputRef.current?.removeAttribute('capture');
                    fileInputRef.current?.click();
                  }}
                  className="w-full flex items-center gap-4 bg-[#050505] border border-white/10 p-4 rounded-xl text-white hover:border-[#D4AF37]/50 active:bg-[#111]"
                >
                  <ImagePlus size={20} className="text-[#D4AF37]" />
                  <span>Choose from Gallery</span>
                </button>
                <button 
                  type="button"
                  onClick={() => {
                    fileInputRef.current?.removeAttribute('capture');
                    fileInputRef.current?.click();
                  }}
                  className="w-full flex items-center gap-4 bg-[#050505] border border-white/10 p-4 rounded-xl text-white hover:border-[#D4AF37]/50 active:bg-[#111]"
                >
                  <FileText size={20} className="text-[#D4AF37]" />
                  <span>Browse Documents</span>
                </button>
              </div>
              
              <button 
                type="button" 
                onClick={() => setShowMobileSheet(false)}
                className="w-full mt-6 py-4 text-center text-brand-silver font-medium"
              >
                Cancel
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
}
