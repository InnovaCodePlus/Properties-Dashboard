import { createFileRoute } from '@tanstack/react-router';

import { TitlePage } from '@/shared/components/title-page';
import { PropertiesGrid } from '@/features/properties/components/properties-grid';
import { NewPropertyDialog } from '@/features/properties/components/new-property-dialog';

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
                    <NewPropertyDialog/>
                }
            />

            <PropertiesGrid/>

        </>
    );
}
