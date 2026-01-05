import React from 'react';
import Input from '../../../components/ui/Input';

const IngredientInput = ({ value, onChange, error }) => {
  return (
    <div className="w-full">
      <Input
        type="text"
        label="Food Ingredients"
        placeholder="Paste ingredients or upload a food label"
        description="Enter the ingredient list from your food product"
        value={value}
        onChange={(e) => onChange(e?.target?.value)}
        error={error}
        className="w-full"
      />
    </div>
  );
};

export default IngredientInput;