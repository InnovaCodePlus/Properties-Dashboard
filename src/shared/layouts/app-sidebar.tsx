import { Link } from "@tanstack/react-router";
import { Building, Home } from "lucide-react";

export const AppSidebar = () => {
    return (
        <aside className="max-w-70 w-full border-r border-border bg-sidebar">
            <div className="p-6">
                <h2 className="font-bold text-2xl">Homyz</h2>
            </div>


            <nav className="px-6 py-8">
                <span className="uppercase tracking-[10] text-xs text-muted-foreground">Menu Principal</span>
                <ul className="space-y-6 mt-4">
                    <li>
                        <Link className="sidebar__menu--item" preload={false} to="/admin">
                            <Home size={22} />
                            Inicio
                        </Link>
                    </li>

                    <li>
                        <Link className="sidebar__menu--item" preload={false} to="/admin/properties">
                            <Building size={22} />
                            Properties
                        </Link>
                    </li>

                </ul>
            </nav>

        </aside>
    );
};
