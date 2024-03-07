interface ImageKitFile {
  fileId: string;
  type: string;
  name: string;
  filePath: string;
  tags?: string[];
  AITags?: Array<{
    name: string;
    confidence: number;
    source: string;
  }>;
  versionInfo?: {
    id: string;
    name: string;
  };
  isPrivateFile: boolean;
  customCoordinates: null | string;
  url: string;
  thumbnail: string;
  fileType: string;
  mime: string;
  width: number;
  height: number;
  size: number;
  hasAlpha: boolean;
  customMetadata?: {
    [key: string]: any;
  };
  createdAt: string;
  updatedAt: string;
}

export type ImageKitListFilesResponse = ImageKitFile[];

