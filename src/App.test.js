import '@testing-;ibrary/jest-dom/extend-expect';
import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";

describe ("App", () => {
    let wrapper;
    afterEach(rtl.cleanup);
    beforeEach(() => {
        wrapper =rtl.render(<App />)
    })

    it ("displays the correct name", async () => {
        const text = await wrapper.findByText("Select a szn");
        expect(text).toBeInTheDocument();
        expect(text).toBeVisible();
    })
});
