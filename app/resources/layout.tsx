import Header from "@/components/Header";

const ResourcesLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default ResourcesLayout;
