import "./styles.css";

export default function App() {
  const italicsText = (title, text) => {
    if (title === undefined) return ""; // Return empty string if title is undefined
    const titleArray = title.split(text);

    if (titleArray.length > 1) {
      const titlePlus = titleArray.reduce((acc, item, index) => {
        if (index !== 0) {
          acc.push(`<i>${text}</i>`); // Add the <i> tags as a string
        }
        acc.push(item); // Add the string part of the title
        return acc;
      }, []);
      return titlePlus.join("");
    } else {
      return title; // Return the title as is if no match is found
    }
  };
  var test = italicsText(
    "Select to learn more about the CIBC Corporate Classic Visa Plus Card",
    "Plus"
  );

  return (
    <div className="App">
      {console.log(test)}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
