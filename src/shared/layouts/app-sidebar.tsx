import { Link, useLocation } from "@tanstack/react-router";
import { Building, Home } from "lucide-react";


export const AppSidebar = () => {

    const { pathname } = useLocation();

    return (
        <aside className="max-w-70 w-full border-r border-border bg-sidebar">

            <div className="p-6 flex items-center gap-2">
                <div className="p-2 rounded-xl text-white bg-linear-to-r from-primary to-blue-400">
                    <Building />
                </div>
                <h2 className="font-bold text-2xl">Homyz</h2>
            </div>


            <nav className="px-6 py-8">
                <span className="uppercase tracking-[10] text-xs text-muted-foreground">Menu Principal</span>
                <ul className="space-y-6 mt-4">
                    <li>
                        <Link
                            to="/admin"
                            preload={false}
                            className={
                                pathname === "/admin" ? "sidebar__menu--item-active" : "sidebar__menu--item"
                            }
                        >
                            <Home size={22} />
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link
                            preload={false}
                            to="/admin/properties"
                            className={
                                pathname === "/admin/properties" ? "sidebar__menu--item-active" : "sidebar__menu--item"
                            }
                        >
                            <Building size={22} />
                            Properties
                        </Link>
                    </li>

                </ul>
            </nav>

        </aside>
    );
};
