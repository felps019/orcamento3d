"use client";
import React, { useState, useEffect } from "react";
import { InputFloat } from "../input-float/input-float";

export function EnergyCalculation() {
	const [power, setPower] = useState(300);
	const [time, setTime] = useState(60);
	const [priceEnergy, setPriceEnergy] = useState(0);
	const [taxa, setTaxa] = useState(13.84 / 1000);

	useEffect(() => {
		const custoHora = taxa * power;
		const total = custoHora * (time / 60);
		setPriceEnergy(total);
	}, [power, time]);

	return (
		<>
			<h2 className="mt-6 mb-4 text-lg text-slate-300 flex justify-center">
				Cálculo de consumo de energia
			</h2>
			<form className="flex flex-col justify-center items-center" action="#">
				<InputFloat
					title="Potência da impressora(W/h)"
					value={power}
					setValue={setPower}
					id="power"
				/>

				<InputFloat
					title="Tempo de impressão (minutos)"
					value={time}
					setValue={setTime}
					id="time"
				/>

				<InputFloat
					title="Taxa da distribuidora"
					value={taxa}
					setValue={setTaxa}
					id="taxa"
				/>

				<div className="relative mb-6">
					<input
						type="number"
						id="priceEnergy"
						className="peer text-gray-500 bg-gray-300 rounded border border-gray-300 w-full px-3 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
						value={priceEnergy}
						disabled={true}
					/>
					<label
						htmlFor="price"
						className="absolute left-3 top-0 font-bold text-gray-500 peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 text-xs peer-focus:text-blue-500"
					>
						Custo total de energia
					</label>
				</div>
			</form>
		</>
	);
}
