const Button = ({ children, variation, ...props }) => (
	<button
		{...props}
		className={`title mr-3  rounded-2xl px-8 py-2 shadow-md transition duration-300 ease-in-out ${
			variation === "primary"
				? "bg-tertiary hover:bg-transparent border-transparent hover:border-tertiary border-2 hover:text-tertiary box-border"
				 : "transparent border-2 border-tertiary text-gray-700 hover:bg-tertiary hover:text-white box-border"
		}`}>
		{children}
	</button>
);

export default Button;