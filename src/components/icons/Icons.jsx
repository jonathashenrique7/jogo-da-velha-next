export const Icon = ({ iconName, size, link }) => {
    return (
        <a href={link} target={"_blank"}>
            <img src={`/icons/${iconName}.png`} width={size} />
        </a>
    )
}

Icon.defaultProps = {
    size: '30px'
}