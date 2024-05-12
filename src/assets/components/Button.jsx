function Button({ title, onselect, classname }) {
	return (
		<button onClick={onselect} className={classname}>
			{title}
		</button>
	);
}

export default Button;
