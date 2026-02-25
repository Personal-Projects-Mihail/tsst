import Link from 'next/link';
import { notFound } from 'next/navigation';
import {
  ArrowLeft,
  Calendar,
  MapPin,
  Users,
  ImageIcon,
  Video,
  FileText,
  Presentation,
  Download,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { getMobilityBySlug, getAllMobilitySlugs, type MobilitySectionMedia } from '@/lib/mobilities';
import { getMobilityAssets, getMobilityAssetBase } from '@/lib/mobilities-manifest';

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

function MediaBlock({
  slug,
  assets,
  section,
}: {
  slug: string;
  assets: { images: string[]; videos: string[]; pdfs: string[]; ppts: string[] };
  section: MobilitySectionMedia;
}) {
  const base = getMobilityAssetBase(slug);
  const hasAny =
    (section.imageIndices?.length ?? 0) > 0 ||
    (section.videoIndices?.length ?? 0) > 0 ||
    (section.pdfIndices?.length ?? 0) > 0 ||
    (section.pptIndices?.length ?? 0) > 0;
  if (!hasAny) return null;

  return (
    <div className="space-y-8">
      {section.imageIndices && section.imageIndices.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {section.imageIndices.map((i) => {
            const file = assets.images[i];
            if (!file) return null;
            const src = `${base}/images/${file}`;
            return (
                <div
                  key={src}
                  className="aspect-video rounded-xl overflow-hidden border border-tsst-border bg-tsst-card"
                >
                  <img
                  src={src}
                  alt=""
                  className="w-full h-full object-contain"
                />
              </div>
            );
          })}
        </div>
      )}
      {section.videoIndices && section.videoIndices.length > 0 && (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {section.videoIndices.map((i) => {
            const file = assets.videos[i];
            if (!file) return null;
            const src = `${base}/videos/${file}`;
            return (
              <Card key={src} className="overflow-hidden">
                <CardContent className="p-0">
                  <div className="aspect-video bg-tsst-card">
                    <video src={src} controls className="w-full h-full" />
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      )}
      {(section.pdfIndices && section.pdfIndices.length > 0) ||
        (section.pptIndices && section.pptIndices.length > 0) ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {section.pdfIndices?.map((i) => {
            const file = assets.pdfs[i];
            if (!file) return null;
            const href = `${base}/pdfs/${file}`;
            return (
              <Card key={href} className="card">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                    <FileText className="w-6 h-6 text-red-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium truncate">{file}</p>
                    <div className="flex gap-2 mt-2">
                      <a
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm text-tsst-primary-dark hover:underline"
                      >
                        View
                      </a>
                      <a
                        href={href}
                        download={file}
                        className="inline-flex items-center gap-1 text-sm text-tsst-primary-dark hover:underline"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
          {section.pptIndices?.map((i) => {
            const file = assets.ppts[i];
            if (!file) return null;
            const href = `${base}/ppts/${file}`;
            return (
              <Card key={href} className="card">
                <CardContent className="p-4 flex items-center gap-4">
                  <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                    <Presentation className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="min-w-0 flex-1">
                    <p className="font-medium truncate">{file}</p>
                    <a
                      href={href}
                      download={file}
                      className="inline-flex items-center gap-1 mt-2 text-sm text-tsst-primary-dark hover:underline"
                    >
                      <Download className="w-4 h-4" />
                      Download
                    </a>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}

export default async function MobilityPage({ params }: Props) {
  const { slug } = await params;
  const mobility = getMobilityBySlug(slug);
  if (!mobility) notFound();

  const assets = getMobilityAssets(slug);
  const hasManifestAssets =
    assets.images.length > 0 ||
    assets.videos.length > 0 ||
    assets.pdfs.length > 0 ||
    assets.ppts.length > 0;
  const useSections = mobility.sections && mobility.sections.length > 0 && hasManifestAssets;

  // Collect all indices used in sections to compute "remaining" media
  const usedImageIndices = new Set<number>();
  const usedVideoIndices = new Set<number>();
  const usedPdfIndices = new Set<number>();
  const usedPptIndices = new Set<number>();
  if (useSections && mobility.sections) {
    for (const s of mobility.sections) {
      if (s.type === 'media') {
        s.imageIndices?.forEach((i) => usedImageIndices.add(i));
        s.videoIndices?.forEach((i) => usedVideoIndices.add(i));
        s.pdfIndices?.forEach((i) => usedPdfIndices.add(i));
        s.pptIndices?.forEach((i) => usedPptIndices.add(i));
      }
    }
  }
  const remainingImages = assets.images.filter((_, i) => !usedImageIndices.has(i));
  const remainingVideos = assets.videos.filter((_, i) => !usedVideoIndices.has(i));
  const remainingPdfs = assets.pdfs.filter((_, i) => !usedPdfIndices.has(i));
  const remainingPpts = assets.ppts.filter((_, i) => !usedPptIndices.has(i));
  const hasRemaining =
    remainingImages.length > 0 ||
    remainingVideos.length > 0 ||
    remainingPdfs.length > 0 ||
    remainingPpts.length > 0;

  return (
    <>
      <section className="relative pt-32 pb-16 md:pt-40 md:pb-24 gradient-hero">
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button asChild variant="ghost" className="mb-6 -ml-2">
            <Link
              href="/activities"
              className="inline-flex items-center gap-2 text-tsst-text-muted hover:text-tsst-primary-dark"
            >
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

      {useSections ? (
        <section className="section bg-white">
          <div className="section-container">
            <div className="max-w-3xl mx-auto space-y-10">
              <h2 className="heading-sm mb-4">About this mobility</h2>
              <p className="body-lg">{mobility.longDescription}</p>
              {mobility.sections!.map((block, i) =>
                block.type === 'text' ? (
                  <p key={i} className="body-lg">
                    {block.content}
                  </p>
                ) : (
                  <MediaBlock key={i} slug={slug} assets={assets} section={block} />
                )
              )}
            </div>
          </div>
        </section>
      ) : (
        <>
          <section className="section bg-white">
            <div className="section-container">
              <div className="max-w-3xl mx-auto">
                <h2 className="heading-sm mb-4">About this mobility</h2>
                <p className="body-lg">{mobility.longDescription}</p>
              </div>
            </div>
          </section>

          {hasManifestAssets && (
            <section className="section gradient-subtle">
              <div className="section-container">
                <h2 className="heading-lg mb-6 flex items-center gap-2">
                  <ImageIcon className="w-6 h-6 text-tsst-primary-dark" />
                  Gallery &amp; resources
                </h2>
                {assets.images.length > 0 && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                    {assets.images.map((file, i) => {
                      const src = `${getMobilityAssetBase(slug)}/images/${file}`;
                      return (
                        <div
                          key={i}
                          className="aspect-video rounded-2xl overflow-hidden border border-tsst-border bg-tsst-card"
                        >
                          <img src={src} alt="" className="w-full h-full object-contain" />
                        </div>
                      );
                    })}
                  </div>
                )}
                {assets.videos.length > 0 && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                    {assets.videos.map((file, i) => {
                      const src = `${getMobilityAssetBase(slug)}/videos/${file}`;
                      return (
                        <Card key={i} className="overflow-hidden">
                          <CardContent className="p-0">
                            <div className="aspect-video bg-tsst-card">
                              <video src={src} controls className="w-full h-full" />
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
                {(assets.pdfs.length > 0 || assets.ppts.length > 0) && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {assets.pdfs.map((file, i) => {
                      const href = `${getMobilityAssetBase(slug)}/pdfs/${file}`;
                      return (
                        <Card key={i} className="card">
                          <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-red-100 flex items-center justify-center flex-shrink-0">
                              <FileText className="w-6 h-6 text-red-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-medium truncate">{file}</p>
                              <div className="flex gap-2 mt-2">
                                <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-tsst-primary-dark hover:underline">
                                  View
                                </a>
                                <a href={href} download={file} className="inline-flex items-center gap-1 text-sm text-tsst-primary-dark hover:underline">
                                  <Download className="w-4 h-4" /> Download
                                </a>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                    {assets.ppts.map((file, i) => {
                      const href = `${getMobilityAssetBase(slug)}/ppts/${file}`;
                      return (
                        <Card key={i} className="card">
                          <CardContent className="p-4 flex items-center gap-4">
                            <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                              <Presentation className="w-6 h-6 text-orange-600" />
                            </div>
                            <div className="min-w-0 flex-1">
                              <p className="font-medium truncate">{file}</p>
                              <a href={href} download={file} className="inline-flex items-center gap-1 mt-2 text-sm text-tsst-primary-dark hover:underline">
                                <Download className="w-4 h-4" /> Download
                              </a>
                            </div>
                          </CardContent>
                        </Card>
                      );
                    })}
                  </div>
                )}
              </div>
            </section>
          )}

          {!hasManifestAssets && mobility.images.length > 0 && (
            <section className="section gradient-subtle">
              <div className="section-container">
                <h2 className="heading-lg mb-8 flex items-center gap-2">
                  <ImageIcon className="w-6 h-6 text-tsst-primary-dark" />
                  Gallery
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {mobility.images.map((src, i) => (
                    <div key={i} className="aspect-video rounded-2xl overflow-hidden border border-tsst-border bg-tsst-card">
                      <img src={src} alt="" className="w-full h-full object-contain" />
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {!hasManifestAssets && mobility.videos.length > 0 && (
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

          {!hasManifestAssets && mobility.images.length === 0 && mobility.videos.length === 0 && (
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
        </>
      )}

      {useSections && hasRemaining && (
        <section className="section gradient-subtle">
          <div className="section-container">
            <h2 className="heading-lg mb-6 flex items-center gap-2">
              <Download className="w-6 h-6 text-tsst-primary-dark" />
              Additional media &amp; downloads
            </h2>
            <p className="body-sm text-tsst-text-muted mb-6">
              The following files were not included in the narrative above. You can view them here or download.
            </p>

            {remainingImages.length > 0 && (
              <div className="mb-10">
                <h3 className="heading-sm mb-4 flex items-center gap-2">
                  <ImageIcon className="w-5 h-5 text-tsst-primary-dark" />
                  Images
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {remainingImages.map((file) => {
                    const src = `${getMobilityAssetBase(slug)}/images/${file}`;
                    return (
                      <Card key={file} className="card overflow-hidden">
                        <div className="aspect-video bg-tsst-card flex items-center justify-center p-2">
                          <img src={src} alt="" className="max-w-full max-h-full w-auto h-auto object-contain" />
                        </div>
                        <CardContent className="p-3 flex items-center justify-between gap-2">
                          <span className="text-sm truncate">{file}</span>
                          <a href={src} download={file} className="inline-flex items-center gap-1 text-sm text-tsst-primary-dark hover:underline flex-shrink-0">
                            <Download className="w-4 h-4" /> Download
                          </a>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {remainingVideos.length > 0 && (
              <div className="mb-10">
                <h3 className="heading-sm mb-4 flex items-center gap-2">
                  <Video className="w-5 h-5 text-tsst-primary-dark" />
                  Videos
                </h3>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {remainingVideos.map((file) => {
                    const src = `${getMobilityAssetBase(slug)}/videos/${file}`;
                    return (
                      <Card key={file} className="card overflow-hidden">
                        <div className="aspect-video bg-tsst-card">
                          <video src={src} controls className="w-full h-full object-contain" />
                        </div>
                        <CardContent className="p-3 flex items-center justify-between gap-2">
                          <span className="text-sm truncate">{file}</span>
                          <a href={src} download={file} className="inline-flex items-center gap-1 text-sm text-tsst-primary-dark hover:underline flex-shrink-0">
                            <Download className="w-4 h-4" /> Download
                          </a>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {remainingPdfs.length > 0 && (
              <div className="mb-10">
                <h3 className="heading-sm mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-red-600" />
                  PDFs
                </h3>
                <div className="space-y-6">
                  {remainingPdfs.map((file) => {
                    const href = `${getMobilityAssetBase(slug)}/pdfs/${file}`;
                    return (
                      <Card key={file} className="card overflow-hidden">
                        <div className="p-3 flex items-center justify-between gap-2 border-b border-tsst-border bg-tsst-card/50">
                          <span className="font-medium truncate">{file}</span>
                          <div className="flex gap-3 flex-shrink-0">
                            <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-tsst-primary-dark hover:underline">
                              Open in new tab
                            </a>
                            <a href={href} download={file} className="inline-flex items-center gap-1 text-sm text-tsst-primary-dark hover:underline">
                              <Download className="w-4 h-4" /> Download
                            </a>
                          </div>
                        </div>
                        <div className="aspect-[4/3] min-h-[400px] bg-tsst-card">
                          <iframe src={href} title={file} className="w-full h-full border-0" />
                        </div>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}

            {remainingPpts.length > 0 && (
              <div>
                <h3 className="heading-sm mb-4 flex items-center gap-2">
                  <Presentation className="w-5 h-5 text-orange-600" />
                  Presentations
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {remainingPpts.map((file) => {
                    const href = `${getMobilityAssetBase(slug)}/ppts/${file}`;
                    return (
                      <Card key={file} className="card">
                        <CardContent className="p-4 flex items-center gap-4">
                          <div className="w-12 h-12 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0">
                            <Presentation className="w-6 h-6 text-orange-600" />
                          </div>
                          <div className="min-w-0 flex-1">
                            <p className="font-medium truncate">{file}</p>
                            <div className="flex gap-3 mt-2">
                              <a href={href} target="_blank" rel="noopener noreferrer" className="text-sm text-tsst-primary-dark hover:underline">
                                View in new tab
                              </a>
                              <a href={href} download={file} className="inline-flex items-center gap-1 text-sm text-tsst-primary-dark hover:underline">
                                <Download className="w-4 h-4" /> Download
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </section>
      )}

      <section className="section bg-tsst-text text-white">
        <div className="section-container text-center">
          <Button asChild className="btn-secondary">
            <Link href="/activities">View all activities &amp; timeline</Link>
          </Button>
        </div>
      </section>
    </>
  );
}
