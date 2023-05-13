interface Props {
    className?: string;
    children: React.ReactNode;
}

const DivWrapper: React.FC<Props> = ({ className, children }) => {
    return (
        <div className={className}>
            {children}
        </div>
    )
}

export default DivWrapper