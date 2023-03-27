import { render, screen } from "@testing-library/react";
import RecipeForm from "../components/RecipeForm";
import '@testing-library/jest-dom/extend-expect'

describe(RecipeForm,() => {
    it("form displays all labels and inputs", ()=>{
        const {} = render(<RecipeForm 
        name="" 
        id=""
        author= ""
        desc= ""
        country= ""
        flag=""
        img= ""
        inst= ""
        />)

        const labeltext = screen.getByLabelText(/name/i);
       expect(labeltext).toBeInTheDocument()
    });

})