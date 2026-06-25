import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/properties')({
    component: RouteComponent,
    loader: async () => {
        console.log("Disparando Loader");
        return { message: "Hello from loader!" };
    }
});

function RouteComponent() {

    const { message } = Route.useLoaderData();

    return <div>{ message }</div>;
}
