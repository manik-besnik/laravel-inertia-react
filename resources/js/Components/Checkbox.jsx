export default function Checkbox({ className = '', ...props }) {
    return (
        <input
            {...props}
            type="checkbox"
            className={
                `${props.small ? 'h-3 w-3' : 'h-[15px] w-[15px]'} rounded-full border-gray-300 text-t-secondary shadow-sm focus:ring-0` +
                className
            }
        />
    );
}
