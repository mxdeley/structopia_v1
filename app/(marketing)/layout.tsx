import Header from "@/components/Header";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-marketing">
      <Header />
      {children}
    </div>
  );
};

export default MarketingLayout;
