
import { Button } from "@/shared/components/ui/button";
import { BathIcon, Bed, LocateIcon, Square } from "lucide-react";
import { Card, CardContent, CardFooter, CardHeader } from '@/shared/components/ui/card';

export const PropertyCard = () => {
    return (
        <Card>

            <CardHeader>

            </CardHeader>

            <CardContent>
                <div className="border-b border-border mb-2 pb-2">
                    <h2>Departamente Sopocachi</h2>
                    <span className="flex items-center gap-2 text-muted-foreground">
                        <LocateIcon size={16} /> Sopocachi - La Paz
                    </span>
                </div>

                <div className="flex gap-6 text-xs">
                    <span className="flex items-center gap-2">
                        <Bed size={16} /> 3
                    </span>
                    <span className="flex items-center gap-2">
                        <BathIcon size={16} /> 2
                    </span>
                    <span className="flex items-center gap-2">
                        <Square size={16} /> 120 m²
                    </span>
                </div>

            </CardContent>


            <CardFooter>
                <span className="text-lg font-semibold">
                    380.000 Bs
                </span>

                <Button variant="outline" size="sm" className="ml-auto">
                    Ver propiedad
                </Button>
            </CardFooter>
        </Card>
    );
};
