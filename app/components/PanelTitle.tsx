interface PanelTitleProps {
  children: React.ReactNode;
}

const PanelTitle = ({ children }: PanelTitleProps) => {
  return (
    <div className="bg-slate-50 text-blue-500 py-0.5 rounded-md text-center mt-3 mb-1">
      {children}
    </div>
  );
};

export default PanelTitle;
