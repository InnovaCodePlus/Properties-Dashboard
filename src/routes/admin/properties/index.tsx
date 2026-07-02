import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/admin/properties/')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <h1>Propiedades</h1>

        </>
    );
}
