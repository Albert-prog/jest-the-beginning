import React from "react";
import { shallow } from "enzyme";
import App from "./App";
import { routes } from "./data/apiRoutes";

import useAxios from "./useAxios";
jest.mock("./useAxios");

let wrapper;

describe("App components rendering", () => {
	beforeEach(() => {
		useAxios.mockReturnValue([
			{
				value: ["nerdy", "explicit"],
			},
		]);
		wrapper = shallow(<App />);
	});

	test("has the class 'App'", () => {
		expect(wrapper.hasClass("App")).toBe(true);
	});

	test("contains a button for Random jokes", () => {
		expect(wrapper.find("button").text()).toBe("Random Jokes");
	});

	test("contains Jokes component", () => {
		expect(wrapper.find("Jokes").length).toBe(1);
	});

	test("contains dropdown menu", () => {
		expect(wrapper.find("select").length).toBe(1);
	});

	test("contains select options by axios returned values", () => {
		expect(wrapper.find("option").length).toBe(2);
	});
});

describe("App components interactions", () => {
	let url;

	beforeEach(() => {
		useAxios.mockReturnValue([
			{
				value: ["nerdy", "explicit"],
			},
		]);
		wrapper = shallow(<App />);
		url = wrapper.find("Jokes").first().props().url;
	});

	test("the button click changes the url", () => {
		wrapper.find("button").first().simulate("click");
		expect(wrapper.find("Jokes").first().props().url).not.toBe(url);
	});

	test("the dropdown menu value's changing changes the url to the good category url", () => {
		wrapper
			.find("select")
			.first()
			.simulate("change", { target: { value: "explicit" } });
		expect(wrapper.find("Jokes").first().props().url).toBe(routes.categoryJokes("explicit"));
	});
});
