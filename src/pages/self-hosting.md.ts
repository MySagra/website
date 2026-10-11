import type { APIRoute } from 'astro';
import { createSelfHostingMarkdownResponse } from '../lib/self-hosting';

export const GET: APIRoute = () => createSelfHostingMarkdownResponse('it');
