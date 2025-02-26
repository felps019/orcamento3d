"use client";
import React, { useState, useEffect } from "react";

export function FilamentCalculation() {
	const [price, setPrice] = useState(0);
	const [quantity, setQuantity] = useState(0);
	const [weight, setWeight] = useState(0);

	useEffect(() => {
		const valor = (price / 1000) * quantity;
		setWeight(valor);
	}, [price, quantity]);

	return (
		<>
			<h2 className="my-4 text-lg text-slate-300 flex justify-center">
				{" "}
				Cálculo de consumo de filamento
			</h2>
			<form className="flex flex-col justify-center items-center" action="#">
				<div className="relative mb-6">
					<input
						className="peer text-gray-900 rounded border border-gray-300 w-full px-3 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
						type="text"
						id="valor"
						onChange={(e) => {
							const price = Number.parseFloat(e.target.value);

							if (price >= 0) {
								setPrice(price);
							} else {
								setPrice(0);
							}
						}}
						value={price}
						required
					/>
					<label
						htmlFor="valor"
						className="absolute left-3 top-0 text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 text-xs peer-focus:text-blue-500"
					>
						Preço do kg do Filamento
					</label>
				</div>

				<div className="relative mb-6">
					<input
						className="peer text-gray-900 rounded border border-gray-300 w-full px-3 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
						type="text"
						id="quantity"
						onChange={(e) => {
							const quantity = Number.parseFloat(e.target.value);

							if (quantity >= 0) {
								setQuantity(quantity);
							} else {
								setQuantity(0);
							}
						}}
						value={quantity}
						required
					/>
					<label
						htmlFor="quantity"
						className="absolute left-3 top-0 text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 text-xs peer-focus:text-blue-500"
					>
						Quantidade de material usado
					</label>
				</div>
				<div className="relative mb-6">
					<input
						className="peer bg-gray-300 text-gray-500 rounded border border-gray-300 w-full px-3 py-2"
						type="number"
						id="kg"
						value={weight}
						disabled={true}
					/>
					<label
						htmlFor="kg"
						className="absolute left-3 top-0 font-bold text-gray-500 peer-placeholder-shown:top-2.5 text-xs "
					>
						Valor Gasto
					</label>
				</div>
				{/* <div className="mb-8">
          <button className="flex justify-center text-center p-1.5 w-20 h-8 text-sm font-normal tracking-wider bg-blue-500 rounded-lg hover:bg-blue-800 active:bg-blue-600 focus:outline focus:ring-1 focus:ring-blue-400 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-90 duration-300" type="submit" value="submit" id="submit">Enviar</button>
        </div> */}
			</form>
		</>
	);
}
