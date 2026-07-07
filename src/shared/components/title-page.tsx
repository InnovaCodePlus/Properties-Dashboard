


interface Props {
    title: string;
    description: string;
    actions?: React.ReactNode; 
}

export const TitlePage = ({ description, title, actions }: Props) => {
    return (
        <header>
            <div className="container py-4 flex items-center justify-between gap-4">
                
                <div>
                    <h1 className="font-semibold text-3xl">
                        { title } 
                    </h1>
                    <p className="text-muted-foreground">{ description }</p>
                </div>

                { actions }
            </div>
        </header>
    );
};
