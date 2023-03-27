
import { render, screen } from "@testing-library/react"
import App from "../App"
import '@testing-library/jest-dom/extend-expect'
import RecipeForm from "../components/RecipeForm"

test("recipe name should be rendered", ()=>{
  render(<App/>)
  const userInputEl = screen.getByText(/About Taste IT/i);
  expect(userInputEl).toBeInTheDocument()
})

test("get by label", ()=>{
  render(<RecipeForm/>)
  const labeltext = screen.getByLabelText(/name/i);
  expect(labeltext).toBeInTheDocument()
})