/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        orange:          "#fa5b35",
        black:           "#151a21",
        grey:            "#7c7c7c",
        white:           "#ffffff",
        "pale-violet-1": "#f7f1fb",
        "pale-violet-2": "#f3ecf9",
        validations:     "#02b089",
        "color-24":      "#ebe1ee",
        "color-10":      "#c9caea",
      },
      fontFamily: {
        "proxima-soft": ['"Proxima Soft"', "sans-serif"],
      },
      fontSize: {
        // [fontSize, { lineHeight }]
        "title":           ["80px",  { lineHeight: "100px" }],
        "h1":              ["64px",  { lineHeight: "80px"  }],
        "h2":              ["48px",  { lineHeight: "56px"  }],
        "h3":              ["36px",  { lineHeight: "44px"  }],
        "big-body-1":      ["24px",  { lineHeight: "32px"  }],
        "big-body-1-bold": ["24px",  { lineHeight: "32px"  }],
        "big-body-bold":   ["20px",  { lineHeight: "24px"  }],
        "big-body":        ["18px",  { lineHeight: "28px"  }],
        "body-bold":       ["16px",  { lineHeight: "24px"  }],
        "button-text":     ["16px",  { lineHeight: "24px"  }],
        "mini-text":       ["12px",  { lineHeight: "18px"  }],
      },
      fontWeight: {
        regular:   "400",
        bold:      "700",
        extrabold: "800",
      },
    },
  },
  plugins: [],
}
