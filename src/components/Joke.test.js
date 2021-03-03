import React from "react";
import { shallow } from "enzyme";
import Joke from "./Joke";

let wrapper;

describe("Joke component rendering", () => {
	beforeEach(() => {
		wrapper = shallow(<Joke joke={{ id: 1, joke: "Joke 1" }} />);
	});

	test("has the correct class", () => {
		expect(wrapper.hasClass("joke-card")).toBe(true);
	});

	test("has spans", () => {
		expect(wrapper.find("span").length).toBe(2);
	});

	test("show correct data", () => {
		expect(wrapper.text()).toBe("1Joke 1");
	});
});
