import { AppSidebar } from '#/shared/layouts/app-sidebar';
import { createFileRoute, Outlet } from '@tanstack/react-router';

export const Route = createFileRoute('/admin')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <div className='flex'>
                <AppSidebar />
                <main className='h-screen w-full'>
                    <Outlet />
                </main>
            </div>
        </>
    );
}
