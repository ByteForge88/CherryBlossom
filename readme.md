# CherryBlossom

A vibrant sakura-pink, petal-cream, and warm-bark semi-dark Acode app and editor theme by **ByteForge88**.

CherryBlossom is inspired by spring sakura blossoms: richer petal pinks, soft ivory highlights, peach, and warm bark/tan accents over a deep plum-brown background. It is more colorful and lively without becoming neon.

## PHP example

For code such as:

```php
use pocketmine\plugin\PluginBase;
```

- `pocketmine\plugin` uses a warm **namespace tan**.
- `PluginBase` uses a lighter **class/type tan**, so the class remains visually distinct.
- PHP keywords such as `use`, `class`, `public`, `static`, and `return` use pastel cherry pink.
- Comments are muted and *italic*.

## Comprehensive CodeMirror / Lezer highlighting

CherryBlossom styles the standard CodeMirror/Lezer syntax tag set, including:

- Variables, definitions, locals, constants, functions, standard names, and special variables
- Namespaces, classes, types, tags, labels, macros, properties, and attributes
- Strings, documentation strings, characters, attribute values, and special strings
- Numbers, integers, floats, booleans, null, atoms, regex, escapes, colors, and URLs
- Keywords, modifiers, control-flow keywords, definition/module keywords, and operator keywords
- Arithmetic, logical, bitwise, comparison, update, definition, type, dereference, and control operators
- Brackets, braces, parentheses, square/angle brackets, separators, and punctuation
- Line, block, documentation, and general comments
- Headings, lists, quotes, emphasis, strong text, links, monospace, and strikethrough
- Inserted, deleted, changed, invalid, annotation, metadata, and processing instructions

Actual highlighting depends on what tags the active language grammar emits, but CherryBlossom provides colors for the complete standard tag vocabulary used by CodeMirror 6.

## Palette

- App background: `#261B21`
- Editor background: `#21181D`
- Panel: `#33242B`
- Sakura pink: `#F29BB2`
- Soft petal pink: `#F7B9C8`
- Namespace bark: `#D0AC82`
- Class/type cream-tan: `#F0C9A6`
- Function peach: `#EBAA93`
- Variable petal cream: `#F2D4CE`
- String peach-cream: `#EFC09D`
- Number warm gold: `#E0B06D`
- Comment warm muted rose: `#AA918B` (*italic*)

## Build

```bash
npm install
npm run build
```

The build command creates `plugin.zip` in the project root.

## Install in Acode

1. Build the plugin or use the included `plugin.zip`.
2. Open Acode and install the ZIP locally.
3. Select **CherryBlossom** as the app theme.
4. Select **CherryBlossom** as the editor theme if Acode does not switch it automatically.
