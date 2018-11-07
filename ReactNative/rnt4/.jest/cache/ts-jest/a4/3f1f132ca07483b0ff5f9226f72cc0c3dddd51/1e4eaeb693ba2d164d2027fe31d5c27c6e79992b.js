"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// components/Hello.tsx
var react_1 = __importDefault(require("react"));
var react_native_1 = require("react-native");
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello(props) {
        var _this = _super.call(this, props) || this;
        _this.onIncrement = function () {
            return _this.setState({ enthusiasmLevel: _this.state.enthusiasmLevel + 1 });
        };
        _this.onDecrement = function () {
            return _this.setState({ enthusiasmLevel: _this.state.enthusiasmLevel - 1 });
        };
        _this.getExclamationMarks = function (numChars) { return Array(numChars + 1).join("!"); };
        // if ((props.enthusiasmLevel || 0) <= 0) {
        //   throw new Error("You could be a little more enthusiastic. :D");
        // }
        _this.state = {
            enthusiasmLevel: props.enthusiasmLevel || 1
        };
        return _this;
    }
    Hello.prototype.render = function () {
        return (react_1.default.createElement(react_native_1.View, { style: styles.root },
            react_1.default.createElement(react_native_1.Text, { style: styles.greeting },
                "Hello",
                " ",
                this.props.name +
                    this.getExclamationMarks(this.state.enthusiasmLevel)),
            react_1.default.createElement(react_native_1.View, { style: styles.buttons },
                react_1.default.createElement(react_native_1.View, { style: styles.button },
                    react_1.default.createElement(react_native_1.Button, { title: "-", onPress: this.onDecrement, accessibilityLabel: "decrement", color: "red" })),
                react_1.default.createElement(react_native_1.View, { style: styles.button },
                    react_1.default.createElement(react_native_1.Button, { title: "+", onPress: this.onIncrement, accessibilityLabel: "increment", color: "blue" })))));
    };
    return Hello;
}(react_1.default.Component));
exports.default = Hello;
// styles
var styles = react_native_1.StyleSheet.create({
    root: {
        alignItems: "center",
        alignSelf: "center",
        marginTop: 100
    },
    buttons: {
        flexDirection: "row",
        minHeight: 70,
        alignItems: "stretch",
        alignSelf: "center",
        borderWidth: 5
    },
    button: {
        flex: 1,
        paddingVertical: 0
    },
    greeting: {
        color: "#999",
        fontWeight: "bold"
    }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJmaWxlIjoiL1VzZXJzL25hb2NoYWVsL0Rlc2t0b3AvZ2l0L25hb2NoYWVsLWpvcmRhbi9zYW5kcGl0L1JlYWN0TmF0aXZlL3JudDQvQXBwLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1QkFBdUI7QUFDdkIsZ0RBQTBCO0FBQzFCLDZDQUE4RDtBQWE5RDtJQUFtQyx5QkFBNkI7SUFDOUQsZUFBWSxLQUFZO1FBQXhCLFlBQ0Usa0JBQU0sS0FBSyxDQUFDLFNBU2I7UUFFRCxpQkFBVyxHQUFHO1lBQ1osT0FBQSxLQUFJLENBQUMsUUFBUSxDQUFDLEVBQUUsZUFBZSxFQUFFLEtBQUksQ0FBQyxLQUFLLENBQUMsZUFBZSxHQUFHLENBQUMsRUFBRSxDQUFDO1FBQWxFLENBQWtFLENBQUM7UUFDckUsaUJBQVcsR0FBRztZQUNaLE9BQUEsS0FBSSxDQUFDLFFBQVEsQ0FBQyxFQUFFLGVBQWUsRUFBRSxLQUFJLENBQUMsS0FBSyxDQUFDLGVBQWUsR0FBRyxDQUFDLEVBQUUsQ0FBQztRQUFsRSxDQUFrRSxDQUFDO1FBQ3JFLHlCQUFtQixHQUFHLFVBQUMsUUFBZ0IsSUFBSyxPQUFBLEtBQUssQ0FBQyxRQUFRLEdBQUcsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUE3QixDQUE2QixDQUFDO1FBYnhFLDJDQUEyQztRQUMzQyxvRUFBb0U7UUFDcEUsSUFBSTtRQUVKLEtBQUksQ0FBQyxLQUFLLEdBQUc7WUFDWCxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWUsSUFBSSxDQUFDO1NBQzVDLENBQUM7O0lBQ0osQ0FBQztJQVFELHNCQUFNLEdBQU47UUFDRSxPQUFPLENBQ0wsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLElBQUk7WUFDdEIsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLFFBQVE7O2dCQUNwQixHQUFHO2dCQUNSLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSTtvQkFDZCxJQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxlQUFlLENBQUMsQ0FDakQ7WUFFUCw4QkFBQyxtQkFBSSxJQUFDLEtBQUssRUFBRSxNQUFNLENBQUMsT0FBTztnQkFDekIsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU07b0JBQ3hCLDhCQUFDLHFCQUFNLElBQ0wsS0FBSyxFQUFDLEdBQUcsRUFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFDekIsa0JBQWtCLEVBQUMsV0FBVyxFQUM5QixLQUFLLEVBQUMsS0FBSyxHQUNYLENBQ0c7Z0JBRVAsOEJBQUMsbUJBQUksSUFBQyxLQUFLLEVBQUUsTUFBTSxDQUFDLE1BQU07b0JBQ3hCLDhCQUFDLHFCQUFNLElBQ0wsS0FBSyxFQUFDLEdBQUcsRUFDVCxPQUFPLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFDekIsa0JBQWtCLEVBQUMsV0FBVyxFQUM5QixLQUFLLEVBQUMsTUFBTSxHQUNaLENBQ0csQ0FDRixDQUNGLENBQ1IsQ0FBQztJQUNKLENBQUM7SUFDSCxZQUFDO0FBQUQsQ0FBQyxBQWxERCxDQUFtQyxlQUFLLENBQUMsU0FBUyxHQWtEakQ7O0FBRUQsU0FBUztBQUVULElBQU0sTUFBTSxHQUFHLHlCQUFVLENBQUMsTUFBTSxDQUFDO0lBQy9CLElBQUksRUFBRTtRQUNKLFVBQVUsRUFBRSxRQUFRO1FBQ3BCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFNBQVMsRUFBRSxHQUFHO0tBQ2Y7SUFDRCxPQUFPLEVBQUU7UUFDUCxhQUFhLEVBQUUsS0FBSztRQUNwQixTQUFTLEVBQUUsRUFBRTtRQUNiLFVBQVUsRUFBRSxTQUFTO1FBQ3JCLFNBQVMsRUFBRSxRQUFRO1FBQ25CLFdBQVcsRUFBRSxDQUFDO0tBQ2Y7SUFDRCxNQUFNLEVBQUU7UUFDTixJQUFJLEVBQUUsQ0FBQztRQUNQLGVBQWUsRUFBRSxDQUFDO0tBQ25CO0lBQ0QsUUFBUSxFQUFFO1FBQ1IsS0FBSyxFQUFFLE1BQU07UUFDYixVQUFVLEVBQUUsTUFBTTtLQUNuQjtDQUNGLENBQUMsQ0FBQyIsIm5hbWVzIjpbXSwic291cmNlcyI6WyIvVXNlcnMvbmFvY2hhZWwvRGVza3RvcC9naXQvbmFvY2hhZWwtam9yZGFuL3NhbmRwaXQvUmVhY3ROYXRpdmUvcm50NC9BcHAudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbXBvbmVudHMvSGVsbG8udHN4XG5pbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBCdXR0b24sIFN0eWxlU2hlZXQsIFRleHQsIFZpZXcgfSBmcm9tIFwicmVhY3QtbmF0aXZlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcHMge1xuICBuYW1lPzogc3RyaW5nO1xuICBlbnRodXNpYXNtTGV2ZWw/OiBudW1iZXI7XG4gIG9uSW5jcmVtZW50PzogKCkgPT4gdm9pZDtcbiAgb25EZWNyZW1lbnQ/OiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgU3RhdGUge1xuICBlbnRodXNpYXNtTGV2ZWw6IG51bWJlcjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVsbG8gZXh0ZW5kcyBSZWFjdC5Db21wb25lbnQ8UHJvcHMsIFN0YXRlPiB7XG4gIGNvbnN0cnVjdG9yKHByb3BzOiBQcm9wcykge1xuICAgIHN1cGVyKHByb3BzKTtcblxuICAgIC8vIGlmICgocHJvcHMuZW50aHVzaWFzbUxldmVsIHx8IDApIDw9IDApIHtcbiAgICAvLyAgIHRocm93IG5ldyBFcnJvcihcIllvdSBjb3VsZCBiZSBhIGxpdHRsZSBtb3JlIGVudGh1c2lhc3RpYy4gOkRcIik7XG4gICAgLy8gfVxuXG4gICAgdGhpcy5zdGF0ZSA9IHtcbiAgICAgIGVudGh1c2lhc21MZXZlbDogcHJvcHMuZW50aHVzaWFzbUxldmVsIHx8IDFcbiAgICB9O1xuICB9XG5cbiAgb25JbmNyZW1lbnQgPSAoKSA9PlxuICAgIHRoaXMuc2V0U3RhdGUoeyBlbnRodXNpYXNtTGV2ZWw6IHRoaXMuc3RhdGUuZW50aHVzaWFzbUxldmVsICsgMSB9KTtcbiAgb25EZWNyZW1lbnQgPSAoKSA9PlxuICAgIHRoaXMuc2V0U3RhdGUoeyBlbnRodXNpYXNtTGV2ZWw6IHRoaXMuc3RhdGUuZW50aHVzaWFzbUxldmVsIC0gMSB9KTtcbiAgZ2V0RXhjbGFtYXRpb25NYXJrcyA9IChudW1DaGFyczogbnVtYmVyKSA9PiBBcnJheShudW1DaGFycyArIDEpLmpvaW4oXCIhXCIpO1xuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5yb290fT5cbiAgICAgICAgPFRleHQgc3R5bGU9e3N0eWxlcy5ncmVldGluZ30+XG4gICAgICAgICAgSGVsbG97XCIgXCJ9XG4gICAgICAgICAge3RoaXMucHJvcHMubmFtZSArXG4gICAgICAgICAgICB0aGlzLmdldEV4Y2xhbWF0aW9uTWFya3ModGhpcy5zdGF0ZS5lbnRodXNpYXNtTGV2ZWwpfVxuICAgICAgICA8L1RleHQ+XG5cbiAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5idXR0b25zfT5cbiAgICAgICAgICA8VmlldyBzdHlsZT17c3R5bGVzLmJ1dHRvbn0+XG4gICAgICAgICAgICA8QnV0dG9uXG4gICAgICAgICAgICAgIHRpdGxlPVwiLVwiXG4gICAgICAgICAgICAgIG9uUHJlc3M9e3RoaXMub25EZWNyZW1lbnR9XG4gICAgICAgICAgICAgIGFjY2Vzc2liaWxpdHlMYWJlbD1cImRlY3JlbWVudFwiXG4gICAgICAgICAgICAgIGNvbG9yPVwicmVkXCJcbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9WaWV3PlxuXG4gICAgICAgICAgPFZpZXcgc3R5bGU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgICB0aXRsZT1cIitcIlxuICAgICAgICAgICAgICBvblByZXNzPXt0aGlzLm9uSW5jcmVtZW50fVxuICAgICAgICAgICAgICBhY2Nlc3NpYmlsaXR5TGFiZWw9XCJpbmNyZW1lbnRcIlxuICAgICAgICAgICAgICBjb2xvcj1cImJsdWVcIlxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1ZpZXc+XG4gICAgICAgIDwvVmlldz5cbiAgICAgIDwvVmlldz5cbiAgICApO1xuICB9XG59XG5cbi8vIHN0eWxlc1xuXG5jb25zdCBzdHlsZXMgPSBTdHlsZVNoZWV0LmNyZWF0ZSh7XG4gIHJvb3Q6IHtcbiAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcbiAgICBtYXJnaW5Ub3A6IDEwMFxuICB9LFxuICBidXR0b25zOiB7XG4gICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcbiAgICBtaW5IZWlnaHQ6IDcwLFxuICAgIGFsaWduSXRlbXM6IFwic3RyZXRjaFwiLFxuICAgIGFsaWduU2VsZjogXCJjZW50ZXJcIixcbiAgICBib3JkZXJXaWR0aDogNVxuICB9LFxuICBidXR0b246IHtcbiAgICBmbGV4OiAxLFxuICAgIHBhZGRpbmdWZXJ0aWNhbDogMFxuICB9LFxuICBncmVldGluZzoge1xuICAgIGNvbG9yOiBcIiM5OTlcIixcbiAgICBmb250V2VpZ2h0OiBcImJvbGRcIlxuICB9XG59KTtcbiJdLCJ2ZXJzaW9uIjozfQ==