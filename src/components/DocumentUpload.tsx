import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useUpload } from "@/hook/useUpload";
import {
  Upload,
  FileText,
  Image,
  File,
  CheckCircle2,
  X,
  ArrowLeft,
  AlertCircle,
  CloudUpload,
} from "lucide-react";

interface Document {
  id: string;
  name: string;
  file: File | null;
  required: boolean;
}

interface DocumentUploadProps {
  companyName: string;
  documents: Document[];
  onBack: () => void;
}

export default function DocumentUpload({
  companyName,
  documents,
  onBack,
}: DocumentUploadProps) {
  const [documentFiles, setDocumentFiles] = useState<Document[]>(documents);
  const [error, setError] = useState<string | null>(null);
  const [dragOver, setDragOver] = useState<string | null>(null);
  const { uploadDocumentsMutation, loading } = useUpload();
  const fileInputRefs = useRef<{ [key: string]: HTMLInputElement | null }>({});

  const handleFileChange = (documentId: string, file: File | null) => {
    setDocumentFiles((prev) =>
      prev.map((doc) => (doc.id === documentId ? { ...doc, file } : doc))
    );
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    try {
      const result = await uploadDocumentsMutation({
        companyName,
        documents: documentFiles,
      });
      // If the API returned success: false, show the error
      if (!result.success) {
        setError(result.message || "Upload failed");
      }
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : "Upload failed";
      setError(errorMessage);
    }
  };

  const handleRemoveFile = (documentId: string) => {
    handleFileChange(documentId, null);
  };

  const handleDragOver = (e: React.DragEvent, documentId: string) => {
    e.preventDefault();
    setDragOver(documentId);
  };

  const handleDragLeave = () => {
    setDragOver(null);
  };

  const handleDrop = (e: React.DragEvent, documentId: string) => {
    e.preventDefault();
    setDragOver(null);
    const file = e.dataTransfer.files[0];
    if (file) {
      handleFileChange(documentId, file);
    }
  };

  const getFileIcon = (file: File) => {
    const type = file.type;
    if (type.includes("pdf"))
      return <FileText className="w-5 h-5 text-red-500" />;
    if (type.includes("image"))
      return <Image className="w-5 h-5 text-blue-500" />;
    if (type.includes("word") || type.includes("document"))
      return <FileText className="w-5 h-5 text-blue-600" />;
    return <File className="w-5 h-5 text-gray-500" />;
  };

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + " " + sizes[i];
  };

  const uploadedCount = documentFiles.filter((doc) => doc.file).length;
  const totalRequired = documentFiles.filter((doc) => doc.required).length;

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Header */}
      <div className="space-y-2">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-gradient-to-br from-[#439EFF]/20 to-[#5B1E9F]/20 rounded-xl">
            <Upload className="w-5 h-5 text-[#5B1E9F]" />
          </div>
          <div>
            <h2 className="text-[18px] font-semibold text-[#1A1A21]">
              Upload Documents
            </h2>
            <p className="text-[13px] text-[#8C94A6]">
              Upload all required documents to complete your registration
            </p>
          </div>
        </div>

        {/* Progress indicator */}
        <div className="flex items-center gap-2 bg-[#F5F5F5] rounded-lg p-3">
          <div className="flex-1">
            <div className="flex justify-between text-[12px] mb-1">
              <span className="text-[#8C94A6]">Upload progress</span>
              <span className="text-[#5B1E9F] font-medium">
                {uploadedCount} of {documentFiles.length} uploaded
              </span>
            </div>
            <div className="h-2 bg-[#E4E3EC] rounded-full overflow-hidden">
              <div
                className="h-full bg-gradient-to-r from-[#439EFF] to-[#5B1E9F] rounded-full transition-all duration-500 ease-out"
                style={{
                  width: `${(uploadedCount / documentFiles.length) * 100}%`,
                }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Document Upload Areas */}
      <div className="space-y-3">
        {documentFiles.map((document, index) => (
          <div
            key={document.id}
            className={`border rounded-xl p-4 transition-all duration-300 ${document.file
              ? "border-green-200 bg-green-50/50"
              : "border-[#E4E3EC] bg-white hover:border-[#DACBEB]"
              }`}
          >
            {/* Document header */}
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div
                  className={`w-8 h-8 rounded-lg flex items-center justify-center text-[13px] font-medium ${document.file
                    ? "bg-green-100 text-green-600"
                    : "bg-[#F4F3F7] text-[#8C94A6]"
                    }`}
                >
                  {document.file ? (
                    <CheckCircle2 className="w-4 h-4" />
                  ) : (
                    index + 1
                  )}
                </div>
                <div>
                  <span className="text-[13px] font-medium text-[#1A1A21]">
                    {document.name}
                  </span>
                  {document.required && (
                    <span className="ml-1.5 text-[10px] font-medium text-white bg-[#5B1E9F] px-1.5 py-0.5 rounded">
                      Required
                    </span>
                  )}
                </div>
              </div>
            </div>

            {!document.file ? (
              /* Upload zone */
              <div
                className={`border-2 border-dashed rounded-xl p-6 text-center cursor-pointer transition-all duration-200 ${dragOver === document.id
                  ? "border-[#5B1E9F] bg-[#DACBEB]/20"
                  : "border-[#E4E3EC] hover:border-[#DACBEB] hover:bg-[#F9F9FB]"
                  }`}
                onClick={() => fileInputRefs.current[document.id]?.click()}
                onDragOver={(e) => handleDragOver(e, document.id)}
                onDragLeave={handleDragLeave}
                onDrop={(e) => handleDrop(e, document.id)}
              >
                <div className="flex flex-col items-center gap-3">
                  <div
                    className={`p-3 rounded-full transition-colors ${dragOver === document.id
                      ? "bg-[#5B1E9F]/10"
                      : "bg-[#F4F3F7]"
                      }`}
                  >
                    <CloudUpload
                      className={`w-6 h-6 ${dragOver === document.id
                        ? "text-[#5B1E9F]"
                        : "text-[#8C94A6]"
                        }`}
                    />
                  </div>
                  <div>
                    <p className="text-[13px] text-[#1A1A21] font-medium">
                      <span className="text-[#5B1E9F]">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-[11px] text-[#8C94A6] mt-1">
                      PDF, DOC, DOCX, JPG, JPEG, PNG (max 10MB)
                    </p>
                  </div>
                </div>
                <Input
                  ref={(el) => {
                    fileInputRefs.current[document.id] = el;
                  }}
                  type="file"
                  accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                  onChange={(e) => {
                    const file = e.target.files?.[0] || null;
                    handleFileChange(document.id, file);
                  }}
                  className="hidden"
                />
              </div>
            ) : (
              /* Uploaded file preview */
              <div className="bg-white border border-green-200 rounded-xl p-3 shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 bg-[#F4F3F7] rounded-lg">
                      {getFileIcon(document.file)}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-[13px] font-medium text-[#1A1A21] truncate max-w-[180px]">
                        {document.file.name}
                      </p>
                      <p className="text-[11px] text-[#8C94A6]">
                        {formatFileSize(document.file.size)} • Ready to upload
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => handleRemoveFile(document.id)}
                    className="p-1.5 text-[#8C94A6] hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Error Message */}
      {error && (
        <div className="flex items-center gap-2 bg-red-50 border border-red-200 rounded-xl p-3">
          <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0" />
          <p className="text-red-700 text-[13px]">{error}</p>
        </div>
      )}

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <Button
          type="button"
          onClick={onBack}
          disabled={loading}
          className="flex-1 bg-white border border-[#E4E3EC] text-[#1A1A21] hover:bg-[#F5F5F5] h-11 rounded-xl text-[13px] font-medium transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>
        <Button
          type="submit"
          disabled={
            loading || documentFiles.some((doc) => doc.required && !doc.file)
          }
          className="flex-1 bg-gradient-to-br from-[#439EFF] to-[#5B1E9F] hover:from-[#439EFF]/90 hover:to-[#5B1E9F]/90 text-white h-11 rounded-xl text-[13px] font-medium disabled:opacity-50 transition-all"
        >
          {loading ? (
            <>
              <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
              Uploading...
            </>
          ) : (
            <>
              Submit Documents
              <CheckCircle2 className="w-4 h-4 ml-2" />
            </>
          )}
        </Button>
      </div>

      {/* Required documents hint */}
      {totalRequired > 0 && (
        <p className="text-center text-[11px] text-[#8C94A6]">
          {totalRequired} required document{totalRequired > 1 ? "s" : ""} must
          be uploaded to continue
        </p>
      )}
    </form>
  );
}
