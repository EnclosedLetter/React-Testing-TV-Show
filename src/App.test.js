import '@testing-library/jest-dom/extend-expect';
import React from "react";
import App from "./App";
import * as rtl from "@testing-library/react";
import userEvent from "@testing-library/user-event"
import {render} from "@testing-library/react"

describe ("App", () => {
    // let wrapper;
    // afterEach(rtl.cleanup);
    // beforeEach(() => {
        // wrapper =render(<App />)
    // })

    it ("displays the correct name", async () => {
        const { findByText, debug, getAllByText} = render(<App />)
        const text = await findByText("Select a season");
        expect(text).toBeInTheDocument();
        expect(text).toBeVisible();
        userEvent.click(text)
        debug();
        expect(getAllByText(/season /i)).toHaveLength(4)
    })



});
