import Header from "@/components/Header";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default DashboardLayout;
