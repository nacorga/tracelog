import { TagConfig } from './tag.types';
import { MetadataType } from './event.types';

export interface ApiConfig {
  qaMode: boolean;
  samplingRate: number;
  tags: TagConfig[];
  excludedUrlPaths: string[];
}

export interface AppConfig {
  sessionTimeout?: number;
  globalMetadata?: Record<string, MetadataType>;
  scrollContainerSelectors?: string | string[];
}

export interface Config extends ApiConfig, AppConfig {}
