import React from "react";

export function FilamentCalculation() {
  return (
    <>
      <h2 className="text-lg text-slate-300 flex justify-center">Cálculo de consumo de filamento</h2>
      <form
        className="flex flex-col justify-center items-center"
        action="#"
        method="post"
      >
        <br />
        <div className="relative mb-6">
          <input
            className="peer text-gray-900 rounded border border-gray-300 w-full px-3 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-800"
            type="text"
            id="valor"
            required/>
          <label
            htmlFor="valor"
            className="absolute left-3 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500"
          >
            Preço do kg do Filamento
          </label>
        </div>
        <br />
        <div className="relative mb-6">
          <input
            className="peer text-gray-900 rounded border border-gray-300 w-full px-3 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="kg"
            placeholder="Digite aqui"
            required
          />
          <label
            htmlFor="kg"
            className="absolute left-3 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500"
          >
            Peso do filamento
          </label>
        </div>
        <br />
        <div className="relative mb-6">
          <input
            className="peer text-gray-900 rounded border border-gray-300 w-full px-3 py-2 placeholder-transparent focus:outline-none focus:ring-2 focus:ring-blue-500"
            type="text"
            id="quantity"
            placeholder="Digite aqui"
            required
          />
          <label
            htmlFor="quantity"
            className="absolute left-3 top-2 text-gray-500 transition-all peer-placeholder-shown:top-2.5 peer-placeholder-shown:text-gray-500 peer-focus:top-0 peer-focus:text-xs peer-focus:text-blue-500"
          >
            Quantidade de material usado
          </label>
        </div>
        <div>
          <button className="flex justify-center text-center p-1.5 w-20 h-8 text-sm font-normal tracking-wider bg-blue-500 rounded-lg hover:bg-blue-800 active:bg-blue-600 focus:outline focus:ring-1 focus:ring-blue-400 transition ease-in-out delay-100 hover:-translate-y-1 hover:scale-90 duration-300" type="submit" value="submit" id="submit">Enviar</button>
        </div>
      </form>
    </>
  );
}
