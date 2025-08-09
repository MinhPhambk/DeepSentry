export const metadata = {
  title: "Playground",
  description:
    "Try out Nurui components in real-time. Customize, preview, and export directly from the playground.",
  keywords: [
    "Nurui Playground",
    "Live UI Editor",
    "Component Preview",
    "React Component Sandbox",
    "UI Customization",
    "Nurui UI Components",
  ],
};

const page = () => {
  const working = true;
  if (working)
    return <div>Playground page is under development. Coming soon!</div>;
  return <div></div>;
};

export default page;
