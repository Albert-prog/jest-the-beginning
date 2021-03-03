import React from "react";
import { shallow } from "enzyme";
import Jokes from "./Jokes";

import useAxios from "../useAxios";
jest.mock("../useAxios");

let wrapper;

describe("Jokes component rendering", () => {
	beforeEach(() => {
		useAxios.mockReturnValue([
			{
				value: [
					{
						joke: "Joke 1",
					},
					{
						joke: "Joke 2",
					},
					{
						joke: "Joke 3",
					},
				],
			},
		]);
		wrapper = shallow(<Jokes url={"mockedurl.com"} />);
	});

	test("has the correct class", () => {
		expect(wrapper.hasClass("card-container")).toBe(true);
	});

	test("render as many Joke component as the returned data", () => {
		expect(wrapper.find("Joke").length).toBe(3);
	});
});
