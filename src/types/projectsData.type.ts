export interface projectsDataType {
  id: number
  title: string;
  description: string;
  imageUrl: string;
  imageUrls: string[];
  techs: string[];
  githubUrl: string;
  webUrl?: string;
}