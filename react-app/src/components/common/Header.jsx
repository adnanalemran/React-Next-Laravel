 
import Theme from "./Theme";

const Header = () => {
  
 ;
 
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
 

      <div className="navbar-end">
       <Theme/>
      </div>
    </div>
  );
};

export default Header;
