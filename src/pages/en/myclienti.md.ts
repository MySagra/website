import type { APIRoute } from 'astro';
import { createMarkdownResponse } from '../../lib/markdown';

export const GET: APIRoute = () => createMarkdownResponse('myclienti', 'en');
