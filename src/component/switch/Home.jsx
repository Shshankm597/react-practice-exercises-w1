import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";

export function Home() {
  const [btnTxtSize, setBtnTxtSize] = useState(24);
  const [fontStyle, setFontStyle] = useState("sans-serif");

  const mainFontStyle = {
    fontFamily: `${fontStyle}`,
    fontSize: `${btnTxtSize}px`
  };

  return (
    <div className="view-area">
      <button
        className="btnFontSize"
        onClick={() => setBtnTxtSize(btnTxtSize + 8)}
      >
        {" "}
        +{" "}
      </button>
      <button
        className="btnFontSize"
        disabled={btnTxtSize <= 16}
        onClick={() => setBtnTxtSize(btnTxtSize - 8)}
      >
        {" "}
        -{" "}
      </button>
      <div style={mainFontStyle}>
        <h4>#neogmotto </h4>
        <p>
          One person struggles, we all struggle, one person triumphs, we all
          triumph!
        </p>
      </div>
      <div>
        <button
          className="btnFont"
          onClick={() => setFontStyle(`"Montserrat",sans-serif`)}
        >
          Montserrat
        </button>
        <button
          className="btnFont"
          onClick={() => setFontStyle(`"Roboto Mono", monospace`)}
        >
          Roboto Mono
        </button>
        <button
          className="btnFont"
          onClick={() => setFontStyle(`"Open Sans", sans-serif`)}
        >
          Open Sans
        </button>

        <section className="cssBox">
          {" "}
          {Object.entries(mainFontStyle).map(
            ([key, value]) => `${key}: ${value}; `
          )}
        </section>
        <CopyToClipboard text={JSON.stringify(mainFontStyle)}>
          <button className="btnCopy"> Copy CSS </button>
        </CopyToClipboard>
      </div>
    </div>
  );
}
