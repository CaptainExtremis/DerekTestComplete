import React, { useState } from 'react';
import { JsonForms } from '@jsonforms/react';
import { rankWith, scopeEndsWith } from '@jsonforms/core';

export default rankWith(
    3, //increase rank as needed
    scopeEndsWith('rating')
  );

export function myComponent() {
    const [data, setData] = useState();

    useEffect(() => {
        fetch("Derek Test/devtest/form1")
        .then((response) => response.json())
        .then((data) => setData(data));
    }, []);
    
    if(!data) {
        return null;
    }
    
    return <Form1 jsonSchema={data} />
}

export function Form1({ jsonSchema }) {
    const { fields, validationSchema } = JSONForms(jsonSchema);
    const handleSubmit = (values) => {};

    return (
        <DynamicForm
        fields={fields}
        validationSchema={validationSchema}
        handleOnSubmit={handleSubmit}
        />
    );
}
