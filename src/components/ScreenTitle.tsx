interface ScreenTitleProps {
    title: string;
}

function ScreenTitle({ title }: ScreenTitleProps) {
    return (
        <div className="text-center">
            <h1 className="text-xl font-semibold">{title}</h1>
        </div>
    );
}

export default ScreenTitle;