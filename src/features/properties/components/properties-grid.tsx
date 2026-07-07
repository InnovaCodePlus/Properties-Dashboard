import { PropertyCard } from "./property-card";


export const PropertiesGrid = () => {
    
    const properties = [0,1,2,3,4,5,6,7,8,9];

    return (
        <section className="pt-12 pb-6">
            <div className="container">
                <h3 className="text-muted-foreground text-sm">
                    10 propiedades encontradas
                </h3>

                <ul className="grid grid-cols-4 gap-6">
                    {
                        properties.map(property => (
                            <li>
                                <PropertyCard/>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </section>
    );
};
