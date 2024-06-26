import {Link} from "react-router-dom";

const Navbar = () => {
    return (

        <div className="navbar fixed top-0 w-100% left-0 flex items-center ">
            <div className="flex-1">
                <Link to={"/"} className="btn btn-ghost text-xl">Open</Link>
                <Link to={"/progress"} className="btn btn-ghost text-xl">In Progress</Link>
                <Link to={"/done"} className="btn btn-ghost text-xl">Done</Link>

            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto"/>
                </div>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img alt="Tailwind CSS Navbar component"
                                 src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"/>
                        </div>
                    </div>
                    <ul tabIndex={0}
                        className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>

    );
};

export default Navbar;