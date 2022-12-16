import React, { useState, useEffect } from "react";
import Select from "react-select";
import { StylesConfig } from "react-select/dist/react-select.cjs";

export default function Modal({ showModal, setShowModal }) {
  // const addReservation = (reservation) => {
  //   newReservation.push(reservation);
  //   console.log(
  //     "🚀 ~ file: Modal.jsx:5 ~ addReservation ~ reservation",
  //     reservation
  //   );

  //   return;
  // };

  // const newReservation = {
  //   id: 2,
  //   name: "Romelu Lukaku",
  //   imageUrl:
  //     "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
  //   startDatetime: "2022-12-13T14:00",
  //   endDatetime: "2022-12-13T14:30",
  //   typeMeeting: "economy",
  //   title: "Economia aziendale",
  // };

  const options = [
    { value: "formazione", label: "Formazione" },
    { value: "vendita", label: "Vendita" },
    { value: "consulenza", label: "Consulenza" },
  ];

  // state as object to maintain form's input
  const [values, setValues] = useState({
    goal: "",
    textarea: "",
  });

  console.log("🚀 ~ file: Modal.jsx:37 ~ Modal ~ values", values);

  const [obiettivo, setObiettivo] = useState("");
  // console.log("🚀 ~ file: Modal.jsx:40 ~ Modal ~ obiettivo", obiettivo);

  // update a value everytime it is changed
  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  // assegno il nuovo valore onChange del select allo stato values
  useEffect(() => {
    const nuovoObiettivo = obiettivo.value;
    setValues({ ...values, goal: nuovoObiettivo });
  }, [obiettivo]);

  // !ERRORE FORSE PERCHè è UNA FUNZIONA IN TYPESCRIPT
  const customStyles: StylesConfig = {
    control: (provided: Record<string, unknown>, state: any) => ({
      ...provided,

      border: "1px solid #9496a1",
    }),
  };

  return (
    <>
      {showModal ? (
        <div className="fixed inset-0 z-50 flex min-h-screen w-screen items-center justify-center overflow-y-auto overflow-x-hidden bg-[#343a4088] outline-none focus:outline-none">
          {" "}
          <div className="relative ">
            {" "}
            {/* icona x per chiudere */}
            <div
              className="absolute -top-3 -right-3 flex h-[34px] w-[34px] items-center justify-center rounded-md bg-accentDesaturated shadow-md"
              onClick={() => setShowModal(false)}
            >
              <button>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            {/* DUE BLOCCHI */}
            <div className="flex flex-col justify-between rounded-md shadow-md lg:flex-row">
              {/* evento */}
              <div className="p-16 bg-accentDesaturated">
                <h3>Crea evento</h3>
                <ul className="flex text-sm mt-9 gap-7 lg:flex-col">
                  <li>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center justify-center text-white rounded-md h-9 w-9 bg-accent">
                        <span>1</span>
                      </div>
                      <span>Stanza</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center justify-center text-white rounded-md h-9 w-9 bg-accent">
                        <span>2</span>
                      </div>
                      <span>Data e ora</span>
                    </div>
                  </li>
                  <li>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center justify-center text-white rounded-md h-9 w-9 bg-accent">
                        <span>3</span>
                      </div>
                      <span>Dettagli</span>
                    </div>
                  </li>
                </ul>
              </div>
              {/* dettagli */}
              <div className="flex flex-col justify-between bg-white px-14 pt-[4rem] pb-14 lg:min-w-[775px]">
                <div>
                  <h2 className="text-2xl font-main">Dettagli</h2>
                  <h3 className="text-sm text-accentParagraph">
                    Lorem ipsum dolor.
                  </h3>
                </div>
                <form action="" className="flex flex-col my-11 ">
                  <label htmlFor="" className="text-accentParagraph">
                    Obiettivo
                    <Select
                      options={options}
                      required
                      placeholder="Seleziona obiettivo"
                      onChange={setObiettivo}
                      theme={(theme) => ({
                        ...theme,
                        borderRadius: 5,
                        borderColor: "#171e25",
                        colors: {
                          ...theme.colors,
                          primary25: "#dfe0e7",
                          primary: "#171e25",
                        },
                      })}
                      styles={customStyles}
                      isSearchable={false}
                    />
                    {/* <select
                      name=""
                      id=""
                      placeholder="Seleziona obiettivo"
                      className=" mt-1 w-full rounded-md border-[1px] border-solid border-accentParagraph px-2 py-1 text-accent placeholder:text-xs"
                    >
                      <option value="grapefruit" className="w-full">
                        Grapefruit
                      </option>
                      <option value="lime" className="w-[10px]">
                        Lime
                      </option>
                    </select> */}
                  </label>
                  <label htmlFor="" className="mt-6 text-accentParagraph">
                    Note evento
                    <textarea
                      type="text"
                      name="textarea"
                      id=""
                      className="mt-1 min-h-[78px] w-full rounded-md border-[1px] border-solid border-accentParagraph px-2 py-1 text-accent "
                      onChange={(e) => onChange(e)}
                    />
                  </label>
                </form>

                {/*footer*/}
                <div className="flex items-center justify-end gap-8 ">
                  <button
                    className="flex items-center gap-[11px] rounded-md border-2 border-solid px-4 py-2 text-sm text-accentParagraph"
                    type="button"
                    onClick={() => setShowModal(false)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="inline w-3"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 19.5L8.25 12l7.5-7.5"
                      />
                    </svg>
                    Precedente
                  </button>
                  <button
                    className="px-4 py-2 text-sm text-white rounded-md bg-accent"
                    type="button"
                    // onClick={() => setShowModal(false)}
                    // onClick={addReservation}
                  >
                    Crea evento
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}
