import { Tracking } from './tracking';
import { AppConfig, MetadataType } from './types';

export * as Types from './types';

let trackingInstance: Tracking | undefined;

/**
 * Initialize tracking with configuration
 * @param id - Tracking ID
 * @param config - Optional configuration
 */
export const init = (id: string, config?: AppConfig): void => {
  if (typeof window === 'undefined' || typeof document === 'undefined') {
    return;
  }

  if (trackingInstance) {
    return;
  }

  if (config?.sessionTimeout && config.sessionTimeout < 30_000) {
    console.warn('[TraceLog] sessionTimeout must be at least 30 seconds');
    return;
  }

  try {
    trackingInstance = new Tracking(id, config);
  } catch (error) {
    console.error('[TraceLog] Initialization failed:', error instanceof Error ? error.message : 'Unknown error');
  }
};

/**
 * Create custom event
 * @param name - Event name
 * @param metadata - Optional metadata
 */
export const event = (name: string, metadata?: Record<string, MetadataType>): void => {
  if (!trackingInstance) {
    console.warn('[TraceLog] Not initialized. Call init() first.');
    return;
  }

  try {
    trackingInstance.customEventHandler(name, metadata).catch((error) => {
      console.error('[TraceLog] Custom event failed:', error instanceof Error ? error.message : 'Unknown error');
    });
  } catch (error) {
    console.error('[TraceLog] Custom event failed:', error instanceof Error ? error.message : 'Unknown error');
  }
};
