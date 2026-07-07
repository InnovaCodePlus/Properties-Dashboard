import { createFileRoute } from '@tanstack/react-router';

import { Button } from '@/shared/components/ui/button';
import { TitlePage } from '@/shared/components/title-page';
import { PropertiesGrid } from '@/features/properties/components/properties-grid';

export const Route = createFileRoute('/admin/properties/')({
    component: RouteComponent,
});

function RouteComponent() {
    return (
        <>
            <TitlePage
                title='Propiedades'
                description='Administra departamentos, casas, suites y otros inmuebles'
                actions={
                    <Button>
                        + Agregar propiedad
                    </Button>
                }
            />

            <PropertiesGrid/>

        </>
    );
}
