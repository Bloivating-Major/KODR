import React, { createContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
  const [submittedData, setSubmittedData] = useState([]);
  const [favoriteData, setFavoriteData] = useState([]);

  const submitForm = (formData) => {
    setSubmittedData((prev) => [...prev, formData]);

    if (formData.isfavorite) {
      setFavoriteData((prev) => [...prev, formData]);
    }
  };

  const deleteSubmittedForm = (index) => {
    setSubmittedData((prev) => prev.filter((_, i) => i !== index));
  };

  const deleteFavoriteForm = (index) => {
    setFavoriteData((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <FormContext.Provider value={{ submittedData, favoriteData, submitForm, deleteFavoriteForm, deleteSubmittedForm }}>
      {children}
    </FormContext.Provider>
  );
};
