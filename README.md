# Scientific Calculator

A modern, feature-rich scientific calculator built with HTML, CSS, and JavaScript. This calculator provides both basic arithmetic operations and advanced scientific functions in a beautiful, responsive interface.

## Features

### Basic Operations
- **Addition** (+)
- **Subtraction** (-)
- **Multiplication** (×)
- **Division** (÷)
- **Modulo** (%)
- **Parentheses** for grouping operations

### Scientific Functions
- **Trigonometric Functions**
  - `sin` - Sine (degrees)
  - `cos` - Cosine (degrees)
  - `tan` - Tangent (degrees)
  - `sin⁻¹` - Inverse Sine (degrees)
  - `cos⁻¹` - Inverse Cosine (degrees)
  - `tan⁻¹` - Inverse Tangent (degrees)

- **Logarithmic Functions**
  - `log` - Base-10 logarithm
  - `ln` - Natural logarithm (base-e)

- **Power Functions**
  - `√` - Square root
  - `x^y` - Power function
  - `e^x` - Exponential function

- **Other Functions**
  - `x!` - Factorial
  - `|x|` - Absolute value
  - `π` - Pi constant (3.14159...)
  - `e` - Euler's number (2.71828...)

### Memory Functions
- **MS** - Memory Store (stores current value)
- **MR** - Memory Recall (recalls stored value)
- **M+** - Memory Add (adds current value to memory)
- **MC** - Memory Clear (clears memory)

### Additional Features
- **Clear (C)** - Clears all calculations
- **Backspace (⌫)** - Deletes last entered digit
- **History Display** - Shows previous operations
- **Error Handling** - Displays "Error" for invalid operations
- **Keyboard Support** - Full keyboard input support
- **Responsive Design** - Works on desktop and mobile devices

## Keyboard Shortcuts

| Key | Function |
|-----|----------|
| `0-9` | Number input |
| `.` | Decimal point |
| `+` | Addition |
| `-` | Subtraction |
| `*` | Multiplication |
| `/` | Division |
| `%` | Modulo |
| `Enter` or `=` | Calculate result |
| `Escape` | Clear all |
| `Backspace` | Delete last digit |
| `(` or `)` | Parentheses |

## Usage

1. **Basic Calculations**
   - Enter numbers using the number pad
   - Use operators (+, -, ×, ÷) for calculations
   - Press `=` or `Enter` to see the result

2. **Scientific Functions**
   - Enter a number
   - Click the desired scientific function button
   - The result will be displayed immediately

3. **Memory Operations**
   - Use MS to store a value in memory
   - Use MR to recall the stored value
   - Use M+ to add to the stored value
   - Use MC to clear the memory

4. **Power Function (x^y)**
   - Enter the base number
   - Click `x^y`
   - Enter the exponent
   - Press `=` to calculate

## Design Features

- **Modern UI** - Dark theme with gradient backgrounds
- **Responsive** - Adapts to different screen sizes
- **Smooth Animations** - Button hover and press effects
- **Glass Morphism** - Backdrop blur effects
- **Accessibility** - High contrast and readable fonts

## Browser Compatibility

This calculator works on all modern browsers:
- Chrome
- Firefox
- Safari
- Edge

## Getting Started

1. Open `index.html` in your web browser
2. The calculator is ready to use immediately
3. No installation or setup required

## File Structure

```
scientific-calculator/
├── index.html      # Main HTML structure
├── styles.css      # CSS styling and animations
├── script.js       # JavaScript functionality
└── README.md       # This documentation
```

## Technical Details

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with gradients and animations
- **Vanilla JavaScript** - No external dependencies
- **ES6+** - Modern JavaScript features
- **Responsive Design** - Mobile-first approach

## Error Handling

The calculator handles various error conditions:
- Division by zero
- Invalid mathematical operations
- Overflow conditions
- Invalid input for scientific functions

When an error occurs, "Error" is displayed on the screen.

## Contributing

Feel free to enhance this calculator by adding:
- Additional scientific functions
- Unit conversions
- History of calculations
- Export functionality
- Theme customization options 