export const assetPrefix = process.env.NODE_ENV === 'production' ? '/canvas-coder-website' : '';

export const withPrefix = (path: string): string => `${assetPrefix}${path.startsWith('/') ? path : `/${path}`}`; 