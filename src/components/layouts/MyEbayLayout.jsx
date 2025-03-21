import { Outlet, NavLink } from "react-router-dom";

const menuItems = [
  { name: "Summary", path: "recently-viewed" },
  { name: "Recently viewed", path: "recently-viewed" },
  { name: "Bids & offers", path: "bids-offers" },
  { name: "Watchlist", path: "watchlist" },
  { name: "Purchases", path: "purchases" },
  { name: "Saved searches", path: "saved-searches" },
  { name: "Saved sellers", path: "saved-sellers" },
  { name: "Selling", path: "selling" },
  { name: "My Garage", path: "my-garage" },
  { name: "My Collection", path: "my-collection" },
  { name: "Sizes", path: "sizes" },
  { name: "PSA Vault", path: "psa-vault" },
];

function MyEbayLayout() {
  return (
    <div className="flex">
      <nav className="w-1/4 p-4 border-r">
        <h1 className="mb-4 text-2xl font-bold">My eBay</h1>
        <ul className="space-y-2">
          {menuItems.map((item) => (
            <li key={item.name}>
              <NavLink
                to={`/route2/${item.path}`}
                className={({ isActive }) =>
                  `block p-2 rounded`
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
      <div className="w-3/4 p-4">
        <Outlet />
      </div>
    </div>
  );
}

export default MyEbayLayout;
