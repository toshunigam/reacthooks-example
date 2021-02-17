import { useState, useEffect, useRef } from "react";

    const useCustomForm = ({
      initialValues,
      onSubmitForm
    }) => {
      const [values, setValues] = useState(initialValues || {});
      const [errors, setErrors] = useState({});
      const formRendered = useRef(true);

      useEffect(() => {
        if (formRendered.current) {
          setValues(initialValues);
        }
        formRendered.current = false;
      }, [initialValues]);

      const handleChange = (event) => {
        const { target } = event;
        const { name, value } = target;
        event.persist();
        setValues({ ...values, [name]: value });
    };

      const handleSubmit = (event) => {
        if (event) event.preventDefault();
        setErrors({ ...errors });
        onSubmitForm({ values, errors });
      };

      return {
        values,
        handleChange,
        handleSubmit
      };
};

export default useCustomForm;
