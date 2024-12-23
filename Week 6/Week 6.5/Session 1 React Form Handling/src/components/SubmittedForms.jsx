// SubmittedForms.jsx
import React, { useContext } from "react";
import { FormContext } from "../../utils/FormContext";

const SubmittedForms = () => {
    const { submittedData, deleteSubmittedForm } = useContext(FormContext);

    return (
        <div className="text-white flex flex-col items-center gap-4">
            <h1 className="text-2xl font-bold pt-4">Submitted Forms</h1>
            {submittedData.length > 0 ? (
                submittedData.map((data, index) => (
                    <div
                        key={index}
                        className="bg-gray-700 p-4 rounded-lg w-4/5 flex justify-between items-center max-sm:text-sm max-sm:w-11/12"
                    >
                        <div>
                            <p>Name: {data.name}</p>
                            <p>Email: {data.email}</p>
                            <p>Contact: {data.number}</p>
                        </div>
                        <button
                            onClick={() => deleteSubmittedForm(index)}
                            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg max-sm:px-2 max-sm:py-1"
                        >
                            Delete
                        </button>
                    </div>
                ))
            ) : (
                <p>No submitted forms yet.</p>
            )}
        </div>
    );
};

export default SubmittedForms;
