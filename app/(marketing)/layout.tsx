import "@/app/globals.css";

import Header from "@/components/Header";

const MarketingLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default MarketingLayout;
