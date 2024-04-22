

export const MainLayout = (props) => {
    const { header, content } = props;

    return (
        <div>
            <div>{header}</div>
            <div>{content}</div>
        </div>
    )
}