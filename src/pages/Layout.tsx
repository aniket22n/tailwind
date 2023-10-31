import { AppBar } from "@/components/AppBar";

const Layout = ({ children }: any) => {
  return (
    <div>
      <AppBar />
      {children}
    </div>
  );
};
export default Layout;
