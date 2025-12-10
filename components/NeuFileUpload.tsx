import React, { useState, useRef, useEffect } from 'react';
import { FileUploadProps } from '../types';
import { UploadCloud, File, X, Image as ImageIcon } from 'lucide-react';
import { NeuIconButton } from './NeuButton';
import { neuStyle } from '../neu-styles';
interface FileWithPreview {
file: File;
preview?: string;
}
export const NeuFileUpload: React.FC<FileUploadProps> = ({ onFileSelect, accept, multiple = false, label = "Upload Files",
className = '' }) => {
const [isDragging, setIsDragging] = useState(false);
const [files, setFiles] = useState<FileWithPreview[]>([]);
const inputRef = useRef<HTMLInputElement>(null);
// Cleanup object URLs to avoid memory leaks
useEffect(() => {
return () => {
files.forEach(f => {
if (f.preview) URL.revokeObjectURL(f.preview);
});
};
}, [files]);
const handleDragOver = (e: React.DragEvent) => {
e.preventDefault();
setIsDragging(true);
};
const handleDragLeave = (e: React.DragEvent) => {
e.preventDefault();
setIsDragging(false);
};
const handleDrop = (e: React.DragEvent) => {
e.preventDefault();
setIsDragging(false);
if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
handleFiles(e.dataTransfer.files);
}
};
const handleFiles = (fileList: FileList) => {
const newFiles = Array.from(fileList).map(file => ({
file,
preview: file.type.startsWith('image/') ? URL.createObjectURL(file) : undefined
}));
if (multiple) {
setFiles(prev => [...prev, ...newFiles]);
} else {
// Cleanup existing preview if single file mode
files.forEach(f => f.preview && URL.revokeObjectURL(f.preview));
setFiles([newFiles[0]]);
}
onFileSelect(fileList);
};
const removeFile = (index: number) => {
const fileToRemove = files[index];
if (fileToRemove.preview) {
URL.revokeObjectURL(fileToRemove.preview);
}
const newFiles = files.filter((_, i) => i !== index);
setFiles(newFiles);
};
return (
<div className={`w-full ${className}`}>
{label && <label className="block mb-3 text-sm font-bold text-gray-500 uppercase tracking-wider">{label}</label>}
<div
onDragOver={handleDragOver}
onDragLeave={handleDragLeave}
onDrop={handleDrop}
onClick={() => inputRef.current?.click()}
className={`
relative w-full p-8 rounded-[2rem] transition-all duration-300 cursor-pointer
flex flex-col items-center justify-center text-center gap-4
border-2 border-dashed
${isDragging ? 'bg-gray-100 border-indigo-500' : 'bg-gray-100 border-gray-300 hover:border-indigo-500/50'}
`}
>
<div className={`
w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300
${isDragging ? ' text-indigo-500' : ' text-gray-400'}
`}>
<UploadCloud size={32} />
</div>
<div>
<p className="font-bold text-gray-600">Click or Drag files here</p>
<p className="text-xs text-gray-400 mt-1 font-semibold">Supported: {accept || 'All files'}</p>
</div>
<input
ref={inputRef}
type="file"
className="hidden"
accept={accept}
multiple={multiple}
onChange={(e) => e.target.files && handleFiles(e.target.files)}
/>
</div>
{files.length > 0 && (
<div className="mt-6 space-y-3">
{files.map(({ file, preview }, index) => (
<div key={index} className="flex items-center justify-between p-3 rounded-xl bg-gray-100 border border-white/20" style={neuStyle('flat')}>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center text-indigo-500 overflow-hidden" style={neuStyle('flat')}>
{preview ? (
<img src={preview} alt="Preview" className="w-full h-full object-cover" />
) : (
<File size={20} />
)}
</div>
<div className="text-left">
<p className="text-sm font-bold text-gray-700 truncate max-w-[200px]">{file.name}</p>
<p className="text-xs text-gray-400 font-semibold">{(file.size / 1024).toFixed(1)} KB</p>
</div>
</div>
<NeuIconButton size="sm" onClick={(e) => { e.stopPropagation(); removeFile(index); }} className="text-red-500">
<X size={16} />
</NeuIconButton>
</div>
))}
</div>
)}
</div>
);
};