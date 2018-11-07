"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// components/__tests__/App.tsx
var react_1 = __importDefault(require("react"));
var react_test_renderer_1 = __importDefault(require("react-test-renderer"));
var App_1 = __importDefault(require("../App"));
it("renders correctly with defaults", function () {
    var button = react_test_renderer_1.default
        .create(react_1.default.createElement(App_1.default, { name: "World", enthusiasmLevel: 1 }))
        .toJSON();
    expect(button).toMatchSnapshot();
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL25hb2NoYWVsL0Rlc2t0b3AvZ2l0L25hb2NoYWVsLWpvcmRhbi9zYW5kcGl0L1JlYWN0TmF0aXZlL3JudDQvX190ZXN0c19fL0FwcC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSwrQkFBK0I7QUFDL0IsZ0RBQTBCO0FBQzFCLDRFQUEyQztBQUUzQywrQ0FBeUI7QUFFekIsRUFBRSxDQUFDLGlDQUFpQyxFQUFFO0lBQ3BDLElBQU0sTUFBTSxHQUFHLDZCQUFRO1NBQ3BCLE1BQU0sQ0FBQyw4QkFBQyxhQUFHLElBQUMsSUFBSSxFQUFDLE9BQU8sRUFBQyxlQUFlLEVBQUUsQ0FBQyxHQUFJLENBQUM7U0FDaEQsTUFBTSxFQUFFLENBQUM7SUFDWixNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsZUFBZSxFQUFFLENBQUM7QUFDbkMsQ0FBQyxDQUFDLENBQUMiLCJuYW1lcyI6W10sInNvdXJjZXMiOlsiL1VzZXJzL25hb2NoYWVsL0Rlc2t0b3AvZ2l0L25hb2NoYWVsLWpvcmRhbi9zYW5kcGl0L1JlYWN0TmF0aXZlL3JudDQvX190ZXN0c19fL0FwcC50c3giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gY29tcG9uZW50cy9fX3Rlc3RzX18vQXBwLnRzeFxuaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHJlbmRlcmVyIGZyb20gXCJyZWFjdC10ZXN0LXJlbmRlcmVyXCI7XG5cbmltcG9ydCBBcHAgZnJvbSBcIi4uL0FwcFwiO1xuXG5pdChcInJlbmRlcnMgY29ycmVjdGx5IHdpdGggZGVmYXVsdHNcIiwgKCkgPT4ge1xuICBjb25zdCBidXR0b24gPSByZW5kZXJlclxuICAgIC5jcmVhdGUoPEFwcCBuYW1lPVwiV29ybGRcIiBlbnRodXNpYXNtTGV2ZWw9ezF9IC8+KVxuICAgIC50b0pTT04oKTtcbiAgZXhwZWN0KGJ1dHRvbikudG9NYXRjaFNuYXBzaG90KCk7XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==