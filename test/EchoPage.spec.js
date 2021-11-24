import {render,screen} from "@testing-library/vue";
import EchoPage from "../pages/EchoPage";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";

describe("Echo Page", () => {
    describe("Layout", () => {
        it("has echo input", () => {
            render(EchoPage);
            const input = screen.queryByLabelText("Input");
            expect(input).toBeInTheDocument();
        });
        it("has echo button", () => {
            render(EchoPage);
            const button = screen.queryByRole("button",{name:"Echo"});
            expect(button).toBeInTheDocument();
        });
        it("button disabled initially", () => {
            render(EchoPage);
            const button = screen.queryByRole("button",{name:"Echo"});
            expect(button).toBeDisabled();
        });
    });
    describe("Interactions", () => {
        it("enables button after typing into input",async () => {
            render(EchoPage);
            const input = screen.queryByLabelText("Input");
            await userEvent.type(input,"test");
            const button = screen.queryByRole("button",{name:"Echo"});
            expect(button).toBeEnabled();
        });
        it("clears echoInput after clicking button",async () => {
            render(EchoPage);
            const input = screen.queryByLabelText("Input");
            await userEvent.type(input,"test");
            const button = screen.queryByRole("button",{name:"Echo"});
            await userEvent.click(button);
            expect(input.value).toBe("");
        });
        it("displays echo word on screen after clicking button",async () => {
            render(EchoPage);
            const input = screen.queryByLabelText("Input");
            await userEvent.type(input,"test");
            const button = screen.queryByRole("button",{name:"Echo"});
            await userEvent.click(button);
            const text = screen.queryByText("test");
            expect(text).toBeInTheDocument();
        });
    });
});
