import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
}

interface DownloadRequest {
  url: string
  format?: 'video' | 'audio' | 'image'
}

interface DownloadResponse {
  success: boolean
  downloadUrl?: string
  filename?: string
  error?: string
  metadata?: {
    title?: string
    thumbnail?: string
    duration?: string
    size?: string
  }
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { url, format = 'video' }: DownloadRequest = await req.json();

    console.log('Processing download request:', { url, format });

    // Validate URL
    if (!url || !isValidUrl(url)) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Please provide a valid URL'
        } as DownloadResponse),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Check if URL is from supported platform
    const platform = detectPlatform(url);
    if (!platform) {
      return new Response(
        JSON.stringify({
          success: false,
          error: 'Platform not supported. We support Instagram, TikTok, Twitter, YouTube, and Facebook.'
        } as DownloadResponse),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        }
      );
    }

    // Simulate processing and generate response
    const response = await processDownload(url, format, platform);

    return new Response(
      JSON.stringify(response),
      {
        status: response.success ? 200 : 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );

  } catch (error) {
    console.error('Download processing error:', error);
    
    return new Response(
      JSON.stringify({
        success: false,
        error: 'An error occurred while processing your request. Please try again.'
      } as DownloadResponse),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' }
      }
    );
  }
});

function isValidUrl(string: string): boolean {
  try {
    new URL(string);
    return true;
  } catch (_) {
    return false;
  }
}

function detectPlatform(url: string): string | null {
  const platforms = {
    instagram: /instagram\.com/i,
    tiktok: /tiktok\.com/i,
    twitter: /twitter\.com|x\.com/i,
    youtube: /youtube\.com|youtu\.be/i,
    facebook: /facebook\.com/i
  };

  for (const [platform, regex] of Object.entries(platforms)) {
    if (regex.test(url)) {
      return platform;
    }
  }
  
  return null;
}

async function processDownload(url: string, format: string, platform: string): Promise<DownloadResponse> {
  // This is a demo implementation. In production, you would integrate with
  // services like yt-dlp, instagram-dl, or other APIs
  
  console.log(`Processing ${platform} ${format} download for:`, url);
  
  // Simulate processing delay
  await new Promise(resolve => setTimeout(resolve, 2000));
  
  // Generate mock response based on platform and format
  const mockResponses = {
    video: {
      downloadUrl: 'https://example.com/downloads/video_' + Date.now() + '.mp4',
      filename: `${platform}_video_${Date.now()}.mp4`,
      metadata: {
        title: `Sample ${platform} Video`,
        thumbnail: 'https://via.placeholder.com/320x240',
        duration: '0:45',
        size: '15.2 MB'
      }
    },
    audio: {
      downloadUrl: 'https://example.com/downloads/audio_' + Date.now() + '.mp3',
      filename: `${platform}_audio_${Date.now()}.mp3`,
      metadata: {
        title: `Sample ${platform} Audio`,
        duration: '0:45',
        size: '3.8 MB'
      }
    },
    image: {
      downloadUrl: 'https://example.com/downloads/image_' + Date.now() + '.jpg',
      filename: `${platform}_image_${Date.now()}.jpg`,
      metadata: {
        title: `Sample ${platform} Image`,
        size: '2.1 MB'
      }
    }
  };

  return {
    success: true,
    ...mockResponses[format as keyof typeof mockResponses]
  };
}