export const Button = ({className, children, onClick}) => {
    const baseClasses = " relative overflow-hidden rounded-full ring-2";

    const classes = `${baseClasses} ${className}`;

    return (
        <button className={classes} onClick={onClick}>{children}</button>
    )
}
