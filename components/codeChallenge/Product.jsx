import React, { useState } from "react";
import * as services from "./services";

function Product() {
  const [payload, setState] = useState({
    name: "",
    Manufacturer: "",
    Description: "",
    Cost: "",
  });
  const getProduct = (payload) => {
    services.getProducts(payload);
  };
  const onFormFieldChange = (e) => {
    const target = e.target;
    const newStateValue = target.value;
    const nameOfField = target.name;
    console.log(nameOfField, newStateValue);

    setState((prevState) => {
      const newStateObject = { ...prevState };
      newStateObject[nameOfField] = newStateValue;

      return newStateObject;
    });
  };

  return (
    <React.Fragment>
      <form>
        <div class="mb-3">
          <label for="exampleInputName" class="form-label">
            Name
          </label>
          <input
            value={payload.name}
            type="name"
            name="name"
            class="form-control"
            id="exampleInputName"
            aria-describedby="namelHelp"
            onChange={onFormFieldChange}
          />
          <div id="namelHelp" class="form-text">
            Please input the item name in the Form Field above.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputManufacturer" class="form-label">
            Manufacturer
          </label>
          <input
            value={payload.Manufacturer}
            name="Manufacturer"
            type="Manufacturer"
            class="form-control"
            id="exampleInputManufacturer1"
            onChange={onFormFieldChange}
          />
          <div id="ManufacturerHelp" class="form-text">
            Please input the item Manufacturer in the Form Field above.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputDescripton" class="form-label">
            Descripton
          </label>
          <input
            value={payload.Description}
            name="Description"
            type="Descripton"
            class="form-control"
            id="exampleInputDescripton1"
            onChange={onFormFieldChange}
          />
          <div id="DescriptonHelp" class="form-text">
            Please input the item Description in the Form Field above.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputCost" class="form-label">
            Cost
          </label>
          <input
            value={payload.Cost}
            name="Cost"
            type="Cost"
            class="form-control"
            id="exampleInputCost1"
            onChange={onFormFieldChange}
          />
          <div id="CostHelp" class="form-text">
            Please input the item Cost in the Form Field above.
          </div>
        </div>
        <button onClick={getProduct} type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </React.Fragment>
  );
}

export default Product;
