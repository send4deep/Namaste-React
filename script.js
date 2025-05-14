const element = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "Heading 1 form React"),
    React.createElement("h2", { id: "heading" }, "Heading 2 form React"),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", { id: "heading" }, "Heading 1 form React"),
    React.createElement("h2", { id: "heading" }, "Heading 2 form React"),
  ]),
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(element);
