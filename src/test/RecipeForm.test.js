
import { render, waitFor, screen } from "@testing-library/react";

import axios from "axios";

import RecipeForm from "../components/RecipeForm";

jest.mock("axios");

const dummyRecipeData = [
{
id: 50,
name: "nepal",
author: "nepal",
desc: "nepal",
    country: "nepal",
    flag: "nepal",
    img: "nepal",
    inc: [],
    inst: "nepal",
}
];

test("RecipeForm Component test with mocked data", async () => {
axios.get.mockResolvedValue({ data: dummyRecipeData });
render(<RecipeForm />);

const RecipeFormData = await waitFor(() => screen.findAllByTestId("testit"));

expect(RecipeFormData).toHaveLength(1);
});