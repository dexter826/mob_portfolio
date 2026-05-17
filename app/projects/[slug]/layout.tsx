import { Metadata } from 'next';
import { PROJECTS } from '@/lib/data';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const resolvedParams = await params;
  const project = PROJECTS.find(p => p.slug === resolvedParams.slug);

  if (!project) {
    return {
      title: '404',
    };
  }

  return {
    title: project.title,
    description: project.description.vi,
  };
}

export default function ProjectLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
