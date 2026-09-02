interface LayoutProps {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="py-4 px-20">
      {children}
    </div>
  )
};

export default Layout;
