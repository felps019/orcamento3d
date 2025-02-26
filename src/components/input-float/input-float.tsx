type InputFloatProp = {
	title: string;
	value: number;
	setValue: (value: number) => void;
	id: string;
};

export function InputFloat({ title, value, setValue, id }: InputFloatProp) {
	return (
		<div className="relative mb-6">
			<input
				className="peer text-gray-900 rounded border border-gray-300 w-full px-3 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
				type="text"
				id={id}
				onChange={(e) => {
					const power = Number.parseFloat(e.target.value);

					if (power >= 0) {
						setValue(power);
					} else {
						setValue(0);
					}
				}}
				value={value}
				required
			/>
			<label
				htmlFor={id}
				className="absolute left-3 top-0 text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 text-xs peer-focus:text-blue-500"
			>
				{title}
			</label>
		</div>
	);
}
