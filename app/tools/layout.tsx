import Header from "@/components/Header";

const ToolsLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default ToolsLayout;
