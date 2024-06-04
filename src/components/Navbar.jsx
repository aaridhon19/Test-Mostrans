export default function Navbar() {
  return (
    <>
      <div className="navbar bg-base-100 justify-center">
        {" "}
        {/* Center the content */}
        <div className="flex-2">
          <ul className="menu menu-horizontal ml-auto font-bold" style={{fontFamily:"fantasy", fontSize:"18px"}}>
            <li className="mr-4 mt-3">
              <a href="/character">Character</a>
            </li>
            <li>
              <a href="/" className="btn btn-ghost normal-case text-xl mt-1">
                <img
                  src="https://mostrans.co.id/CompanyProfile/static/media/logo-mostrans.ff215158.png"
                  alt="Mostrans Logo"
                  className="w-12 h-12"
                  href="/"
                />
              </a>
            </li>
            <li className="ml-4 mt-3">
              <a href="/location">Location</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
