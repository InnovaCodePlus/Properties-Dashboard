import { Button } from "@/shared/components/ui/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/shared/components/ui/dialog";
import { NewPropertyForm } from "./new-property-form";


export const NewPropertyDialog = () => {
    return (
        <Dialog>

            <DialogTrigger>
                <Button>
                    + Agregar propiedad
                </Button>
            </DialogTrigger>

            <DialogContent className="max-w-3xl! w-full">
                
                <DialogHeader className="border-b border-border pb-2">
                    <DialogTitle>Nueva propiedad</DialogTitle>
                    <DialogDescription>
                        Completa la información del inmueble para registrarlo.
                    </DialogDescription>
                </DialogHeader>


                <NewPropertyForm/>




            </DialogContent>
        </Dialog>
    );
};
