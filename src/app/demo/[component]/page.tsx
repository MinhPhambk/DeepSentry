import { notFound } from "next/navigation";
import { componentsPreviewRegistry } from "./components-preview-registry";

interface PreviewPageProps {
  params: Promise<{
    component: string;
  }>;
}

export const metadata = {
  title: "Demo chức năng",
  description:
    "Phát hiện Deepfake, Phát hiện khuôn mặt giả mạo bằng AI.",
};

// Generate static params for all available components in build time
export async function generateStaticParams() {
  return Object.keys(componentsPreviewRegistry).map((key) => ({
    component: key,
  }));
}

export default async function PreviewPage({ params }: PreviewPageProps) {
  const { component: componentName } = await params;

  const Component = componentsPreviewRegistry[componentName]?.component;

  if (!Component) {
    notFound();
  }

  return (
    <main className="min-h-screen w-full flex justify-center pt-5">
      <Component />
    </main>
  );
}
