export const HamburgerMenu = ({ onClick }) => {
  return (
    <div 
      className="fixed inset-0 bg-n-8/90 backdrop-blur-sm lg:hidden transition-opacity"
      onClick={onClick}
    />
  );
};