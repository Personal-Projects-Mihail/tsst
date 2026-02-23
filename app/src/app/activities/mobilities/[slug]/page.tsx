import Link from 'next/link';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, MapPin, Users, ImageIcon, Video } from 'lucide-react';

function getYouTubeEmbedUrl(url: string): string {
  try {
    if (url.includes('youtu.be/')) {
      const id = url.split('youtu.be/')[1]?.split('?')[0] ?? '';
      return `https://www.youtube.com/embed/${id}`;
    }
    const match = url.match(/[?&]v=([^&]+)/);
    const id = match?.[1] ?? '';
    return id ? `https://www.youtube.com/embed/${id}` : url;
  } catch {
    return url;
  }
}
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getMobilityBySlug, getAllMobilitySlugs } from '@/lib/mobilities';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return getAllMobilitySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const mobility = getMobilityBySlug(slug);
  if (!mobility) return { title: 'Mobility not found' };
  return {
    title: `${mobility.title} | TSST Activities`,
    description: mobility.shortDescription,
  };
}

export default async function MobilityPage({ params }: Props) {
  const { slug } = await params;
  const mobility = getMobilityBySlug(slug);
  if (!mobility) notFound();

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 gradient-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link href="/activities" className="inline-flex items-center gap-2 text-tsst-text-muted hover:text-tsst-primary-dark">
              <ArrowLeft className="w-4 h-4" />
              Back to Activities
            </Link>
          </Button>
          <div className="max-w-3xl">
            <span className="badge mb-4">{mobility.dateLabel}</span>
            <h1 className="heading-xl text-gradient mb-4">{mobility.title}</h1>
            <div className="flex flex-wrap gap-4 text-tsst-text-muted">
              <span className="inline-flex items-center gap-2">
                <Calendar className="w-4 h-4 text-tsst-primary-dark" />
                {mobility.dateLabel}
              </span>
              <span className="inline-flex items-center gap-2">
                <Users className="w-4 h-4 text-tsst-primary-dark" />
                {mobility.host}
              </span>
              <span className="inline-flex items-center gap-2">
                <MapPin className="w-4 h-4 text-tsst-primary-dark" />
                {mobility.country}
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="section-container">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-sm mb-4">About this mobility</h2>
            <p className="body-lg">{mobility.longDescription}</p>
          </div>
        </div>
      </section>

      {mobility.images.length > 0 && (
        <section className="section gradient-subtle">
          <div className="section-container">
            <h2 className="heading-lg mb-8 flex items-center gap-2">
              <ImageIcon className="w-6 h-6 text-tsst-primary-dark" />
              Gallery
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mobility.images.map((src, i) => (
                <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-tsst-border bg-tsst-card">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={src.startsWith('http') ? src : src}
                    alt={`${mobility.title} - ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {mobility.videos.length > 0 && (
        <section className="section bg-white">
          <div className="section-container">
            <h2 className="heading-lg mb-8 flex items-center gap-2">
              <Video className="w-6 h-6 text-tsst-primary-dark" />
              Videos
            </h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {mobility.videos.map((url, i) => (
                <Card key={i} className="card overflow-hidden">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-tsst-card">
                      {url.includes('youtube.com') || url.includes('youtu.be') ? (
                        <iframe
                          src={getYouTubeEmbedUrl(url)}
                          title={`${mobility.title} video ${i + 1}`}
                          className="w-full h-full"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                        />
                      ) : (
                        <video src={url} controls className="w-full h-full" />
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      )}

      {(mobility.images.length === 0 && mobility.videos.length === 0) && (
        <section className="section gradient-subtle">
          <div className="section-container">
            <Card className="card max-w-2xl mx-auto text-center">
              <CardContent className="p-8">
                <ImageIcon className="w-12 h-12 text-tsst-text-muted mx-auto mb-4" />
                <h3 className="heading-sm mb-2">Media coming soon</h3>
                <p className="body-sm text-tsst-text-muted">
                  Photos and videos from this mobility will be added here as they become available.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
      )}

      <section className="section bg-tsst-text text-white">
        <div className="section-container text-center">
          <Button asChild className="btn-secondary">
            <Link href="/activities">View all activities & timeline</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
