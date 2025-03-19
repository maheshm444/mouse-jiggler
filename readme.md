# **Mouse Jiggler Code**

This is a Jiggler code where in you just have to execute the exe file based on your OS.

The mouse pointer will be moved every second which let your applications active (specially teams or slack)

## For Installation or Contribution

`npm i`

`node index.js`

## For exporting as specific format

`npm install -g pkg`

Add a `bin` entry to define the main file:

```json
package.json
{
  "bin": "app.js"
}

```

For Windows
`pkg . --targets win`

For Macos (.dmg)

`pkg . --targets macos`

For Linux (Optional)

`pkg . --targets linux`
