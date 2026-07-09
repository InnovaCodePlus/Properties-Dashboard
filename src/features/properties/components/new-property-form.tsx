import { Field, FieldLabel } from "@/shared/components/ui/field";
import { Input } from "@/shared/components/ui/input";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/shared/components/ui/select";
import { Textarea } from "@/shared/components/ui/textarea";

export const NewPropertyForm = () => {
    return (
        <form className="space-y-8">
            <div className="flex gap-4 items-center">
                <Field>
                    <FieldLabel htmlFor="propertyName">
                        Nombre de la propiedad
                    </FieldLabel>

                    <Input
                        id="propertyName"
                        placeholder="Ej: Departamento en el centro de la ciudad"
                    />
                </Field>

                <Field>
                    <FieldLabel>
                        Codigo de la propiedad
                    </FieldLabel>

                    <Input
                        disabled
                    />
                </Field>
            </div>

            <Field>
                <FieldLabel htmlFor="propertyDescription">
                    Descripción de la propiedad
                </FieldLabel>

                <Textarea
                    id="propertyDescription"
                    placeholder="Agrega una descripción"
                    rows={10}
                />
            </Field>

            <div className="flex gap-4 items-center">
                <Field>
                    <FieldLabel htmlFor="propertyRooms">
                        Cuartos
                    </FieldLabel>

                    <Input
                        id="propertyRooms"
                        type="number"
                        placeholder="Ej: 2"
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="propertyBathrooms">
                        Baños
                    </FieldLabel>

                    <Input
                        id="propertyBathrooms"
                        type="number"
                        placeholder="Ej: 3"
                    />
                </Field>
                <Field>
                    <FieldLabel htmlFor="propertySquareMeters">
                        Metros cuadrados
                    </FieldLabel>

                    <Input
                        id="propertySquareMeters"
                        type="number"
                        placeholder="Ej: 120"
                        step={0.01}
                    />
                </Field>
            </div>

            <Field>
                <FieldLabel>
                    Ubicación de la propiedad
                </FieldLabel>

                <Input
                    placeholder="Ej: Calle 123, Ciudad, País"
                />
            </Field>

            <Select >
                <SelectTrigger className="w-full">
                    <SelectValue placeholder="Tipo de propiedad" />
                </SelectTrigger>
                <SelectContent>
                    <SelectGroup>
                        <SelectLabel>Tipos de propiedad</SelectLabel>
                        <SelectItem value="house">Casa</SelectItem>
                        <SelectItem value="apartment">Departamento</SelectItem>
                        <SelectItem value="land">Terreno</SelectItem>
                    </SelectGroup>
                </SelectContent>
            </Select>
        </form>
    );
};
